import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { BotTurn, Message, QuickReply, Scheme } from "@/lib/types";
import { retrieveWithMeta } from "@/lib/chat/retrieval";
import {
  buildMessages,
  MAX_HISTORY,
  isComparisonIntent,
  isGrievanceIntent,
  type Prompt,
} from "@/lib/chat/systemPrompt";
import { sanitizeInput, checkInput, validateOutput, allowedHostsFor } from "@/lib/chat/guardrail";
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

function fallbackJson(turn: BotTurn, init?: ResponseInit): Response {
  return new Response(JSON.stringify(turn), {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
}

/**
 * Read the body with a hard byte ceiling. The Content-Length header alone is
 * not enough — a chunked request omits it entirely, which let a multi-megabyte
 * payload through and forced the server to buffer and parse all of it.
 */
async function readBodyCapped(req: Request, maxBytes: number): Promise<string | null> {
  const declared = Number(req.headers.get("content-length") ?? 0);
  if (Number.isFinite(declared) && declared > maxBytes) return null;

  const reader = req.body?.getReader();
  if (!reader) return "";

  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel().catch(() => {});
      return null;
    }
    chunks.push(value);
  }

  const buf = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) {
    buf.set(c, offset);
    offset += c.byteLength;
  }
  return new TextDecoder().decode(buf);
}

export async function POST(req: Request): Promise<Response> {
  const t0 = Date.now();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ipHash = hashIp(ip);

  // Cross-instance rate limiting via Neon DB. Kicked off immediately and only
  // awaited once we actually need the answer — it only needs the IP, so it
  // can run concurrently with reading/parsing the body instead of adding its
  // full round-trip to the front of every request.
  const limitedPromise = isRateLimited(ip);

  const raw = await readBodyCapped(req, MAX_BODY_BYTES);
  if (raw === null) {
    return new Response(JSON.stringify({ error: "Payload too large" }), {
      status: 413,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: { message?: string; history?: Message[]; lang?: string };
  try {
    body = JSON.parse(raw) as typeof body;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
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
    void logChat({ ipHash, message, schemeCount: 0, isFallback: false, isComparison: false, isGrievance: false, isBlocked: true, blockReason: guard.reason, latencyMs: Date.now() - t0 });
    return fallbackJson(guard.response);
  }

  if (await limitedPromise) {
    return fallbackJson(
      {
        messages: [{ content: "Too many requests. Please wait a moment before trying again." }],
        quickReplies: [{ label: "Try again", send: "What scholarships am I eligible for?" }],
      },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  const lang = typeof body.lang === "string" ? body.lang.slice(0, 8) : undefined;
  // History is client-supplied, so validate the role and cap each turn's length
  // rather than trusting whatever arrives.
  const history: Message[] = (Array.isArray(body.history) ? body.history : [])
    .filter(
      (m): m is Message =>
        !!m && typeof m.content === "string" && (m.role === "user" || m.role === "assistant"),
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ ...m, content: sanitizeInput(m.content).slice(0, MAX_MESSAGE_CHARS) }));

  const hasBackend = process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY;
  if (!hasBackend && process.env.NODE_ENV !== "production") {
    const { mockEngine } = await import("@/lib/chat/mockEngine");
    return fallbackJson(await mockEngine.send(message, history).catch(() => ({
      messages: [{ content: "Sorry, something went wrong." }],
    })));
  }

  let schemes: Scheme[] = [];
  let matched = true;
  try {
    const r = await retrieveWithMeta(message, history);
    schemes = r.schemes;
    matched = r.matched;
  } catch {
    // continue with empty schemes — LLM will say no matches
  }

  // Detect intent modes
  const comparisonMode = isComparisonIntent(message);
  const grievanceMode = isGrievanceIntent(message);

  // Fire-and-forget — the function stays alive for the duration of the stream
  void logChat({
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

  // Only surface scheme cards when the message actually matched something —
  // an empty intent + no semantic hit means `schemes` is just a "most recently
  // reviewed" filler list, not a real answer to show.
  const displaySchemes = matched ? schemes : [];

  // The model sees exactly what the user sees. Feeding it the filler list while
  // the UI rendered nothing made it name schemes with no card, no link and no
  // way to act on them, which measured 3 times in 6 on plain greetings.
  const prompt = buildMessages(message, history, displaySchemes, lang, {
    comparisonMode,
    grievanceMode,
    matched,
  });
  const quickReplies = buildQuickReplies(displaySchemes, displaySchemes.length > 0);
  // Portals we are actively citing this turn are trusted for link validation;
  // many legitimate scheme portals sit outside the .gov.in suffix list.
  const allowedHosts = allowedHostsFor(displaySchemes.map((s) => s.officialPortalUrl));

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (obj: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`));

      // Send scheme metadata immediately so UI can render cards while text streams
      send({
        type: "meta",
        schemeResults: displaySchemes.length ? displaySchemes : undefined,
        quickReplies,
        comparisonMode: comparisonMode || undefined,
      });

      try {
        await streamLLM(prompt, send, allowedHosts);
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
  prompt: Prompt,
  send: (obj: unknown) => void,
  allowedHosts: Set<string>,
): Promise<void> {
  const { system, messages } = prompt;

  // Try Groq with one retry on rate limit
  if (process.env.GROQ_API_KEY) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
        const { textStream } = streamText({
          model: groq("llama-3.3-70b-versatile"),
          system,
          messages,
        });
        let fullText = "";
        for await (const chunk of textStream) {
          fullText += chunk;
          send({ type: "token", text: chunk });
        }
        // Empty completion (content filter, transient issue) — fall through to Gemini
        if (!fullText) break;
        // Validate output before marking done (strip non-.gov.in URLs etc.)
        const validated = validateOutput(fullText, allowedHosts);
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
        system,
        messages,
      });
      let fullText = "";
      for await (const chunk of textStream) {
        fullText += chunk;
        send({ type: "token", text: chunk });
      }
      // Empty completion — fall through to BUSY_MESSAGE
      if (!fullText) throw new Error("empty completion");
      const validated = validateOutput(fullText, allowedHosts);
      if (validated !== fullText) send({ type: "replace", text: validated });
      return;
    } catch {
      // fall through
    }
  }

  send({ type: "token", text: BUSY_MESSAGE });
}
