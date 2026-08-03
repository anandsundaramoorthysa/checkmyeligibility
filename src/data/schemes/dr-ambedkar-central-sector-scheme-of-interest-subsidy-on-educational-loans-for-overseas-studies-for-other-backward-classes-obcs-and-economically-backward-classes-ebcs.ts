import type { Scheme } from "@/lib/types";

export const drAmbedkarCentralSectorSchemeOfInterestSubsidyOnEducationalLoansForOverseasStudiesForOtherBackwardClassesObcsAndEconomicallyBackwardClassesEbcs: Scheme = {
  id: "dr-ambedkar-central-sector-scheme-of-interest-subsidy-on-educational-loans-for-overseas-studies-for-other-backward-classes-obcs-and-economically-backward-classes-ebcs",
  slug: "dr-ambedkar-central-sector-scheme-of-interest-subsidy-on-educational-loans-for-overseas-studies-for-other-backward-classes-obcs-and-economically-backward-classes-ebcs",
  name: "Dr. Ambedkar Central Sector Scheme of Interest Subsidy on Educational Loans for Overseas Studies for Other Backward Classes (OBCs) and Economically Backward Classes (EBCs)",
  shortName: "Dr. Ambedkar Interest Subsidy (OBC/EBC)",
  summary:
    "Government-paid interest subsidy, on education loans up to ₹20,00,000, for OBC and EBC students pursuing approved overseas Master's, MPhil, or PhD courses.",
  description:
    "This Central Sector Scheme provides an interest subsidy on education loans for approved overseas Master's, MPhil, and PhD courses taken by eligible OBC (Central List) and Economically Backward Class (EBC) students. The Government bears the loan interest during the moratorium period, covering the course duration plus one year, or six months after securing employment, whichever is earlier.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to the OBC (Central List) or Economically Backward Class (EBC) category",
      type: "caste-category",
    },
    {
      label: "Course",
      value: "Secured admission to an approved overseas Master's, MPhil, or PhD course",
      type: "education",
    },
    {
      label: "Loan requirement",
      value: "Must have taken an education loan from a Scheduled Bank under the IBA Education Loan Scheme",
      type: "other",
    },
    {
      label: "Annual family income (OBC)",
      value: "Within the Creamy Layer income limit",
      type: "income",
    },
    {
      label: "Annual family income (EBC)",
      value: "Not exceeding ₹2,50,000",
      type: "income",
    },
    {
      label: "Other conditions",
      value: "Interest subsidy is available only once; ineligible on course discontinuation, expulsion, submission of fraudulent documents, or surrender of Indian citizenship",
      type: "other",
    },
  ],
  benefits: [
    "Full interest subsidy on the education loan during the moratorium period (course period + 1 year, or 6 months after employment, whichever is earlier)",
    "Applicable on eligible loan amounts up to ₹20,00,000",
  ],
  requiredDocuments: [
    { name: "Proof of admission to the approved overseas course", mandatory: true },
    { name: "Education loan sanction documents", mandatory: true },
    { name: "OBC caste certificate", mandatory: false, note: "If applying under the OBC category" },
    { name: "Income certificate / ITR / Form 16 / audited accounts", mandatory: true },
    { name: "Bank-required documentation", mandatory: true },
  ],
  officialPortalUrl: "https://socialjustice.gov.in/schemes/11",
  ministry: "Ministry of Social Justice and Empowerment, Government of India",
  applicationMode: ["online"],
  tags: [
    "education loan",
    "interest subsidy",
    "OBC",
    "EBC",
    "overseas studies",
    "postgraduate",
    "phd",
    "IBA",
    "dr ambedkar",
  ],
  faqs: [
    {
      q: "Who is eligible for this interest subsidy?",
      a: "OBC (Central List) or EBC students who have secured admission to an approved overseas Master's, MPhil, or PhD course and taken an education loan under the IBA Education Loan Scheme.",
    },
    {
      q: "What does the subsidy cover?",
      a: "The Government pays the full interest on the education loan (up to ₹20,00,000) during the moratorium period — the course duration plus one year, or six months after getting a job, whichever comes first.",
    },
    {
      q: "How do I apply?",
      a: "After securing admission and an education loan, submit the required certificates to your bank for verification, which forwards the claim to the Nodal Bank for processing and Government interest payment during the moratorium.",
    },
  ],
  source: "sample",
};
