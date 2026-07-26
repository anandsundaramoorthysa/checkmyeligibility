import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { BotTurn, Message, QuickReply, Scheme } from "@/lib/types";
import { retrieve } from "@/lib/chat/retrieval";
import { buildMessages, MAX_HISTORY, isComparisonIntent, isGrievanceIntent } from "@/lib/chat/systemPrompt";
import { sanitizeInput, checkInput, validateOutput } from "@/lib/chat/guardrail";
import { isRateLimited } from "@/lib/chat/rateLimiter";
import { logChat, hashIp } from "@/lib/chat/chatLogger";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 64 * 1024;
const MAX_MESSAGE_CHARS = 2000;

const BUSY_MESSAGE =
  "I'm handling a lot of requests right now. Please try again in a moment, or visit scholarships.gov.in directly.";

function buildQuickReplies(schemes: Scheme[], hasResults: boolean): QuickReply[] {
  if (hasResults && schemes.length > 0) {
    const replies: QuickReply[] = [
      { label: "Documents needed", send: "What documents do I need to apply?" },
      { label: "How to apply", send: "How do I apply for these schemes?" },
    ];
    if (schemes.length >= 2) {
      replies.push({ label: "More scholarships", send: "Are there more scholarships I can apply for?" });
    }
    return replies;
  }
  return [
    { label: "I need a scholarship", send: "I'm a student looking for a scholarship" },
    { label: "I'm SC/ST category", send: "I'm an SC/ST student looking for education support" },
    { label: "Education loan", send: "I need an education loan for my studies" },
    { label: "I'm doing a PhD", send: "I'm a PhD student looking for a fellowship or research grant" },
  ];
}

function isRateLimit(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err);
  return msg.includes("429") || msg.toLowerCase().includes("rate limit");
}

function fallbackJson(turn: BotTurn): Response {
  return new Response(JSON.stringify(turn), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request): Promise<Response> {
  const t0 = Date.now();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ipHash = hashIp(ip);

  // Cross-instance rate limiting via Neon DB
  const limited = await isRateLimited(ip);
  if (limited) {
    return fallbackJson({
      messages: [{ content: "Too many requests. Please wait a moment before trying again." }],
      quickReplies: [{ label: "Try again", send: "What scholarships am I eligible for?" }],
    });
  }

  const declaredLen = Number(req.headers.get("content-length") ?? 0);
  if (declaredLen > MAX_BODY_BYTES) {
    return new Response(JSON.stringify({ error: "Payload too large" }), { status: 413 });
  }

  let body: { message?: string; history?: Message[]; lang?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
  }

  const rawMessage = typeof body.message === "string" ? body.message : "";
  const message = sanitizeInput(rawMessage);
  if (!message) return new Response(JSON.stringify({ error: "Missing 'message'" }), { status: 400 });
  if (message.length > MAX_MESSAGE_CHARS) {
    return new Response(JSON.stringify({ error: "Message too long" }), { status: 413 });
  }

  // Guardrail check — block prompt injections, off-topic, PII solicitation
  const guard = checkInput(message);
  if (guard.blocked) {
    await logChat({ ipHash, message, schemeCount: 0, isFallback: false, isComparison: false, isGrievance: false, isBlocked: true, blockReason: guard.reason, latencyMs: Date.now() - t0 });
    return fallbackJson(guard.response);
  }

  const lang = typeof body.lang === "string" ? body.lang : undefined;
  const history = (Array.isArray(body.history) ? body.history : [])
    .filter((m): m is Message => !!m && typeof m.content === "string")
    .slice(-MAX_HISTORY);

  const hasBackend = process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY;
  if (!hasBackend && process.env.NODE_ENV !== "production") {
    const { mockEngine } = await import("@/lib/chat/mockEngine");
    return fallbackJson(await mockEngine.send(message, history).catch(() => ({
      messages: [{ content: "Sorry, something went wrong." }],
    })));
  }

  let schemes: Scheme[] = [];
  try {
    schemes = await retrieve(message, history);
  } catch {
    // continue with empty schemes — LLM will say no matches
  }

  // Detect intent modes
  const comparisonMode = isComparisonIntent(message);
  const grievanceMode = isGrievanceIntent(message);

  // Log the request before streaming starts — guaranteed to insert before response headers go out
  await logChat({
    ipHash,
    message,
    schemeCount: schemes.length,
    schemeSlugs: schemes.map((s) => s.slug).filter(Boolean),
    isFallback: schemes.length === 0,
    isComparison: comparisonMode,
    isGrievance: grievanceMode,
    isBlocked: false,
    latencyMs: Date.now() - t0,
  });

  const llmMessages = buildMessages(message, history, schemes, lang, { comparisonMode, grievanceMode });
  const quickReplies = buildQuickReplies(schemes, schemes.length > 0);

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (obj: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`));

      // Send scheme metadata immediately so UI can render cards while text streams
      send({
        type: "meta",
        schemeResults: schemes.length ? schemes : undefined,
        quickReplies,
        comparisonMode: comparisonMode || undefined,
      });

      try {
        await streamLLM(llmMessages, send);
      } catch {
        send({ type: "token", text: BUSY_MESSAGE });
      }

      send({ type: "done" });
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
    },
  });
}

async function streamLLM(
  messages: { role: "system" | "user" | "assistant"; content: string }[],
  send: (obj: unknown) => void,
): Promise<void> {
  // Try Groq with one retry on rate limit
  if (process.env.GROQ_API_KEY) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
        const { textStream } = streamText({
          model: groq("llama-3.3-70b-versatile"),
          messages,
        });
        let fullText = "";
        for await (const chunk of textStream) {
          fullText += chunk;
          send({ type: "token", text: chunk });
        }
        // Validate output before marking done (strip non-.gov.in URLs etc.)
        const validated = validateOutput(fullText);
        if (validated !== fullText) {
          // Output was modified — tell client to replace content
          send({ type: "replace", text: validated });
        }
        return;
      } catch (err) {
        if (attempt === 0 && isRateLimit(err)) {
          await new Promise((r) => setTimeout(r, 1200));
          continue;
        }
        break;
      }
    }
  }

  // Gemini fallback
  if (process.env.GEMINI_API_KEY) {
    try {
      const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
      const { textStream } = streamText({
        model: google("gemini-2.5-flash"),
        messages,
      });
      let fullText = "";
      for await (const chunk of textStream) {
        fullText += chunk;
        send({ type: "token", text: chunk });
      }
      const validated = validateOutput(fullText);
      if (validated !== fullText) send({ type: "replace", text: validated });
      return;
    } catch {
      // fall through
    }
  }

  send({ type: "token", text: BUSY_MESSAGE });
}
