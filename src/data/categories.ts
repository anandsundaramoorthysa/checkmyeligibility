import type { SchemeCategory } from "@/lib/types";

/**
 * The 11 SchemeCategory enum values are grouped into 8 user-facing display
 * cards for the homepage grid. `key` is the canonical category a card maps to;
 * `members` lists every enum value that should surface under this card so
 * filtering can fan a display card out to its constituent categories.
 */
export interface CategoryCard {
  key: SchemeCategory;
  title: string;
  blurb: string;
  /** lucide-react icon name */
  icon: string;
  /** every SchemeCategory value that belongs under this display card */
  members: SchemeCategory[];
}

export const CATEGORIES: CategoryCard[] = [
  {
    key: "agriculture",
    title: "Agriculture & Farmers",
    blurb:
      "Income support, crop insurance, and subsidies for farmers and cultivators.",
    icon: "Sprout",
    members: ["agriculture"],
  },
  {
    key: "education",
    title: "Education & Scholarships",
    blurb:
      "Scholarships, fee support, and savings schemes for students and learners.",
    icon: "GraduationCap",
    members: ["education"],
  },
  {
    key: "health",
    title: "Health & Insurance",
    blurb:
      "Cashless treatment, health cover, and medical assistance for families.",
    icon: "Stethoscope",
    members: ["health"],
  },
  {
    key: "employment",
    title: "Employment & Skills",
    blurb:
      "Skilling, apprenticeships, and livelihood programmes to help you earn.",
    icon: "Briefcase",
    members: ["employment", "skill-development"],
  },
  {
    key: "housing",
    title: "Housing",
    blurb: "Subsidised housing and home-loan support for pucca homes.",
    icon: "Home",
    members: ["housing"],
  },
  {
    key: "women-child",
    title: "Women & Child",
    blurb:
      "Maternity benefits, girl-child savings, and welfare for women and children.",
    icon: "HeartHandshake",
    members: ["women-child"],
  },
  {
    key: "senior-citizen",
    title: "Seniors & Social Welfare",
    blurb:
      "Pensions and social-security support for the elderly and vulnerable.",
    icon: "Users",
    members: ["senior-citizen", "social-welfare", "disability"],
  },
  {
    key: "finance-credit",
    title: "Finance & Credit",
    blurb:
      "Collateral-free loans, banking access, and pension savings for entrepreneurs.",
    icon: "Landmark",
    members: ["finance-credit"],
  },
];

const BY_KEY = new Map<SchemeCategory, CategoryCard>(
  CATEGORIES.map((c) => [c.key, c]),
);

/** Reverse lookup: any enum value -> the display card that surfaces it. */
const BY_MEMBER = new Map<SchemeCategory, CategoryCard>(
  CATEGORIES.flatMap((c) => c.members.map((m) => [m, c] as const)),
);

/** Return the display card for a category key, or undefined if unknown. */
export function getCategory(key: SchemeCategory): CategoryCard | undefined {
  return BY_KEY.get(key) ?? BY_MEMBER.get(key);
}
