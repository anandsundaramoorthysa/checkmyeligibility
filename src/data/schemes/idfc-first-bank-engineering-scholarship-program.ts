import type { Scheme } from "@/lib/types";

export const idfcFirstBankEngineeringScholarshipProgram: Scheme = {
  id: "idfc-first-bank-engineering-scholarship-program",
  slug: "idfc-first-bank-engineering-scholarship-program-h4k8nv2p",
  name: "IDFC FIRST Bank Engineering Scholarship Program",
  shortName: "IDFC Engineering",
  summary:
    "₹4,00,000 over four years (₹1 lakh per year) for first-year B.Tech/B.E. students from families with annual income below ₹6 lakh, studying at select eligible engineering colleges across India.",
  description:
    "The IDFC FIRST Bank Engineering Scholarship Program is a need-based scholarship under IDFC FIRST Bank's CSR educational initiatives. It aims to make engineering education accessible to meritorious students from economically weaker backgrounds who are unable to pursue higher studies due to financial constraints. The scholarship provides ₹1,00,000 per year for the full four-year duration of the B.Tech/B.E. programme, totalling ₹4,00,000. It is open to first-year students enrolled in select eligible engineering colleges across India. Approximately 230 scholarships are awarded annually. The scholarship amount is disbursed directly to the institution after verification of fee receipts.",
  category: "education",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Education level",
      value: "Must be enrolled in the first year of a full-time B.Tech or B.E. programme (4-year course)",
      type: "education",
    },
    {
      label: "Institution",
      value: "Must have secured admission in one of the eligible colleges listed on the official IDFC FIRST Bank scholarship page",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Gross annual family income must not exceed ₹6,00,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Other scholarships",
      value: "Must not be receiving any other scholarship or tuition fee waiver for the engineering course",
      type: "other",
    },
    {
      label: "Employee exclusion",
      value: "Children of employees from IDFC FIRST Bank or Buddy4Study are not eligible",
      type: "other",
    },
  ],
  benefits: [
    "₹4,00,000 total scholarship over 4 years of B.Tech/B.E. (₹1 lakh per annum)",
    "Scholarship amount is the fee of one year or ₹1 lakh per annum, whichever is lower",
    "Continued support for subsequent years if the student clears exams successfully",
    "No application fee required",
    "Approximately 230 scholarships available annually",
  ],
  requiredDocuments: [
    { name: "Proof of family income", mandatory: true },
    { name: "Applicant's address proof", mandatory: true },
    { name: "Class 12 marksheet", mandatory: true },
    { name: "College admission receipt / fee receipt", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bank passbook (account number and IFSC)", mandatory: true },
    {
      name: "College bonafide / enrolment certificate",
      mandatory: true,
    },
  ],
  officialPortalUrl:
    "https://www.buddy4study.com/page/idfc-first-bank-engineering-scholarship",
  ministry: "IDFC FIRST Bank (CSR Initiative)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "engineering",
    "B.Tech",
    "B.E.",
    "CSR",
    "IDFC FIRST Bank",
    "private",
    "means-based",
    "all India",
    "central",
    "tuition fee",
    "first year",
    "4-year programme",
  ],
  faqs: [
    {
      q: "Who is eligible for the IDFC FIRST Bank Engineering Scholarship?",
      a: "First-year B.Tech/B.E. students enrolled in select eligible colleges with annual family income below ₹6 lakh. The student must be an Indian citizen and should not be receiving any other scholarship or tuition fee waiver.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Selected students receive ₹4,00,000 over four years — ₹1,00,000 per annum (or the actual fee, whichever is lower). The scholarship continues for all four years subject to clearing exams.",
    },
    {
      q: "Can I apply if my college is not in the eligible list?",
      a: "No. Only students who have secured admission in one of the colleges listed on the official IDFC FIRST Bank scholarship page are eligible to apply.",
    },
    {
      q: "Can I apply if I am already receiving another scholarship?",
      a: "No. Students who are already receiving any other scholarship or tuition fee waiver for their engineering course are not eligible.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the Buddy4Study portal at buddy4study.com/page/idfc-first-bank-engineering-scholarship. Register, fill in the application form, upload required documents, and submit before the deadline.",
    },
    {
      q: "Is the scholarship renewed for subsequent years?",
      a: "Yes, eligible students receive the scholarship for subsequent years of their engineering course, provided they clear their exams successfully and continue to meet the eligibility criteria.",
    },
  ],
  lastVerified: "2026-07-25",
  source: "sample",
};
