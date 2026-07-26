export interface Intent {
  category?: string;
  educationLevel?: string;
  gender?: string;
}

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  scholarship: [
    "scholarship", "stipend", "merit", "sc/st", "obc", "minority",
    "tribal", "post-matric", "pre-matric", "national means", "financial aid",
    "financial support", "award", "bursary",
  ],
  fellowship: [
    "fellowship", "jrf", "srf", "research", "phd funding", "doctoral",
    "ugc fellowship", "dst", "csir", "icmr", "research grant",
  ],
  "education-loan": [
    "loan", "education loan", "vidya lakshmi", "bank loan", "credit",
    "borrow", "repay", "pay fees", "study loan",
  ],
  education: [
    "school", "coaching", "hostel", "transport subsidy", "fee waiver",
    "tuition", "midday meal",
  ],
};

const LEVEL_KEYWORDS: Record<string, string[]> = {
  ug: ["ug", "undergraduate", "b.tech", "btech", "bsc", "ba", "bcom", "degree", "graduation", "college"],
  pg: ["pg", "postgraduate", "m.tech", "mtech", "msc", "ma", "mcom", "masters", "post-graduation"],
  phd: ["phd", "doctoral", "research scholar", "d.phil"],
  diploma: ["diploma", "polytechnic", "iti", "vocational"],
  school: ["school", "10th", "12th", "sslc", "hsc", "secondary", "inter", "class 11", "class 12"],
};

const GENDER_KEYWORDS: Record<string, string[]> = {
  female: ["girl", "female", "woman", "women", "lady", "ladies"],
  male: ["boy", "male", "man", "men"],
};

function wordBoundary(text: string, keyword: string): boolean {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}\\b`, "i").test(text);
}

export function extractIntent(message: string): Intent {
  const text = message.toLowerCase();
  const intent: Intent = {};

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) {
      intent.category = category;
      break;
    }
  }

  for (const [level, keywords] of Object.entries(LEVEL_KEYWORDS)) {
    if (keywords.some((kw) => wordBoundary(text, kw))) {
      intent.educationLevel = level;
      break;
    }
  }

  for (const [gender, keywords] of Object.entries(GENDER_KEYWORDS)) {
    if (keywords.some((kw) => wordBoundary(text, kw))) {
      intent.gender = gender;
      break;
    }
  }

  return intent;
}
