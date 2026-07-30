import type { Scheme } from "@/lib/types";

export const ruralGirlsIncentiveScheme: Scheme = {
  id: "rural-girls-incentive-scheme",
  slug: "rural-girls-incentive-scheme",
  name: "Rural Girls' Incentive Scheme",
  shortName: "RGIS",
  summary:
    "A Tamil Nadu government scheme providing ₹500–₹1,000 per annum to rural girl students from MBC/DNC communities studying in Classes III–VI at government schools.",
  description:
    "The Rural Girls' Incentive Scheme, implemented by the Backward Classes, Most Backward Classes and Minorities Welfare Department, Government of Tamil Nadu, provides financial assistance to rural girl students belonging to Most Backward Classes (MBC) and Denotified Communities (DNC) studying in Government or Government-aided schools. The scheme aims to encourage school education and reduce dropout rates, with priority given to daughters of widows and destitute parents.",
  category: "women-child",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Gender",
      value: "Must be a female student",
      type: "gender",
    },
    {
      label: "Category",
      value: "Must belong to Most Backward Classes (MBC) or Denotified Communities (DNC)",
      type: "caste-category",
    },
    {
      label: "Domicile",
      value: "Must be a resident of Tamil Nadu (excluding Chennai District)",
      type: "residence",
    },
    {
      label: "School",
      value: "Must be studying in Classes III to VI in a Government or Government-aided school located in a rural area",
      type: "education",
    },
    {
      label: "Income",
      value: "Annual parental income must not exceed ₹1,00,000",
      type: "income",
    },
    {
      label: "Preference",
      value: "Priority is given to daughters of widows and destitute parents",
      type: "other",
    },
  ],
  benefits: [
    "₹500 per annum for students studying in Classes III to V",
    "₹1,000 per annum for students studying in Class VI",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card or other Identity Proof", mandatory: true },
    { name: "MBC/DNC Community Certificate", mandatory: true },
    { name: "School Admission/Enrollment Proof", mandatory: true },
    { name: "Widow/Destitute Certificate (if applicable)", mandatory: false },
    { name: "Address Proof (Rural Area)", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    { name: "Any other documents prescribed by the authority", mandatory: false },
  ],
  officialPortalUrl: "https://www.myscheme.gov.in/schemes/rgis",
  ministry:
    "Backward Classes, Most Backward Classes and Minorities Welfare Department, Government of Tamil Nadu",
  applicationMode: ["offline"],
  tags: [
    "scholarship",
    "rural girls",
    "Tamil Nadu",
    "MBC",
    "DNC",
    "girl students",
    "women",
    "primary school",
    "upper primary",
    "state scholarship",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "girl-women",
    "bc-mbc",
  ],
  faqs: [
    {
      q: "Who is eligible for the Rural Girls' Incentive Scheme?",
      a: "Female students who are residents of Tamil Nadu (excluding Chennai), belong to MBC or DNC communities, are studying in Classes III to VI at a Government or Government-aided rural school, and have an annual parental income not exceeding ₹1,00,000.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Students in Classes III to V receive ₹500 per annum, and students in Class VI receive ₹1,000 per annum.",
    },
    {
      q: "Is there any preference given to certain applicants?",
      a: "Yes, preference is given to daughters of widows and destitute parents.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Eligible students should contact the Headmaster of their Government or Government-aided rural school. The application is submitted offline along with the required supporting documents.",
    },
    {
      q: "Which areas are covered under this scheme?",
      a: "The scheme is applicable to rural areas in Tamil Nadu, excluding Chennai District.",
    },
  ],
  source: "sample",
};
