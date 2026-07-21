import type { Scheme } from "@/lib/types";

export const primeMinisterSScholarshipSchemePmssForWardsOfRpfRpsfPersonnel: Scheme = {
  id: "prime-minister-s-scholarship-scheme-pmss-for-wards-of-rpf-rpsf-personnel",
  slug: "prime-minister-s-scholarship-scheme-pmss-for-wards-of-rpf-rpsf-personnel-mrav7eq0",
  name: "Prime Minister's Scholarship Scheme (PMSS) for Wards of RPF/RPSF Personnel",
  shortName: "PMSS RPF/RPSF",
  summary:
    "Scholarship of \u20B92,500/month (male) and \u20B93,000/month (female) for dependent wards and widows of serving/ex-RPF/RPSF personnel pursuing professional degree courses in India.",
  description:
    "The Prime Minister's Scholarship Scheme (PMSS) for Wards of RPF/RPSF Personnel provides financial assistance to dependent wards and widows of serving or ex-Railway Protection Force (RPF) and Railway Protection Special Force (RPSF) personnel. The scholarship supports students pursuing recognised professional and technical degree courses in India, with the aim of encouraging higher education among families of railway personnel who serve the nation.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Relationship",
      value: "Dependent wards or widows of serving or ex-RPF/RPSF personnel",
      type: "other",
    },
    {
      label: "Academic qualification",
      value: "Must have secured at least 60% in the minimum qualifying examination",
      type: "education",
    },
    {
      label: "Course",
      value: "Must be admitted to a recognised professional or technical degree course in India",
      type: "education",
    },
    {
      label: "Family limit",
      value: "Maximum two wards per family can receive the scholarship",
      type: "other",
    },
  ],
  benefits: [
    "Monthly scholarship of \u20B92,500 for male students",
    "Monthly scholarship of \u20B93,000 for female students",
    "Duration: 2\u20135 years depending on course duration",
    "Disbursed through DBT via the National Scholarship Portal",
  ],
  requiredDocuments: [
    { name: "Service Certificate / PPO or Discharge Certificate", mandatory: true },
    { name: "MEQ mark sheet", mandatory: true },
    { name: "Admission proof", mandatory: true },
    { name: "Aadhaar-linked bank account", mandatory: true },
    { name: "AISHE institution details", mandatory: true },
    { name: "Identity proof", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Railways",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "PMSS",
    "RPF",
    "RPSF",
    "railway",
    "wards",
    "professional",
    "technical",
    "NSP",
    "DBT",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "Who is eligible for the PMSS for RPF/RPSF?",
      a: "Dependent wards and widows of serving or ex-RPF/RPSF personnel who have secured at least 60% in their qualifying examination and are enrolled in a recognised professional or technical degree course in India.",
    },
    {
      q: "How much is the scholarship?",
      a: "Male students receive \u20B92,500 per month and female students receive \u20B93,000 per month for the duration of the course (2\u20135 years).",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the National Scholarship Portal (scholarships.gov.in), upload required documents, and complete institute and railway verification.",
    },
    {
      q: "Can more than two children from the same family apply?",
      a: "No. The benefit is restricted to a maximum of two wards per family.",
    },
  ],
  source: "sample",
};
