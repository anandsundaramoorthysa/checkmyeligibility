import type { Scheme } from "@/lib/types";

export const savitribaiJyotiraoPhuleFellowshipForSingleGirlChild: Scheme = {
  id: "savitribai-jyotirao-phule-fellowship-for-single-girl-child",
  slug: "savitribai-jyotirao-phule-fellowship-for-single-girl-child",
  name: "Savitribai Jyotirao Phule Fellowship for Single Girl Child",
  shortName: "SJSGC Fellowship",
  summary:
    "UGC fellowship providing ₹3,100 per month plus HRA to single girl children pursuing full-time MPhil or PhD research at a recognised university.",
  description:
    "The Savitribai Jyotirao Phule Fellowship for Single Girl Child, administered by the University Grants Commission (UGC), supports single girl children pursuing full-time MPhil or PhD research in any discipline at a UGC-recognised university or institution. It provides a monthly fellowship along with House Rent Allowance (HRA), encouraging advanced research participation among women who are the only child in their family.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Family status",
      value: "Must be the only girl child in the family",
      type: "other",
    },
    {
      label: "Course",
      value: "Registered for full-time, regular MPhil or PhD in any discipline at a UGC-recognised institution",
      type: "education",
    },
    {
      label: "Age",
      value: "Up to 40 years (5-year relaxation for SC/ST/OBC-NCL/PwD candidates)",
      type: "age",
    },
    {
      label: "Concurrent fellowships",
      value: "Cannot hold any other fellowship simultaneously",
      type: "other",
    },
    {
      label: "Institutional support",
      value: "Requires forwarding/support from the university or institution",
      type: "other",
    },
  ],
  benefits: [
    "₹3,100 per month fellowship",
    "House Rent Allowance (HRA) in addition to the monthly fellowship",
    "Disbursed monthly for the duration of the MPhil/PhD programme",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Admission certificate", mandatory: true },
    { name: "Single-girl-child affidavit", mandatory: true },
    { name: "Age proof", mandatory: true },
    { name: "Category certificate", mandatory: false, note: "If claiming age relaxation as SC/ST/OBC-NCL/PwD" },
    { name: "Disability certificate", mandatory: false, note: "If applicable" },
    { name: "Bank details", mandatory: true },
    { name: "UGC-prescribed forms", mandatory: true },
  ],
  officialPortalUrl: "https://ugc.gov.in/page/Scholarships-and-Fellowships.aspx",
  ministry: "University Grants Commission (UGC) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "single girl child",
    "phd",
    "mphil",
    "research",
    "ugc",
    "women",
    "hra",
  ],
  faqs: [
    {
      q: "Who can apply for this fellowship?",
      a: "Single girl children (only child in the family) who are registered full-time in an MPhil or PhD programme at a UGC-recognised institution, aged up to 40 (with relaxation for SC/ST/OBC-NCL/PwD candidates).",
    },
    {
      q: "How much financial support is provided?",
      a: "₹3,100 per month plus House Rent Allowance (HRA), for the duration of the MPhil/PhD programme.",
    },
    {
      q: "Can I hold this fellowship along with another one?",
      a: "No. This fellowship cannot be held simultaneously with any other fellowship.",
    },
    {
      q: "How do I apply?",
      a: "Register on the UGC Scholarships and Fellowships portal, select this fellowship, complete the form, upload the required documents, and obtain your university's forwarding before the deadline.",
    },
  ],
  source: "sample",
};
