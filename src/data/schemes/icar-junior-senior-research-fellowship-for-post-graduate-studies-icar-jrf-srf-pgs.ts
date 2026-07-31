import type { Scheme } from "@/lib/types";

export const icarJuniorSeniorResearchFellowshipForPostGraduateStudiesIcarJrfSrfPgs: Scheme = {
  id: "icar-jrf-srf-post-graduate-studies",
  slug: "icar-junior-senior-research-fellowship-for-post-graduate-studies-icar-jrf-srf-pgs",
  name: "ICAR Junior & Senior Research Fellowship for Post-Graduate Studies",
  shortName: "ICAR JRF/SRF PGS",
  summary:
    "₹12,640/month for Master's (JRF) or ₹35,000/month plus contingency grant for PhD (SRF) research fellows selected via the ICAR entrance examination in Agricultural Sciences.",
  description:
    "The ICAR Junior & Senior Research Fellowship for Post-Graduate Studies provides research fellowships to merit-selected students in Agricultural Sciences at eligible universities. Indian candidates admitted through the ICAR entrance examination qualify for either a Junior Research Fellowship (JRF, requiring a Bachelor's degree) or a Senior Research Fellowship (SRF, requiring a Master's degree), with government-mandated reservations applicable.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Admission",
      value: "Indian candidate admitted through the ICAR entrance examination",
      type: "education",
    },
    {
      label: "JRF eligibility",
      value: "Bachelor's degree in Agricultural Sciences or a related field",
      type: "education",
    },
    {
      label: "SRF eligibility",
      value: "Master's degree in Agricultural Sciences or a related field",
      type: "education",
    },
    {
      label: "Reservations",
      value: "Government-mandated category reservations apply",
      type: "caste-category",
    },
  ],
  benefits: [
    "₹12,640 per month for Master's-level (JRF) fellows",
    "₹35,000 per month for PhD-level (SRF) fellows, plus a contingency grant",
  ],
  requiredDocuments: [
    { name: "ICAR entrance examination score", mandatory: true },
    { name: "Degree certificates", mandatory: true },
    { name: "Category certificate", mandatory: false, note: "If applicable" },
    { name: "Identity proof", mandatory: true },
    { name: "Admission letter", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Surety bond", mandatory: true },
  ],
  officialPortalUrl: "https://icar.org.in/",
  ministry: "Indian Council of Agricultural Research (ICAR)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "ICAR",
    "agricultural sciences",
    "jrf",
    "srf",
    "postgraduate",
    "phd",
    "research",
    "stipend",
  ],
  faqs: [
    {
      q: "Who is eligible for the ICAR JRF/SRF fellowship?",
      a: "Indian candidates admitted through the ICAR entrance examination — a Bachelor's degree qualifies for JRF, a Master's degree qualifies for SRF, in Agricultural Sciences or a related field.",
    },
    {
      q: "How much is the fellowship stipend?",
      a: "₹12,640 per month for Master's-level (JRF) fellows, and ₹35,000 per month plus a contingency grant for PhD-level (SRF) fellows.",
    },
    {
      q: "How do I apply?",
      a: "Apply through the ICAR entrance examination process at icar.org.in; selection is based on your entrance exam rank and category reservations as applicable.",
    },
  ],
  source: "sample",
};
