import type { Scheme } from "@/lib/types";

export const drAmbedkarPostMatricScholarshipPunjab: Scheme = {
  id: "dr-ambedkar-post-matric-scholarship-punjab",
  slug: "dr-ambedkar-post-matric-scholarship-punjab-9xen1hzi",
  name: "Dr. Ambedkar Post-Matric Scholarship \u2013 Punjab",
  shortName: "Dr. Ambedkar PMS (Punjab)",
  summary:
    "Up to \u20B920,000 per year post-matric scholarship for SC/BC/OBC students in Punjab, covering Class 11 through PhD with a \u20B925,000 one-time merit award and disability allowances.",
  description:
    "The Dr. Ambedkar Post-Matric Scholarship is a Punjab state scheme under the Department of Welfare of Scheduled Castes and Backward Classes. It supports SC students (income \u2264 \u20B92.5 lakh) and BC/OBC students (income \u2264 \u20B910 lakh) for post-matric education from Class 11 through PhD.",
  category: "scholarship",
  level: "state",
  states: ["punjab"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must have a Punjab domicile",
      type: "residence",
    },
    {
      label: "Category",
      value: "Must belong to the SC or BC/OBC category as recognised by the Punjab state government",
      type: "caste-category",
    },
    {
      label: "Income (SC)",
      value: "SC candidates: Annual family income must not exceed \u20B92,50,000",
      type: "income",
    },
    {
      label: "Income (BC/OBC)",
      value: "BC/OBC candidates: Annual family income must not exceed \u20B910,00,000",
      type: "income",
    },
    {
      label: "Course level",
      value: "Must be enrolled in a recognised institution for post-matric education (Class 11 onwards) including diplomas, UG, PG, and PhD programmes",
      type: "education",
    },
    {
      label: "Other scholarships",
      value: "Must not be holding any other scholarship simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "Up to \u20B920,000 per year towards educational expenses",
    "\u20B925,000 one-time exceptional merit award on completion of degree",
    "Transport allowance for students with disabilities: \u20B9160 per month",
    "Escort fee for students with disabilities: \u20B9160 per month",
    "Special pay for students with disabilities: \u20B9160 per month",
    "Scholarship credited directly to the student's bank account via DBT",
  ],
  requiredDocuments: [
    {
      name: "Punjab Domicile Certificate",
      mandatory: true,
    },
    {
      name: "SC/BC/OBC Caste Certificate",
      mandatory: true,
      note: "Must be issued by the Punjab state government",
    },
    {
      name: "Income Certificate",
      mandatory: true,
    },
    {
      name: "Previous Year Mark Sheets",
      mandatory: true,
    },
    {
      name: "Aadhaar Card",
      mandatory: true,
    },
    {
      name: "Admission / Bonafide Certificate",
      mandatory: true,
    },
    {
      name: "Bank Passbook",
      mandatory: true,
    },
    {
      name: "Disability Certificate",
      mandatory: false,
      note: "Required if claiming additional allowances for persons with disabilities",
    },
  ],
  officialPortalUrl: "https://scholarships.punjab.gov.in/",
  ministry:
    "Department of Welfare of Scheduled Castes and Backward Classes, Government of Punjab",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "post-matric",
    "Punjab",
    "Dr. Ambedkar",
    "SC",
    "ST",
    "OBC",
    "BC",
    "state scholarship",
    "domicile",
    "DBT",
    "higher education",
  ],
  faqs: [
    {
      q: "Who is eligible for this scholarship?",
      a: "Students with Punjab domicile belonging to SC (income \u2264 \u20B92.5 lakh) or BC/OBC (income \u2264 \u20B910 lakh) categories, enrolled in a recognised institution for post-matric education from Class 11 through PhD. Must not hold any other scholarship simultaneously.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Up to \u20B920,000 per year towards educational expenses. A one-time exceptional merit award of \u20B925,000 is given on completion of degree. Students with disabilities also receive transport allowance, escort fee, and special pay of \u20B9160 per month each.",
    },
    {
      q: "What is the application process?",
      a: "Visit the Punjab Scholarship Portal (scholarships.punjab.gov.in), register with your Aadhaar card and mobile number, select the Dr. Ambedkar Post-Matric Scholarship, fill in personal and academic details, upload required documents, and submit before the annual deadline. The institution verifies the application, and the scholarship is credited directly to your bank account.",
    },
    {
      q: "What documents are required?",
      a: "Punjab domicile certificate, SC/BC/OBC caste certificate (Punjab state), income certificate, previous year mark sheets, Aadhaar card, admission/bonafide certificate, bank passbook, and disability certificate (if applicable).",
    },
    {
      q: "Can I receive this scholarship along with other scholarships?",
      a: "No. Students must not be holding any other scholarship simultaneously to be eligible for this scheme.",
    },
  ],
  source: "sample",
};
