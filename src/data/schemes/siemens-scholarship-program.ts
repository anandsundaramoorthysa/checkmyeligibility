import type { Scheme } from "@/lib/types";

export const siemensScholarshipProgram: Scheme = {
  id: "siemens-scholarship-program",
  slug: "siemens-scholarship-program-mrerwthq",
  name: "Siemens Scholarship Program",
  shortName: "Siemens SSP",
  summary:
    "Full tuition fee reimbursement for all 4 years of engineering at government colleges, plus book/hostel allowances, with 50% reservation for girl students. Includes internship at Siemens and partner MNCs.",
  description:
    "The Siemens Scholarship Program supports meritorious first-year engineering students from economically weaker backgrounds studying at government engineering colleges. Beyond financial aid, the programme provides internship opportunities at Siemens and partner MNCs, mechatronics training, and mentorship. 50% of scholarships are reserved for girl students. The scholarship covers full tuition fees for all 4 years of the engineering course, along with allowances for books, stationery, hostel, and additional classes.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship & Age",
      value: "Indian citizen, age up to 20 years",
      type: "age",
    },
    {
      label: "Programme",
      value:
        "Enrolled in the first year of an undergraduate engineering programme at a government engineering college (IITs excluded)",
      type: "education",
    },
    {
      label: "Eligible branches",
      value:
        "Mechanical/Production, Electrical, Electronics, Electronics & Telecommunication, Computer Science/IT, Instrumentation",
      type: "education",
    },
    {
      label: "HSC marks",
      value: "Minimum 50% aggregate overall, with at least 60% in Physics, Chemistry, Mathematics",
      type: "education",
    },
    {
      label: "SSC marks",
      value: "Minimum 60% aggregate",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "\u2264 \u20B92,00,000 per annum",
      type: "income",
    },
    {
      label: "Gender reservation",
      value: "50% of scholarships reserved for girl students",
      type: "gender",
    },
  ],
  benefits: [
    "Full tuition fee reimbursement for all 4 years",
    "Allowances for books and stationery",
    "Hostel allowance",
    "Allowance for additional classes",
    "Internship opportunities at Siemens and partner MNCs",
    "Mechatronics training",
    "Mentorship from industry professionals",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "SSC (Class 10) mark sheet", mandatory: true },
    { name: "HSC (Class 12) mark sheet", mandatory: true },
    { name: "Engineering college fee receipt", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Bonafide certificate from institution", mandatory: true },
    {
      name: "Caste certificate",
      mandatory: false,
      note: "If applicable",
    },
    {
      name: "Domicile certificate",
      mandatory: false,
      note: "If applicable",
    },
  ],
  officialPortalUrl: "https://www.ssp-india.co.in/scholarship/apply",
  ministry: "Siemens Foundation India (Corporate Scholarship)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Siemens",
    "engineering",
    "government college",
    "girl students",
    "women",
    "internship",
    "mechatronics",
    "mentorship",
    "all-india",
    "corporate",
    "merit",
    "EWS",
  ],
  faqs: [
    {
      q: "Who is eligible for the Siemens Scholarship?",
      a: "Indian citizens up to 20 years of age, enrolled in the first year of a government engineering college (excluding IITs) in eligible branches, with minimum 50% in HSC (60% in PCM) and 60% in SSC, and annual family income \u2264 \u20B92 lakh.",
    },
    {
      q: "How much scholarship is provided?",
      a: "Full tuition fee reimbursement for all 4 years, plus allowances for books, stationery, hostel, and additional classes.",
    },
    {
      q: "Is there a reservation for girl students?",
      a: "Yes. 50% of scholarships are reserved for girl students.",
    },
    {
      q: "How do I apply?",
      a: "Visit https://www.ssp-india.co.in/scholarship/apply, register an account, fill in the application form, upload required documents, and submit before 30 September each year.",
    },
    {
      q: "What additional benefits are provided?",
      a: "Internship opportunities at Siemens and partner MNCs, mechatronics training, and mentorship from industry professionals.",
    },
  ],
  source: "sample",
};
