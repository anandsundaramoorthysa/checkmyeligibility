import type { Scheme } from "@/lib/types";

export const jaganannaVidyaDeevenaFeeReimbursement: Scheme = {
  id: "jagananna-vidya-deevena-fee-reimbursement",
  slug: "jagananna-vidya-deevena-fee-reimbursement-mrceflf3",
  name: "Jagananna Vidya Deevena Fee Reimbursement",
  shortName: "AP JVD",
  summary:
    "100% fee reimbursement for economically underprivileged students in Andhra Pradesh pursuing Diploma, UG, or PG courses, with funds disbursed quarterly to the student\u2019s mother\u2019s bank account.",
  description:
    "The Jagananna Vidya Deevena (JVD) program is a welfare initiative by the Government of Andhra Pradesh to support economically underprivileged students pursuing higher education. It aims to reduce college dropout rates driven by financial constraints by offering complete financial assistance for academic costs. The state government covers institutional costs so that students can focus entirely on their degrees. Funds are disbursed in quarterly installments to the verified bank account of the student\u2019s mother or natural guardian.",
  category: "scholarship",
  level: "state",
  states: ["andhra-pradesh"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident of Andhra Pradesh",
      type: "residence",
    },
    {
      label: "Admission type",
      value:
        "Must hold valid admission under the official Convener Quota",
      type: "education",
    },
    {
      label: "Course streams",
      value:
        "Engineering, Medicine, Management, and general Degree courses",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Total annual family income from all sources must not exceed \u20B92,50,000",
      type: "income",
    },
    {
      label: "Land holding",
      value:
        "Family must own less than 10 acres of wet land or 25 acres of dry land",
      type: "land-holding",
    },
    {
      label: "Attendance",
      value: "Minimum 75% aggregate attendance at college is required",
      type: "education",
    },
    {
      label: "Exclusions",
      value:
        "Students admitted through Management Quotas, Spot Admissions, or distance education programs are not eligible",
      type: "other",
    },
  ],
  benefits: [
    "100% fee reimbursement for institutional costs",
    "Covers Diploma, UG, and PG level courses",
    "Funds disbursed quarterly to the student\u2019s mother\u2019s or guardian\u2019s bank account",
    "Covers Engineering, Medicine, Management, and general Degree courses",
  ],
  requiredDocuments: [
    { name: "Caste certificate", mandatory: true },
    {
      name: "Income certificate (issued by local Ward/Village Secretariat)",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    { name: "Family ration card", mandatory: true },
    {
      name: "SSC or equivalent certificate (date of birth proof)",
      mandatory: true,
    },
    {
      name: "Mark sheets from previous qualifying examinations",
      mandatory: true,
    },
    {
      name: "College admission letter or fee receipts",
      mandatory: true,
    },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Mother\u2019s bank account details (Aadhaar-seeded, NPCI-mapped)",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://jnanabhumi.ap.gov.in/",
  ministry:
    "Department of Higher Education, Government of Andhra Pradesh",
  applicationMode: ["offline"],
  tags: [
    "scholarship",
    "fee reimbursement",
    "Andhra Pradesh",
    "JVD",
    "Jagananna Vidya Deevena",
    "JnanaBhumi",
    "Convener Quota",
    "women",
    "mother",
    "DBT",
    "state scholarship",
    "engineering",
    "medicine",
    "degree",
    "diploma",
  ],
  faqs: [
    {
      q: "Who is eligible for Jagananna Vidya Deevena?",
      a: "Permanent residents of Andhra Pradesh with Convener Quota admission in Engineering, Medicine, Management, or general Degree courses, with annual family income \u2264 \u20B92.5 lakh and land holding below 10 acres wet / 25 acres dry.",
    },
    {
      q: "How much fee is reimbursed?",
      a: "100% of institutional costs are reimbursed by the state government.",
    },
    {
      q: "How are the funds disbursed?",
      a: "Funds are disbursed in quarterly installments directly to the student\u2019s mother\u2019s or natural guardian\u2019s Aadhaar-seeded bank account via Direct Benefit Transfer.",
    },
    {
      q: "How do I apply?",
      a: "Submit the JSAF form to your college, which uploads data to the JnanaBhumi Portal. Complete biometric e-KYC at a MeeSeva center. Village/Ward Secretariats then verify income and land assets before funds are released.",
    },
    {
      q: "What is the minimum attendance requirement?",
      a: "Students must maintain a minimum of 75% aggregate attendance to keep the scholarship active.",
    },
  ],
  source: "sample",
};
