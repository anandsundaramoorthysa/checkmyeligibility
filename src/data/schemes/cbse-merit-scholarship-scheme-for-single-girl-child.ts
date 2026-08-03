import type { Scheme } from "@/lib/types";

export const cbseMeritScholarshipSchemeForSingleGirlChild: Scheme = {
  id: "cbse-merit-scholarship-scheme-for-single-girl-child-mrf4502k",
  slug: "cbse-merit-scholarship-scheme-for-single-girl-child-mrf4502k",
  name: "CBSE Merit Scholarship Scheme for Single Girl Child",
  shortName: "CBSE Single Girl Child Scholarship",
  summary:
    "Scholarship of ₹1,000 per month for two years (₹24,000 total) to support meritorious single girl children studying in Classes 11 and 12 at CBSE-affiliated schools.",
  description:
    "The CBSE Merit Scholarship Scheme for Single Girl Child is implemented by the Central Board of Secondary Education (CBSE). The scheme aims to recognize and support meritorious single girl children by providing financial assistance for higher secondary education. It encourages parents to promote the education of girls and helps deserving students continue their studies in Classes XI and XII.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Only girl child",
      value:
        "The applicant must be the only girl child of her parents, studying in Class 11 or 12 at a CBSE-affiliated school",
      type: "other",
    },
    {
      label: "Academic performance",
      value:
        "Must have scored at least 70% marks in Class 10",
      type: "education",
    },
    {
      label: "Family income",
      value:
        "Family income must be under ₹8 Lakh per annum",
      type: "income",
    },
    {
      label: "School tuition fees",
      value:
        "School tuition fees must be within the prescribed limits",
      type: "other",
    },
  ],
  benefits: [
    "Scholarship of ₹1,000 per month for two years",
    "Total assistance of ₹24,000 across Classes 11 and 12",
  ],
  requiredDocuments: [
    { name: "CBSE Class X Mark Sheet/Certificate", mandatory: true },
    { name: "Admission Proof for Class XI", mandatory: true },
    { name: "Single Girl Child Affidavit/Declaration", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Bank Account Details", mandatory: true },
    { name: "Aadhaar Card or Identity Proof", mandatory: true },
    { name: "School Verification Certificate", mandatory: true },
    { name: "Any other documents prescribed by CBSE", mandatory: true },
  ],
  officialPortalUrl: "https://www.cbse.gov.in/cbsenew/cbse.html",
  ministry: "Central Board of Secondary Education (CBSE)",
  applicationMode: ["online"],
  tags: [
    "CBSE",
    "merit scholarship",
    "single girl child",
    "girl child",
    "class 11",
    "class 12",
    "higher secondary",
    "Class X",
    "merit",
    "CBSE affiliated school",
    "central scholarship",
    "girls education",
    "scholarship",
  ],
  faqs: [
    {
      q: "Who is eligible for the CBSE Merit Scholarship Scheme for Single Girl Child?",
      a: "A girl who is the only girl child of her parents, studying in Class 11 or 12 at a CBSE-affiliated school, with at least 70% marks in Class 10. Family income must be under ₹8 Lakh per annum and school tuition fees must be within the prescribed limits.",
    },
    {
      q: "What is the scholarship amount?",
      a: "The scholarship provides ₹1,000 per month for two years, totaling ₹24,000 across Classes 11 and 12.",
    },
    {
      q: "How do I apply for the scholarship?",
      a: "Visit the CBSE scholarship portal during the application period, register using the required details, fill in the online application form, upload the required documents, and submit the application online. School verification and scrutiny are then conducted, and eligible students receive the scholarship as per CBSE guidelines.",
    },
    {
      q: "What documents are required?",
      a: "CBSE Class X mark sheet/certificate, admission proof for Class XI, single girl child affidavit/declaration, passport-size photograph, bank account details, Aadhaar card or identity proof, school verification certificate, and any other documents prescribed by CBSE.",
    },
    {
      q: "Who implements this scheme?",
      a: "The scheme is implemented by the Central Board of Secondary Education (CBSE).",
    },
  ],
  source: "sample",
};
