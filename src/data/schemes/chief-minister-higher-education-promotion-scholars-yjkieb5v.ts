import type { Scheme } from "@/lib/types";

export const chiefMinisterHigherEducationPromotionScholars: Scheme =   {
    id: "cm-higher-education-cg",
    slug: "chief-minister-higher-education-promotion-scholarship-chhattisgarh",
    name: "Chief Minister Higher Education Promotion Scholarship – Chhattisgarh",
    shortName: "CM Higher Education CG",
    summary:
      "Monthly scholarship for SC/ST students in Chhattisgarh pursuing UG, PG, or PhD — ₹1,000–₹3,500/month depending on level, plus a possible book grant.",
    description:
      "The Chief Minister Higher Education Promotion Scholarship is a Chhattisgarh state scheme administered by the Department of Tribal Welfare / SC Development to support SC/ST students pursuing higher education (UG and above). It aims to increase enrolment and completion of degree-level education among Scheduled Caste and Scheduled Tribe students in Chhattisgarh.",
    category: "education",
    level: "state",
    states: ["chhattisgarh"],
    eligibility: [
      {
        label: "Domicile",
        value: "Must be a resident of Chhattisgarh",
        type: "residence",
      },
      {
        label: "Category",
        value: "Must belong to Scheduled Caste (SC) or Scheduled Tribe (ST)",
        type: "caste-category",
      },
      {
        label: "Enrolment",
        value:
          "Enrolled in an undergraduate, postgraduate, or PhD programme at a recognised college or university",
        type: "education",
      },
      {
        label: "Annual family income",
        value: "Within the limits prescribed by the state government",
        type: "income",
      },
    ],
    benefits: [
      "UG level: ₹1,000–₹2,500 per month (varies by college type and course)",
      "PG level: ₹2,500–₹3,500 per month",
      "PhD level: fellowship rates as notified annually by the Chhattisgarh Tribal Affairs Department",
      "Additional one-time book grant may apply",
      "Scholarship credited directly to the student's bank account",
    ],
    requiredDocuments: [
      { name: "Chhattisgarh domicile certificate", mandatory: true },
      { name: "SC/ST caste certificate", mandatory: true },
      { name: "Income certificate", mandatory: true },
      { name: "Previous year mark sheets", mandatory: true },
      { name: "Aadhaar card", mandatory: true },
      { name: "Admission / enrolment certificate", mandatory: true },
      { name: "Bank passbook", mandatory: true },
    ],
    officialPortalUrl: "https://tribal.cg.gov.in/",
    ministry: "Department of Tribal Welfare / SC Development, Chhattisgarh",
    applicationMode: ["online"],
    tags: [
      "scholarship",
      "sc",
      "st",
      "chhattisgarh",
      "higher education",
      "ug",
      "pg",
      "phd",
      "tribal",
    ],
    faqs: [
      {
        q: "Who is eligible for the CM Higher Education Promotion Scholarship?",
        a: "SC/ST students domiciled in Chhattisgarh enrolled in UG, PG, or PhD programmes at a recognised institution.",
      },
      {
        q: "How much is the scholarship?",
        a: "₹1,000–₹2,500/month at UG level, ₹2,500–₹3,500/month at PG level, and fellowship rates for PhD as notified annually.",
      },
      {
        q: "Where do I apply?",
        a: "Through the Chhattisgarh Tribal Department portal at tribal.cg.gov.in during the annual notification window.",
      },
    ],
    source: "sample",
  };
