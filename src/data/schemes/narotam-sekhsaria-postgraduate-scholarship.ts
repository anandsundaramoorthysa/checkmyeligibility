import type { Scheme } from "@/lib/types";

export const narotamSekhsariaPostgraduateScholarship: Scheme = {
  id: "narotam-sekhsaria-postgraduate-scholarship",
  slug: "narotam-sekhsaria-postgraduate-scholarship-mri2dux5",
  name: "Narotam Sekhsaria Postgraduate Scholarship",
  shortName: "Narotam Sekhsaria",
  summary:
    "A merit-based, interest-free loan scholarship of up to ₹20 lakh for outstanding Indian students pursuing postgraduate studies at prestigious institutions in India and abroad.",
  description:
    "The Narotam Sekhsaria Postgraduate Scholarship is a merit-based, interest-free loan scholarship offered by the Narotam Sekhsaria Foundation to help outstanding Indian students pursue postgraduate studies at prestigious institutions in India and abroad. Along with financial support, selected scholars also receive mentorship and access to the foundation's scholar network.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen residing in India",
      type: "residence",
    },
    {
      label: "Age",
      value: "Must be below 30 years of age",
      type: "age",
    },
    {
      label: "Education",
      value: "Must have graduated from a recognized Indian university",
      type: "education",
    },
    {
      label: "Course",
      value: "Must be planning to pursue postgraduate studies at a reputed institution in India or abroad",
      type: "education",
    },
    {
      label: "Final year students",
      value: "Students in the final year of their degree or awaiting results can also apply",
      type: "education",
    },
    {
      label: "Admission status",
      value: "Candidates awaiting admission decisions are also eligible to apply; however, scholarship approval is subject to securing admission",
      type: "education",
    },
  ],
  benefits: [
    "Up to ₹20 lakh interest-free repayable financial assistance",
    "Amount may vary depending on course fees and financial requirement",
    "Mentorship and access to the foundation's scholar network",
  ],
  requiredDocuments: [
    { name: "Undergraduate mark sheets/transcripts", mandatory: true },
    { name: "Postgraduate mark sheets (if applicable)", mandatory: false },
    { name: "GRE/GMAT/CAT/GATE/IELTS/TOEFL scorecards (if applicable)", mandatory: false },
    { name: "University admission letter and fee structure", mandatory: true },
    { name: "Letters of Recommendation (LORs)", mandatory: true },
    { name: "Passport copy", mandatory: true },
    { name: "Latest Income Tax Returns of co-applicant/parent", mandatory: true },
    { name: "Proof of other scholarships or fee waivers", mandatory: false },
    { name: "Statement of Purpose (SOP)", mandatory: true },
    { name: "Identity proof and passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://pg.nsfoundation.co.in/",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "postgraduate",
    "PG",
    "PhD",
    "research",
    "merit",
    "interest-free loan",
    "narotam sekhsaria",
    "foundation",
    "all-india",
    "abroad",
  ],
  faqs: [
    {
      q: "Who is eligible for the Narotam Sekhsaria Postgraduate Scholarship?",
      a: "Indian citizens residing in India who are below 30 years of age, have graduated from a recognized Indian university, and are planning to pursue postgraduate studies at a reputed institution in India or abroad.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "The scholarship provides up to ₹20 lakh as interest-free repayable financial assistance. The amount may vary depending on course fees and financial requirement.",
    },
    {
      q: "Can final-year students apply?",
      a: "Yes, students in the final year of their degree or awaiting results can also apply. Candidates awaiting admission decisions are also eligible to apply, subject to securing admission.",
    },
    {
      q: "What is the application fee?",
      a: "The application fee is ₹500, which is non-refundable.",
    },
    {
      q: "How are scholars selected?",
      a: "Final selection is based on academic merit, profile strength, and interview performance. Shortlisted candidates attend online interviews.",
    },
  ],
  source: "sample",
};
