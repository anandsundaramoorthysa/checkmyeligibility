import type { SchemeCategory } from "@/lib/types";

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
    key: "scholarship",
    title: "Scholarships",
    blurb:
      "Merit, need-based, and category-specific scholarships from NSP, UGC, AICTE, and state scholarship portals.",
    icon: "Award",
    members: ["scholarship"],
  },
  {
    key: "fellowship",
    title: "Fellowships & Research Grants",
    blurb:
      "JRF, SRF, and fellowship support for MPhil and PhD scholars from UGC, CSIR, and DST.",
    icon: "FlaskConical",
    members: ["fellowship"],
  },
  {
    key: "education-loan",
    title: "Education Loans",
    blurb:
      "Government-backed education loans and interest subsidy for students pursuing higher and professional courses.",
    icon: "Banknote",
    members: ["education-loan"],
  },
  {
    key: "education",
    title: "Technical Education",
    blurb:
      "AICTE-approved grants and support for students in engineering, management, pharmacy, and diploma programmes.",
    icon: "GraduationCap",
    members: ["education", "skill-development"],
  },
  {
    key: "social-welfare",
    title: "SC / ST & Reserved Category",
    blurb:
      "Post-matric scholarships and fellowships for students from Scheduled Castes, Scheduled Tribes, and OBC categories.",
    icon: "Shield",
    members: ["social-welfare"],
  },
  {
    key: "women-child",
    title: "Minority & Girl Students",
    blurb:
      "Dedicated scholarships for girl students and students from minority communities - Muslim, Sikh, Christian, and Buddhist.",
    icon: "Heart",
    members: ["women-child"],
  },
];

const BY_KEY = new Map<SchemeCategory, CategoryCard>(
  CATEGORIES.map((c) => [c.key, c]),
);

const BY_MEMBER = new Map<SchemeCategory, CategoryCard>(
  CATEGORIES.flatMap((c) => c.members.map((m) => [m, c] as const)),
);

/** Return the display card for a category key, or undefined if unknown. */
export function getCategory(key: SchemeCategory): CategoryCard | undefined {
  return BY_KEY.get(key) ?? BY_MEMBER.get(key);
}
