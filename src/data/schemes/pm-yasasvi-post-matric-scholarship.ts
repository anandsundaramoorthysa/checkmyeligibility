import type { Scheme } from "@/lib/types";

export const pmYasasviPostMatricScholarship: Scheme = {
  id: "pm-yasasvi-post-matric-scholarship-mreebdud",
  slug: "pm-yasasvi-post-matric-scholarship-mreebdud",
  name: "PM-YASASVI Post-Matric Scholarship",
  shortName: "PM-YASASVI",
  summary:
    "Centrally sponsored scholarship for OBC, EBC, and DNT students covering tuition fee reimbursement and a maintenance allowance for post-matriculation courses, with a family income limit of ₹2.5 lakh per annum.",
  description:
    "A centrally sponsored initiative by the Ministry of Social Justice & Empowerment for students belonging to OBC, EBC, and DNT categories. It provides financial assistance to cover tuition fees and maintenance expenses for students pursuing recognized post-matriculation courses in government and private institutions. The scholarship is disbursed directly to beneficiaries through the National Scholarship Portal (NSP).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to OBC, EBC, or DNT categories",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Family annual income from all sources must not exceed ₹2,50,000",
      type: "income",
    },
    {
      label: "Course",
      value:
        "Must be enrolled in a regular, full-time post-matric course (Class 11, 12, ITI, Diploma, UG, PG, or PhD)",
      type: "education",
    },
    {
      label: "Family restriction",
      value: "Only two boys per family are eligible (this restriction does not apply to girl students)",
      type: "other",
    },
  ],
  benefits: [
    "Day Scholars – OBC/EBC: ₹10,000 per year maintenance allowance",
    "Day Scholars – DNT: ₹15,000 per year maintenance allowance",
    "Hostellers – OBC/EBC: ₹25,000 per year maintenance allowance",
    "Hostellers – DNT: ₹30,000 per year maintenance allowance",
    "Reimbursement of actual tuition, enrollment, library, and examination fees",
  ],
  requiredDocuments: [
    { name: "Caste / Community Certificate (OBC/EBC/DNT)", mandatory: true },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Issued by the competent Revenue Authority",
    },
    { name: "Mark sheets of the last qualifying examination", mandatory: true },
    {
      name: "Fee Receipt and Bonafide Student Certificate from the institution",
      mandatory: true,
    },
    { name: "Aadhaar-linked Bank Account details", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "PM-YASASVI",
    "post-matric",
    "scholarship",
    "OBC",
    "EBC",
    "DNT",
    "backward classes",
    "economically backward classes",
    "denotified tribes",
    "central scheme",
    "all-india",
    "NSP",
    "tuition fee reimbursement",
    "maintenance allowance",
    "fee waiver",
    "social justice",
    "empowerment",
  ],
  faqs: [
    {
      q: "Who is eligible for the PM-YASASVI Post-Matric Scholarship?",
      a: "Students belonging to OBC, EBC, or DNT categories with a family annual income not exceeding ₹2,50,000 from all sources, who are enrolled in a regular, full-time post-matric course (Class 11, 12, ITI, Diploma, UG, PG, or PhD) in a recognized government or private institution.",
    },
    {
      q: "What benefits are provided under the scheme?",
      a: "Day Scholars receive a maintenance allowance of ₹10,000 per year (OBC/EBC) or ₹15,000 per year (DNT). Hostellers receive ₹25,000 per year (OBC/EBC) or ₹30,000 per year (DNT). In addition, the actual tuition, enrollment, library, and examination fees are reimbursed.",
    },
    {
      q: "Is there any restriction on the number of beneficiaries per family?",
      a: "Yes. Only two boys per family are eligible under the scheme. This restriction does not apply to girl students.",
    },
    {
      q: "How do I apply for the PM-YASASVI Post-Matric Scholarship?",
      a: "Applications must be submitted through the National Scholarship Portal (NSP) at scholarships.gov.in. Students must complete the One-Time Registration (OTR), fill out the application form, and upload the mandatory documents for verification by the educational institution and state authorities.",
    },
    {
      q: "What documents are required?",
      a: "Caste/Community Certificate (OBC/EBC/DNT), Income Certificate issued by the competent Revenue Authority, mark sheets of the last qualifying examination, fee receipt and bonafide student certificate from the institution, and Aadhaar-linked bank account details.",
    },
  ],
  source: "sample",
};
