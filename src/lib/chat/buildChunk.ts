import { joinArray } from "./utils";

export function buildChunk(scheme: Record<string, unknown>): string {
  const parts: string[] = [`Scheme: ${scheme.name ?? ""}`];

  if (scheme.description) parts.push(`Description: ${scheme.description}`);

  const category = joinArray(scheme.category);
  if (category) parts.push(`Category: ${category}`);

  const educationLevel = joinArray(scheme.education_level);
  if (educationLevel) parts.push(`Education level: ${educationLevel}`);

  const benefitType = joinArray(scheme.benefit_type);
  if (benefitType) {
    const benefit = scheme.amount ? `${benefitType} — ${scheme.amount}` : benefitType;
    parts.push(`Benefit: ${benefit}`);
  }

  if (scheme.eligibility) parts.push(`Eligibility: ${scheme.eligibility}`);
  if (scheme.documents) parts.push(`Documents required: ${scheme.documents}`);
  if (scheme.application_process) parts.push(`How to apply: ${scheme.application_process}`);
  if (scheme.official_url) parts.push(`Official URL: ${scheme.official_url}`);

  return parts.join("\n");
}
