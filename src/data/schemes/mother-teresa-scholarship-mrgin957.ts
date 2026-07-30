import type { Scheme } from "@/lib/types";

export const motherTeresaScholarship: Scheme =   {
    id: "mother-teresa-scholarship",
    slug: "mother-teresa-scholarship",
    name: "Mother Teresa Scholarship",
    shortName: "MTS Kerala",
    summary:
      "₹15,000 per annum for minority community students in Kerala pursuing diploma nursing and paramedical courses.",
    description:
      "The Mother Teresa Scholarship (MTS), implemented by the Directorate of Minority Welfare, Government of Kerala, provides financial assistance to students belonging to minority communities pursuing diploma nursing and paramedical courses in Government, Government-aided, and Government-recognised private institutions in Kerala.",
    category: "social-welfare",
    level: "state",
    states: ["kerala"],
    eligibility: [
      {
        label: "Domicile",
        value: "Must be domiciled in Kerala",
        type: "residence",
      },
      {
        label: "Community",
        value:
          "Must belong to Muslim, Christian, Sikh, Buddhist, Parsi, or Jain communities",
        type: "caste-category",
      },
      {
        label: "Course",
        value:
          "Received seat in nursing or paramedical course on merit basis (Government, Aided, or merit quota in Self-financing colleges)",
        type: "education",
      },
      {
        label: "Minimum marks",
        value: "45% or more in the qualifying examination",
        type: "other",
      },
      {
        label: "Income (APL)",
        value: "Annual family income less than ₹8,00,000 (no limit for BPL)",
        type: "income",
      },
    ],
    benefits: [
      "₹15,000 per annum scholarship",
      "Covers diploma nursing and paramedical courses",
      "Available in Government, Government-aided, and recognised private institutions",
    ],
    requiredDocuments: [
      { name: "Applicant's Registration Form", mandatory: true },
      {
        name: "Mark List of SSLC, PLASTA/VHSE, etc.",
        mandatory: true,
      },
      { name: "Copy of Allotment Memo", mandatory: true },
      {
        name: "First page of Bank Passbook (in applicant's own name)",
        mandatory: true,
      },
      { name: "Aadhaar Card or NPR Card", mandatory: true },
      { name: "Nativity Certificate", mandatory: true },
      { name: "Community Certificate or Minority Certificate", mandatory: true },
      {
        name: "Income Certificate (Assal) from the village office",
        mandatory: true,
      },
      { name: "Ration Card", mandatory: false },
    ],
    officialPortalUrl: "https://mwdscholarship.kerala.gov.in",
    ministry: "Directorate of Minority Welfare, Government of Kerala",
    applicationMode: ["online"],
    tags: [
      "scholarship",
      "minority",
      "kerala",
      "nursing",
      "paramedical",
      "mother teresa",
      "diploma",
    ],
    faqs: [
      {
        q: "Who is eligible for the Mother Teresa Scholarship?",
        a: "Minority community students domiciled in Kerala, pursuing diploma nursing or paramedical courses, with 45%+ marks and family income under ₹8 lakh (no limit for BPL).",
      },
      {
        q: "How much is the scholarship?",
        a: "₹15,000 per annum.",
      },
      {
        q: "Where do I apply?",
        a: "Through the Directorate of Minority Welfare portal at mwdscholarship.kerala.gov.in.",
      },
    ],
    source: "sample",
  };
