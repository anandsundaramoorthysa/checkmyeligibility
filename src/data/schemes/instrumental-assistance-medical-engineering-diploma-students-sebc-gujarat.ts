import type { Scheme } from "@/lib/types";

export const instrumentalAssistanceMedicalEngineeringDiplomaStudentsSebcGujarat: Scheme = {
  id: "instrumental-assistance-medical-engineering-diploma-students-sebc-gujarat",
  slug: "instrumental-assistance-medical-engineering-diploma-students-sebc-gujarat-mq3fn8wp",
  name: "Instrumental Assistance for Medical, Engineering, Diploma Students (SEBC), Gujarat",
  shortName: "BCK-80 SEBC Gujarat",
  summary:
    "One-time financial assistance of up to ₹10,000 per year for SEBC students in Gujarat pursuing Medical, Engineering, or Diploma courses to help purchase essential study instruments and equipment.",
  description:
    "The Instrumental Assistance for Medical, Engineering, and Diploma Students (SEBC) is a state-level welfare scheme administered by the Social Justice and Empowerment Department, Government of Gujarat, under the Director, Developing Castes Welfare. The scheme is identified by the code BCK-80 on the Digital Gujarat Portal.\n\nThe scheme provides one-time financial assistance to students belonging to the Socially and Educationally Backward Classes (SEBC) category who are enrolled in Medical, Engineering, or Diploma courses in recognised institutions within Gujarat. The assistance is intended to help students purchase the professional instruments, tools, and equipment required for their respective courses.\n\nThe grant amount varies by course: ₹10,000 per year for Medical students, ₹5,000 per year for Engineering students, and ₹3,000 per year for Diploma students. The scheme is designed to reduce the financial burden on students from economically weaker backgrounds who need specialised equipment for their professional training.\n\nApplications are accepted exclusively online through the Digital Gujarat Portal (digitalgujarat.gov.in). The application window typically opens between June and August each year.",
  category: "social-welfare",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident of Gujarat",
      type: "residence",
    },
    {
      label: "Caste category",
      value:
        "Must belong to the Socially and Educationally Backward Classes (SEBC) category, as certified by the competent authority of the Government of Gujarat",
      type: "caste-category",
    },
    {
      label: "Course & institution",
      value:
        "Must be enrolled in a recognised Medical, Engineering, or Diploma course within Gujarat",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Total annual family income from all sources must not exceed ₹2,50,000 per annum",
      type: "income",
    },
  ],
  benefits: [
    "Medical students: ₹10,000 per year for purchasing professional instruments and equipment",
    "Engineering students: ₹5,000 per year for purchasing professional instruments and equipment",
    "Diploma students: ₹3,000 per year for purchasing professional instruments and equipment",
    "One-time financial assistance per year for the duration of the course",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "SEBC Caste Certificate",
      mandatory: true,
      note: "Issued by the competent authority of the Government of Gujarat",
    },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Showing annual family income from all sources not exceeding ₹2,50,000",
    },
    {
      name: "Current year fee receipt",
      mandatory: true,
      note: "Proof of admission in the current academic year",
    },
    {
      name: "Previous year marksheet",
      mandatory: true,
    },
    {
      name: "Bank Passbook or Cancelled Cheque",
      mandatory: true,
      note: "Aadhaar-seeded bank account for Direct Benefit Transfer",
    },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://digitalgujarat.gov.in/",
  ministry:
    "Social Justice and Empowerment Department / Director, Developing Castes Welfare, Government of Gujarat",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "instrumental assistance",
    "SEBC",
    "Gujarat",
    "state scholarship",
    "medical",
    "engineering",
    "diploma",
    "equipment",
    "Digital Gujarat",
    "BCK-80",
    "backward classes",
    "social welfare",
    "professional courses",
  ],
  faqs: [
    {
      q: "Who is eligible for the Instrumental Assistance (SEBC) scheme in Gujarat?",
      a: "Students belonging to the Socially and Educationally Backward Classes (SEBC) category, permanently resident of Gujarat, enrolled in a recognised Medical, Engineering, or Diploma course within Gujarat, with annual family income not exceeding ₹2,50,000.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "₹10,000 per year for Medical students, ₹5,000 per year for Engineering students, and ₹3,000 per year for Diploma students, to help purchase professional instruments and equipment.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Apply online through the Digital Gujarat Portal (digitalgujarat.gov.in). Register, complete your profile, select the scheme under Scholarship Services > SEBC Scheme, fill the application, upload required documents, and submit.",
    },
    {
      q: "Can I apply if I am studying outside Gujarat?",
      a: "No. The scheme covers only institutes within Gujarat. Students studying outside the state are not eligible.",
    },
    {
      q: "Is there an application fee?",
      a: "No. The application is completely free of charge.",
    },
    {
      q: "What documents are required?",
      a: "Aadhaar Card, SEBC Caste Certificate, Income Certificate, current year fee receipt, previous year marksheet, bank passbook or cancelled cheque, and a passport-size photograph.",
    },
  ],
  source: "sample",
};
