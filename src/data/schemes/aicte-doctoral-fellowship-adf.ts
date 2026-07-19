import type { Scheme } from "@/lib/types";

export const aicteDoctoralFellowshipAdf: Scheme = {
  id: "aicte-doctoral-fellowship-adf",
  slug: "aicte-doctoral-fellowship-adf-mrch9fg1",
  name: "AICTE Doctoral Fellowship (ADF)",
  shortName: "AICTE ADF",
  summary:
    "National research fellowship providing ₹37,000/month (JRF) and ₹42,000/month (SRF) to meritorious full-time Ph.D. scholars at AICTE-approved institutions, covering technical fields aligned with AICTE-prescribed thrust areas.",
  description:
    "The AICTE Doctoral Fellowship (ADF) is a flagship national research scheme launched by the All India Council for Technical Education. It provides financial assistance to meritorious, full-time Ph.D. scholars pursuing technical research at AICTE-approved institutions and universities across India.\n\nThe fellowship offers ₹37,000 per month during Years 1 and 2 (Junior Research Fellow / JRF) and ₹42,000 per month during Years 3 to 5 (Senior Research Fellow / SRF), supporting doctoral research in AICTE-prescribed advanced technology thrust areas.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Admission status",
      value:
        "Must be admitted into a regular, full-time Ph.D. program in an eligible technical department (Engineering, Technology, Management, Design, Planning, Applied Arts & Crafts, Computer Applications, or Applied Sciences) at an AICTE-approved university or institute",
      type: "education",
    },
    {
      label: "Minimum academic cutoff",
      value:
        "At least 75% marks (7.5 CGPA out of 10) in both Bachelor's and Master's degrees. Relaxed to 70% marks or 7.0 CGPA for SC/ST/PwD applicants",
      type: "education",
    },
    {
      label: "National examination",
      value:
        "Must have a qualified, valid scorecard from a national competitive exam cleared within the last 5 years (GATE, NET, GPAT, CEED, CAT, CMAT, or GMAT)",
      type: "education",
    },
    {
      label: "Age cap",
      value: "Must be under 30 years old at the time of admission",
      type: "age",
    },
    {
      label: "Age relaxations",
      value:
        "Up to 35 years for SC/ST, Women, and PwD candidates. Up to 33 years for OBC candidates",
      type: "age",
    },
    {
      label: "Research alignment",
      value:
        "The Ph.D. research topic must be selected from the AICTE-prescribed list of advanced technology thrust areas",
      type: "other",
    },
  ],
  benefits: [
    "₹37,000 per month during Years 1 and 2 (Junior Research Fellow / JRF)",
    "₹42,000 per month during Years 3 to 5 (Senior Research Fellow / SRF)",
    "Financial support for up to 5 years of full-time doctoral research",
    "Research aligned with AICTE-prescribed advanced technology thrust areas",
    "Opportunity to work at AICTE-approved institutions and universities across India",
  ],
  requiredDocuments: [
    { name: "Ph.D. Admission Letter", mandatory: true, note: "Official verification of registration from your host institute" },
    { name: "Class 10 certificate (age proof)", mandatory: true },
    { name: "Undergraduate (UG) marksheets and degree certificate", mandatory: true },
    { name: "Postgraduate (PG) marksheets and degree certificate", mandatory: true },
    { name: "National Exam Scorecard (GATE, NET, GPAT, CEED, CAT, CMAT, or GMAT)", mandatory: true, note: "Must be valid and cleared within the last 5 years" },
    { name: "Detailed Research Proposal", mandatory: true, note: "Outlining focus area, methodology, and relevance to technological thrust areas" },
    { name: "Aadhaar card copy", mandatory: true },
    { name: "Bank passbook copy (Aadhaar-seeded, active personal savings account)", mandatory: true, note: "No joint or Jan Dhan accounts allowed" },
    { name: "Category Certificate (SC/ST/OBC)", mandatory: false, note: "Required if applying under age or score relaxations" },
    { name: "Disability Certificate", mandatory: false, note: "Required if applying under PwD relaxations" },
    { name: "Undertaking/NOC", mandatory: true, note: "Signed declaration stating you are not availing of any other fellowship (like NET-JRF) alongside a University No Objection Certificate (NOC)" },
  ],
  officialPortalUrl: "https://www.aicte-india.org/",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "AICTE",
    "doctoral",
    "fellowship",
    "PhD",
    "research",
    "JRF",
    "SRF",
    "GATE",
    "NET",
    "technical education",
    "engineering",
    "technology",
    "stipend",
    "thrust areas",
  ],
  faqs: [
    {
      q: "What is the AICTE Doctoral Fellowship (ADF)?",
      a: "It is a flagship national research scheme by AICTE that provides financial assistance to meritorious, full-time Ph.D. scholars pursuing technical research at AICTE-approved institutions. It offers ₹37,000/month (JRF) for Years 1-2 and ₹42,000/month (SRF) for Years 3-5.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Full-time Ph.D. scholars admitted to AICTE-approved institutions in eligible technical departments, with at least 75% marks (70% for SC/ST/PwD) in Bachelor's and Master's degrees, a valid national exam scorecard (GATE/NET/GPAT/CEED/CAT/CMAT/GMAT), and under 30 years of age (relaxations apply for reserved categories).",
    },
    {
      q: "How much funding does the fellowship provide?",
      a: "₹37,000 per month during Years 1 and 2 (Junior Research Fellow) and ₹42,000 per month during Years 3 to 5 (Senior Research Fellow), for a total duration of up to 5 years.",
    },
    {
      q: "What documents are needed to apply?",
      a: "Ph.D. admission letter, academic certificates (10th, UG, PG), national exam scorecard, detailed research proposal, Aadhaar card, bank passbook copy, category certificate (if applicable), and an undertaking/NOC stating you are not availing any other fellowship.",
    },
    {
      q: "How do I apply?",
      a: "Secure Ph.D. admission at an AICTE-approved institution, coordinate with your university's ADF Nodal Officer to generate a Unique Student ID, then register on the AICTE Fellowship Portal, fill the application form, upload documents, and submit before the session deadline (Session 1: April 20th, Session 2: October 20th).",
    },
  ],
  source: "sample",
};
