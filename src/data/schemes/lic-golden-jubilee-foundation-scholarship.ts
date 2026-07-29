import type { Scheme } from "@/lib/types";

export const licGoldenJubileeFoundationScholarship: Scheme = {
  id: "lic-golden-jubilee-foundation-scholarship",
  slug: "lic-golden-jubilee-foundation-scholarship-jziguxu7",
  name: "LIC Golden Jubilee Foundation Scholarship",
  shortName: "LIC GJF Scholarship",
  summary:
    "₹10,000–₹20,000 per year scholarship for meritorious students from economically weaker backgrounds pursuing UG, diploma, or professional courses.",
  description:
    "The LIC Golden Jubilee Foundation Scholarship is a CSR initiative by Life Insurance Corporation of India (LIC) supporting meritorious students from economically weaker backgrounds. It provides annual scholarships to students who have passed Class 12 and are enrolled in undergraduate degree, diploma, or professional courses. Priority is given to students from SC/ST communities, physically challenged students, orphans, and daughters of widows.",
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
      label: "Class 12 result",
      value: "Must have passed Class 12 with minimum 60% marks",
      type: "education",
    },
    {
      label: "Course enrolment",
      value: "Must be enrolled in the first year of a regular, full-time undergraduate degree, diploma, engineering, medical, or other professional course at a recognised institution",
      type: "education",
    },
    {
      label: "Family income",
      value: "Annual family income must not exceed ₹1,00,000 from all sources",
      type: "income",
    },
    {
      label: "Distance education",
      value: "Distance education students are not eligible",
      type: "other",
    },
  ],
  benefits: [
    "₹10,000 per year for regular courses",
    "₹20,000 per year for special category (physically challenged, orphan, widow daughter) and professional courses (MBBS, B.Tech, etc.)",
    "Renewable each year subject to maintaining satisfactory academic progress",
  ],
  requiredDocuments: [
    { name: "Class 12 marksheet (minimum 60%)", mandatory: true },
    { name: "Current admission letter or bonafide certificate from institution", mandatory: true },
    { name: "Family income certificate (annual income ≤ ₹1 lakh from competent authority)", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Bank account passbook (account number and IFSC)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Caste certificate (SC/ST applicants)", mandatory: false },
    { name: "Disability certificate (if physically challenged)", mandatory: false },
    { name: "Relevant proof for orphan or widow-daughter status (if applicable)", mandatory: false },
  ],
  officialPortalUrl: "https://www.licindia.in/golden-jubilee-foundation",
  ministry: "LIC Golden Jubilee Foundation, Life Insurance Corporation of India",
  applicationMode: ["online"],
  tags: [
    "LIC",
    "golden jubilee",
    "scholarship",
    "economically weaker",
    "EWS",
    "merit",
    "SC/ST",
    "physically challenged",
    "orphan",
    "widow daughter",
    "professional courses",
    "UG",
    "diploma",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the LIC Golden Jubilee Foundation Scholarship?",
      a: "A CSR scholarship providing ₹10,000–₹20,000 per year to meritorious students from economically weaker backgrounds pursuing UG, diploma, or professional courses after Class 12.",
    },
    {
      q: "Who is eligible?",
      a: "Indian citizens who passed Class 12 with minimum 60% marks, enrolled in first year of a regular full-time UG/diploma/professional course, with annual family income ≤ ₹1,00,000.",
    },
    {
      q: "What is the scholarship amount?",
      a: "₹10,000 per year for regular courses. ₹20,000 per year for special categories (physically challenged, orphan, widow daughter) and professional courses such as MBBS, B.Tech, etc.",
    },
    {
      q: "Is the scholarship renewable?",
      a: "Yes, the scholarship is renewable each year subject to maintaining satisfactory academic progress.",
    },
    {
      q: "How do I apply?",
      a: "Visit the LIC Golden Jubilee Foundation website, check the annual notification (June–August), fill the application form, attach required documents, and submit before the deadline (September–October).",
    },
    {
      q: "Which category of students get preference?",
      a: "Priority is given to SC/ST students, physically challenged students, orphans, and daughters of widows.",
    },
  ],
  source: "sample",
};
