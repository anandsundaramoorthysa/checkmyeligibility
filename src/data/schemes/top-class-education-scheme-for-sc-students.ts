import type { Scheme } from "@/lib/types";

export const topClassEducationSchemeForScStudents: Scheme = {
  id: "top-class-education-scheme-for-sc-students",
  slug: "top-class-education-scheme-for-sc-students",
  name: "Top Class Education Scheme for SC Students",
  shortName: "TCE SC",
  summary:
    "Full tuition fee reimbursement and academic allowance up to ₹86,000/year for SC students admitted to premier institutions like IITs, IIMs, NITs, and other notified top-class institutions.",
  description:
    "The Top Class Education Scheme for SC Students is a flagship scholarship of the Ministry of Social Justice and Empowerment, Government of India. It recognises and promotes quality education among students belonging to Scheduled Castes (SC) by providing comprehensive financial support for pursuing studies beyond Class 12 in notified premier institutions across India. The scheme covers tuition fees, non-refundable charges, academic allowance for books, stationery, laptop, and living expenses. Approximately 2,000 scholarships are awarded annually, with 30% of slots reserved for girl students based on merit. Once awarded, the scholarship continues for the full duration of the course, subject to satisfactory academic performance.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Caste (SC) category with a valid SC caste certificate",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Total annual family income from all sources must not exceed ₹8,00,000 per annum",
      type: "income",
    },
    {
      label: "Academic qualification",
      value: "Must be a first-year student enrolled in a full-time prescribed course at a notified top-class institution",
      type: "education",
    },
    {
      label: "Institution",
      value: "Must have secured admission in a notified premier institution (IITs, IIMs, NITs, IIITs, or other institutions of national importance as notified by the Ministry)",
      type: "education",
    },
    {
      label: "Sibling limit",
      value: "A maximum of two siblings from the same family can benefit under this scheme; an affidavit is required confirming the applicant is not the third sibling",
      type: "other",
    },
    {
      label: "Gender reservation",
      value: "30% of slots in each institution are reserved for eligible SC girl students based on merit",
      type: "other",
    },
  ],
  benefits: [
    "Full tuition fees and non-refundable charges (up to ₹2,00,000 per annum for private institutions)",
    "Academic allowance of ₹86,000 in the first year (covers books, stationery, laptop, living expenses)",
    "Academic allowance of ₹41,000 per annum in subsequent years",
    "Flying club courses: tuition up to ₹3,72,000 per annum",
    "Scholarship continues for the full duration of the course subject to satisfactory performance",
    "Direct Benefit Transfer (DBT) to the student's bank account",
  ],
  requiredDocuments: [
    { name: "SC Caste Certificate from competent authority", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "Family Income Certificate (annual income below ₹8 lakh)",
      mandatory: true,
    },
    {
      name: "Admission letter or fee receipt from notified institution",
      mandatory: true,
    },
    { name: "Previous academic qualification certificates", mandatory: true },
    { name: "Bank passbook (Aadhaar-linked, in student's name)", mandatory: true },
    {
      name: "Affidavit confirming not the third sibling availing the benefit",
      mandatory: true,
    },
    {
      name: "Institution verification on NSP",
      mandatory: true,
      note: "Institution must verify the application on NSP before forwarding to the Ministry",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Ministry of Social Justice and Empowerment, Government of India",
  applicationMode: ["online", "csc"],
  tags: [
    "scholarship",
    "SC",
    "scheduled caste",
    "central",
    "top class",
    "IIT",
    "IIM",
    "NIT",
    "IIIT",
    "tuition fee",
    "academic allowance",
    "NSP",
    "DBT",
    "all India",
    "Ministry of Social Justice",
    "premier institutions",
  ],
  faqs: [
    {
      q: "Who is eligible for the Top Class Education Scheme for SC Students?",
      a: "SC students with a total annual family income not exceeding ₹8 lakh who have secured first-year admission in a full-time course at a notified premier institution (IITs, IIMs, NITs, IIITs, etc.) are eligible.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "The scheme covers full tuition fees (up to ₹2 lakh/year for private institutions) plus an academic allowance of ₹86,000 in the first year and ₹41,000 in subsequent years for books, stationery, laptop, and living expenses.",
    },
    {
      q: "Is there a reservation for girl students?",
      a: "Yes, 30% of the total slots in each institution are reserved for eligible SC girl students based on inter-se merit.",
    },
    {
      q: "Can I apply if I am already receiving another scholarship?",
      a: "No. Students receiving any other scholarship or stipend for the same course are not eligible under this scheme.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the National Scholarship Portal (scholarships.gov.in). Complete the OTR process, select the scheme, fill in personal and academic details, upload required documents, and submit. Your institution will verify the application on NSP.",
    },
    {
      q: "How is the scholarship disbursed?",
      a: "The scholarship amount is credited directly to the student's bank account through Direct Benefit Transfer (DBT).",
    },
  ],
  lastVerified: "2026-07-20",
  source: "sample",
};
