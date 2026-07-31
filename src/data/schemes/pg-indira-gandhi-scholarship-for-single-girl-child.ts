import type { Scheme } from "@/lib/types";

export const pgIndiraGandhiScholarshipForSingleGirlChild: Scheme = {
  id: "pg-indira-gandhi-scholarship-for-single-girl-child",
  slug: "pg-indira-gandhi-scholarship-for-single-girl-child",
  name: "PG Indira Gandhi Scholarship for Single Girl Child",
  shortName: "PG Indira Gandhi Scholarship",
  summary:
    "₹36,200 per annum for 2 years for single girl children pursuing a regular, full-time postgraduate degree at a UGC-recognised institution.",
  description:
    "The PG Indira Gandhi Scholarship for Single Girl Child is a scheme run by the University Grants Commission (UGC) to support single girl children pursuing higher education. It provides financial assistance to girls who are the only child in their family (twin daughters are also eligible) and who are enrolled in the first year of a regular, full-time, non-professional Master's degree programme at a UGC-recognised university or college. The scholarship aims to encourage families to support their daughters' higher education and to promote gender parity in postgraduate enrolment.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Family status",
      value: "Must be the only girl child in the family (twin daughters are also eligible)",
      type: "other",
    },
    {
      label: "Course",
      value:
        "Enrolled in the first year of a regular, full-time Master's degree at a UGC-recognised university or college; professional degrees such as MBA and M.Tech are not covered, and distance-education students are not eligible",
      type: "education",
    },
    {
      label: "Age",
      value: "Not more than 30 years at the time of admission",
      type: "age",
    },
    {
      label: "Renewal",
      value:
        "Second-year renewal requires a minimum of 55% marks in the first year (50% for physically challenged students)",
      type: "other",
    },
    {
      label: "Annual family income",
      value: "No income ceiling",
      type: "income",
    },
  ],
  benefits: [
    "₹36,200 per annum for the 2-year postgraduate programme",
    "Disbursed directly to the student's bank account via the National Scholarship Portal",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Proof of postgraduate admission", mandatory: true },
    { name: "UGC-prescribed joining report", mandatory: true },
    {
      name: "Single-girl-child affidavit on ₹50 stamp paper",
      mandatory: true,
      note: "Must be attested by a Gazetted Officer or SDM",
    },
    { name: "Self-attested previous degree certificate and mark sheets", mandatory: true },
    { name: "Current year fee receipt", mandatory: true },
    { name: "Bank passbook copy", mandatory: true },
    { name: "Student identity card", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "University Grants Commission (UGC) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "single girl child",
    "postgraduate",
    "pg",
    "ugc",
    "women",
    "girls",
    "masters",
    "nsp",
  ],
  faqs: [
    {
      q: "Who is eligible for the PG Indira Gandhi Scholarship for Single Girl Child?",
      a: "Girls who are the only child in their family (twin daughters also qualify), enrolled in the first year of a regular, full-time, non-professional Master's degree at a UGC-recognised institution, aged 30 or below at admission.",
    },
    {
      q: "Is there an income limit for this scholarship?",
      a: "No. There is no annual family income ceiling for this scheme.",
    },
    {
      q: "How much financial support does the scholarship provide?",
      a: "₹36,200 per annum, for both years of the postgraduate programme, subject to satisfactory renewal in the second year.",
    },
    {
      q: "How do I apply?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in) using One-Time Registration (OTR) with biometric authentication, then log in, select the scheme, complete the form, and upload the required documents.",
    },
  ],
  source: "sample",
};
