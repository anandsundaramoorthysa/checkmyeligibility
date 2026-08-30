import type { Scheme } from "@/lib/types";

export const balikaSamridhiYojana: Scheme = {
  id: "balika-samridhi-yojana",
  slug: "balika-samridhi-yojana",
  name: "Balika Samridhi Yojana",
  shortName: "BSY",
  summary:
    "One-time post-birth grant of ₹500 plus annual scholarships of ₹300–₹1,000 up to Class 10 for girl children of Below Poverty Line families.",
  description:
    "Balika Samridhi Yojana (BSY) was a central government welfare scheme targeting Below Poverty Line (BPL) families to improve the status of the girl child through two layers of support: a one-time post-birth grant of ₹500 for each girl child, and annual scholarships ranging from ₹300 (Class 1-3) to ₹1,000 (Class 9-10) paid each year the girl remains enrolled and unmarried. Maximum two girls per household were eligible. The ₹500 birth grant and scholarship amounts were deposited in a bank or post office account in the girl's name, accessible when she turned 18. The scheme was implemented through Integrated Child Development Services (ICDS) centres (urban areas) and CDPO or health workers (rural areas). BSY is currently inactive for new enrolments; families already enrolled under the scheme continue to receive benefits until the girl reaches 18.",
  category: "women-child",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Date of birth",
      value: "Girl child born on or after 15 August 1997",
      type: "age",
    },
    {
      label: "Family status",
      value: "Family classified as Below the Poverty Line (BPL)",
      type: "income",
    },
    {
      label: "Beneficiary limit",
      value: "Maximum of two girl beneficiaries per household",
      type: "other",
    },
    {
      label: "Marital status",
      value: "Beneficiary must remain unmarried until age 18",
      type: "other",
    },
  ],
  benefits: [
    "One-time grant of ₹500 at birth",
    "Annual scholarships of ₹300–₹1,000, up to Class 10",
  ],
  requiredDocuments: [
    { name: "Birth certificate", mandatory: true },
    { name: "BPL proof", mandatory: true },
    { name: "Residence proof", mandatory: true },
    { name: "School records", mandatory: true },
    { name: "Guardian identity documentation", mandatory: true },
  ],
  officialPortalUrl: "https://wcd.gov.in",
  ministry: "Ministry of Women and Child Development, Government of India",
  applicationMode: ["offline"],
  tags: [
    "girl child",
    "women-child",
    "BPL",
    "welfare",
    "primary",
    "upper primary",
    "secondary",
    "inactive",
  ],
  faqs: [
    {
      q: "Who was eligible for Balika Samridhi Yojana?",
      a: "Girl children born on or after 15 August 1997 into Below Poverty Line families, with a maximum of two girl beneficiaries per household, remaining unmarried until age 18.",
    },
    {
      q: "What financial support did it provide?",
      a: "A one-time grant of ₹500 at birth, plus annual scholarships of ₹300 to ₹1,000 up to Class 10.",
    },
    {
      q: "Can I still enrol under this scheme?",
      a: "No, Balika Samridhi Yojana is currently inactive for new enrolments. It was historically submitted offline through ICDS/Anganwadi centres or municipal offices.",
    },
  ],
  lastVerified: "2026-08-30",
  source: "sample",
};
