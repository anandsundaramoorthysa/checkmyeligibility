import type { Scheme } from "@/lib/types";

export const pmCaresForChildrenScheme: Scheme = {
  id: "pm-cares-for-children-scheme",
  slug: "pm-cares-for-children-scheme",
  name: "PM CARES for Children Scheme",
  shortName: "PM CARES Children",
  summary:
    "Comprehensive support for children who lost both parents or legal guardians to COVID-19, including free education, monthly stipend, health insurance, and a lump sum corpus of \u20B910 lakh.",
  description:
    "Launched to support children who lost both parents or legal guardians to the COVID-19 pandemic. The scheme provides a convergent approach to ensure comprehensive care, including financial corpus creation, educational support, monthly stipends, and health insurance to empower them for a self-sufficient future.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Loss of parent(s) to COVID-19",
      value:
        "Must have lost both parents, or surviving parent, or legal guardian/adoptive parents to COVID-19 between March 11, 2020 and May 5, 2023",
      type: "other",
    },
    {
      label: "Age at time of loss",
      value:
        "Must have been under 18 years of age on the date of death of parent(s)",
      type: "age",
    },
  ],
  benefits: [
    "Lump sum of \u20B910 lakh upon attaining 23 years of age",
    "Monthly stipend between ages 18\u201323",
    "Free education in KVS, Navodaya Vidyalayas, or private schools",
    "Annual scholarship of \u20B920,000 for school-going children",
    "Free health insurance cover of \u20B95 lakh under Ayushman Bharat (PM-JAY) until age 23",
  ],
  requiredDocuments: [
    {
      name: "Death certificate of parent(s) mentioning COVID-19",
      mandatory: true,
    },
    { name: "Child\u2019s birth certificate", mandatory: true },
    { name: "Aadhaar card of the child and guardian", mandatory: true },
    { name: "Bank account details of the child", mandatory: true },
    {
      name: "Statement from the Child Welfare Committee (CWC) or District Magistrate (DM)",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://pmcaresforchildren.in/",
  ministry: "PM CARES Fund, Prime Minister\u2019s Office",
  applicationMode: ["online"],
  tags: [
    "PM CARES",
    "COVID-19",
    "children",
    "orphan",
    "scholarship",
    "stipend",
    "health insurance",
    "Ayushman Bharat",
    "free education",
    "KVS",
    "Navodaya",
    "central",
    "all-india",
    "social welfare",
  ],
  faqs: [
    {
      q: "Who is eligible for the PM CARES for Children Scheme?",
      a: "Indian children who lost both parents, surviving parent, or legal guardian/adoptive parents to COVID-19 between March 11, 2020 and May 5, 2023, and were under 18 years of age at the time of loss.",
    },
    {
      q: "What benefits are provided under this scheme?",
      a: "The scheme provides free education (KVS/Navodaya/private), an annual scholarship of \u20B920,000 for school-going children, a monthly stipend between ages 18\u201323, a lump sum corpus of \u20B910 lakh at age 23, and health insurance of \u20B95 lakh under Ayushman Bharat (PM-JAY) until age 23.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Eligible children or their caregivers must register on the official PM CARES for Children portal at pmcaresforchildren.in. Applications are verified by the District Magistrate (DM) and the District Child Protection Unit (DCPU).",
    },
    {
      q: "What documents are required?",
      a: "Death certificate of parent(s) mentioning COVID-19, child's birth certificate, Aadhaar card of child and guardian, bank account details of the child, and a statement from the Child Welfare Committee (CWC) or District Magistrate (DM).",
    },
  ],
  source: "sample",
};
