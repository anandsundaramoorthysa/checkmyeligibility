import type { Scheme } from "@/lib/types";

export const preMatricScholarshipSchemeForObcStudents: Scheme = {
  id: "pre-matric-scholarship-scheme-for-obc-students",
  slug: "pre-matric-scholarship-scheme-for-obc-students-c8t3wpnx",
  name: "Pre-Matric Scholarship Scheme for OBC Students",
  shortName: "PM OBC",
  summary:
    "Financial assistance of ₹100–₹500/month for OBC students studying in Class 1 to Class 10 in government or recognised private schools, with annual family income limit of ₹2.5 lakh.",
  description:
    "The Pre-Matric Scholarship Scheme for OBC Students is a Central Sector Scheme of the Ministry of Social Justice and Empowerment, Government of India. It provides financial assistance to OBC students from economically weaker sections studying in Class 1 to Class 10 in government or government-recognised private schools. The scheme aims to support school education of OBC children, prevent dropouts, and encourage continued education at the primary and secondary levels. The scholarship is administered through the National Scholarship Portal (NSP) and disbursed via Direct Benefit Transfer (DBT) to the student's Aadhaar-linked bank account. Applications are typically open from September to November each academic year.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to the Other Backward Classes (OBC) category with a valid OBC-NCL certificate",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Total annual family income from all sources must not exceed ₹2,50,000 per annum",
      type: "income",
    },
    {
      label: "Education level",
      value: "Must be studying in Class 1 to Class 10 in a government or recognised private school",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Must have passed the previous class with minimum 60% marks (55% for hostellers in some states)",
      type: "education",
    },
    {
      label: "Attendance",
      value: "Minimum 75% attendance in the previous academic year",
      type: "education",
    },
    {
      label: "Bank account",
      value: "Must have an Aadhaar-linked bank account in the student's own name",
      type: "other",
    },
  ],
  benefits: [
    "Day Scholars: ₹100 per month for Class 1 to Class 10",
    "Hostellers: ₹500 per month for Class 3 to Class 10",
    "Annual ad-hoc grant of ₹500 for books and stationery",
    "Scholarship is renewable each academic year subject to satisfactory academic performance",
    "Disbursed directly to the student's bank account via DBT",
  ],
  requiredDocuments: [
    { name: "OBC-NCL Caste Certificate", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "Family Income Certificate (annual income below ₹2.5 lakh)",
      mandatory: true,
    },
    {
      name: "Previous class marksheet",
      mandatory: true,
    },
    {
      name: "Current school bonafide certificate",
      mandatory: true,
    },
    {
      name: "Bank passbook (Aadhaar-linked, in student's name)",
      mandatory: true,
    },
    {
      name: "Attendance certificate from school",
      mandatory: true,
    },
    {
      name: "Domicile / nativity certificate (if applicable)",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Ministry of Social Justice and Empowerment, Government of India",
  applicationMode: ["online", "csc"],
  tags: [
    "scholarship",
    "pre-matric",
    "OBC",
    "other backward class",
    "central",
    "Class 1-10",
    "school",
    "NSP",
    "DBT",
    "all India",
    "Ministry of Social Justice",
    "day scholar",
    "hosteller",
    "maintenance allowance",
  ],
  faqs: [
    {
      q: "Who is eligible for the Pre-Matric Scholarship for OBC Students?",
      a: "OBC students studying in Class 1 to Class 10 in a government or recognised private school, with annual family income not exceeding ₹2.5 lakh. The student must have passed the previous class and maintain minimum 75% attendance.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Day scholars receive ₹100 per month and hostellers receive ₹500 per month, plus an annual ad-hoc grant of ₹500 for books and stationery.",
    },
    {
      q: "Can I apply if I am studying in a private school?",
      a: "Yes, if the private school is recognised by the government. The scheme covers both government and government-recognised private schools.",
    },
    {
      q: "How do I apply?",
      a: "Register and apply on the National Scholarship Portal (scholarships.gov.in). Complete the OTR process, select the Pre-Matric OBC Scholarship scheme, fill in personal and academic details, upload required documents, and submit before the annual deadline.",
    },
    {
      q: "Is the scholarship renewable?",
      a: "Yes, the scholarship is renewable each academic year subject to satisfactory academic performance (passing the previous class) and maintaining minimum 75% attendance.",
    },
    {
      q: "How is the scholarship disbursed?",
      a: "The scholarship amount is credited directly to the student's Aadhaar-linked bank account through Direct Benefit Transfer (DBT).",
    },
  ],
  lastVerified: "2026-07-25",
  source: "sample",
};
