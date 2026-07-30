import type { Scheme } from "@/lib/types";

export const csirResearchAssociateship: Scheme = {
  id: "csir-research-associateship",
  slug: "csir-research-associateship",
  name: "CSIR Research Associateship (RA)",
  shortName: "CSIR RA",
  summary:
    "₹36,000 to ₹40,000 per month plus HRA for Ph.D. holders to conduct research at CSIR laboratories, for up to 5 years.",
  description:
    "The Council of Scientific and Industrial Research (CSIR) offers Research Associateship (RA) to young Ph.D. holders for conducting research in frontier areas of science and technology at CSIR laboratories and recognised institutions. The fellowship provides a monthly stipend of ₹36,000 (for fresh Ph.D. holders), ₹40,000 (with 3+ years post-Ph.D. experience), and ₹42,000 (with 5+ years experience), along with House Rent Allowance (HRA) as per CSIR norms. The associateship is awarded for an initial period of 2 years, extendable up to 5 years based on performance. CSIR RA positions are advertised periodically by individual CSIR laboratories based on their research requirements.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Educational qualification",
      value: "Must hold a Ph.D. in Science or Engineering from a recognised university",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum 35 years of age as on the date of advertisement (age relaxation for reserved categories as per Government norms)",
      type: "age",
    },
    {
      label: "Experience",
      value: "Post-Ph.D. research experience as per the specific advertisement requirements",
      type: "education",
    },
    {
      label: "Publication",
      value: "Must have published research papers in peer-reviewed journals",
      type: "education",
    },
  ],
  benefits: [
    "Monthly stipend of ₹36,000 (fresh Ph.D.), ₹40,000 (3+ years experience), or ₹42,000 (5+ years experience)",
    "House Rent Allowance (HRA) as per CSIR norms",
    "Medical facilities as per CSIR rules",
    "Initial appointment for 2 years, extendable up to 5 years",
    "Research contingency grant",
    "Opportunity to work at premier CSIR laboratories",
  ],
  requiredDocuments: [
    { name: "Ph.D. degree certificate", mandatory: true },
    { name: "Detailed CV with list of publications", mandatory: true },
    { name: "Research proposal", mandatory: true },
    { name: "Age proof", mandatory: true },
    { name: "Experience certificates", mandatory: true },
    { name: "Category certificate (if applicable)", mandatory: false },
    { name: "Recommendation letters from referees", mandatory: false },
  ],
  officialPortalUrl: "https://www.csir.res.in",
  ministry: "Council of Scientific and Industrial Research (CSIR)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "research associateship",
    "CSIR",
    "science",
    "engineering",
    "PhD",
    "central",
    "all India",
    "laboratory research",
    "stipend",
    "HRA",
  ],
  faqs: [
    {
      q: "What is the monthly stipend for CSIR RA?",
      a: "The monthly stipend is ₹36,000 for fresh Ph.D. holders, ₹40,000 for those with 3+ years post-Ph.D. experience, and ₹42,000 for those with 5+ years experience, plus HRA.",
    },
    {
      q: "What is the maximum age for applying?",
      a: "The maximum age is 35 years as on the date of advertisement, with relaxation for reserved categories as per Government of India norms.",
    },
    {
      q: "How long is the Research Associateship?",
      a: "The RA is awarded for an initial period of 2 years, which can be extended up to 5 years based on performance and project requirements.",
    },
    {
      q: "Where do I apply for CSIR RA positions?",
      a: "CSIR RA positions are advertised periodically by individual CSIR laboratories. Check the CSIR website (csir.res.in) and individual laboratory websites for current openings.",
    },
    {
      q: "Can foreign nationals apply?",
      a: "Generally, only Indian citizens are eligible, but some CSIR laboratories may have specific provisions for foreign researchers under collaborative programmes.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
