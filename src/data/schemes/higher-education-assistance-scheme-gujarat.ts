import type { Scheme } from "@/lib/types";

export const higherEducationAssistanceSchemeGujarat: Scheme = {
  id: "higher-education-assistance-scheme-gujarat",
  slug: "higher-education-assistance-scheme-gujarat-mr9hz3kp",
  name: "Higher Education Assistance Scheme",
  shortName: "HEA Gujarat",
  summary:
    "Financial assistance of up to \u20B920,000 for children of registered workers in Gujarat who have passed 12th Standard with 70% or above and secured admission in graduate-level or MBBS courses.",
  description:
    "The Higher Education Assistance Scheme is a state-level initiative by the Gujarat Labour Welfare Board under the Labour & Employment Department, Government of Gujarat. It aims to reduce the financial burden of higher education for children of workers registered with the Labour Welfare Fund. Students who have passed the 12th Standard board examination with 70% or above percentile and secured admission in a Bachelor of Medicine and Bachelor of Surgery (MBBS) course or any other graduate-level programme are eligible. The scheme provides a one-time Direct Benefit Transfer of \u20B920,000 for MBBS students and \u20B910,000 for students admitted to other graduate courses. The parent must be employed in a factory or institution in Gujarat and must have been contributing to the Labour Welfare Fund for at least one continuous year. Applications are accepted online through the Sanman Portal, and the deadline is the last date of February of the respective year.",
  category: "scholarship",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Parent's employment",
      value:
        "Parent must be employed in a factory or institution located in Gujarat state",
      type: "occupation",
    },
    {
      label: "Labour Welfare Fund contribution",
      value:
        "Parent must have been contributing to the Labour Welfare Fund office for the last one year continuously",
      type: "other",
    },
    {
      label: "Academic qualification",
      value:
        "Applicant must have passed 12th Standard board examination in the respective year with 70% or above percentile",
      type: "education",
    },
    {
      label: "Admission",
      value:
        "Applicant must have secured admission in MBBS or any other graduate-level course",
      type: "education",
    },
  ],
  benefits: [
    "\u20B920,000 Direct Benefit Transfer for students admitted to MBBS courses",
    "\u20B910,000 Direct Benefit Transfer for students admitted to other graduate-level courses",
    "One-time financial assistance disbursed to the student's bank account",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "12th Standard board examination mark sheet", mandatory: true },
    { name: "Admission letter / proof of admission", mandatory: true },
    { name: "Labour Welfare Fund Account Number", mandatory: true },
    { name: "Bank Passbook (student's own account)", mandatory: true },
    {
      name: "Parent's employment proof / factory registration certificate",
      mandatory: true,
    },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://sanman.gujarat.gov.in/",
  ministry:
    "Labour and Employment Department / Gujarat Labour Welfare Board, Government of Gujarat",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "higher education",
    "Gujarat",
    "labour welfare",
    "workers children",
    "MBBS",
    "graduate",
    "12th pass",
    "state scheme",
    "DBT",
    "Sanman Portal",
  ],
  faqs: [
    {
      q: "What is the Higher Education Assistance Scheme?",
      a: "It is a state-level scheme by the Gujarat Labour Welfare Board that provides financial assistance to children of registered workers who have passed 12th Standard with 70% or above and secured admission in MBBS or other graduate courses.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "\u20B920,000 for MBBS students and \u20B910,000 for students admitted to any other graduate-level course.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Children of workers employed in a factory or institution in Gujarat whose parent has been contributing to the Labour Welfare Fund for at least one year. The applicant must have passed 12th Standard with 70% or above percentile and secured admission in a graduate-level or MBBS course.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Register on the Sanman Portal (sanman.gujarat.gov.in) using your Aadhaar and Labour Welfare Fund Account Number, then fill in the online application form, upload the required documents, and submit before the deadline.",
    },
    {
      q: "What is the application deadline?",
      a: "The last date of February of the respective year.",
    },
    {
      q: "Can students studying in foreign institutions apply?",
      a: "No. Students pursuing education abroad are not eligible under this scheme.",
    },
  ],
  source: "sample",
};
