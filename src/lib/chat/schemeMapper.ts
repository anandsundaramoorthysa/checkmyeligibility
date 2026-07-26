import type { Scheme, EligibilityCriterion, RequiredDocument, SchemeCategory, LevelOfGovernment, IndianState } from "@/lib/types";
import type { SchemeRow } from "./db";
import { joinArray, joinLabels, tokenLabel, firstOfArray } from "./utils";

const BENEFIT_TO_CATEGORY: Record<string, SchemeCategory> = {
  scholarship: "scholarship",
  fellowship: "fellowship",
  loan: "education-loan",
  education_loan: "education-loan",
  grant: "scholarship",
  tuition_fee_waiver: "scholarship",
  stipend: "fellowship",
};

function toCategory(row: SchemeRow): SchemeCategory {
  const bt = firstOfArray(row.benefit_type).toLowerCase().replace(/\s+/g, "_");
  return BENEFIT_TO_CATEGORY[bt] ?? "scholarship";
}

function toEligibility(row: SchemeRow): EligibilityCriterion[] {
  const criteria: EligibilityCriterion[] = [];

  if (row.eligibility) {
    criteria.push({ label: "Eligibility", value: String(row.eligibility), type: "other" });
  }

  const eduRaw = joinArray(row.education_level);
  if (eduRaw && eduRaw !== "all") {
    criteria.push({ label: "Education level", value: joinLabels(row.education_level), type: "education" });
  }

  const gender = row.beneficiary_gender as string | undefined;
  if (gender && gender !== "all") {
    criteria.push({ label: "Gender", value: tokenLabel(gender), type: "gender" });
  }

  return criteria;
}

function toDocuments(row: SchemeRow): RequiredDocument[] {
  const raw = row.documents as string | undefined;
  if (!raw) return [];
  return raw
    .split("\n")
    .map((line) => line.trim().replace(/^[-•*]\s*/, ""))
    .filter(Boolean)
    .map((name) => ({ name, mandatory: true }));
}

function toSummary(description: string): string {
  if (description.length <= 160) return description;
  return description.slice(0, 157).trimEnd() + "…";
}

export function rowToScheme(row: SchemeRow): Scheme {
  const description = String(row.description ?? "");
  const benefitStr = joinLabels(row.benefit_type);
  const benefits: string[] = [];
  if (benefitStr) {
    const withAmount = row.amount ? `${benefitStr} — ${row.amount}` : benefitStr;
    benefits.push(withAmount);
  }

  const VALID_LEVELS = new Set<string>(["central", "state", "central-state"]);
  const rawLevel = String(row.level ?? "central");
  const level: LevelOfGovernment = VALID_LEVELS.has(rawLevel) ? (rawLevel as LevelOfGovernment) : "central";

  let states: IndianState[] = ["all-india"];
  try {
    const parsed = typeof row.states === "string" ? JSON.parse(row.states) : row.states;
    if (Array.isArray(parsed) && parsed.length) states = parsed as IndianState[];
  } catch { /* keep default */ }

  return {
    id: String(row.id),
    slug: String(row.slug ?? row.id),
    name: String(row.name),
    summary: toSummary(description),
    description,
    category: toCategory(row),
    level,
    states,
    eligibility: toEligibility(row),
    benefits,
    requiredDocuments: toDocuments(row),
    officialPortalUrl: String(row.official_url ?? ""),
    lastVerified: row.reviewed_at
      ? new Date(row.reviewed_at as string).toISOString()
      : undefined,
    source: "myscheme",
  };
}
