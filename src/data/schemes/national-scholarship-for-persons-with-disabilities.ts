import type { Scheme } from "@/lib/types";

export const nationalScholarshipForPersonsWithDisabilities: Scheme = {
  id: "national-scholarship-for-persons-with-disabilities",
  slug: "national-scholarship-for-persons-with-disabilities-mr9hpdgv",
  name: "National Scholarship for Persons with Disabilities",
  summary:
    "Up to ₹50,000 per year scholarship for Indian students with benchmark disabilities (40%+) pursuing UG, PG, or professional courses through the National Scholarship Portal.",
  description:
    "Financial assistance for students with benchmark disabilities to pursue school, college, and higher education under the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment.",
  category: "disability",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Disability",
      value: "Benchmark disability of 40% or more under the Rights of Persons with Disabilities Act, 2016",
      type: "other",
    },
    {
      label: "Admission",
      value: "Admission to a notified institution through a merit-based selection process",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹8,00,000",
      type: "income",
    },
    {
      label: "Exclusion",
      value: "Not receiving any other scholarship for the same course",
      type: "other",
    },
  ],
  benefits: [
    "Up to ₹50,000 per year scholarship",
    "Covers tuition and maintenance expenses for UG, PG, and professional courses",
    "Disbursed directly to the student's bank account via DBT",
  ],
  requiredDocuments: [
    { name: "Disability certificate with ≥ 40% benchmark disability (issued by competent authority under RPwD Act 2016)", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Income certificate (annual family income from competent authority)", mandatory: true },
    { name: "Current admission letter or bonafide certificate from institution", mandatory: true },
    { name: "Previous year mark sheets", mandatory: true },
    { name: "Bank account passbook (account number and IFSC)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Department of Empowerment of Persons with Disabilities (DEPwD) / Ministry of Social Justice and Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "NSP",
    "DEPwD",
    "UG",
    "PG",
    "professional",
    "benchmark disability",
    "RPwD Act",
    "central",
    "all-india",
    "DBT",
  ],
  faqs: [
    {
      q: "Who is eligible for the National Scholarship for Persons with Disabilities?",
      a: "Indian citizens with a benchmark disability of 40% or more under the RPwD Act, 2016, who have admission to a notified institution through a merit-based selection process, with annual family income not exceeding ₹8,00,000, and who are not receiving any other scholarship for the same course.",
    },
    {
      q: "How much scholarship is provided?",
      a: "Eligible students receive up to ₹50,000 per year for their UG, PG, or professional course.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the National Scholarship Portal at scholarships.gov.in, register using Aadhaar and mobile number, select the scheme under DEPwD, fill in the details, upload required documents, and submit before the annual deadline.",
    },
    {
      q: "What documents are required for application?",
      a: "Disability certificate (40%+ benchmark), Aadhaar card, income certificate, admission letter or bonafide certificate, previous year mark sheets, bank account passbook, and passport-size photograph.",
    },
    {
      q: "How is the scholarship disbursed?",
      a: "The scholarship amount is credited directly to the student's bank account via Direct Benefit Transfer (DBT) after institution verification.",
    },
  ],
  source: "sample",
};
