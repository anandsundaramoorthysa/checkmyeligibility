import type { Scheme } from "@/lib/types";

export const primeMinistersFellowshipDoctoralResearch: Scheme = {
  id: "prime-ministers-fellowship-doctoral-research",
  slug: "prime-ministers-fellowship-doctoral-research",
  name: "Prime Minister\u2019s Fellowship for Doctoral Research",
  shortName: "PMFDR",
  summary:
    "A prestigious public-private fellowship by ANRF (DST) and CII offering enhanced stipend (\u20B955,000\u2013\u20B972,800/month) for full-time PhD scholars conducting industry-relevant research, with 50% co-funding from a partner company.",
  description:
    "The Prime Minister\u2019s Fellowship for Doctoral Research (PMFDR) is a flagship public-private partnership initiative of the Anusandhan National Research Foundation (ANRF), Department of Science and Technology (DST), Government of India, implemented by the Federation of Indian Chambers of Commerce and Industry (FICCI). The scheme aims to attract talented scholars into doctoral research by providing a substantially enhanced fellowship \u2014 approximately double the standard JRF/SRF rates \u2014 with 50% contributed by the Government and 50% by an industry partner. Fellows receive a monthly stipend ranging from \u20B955,000 to \u20B972,800 (depending on HRA), for a maximum duration of four years. The scheme encourages PhD scholars to work on innovative research problems with clear industrial application and commercialisation potential. Up to 100 new fellowships are awarded each year. The applicant must be a full-time PhD scholar registered at a recognised Indian university or research institution, must apply within 14 months of PhD registration, and must secure an industry partner willing to co-fund and mentor the research. The scheme is open-ended with multiple selection cycles throughout the year.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian national",
      type: "residence",
    },
    {
      label: "PhD enrolment",
      value: "Must be a full-time PhD scholar registered at a recognised Indian university, institute, or research laboratory",
      type: "education",
    },
    {
      label: "Registration timeline",
      value: "PhD registration date must not be more than 14 months prior to the date of application submission",
      type: "education",
    },
    {
      label: "Industry partner",
      value: "Must have a valid industry partner (company registered under Indian Companies Act) willing to co-fund 50% of the fellowship and provide mentorship",
      type: "other",
    },
    {
      label: "Research proposal",
      value: "Proposed research must be innovative, have industrial relevance, commercialisation potential, and high scientific merit",
      type: "other",
    },
    {
      label: "Exclusivity",
      value: "Must not be receiving any other fellowship or salary concurrently after selection",
      type: "other",
    },
  ],
  benefits: [
    "Enhanced monthly stipend of \u20B955,000 to \u20B972,800 (depending on HRA) \u2014 approximately double standard JRF/SRF rates",
    "Total fellowship value of up to \u20B912.49 lakh per annum per fellow",
    "50% government contribution (ANRF/DST) matching prevailing JRF/SRF + HRA norms",
    "50% industry partner contribution providing joint funding and mentorship",
    "Maximum duration of 4 years leading to the award of a PhD degree",
    "Exposure to industry best practices, innovation, and commercial R&D",
    "Industry mentor appointed as co-supervisor alongside academic supervisor",
    "Opportunity to work with/in the partner company during the research period",
  ],
  requiredDocuments: [
    { name: "Recent passport-size photograph", mandatory: true },
    { name: "PhD admission/registration certificate", mandatory: true },
    { name: "Class 10, 12, graduation, and post-graduation certificates", mandatory: true },
    { name: "No Objection Certificate (NOC) from host institution", mandatory: true },
    { name: "Undertaking from academic supervisor and head of institution", mandatory: true },
    { name: "Letter of commitment from industry partner (on company letterhead)", mandatory: true },
    { name: "CV of PhD scholar", mandatory: true },
    { name: "CV of academic supervisor (including publications and projects)", mandatory: true },
    { name: "CV of industry mentor", mandatory: true },
    { name: "Detailed research synopsis demonstrating industrial application", mandatory: true },
    { name: "Partner company profile and balance sheet", mandatory: true },
    { name: "List of publications (if any)", mandatory: false },
  ],
  officialPortalUrl: "https://www.primeministerfellowshipscheme.in/",
  ministry: "Anusandhan National Research Foundation (ANRF), Department of Science and Technology",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "doctoral",
    "phd",
    "research",
    "PMFDR",
    "ANRF",
    "DST",
    "CII",
    "FICCI",
    "industry-partner",
    "central",
    "all-india",
    "public-private-partnership",
    "science",
    "technology",
    "engineering",
  ],
  faqs: [
    {
      q: "Who can apply for the Prime Minister\u2019s Fellowship for Doctoral Research?",
      a: "Indian nationals who are full-time PhD scholars registered at a recognised Indian university or research institution, with a PhD registration date not exceeding 14 months from the date of application, and who have secured an industry partner willing to co-fund and mentor the research.",
    },
    {
      q: "What is the fellowship amount?",
      a: "The monthly stipend ranges from \u20B955,000 to \u20B972,800 depending on HRA, totaling up to \u20B912.49 lakh per annum. The amount is double the standard JRF/SRF rates, with 50% from ANRF (Government) and 50% from the industry partner.",
    },
    {
      q: "How do I find an industry partner?",
      a: "Applicants must identify and secure an industry partner on their own. The PMFDR portal facilitates match-making between research scholars and industry. Companies registered under the Indian Companies Act (including eligible MNCs registered in India) are eligible as partners.",
    },
    {
      q: "What is the duration of the fellowship?",
      a: "The fellowship is awarded for a maximum duration of four years, leading to the award of a PhD degree. The fellowship automatically ceases upon submission of the PhD thesis.",
    },
    {
      q: "How do I apply?",
      a: "Applications are submitted online through the official PMFDR portal (primeministerfellowshipscheme.in). The application is joint \u2014 submitted by the PhD scholar along with the industry partner. The scheme is open-ended with multiple selection cycles each year.",
    },
    {
      q: "Can I apply if I am already receiving another fellowship?",
      a: "No. Selected fellows must not receive any other fellowship or salary concurrently. However, applicants may be receiving other fellowships at the time of application; upon selection, the PMFDR replaces all other fellowship support.",
    },
  ],
  source: "sample",
};
