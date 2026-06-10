import type { BotTurn, QuickReply, Scheme } from "@/lib/types";
import { searchSchemes } from "@/lib/data";
import { SITE } from "@/lib/site";
import type { ChatEngine } from "./engine";

/**
 * Local, deterministic mock chat engine. No LLM, no network. It recognises a
 * handful of intents by keyword, pulls relevant sample schemes via
 * `searchSchemes`, and replies in plain language. Phase-2 replaces the internals
 * with a real RAG pipeline behind the same `ChatEngine` interface.
 */

const MAX_RESULTS = 3;

const STARTER_REPLIES: QuickReply[] = [
  { label: "I'm a farmer", send: "I'm a farmer looking for schemes" },
  { label: "I'm a student", send: "I'm a student looking for a scholarship" },
  { label: "I'm a senior citizen", send: "I'm a senior citizen looking for a pension" },
  { label: "I run a small business", send: "I run a small business and need a loan" },
];

const OFFER = "Would you like me to check anything else for you?";

interface Intent {
  /** Words/phrases that signal this intent. */
  keywords: string[];
  /** Plain-language lead-in for the reply (before scheme cards). */
  reply: string;
  /** Query handed to searchSchemes to fetch the relevant sample schemes. */
  query: string;
  quickReplies?: QuickReply[];
}

const INTENTS: Intent[] = [
  {
    keywords: ["farmer", "farming", "agriculture", "crop", "kisan", "cultivat", "land", "harvest"],
    reply:
      "Thanks for telling me. Farmers can tap into income support and crop protection. Here are a couple of schemes that may fit your situation:",
    query: "farmer agriculture crop income",
    quickReplies: [
      { label: "Crop insurance", send: "Tell me about crop insurance" },
      { label: "Income support", send: "I want income support for my farm" },
      { label: "I'm also a senior citizen", send: "I'm a senior citizen looking for a pension" },
    ],
  },
  {
    keywords: ["student", "scholarship", "study", "studies", "college", "school", "education", "tuition"],
    reply:
      "Got it. There are scholarships and savings schemes that help students with the cost of education. These look relevant:",
    query: "student scholarship education",
    quickReplies: [
      { label: "Girl-child savings", send: "Savings scheme for a girl child" },
      { label: "Documents I'll need", send: "What documents do I need for a scholarship?" },
      { label: "I'm a farmer", send: "I'm a farmer looking for schemes" },
    ],
  },
  {
    keywords: ["senior", "old age", "pension", "elderly", "retire", "retirement", "aged"],
    reply:
      "Understood. Senior citizens and people planning for retirement have pension options. Here is what may help:",
    query: "pension senior citizen old age retirement",
    quickReplies: [
      { label: "Pension after 60", send: "Pension scheme after the age of 60" },
      { label: "Documents I'll need", send: "What documents do I need for a pension?" },
      { label: "I run a small business", send: "I run a small business and need a loan" },
    ],
  },
  {
    keywords: [
      "business",
      "loan",
      "entrepreneur",
      "shop",
      "enterprise",
      "startup",
      "self-employ",
      "self employ",
      "credit",
      "mudra",
      "artisan",
    ],
    reply:
      "Great. There are credit and loan schemes for small businesses, women entrepreneurs, and artisans. A few that may suit you:",
    query: "business loan entrepreneur credit women",
    quickReplies: [
      { label: "Loan for women", send: "Business loan for women entrepreneurs" },
      { label: "Micro-loan", send: "Small micro-loan for my shop" },
      { label: "I'm a student", send: "I'm a student looking for a scholarship" },
    ],
  },
  {
    keywords: ["woman", "women", "girl", "mother", "maternity", "pregnan", "widow", "female"],
    reply:
      "Thanks. There are schemes supporting women — maternity benefit, business credit, and the girl child. These may be relevant:",
    query: "women girl maternity entrepreneur",
    quickReplies: [
      { label: "Maternity benefit", send: "Maternity benefit for pregnant women" },
      { label: "Loan for women", send: "Business loan for women entrepreneurs" },
    ],
  },
  {
    keywords: ["house", "housing", "home", "awas", "shelter", "pucca", "rent"],
    reply:
      "Got it. There is housing support to help build or buy a home. Here is what may apply:",
    query: "housing home awas subsidy",
    quickReplies: [
      { label: "Documents I'll need", send: "What documents do I need for housing?" },
      { label: "I'm a farmer", send: "I'm a farmer looking for schemes" },
    ],
  },
  {
    keywords: ["health", "hospital", "medical", "insurance", "treatment", "illness", "ayushman", "lpg", "gas"],
    reply:
      "Understood. There are health insurance and welfare schemes that lower medical and household costs. These may help:",
    query: "health insurance hospital ayushman",
    quickReplies: [
      { label: "Hospital cover", send: "Cashless hospital treatment cover" },
      { label: "Clean cooking gas", send: "LPG gas connection scheme" },
    ],
  },
  {
    keywords: ["disab", "divyang", "handicap", "assistive", "wheelchair"],
    reply:
      "Thanks. There is support for persons with disabilities, including assistive devices. Here is what may apply:",
    query: "disability assistive divyangjan",
    quickReplies: [
      { label: "Assistive devices", send: "Assistive devices for disability" },
      { label: "Documents I'll need", send: "What documents do I need?" },
    ],
  },
  {
    keywords: ["skill", "training", "job", "employment", "unemployed", "course", "youth"],
    reply:
      "Got it. There are skilling and employment schemes that train you and improve job prospects. These look relevant:",
    query: "skill training employment youth",
    quickReplies: [
      { label: "Skill training", send: "Free skill training programme" },
      { label: "I run a small business", send: "I run a small business and need a loan" },
    ],
  },
  {
    keywords: ["bank account", "jan dhan", "financial inclusion", "savings account", "rupay"],
    reply:
      "There are financial-inclusion schemes that open a zero-balance bank account with basic benefits. Here is what may help:",
    query: "bank account financial inclusion jan dhan savings",
  },
];

