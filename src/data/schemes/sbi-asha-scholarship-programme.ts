import type { Scheme } from "@/lib/types";

export const sbiAshaScholarshipProgramme: Scheme = {
  id: "sbi-asha-scholarship-programme",
  slug: "sbi-asha-scholarship-programme",
  name: "SBI Asha Scholarship Programme",
  summary:
    "An annual scholarship of \u20B915,000 for meritorious students from economically weaker sections studying in Classes 6 through second-year undergraduate at recognised institutions across India.",
  description:
    "The SBI Asha Scholarship Programme, administered by the SBI Foundation (CSR arm of State Bank of India), provides annual financial support of \u20B915,000 to meritorious students from economically weaker sections studying in Classes 6 through second-year undergraduate. The programme aims to reduce dropout rates by bridging the financial gap for underprivileged students.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian national from an economically weaker background",
      type: "residence",
    },
    {
      label: "Education level",
      value:
        "Must be studying in Class 6 to Class 12 or in the first or second year of a UG programme at a recognised institution",
      type: "education",
    },
    {
      label: "Academic merit",
      value: "Minimum 75% marks in the previous qualifying examination",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "\u2264 \u20B93,00,000 from all sources",
      type: "income",
    },
    {
      label: "Institution type",
      value: "Students in private unaided institutions may apply",
      type: "other",
    },
    {
      label: "Exclusion",
      value:
        "Must not be availing any other scholarship of \u20B910,000 or more annually",
      type: "other",
    },
  ],
  benefits: [
    "Annual scholarship of \u20B915,000",
    "Financial support for meritorious students from economically weaker sections",
    "Covers students from Class 6 through second-year undergraduate programmes",
  ],
  requiredDocuments: [
    { name: "Recent passport-size photograph", mandatory: true },
    { name: "Previous year mark sheets (minimum 75%)", mandatory: true },
    {
      name: "Current year admission / fee receipt or bonafide certificate",
      mandatory: true,
    },
    {
      name: "Income proof: income certificate from government authority or Form 16 / ITR",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    {
      name: "Bank account passbook (student or parent/guardian)",
      mandatory: true,
    },
    {
      name: "Disability certificate (if claiming disability category benefit)",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://scholarships.sbi.co.in/",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "SBI",
    "Asha",
    "merit",
    "EWS",
    "economically weaker",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "undergraduate",
    "UG",
    "SBI Foundation",
    "CSR",
    "all-india",
    "central",
  ],
  source: "sample",
};
