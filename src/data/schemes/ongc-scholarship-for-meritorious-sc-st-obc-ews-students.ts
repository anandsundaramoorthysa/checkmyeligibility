import type { Scheme } from "@/lib/types";

export const ongcScholarshipForMeritoriousScStObcEwsStudents: Scheme = {
  id: "ongc-scholarship-for-meritorious-sc-st-obc-ews-students",
  slug: "ongc-scholarship-for-meritorious-sc-st-obc-ews-students-mrcbu88q",
  name: "ONGC Scholarship for Meritorious SC/ST/OBC/EWS Students",
  shortName: "ONGC Merit Scholarship",
  summary:
    "₹4,000 per month scholarship by ONGC Foundation for economically weaker SC/ST/OBC/EWS students pursuing professional courses (Engineering, MBBS, MBA, MSc Geology/Geophysics) with 50% slots reserved for women.",
  description:
    "The ONGC Merit Scholarship Scheme is a dedicated CSR initiative by the ONGC Foundation designed to financially support economically weaker students from marginalized communities pursuing professional higher education in India. The scholarship offers a substantial cash incentive to ensure that financial constraints do not hinder talented students from completing their degrees. It covers specific professional streams including Engineering, MBBS, MBA, and Master's degrees in Geology or Geophysics. A standout feature of this scheme is its strong focus on women's empowerment, strictly reserving 50% of the total 2,000 available slots for eligible female candidates across all categories.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Enrollment",
      value: "Must be a first-year full-time regular student enrolled in an AICTE or UGC-recognized institution",
      type: "education",
    },
    {
      label: "Academic merit",
      value: "Minimum 60% marks or 6.0 CGPA in the qualifying examination (Class 12 for UG, Graduation for PG)",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum 30 years as of 1st October of the admission year",
      type: "age",
    },
    {
      label: "Income limit (SC/ST)",
      value: "Gross annual family income must not exceed ₹4.5 Lakhs",
      type: "income",
    },
    {
      label: "Income limit (OBC/General/EWS)",
      value: "Gross annual family income must not exceed ₹2.0 Lakhs",
      type: "income",
    },
  ],
  benefits: [
    "₹4,000 per month scholarship",
    "2,000 scholarships available annually",
    "50% of slots reserved for eligible female candidates across all categories",
    "Covers Engineering, MBBS, MBA, and Master's degrees in Geology or Geophysics",
    "Disbursed directly to the student's bank account",
  ],
  requiredDocuments: [
    { name: "Class 10 marksheet", mandatory: true },
    { name: "Class 12 marksheet (for UG courses)", mandatory: true },
    { name: "Graduation degree certificate (for PG courses)", mandatory: true },
    { name: "Caste Certificate or EWS Certificate issued by competent government authority", mandatory: true },
    { name: "Family Income Certificate", mandatory: true },
    { name: "Bank passbook or cancelled cheque linked to Aadhaar", mandatory: true },
    { name: "Aadhaar Card or valid government Photo ID", mandatory: true },
    { name: "Admission Proof or College Fee Receipt", mandatory: true },
  ],
  officialPortalUrl: "https://www.ongcfoundation.org/scholarship-scheme/",
  ministry:
    "ONGC Foundation / Ministry of Petroleum and Natural Gas",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "ONGC",
    "SC",
    "ST",
    "OBC",
    "EWS",
    "merit",
    "Engineering",
    "MBBS",
    "MBA",
    "Geology",
    "Geophysics",
    "women",
    "CSR",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "Who is eligible for the ONGC Merit Scholarship?",
      a: "First-year full-time students from SC/ST/OBC/EWS categories enrolled in AICTE or UGC-recognized institutions, with minimum 60% marks in the qualifying exam, family income below ₹4.5 Lakhs (SC/ST) or ₹2.0 Lakhs (OBC/General/EWS), and under 30 years of age.",
    },
    {
      q: "What courses are covered?",
      a: "Professional courses including Engineering, MBBS, MBA, and Master's degrees in Geology or Geophysics.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Selected students receive ₹4,000 per month for the duration of their course.",
    },
    {
      q: "Is there a reservation for women?",
      a: "Yes, 50% of the total 2,000 available slots are reserved for eligible female candidates across all categories.",
    },
    {
      q: "How do I apply?",
      a: "Applications are accepted online through the ONGC Foundation portal or designated national scholarship portals during the active registration window. Register, upload scanned copies of required documents, and submit the digital form before the deadline.",
    },
  ],
  source: "sample",
};
