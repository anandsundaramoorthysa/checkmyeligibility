import type { Scheme } from "@/lib/types";

export const rajarshiShahuMaharajShikshanShulkShishyavruttiYojnaEbc: Scheme = {
  id: "rajarshi-shahu-maharaj-shikshan-shulk-shishyavrutti-yojna-ebc",
  slug: "rajarshi-shahu-maharaj-shikshan-shulk-shishyavrutti-yojna-ebc-mrdtummf",
  name: "Rajarshi Shahu Maharaj Shikshan Shulk Shishyavrutti Yojna (EBC)",
  shortName: "Shahu Maharaj EBC",
  summary:
    "Maharashtra government scheme providing 50%–100% tuition and exam fee reimbursement to economically backward students (EBC) pursuing professional and non-professional PG courses, with family income up to ₹8 lakh.",
  description:
    "The Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojna (EBC) is a Maharashtra government initiative. It provides financial assistance for tuition and exam fees to economically backward students pursuing higher education. Eligible students must have a family income under ₹8 lakhs and secure admission through the Centralized Admission Process (CAP).",
  category: "scholarship",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a domicile of Maharashtra",
      type: "residence",
    },
    {
      label: "Admission",
      value: "Admitted through the Centralized Admission Process (CAP) in government, aided, or permanently unaided institutions",
      type: "education",
    },
    {
      label: "Courses",
      value: "Professional and technical courses (Diploma, UG, PG) recognized by DHE/DTE",
      type: "education",
    },
    {
      label: "Income limit",
      value: "Total annual family income must not exceed ₹8 lakhs",
      type: "income",
    },
    {
      label: "Quota",
      value: "Admitted under the general/open category",
      type: "caste-category",
    },
    {
      label: "Family benefit limit",
      value: "Restricted to a maximum of 2 children per family",
      type: "other",
    },
    {
      label: "Attendance",
      value: "Minimum of 50% attendance in the previous semester (except for fresh admits)",
      type: "education",
    },
  ],
  benefits: [
    "Professional courses: 100% tuition and exam fee reimbursement for family income up to ₹2.5 lakh",
    "Professional courses: 50% tuition and exam fee reimbursement for family income ₹2.5–8 lakh",
    "Non-professional courses: 100% tuition and exam fee reimbursement for family income up to ₹8 lakh",
    "Covers Diploma, UG, and PG courses recognized by DHE/DTE",
  ],
  requiredDocuments: [
    { name: "Domicile Certificate: Student's Maharashtra domicile certificate", mandatory: true },
    { name: "Income Certificate: Current financial year family income certificate issued by the Tehsildar", mandatory: true },
    { name: "CAP Allotment Letter: Proof of admission through the centralized process", mandatory: true },
    { name: "Academic Mark Sheets: SSC, HSC, and mark sheets from all previous academic years", mandatory: true },
    { name: "Fee Receipt: College fee receipt for the current academic year", mandatory: true },
    { name: "Undertaking: A family declaration regarding the number of children benefitting from the scheme", mandatory: true },
  ],
  officialPortalUrl: "https://mahadbt.maharashtra.gov.in/",
  ministry:
    "Directorate of Higher Education (DHE) / Directorate of Technical Education (DTE) / Government of Maharashtra",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "EBC",
    "EWS",
    "economically backward",
    "fee reimbursement",
    "tuition fee",
    "Maharashtra",
    "state",
    "PG",
    "Diploma",
    "UG",
    "CAP",
    "MahaDBT",
    "Aaple Sarkar",
  ],
  faqs: [
    {
      q: "Who is eligible for the Rajarshi Shahu Maharaj EBC scheme?",
      a: "Students who are domiciled in Maharashtra, admitted through CAP under the general/open category, pursuing professional or non-professional courses recognized by DHE/DTE, with an annual family income not exceeding ₹8 lakh. The benefit is limited to a maximum of 2 children per family.",
    },
    {
      q: "How much fee reimbursement is provided?",
      a: "For professional courses: 100% reimbursement if family income is up to ₹2.5 lakh, and 50% if income is between ₹2.5–8 lakh. For non-professional courses: 100% reimbursement for all income brackets up to ₹8 lakh.",
    },
    {
      q: "What courses are covered?",
      a: "Professional and technical courses including Diploma, Undergraduate (UG), and Postgraduate (PG) programmes recognized by the Directorate of Higher Education (DHE) or Directorate of Technical Education (DTE).",
    },
    {
      q: "How do I apply?",
      a: "Register on the Aaple Sarkar DBT Portal (MahaDBT) using your Aadhaar number, fill out your student profile, upload required documents (income and domicile certificates), search for the scheme under DHE or DTE, upload fee receipts and CAP letters, and submit online.",
    },
    {
      q: "What documents are required?",
      a: "Maharashtra domicile certificate, current year income certificate from Tehsildar, CAP allotment letter, SSC/HSC and previous year mark sheets, current year fee receipt, and a family undertaking declaring the number of children benefitting from the scheme.",
    },
  ],
  source: "sample",
};
