import type { Scheme } from "@/lib/types";

export const centralSectorInterestSubsidySchemeCsisOnEducationLoans: Scheme = {
  id: "central-sector-interest-subsidy-scheme-csis-on-education-loans",
  slug: "central-sector-interest-subsidy-scheme-csis-on-education-loans",
  name: "Central Sector Interest Subsidy Scheme (CSIS) on Education Loans",
  shortName: "CSIS",
  summary:
    "Full interest subsidy on education loans during the course and moratorium period for economically weaker students (family income \u2264 \u20B94.5 lakh) pursuing professional and technical courses in India.",
  description:
    "Provides interest subsidy on education loans for economically weaker students pursuing professional and technical courses in India.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Applicant must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B94,50,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Course type",
      value:
        "Must pursue a professional or technical course in India at a recognised institution",
      type: "education",
    },
    {
      label: "Loan scheme",
      value:
        "Education loan must be sanctioned under the IBA Model Education Loan Scheme",
      type: "other",
    },
    {
      label: "Availment limit",
      value:
        "Subsidy is available only once for either the first undergraduate degree or the first postgraduate degree/diploma; integrated courses are also eligible",
      type: "other",
    },
  ],
  benefits: [
    "Full interest subsidy during the course period",
    "Full interest subsidy during the moratorium period",
    "Covers the entire duration of the eligible course",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "Income Certificate issued by the competent authority",
      mandatory: true,
    },
    { name: "Admission letter from the institution", mandatory: true },
    {
      name: "Educational loan sanction letter from the bank",
      mandatory: true,
    },
    { name: "Fee structure or fee receipt", mandatory: true },
    { name: "Previous academic certificates / mark sheets", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Identity and address proof as required by the bank",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://csis.canarabank.bank.in",
  ministry: "Ministry of Education",
  applicationMode: ["offline"],
  tags: [
    "education loan",
    "interest subsidy",
    "CSIS",
    "IBA Model",
    "professional courses",
    "technical courses",
    "EWS",
    "economically weaker",
    "UG",
    "PG",
    "integrated courses",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "Who is eligible for the CSIS interest subsidy on education loans?",
      a: "Indian citizens from economically weaker sections with an annual family income not exceeding ₹4,50,000 who have taken an education loan under the IBA Model Education Loan Scheme to pursue professional or technical courses at recognised institutions in India.",
    },
    {
      q: "Which banks participate in the CSIS scheme?",
      a: "All scheduled commercial banks that have adopted the IBA Model Education Loan Scheme participate in CSIS. This includes public sector banks (SBI, PNB, Bank of Baroda, Canara Bank, etc.) and eligible private sector banks.",
    },
    {
      q: "What is the moratorium period and does the subsidy apply during it?",
      a: "The moratorium period is the course duration plus one year (or six months after getting a job, whichever is earlier). Yes, the full interest subsidy applies during both the course period and the moratorium period, so no interest accrues on the outstanding loan during this time.",
    },
    {
      q: "Which courses are covered under CSIS?",
      a: "Professional and technical courses pursued at recognised institutions in India — including engineering, medical, dental, pharmacy, MBA, MCA, and other UG/PG technical courses. The subsidy is available once for either the first undergraduate degree or the first postgraduate degree/diploma; integrated courses are also covered.",
    },
    {
      q: "How do I apply for the CSIS subsidy?",
      a: "You do not apply separately for CSIS. When you take an education loan from a participating bank under the IBA Model scheme, inform the bank branch that you wish to avail CSIS. The bank will submit the claim to the nodal bank (Canara Bank) on your behalf after verifying your income certificate and other eligibility documents.",
    },
  ],
  source: "sample",
};
