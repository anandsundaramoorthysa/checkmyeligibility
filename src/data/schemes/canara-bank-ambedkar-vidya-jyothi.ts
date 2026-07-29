import type { Scheme } from "@/lib/types";

export const canaraBankAmbedkarVidyaJyothi: Scheme = {
  id: "canara-bank-ambedkar-vidya-jyothi",
  slug: "canara-bank-ambedkar-vidya-jyothi-m4x8vk2r",
  name: "Canara Bank Dr. Ambedkar Vidya Jyothi Scholarship",
  shortName: "Ambedkar Vidya Jyothi",
  summary:
    "₹20,000 per year for Class 5 to Class 10 students from SC/ST/BPL families, with 3,000 scholarships awarded annually across India.",
  description:
    "The Dr. Ambedkar Vidya Jyothi Scholarship, supported by Canara Bank under its CSR initiative, provides financial assistance of ₹20,000 per year to meritorious students from Scheduled Castes (SC), Scheduled Tribes (ST), and Below Poverty Line (BPL) families. The scholarship covers students from Class 5 to Class 10 and aims to reduce dropout rates among economically disadvantaged students. Approximately 3,000 scholarships are awarded annually across India. The scholarship amount is disbursed directly to the student's bank account to cover tuition fees, books, and other educational expenses.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Education level",
      value: "Must be studying in Class 5 to Class 10 in a recognised school",
      type: "education",
    },
    {
      label: "Community",
      value: "Must belong to Scheduled Caste (SC), Scheduled Tribe (ST), or Below Poverty Line (BPL) family",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Annual family income must be below the BPL threshold as per Government norms",
      type: "income",
    },
    {
      label: "Academic performance",
      value: "Must have scored at least 60% marks in the previous examination",
      type: "education",
    },
  ],
  benefits: [
    "₹20,000 per year for educational expenses",
    "Covers tuition fees, books, stationery, and other school-related costs",
    "Approximately 3,000 scholarships available annually",
    "Direct benefit transfer to the student's bank account",
  ],
  requiredDocuments: [
    { name: "Caste certificate (SC/ST) or BPL card", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Previous year marksheet", mandatory: true },
    { name: "Bank passbook (student's account)", mandatory: true },
    { name: "School bonafide / admission letter", mandatory: true },
    { name: "Income certificate / BPL certificate", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://www.canarabank.com",
  ministry: "Canara Bank (CSR Initiative)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "SC/ST",
    "BPL",
    "Class 5 to Class 10",
    "Canara Bank",
    "CSR",
    "central",
    "all India",
    "means-based",
    "merit-cum-means",
    "Ambedkar",
  ],
  faqs: [
    {
      q: "Who is eligible for the Dr. Ambedkar Vidya Jyothi Scholarship?",
      a: "Students from SC/ST/BPL families studying in Class 5 to Class 10 with at least 60% marks in the previous examination and annual family income below the BPL threshold.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Selected students receive ₹20,000 per year to cover tuition fees, books, and other educational expenses.",
    },
    {
      q: "How many scholarships are awarded each year?",
      a: "Approximately 3,000 scholarships are awarded annually across India.",
    },
    {
      q: "Can I apply if I am in Class 11?",
      a: "No, the scholarship is only available for students in Class 5 to Class 10.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
