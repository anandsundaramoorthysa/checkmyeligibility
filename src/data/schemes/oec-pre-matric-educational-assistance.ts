import type { Scheme } from "@/lib/types";

export const oecPreMatricEducationalAssistance: Scheme = {
  id: "oec-pre-matric-educational-assistance",
  slug: "oec-pre-matric-educational-assistance-2k9h8m4p",
  name: "OEC Pre-matric Educational Assistance",
  shortName: "OECP-MEA",
  summary:
    "Educational assistance of ₹320–₹940 per year for OEC students in Classes 1–10 studying in Government, Aided, or Unaided schools across Kerala.",
  description:
    "The OEC Pre-matric Educational Assistance scheme is an initiative by the Backward Classes Development Department, Government of Kerala. It provides financial assistance to pre-matric students belonging to Other Eligible Communities (OEC) — the most backward sections among Other Backward Communities in the state. Students enrolled in Government, Aided, Recognised Unaided, CBSE, ICSE-affiliated schools, and Kendriya Vidyalayas in Kerala from Classes 1 to 10 are eligible. The scheme aims to reduce dropout rates and ensure continuity of education for financially disadvantaged students from these communities. Assistance amounts vary by class level: ₹320 for Classes I–IV, ₹630 for Classes V–VII, and ₹940 for Classes VIII–X.",
  category: "scholarship",
  level: "state",
  states: ["kerala"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to Other Eligible Communities (OEC) or Other Equivalent Communities notified by the Kerala Government",
      type: "caste-category",
    },
    {
      label: "School enrolment",
      value:
        "Must be studying in Classes 1 to 10 in Government, Aided, Recognised Unaided, CBSE, ICSE-affiliated schools, or Kendriya Vidyalayas in Kerala",
      type: "education",
    },
    {
      label: "Domicile",
      value: "Must be a permanent resident of Kerala",
      type: "residence",
    },
    {
      label: "Income limit (OEC)",
      value: "No annual family income limit for OEC community students",
      type: "income",
    },
    {
      label: "Income limit (Other Equivalent Communities)",
      value: "Annual family income must not exceed ₹6,00,000 for Other Equivalent Communities",
      type: "income",
    },
  ],
  benefits: [
    "Educational assistance of ₹320 per year for Classes I to IV",
    "Educational assistance of ₹630 per year for Classes V to VII",
    "Educational assistance of ₹940 per year for Classes VIII to X",
    "Amount credited directly to the student's bank account via DBT",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "OEC community certificate", mandatory: true },
    { name: "Income certificate (if applicable)", mandatory: false },
    { name: "Bank account details", mandatory: true },
    { name: "School ID or bonafide certificate", mandatory: true },
    { name: "Birth certificate", mandatory: true },
    { name: "Residence proof", mandatory: true },
  ],
  officialPortalUrl: "https://www.myscheme.gov.in/schemes/oecp-mea",
  ministry: "Backward Classes Development Department, Government of Kerala",
  applicationMode: ["online"],
  tags: [
    "OEC",
    "pre-matric",
    "educational assistance",
    "Kerala",
    "OBC",
    "backward classes",
    "school",
    "state scheme",
    "classes 1-10",
  ],
  faqs: [
    {
      q: "Who qualifies as OEC in Kerala?",
      a: "OEC (Other Eligible Communities) are the most backward communities among the Other Backward Classes in Kerala. The list includes communities such as Dheevara, Viswakarma, Ezhava, Mukkuvan, Araya, and others notified by the Kerala Government.",
    },
    {
      q: "Is there an income limit for OEC students?",
      a: "No, there is no annual family income limit for students belonging to OEC communities. However, students from Other Equivalent Communities must have an annual family income not exceeding ₹6,00,000.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Students do not need to submit separate applications. School authorities make online entries through the scholarship portal (egrantz.kerala.gov.in) within the prescribed time. Financial assistance is credited directly to the student's bank account via DBT.",
    },
    {
      q: "What are the assistance amounts?",
      a: "Students receive ₹320 per year for Classes I–IV, ₹630 per year for Classes V–VII, and ₹940 per year for Classes VIII–X.",
    },
    {
      q: "Which schools are covered?",
      a: "Government schools, Aided schools, Recognised Unaided schools, CBSE/ICSE-affiliated schools, and Kendriya Vidyalayas in Kerala are covered.",
    },
  ],
  source: "sample",
};
