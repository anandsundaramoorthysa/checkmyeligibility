import type { Scheme } from "@/lib/types";

export const eMedhabrutiScholarshipSchemeTechnicalAndProfessionalOdisha202627: Scheme =   {
    id: "e-medhabruti-scholarship-scheme-technical-and-professional-odisha-2026-27",
    slug: "e-medhabruti-scholarship-scheme-technical-and-professional-odisha-2026-27",
    name: "e-Medhabruti Scholarship Scheme (Technical and Professional), Odisha 2026-27",
    shortName: "e-Medhabruti",
    summary:
      "₹20,000 per annum for meritorious Odisha-domiciled students pursuing regular technical and professional UG/PG degree programmes.",
    description:
      "The e-Medhabruti Scholarship (Technical and Professional) is a merit-cum-means scholarship implemented by the Higher Education Department, Government of Odisha. It provides financial assistance to meritorious, domiciled students of Odisha pursuing regular technical and professional undergraduate and postgraduate degree programs in recognized institutions.",
    category: "education",
    level: "state",
    states: ["odisha"],
    eligibility: [
      {
        label: "Domicile",
        value: "Must be a permanent resident of Odisha",
        type: "residence",
      },
      {
        label: "Admission",
        value:
          "Admitted to the first year of a regular technical/professional degree program in an AICTE/UGC/MCI recognized institution",
        type: "education",
      },
      {
        label: "Minimum marks",
        value:
          "At least 60% marks in the last qualifying examination (+2 for UG or degree for PG)",
        type: "other",
      },
      {
        label: "Annual family income",
        value: "Must not exceed ₹8,00,000",
        type: "income",
      },
      {
        label: "Exclusions",
        value:
          "Distance learning, correspondence, diploma, M.Phil, PhD students and those receiving other government scholarships are not eligible",
        type: "other",
      },
    ],
    benefits: [
      "₹20,000 per annum for the normal duration of the course",
      "Covers technical and professional UG and PG programmes",
      "Merit-cum-means based financial assistance",
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", mandatory: true },
      { name: "Aadhaar-seeded Bank Account Details", mandatory: true },
      { name: "Domicile Certificate", mandatory: true },
      { name: "Family Income Certificate", mandatory: true },
      {
        name: "Marksheets/Transcripts of the qualifying examination",
        mandatory: true,
      },
      {
        name: "College/Institute ID Card or Letter of Undertaking from the institution",
        mandatory: true,
      },
    ],
    officialPortalUrl: "https://scholarship.odisha.gov.in/",
    ministry: "Higher Education Department, Government of Odisha",
    applicationMode: ["online"],
    tags: [
      "scholarship",
      "odisha",
      "technical",
      "professional",
      "merit",
      "medhabruti",
      "education",
      "ug",
      "pg",
    ],
    faqs: [
      {
        q: "Who is eligible for e-Medhabruti?",
        a: "Odisha-domiciled students with 60%+ marks, admitted to the first year of a regular technical/professional UG/PG programme, with family income up to ₹8 lakh.",
      },
      {
        q: "How much is the scholarship amount?",
        a: "₹20,000 per annum for the normal duration of the technical or professional course.",
      },
      {
        q: "Where do I apply?",
        a: "Apply online through the Odisha State Scholarship Portal at scholarship.odisha.gov.in.",
      },
    ],
    source: "sample",
  };
