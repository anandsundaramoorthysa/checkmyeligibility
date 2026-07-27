import type { Scheme } from "@/lib/types";

export const financialSupportSchemeDelhiUniversity: Scheme = {
  id: "financial-support-scheme-delhi-university",
  slug: "financial-support-scheme-delhi-university-p3k8mv2x",
  name: "Financial Support Scheme — University of Delhi",
  shortName: "DU Financial Support",
  summary:
    "Full or partial tuition fee waiver (up to ₹15,000) for undergraduate and postgraduate students of the University of Delhi with annual family income below ₹8 lakh.",
  description:
    "The Financial Support Scheme of the University of Delhi provides need-based financial assistance to meritorious students enrolled in full-time programmes at Delhi University colleges. The scheme offers a tuition fee waiver of up to 100% of the tuition fee, capped at ₹15,000 per year, for students whose annual family income does not exceed ₹8,00,000. The objective is to ensure that no student is denied quality education due to financial constraints. Students enrolled in regular undergraduate and postgraduate programmes at DU colleges can apply through the university's online portal during the notified application window.",
  category: "education",
  level: "state",
  states: ["delhi"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Enrolment",
      value: "Must be enrolled in a regular full-time undergraduate or postgraduate programme at a University of Delhi college",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Annual family income must not exceed ₹8,00,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Academic standing",
      value: "Must meet the minimum academic performance requirements as prescribed by the university",
      type: "education",
    },
  ],
  benefits: [
    "Tuition fee waiver of up to 100%, capped at ₹15,000 per year",
    "Available for both undergraduate and postgraduate programmes",
    "Covers tuition fees at all affiliated DU colleges",
    "Renewable each year subject to continued eligibility and academic performance",
  ],
  requiredDocuments: [
    { name: "Proof of family income (Income certificate / Salary slip / ITR)", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "University enrolment / ID card", mandatory: true },
    { name: "Bank passbook (account number and IFSC)", mandatory: true },
    { name: "Previous year marksheet", mandatory: true },
    { name: "Fee receipt of current year", mandatory: true },
  ],
  officialPortalUrl: "https://web.du.ac.in",
  ministry: "University of Delhi",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "fee waiver",
    "University of Delhi",
    "DU",
    "Delhi",
    "undergraduate",
    "postgraduate",
    "means-based",
    "central",
    "tuition fee",
  ],
  faqs: [
    {
      q: "How much fee waiver can I get under this scheme?",
      a: "You can receive a tuition fee waiver of up to 100% of the tuition fee, subject to a maximum cap of ₹15,000 per year.",
    },
    {
      q: "What is the income limit for eligibility?",
      a: "The annual family income must not exceed ₹8,00,000 per annum from all sources.",
    },
    {
      q: "Is this scheme available for postgraduate students?",
      a: "Yes, students enrolled in regular full-time postgraduate programmes at DU colleges are also eligible.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the University of Delhi portal during the notified application window. Submit all required documents along with the application.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