/** Map raw user text to a Scheme[] for an intent, capped and de-duplicated. */
function lookup(query: string): Scheme[] {
  return searchSchemes(query).slice(0, MAX_RESULTS);
}

/** Build a turn from a single intent match, attaching real scheme results. */
function intentTurn(intent: Intent): BotTurn {
  const schemes = lookup(intent.query);
  const lead = schemes.length
    ? intent.reply
    : "I understand. I don't have a matching sample scheme on hand just yet, but here are some starting points.";
  return {
    messages: [{ content: `${lead}\n\n${OFFER}` }],
    schemeResults: schemes.length ? schemes : undefined,
    quickReplies: intent.quickReplies ?? STARTER_REPLIES,
  };
}

/** Certificate questions route to the dedicated /certificates section. */
function certificateTurn(): BotTurn {
  return {
    messages: [
      {
        content:
          "For documents like an **income certificate**, **community certificate**, or **residence certificate**, head to our [Certificates section](/certificates). It explains who can apply, the documents you'll need, the steps, and links to the official portal.\n\n" +
          OFFER,
      },
    ],
    quickReplies: STARTER_REPLIES,
  };
}

/** Nothing matched — keep it friendly and offer the starters. */
function fallbackTurn(): BotTurn {
  return {
    messages: [
      {
        content:
          "I want to point you to the right scheme. Tell me a little about your situation in plain words — for example, your work, age, or what you need help with — and I'll find what you may be entitled to.\n\n" +
          "You can also tap one of the options below to get started. " +
          OFFER,
      },
    ],
    quickReplies: STARTER_REPLIES,
  };
}

const CERTIFICATE_HINTS = [
  "certificate",
  "income certificate",
  "community certificate",
  "caste certificate",
  "residence certificate",
  "domicile",
  "nativity",
];

export const mockEngine: ChatEngine = {
  greeting(): BotTurn {
    return {
      messages: [
        {
          content:
            `Hello, I'm the **${SITE.name} Assistant**. Tell me about yourself — your work, age, or what you need — and I'll help you discover government schemes you may be entitled to, the documents you'll need, and where to apply.\n\n` +
            "A quick note: GovEligify is an independent guide, **not affiliated with any government**, and **we never submit applications for you** — we point you to the official portal.\n\n" +
            "Who are you, or what do you need help with today?",
        },
      ],
      quickReplies: STARTER_REPLIES,
    };
  },

  async send(input: string): Promise<BotTurn> {
    const text = input.toLowerCase().trim();
    if (!text) return fallbackTurn();

    // Certificate questions go to the dedicated section, not scheme cards.
    if (CERTIFICATE_HINTS.some((hint) => text.includes(hint))) {
      return certificateTurn();
    }

    // First intent whose keywords appear in the message wins.
    const matched = INTENTS.find((intent) =>
      intent.keywords.some((kw) => text.includes(kw)),
    );
    if (matched) return intentTurn(matched);

    // Last resort: a free-text search over the catalogue before giving up.
    const loose = lookup(text);
    if (loose.length) {
      return {
        messages: [
          {
            content: `Here's what I found based on what you said.\n\n${OFFER}`,
          },
        ],
        schemeResults: loose,
        quickReplies: STARTER_REPLIES,
      };
    }

    return fallbackTurn();
  },
};
