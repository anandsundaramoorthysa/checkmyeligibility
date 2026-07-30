import type { Scheme } from "@/lib/types";

export const mukhyamantriYuvaSwavalambanYojanaGujarat: Scheme = {
  id: "mukhyamantri-yuva-swavalamban-yojana-gujarat",
  slug: "mukhyamantri-yuva-swavalamban-yojana-mysy-gujarat",
  name: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
  shortName: "MYSY Gujarat",
  summary:
    "Scholarship of up to \u20B92,00,000 per year for meritorious students from economically weaker families in Gujarat pursuing diploma, undergraduate, or professional courses.",
  description:
    "The Mukhyamantri Yuva Swavalamban Yojana (MYSY), also known as the Chief Minister's Youth Self-Reliance Scheme, is a flagship scholarship programme launched by the Government of Gujarat in 2016. It provides financial assistance to deserving students from economically weaker sections (EWS) to pursue higher education without financial burden. The scheme covers tuition fee assistance of up to \u20B92,00,000 per year for medical courses, up to \u20B950,000 per year for engineering and professional degree courses, and up to \u20B925,000 per year for non-professional undergraduate courses. Additionally, eligible students can receive hostel assistance of \u20B91,200 per month (up to \u20B912,000 per year) and a one-time books and equipment grant of up to \u20B910,000. Fresh applicants must have scored at least 80 percentile in their Class 12 (Science or General stream) from a recognised board in Gujarat. The annual family income must not exceed \u20B96,00,000 per annum. Benefits are disbursed directly to the student's Aadhaar-linked bank account through Direct Benefit Transfer (DBT).",
  category: "scholarship",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a permanent resident of Gujarat",
      type: "residence",
    },
    {
      label: "Annual family income",
      value:
        "Must not exceed \u20B96,00,000 per annum (income certificate valid for 3 financial years from date of issue)",
      type: "income",
    },
    {
      label: "Academic merit (Fresh applicants)",
      value:
        "Must have scored at least 80 percentile in Class 12 Science or General stream from a recognised board in Gujarat",
      type: "education",
    },
    {
      label: "Diploma to Degree students",
      value:
        "Must have secured at least 65% marks at the Diploma level examination from a recognised university in Gujarat",
      type: "education",
    },
    {
      label: "Course",
      value:
        "Must be pursuing an eligible diploma, undergraduate, general degree, or professional course at a recognised institution in Gujarat",
      type: "education",
    },
  ],
  benefits: [
    "Up to \u20B92,00,000 per year tuition fee assistance for medical (MBBS) courses",
    "Up to \u20B950,000 per year tuition fee assistance for engineering and professional degree courses",
    "Up to \u20B925,000 per year tuition fee assistance for non-professional undergraduate courses (B.A., B.Com., B.Sc., B.B.A., B.C.A., etc.)",
    "Hostel assistance of \u20B91,200 per month (up to \u20B912,000 per academic year)",
    "One-time books and equipment grant of up to \u20B910,000",
    "Benefits disbursed via Direct Benefit Transfer (DBT) to Aadhaar-linked bank account",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "10th Standard mark sheet", mandatory: true },
    { name: "12th Standard mark sheet (Science / General stream)", mandatory: true },
    {
      name: "Diploma mark sheet",
      mandatory: false,
      note: "Required for Diploma to Degree students",
    },
    { name: "Income Certificate", mandatory: true },
    { name: "Institute Certificate (for new students)", mandatory: true },
    { name: "Bank Passbook (student's own Aadhaar-linked account)", mandatory: true },
    { name: "Self-declaration form", mandatory: true },
    { name: "Self-declaration for non-IT returns", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Hostel admission letter and fee receipt",
      mandatory: false,
      note: "Required if claiming hostel assistance",
    },
    {
      name: "Affidavit (non-judicial stamp paper \u20B920)",
      mandatory: false,
      note: "Required as per scheme guidelines",
    },
  ],
  officialPortalUrl: "https://mysy.gujarat.gov.in/",
  ministry:
    "Education Department / Government of Gujarat",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Gujarat",
    "MYSY",
    "higher education",
    "diploma",
    "undergraduate",
    "professional",
    "engineering",
    "medical",
    "EWS",
    "state scheme",
    "DBT",
    "tuition fee",
    "hostel",
    "merit",
  ],
  faqs: [
    {
      q: "What is the MYSY Scholarship?",
      a: "The Mukhyamantri Yuva Swavalamban Yojana (MYSY) is a scholarship programme by the Government of Gujarat that provides financial assistance for tuition fees, hostel expenses, and books/equipment to eligible students pursuing higher education in Gujarat.",
    },
    {
      q: "Who is eligible for the MYSY Scholarship?",
      a: "Permanent residents of Gujarat pursuing eligible diploma, undergraduate, or professional courses with an annual family income not exceeding \u20B96,00,000. Fresh applicants must have scored at least 80 percentile in Class 12 (Science or General stream) from a Gujarat board.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Up to \u20B92,00,000/year for medical courses, \u20B950,000/year for engineering/professional courses, and \u20B925,000/year for non-professional UG courses, plus hostel assistance of up to \u20B912,000/year and a one-time books grant of up to \u20B910,000.",
    },
    {
      q: "How do I apply for the MYSY Scholarship?",
      a: "Visit the official MYSY portal (mysy.gujarat.gov.in), register with your Aadhaar number, fill in the application form, upload the required documents, and complete document verification at the designated Help Centre.",
    },
    {
      q: "Do I need to renew the scholarship every year?",
      a: "Yes. Renewal applicants must maintain at least 50% marks and 75% attendance, and submit a renewal application with updated academic details each academic year.",
    },
    {
      q: "Can I apply if my family income exceeds \u20B96 lakh due to a one-time event?",
      a: "In the case of a property sale or receipt of claims (arrears, retirement benefits, etc.), if the income exceeds \u20B96 lakh but does not exceed \u20B911 lakh, the candidate will be considered with relaxation for one year only.",
    },
  ],
  source: "sample",
};
