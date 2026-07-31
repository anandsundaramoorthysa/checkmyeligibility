import type { Scheme } from "@/lib/types";

export const lOrAlIndiaForYoungWomenInScienceScholarship: Scheme = {
  id: "loreal-india-for-young-women-in-science-scholarship",
  slug: "loreal-india-for-young-women-in-science-scholarship",
  name: "L'Oréal India For Young Women in Science Scholarship",
  shortName: "L'Oréal Young Women in Science",
  summary:
    "₹62,500 for undergraduates and up to ₹1,00,000 for postgraduate/PhD students — supporting talented young women from economically disadvantaged backgrounds in STEM fields.",
  description:
    "The L'Oréal India For Young Women in Science Scholarship supports talented young women from economically disadvantaged backgrounds who are pursuing higher education in science and technology fields in India, encouraging more women to build careers in STEM.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Gender",
      value: "Female students only",
      type: "gender",
    },
    {
      label: "UG applicants",
      value: "Minimum 85% in Class 12 Science stream, enrolled in an undergraduate science-related course in India",
      type: "education",
    },
    {
      label: "PG / PhD applicants",
      value: "Minimum 60% in undergraduate studies, pursuing a postgraduate or PhD degree in an eligible STEM field",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹6,00,000",
      type: "income",
    },
  ],
  benefits: [
    "₹62,500 for undergraduate students",
    "Up to ₹1,00,000 for postgraduate and PhD students",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Aadhaar card / government ID", mandatory: true },
    { name: "Class 10 and 12 mark sheets", mandatory: true },
    { name: "Undergraduate mark sheets", mandatory: false, note: "Required for PG applicants" },
    { name: "Admission letter / bonafide certificate", mandatory: true },
    { name: "Family income certificate", mandatory: true },
    { name: "Bank details", mandatory: true },
    { name: "Caste certificate", mandatory: false, note: "If applicable" },
  ],
  officialPortalUrl: "https://www.foryoungwomeninscience.co.in/",
  ministry: "L'Oréal India (in partnership with UNESCO)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "women",
    "girls",
    "STEM",
    "science",
    "L'Oréal",
    "undergraduate",
    "postgraduate",
    "phd",
    "merit",
  ],
  faqs: [
    {
      q: "Who is eligible for this scholarship?",
      a: "Female students from economically disadvantaged families (income up to ₹6,00,000): UG applicants need at least 85% in Class 12 Science, while PG/PhD applicants need at least 60% in their undergraduate degree, in an eligible STEM field.",
    },
    {
      q: "How much financial support is provided?",
      a: "₹62,500 for undergraduate students, and up to ₹1,00,000 for postgraduate or PhD students.",
    },
    {
      q: "How do I apply?",
      a: "Visit the official portal, register with your email or mobile number, complete the online application form, upload the required documents, and submit. Selection is merit-based.",
    },
  ],
  source: "sample",
};
