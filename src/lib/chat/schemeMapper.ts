import type { Scheme, EligibilityCriterion, RequiredDocument, SchemeCategory } from "@/lib/types";
import type { SchemeRow } from "./db";

const BENEFIT_TO_CATEGORY: Record<string, SchemeCategory> = {
  scholarship: "scholarship",
  fellowship: "fellowship",
  loan: "education-loan",
  education_loan: "education-loan",
  grant: "scholarship",
  tuition_fee_waiver: "scholarship",
  stipend: "fellowship",
};

function joinArray(val: unknown): string {
  if (Array.isArray(val)) return val.filter(Boolean).join(", ");
  if (typeof val === "string") {
    try {
      const parsed: unknown = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed.filter(Boolean).join(", ");
    } catch { /* not JSON */ }
    return val;
  }
  return val ? String(val) : "";
}

function firstArray(val: unknown): string {
  if (Array.isArray(val)) return String(val[0] ?? "");
  if (typeof val === "string") {
    try {
      const parsed: unknown = JSON.parse(val);
      if (Array.isArray(parsed)) return String(parsed[0] ?? "");
    } catch { /* not JSON */ }
    return val;
  }
  return val ? String(val) : "";
}

function toCategory(row: SchemeRow): SchemeCategory {
  const bt = firstArray(row.benefit_type).toLowerCase().replace(/\s+/g, "_");
  return BENEFIT_TO_CATEGORY[bt] ?? "scholarship";
}

function toEligibility(row: SchemeRow): EligibilityCriterion[] {
  const criteria: EligibilityCriterion[] = [];

  if (row.eligibility) {
    criteria.push({ label: "Eligibility", value: String(row.eligibility), type: "other" });
  }

  const edu = joinArray(row.education_level);
  if (edu && edu !== "all") {
    criteria.push({ label: "Education level", value: edu, type: "education" });
  }

  const gender = row.beneficiary_gender as string | undefined;
  if (gender && gender !== "all") {
    criteria.push({ label: "Gender", value: gender, type: "gender" });
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
  const benefitStr = joinArray(row.benefit_type);
  const benefits: string[] = [];
  if (benefitStr) {
    const withAmount = row.amount ? `${benefitStr} — ${row.amount}` : benefitStr;
    benefits.push(withAmount);
  }

  return {
    id: String(row.id),
    slug: String(row.slug ?? row.id),
    name: String(row.name),
    summary: toSummary(description),
    description,
    category: toCategory(row),
    level: "central",
    states: ["all-india"],
    eligibility: toEligibility(row),
    benefits,
    requiredDocuments: toDocuments(row),
    officialPortalUrl: String(row.official_url ?? ""),
    lastVerified: row.reviewed_at
      ? new Date(row.reviewed_at as string).toISOString()
      : undefined,
    source: "state-portal",
  };
}
