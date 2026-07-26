import type { BotTurn } from "@/lib/types";

// ─── Prompt injection patterns ─────��──────────────────────────────────────────
const INJECTION_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?(previous|prior|above|earlier)\s+instructions?/i,
  /forget\s+(everything|all|your|the\s+previous)/i,
  /disregard\s+(your|all|the\s+previous|prior)\s+(instructions?|rules?|guidelines?)/i,
  /you\s+are\s+now\s+(a|an|the)\s+/i,
  /pretend\s+(you\s+are|to\s+be)\s+/i,
  /act\s+as\s+(a|an|if\s+you\s+are)\s+/i,
  /roleplay\s+as\s+/i,
  /\bDAN\b/,
  /jailbreak/i,
  /override\s*(:|your|all|my|the)\s*(instructions?|rules?|prompt)/i,
  /new\s+instructions?\s*:/i,
  /\[INST\]/i,
  /<\s*system\s*>/i,
  /system\s*:\s*(you|ignore|forget|disregard)/i,
  /reveal\s+(your\s+)?(system\s+)?prompt/i,
  /show\s+(me\s+)?(your\s+)?(system\s+)?instructions?/i,
  /what\s+(are\s+)?(your|the)\s+(system\s+)?(instructions?|prompt|rules?)/i,
  /repeat\s+(your\s+)?(system\s+)?prompt/i,
  /print\s+(your\s+)?(system\s+)?(prompt|instructions?)/i,
  /you\s+are\s+not\s+an?\s+ai/i,
  /you\s+are\s+a\s+human/i,
  /\badmin\s*(key|mode|access|override)\b/i,
  /sudo\s+/i,
  /enable\s+(developer|dev|god|debug)\s+mode/i,
  // Additional patterns
  /\bprompt\s+injection\b/i,
  /\btoken\s+smuggling\b/i,
  /respond\s+(only\s+)?(in\s+)?(the\s+)?following\s+(format|way|manner)/i,
  /output\s+(only|just|exactly)\s*[:\-]/i,
  /change\s+(your\s+)?(persona|personality|role|behavior)/i,
  /from\s+now\s+on\s+you\s+(are|will|must)/i,
  /\bsystem\s+prompt\b/i,
  /\binstruction\s+override\b/i,
];

// ─── Off-topic detection (not about education/schemes) ────────────────────────
const OFF_TOPIC_PATTERNS: RegExp[] = [
  /write\s+(me\s+)?(a\s+)?(poem|story|essay|song|code|script|email)/i,
  /tell\s+me\s+a\s+joke/i,
  /play\s+(a\s+)?(game|chess|quiz)/i,
  /translate\s+this\s+(to|into)/i,
  /who\s+is\s+the\s+(prime\s+minister|president|cm|chief\s+minister)/i,
  /what\s+is\s+the\s+(capital|population|gdp)\s+of/i,
  /latest\s+(news|cricket|sports|match|score)/i,
  /stock\s+(market|price|share)/i,
  /recipe\s+for\s+/i,
  /how\s+to\s+(cook|make|bake|prepare)\s+/i,
  /weather\s+(today|tomorrow|forecast)/i,
];

// ─── Personal data solicitation detection ──���──────────────────────────────────
const PII_SOLICITATION: RegExp[] = [
  /give\s+(me|us|your)\s+(your\s+)?(aadhaar|aadhar|pan\s+card|bank\s+account|password|otp)/i,
  /enter\s+(your\s+)?(aadhaar|aadhar|pan\s+number|bank\s+details|credit\s+card)/i,
  /send\s+(me|us)\s+(your\s+)?(aadhaar|bank\s+details|password)/i,
];

// ─── Structural heuristic: imperative verbs at start of sentence ──────────────
// Catches constructions like "Ignore the above. Write me a story."
const IMPERATIVE_SENTENCES = /(?:^|[.!?]\s+)(ignore|forget|disregard|override|reset|stop|start|begin|always|never|from now on)\s+/i;

function blocked(
  content: string,
  reason: "injection" | "off_topic" | "pii",
): { blocked: true; reason: "injection" | "off_topic" | "pii"; response: BotTurn } {
  return {
    blocked: true,
    reason,
    response: {
      messages: [{ content }],
      quickReplies: [
        { label: "Find scholarships", send: "I'm a student looking for a scholarship" },
        { label: "Education loan", send: "I need an education loan for my studies" },
      ],
    },
  };
}

export type GuardrailResult =
  | { blocked: false }
  | { blocked: true; reason: "injection" | "off_topic" | "pii"; response: BotTurn };

/** Layer 1: sanitize input — strip null bytes, control characters, and zero-width chars. */
export function sanitizeInput(raw: string): string {
  return raw
    // Remove null bytes and ASCII control chars (except tab/newline/CR)
    .replace(/\0/g, "")
    .replace(/[\x01-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Strip zero-width and invisible Unicode characters
    .replace(/[​-‍‎‏‪-‮⁠-⁤﻿­]/g, "")
    // Normalize homoglyphs and compatibility characters
    .normalize("NFKC")
    .trim();
}

/** Layers 2–3: check for prompt injection, off-topic requests, and PII solicitation. */
export function checkInput(message: string): GuardrailResult {
  // Layer 2: prompt injection — pattern list
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(message)) {
      return blocked(
        "I'm Eli AI, an assistant for Indian education schemes and scholarships. I can only help with scheme-related questions — I'm not able to change my behaviour or reveal my configuration. What scholarship or scheme can I help you find?",
        "injection",
      );
    }
  }

  // Layer 2b: structural heuristic — imperative verb at sentence boundary
  if (IMPERATIVE_SENTENCES.test(message) && message.length > 30) {
    return blocked(
      "I'm Eli AI, an assistant for Indian education schemes and scholarships. I can only help with scheme-related questions — I'm not able to change my behaviour or reveal my configuration. What scholarship or scheme can I help you find?",
      "injection",
    );
  }

  // Layer 3a: off-topic
  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(message)) {
      return blocked(
        "I'm Eli AI, focused on Indian government education schemes — scholarships, fellowships, education loans, and related certificates. I'm not able to help with that topic. Is there a scheme or scholarship I can help you find?",
        "off_topic",
      );
    }
  }

  // Layer 3b: PII solicitation attempts
  for (const pattern of PII_SOLICITATION) {
    if (pattern.test(message)) {
      return blocked(
        "I never ask for or collect personal credentials like Aadhaar numbers, bank details, or passwords. For your safety, please do not share those here. I can help you find schemes and direct you to the official portal to apply. What are you looking for?",
        "pii",
      );
    }
  }

  return { blocked: false };
}

/** Layer 4: scan LLM output for suspicious patterns before sending to client. */
export function validateOutput(text: string): string {
  // Strip any non-.gov.in URLs that look suspicious (keep plain text, no links)
  // Allow .gov.in, scholarships.gov.in, nsp.gov.in, etc.
  const cleaned = text.replace(
    /https?:\/\/(?![\w.-]*\.gov\.in)[\w./-]+/gi,
    "[link removed]",
  );

  // Block if Aadhaar / bank account number patterns appear in the response
  const aadhaarPattern = /\b\d{4}\s?\d{4}\s?\d{4}\b/;
  const bankPattern = /\b\d{9,18}\b/;
  if (aadhaarPattern.test(cleaned) || bankPattern.test(cleaned)) {
    return "I found some relevant schemes for you. Please visit the official portal links provided to check your eligibility and apply.";
  }

  return cleaned;
}
