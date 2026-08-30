import type { Scheme } from "@/lib/types";

export const bcddOverseasScholarshipKerala: Scheme =   {
    id: "bcdd-overseas-scholarship-kerala",
    slug: "bcdd-overseas-scholarship-kerala",
    name: "BCDD Overseas Scholarship (Kerala)",
    shortName: "BCDD Overseas",
    summary:
      "Up to ₹10 lakh financial assistance for OBC students from Kerala pursuing postgraduate or doctoral studies at international universities.",
    description:
      "The BCDD Overseas Scholarship is administered by the Backward Classes Development Department (BCDD), Government of Kerala, through the E-Grantz portal. It provides up to ₹10,00,000 in financial assistance to OBC students from Kerala pursuing postgraduate or doctoral studies at internationally recognised universities. Applicants must be under 40 years of age, hold a Bachelor's degree with at least 60% marks, and have already secured a conditional or unconditional admission letter from the foreign institution. Annual family income must not exceed ₹6,00,000. The scholarship covers tuition fees and related academic expenses. Applications are accepted online when the department releases the annual notification, typically between July and September. Candidates with relevant work experience are given priority, and the award is disbursed directly to the student's bank account.",
    category: "education",
    level: "state",
    states: ["kerala"],
    eligibility: [
      {
        label: "Age limit",
        value: "Must be under 40 years of age as of the 1st day of the application month",
        type: "age",
      },
      {
        label: "Residency",
        value: "Must be an Indian citizen and a permanent resident of Kerala",
        type: "residence",
      },
      {
        label: "Community",
        value: "Open to OBC (Other Backward Classes) categories in Kerala",
        type: "caste-category",
      },
      {
        label: "Annual family income",
        value: "Must not exceed ₹6,00,000 per annum",
        type: "income",
      },
      {
        label: "Academic qualification",
        value:
          "Bachelor's degree with minimum 60% marks or First-Class grade; overseas course must be in the same field",
        type: "education",
      },
      {
        label: "Admission",
        value:
          "Must have secured an admission letter (conditional or unconditional) from a recognized international university",
        type: "other",
      },
    ],
    benefits: [
      "Maximum financial assistance of up to ₹10,00,000",
      "Supports postgraduate and doctoral studies abroad",
      "Covers tuition and related academic expenses",
      "Priority given to candidates with relevant work experience",
    ],
    requiredDocuments: [
      {
        name: "Proof of admission to a recognized foreign university (offer letter)",
        mandatory: true,
      },
      {
        name: "Community certificate (Backward Class, issued by competent authority in Kerala)",
        mandatory: true,
      },
      {
        name: "Income certificate (from Village Officer or equivalent revenue authority)",
        mandatory: true,
      },
      {
        name: "Academic certificates and mark sheets for all qualifying examinations",
        mandatory: true,
      },
      { name: "Aadhaar card", mandatory: true },
      { name: "Kerala domicile/nativity certificate", mandatory: true },
      {
        name: "Passport (valid, with visa copy if available)",
        mandatory: true,
      },
      {
        name: "Bank account details (passbook copy with IFSC and account number)",
        mandatory: true,
      },
      { name: "Passport-size photographs", mandatory: true },
      {
        name: "No-Objection Certificate (NOC) from institution (if applicable)",
        mandatory: false,
      },
    ],
    officialPortalUrl:
      "https://bcdd.kerala.gov.in/en/schemes/educational-schemes/overseas-scholarship/",
    ministry: "Backward Classes Development Department, Government of Kerala",
    applicationMode: ["online"],
    tags: [
      "scholarship",
      "overseas",
      "obc",
      "kerala",
      "postgraduate",
      "phd",
      "abroad",
      "bcdd",
      "e-grantz",
    ],
    faqs: [
      {
        q: "Who is eligible for the BCDD Overseas Scholarship?",
        a: "OBC students from Kerala under 40 years of age, with family income up to ₹6 lakh, holding a Bachelor's degree with 60%+ marks and an admission letter from a recognized foreign university.",
      },
      {
        q: "How much financial assistance is provided?",
        a: "Up to ₹10,00,000 maximum for eligible students pursuing postgraduate or doctoral studies abroad.",
      },
      {
        q: "Where do I apply?",
        a: "Visit the official BCDD Portal or the E-Grantz portal when the notification is released (usually July–September).",
      },
    ],
    source: "sample",
  };
