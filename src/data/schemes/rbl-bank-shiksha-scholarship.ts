import type { Scheme } from "@/lib/types";

export const rblBankShikshaScholarship: Scheme = {
  id: "rbl-bank-shiksha-scholarship",
  slug: "rbl-bank-shiksha-scholarship-351",
  name: "RBL Bank Shiksha Scholarship",
  shortName: "RBL Shiksha",
  summary:
    "Up to \u20B920,000 per year scholarship for first-year undergraduate students from economically weaker families, with a minimum of 60% in Class 10 and Class 12.",
  description:
    "The RBL Bank Shiksha Scholarship is a Corporate Social Responsibility (CSR) initiative by RBL Bank, administered through the Vidyasaarathi platform of Protean (formerly NSDL e-Governance). The scholarship provides financial assistance of up to \u20B920,000 per year to meritorious students from economically weaker backgrounds who are pursuing full-time undergraduate courses. The programme covers tuition fees and other academic expenses, helping students complete their three-year degree without financial stress. In addition to monetary support, selected scholars receive mentorship from RBL Bank employees and industry experts to guide their career development. The scholarship is open to students of all genders enrolled in any discipline of undergraduate study at recognised institutions across India.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Course level",
      value:
        "Must be enrolled full-time in the first year of a three-year undergraduate programme (any discipline)",
      type: "education",
    },
    {
      label: "Academic merit",
      value:
        "Minimum 60% marks in both Class 10 and Class 12 board examinations",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Below \u20B94,00,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Gender",
      value: "Open to all genders",
      type: "other",
    },
    {
      label: "Employment restriction",
      value:
        "Applicant or parent/guardian must not be employed by RBL Bank",
      type: "other",
    },
  ],
  benefits: [
    "Financial assistance of up to \u20B920,000 per year for tuition and academic expenses",
    "Renewable for up to three years (maximum \u20B960,000 over the course duration) based on continued eligibility",
    "Mentorship and career guidance from RBL Bank employees and industry experts",
    "Direct disbursement to the institution or student's bank account as per RBL Bank norms",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Proof of Identity (PAN Card / Voter ID / Driving License / Passport)",
      mandatory: true,
    },
    {
      name: "Proof of Address (Voter ID / Driving License / Bank Passbook / Passport)",
      mandatory: true,
    },
    {
      name: "Bank passbook first page or last 1 month bank statement",
      mandatory: true,
    },
    { name: "Class 10 mark sheet", mandatory: true },
    { name: "Class 12 mark sheet", mandatory: true },
    {
      name: "Semester I mark sheet",
      mandatory: false,
      note: "Required if applicable",
    },
    { name: "Income certificate of the current financial year", mandatory: true },
    {
      name: "Bonafide certificate from college/institute (signed and stamped)",
      mandatory: true,
    },
    {
      name: "Paid tuition fee receipt and fee structure from college/institute",
      mandatory: true,
    },
  ],
  officialPortalUrl:
    "https://www.vidyasaarathi.co.in/Vidyasaarathi/scholarship",
  ministry: "RBL Bank (CSR Initiative) — administered via Vidyasaarathi (Protean)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "RBL Bank",
    "Shiksha",
    "undergraduate",
    "UG",
    "Vidyasaarathi",
    "Protean",
    "CSR",
    "private scholarship",
    "all-india",
    "central",
    "merit",
    "income less than 4 lakh",
    "mentorship",
  ],
  faqs: [
    {
      q: "Who can apply for the RBL Bank Shiksha Scholarship?",
      a: "Students who are enrolled full-time in the first year of a three-year undergraduate programme at a recognised institution, have scored minimum 60% in Class 10 and Class 12, and have a family income below \u20B94,00,000 per annum.",
    },
    {
      q: "How much financial assistance is provided?",
      a: "Selected students receive up to \u20B920,000 per year. The scholarship can be renewed for up to three years, subject to continued eligibility, for a maximum total of \u20B960,000.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Applications are submitted online through the Vidyasaarathi portal (www.vidyasaarathi.co.in). Register, complete the application form, upload the required documents, and submit before the deadline.",
    },
    {
      q: "Is there any mentorship provided along with the scholarship?",
      a: "Yes. RBL Bank provides mentorship and career guidance through bank employees and industry experts, including workshops and training sessions to enhance job readiness.",
    },
    {
      q: "Can students employed by RBL Bank or whose parents work at RBL Bank apply?",
      a: "No. Applicants or their parents/guardians who are currently employed by RBL Bank are not eligible for this scholarship.",
    },
  ],
  source: "sample",
};
