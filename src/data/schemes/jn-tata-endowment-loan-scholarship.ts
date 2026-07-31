import type { Scheme } from "@/lib/types";

export const jnTataEndowmentLoanScholarship: Scheme = {
  id: "jn-tata-endowment-loan-scholarship",
  slug: "jn-tata-endowment-loan-scholarship-mri76kjm",
  name: "JN Tata Endowment Loan Scholarship",
  shortName: "JN Tata Endowment",
  summary:
    "Merit-based loan scholarship of ₹1 lakh to ₹20 lakh supporting Indian students pursuing higher education abroad, offered by The J.N. Tata Endowment.",
  description:
    "The JN Tata Endowment Loan Scholarship is a prestigious merit-based loan scholarship offered by The J.N. Tata Endowment to support Indian students pursuing higher education abroad. Established in 1892 by Jamsetji Tata, it is one of India's oldest overseas education funding programs. The loan scholarship amount ranges from ₹1 lakh to ₹20 lakh, depending on the applicant's profile, course cost, and financial requirements.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Qualification",
      value: "Must hold a degree from a recognized Indian university",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Must have secured at least 60% marks in undergraduate or postgraduate studies",
      type: "education",
    },
    {
      label: "Course",
      value:
        "Must be applying for or admitted to a recognized full-time postgraduate, doctoral, or postdoctoral program abroad",
      type: "education",
    },
    {
      label: "Final-year students",
      value: "Final-year students and applicants awaiting results are also eligible to apply",
      type: "other",
    },
  ],
  benefits: [
    "Loan scholarship amount ranging from ₹1 lakh to ₹20 lakh",
    "Amount depends on the applicant's profile, course cost, and financial requirements",
  ],
  requiredDocuments: [
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Passport Copy", mandatory: true },
    { name: "Academic Transcripts and Mark Sheets", mandatory: true },
    { name: "Statement of Purpose (SOP)", mandatory: true },
    { name: "Resume/CV", mandatory: true },
    { name: "Admission Letter", mandatory: false, note: "If available" },
    { name: "Work Experience Certificate", mandatory: false, note: "If applicable" },
    {
      name: "Appointment Letter and Salary Slips",
      mandatory: false,
      note: "Required for working professionals",
    },
    {
      name: "GRE/GMAT/IELTS/TOEFL Scores",
      mandatory: false,
      note: "If applicable",
    },
  ],
  officialPortalUrl: "https://jntataendowment.org/",
  applicationMode: ["online"],
  tags: [
    "JN Tata",
    "Tata Endowment",
    "loan scholarship",
    "scholarship",
    "study abroad",
    "overseas education",
    "postgraduate",
    "doctoral",
    "postdoctoral",
    "merit",
    "all-india",
    "education loan",
    "higher education",
  ],
  faqs: [
    {
      q: "Who is eligible for the JN Tata Endowment Loan Scholarship?",
      a: "Indian citizens who hold a degree from a recognized Indian university, have secured at least 60% marks in undergraduate or postgraduate studies, and are applying for or admitted to a recognized full-time postgraduate, doctoral, or postdoctoral program abroad. Final-year students and applicants awaiting results are also eligible to apply.",
    },
    {
      q: "What is the loan scholarship amount?",
      a: "The loan scholarship amount ranges from ₹1 lakh to ₹20 lakh, depending on the applicant's profile, course cost, and financial requirements.",
    },
    {
      q: "How do I apply for the JN Tata Endowment Loan Scholarship?",
      a: "Visit the official JN Tata Endowment portal, register and create an account, fill out the online application form, upload the required documents, and submit the application. Shortlisted candidates appear for an online aptitude test, followed by a personal interview for selected candidates. Final scholarship recipients are announced after evaluation.",
    },
    {
      q: "What documents are required?",
      a: "Passport-size photograph, Aadhaar card, passport copy, academic transcripts and mark sheets, Statement of Purpose (SOP), resume/CV, admission letter (if available), work experience certificate (if applicable), appointment letter and salary slips for working professionals, and GRE/GMAT/IELTS/TOEFL scores (if applicable).",
    },
  ],
  source: "sample",
};
