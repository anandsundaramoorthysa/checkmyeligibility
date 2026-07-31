import type { Scheme } from "@/lib/types";

export const chhatrapatiShahuMaharajNationalResearchFellowshipCsmnrf: Scheme = {
  id: "chhatrapati-shahu-maharaj-national-research-fellowship-csmnrf",
  slug: "chhatrapati-shahu-maharaj-national-research-fellowship-csmnrf-mrdr2k7g",
  name: "Chhatrapati Shahu Maharaj National Research Fellowship (CSMNRF)",
  shortName: "CSMNRF",
  summary:
    "Monthly fellowship with HRA and contingency support by SARTHI, Maharashtra for full-time PhD scholars from eligible communities pursuing research in recognized universities and institutions.",
  description:
    "The Chhatrapati Shahu Maharaj National Research Fellowship (CSMNRF) is implemented by SARTHI, Maharashtra, to support full-time PhD scholars from eligible communities pursuing research in recognized universities and institutions. Thousands of fellowships have been sanctioned under the scheme.",
  category: "fellowship",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a resident of Maharashtra",
      type: "residence",
    },
    {
      label: "Category",
      value: "Must belong to eligible SARTHI target groups (OBC and other eligible communities)",
      type: "caste-category",
    },
    {
      label: "Enrollment",
      value: "Must be registered for a full-time PhD programme at a recognized university or institution",
      type: "education",
    },
    {
      label: "Qualification",
      value: "Must possess a postgraduate degree from a recognized institution",
      type: "education",
    },
    {
      label: "Income criteria",
      value: "Must satisfy the fellowship guidelines and income criteria prescribed by SARTHI",
      type: "income",
    },
    {
      label: "Age limit",
      value: "Must not be above 45 years of age as of 1st January of the respective year",
      type: "age",
    },
    {
      label: "Mode of study",
      value: "PhD pursued through distance education shall not be considered for the fellowship",
      type: "other",
    },
  ],
  benefits: [
    "Monthly fellowship for eligible PhD scholars",
    "House Rent Allowance (HRA) support",
    "Contingency support for research activities",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Domicile Certificate", mandatory: true },
    { name: "PG Mark Sheets", mandatory: true },
    { name: "PhD Registration Certificate", mandatory: true },
    { name: "Research Proposal", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    { name: "Bank Account Details", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Caste Certificate", mandatory: true },
    { name: "10th & 12th / Graduation Certificates", mandatory: true },
  ],
  officialPortalUrl: "https://sarthi.maharashtra.gov.in/en",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "CSMNRF",
    "SARTHI",
    "Maharashtra",
    "OBC",
    "PhD",
    "research",
    "stipend",
    "HRA",
    "contingency",
    "state fellowship",
    "social justice",
  ],
  faqs: [
    {
      q: "Who is eligible for the CSMNRF fellowship?",
      a: "Residents of Maharashtra belonging to eligible SARTHI target groups (including OBC), registered for a full-time PhD programme, holding a postgraduate degree from a recognized institution, not above 45 years of age as of 1st January of the respective year, and satisfying the fellowship guidelines and income criteria prescribed by SARTHI.",
    },
    {
      q: "What benefits does the fellowship provide?",
      a: "Selected PhD scholars receive a monthly fellowship along with House Rent Allowance (HRA) and contingency support for research activities.",
    },
    {
      q: "Can distance education PhD scholars apply?",
      a: "No. PhD pursued through distance education shall not be considered for the fellowship.",
    },
    {
      q: "What is the application process?",
      a: "Visit the SARTHI portal, read the fellowship notification and eligibility conditions, register on the fellowship portal, fill in personal, academic and research details, upload the required documents, and submit the application. Applications then go through document and eligibility verification, evaluation by the competent committee, and publication of selected candidates before fellowship benefits are released.",
    },
    {
      q: "What documents are required?",
      a: "Aadhaar card, domicile certificate, PG mark sheets, PhD registration certificate, research proposal, income certificate, bank account details, passport-size photograph, caste certificate, and 10th & 12th / graduation certificates.",
    },
  ],
  source: "sample",
};
