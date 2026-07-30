import type { Scheme } from "@/lib/types";

export const oasisScholarshipForScStStudents: Scheme =   {
    id: "oasis-scholarship-sc-st",
    slug: "oasis-scholarship-for-sc-st-students",
    name: "Oasis Scholarship for SC/ST Students",
    shortName: "Oasis Scholarship",
    summary:
      "Financial grants for SC/ST students in West Bengal — maintenance allowance and full tuition reimbursement from Class 9 to PhD.",
    description:
      "The Oasis Scholarship is an e-governance initiative by the Backward Classes Welfare Department and Tribal Development Department of West Bengal to financially empower SC/ST student communities. It distributes direct educational grants to eliminate drop-out rates, covering maintenance allowance and full reimbursement of compulsory non-refundable tuition fees from junior high school through to advanced research, technical diplomas, and professional programmes.",
    category: "social-welfare",
    level: "state",
    states: ["west-bengal"],
    eligibility: [
      {
        label: "Domicile",
        value: "Must maintain permanent domicile in West Bengal",
        type: "residence",
      },
      {
        label: "Category",
        value: "Must possess a validated computerized SC/ST caste certificate",
        type: "caste-category",
      },
      {
        label: "Academic",
        value:
          "Enrolled in full-time studies with at least 50% marks in the last qualifying examination",
        type: "education",
      },
      {
        label: "Annual family income",
        value: "Must not exceed ₹2,50,000 per annum",
        type: "income",
      },
      {
        label: "Exclusivity",
        value:
          "Only one application per cycle; concurrent enrollment in any other state or central scholarship disqualifies",
        type: "other",
      },
    ],
    benefits: [
      "Maintenance allowance of approximately ₹230–₹1,200 per month",
      "Full reimbursement of compulsory non-refundable tuition fees",
      "Covers Class 9 through PhD, including diploma and professional courses",
      "Direct electronic distribution for transparent grant delivery",
    ],
    requiredDocuments: [
      { name: "Passport-size photograph", mandatory: true },
      {
        name: "Aadhaar Card (seeded to bank account for DBT)",
        mandatory: true,
      },
      { name: "SC/ST Caste Certificate (computerized)", mandatory: true },
      {
        name: "Income certificate from competent government authority",
        mandatory: true,
      },
      { name: "Domicile or birth certificate", mandatory: true },
      {
        name: "Mark sheets of the previous qualifying examination",
        mandatory: true,
      },
      {
        name: "Institutional fee receipt or bonafide admission certificate",
        mandatory: true,
      },
      {
        name: "Bank passbook (showing IFSC and account number)",
        mandatory: true,
      },
      {
        name: "National Scholarship Portal (NSP) OTR ID proof",
        mandatory: true,
      },
    ],
    officialPortalUrl: "https://oasis.gov.in/",
    ministry:
      "Backward Classes Welfare Department & Tribal Development Department, West Bengal",
    applicationMode: ["online", "offline"],
    tags: [
      "scholarship",
      "sc",
      "st",
      "west bengal",
      "oasis",
      "tuition",
      "maintenance",
      "education",
    ],
    faqs: [
      {
        q: "Who is eligible for the Oasis Scholarship?",
        a: "SC/ST students domiciled in West Bengal, enrolled in full-time studies with at least 50% marks and family income up to ₹2.5 lakh per annum.",
      },
      {
        q: "What benefits does the scholarship provide?",
        a: "Maintenance allowance (₹230–₹1,200/month) and full reimbursement of compulsory non-refundable tuition fees.",
      },
      {
        q: "Where do I apply?",
        a: "First register on NSP for an OTR ID, then visit the West Bengal Oasis Portal (oasis.gov.in) to complete your application.",
      },
    ],
    source: "sample",
  };
