import type { Scheme } from "@/lib/types";

export const sbiAshaScholarshipProgramme: Scheme = {
  id: "sbi-asha-scholarship-programme",
  slug: "sbi-asha-scholarship-programme",
  name: "SBI Asha Scholarship Programme",
  shortName: "SBI Asha Scholarship",
  summary:
    "An annual scholarship of \u20B915,000 for meritorious students from economically weaker sections studying in Classes 6 through second-year undergraduate at recognised institutions across India.",
  description:
    "The SBI Asha Scholarship Programme, administered by the SBI Foundation (CSR arm of State Bank of India), provides annual financial support of \u20B915,000 to meritorious students from economically weaker sections studying in Classes 6 through second-year undergraduate. The programme aims to reduce dropout rates by bridging the financial gap for underprivileged students.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian national from an economically weaker background",
      type: "residence",
    },
    {
      label: "Education level",
      value:
        "Must be studying in Class 6 to Class 12 or in the first or second year of a UG programme at a recognised institution",
      type: "education",
    },
    {
      label: "Academic merit",
      value: "Minimum 75% marks in the previous qualifying examination",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "\u2264 \u20B93,00,000 from all sources",
      type: "income",
    },
    {
      label: "Institution type",
      value: "Students in private unaided institutions may apply",
      type: "other",
    },
    {
      label: "Exclusion",
      value:
        "Must not be availing any other scholarship of \u20B910,000 or more annually",
      type: "other",
    },
  ],
  benefits: [
    "Annual scholarship of \u20B915,000",
    "Financial support for meritorious students from economically weaker sections",
    "Covers students from Class 6 through second-year undergraduate programmes",
  ],
  requiredDocuments: [
    { name: "Recent passport-size photograph", mandatory: true },
    { name: "Previous year mark sheets (minimum 75%)", mandatory: true },
    {
      name: "Current year admission / fee receipt or bonafide certificate",
      mandatory: true,
    },
    {
      name: "Income proof: income certificate from government authority or Form 16 / ITR",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    {
      name: "Bank account passbook (student or parent/guardian)",
      mandatory: true,
    },
    {
      name: "Disability certificate (if claiming disability category benefit)",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://scholarships.sbi.co.in/",
  ministry: "State Bank of India (SBI Foundation)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "SBI",
    "Asha",
    "merit",
    "EWS",
    "economically weaker",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "undergraduate",
    "UG",
    "SBI Foundation",
    "CSR",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "Who is eligible for the SBI Asha Scholarship Programme?",
      a: "Indian national students from economically weaker backgrounds studying in Class 6 to Class 12 or in the first or second year of a UG programme, with a minimum of 75% marks in the previous qualifying exam and annual family income not exceeding ₹3,00,000. Students must not be receiving any other scholarship of ₹10,000 or more annually.",
    },
    {
      q: "What is the income limit to apply?",
      a: "The annual family income from all sources must not exceed ₹3,00,000 (three lakh rupees). A valid income certificate from a government authority or Form 16/ITR is mandatory.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Selected scholars receive ₹15,000 per annum as financial support to continue their education.",
    },
    {
      q: "Which courses are covered under this programme?",
      a: "The programme covers students from Class 6 through Class 12 and students in the first or second year of any undergraduate (UG) programme at a recognised institution. Distance learning students are not covered.",
    },
    {
      q: "How do I apply via the National Scholarship Portal?",
      a: "Visit the SBI Foundation scholarship portal (scholarships.sbi.co.in) or the Buddy4Study platform, register with your email ID, fill in the application form, upload required documents (mark sheets, income proof, Aadhaar, fee receipt, bank passbook), and submit before the deadline.",
    },
  ],
  source: "sample",
};
