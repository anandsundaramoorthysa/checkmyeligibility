import type { Scheme } from "@/lib/types";

export const apjAbdulKalamScholarship: Scheme = {
  id: "apj-abdul-kalam-scholarship",
  slug: "apj-abdul-kalam-scholarship",
  name: "APJ Abdul Kalam Scholarship",
  shortName: "APJ Abdul Kalam Scholarship",
  summary:
    "₹6,000 per annum from the Kerala Directorate of Minority Welfare for minority-community students in the 2nd or 3rd year of a 3-year polytechnic diploma.",
  description:
    "The APJ Abdul Kalam Scholarship is implemented by the Directorate of Minority Welfare, Government of Kerala, to support students from religious minority communities pursuing a three-year diploma course at a government, aided, or government-approved self-financing polytechnic institution in Kerala.",
  category: "scholarship",
  level: "state",
  states: ["kerala"],
  eligibility: [
    {
      label: "Residence",
      value: "Permanent resident of Kerala",
      type: "residence",
    },
    {
      label: "Community",
      value: "Belongs to a religious minority community: Muslim, Christian, Sikh, Buddhist, Jain, or Parsi",
      type: "other",
    },
    {
      label: "Course",
      value: "Regular student in a three-year diploma course at a government, aided, or government-approved self-financing polytechnic institution",
      type: "education",
    },
    {
      label: "Admission type",
      value: "Merit-seat admission if enrolled at a self-financing polytechnic",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹8,00,000 (APL category)",
      type: "income",
    },
    {
      label: "Year of study",
      value: "Must be in the 2nd or 3rd year of the diploma course",
      type: "education",
    },
    {
      label: "Bank account",
      value: "Must hold an active account in a nationalised or scheduled bank",
      type: "other",
    },
  ],
  benefits: [
    "₹6,000 per annum for selected scholars",
    "One-time disbursement directly to student's bank account",
    "Covers living expenses and study materials",
    "Renewable annually based on academic performance",
  ],
  requiredDocuments: [
    { name: "Application printout", mandatory: true },
    { name: "SSLC / Plus Two mark sheets", mandatory: true },
    { name: "Allotment memo", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Aadhaar / NPR card", mandatory: true },
    { name: "Nativity certificate", mandatory: true },
    { name: "Community certificate", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Ration card", mandatory: true },
  ],
  officialPortalUrl: "https://minoritywelfare.kerala.gov.in/",
  ministry: "Directorate of Minority Welfare, Government of Kerala",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "kerala",
    "minority",
    "diploma",
    "polytechnic",
    "muslim",
    "christian",
    "sikh",
    "buddhist",
    "jain",
    "parsi",
    "state scheme",
  ],
  faqs: [
    {
      q: "Who is eligible for the APJ Abdul Kalam Scholarship?",
      a: "Kerala-resident students from religious minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) in the 2nd or 3rd year of a three-year polytechnic diploma, with family income not exceeding ₹8,00,000.",
    },
    {
      q: "How much does the scholarship provide?",
      a: "₹6,000 per annum for selected scholars.",
    },
    {
      q: "How do I apply?",
      a: "Register online on the Directorate of Minority Welfare website, navigate to Scholarship > APJ Abdul Kalam, complete the Examination, Personal, and Scholarship tabs, upload the required documents (photo, signature, certificates as JPEG under 100 KB), and print the finalized application.",
    },
  ],
  source: "sample",
};
