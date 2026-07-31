import type { Scheme } from "@/lib/types";

export const balikaSamridhiYojana: Scheme = {
  id: "balika-samridhi-yojana",
  slug: "balika-samridhi-yojana",
  name: "Balika Samridhi Yojana",
  shortName: "BSY",
  summary:
    "One-time post-birth grant of ₹500 plus annual scholarships of ₹300–₹1,000 up to Class 10 for girl children of Below Poverty Line families. Currently inactive for new enrolments.",
  description:
    "Balika Samridhi Yojana is a welfare initiative targeting Below Poverty Line (BPL) families, designed to promote the birth and schooling of girls through financial assistance at birth and ongoing educational support through school. The scheme is currently inactive for new enrolments; it is documented here for reference and for beneficiaries already enrolled.",
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
  officialPortalUrl: "https://wcd.nic.in",
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
  source: "sample",
};
