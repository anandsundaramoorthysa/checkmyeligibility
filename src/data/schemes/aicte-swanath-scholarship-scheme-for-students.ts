import type { Scheme } from "@/lib/types";

export const aicteSwanathScholarshipSchemeForStudents: Scheme = {
  id: "aicte-swanath-scholarship-scheme-for-students",
  slug: "aicte-swanath-scholarship-scheme-for-students",
  name: "AICTE-Swanath Scholarship Scheme",
  shortName: "AICTE Swanath",
  summary:
    "₹50,000 per year from AICTE for orphan students, wards of parents who died due to COVID-19, and dependents of martyred armed forces personnel, pursuing an.",
  description:
    "The AICTE-Swanath Scholarship Scheme, administered by the All India Council for Technical Education (AICTE) under the Ministry of Education, provides ₹50,000 per year to three specific student categories: orphan students (both parents deceased), students who lost a parent to COVID-19, and dependents of armed forces or paramilitary personnel who died in service. The scholarship is available for Years 1 through 4 of AICTE-approved degree programmes (B.E./B.Tech./B.Arch. etc.) and diploma programmes. Family income must not exceed ₹8,00,000 per annum. The scholarship is applied for and disbursed through the National Scholarship Portal (scholarships.gov.in) and is renewed annually, subject to satisfactory academic performance. Students already receiving any other AICTE, central, or state scholarship are not eligible. Priority is given to students who lost both parents or whose parent was the sole breadwinner.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Applicant status",
      value: "Orphan, dependent of a parent who died due to COVID-19, or dependent of martyred armed forces personnel",
      type: "other",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹8,00,000",
      type: "income",
    },
    {
      label: "Course",
      value: "Enrolled in Years 1–4 of a regular degree or diploma course at an AICTE-approved institution",
      type: "education",
    },
    {
      label: "Other scholarships",
      value: "Must not be receiving any other central, state, or AICTE scholarship concurrently",
      type: "other",
    },
  ],
  benefits: [
    "₹50,000 per year",
    "Annual renewal subject to satisfactory academic performance",
    "Covers tuition fees and maintenance for the academic year",
    "Priority given to students who lost both parents or single parent who was the sole earner",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Institution bonafide certificate", mandatory: true },
    { name: "Academic mark sheets", mandatory: true },
    { name: "Bank details", mandatory: true },
    { name: "Death / martyrdom certificate", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Additional documents as required by AICTE", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "All India Council for Technical Education (AICTE)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "AICTE",
    "swanath",
    "orphan",
    "covid-19",
    "armed forces",
    "undergraduate",
    "diploma",
    "NSP",
  ],
  faqs: [
    {
      q: "Who is eligible for the AICTE-Swanath Scholarship?",
      a: "Orphan students, wards of parents who died due to COVID-19, or dependents of martyred armed forces personnel, enrolled in Years 1–4 of an AICTE-approved degree or diploma course, with family income not exceeding ₹8,00,000.",
    },
    {
      q: "How much does the scholarship provide?",
      a: "₹50,000 per year.",
    },
    {
      q: "How do I apply?",
      a: "Register on the AICTE Scholarship portal or the National Scholarship Portal, complete the application form, upload the required documents, and track your status online.",
    },
  ],
  lastVerified: "2026-08-30",
  source: "sample",
};
