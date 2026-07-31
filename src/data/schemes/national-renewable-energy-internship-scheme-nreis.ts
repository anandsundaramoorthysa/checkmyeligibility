import type { Scheme } from "@/lib/types";

export const nationalRenewableEnergyInternshipSchemeNreis: Scheme = {
  id: "national-renewable-energy-internship-scheme-nreis",
  slug: "national-renewable-energy-internship-scheme-nreis",
  name: "National Renewable Energy Internship Scheme (NREIS)",
  shortName: "NREIS",
  summary:
    "₹15,000 monthly stipend from the Ministry of New and Renewable Energy for physical, on-site interns gaining exposure to renewable energy technologies and policy.",
  description:
    "The National Renewable Energy Internship Scheme (NREIS), operated by the Ministry of New and Renewable Energy (MNRE), offers internship placements to students and young professionals in the renewable energy sector. Interns gain exposure to renewable energy technologies, policies, and implementation strategies while developing workforce capabilities relevant to India's clean-energy transition. The stipend is paid exclusively for physical, on-site internships.",
  category: "skill-development",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic qualification",
      value: "Pursuing an undergraduate, postgraduate, or doctoral degree, or a professional course",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Minimum 60% marks in the qualifying examination",
      type: "education",
    },
    {
      label: "Institution",
      value: "Enrolled at a recognised institution, domestic or international",
      type: "education",
    },
    {
      label: "Field of study",
      value: "Renewable energy, engineering, science, management, economics, law, or policy",
      type: "education",
    },
  ],
  benefits: [
    "₹15,000 per month stipend for physical, on-site interns",
    "Hands-on exposure to renewable energy technologies, policy, and implementation",
  ],
  requiredDocuments: [
    { name: "Application form", mandatory: true },
    { name: "Resume", mandatory: true },
    { name: "Institutional bonafide certificate", mandatory: true },
    { name: "Academic transcripts", mandatory: true },
    { name: "Recommendation letter", mandatory: true },
    { name: "Identity proof", mandatory: true },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://hrd.mnre.gov.in/",
  ministry: "Ministry of New and Renewable Energy (MNRE)",
  applicationMode: ["online"],
  tags: [
    "internship",
    "renewable energy",
    "stipend",
    "MNRE",
    "engineering",
    "science",
    "policy",
    "undergraduate",
    "postgraduate",
    "phd",
    "professional",
  ],
  faqs: [
    {
      q: "Who can apply for NREIS?",
      a: "Undergraduate, postgraduate, PhD, or professional-course students from recognised institutions (domestic or international), with a minimum of 60% marks, in fields such as renewable energy, engineering, science, management, economics, law, or policy.",
    },
    {
      q: "How much stipend is paid?",
      a: "₹15,000 per month, paid exclusively for physical, on-site internships.",
    },
    {
      q: "Can the internship be done remotely?",
      a: "No, the stipend applies only to physical, on-site internships.",
    },
    {
      q: "Where do I apply?",
      a: "Through the MNRE Human Resource Development portal at hrd.mnre.gov.in, submitting your application form, resume, transcripts, and other required documents.",
    },
  ],
  source: "sample",
};
