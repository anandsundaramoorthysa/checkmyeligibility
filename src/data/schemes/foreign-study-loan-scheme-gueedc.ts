import type { Scheme } from "@/lib/types";

export const foreignStudyLoanSchemeGueedc: Scheme = {
  id: "foreign-study-loan-scheme-gueedc",
  slug: "foreign-study-loan-scheme-gueedc-62",
  name: "Foreign Study Loan Scheme (GUEEDC)",
  shortName: "GUEEDC Foreign Loan",
  summary:
    "Education loan of up to ₹15 lakh at 4% simple interest per annum for unreserved category students from Gujarat pursuing MBBS, post-graduation, or PG diploma courses abroad.",
  description:
    "The Foreign Study Loan Scheme is implemented by the Gujarat Unreserved Educational and Economical Development Corporation (GUEEDC) under the Social Justice and Empowerment Department, Government of Gujarat. The scheme provides subsidised education loans to students from unreserved (general) category who have secured admission to MBBS, post-graduation, post-graduation diploma, or equivalent courses at foreign universities. The loan covers tuition fees, accommodation, books, and living expenses up to ₹15 lakh at a highly affordable simple interest rate of 4% per annum. A 1-year moratorium period is provided after course completion before repayment begins. The scheme aims to support meritorious students from economically weaker unreserved families in Gujarat who aspire to pursue higher education abroad but face financial constraints.",
  category: "education-loan",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a permanent resident of Gujarat",
      type: "residence",
    },
    {
      label: "Category",
      value:
        "Must belong to the unreserved (general) category — SC/ST/OBC students have separate schemes",
      type: "caste-category",
    },
    {
      label: "Class 12 marks",
      value: "Minimum 60% marks in Class 12 from Gujarat board or CBSE",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Family annual income ≤ ₹6,00,000",
      type: "income",
    },
    {
      label: "Admission",
      value:
        "Must have secured admission to MBBS, post-graduation, PG diploma, or equivalent course at a recognised foreign university or college",
      type: "education",
    },
  ],
  benefits: [
    "Education loan of up to ₹15,00,000 for overseas higher studies",
    "Highly subsidised interest rate of only 4% simple interest per annum",
    "1-year moratorium (grace period) after completing studies before repayment begins",
    "Loans up to ₹5 lakh: repayment over 5 years in equal monthly installments",
    "Loans above ₹5 lakh: repayment over 6 years in equal monthly installments",
    "Option to prepay the full loan amount before the stipulated deadline without penalty",
    "Loan covers tuition fees, accommodation, books, and living expenses",
  ],
  requiredDocuments: [
    {
      name: "Class 12 marksheet",
      mandatory: true,
      note: "Must show 60% or more marks",
    },
    {
      name: "Family income certificate",
      mandatory: true,
      note: "Issued by competent authority showing annual income ≤ ₹6,00,000",
    },
    {
      name: "Gujarat domicile / residence proof",
      mandatory: true,
    },
    {
      name: "Admission letter from foreign university",
      mandatory: true,
    },
    {
      name: "Valid passport",
      mandatory: true,
    },
    {
      name: "Identity proof (Aadhaar card)",
      mandatory: true,
    },
    {
      name: "Property documents",
      mandatory: true,
      note:
        "Loans up to ₹7.5 lakh: property worth 1.5× the loan amount. Loans above ₹7.5 lakh: immovable property for mortgage in favour of GUEEDC",
    },
    {
      name: "Five post-dated cheques",
      mandatory: true,
      note: "Signed in favour of Gujarat Unreserved Educational and Economical Development Corporation (GUEEDC)",
    },
    {
      name: "Bank passbook",
      mandatory: true,
    },
    {
      name: "Passport-size photograph",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://esamajkalyan.gujarat.gov.in/",
  ministry:
    "Social Justice and Empowerment Department, Government of Gujarat",
  applicationMode: ["online"],
  tags: [
    "education loan",
    "Gujarat",
    "GUEEDC",
    "foreign studies",
    "study abroad",
    "MBBS",
    "post-graduation",
    "unreserved",
    "general category",
    "low interest",
    "education",
    "higher education",
    "medical",
    "state scheme",
  ],
  faqs: [
    {
      q: "What is the GUEEDC Foreign Study Loan Scheme?",
      a: "It is an education loan scheme by the Gujarat Unreserved Educational and Economical Development Corporation (GUEEDC) that provides loans up to ₹15 lakh at 4% simple interest per annum for unreserved category students from Gujarat pursuing MBBS, post-graduation, or PG diploma courses abroad.",
    },
    {
      q: "Who is eligible for this loan?",
      a: "Permanent residents of Gujarat belonging to the unreserved (general) category who have scored 60% or more in Class 12, have an annual family income ≤ ₹6 lakh, and have secured admission to MBBS, post-graduation, PG diploma, or equivalent courses at a foreign university.",
    },
    {
      q: "What is the interest rate?",
      a: "The loan carries a subsidised simple interest rate of only 4% per annum, which is significantly lower than commercial education loans.",
    },
    {
      q: "What is the maximum loan amount?",
      a: "The maximum loan amount is ₹15,00,000 (₹15 lakh) for overseas higher studies.",
    },
    {
      q: "When does repayment start?",
      a: "Repayment begins after a 1-year moratorium (grace period) following completion of the course. For loans up to ₹5 lakh, repayment is over 5 years. For loans above ₹5 lakh, it is over 6 years.",
    },
    {
      q: "Is collateral required?",
      a: "Yes. For loans up to ₹7.5 lakh, property worth 1.5 times the loan amount is required. For loans above ₹7.5 lakh, immovable property must be mortgaged in favour of GUEEDC.",
    },
    {
      q: "Can I prepay the loan early?",
      a: "Yes. The scheme allows prepayment of the full loan amount before the stipulated deadline without any penalty.",
    },
    {
      q: "How do I apply for this loan?",
      a: "Visit the e-Samaj Kalyan portal at esamajkalyan.gujarat.gov.in, register or log in, select the 'Foreign Study Loan' scheme, fill in the application form, upload the required documents, and submit. After online submission, print the form and submit the signed hard copy along with original documents at the GUEEDC office.",
    },
  ],
  source: "sample",
};
