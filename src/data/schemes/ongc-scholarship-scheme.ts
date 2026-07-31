import type { Scheme } from "@/lib/types";

export const ongcScholarshipScheme: Scheme = {
  id: "ongc-scholarship-scheme",
  slug: "ongc-scholarship-scheme-mri0tn02",
  name: "ONGC Scholarship Scheme",
  shortName: "ONGC Scholarship",
  summary:
    "₹48,000 per year (₹4,000 per month) scholarship by ONGC Foundation for meritorious students from economically weaker backgrounds pursuing professional courses, renewable each year based on academic performance.",
  description:
    "The ONGC Scholarship Scheme is offered by the ONGC Foundation to support meritorious students from economically weaker backgrounds pursuing professional courses in India.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Enrollment",
      value: "Must be studying in the 1st year of an eligible full-time professional course",
      type: "education",
    },
    {
      label: "Academic merit",
      value: "Minimum 60% marks or 6.0 CGPA in the qualifying examination",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Age should generally be below 30 years",
      type: "age",
    },
    {
      label: "Income limit (SC/ST)",
      value: "SC/ST candidates: Annual family income must be less than ₹4.5 lakh",
      type: "income",
    },
    {
      label: "Income limit (OBC/General/EWS)",
      value: "OBC and General/EWS candidates: Annual family income must be less than ₹2 lakh",
      type: "income",
    },
  ],
  benefits: [
    "₹48,000 per year (equivalent to ₹4,000 per month)",
    "Renewable every year based on academic performance",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Class 10 and 12 Mark Sheets", mandatory: true },
    {
      name: "Graduation Marksheet",
      mandatory: false,
      note: "Required for MBA/PG applicants",
    },
    { name: "Income Certificate", mandatory: true },
    {
      name: "Caste Certificate",
      mandatory: false,
      note: "Required if applicable",
    },
    { name: "Admission Proof", mandatory: true },
    { name: "Bank Passbook Copy", mandatory: true },
    { name: "PAN Card Copy", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://ongcscholar.org/#/",
  ministry: "ONGC Foundation",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "ONGC",
    "ONGC Foundation",
    "SC",
    "ST",
    "OBC",
    "General",
    "EWS",
    "merit",
    "women",
    "professional courses",
    "UG",
    "PG",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "Who is eligible for the ONGC Scholarship Scheme?",
      a: "Indian citizens studying in the 1st year of an eligible full-time professional course, with minimum 60% marks or 6.0 CGPA in the qualifying examination, generally below 30 years of age, and with annual family income below ₹4.5 lakh (SC/ST) or ₹2 lakh (OBC and General/EWS).",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Selected students receive ₹48,000 per year (equivalent to ₹4,000 per month). The scholarship is renewable every year based on academic performance.",
    },
    {
      q: "What documents are required?",
      a: "Aadhaar card, Class 10 and 12 mark sheets, graduation marksheet (for MBA/PG applicants), income certificate, caste certificate (if applicable), admission proof, bank passbook copy, PAN card copy, and passport-size photograph.",
    },
    {
      q: "What is the application process?",
      a: "Register as a new user on the official ONGC Scholarship Portal (ongcscholar.org) with your name, mobile number, email ID, category, and course details. Fill in the online application form, upload the required documents, and submit it online. After submission, download and print the form, get it attested by the Head of Department, Principal, or Dean, and submit the attested hard copy to the designated ONGC office if required for that application cycle. Track your application status through the portal using your login credentials.",
    },
    {
      q: "Can I apply if I am already in a higher year of study?",
      a: "No. Applicants must be studying in the 1st year of an eligible full-time professional course to qualify for this scholarship.",
    },
  ],
  source: "sample",
};
