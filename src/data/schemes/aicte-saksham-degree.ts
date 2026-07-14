import type { Scheme } from "@/lib/types";

export const aicteSakshamDegree: Scheme = {
  id: "aicte-saksham-degree",
  slug: "aicte-saksham-scholarship-scheme-for-specially-abled-student-degree-mrdub5jp",
  name: "AICTE – Saksham Scholarship Scheme For Specially-Abled Student (Degree)",
  shortName: "AICTE Saksham (Degree)",
  summary:
    "₹50,000 per year scholarship for specially-abled students (≥40% disability) enrolled in AICTE-approved degree-level technical programmes, disbursed via DBT through the National Scholarship Portal.",
  description:
    "Saksham is a Scholarship Scheme by the Ministry of Education, implemented by AICTE, aimed at providing encouragement and support to specially-abled children to pursue technical education. It gives every specially-abled young student the opportunity to study further and prepare for a successful future through technical education. The scholarship of ₹50,000 per annum covers college fees, computer, stationery, books, equipment, software, and other study-related expenses. It is available for the first year of degree-level programmes (maximum 4 years) and also for the second year through lateral entry (maximum 3 years). The candidate's family income must not exceed ₹8,00,000 per annum.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Course & Institution",
      value:
        "First year of a degree-level course OR second year through lateral entry in any AICTE-approved institution",
      type: "education",
    },
    {
      label: "Disability",
      value:
        "Permanent disability of not less than 40%, certified by a competent government-recognised medical authority",
      type: "other",
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
    "Maximum 4 years for students admitted to the first year",
    "Maximum 3 years for students admitted via lateral entry to the second year",
    "Covers college fee, computer, books, stationery, equipment, and software",
    "Disbursed annually through DBT (Direct Benefit Transfer) via the National Scholarship Portal",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "SSC / 10th certificate and mark sheet", mandatory: true },
    { name: "HSC / 12th certificate and mark sheet (for Degree level)", mandatory: true },
    {
      name: "Diploma certificate and mark sheet",
      mandatory: false,
      note: "Required only for students seeking lateral entry into the second year of a degree-level course",
    },
    {
      name: "Category Certificate (SC / ST / OBC)",
      mandatory: false,
      note: "Required if applicable",
    },
    {
      name: "Disability Certificate (minimum 40%) from a recognised medical authority",
      mandatory: true,
    },
    { name: "Study / Bonafide Certificate (Appendix-I)", mandatory: true },
    { name: "Annual Family Income Certificate (Appendix-II)", mandatory: true },
    { name: "Bank account details (student's own account)", mandatory: true },
    {
      name: "Promotion / Passing Certificate (Appendix-III)",
      mandatory: false,
      note: "Required only for renewal applications in subsequent years",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "specially abled",
    "divyang",
    "AICTE",
    "Saksham",
    "degree",
    "technical",
    "lateral entry",
    "NSP",
    "DBT",
  ],
  faqs: [
    {
      q: "What types of disability qualify for this scholarship?",
      a: "Any permanent disability of not less than 40% — including visual impairment, hearing impairment, locomotor disability, and other conditions — as certified by a competent government-recognised medical authority.",
    },
    {
      q: "Can lateral entry students apply?",
      a: "Yes. Students admitted to the second year of an AICTE-approved degree-level course through lateral entry are eligible and can receive the scholarship for a maximum of 3 years.",
    },
    {
      q: "How is the scholarship disbursed?",
      a: "The scholarship is paid annually as a lump sum through Direct Benefit Transfer (DBT) to the student's bank account after the student submits renewal on the National Scholarship Portal.",
    },
    {
      q: "Is renewal automatic each year?",
      a: "No. Students must submit a renewal application on the National Scholarship Portal each year, along with a passing certificate / mark sheet and a letter from the Head of the Institution.",
    },
    {
      q: "What is the last date to apply?",
      a: "The National Scholarship Portal publishes the opening and closing dates each academic year. Check scholarships.gov.in for current timelines.",
    },
  ],
  source: "sample",
};
