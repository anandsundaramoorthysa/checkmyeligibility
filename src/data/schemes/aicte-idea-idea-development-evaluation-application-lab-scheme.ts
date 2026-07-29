import type { Scheme } from "@/lib/types";

export const aicteIdeaIdeaDevelopmentEvaluationApplicationLabScheme: Scheme = {
  id: "aicte-idea-idea-development-evaluation-application-lab-scheme",
  slug: "aicte-idea-idea-development-evaluation-application-lab-scheme-mrf2qa55",
  name: "AICTE-IDEA (Idea Development, Evaluation & Application) Lab Scheme",
  shortName: "AICTE IDEA Lab Scheme",
  summary:
    "Financial assistance of ₹30 Lakhs (co-funded model) for AICTE-approved institutions to establish 24x7 IDEA Labs fostering innovation and prototyping under NEP 2020.",
  description:
    "The AICTE-IDEA (Idea Development, Evaluation & Application) Lab Scheme is an initiative under the National Education Policy (NEP) 2020 designed to transform traditional engineering education into an experiential, learning-by-doing environment. These labs serve as common facilities within institutions, equipped with advanced tools and technology, and remain open 24x7 to maximize accessibility. The scheme aims to help students and faculty apply STEM fundamentals to real-world problems, fostering creativity, critical thinking, interdisciplinary collaboration, and the development of prototypes.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "AICTE approval",
      value: "Institution must be approved by AICTE",
      type: "other",
    },
    {
      label: "Infrastructure",
      value: "Institution should have adequate infrastructure and a commitment to maintain the lab 24x7",
      type: "other",
    },
    {
      label: "NBA accreditation",
      value: "At least one course in the institution should have valid NBA accreditation",
      type: "education",
    },
    {
      label: "Track record",
      value: "Preference given to institutions with a proven track record of innovation and academic excellence",
      type: "other",
    },
    {
      label: "Co-funding",
      value: "Institution must be willing to contribute at least 50% of the total project cost",
      type: "other",
    },
  ],
  benefits: [
    "Financial assistance of ₹30 Lakhs as institutional grant",
    "Co-funded model where AICTE provides grant and institution contributes at least 50%",
    "24x7 access to advanced tools and technology for students and faculty",
    "Supports experiential learning and prototype development",
    "Fosters interdisciplinary collaboration and innovation culture",
  ],
  requiredDocuments: [
    { name: "IDEA Lab proposal/application form", mandatory: true },
    { name: "Institutional profile and AICTE approval details", mandatory: true },
    { name: "Infrastructure and equipment plan", mandatory: true },
    { name: "Budget proposal", mandatory: true },
    { name: "Details of faculty coordinators and implementation team", mandatory: true },
    { name: "Approval/recommendation from the Head of Institution", mandatory: true },
    { name: "Any additional documents prescribed by AICTE", mandatory: false },
  ],
  officialPortalUrl: "https://www.aicte.gov.in/node/3192",
  ministry: "All India Council for Technical Education (AICTE), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "AICTE",
    "IDEA Lab",
    "innovation",
    "NEP 2020",
    "experiential learning",
    "prototype development",
    "engineering",
    "institutional grant",
    "co-funded",
    "STEM",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the AICTE-IDEA Lab Scheme?",
      a: "It is an initiative under NEP 2020 that provides financial assistance of ₹30 Lakhs to AICTE-approved institutions to establish common IDEA Labs equipped with advanced tools, open 24x7 for experiential learning and prototyping.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Institutions must be AICTE-approved, have adequate infrastructure, at least one NBA-accredited course, a proven innovation track record, and must contribute at least 50% of the total project cost.",
    },
    {
      q: "What is the grant amount?",
      a: "AICTE provides financial assistance of ₹30 Lakhs as an institutional grant. The institution is expected to contribute at least 50% of the total project cost under this co-funded model.",
    },
    {
      q: "What is the application process?",
      a: "AICTE releases a call for proposals. Eligible institutions prepare an IDEA Lab proposal and submit it through the AICTE portal. AICTE evaluates proposals and selected institutions receive grant support.",
    },
    {
      q: "What documents are required for application?",
      a: "Documents include the IDEA Lab proposal, institutional profile with AICTE approval, infrastructure and equipment plan, budget proposal, faculty coordinator details, and HoD approval.",
    },
  ],
  source: "sample",
};
