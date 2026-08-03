import type { Scheme } from "@/lib/types";

export const icssrPostDoctoralFellowship: Scheme = {
  id: "icssr-post-doctoral-fellowship-mrata09l",
  slug: "icssr-post-doctoral-fellowship-mrata09l",
  name: "ICSSR Post-Doctoral Fellowship",
  shortName: "ICSSR PDF",
  summary:
    "₹31,000 monthly fellowship and ₹20,000 annual contingency grant for two years for Indian PhD holders under 45 in social sciences.",
  description:
    "This scheme is open to Indian citizens under the age of 45 who hold a PhD and have demonstrated research ability through earlier publications. All candidates must be affiliated with a Ministry of Education or UGC-recognized public-funded Indian university, and a senior faculty member (not less than an Associate Professor) from the same institution must supervise their study. The fellowship offers a ₹31,000 monthly grant and ₹20,000 annual contingency grant for a period of two years. The scheme covers a wide range of disciplines under social sciences, with 26 major areas including priority research topics. Fellows are expected to conduct full-time research, provide regular progress updates, and publish at least two research publications in reputable journals.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Age limit",
      value: "Must be under 45 years of age (5-year relaxation for SC/ST/PwD)",
      type: "age",
    },
    {
      label: "Qualification",
      value: "Must possess a PhD in a social science discipline",
      type: "education",
    },
    {
      label: "Research competence",
      value: "Must have demonstrable research competence via publications",
      type: "education",
    },
    {
      label: "Institutional affiliation",
      value: "Must be affiliated with a public-funded Indian institution approved for PhD (Ministry of Education or UGC recognized)",
      type: "other",
    },
    {
      label: "Supervisor",
      value: "Must have a supervisor who is a serving faculty member at Associate Professor level or above",
      type: "other",
    },
    {
      label: "Clear record",
      value: "Must not be a defaulter of any ICSSR grant/project/fellowship",
      type: "other",
    },
  ],
  benefits: [
    "Monthly fellowship amount of ₹31,000",
    "Contingency grant of ₹20,000 per annum",
    "Duration of two years",
    "Covers 26 major disciplines under social sciences including priority research topics",
    "Opportunity for evidence-based research relevant to policymakers",
  ],
  requiredDocuments: [
    { name: "PhD certificate", mandatory: true },
    { name: "Research proposal", mandatory: true },
    { name: "Publications list", mandatory: true },
    { name: "CV / Resume", mandatory: true },
    { name: "Supervisor's consent letter", mandatory: true },
    { name: "Institutional affiliation certificate", mandatory: true },
    { name: "Age proof", mandatory: true },
    { name: "Category certificate (if applicable)", mandatory: false },
  ],
  officialPortalUrl: "https://icssr.org/",
  ministry: "Indian Council of Social Science Research (ICSSR), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "ICSSR",
    "post-doctoral",
    "fellowship",
    "social sciences",
    "research",
    "PhD",
    "publications",
    "policy research",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the ICSSR Post-Doctoral Fellowship?",
      a: "A fellowship providing ₹31,000 monthly and ₹20,000 annual contingency for two years to Indian PhD holders under 45 pursuing full-time research in social sciences.",
    },
    {
      q: "Who is eligible?",
      a: "Indian citizens under 45 (5-year relaxation for SC/ST/PwD) with a PhD in social sciences, demonstrable publications, affiliation with a public-funded Indian institution, and a supervisor at Associate Professor level or above.",
    },
    {
      q: "What is the fellowship amount?",
      a: "₹31,000 per month as fellowship and ₹20,000 per annum as contingency grant, for a period of two years.",
    },
    {
      q: "What is expected of fellows?",
      a: "Fellows conduct full-time research, provide regular progress updates, publish at least two research publications in reputable journals, and submit a book-length report with audited financial data.",
    },
    {
      q: "How do I apply?",
      a: "Visit icssr.org, navigate to the Fellowships section, click Post-Doctoral Fellowship Scheme, register/login on the ICSSR portal, fill the online application, upload documents, and submit.",
    },
  ],
  source: "sample",
};
