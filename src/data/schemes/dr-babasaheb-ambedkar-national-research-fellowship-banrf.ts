import type { Scheme } from "@/lib/types";

export const drBabasahebAmbedkarNationalResearchFellowshipBanrf: Scheme = {
  id: "dr-babasaheb-ambedkar-national-research-fellowship-banrf",
  slug: "dr-babasaheb-ambedkar-national-research-fellowship-banrf",
  name: "Dr. Babasaheb Ambedkar National Research Fellowship (BANRF)",
  shortName: "BANRF",
  summary:
    "A Maharashtra Government fellowship by BARTI supporting Scheduled Caste (SC) scholars pursuing full-time M.Phil./Ph.D. research with JRF/SRF stipends and annual contingency grants.",
  description:
    "The BANRF is a Maharashtra Government fellowship implemented by BARTI to support Scheduled Caste (SC) scholars pursuing full-time M.Phil. or Ph.D. research. The scheme provides financial assistance to promote advanced research among SC candidates domiciled in Maharashtra.",
  category: "social-welfare",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Caste (SC) category",
      type: "caste-category",
    },
    {
      label: "Domicile",
      value: "Must be a domicile of Maharashtra",
      type: "residence",
    },
    {
      label: "Educational qualification",
      value: "Must hold a Postgraduate degree from a recognized institution",
      type: "education",
    },
    {
      label: "Program enrolment",
      value:
        "Must be registered for a regular, full-time M.Phil. or Ph.D. program",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B98,00,000",
      type: "income",
    },
    {
      label: "Exclusion",
      value:
        "Candidates receiving other fellowships or in full-time employment are ineligible",
      type: "other",
    },
  ],
  benefits: [
    "Junior Research Fellowship (JRF, years 1\u20132): \u20B931,000/month + \u20B920,000/year contingency grant",
    "Senior Research Fellowship (SRF, years 3\u20135): \u20B935,000/month + \u20B920,000/year contingency grant",
    "Applicable to PhD scholars registered at recognised Indian universities",
  ],
  requiredDocuments: [
    { name: "Caste Certificate", mandatory: true },
    { name: "Caste Validity Certificate", mandatory: true },
    { name: "Domicile Certificate", mandatory: true },
    { name: "PG Mark Sheets", mandatory: true },
    { name: "Ph.D. Registration Certificate", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Research Proposal", mandatory: true },
    {
      name: "Bank Account Details (linked to Aadhaar)",
      mandatory: true,
    },
    { name: "Passport-size Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://fellowship.barti.in/",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "BANRF",
    "BARTI",
    "fellowship",
    "SC",
    "Scheduled Caste",
    "JRF",
    "SRF",
    "PhD",
    "M.Phil",
    "research",
    "Maharashtra",
    "state",
    "social-welfare",
    "stipend",
    "contingency grant",
  ],
  faqs: [
    {
      q: "Who awards the Dr. Babasaheb Ambedkar National Research Fellowship (BANRF)?",
      a: "BANRF is awarded by the Dr. Babasaheb Ambedkar Research and Training Institute (BARTI), a Government of Maharashtra institution under the Social Justice and Special Assistance Department, to support SC scholars in advanced research.",
    },
    {
      q: "Who is eligible for BANRF?",
      a: "Scheduled Caste (SC) candidates who are domiciles of Maharashtra, hold a postgraduate degree from a recognised institution, are registered for a regular full-time M.Phil. or Ph.D. programme, have an annual family income not exceeding ₹8,00,000, and are not receiving any other fellowship or in full-time employment.",
    },
    {
      q: "What is the fellowship amount?",
      a: "JRF (years 1–2): ₹31,000 per month plus an annual contingency grant of ₹20,000. SRF (years 3–5): ₹35,000 per month plus an annual contingency grant of ₹20,000.",
    },
    {
      q: "What is the duration of the fellowship?",
      a: "The fellowship is available for up to 5 years — 2 years as Junior Research Fellow (JRF) and up to 3 more years as Senior Research Fellow (SRF), subject to satisfactory progress in research.",
    },
    {
      q: "How do I apply for BANRF?",
      a: "Visit the BARTI fellowship portal (fellowship.barti.in), register, fill the online application form, upload all required documents (caste certificate, caste validity certificate, domicile certificate, PG mark sheets, Ph.D. registration certificate, Aadhaar, research proposal, bank details, and photograph), and submit before the notified deadline.",
    },
  ],
  source: "sample",
};
