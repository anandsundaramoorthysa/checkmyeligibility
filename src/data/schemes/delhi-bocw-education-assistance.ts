import type { Scheme } from "@/lib/types";

export const delhiBocwEducationAssistance: Scheme = {
  id: "delhi-bocw-education-assistance",
  slug: "delhi-bocw-education-assistance",
  name: "Delhi BOCW Board Education Assistance Scheme",
  shortName: "Delhi BOCW Education",
  summary:
    "Up to ₹1,20,000 per year for higher and professional education of children of registered construction workers in Delhi.",
  description:
    "The Delhi Building and Other Construction Workers' Welfare Board (BOCW) provides educational assistance to the children of registered construction workers in Delhi for pursuing higher and professional education. The scheme offers financial assistance of up to ₹1,20,000 per year for courses such as B.Tech, MBBS, BBA, BCA, and other professional programmes at recognised institutions. The scheme also covers school education from Class 1 to Class 12 with varying amounts. The objective is to ensure educational upliftment of children belonging to economically weaker sections of construction workers and to reduce dropout rates.",
  category: "education",
  level: "state",
  states: ["delhi"],
  eligibility: [
    {
      label: "Parent registration",
      value: "Parent (father or mother) must be a registered construction worker with the Delhi BOCW Board",
      type: "occupation",
    },
    {
      label: "Residence",
      value: "Must be a resident of Delhi (parent's registered address with BOCW Board should be in Delhi)",
      type: "residence",
    },
    {
      label: "Education level",
      value: "Must be studying in Class 1 to Class 12 or pursuing a professional/higher education course",
      type: "education",
    },
    {
      label: "Institution",
      value: "Must be studying in a recognised school or institution",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Must have passed the previous examination (for renewal of assistance)",
      type: "education",
    },
  ],
  benefits: [
    "Up to ₹1,20,000 per year for professional courses (B.Tech, MBBS, BBA, BCA, etc.)",
    "₹5,000 to ₹25,000 per year for school education (Class 1 to Class 12)",
    "Covers tuition fees, books, and other educational expenses",
    "Renewable each year subject to continued eligibility and academic performance",
    "Direct benefit transfer to the student's or parent's bank account",
  ],
  requiredDocuments: [
    { name: "Parent's BOCW registration certificate", mandatory: true },
    { name: "Aadhaar Card of the student", mandatory: true },
    { name: "Previous year marksheet / pass certificate", mandatory: true },
    { name: "Bank passbook (account number and IFSC)", mandatory: true },
    { name: "Admission letter / bonafide from current institution", mandatory: true },
    { name: "Fee receipt of current year", mandatory: true },
    { name: "Delhi residence proof", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://delhibocw.delhi.gov.in",
  ministry: "Labour Department, Government of NCT of Delhi",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "education assistance",
    "construction workers",
    "BOCW",
    "Delhi",
    "state",
    "professional courses",
    "higher education",
    "school education",
    "children of workers",
  ],
  faqs: [
    {
      q: "Who is eligible for the Delhi BOCW Education Assistance?",
      a: "Children of registered construction workers with the Delhi BOCW Board, residing in Delhi, studying in Class 1 to Class 12 or pursuing professional/higher education.",
    },
    {
      q: "How much financial assistance can I get for a professional course?",
      a: "You can receive up to ₹1,20,000 per year for professional courses like B.Tech, MBBS, BBA, BCA, etc.",
    },
    {
      q: "Is this scheme available for students studying outside Delhi?",
      a: "The scheme is primarily for students studying in Delhi. Contact the Delhi BOCW Board for specific queries about studying outside the state.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the Delhi BOCW Board portal or visit the nearest BOCW office. Submit all required documents along with the application.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
