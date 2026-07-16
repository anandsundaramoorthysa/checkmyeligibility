import type { Scheme } from "@/lib/types";

export const aicteDoctoralFellowship: Scheme = {
  id: "aicte-doctoral-fellowship",
  slug: "aicte-doctoral-fellowship-adf-mrch9fg1",
  name: "AICTE Doctoral Fellowship (ADF)",
  shortName: "AICTE ADF",
  summary:
    "Monthly fellowship of ₹37,000 (JRF, Years 1-2) and ₹42,000 (SRF, Years 3-5) for full-time Ph.D. scholars pursuing technical research at AICTE-approved institutions across India.",
  description:
    "The AICTE Doctoral Fellowship (ADF) is a flagship national research scheme launched by the All India Council for Technical Education. It provides financial assistance to meritorious, full-time Ph.D. scholars pursuing technical research at AICTE-approved institutions and universities across India. The fellowship supports research in advanced technology thrust areas and is awarded through a competitive selection process based on national examination scores, academic record, and research proposal evaluation.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Admission Status",
      value:
        "Must be admitted into a regular, full-time Ph.D. program in an eligible technical department (Engineering, Technology, Management, Design, Planning, Applied Arts & Crafts, Computer Applications, or Applied Sciences) at an AICTE-approved university or institute",
      type: "education",
    },
    {
      label: "Minimum Academic Cutoff",
      value:
        "At least 75% marks (7.5 CGPA out of 10) in both Bachelor's and Master's degrees. Relaxed to 70% marks (7.0 CGPA) for SC/ST/PwD applicants",
      type: "education",
    },
    {
      label: "National Examination",
      value:
        "Must have a qualified, valid scorecard from a national competitive exam cleared within the last 5 years (GATE, NET, GPAT, CEED, CAT, CMAT, or GMAT)",
      type: "other",
    },
    {
      label: "Age Limit",
      value:
        "Under 30 years old at the time of admission. Age relaxations: up to 35 years for SC/ST, Women, and PwD candidates; up to 33 years for OBC candidates",
      type: "age",
    },
    {
      label: "Research Alignment",
      value:
        "The Ph.D. research topic must be selected from the AICTE-prescribed list of advanced technology thrust areas",
      type: "other",
    },
  ],
  benefits: [
    "Junior Research Fellowship (JRF): ₹37,000 per month for Years 1 and 2",
    "Senior Research Fellowship (SRF): ₹42,000 per month for Years 3 to 5",
    "Total fellowship value of up to approximately ₹22.2 lakhs over the 5-year duration",
    "Contingency grant and HRA as per UGC/AICTE norms",
    "Provides financial independence to pursue full-time technical doctoral research",
  ],
  requiredDocuments: [
    { name: "Ph.D. Admission Letter from host institute", mandatory: true },
    {
      name: "Academic Certificates — Class 10 (age proof), Undergraduate, and Postgraduate marksheets and degree certificates",
      mandatory: true,
    },
    { name: "National Exam Scorecard (GATE / NET / GPAT / CEED / CAT / CMAT / GMAT)", mandatory: true },
    {
      name: "Detailed Research Proposal outlining focus area, methodology, and relevance to technological thrust areas",
      mandatory: true,
    },
    {
      name: "Aadhaar Card and passbook copy of an Aadhaar-seeded, active personal savings account",
      mandatory: true,
      note: "No joint or Jan Dhan accounts allowed",
    },
    {
      name: "Category Certificate (SC / ST / OBC / PwD)",
      mandatory: false,
      note: "Required if applying under age or score relaxations",
    },
    {
      name: "Undertaking / NOC",
      mandatory: true,
      note: "Signed declaration stating you are not availing any other fellowship (like NET-JRF), along with a University No Objection Certificate (NOC)",
    },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://www.aicte-india.org/doctors",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "PhD",
    "research",
    "AICTE",
    "ADF",
    "doctoral",
    "JRF",
    "SRF",
    "technical",
    "GATE",
    "NET",
    "GPAT",
    "stipend",
    "higher education",
  ],
  faqs: [
    {
      q: "Who is eligible for the AICTE Doctoral Fellowship?",
      a: "Full-time Ph.D. scholars admitted to an AICTE-approved technical department, with at least 75% marks in UG and PG (70% for SC/ST/PwD), a valid national exam scorecard from the last 5 years, and under 30 years of age (with relaxations for reserved categories).",
    },
    {
      q: "What is the fellowship amount?",
      a: "JRF (Years 1-2): ₹37,000 per month. SRF (Years 3-5): ₹42,000 per month. A contingency grant and HRA are also provided as per UGC/AICTE norms.",
    },
    {
      q: "How do I apply for this fellowship?",
      a: "Complete your institute's Ph.D. entrance process and register as a full-time 1st-year doctoral researcher. Your institute's ADF Nodal Officer will generate your Unique Student ID on the AICTE Fellowship Portal. Log in, fill the application form, upload all required documents, and submit before the session deadline (Session 1: April 20th, Session 2: October 20th).",
    },
    {
      q: "Can I hold another fellowship alongside the ADF?",
      a: "No. You must submit a signed undertaking confirming you are not availing any other fellowship (such as NET-JRF) while receiving the ADF.",
    },
    {
      q: "What are the AICTE-prescribed thrust areas for research?",
      a: "AICTE publishes a list of advanced technology thrust areas each academic year. These typically include emerging domains such as Artificial Intelligence, IoT, Renewable Energy, Biotechnology, Advanced Manufacturing, Cybersecurity, and other nationally prioritised technology fields. Check the AICTE website for the current list.",
    },
  ],
  source: "sample",
};
