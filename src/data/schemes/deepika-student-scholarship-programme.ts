import type { Scheme } from "@/lib/types";

export const deepikaStudentScholarshipProgramme: Scheme = {
  id: "deepika-student-scholarship-programme",
  slug: "deepika-student-scholarship-programme-mrdq2rnw",
  name: "Deepika Student Scholarship Programme",
  shortName: "Karnataka Deepika",
  summary:
    "A scholarship of \u20B930,000 per year for girl students who completed Class 12 / II PUC from a government or government-aided institution in Karnataka and are pursuing degree or diploma programmes.",
  description:
    "The Deepika Student Scholarship Programme is a Karnataka government initiative supporting girl students who completed their Class 12 / II PUC from a government or government-aided institution. It provides \u20B930,000 per year to encourage meritorious girls to continue into degree or diploma programmes. The scheme aims to reduce dropout rates among girl students from government institutions by providing financial support for their higher education.",
  category: "women-child",
  level: "state",
  states: ["karnataka"],
  eligibility: [
    {
      label: "Gender",
      value: "Female students only",
      type: "gender",
    },
    {
      label: "Domicile",
      value: "Must be a permanent resident of Karnataka",
      type: "residence",
    },
    {
      label: "Education (previous)",
      value:
        "Must have completed Class 12 / II PUC from a government or government-aided institution in Karnataka",
      type: "education",
    },
    {
      label: "Education (current)",
      value:
        "Must be admitted to a recognised degree (BA/BSc/BCom/BCA/BBA) or diploma course in Karnataka",
      type: "education",
    },
    {
      label: "Income",
      value: "Open to all income groups \u2014 no income ceiling specified",
      type: "income",
    },
  ],
  benefits: [
    "Annual scholarship of \u20B930,000",
    "Available for the full duration of the degree or diploma programme",
    "Disbursed directly to the student\u2019s bank account via DBT",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Class 10 mark sheet", mandatory: true },
    { name: "Class 12 / II PUC mark sheet", mandatory: true },
    {
      name: "Transfer certificate or school records proving government institution attendance",
      mandatory: true,
    },
    {
      name: "Current admission letter or bonafide certificate",
      mandatory: true,
    },
    { name: "Karnataka domicile / residence proof", mandatory: true },
    {
      name: "Bank account passbook (account number and IFSC)",
      mandatory: true,
    },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://karnataka.gov.in/",
  ministry:
    "Department of Higher Education, Government of Karnataka",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "girl students",
    "women",
    "Karnataka",
    "Deepika",
    "degree",
    "diploma",
    "government school",
    "II PUC",
    "state scholarship",
    "DBT",
  ],
  faqs: [
    {
      q: "Who is eligible for the Deepika Student Scholarship?",
      a: "Girl students who are permanent residents of Karnataka, completed Class 12 / II PUC from a government or government-aided institution, and are admitted to a recognised degree or diploma course in Karnataka.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Eligible students receive \u20B930,000 per year for the duration of their degree or diploma programme.",
    },
    {
      q: "Is there an income ceiling for this scholarship?",
      a: "No. The scheme is open to all income groups with no income ceiling specified.",
    },
    {
      q: "How do I apply?",
      a: "Visit the Karnataka Scholarships Portal at scholarships.karnataka.gov.in, register or log in with Aadhaar-linked credentials, select the Deepika Scholarship scheme, fill in personal and academic details, upload documents, and submit before the annual deadline.",
    },
    {
      q: "How is the scholarship disbursed?",
      a: "The scholarship is credited directly to the student\u2019s bank account via Direct Benefit Transfer (DBT).",
    },
  ],
  source: "sample",
};
