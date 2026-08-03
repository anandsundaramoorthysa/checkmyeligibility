import type { Scheme } from "@/lib/types";

export const tamilNaduChiefMinisterSResearchFellowship: Scheme = {
  id: "tamil-nadu-chief-ministers-research-fellowship",
  slug: "tamil-nadu-chief-ministers-research-fellowship",
  name: "Tamil Nadu Chief Minister's Research Fellowship",
  shortName: "TN CMRF",
  summary:
    "₹25,000 per month state fellowship for meritorious TN students pursuing full-time PhD at recognised state universities, with a three-year tenure and phased progression review.",
  description:
    "The Tamil Nadu Chief Minister's Research Fellowship (CMRF) is a state-sponsored scheme designed to cultivate a robust academic research ecosystem by financially supporting meritorious students pursuing full-time Ph.D. programs in recognized state universities and government colleges. Running under a structured three-year tenure framework, the initiative enables scholars to focus on advanced academic research across diverse fields, including Science, Arts, Humanities, and Social Sciences. Selected research fellows go through a phased progression overseen by the Tamil Nadu Directorate of Collegiate Education (TNDCE). This progression includes a performance review at the end of the first year (Phase I), an evaluation at the end of the second year (Phase II) to transition to senior fellowship status, and a final thesis and report submission along with a formal Utilization Certificate at the completion of the third year (Phase III).",
  category: "fellowship",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a native resident of Tamil Nadu",
      type: "residence",
    },
    {
      label: "Qualification",
      value: "Hold a postgraduate degree from a UGC-recognized institution located within Tamil Nadu",
      type: "education",
    },
    {
      label: "Academic merit",
      value: "Minimum 60% marks in postgraduate studies (5% relaxation for SC, ST, differently-abled, and women applicants)",
      type: "education",
    },
    {
      label: "Final semester students",
      value: "Final-semester PG students may sit for the eligibility test, but selection is conditional upon passing the qualifying degree exams",
      type: "education",
    },
  ],
  benefits: [
    "₹25,000 per month stipend for the fellowship duration",
    "Three-year structured tenure with phased progression",
    "Phase I: Performance review at end of first year",
    "Phase II: Evaluation at end of second year to transition to senior fellowship",
    "Phase III: Final thesis submission and Utilization Certificate at completion of third year",
    "Research across Science, Arts, Humanities, and Social Sciences",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Nativity or Domicile Certificate proving Tamil Nadu residency", mandatory: true },
    { name: "Community Certificate", mandatory: true },
    { name: "Class 10 mark sheet and certificate", mandatory: true },
    { name: "Class 12 mark sheet and certificate", mandatory: true },
    { name: "Graduation degree certificates and mark sheets", mandatory: true },
    { name: "Postgraduation degree certificates and mark sheets", mandatory: true },
    { name: "Ph.D. admission or registration letter", mandatory: true },
    { name: "Signed certificate of confirmation from research supervisor or head of department", mandatory: true },
  ],
  officialPortalUrl: "https://www.tn.gov.in/",
  ministry:
    "Tamil Nadu Directorate of Collegiate Education (TNDCE) / Government of Tamil Nadu",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "PhD",
    "research",
    "Tamil Nadu",
    "CMRF",
    "state",
    "stipend",
    "postgraduate",
    "science",
    "arts",
    "humanities",
    "social sciences",
    "TNDCE",
  ],
  faqs: [
    {
      q: "Who is eligible for the Tamil Nadu CMRF?",
      a: "Native residents of Tamil Nadu who hold a postgraduate degree from a UGC-recognized institution within the state with minimum 60% marks (5% relaxation for SC/ST/differently-abled/women). Final-semester PG students may apply but selection is conditional on passing the degree.",
    },
    {
      q: "What is the fellowship amount?",
      a: "Selected fellows receive ₹25,000 per month as a stipend.",
    },
    {
      q: "What is the duration of the fellowship?",
      a: "The fellowship has a structured three-year tenure, with a performance review at the end of Year 1 (Phase I), an evaluation at the end of Year 2 (Phase II) to transition to senior fellowship, and final thesis submission at the end of Year 3 (Phase III).",
    },
    {
      q: "How do I apply?",
      a: "Monitor the state's portal during active application cycles, submit the registration form online, sit for the standardized CMRF Eligibility Test, and the final merit list is prepared based on exam performance.",
    },
    {
      q: "What fields of research are covered?",
      a: "The fellowship supports advanced academic research across Science, Arts, Humanities, and Social Sciences at recognized state universities and government colleges in Tamil Nadu.",
    },
  ],
  source: "sample",
};
