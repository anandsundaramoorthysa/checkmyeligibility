import type { Scheme } from "@/lib/types";

export const pudhumaiPennSchemeMoovalurRamamirthamAmmaiyarHigherEducationAssurance: Scheme =   {
    id: "pudhumai-penn",
    slug: "pudhumai-penn-scheme-moovalur-ramamirtham-ammaiyar-higher-education-assurance-mrccc2gp",
    name: "Pudhumai Penn Scheme (Moovalur Ramamirtham Ammaiyar Higher Education Assurance)",
    shortName: "Pudhumai Penn",
    summary:
      "₹1,000 per month stipend for girls from government schools in Tamil Nadu pursuing their first full-time UG degree, diploma, or ITI.",
    description:
      "The Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme, widely known as the Pudhumai Penn Scheme, is a transformative initiative by the Government of Tamil Nadu designed to enhance the enrollment ratio of girls from public schools into higher educational institutions. It provides a steady cash incentive of ₹1,000 per month directly deposited to students, encouraging complete academic continuity without additional financial burdens on their families.",
    category: "women-child",
    level: "state",
    states: ["tamil-nadu"],
    eligibility: [
      {
        label: "Gender",
        value: "Female student",
        type: "gender",
      },
      {
        label: "Domicile",
        value: "Permanent resident and citizen of Tamil Nadu",
        type: "residence",
      },
      {
        label: "Schooling",
        value:
          "Studied continuously from Classes 6 to 12 in a Government or Government-Aided school, or Classes 6–8 under RTE in a private institution before migrating to government school for Classes 9–12",
        type: "education",
      },
      {
        label: "Current enrolment",
        value:
          "First full-time recognized undergraduate degree, professional course, diploma, or ITI program",
        type: "education",
      },
      {
        label: "Income limit",
        value: "No family income limit",
        type: "income",
      },
    ],
    benefits: [
      "₹1,000 per month directly credited to the student's bank account via DBT",
      "No family income ceiling — all eligible girls benefit",
      "Multiple girl children in the same family can receive the benefit simultaneously",
      "Covers UG degrees, professional courses, diplomas, and ITI programmes",
    ],
    requiredDocuments: [
      {
        name: "Aadhaar Card or Voter ID",
        mandatory: true,
      },
      { name: "Residential proof of Tamil Nadu", mandatory: true },
      {
        name: "School Transfer Certificate (TC) or EMIS details verifying government school attendance from Class 6 to 12",
        mandatory: true,
      },
      { name: "Class 12 marksheet", mandatory: true },
      {
        name: "College Admission Card or Bonafide Certificate",
        mandatory: true,
      },
      {
        name: "Aadhaar-linked bank passbook (SBI / Indian Bank / IOB / Canara Bank) mapped on NPCI mapper",
        mandatory: true,
      },
    ],
    officialPortalUrl:
      "https://www.tnsocialwelfare.tn.gov.in/en/specilisationswoman-welfare/pudhumai-penn",
    ministry: "Department of Social Welfare, Government of Tamil Nadu",
    applicationMode: ["offline"],
    tags: [
      "pudhumai penn",
      "tamil nadu",
      "women",
      "girl",
      "stipend",
      "education",
      "ug",
      "government school",
      "dbt",
    ],
    faqs: [
      {
        q: "Who is eligible for the Pudhumai Penn Scheme?",
        a: "Female students who studied Classes 6–12 in Tamil Nadu government schools and are enrolled in their first full-time UG, diploma, or ITI programme.",
      },
      {
        q: "What is the benefit amount?",
        a: "₹1,000 per month directly credited to the student's bank account via DBT.",
      },
      {
        q: "Is there an income limit?",
        a: "No, there is no family income limit for this scheme.",
      },
    ],
    source: "sample",
  };
