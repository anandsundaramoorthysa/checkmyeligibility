import type { Scheme } from "@/lib/types";

export const nbfcdEducationLoan: Scheme = {
  id: "nbcfdc-education-loan",
  slug: "nbcfdc-education-loan",
  name: "NBCFDC Education Loan Scheme",
  shortName: "NBCFDC Education Loan",
  summary:
    "Subsidised education loan for OBC students pursuing professional, technical, or vocational courses — up to ₹15 lakh (India) or ₹20 lakh (abroad) at 3.5–4% interest with a 5-year moratorium.",
  description:
    "The National Backward Classes Finance & Development Corporation (NBCFDC), a Government of India undertaking under the Ministry of Social Justice & Empowerment, provides subsidised education loans to students from Other Backward Classes (OBC) to pursue professional, technical, and vocational education at graduate level and above.\n\nNBCFDC funds up to 90% of course expenditure for studies in India (maximum ₹15 lakh) and up to 85% for studies abroad (maximum ₹20 lakh). The remaining balance is borne by the student or the State Channelizing Agency (SCA).\n\nThe loan carries a highly concessional interest rate — 4% per annum for male students and 3.5% per annum for female students. A moratorium period of 5 years is provided from the date of disbursement, after which the loan is repayable over 10 years. Pre-payment is allowed at any time after commencement of repayment with no pre-closure charges.\n\nExpenses covered include admission and tuition fees, books, stationery and instruments, examination fees, laboratory and library fees, boarding and lodging, insurance premium during the loan period, and travel expenses for studies abroad.\n\nApplications can be submitted online through the PM-SURAJ Portal (pmsuraj.dosje.gov.in) or through NBCFDC's own portal (nbcfdc.gov.in). Offline applications can be made through State Channelizing Agencies (SCAs), Public Sector Banks, or Regional Rural Banks empanelled with NBCFDC. A toll-free helpline (1800-102-3399) is available for queries.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to Other Backward Classes (OBC) as notified by the Central or State Government",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Up to ₹3,00,000 per annum. At least 50% of funding must go to applicants with income up to ₹1,50,000",
      type: "income",
    },
    {
      label: "Academic qualification",
      value: "Minimum 50% marks in the qualifying examination whose qualification is a prerequisite for the chosen course",
      type: "education",
    },
    {
      label: "Course & Institution",
      value: "Admission in a professional or technical course approved by AICTE, Medical Council of India, UGC, or equivalent body in a recognised institute. Vocational courses must be at least 6 months long and supported by NSDC, State Skill Missions, or Sector Skill Councils",
      type: "education",
    },
    {
      label: "Admission mode",
      value: "Must have secured admission through an entrance test or merit-based selection process. For studies abroad, admission through standardised tests (SAT, GMAT, GRE, etc.)",
      type: "other",
    },
  ],
  benefits: [
    "NBCFDC funds up to 90% of course expenditure for studies in India (maximum ₹15 lakh per student)",
    "NBCFDC funds up to 85% of course expenditure for studies abroad (maximum ₹20 lakh per student)",
    "Concessional interest rate: 4% p.a. for male students and 3.5% p.a. for female students",
    "5-year moratorium period from the date of disbursement",
    "Repayable over 10 years after the moratorium period (total tenure of 15 years)",
    "No pre-closure charges — pre-payment allowed at any time after commencement of repayment",
    "1% per-annum timely payment rebate equally split between Channel Partner and Beneficiary",
    "Covers tuition, books, stationery, examination fees, lab/library fees, boarding, lodging, insurance, and travel (abroad only)",
  ],
  requiredDocuments: [
    { name: "Caste Certificate (OBC)", mandatory: true, note: "Issued by relevant authority of District Administration" },
    { name: "Income Certificate", mandatory: true, note: "Certificate from Competent Authority, or AAY/BPL Card, or self-certified certificate endorsed by a Gazetted Officer" },
    { name: "Aadhaar Card", mandatory: true },
    { name: "PAN Card", mandatory: true },
    { name: "Passport-size Photographs", mandatory: true },
    { name: "Admission / Offer Letter", mandatory: true, note: "From a recognised institute" },
    { name: "Qualifying Exam Mark Sheet", mandatory: true, note: "Proof of minimum 50% marks" },
    { name: "Course Fee Details", mandatory: true, note: "Fee structure from the institute" },
    { name: "Domicile Certificate", mandatory: false, note: "Residence proof" },
    { name: "Passport", mandatory: false, note: "Required for studies abroad" },
    { name: "Bank Account Details", mandatory: true, note: "Aadhaar-linked bank account for loan disbursement" },
  ],
  officialPortalUrl: "https://nbcfdc.gov.in/nbcfdc/web/education-loan",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online", "offline"],
  tags: [
    "education loan",
    "NBCFDC",
    "OBC",
    "backward classes",
    "professional education",
    "technical education",
    "vocational course",
    "PM-SURAJ",
    "subsidised loan",
    "ministry of social justice",
    "all-india",
    "central",
    "graduate",
    "postgraduate",
    "studies abroad",
  ],
  faqs: [
    {
      q: "Who is eligible for the NBCFDC Education Loan?",
      a: "Students belonging to Other Backward Classes (OBC) with an annual family income up to ₹3,00,000, who have secured at least 50% marks in their qualifying examination and have admission in a recognised professional, technical, or vocational course.",
    },
    {
      q: "How much loan can I get?",
      a: "NBCFDC provides up to 90% of course expenditure for studies in India (maximum ₹15 lakh) and up to 85% for studies abroad (maximum ₹20 lakh). The remaining balance is borne by the student or the State Channelizing Agency.",
    },
    {
      q: "What is the interest rate?",
      a: "The subsidised interest rate is 4% per annum for male students and 3.5% per annum for female students.",
    },
    {
      q: "How do I apply?",
      a: "You can apply online through the PM-SURAJ Portal (pmsuraj.dosje.gov.in) or through NBCFDC's portal (nbcfdc.gov.in). Offline applications can be submitted through empanelled State Channelizing Agencies (SCAs), Public Sector Banks, or Regional Rural Banks in your district.",
    },
    {
      q: "What is the repayment schedule?",
      a: "A 5-year moratorium period starts from the date of loan disbursement. After the moratorium, the loan is repayable over 10 years. The total tenure from disbursement is 15 years.",
    },
    {
      q: "Can I prepay the loan early?",
      a: "Yes. Pre-payment is allowed at any time after commencement of repayment with no pre-closure charges.",
    },
    {
      q: "What expenses does the loan cover?",
      a: "The loan covers admission and tuition fees, books, stationery and instruments, examination fees, laboratory and library fees, boarding and lodging, insurance premium during the loan period, and travel expenses (for studies abroad only).",
    },
  ],
  source: "sample",
};
