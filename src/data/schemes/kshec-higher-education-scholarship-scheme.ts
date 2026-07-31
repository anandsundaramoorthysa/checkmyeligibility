import type { Scheme } from "@/lib/types";

export const kshecHigherEducationScholarshipScheme: Scheme = {
  id: "kshec-higher-education-scholarship-scheme",
  slug: "kshec-higher-education-scholarship-scheme",
  name: "KSHEC Higher Education Scholarship Scheme",
  shortName: "KSHEC HEC",
  summary:
    "Kerala State Higher Education Council scholarship of ₹12,000–₹60,000 a year for meritorious, economically disadvantaged UG and PG students at Government/Aided colleges.",
  description:
    "The Kerala State Higher Education Council (KSHEC) Higher Education Scholarship (HEC) supports meritorious, economically disadvantaged first-year undergraduate students in Kerala, with continued tiered support through postgraduate studies. The scheme provides financial assistance ranging from ₹12,000 to ₹60,000 depending on the year and level of study.",
  category: "scholarship",
  level: "state",
  states: ["kerala"],
  eligibility: [
    {
      label: "Course & institution",
      value: "First-year undergraduate students at recognised Government or Aided colleges in Kerala; professional courses (Engineering, Medicine, Law) are excluded",
      type: "education",
    },
    {
      label: "Citizenship & residence",
      value: "Indian citizen and resident of Kerala",
      type: "residence",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹2,00,000",
      type: "income",
    },
    {
      label: "Academic performance",
      value: "General category: minimum 75% (Science/Business stream) or 60% (Humanities/Social Sciences); relaxed marks criteria for SC/ST students",
      type: "education",
    },
    {
      label: "Other scholarships",
      value: "Must not be availing any other scholarship concurrently",
      type: "other",
    },
  ],
  benefits: [
    "UG 1st year: ₹12,000 per year",
    "UG 2nd year: ₹18,000 per year",
    "UG 3rd year: ₹24,000 per year",
    "PG 1st year: ₹40,000 per year",
    "PG 2nd year: ₹60,000 per year",
  ],
  requiredDocuments: [
    { name: "Printout of online application form", mandatory: true },
    { name: "Class 10 certificate", mandatory: true },
    { name: "Class 12 certificate", mandatory: true },
    { name: "Bank passbook first page", mandatory: true },
    { name: "Domicile certificate", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Category certificate", mandatory: false, note: "For SC/ST/OBC applicants" },
  ],
  officialPortalUrl: "https://scholarship.kshec.kerala.gov.in/student/register",
  ministry: "Kerala State Higher Education Council (KSHEC)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "kerala",
    "state scheme",
    "KSHEC",
    "undergraduate",
    "postgraduate",
    "OBC",
    "SC",
    "ST",
    "merit",
  ],
  faqs: [
    {
      q: "Who is eligible for the KSHEC Higher Education Scholarship?",
      a: "First-year undergraduate students (non-professional courses) at recognised Government/Aided colleges in Kerala, Indian citizens resident in Kerala, with family income not exceeding ₹2,00,000 and the required minimum marks.",
    },
    {
      q: "How much financial support is provided?",
      a: "₹12,000/₹18,000/₹24,000 for UG years 1–3, and ₹40,000/₹60,000 for PG years 1–2.",
    },
    {
      q: "How do I apply?",
      a: "Register on the KSHEC scholarship portal, create your profile, apply for the scholarship, and submit the printed hardcopy with supporting documents to your college.",
    },
  ],
  source: "sample",
};
