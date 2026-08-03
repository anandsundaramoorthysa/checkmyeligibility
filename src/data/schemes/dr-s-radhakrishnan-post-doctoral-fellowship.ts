import type { Scheme } from "@/lib/types";

export const drSRadhakrishnanPostDoctoralFellowship: Scheme = {
  id: "dr-s-radhakrishnan-post-doctoral-fellowship",
  slug: "dr-s-radhakrishnan-post-doctoral-fellowship-mrcgjjb0",
  name: "Dr. S. Radhakrishnan Post-Doctoral Fellowship",
  shortName: "UGC Post-Doctoral Fellowship",
  summary:
    "₹50,000/month fellowship plus ₹50,000/year contingency for PhD holders under 35 to pursue post-doctoral research at Indian universities.",
  description:
    "The scheme Dr. S. Radhakrishnan UGC Post-Doctoral Fellowship is a fellowship scheme by the University Grants Commission (UGC), Department of Higher Education (DoHE). Post-doctoral research is an important enabling step in grooming young researchers for launching an academic/research career. A post-doctoral stint also provides an opportunity to acquire new skills, broaden one's horizon, and offer a platform for transition into cross-disciplinary areas. The objective is to provide an opportunity to carry out advanced studies and research in Sciences, Engineering, and Technology, Humanities and Social Sciences including languages in Indian Universities and Institutions. The tenure of the fellowship is 3 years with no provision for further extension.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Employment status",
      value: "Must be unemployed with an awarded PhD (provisional certificate accepted); persons in regular service are not eligible",
      type: "occupation",
    },
    {
      label: "Age limit",
      value: "Below 35 years as of the last date of application (5-year relaxation for SC/ST/OBC-NCL/Women/PwD/Transgender)",
      type: "age",
    },
    {
      label: "Academic record",
      value: "Minimum 55% marks at PG level (5% relaxation for reserved categories)",
      type: "education",
    },
    {
      label: "Mentor",
      value: "Must identify a Mentor/Supervisor who is regular faculty at Associate Professor level or above, with PhD and at least 3 PhD theses supervised",
      type: "other",
    },
    {
      label: "Research centre",
      value: "Fellowship tenable at UGC 2(f) universities with NAAC accreditation, deemed universities, central/state funded degree-awarding institutions, or Institutes of National Importance",
      type: "other",
    },
    {
      label: "No conflict",
      value: "Must not have availed any other UGC Post-Doctoral Fellowship or any other fellowship/remuneration",
      type: "other",
    },
  ],
  benefits: [
    "Fellowship of ₹50,000 per month",
    "Contingency grant of ₹50,000 per year",
    "House Rent Allowance (HRA)",
    "Reader assistance of ₹3,000 per month for PwD scholars",
    "Tenure of 3 years",
  ],
  requiredDocuments: [
    { name: "Scanned passport-size photograph and signature (jpg, up to 1 MB)", mandatory: true },
    { name: "Complete research proposal (up to 5 MB)", mandatory: true },
    { name: "Research abstract (up to 1 MB)", mandatory: true },
    { name: "Auto-generated application form signed by HoD/Registrar", mandatory: true },
    { name: "No Objection Certificate from proposed research centre signed by Mentor, HOD, and Registrar/Director", mandatory: true },
  ],
  officialPortalUrl: "https://www.ugc.gov.in/Fellowship/stu_Fellowship2",
  ministry: "University Grants Commission (UGC), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "UGC",
    "post-doctoral",
    "fellowship",
    "research",
    "PhD",
    "sciences",
    "engineering",
    "humanities",
    "social sciences",
    "central",
    "all-india",
    "Dr. S. Radhakrishnan",
  ],
  faqs: [
    {
      q: "What is the Dr. S. Radhakrishnan Post-Doctoral Fellowship?",
      a: "A UGC fellowship providing ₹50,000/month and ₹50,000/year contingency for 3 years to unemployed PhD holders under 35 for post-doctoral research at Indian universities.",
    },
    {
      q: "Who is eligible?",
      a: "Unemployed PhD holders in Sciences, Engineering, Humanities, or Social Sciences below 35 years (5-year relaxation for reserved categories), with 55% PG marks, a mentor at Associate Professor level, and an eligible research centre.",
    },
    {
      q: "What is the fellowship amount?",
      a: "₹50,000 per month as fellowship, ₹50,000 per year as contingency grant, HRA, and ₹3,000 per month reader assistance for PwD scholars.",
    },
    {
      q: "What is the tenure?",
      a: "The fellowship tenure is 3 years with no provision for further extension.",
    },
    {
      q: "What documents are required?",
      a: "Scanned photo and signature, complete research proposal, abstract, an auto-generated form signed by HoD/Registrar, and a No Objection Certificate signed by Mentor, HOD, and Registrar/Director.",
    },
    {
      q: "How do I apply?",
      a: "Applications are invited online once a year. Register on frg.ugc.ac.in as a New User, login with emailed credentials, complete the eligibility form, PG and PhD details, and submit the declaration.",
    },
  ],
  source: "sample",
};
