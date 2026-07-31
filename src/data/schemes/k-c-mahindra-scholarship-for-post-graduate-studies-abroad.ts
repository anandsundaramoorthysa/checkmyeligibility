import type { Scheme } from "@/lib/types";

export const kCMahindraScholarshipForPostGraduateStudiesAbroad: Scheme = {
  id: "k-c-mahindra-scholarship-for-post-graduate-studies-abroad",
  slug: "k-c-mahindra-scholarship-for-post-graduate-studies-abroad",
  name: "K.C. Mahindra Scholarship for Post-Graduate Studies Abroad",
  shortName: "K.C. Mahindra Scholarship",
  summary:
    "An interest-free loan scholarship of up to \u20B910 lakh for Indian students pursuing full-time postgraduate studies at reputed universities abroad, awarded by the K.C. Mahindra Education Trust.",
  description:
    "The K.C. Mahindra Scholarship for Post-Graduate Studies Abroad is an interest-free loan scholarship offered by the K.C. Mahindra Education Trust (KCMET) to support Indian students pursuing postgraduate studies at reputed universities abroad. It is one of India's oldest overseas education scholarships, established in 1956.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Academic qualification",
      value:
        "Must possess a First Class undergraduate degree or equivalent diploma from a recognised university",
      type: "education",
    },
    {
      label: "Admission status",
      value:
        "Must have secured admission or applied for admission to a recognised foreign university for a full-time postgraduate programme",
      type: "other",
    },
    {
      label: "Final-year applicants",
      value:
        "Final-year students may apply if they can provide final results later",
      type: "other",
    },
  ],
  benefits: [
    "Interest-free loan scholarship for overseas postgraduate studies",
    "Top 3 K.C. Mahindra Fellows: up to \u20B910 lakh",
    "Other selected scholars: up to \u20B95 lakh",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Updated Resume / CV", mandatory: true },
    { name: "Statement of Purpose (SOP)", mandatory: true },
    {
      name: "Undergraduate mark sheets and transcripts",
      mandatory: true,
    },
    { name: "Class 10 and 12 mark sheets", mandatory: true },
    {
      name: "Admission letter from the foreign university (if available)",
      mandatory: false,
    },
    {
      name: "GRE / GMAT / GATE scores (if applicable)",
      mandatory: false,
    },
    {
      name: "IELTS / TOEFL scores (if applicable)",
      mandatory: false,
    },
    { name: "Letters of Recommendation (LORs)", mandatory: true },
    { name: "Valid Passport copy", mandatory: true },
    { name: "Rank certificate (if applicable)", mandatory: false },
    {
      name: "Guarantor details (usually parent or spouse)",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://scholarship.kcmet.org/",
  applicationMode: ["online"],
  tags: [
    "K.C. Mahindra",
    "KCMET",
    "scholarship",
    "overseas",
    "postgraduate",
    "abroad",
    "interest-free loan",
    "merit",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "Who can apply for the K.C. Mahindra Scholarship?",
      a: "Indian citizens who hold a First Class undergraduate degree from a recognised university and have secured or applied for admission to a recognised foreign university for a full-time postgraduate programme.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Top 3 K.C. Mahindra Fellows receive up to \u20B910 lakh, and other selected scholars receive up to \u20B95 lakh as an interest-free loan.",
    },
    {
      q: "Is this a grant or a loan?",
      a: "It is an interest-free loan scholarship. Selected scholars are expected to repay the amount without interest after completing their studies.",
    },
    {
      q: "How do I apply?",
      a: "Visit the KCMET scholarship portal at scholarship.kcmet.org, register with your email ID, complete the online application form, upload the required documents, and submit before the deadline. Shortlisted candidates are invited for an interview.",
    },
    {
      q: "Can final-year students apply?",
      a: "Yes, final-year students may apply if they can provide their final results at a later stage.",
    },
  ],
  source: "sample",
};
