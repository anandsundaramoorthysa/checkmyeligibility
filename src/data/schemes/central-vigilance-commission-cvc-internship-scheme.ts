import type { Scheme } from "@/lib/types";

export const centralVigilanceCommissionCvcInternshipScheme: Scheme = {
  id: "central-vigilance-commission-cvc-internship-scheme-mrgk9tck",
  slug: "central-vigilance-commission-cvc-internship-scheme-mrgk9tck",
  name: "Central Vigilance Commission (CVC) Internship Scheme",
  shortName: "CVC Internship (Stipend)",
  summary:
    "₹10,000 per month stipend internship with the Central Vigilance Commission, for graduates, postgraduates, and research scholars to study vigilance administration and anti-corruption governance.",
  description:
    "This internship with the Central Vigilance Commission (CVC) offers a stipend for graduates (awaiting final-year results), postgraduates, and research scholars to gain exposure to vigilance administration, anti-corruption mechanisms, public administration, and governance through research, analysis, and project work at CVC.",
  category: "skill-development",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Indian citizen",
      type: "other",
    },
    {
      label: "Academic qualification",
      value: "Graduate (awaiting final-year results), postgraduate, or research scholar from a recognised institution",
      type: "education",
    },
    {
      label: "Preferred fields of study",
      value: "Law, IT, MBA, or Social Sciences",
      type: "education",
    },
  ],
  benefits: ["₹10,000 per month stipend during the internship period"],
  requiredDocuments: [
    { name: "Application form", mandatory: true },
    { name: "Resume / CV", mandatory: true },
    { name: "Bonafide certificate", mandatory: true },
    { name: "Academic transcripts", mandatory: true },
    { name: "Identity proof", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Institutional NOC", mandatory: true },
    { name: "Additional CVC-prescribed documents", mandatory: false },
  ],
  officialPortalUrl: "https://cvc.gov.in/",
  ministry: "Central Vigilance Commission",
  applicationMode: ["online"],
  tags: [
    "internship",
    "CVC",
    "stipend",
    "anti-corruption",
    "vigilance",
    "governance",
    "law",
    "IT",
    "MBA",
    "social sciences",
    "undergraduate",
    "postgraduate",
    "phd",
  ],
  faqs: [
    {
      q: "Who is eligible for this CVC internship?",
      a: "Indian citizens who are graduates awaiting final-year results, postgraduates, or research scholars from recognised institutions, preferably in Law, IT, MBA, or Social Sciences.",
    },
    {
      q: "Is the internship paid?",
      a: "Yes, this internship offers a stipend of ₹10,000 per month.",
    },
    {
      q: "How do I apply?",
      a: "Visit the CVC portal, complete the application form, attach the required documents, and submit before the deadline. Applications undergo scrutiny before an internship offer is made.",
    },
  ],
  source: "sample",
};
