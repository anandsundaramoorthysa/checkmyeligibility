import type { Scheme } from "@/lib/types";

export const aictePragatiScholarship: Scheme = {
  id: "aicte-pragati-scholarship",
  slug: "aicte-pragati-scholarship-for-girl-students-mr9gbyzm",
  name: "AICTE – Pragati Scholarship for Girl Students",
  shortName: "AICTE Pragati",
  summary:
    "₹50,000 per year scholarship for meritorious girl students in their first year of AICTE-approved Degree or Diploma technical programmes, from families with income below ₹8 lakh per annum.",
  description:
    "The AICTE Pragati Scholarship is a flagship scheme by the All India Council for Technical Education (AICTE) under the Ministry of Education, designed to empower girl students by providing financial support to pursue technical education. The scholarship covers tuition fees and other academic expenses. It is awarded to meritorious girl students admitted to the first year of AICTE-approved Degree-level or Diploma-level programmes (including lateral entry in the second year). Only two students per family are eligible. The scholarship amount of ₹50,000 per annum is disbursed through the National Scholarship Portal (NSP) via Direct Benefit Transfer (DBT).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Gender",
      value: "Female students only",
      type: "other",
    },
    {
      label: "Course & Institution",
      value:
        "First year of a Degree-level or Diploma-level course (or second year via lateral entry) in any AICTE-approved institution",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Below ₹8,00,000 per annum — a valid income certificate issued by the state / UT government is required",
      type: "income",
    },
  ],
  benefits: [
    "₹50,000 per annum for every year of study",
    "Covers tuition fees and other academic expenses",
    "Disbursed annually through DBT via the National Scholarship Portal",
    "Available for the full duration of the course (up to 4 years for Degree; up to 3 years via lateral entry)",
  ],
  requiredDocuments: [
    { name: "Copy of SSC / 10th certificate", mandatory: true },
    {
      name: "Copy of HSC / 12th certificate",
      mandatory: false,
      note: "Required for Degree-level applicants",
    },
    {
      name: "Copy of ITI certificate",
      mandatory: false,
      note: "Required for lateral entry into Diploma-level courses",
    },
    {
      name: "Copy of Diploma certificate",
      mandatory: false,
      note: "Required for lateral entry into Degree-level courses",
    },
    { name: "Bank Passbook (student's own account)", mandatory: true },
    {
      name: "Category Certificate (SC / ST / OBC / EWS)",
      mandatory: false,
      note: "Required if applicable",
    },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Study / Bonafide Certificate (Appendix-I)", mandatory: true },
    { name: "Annual Family Income Certificate (Appendix-II)", mandatory: true },
    { name: "Parent's Declaration (Appendix-III)", mandatory: true },
    { name: "Bank Mandate Form (Appendix-IV)", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "girl students",
    "women",
    "AICTE",
    "Pragati",
    "degree",
    "diploma",
    "technical",
    "lateral entry",
    "NSP",
    "DBT",
  ],
  faqs: [
    {
      q: "Who is eligible for the AICTE Pragati Scholarship?",
      a: "Girl students admitted to the first year (or second year via lateral entry) of an AICTE-approved Degree or Diploma programme, whose family annual income does not exceed ₹8,00,000.",
    },
    {
      q: "Can two sisters from the same family both apply?",
      a: "Yes. Up to two girl students from the same family can receive the scholarship simultaneously.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in), select AICTE Pragati, upload the required documents, and submit the application. Your institution will then verify the application.",
    },
    {
      q: "How is the scholarship amount disbursed?",
      a: "The scholarship is credited annually to the student's own bank account through Direct Benefit Transfer (DBT) via the National Scholarship Portal.",
    },
    {
      q: "Is renewal required each year?",
      a: "Yes. Students must submit a renewal application on the National Scholarship Portal each academic year along with updated documents and a passing certificate.",
    },
  ],
  source: "sample",
};
