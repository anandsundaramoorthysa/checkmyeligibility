import type { Scheme } from "@/lib/types";

export const aicteSpicesScheme: Scheme = {
  id: "aicte-scheme-for-promoting-interests-creativity-and-ethics-among-students-spices",
  slug: "aicte-spices-scheme",
  name: "AICTE Scheme for Promoting Interests, Creativity and Ethics among Students (SPICES)",
  shortName: "AICTE SPICES",
  summary:
    "Financial assistance of ₹1,00,000 (with matching institution contribution) to AICTE-approved institutions for developing model student clubs.",
  description:
    "The AICTE-SPICES (Scheme for Promoting Interests, Creativity and Ethics among Students) provides financial support to AICTE-approved institutions for developing student clubs. The objective is to energize student clubs, chapters, and societies as platforms for pursuing individual interests, creative work, showcasing talent, networking, and developing teamwork, leadership, and ethical values. The funded club serves as a model club to inspire similar activities across other clubs in the institution.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "AICTE approval",
      value: "Institution must be approved by AICTE and have a minimum of 5 years of existence",
      type: "other",
    },
    {
      label: "Club membership",
      value: "The club must have a minimum of 50 student members",
      type: "other",
    },
    {
      label: "Matching contribution",
      value: "Institution must commit a matching contribution of at least ₹1,00,000 to the club",
      type: "other",
    },
    {
      label: "Faculty coordinator",
      value: "Coordinator must be a full-time regular faculty with at least 10 years of experience in teaching/industry",
      type: "other",
    },
    {
      label: "Co-coordinator",
      value: "Institute must identify a Co-coordinator (faculty) with at least 5 years of experience",
      type: "other",
    },
    {
      label: "Single proposal",
      value: "Only one proposal per institute is admissible",
      type: "other",
    },
  ],
  benefits: [
    "One-time financial assistance of ₹1,00,000 as institutional grant for the student club",
    "Institution provides matching contribution of at least ₹1,00,000",
    "Opportunity to develop a model club that inspires similar activities across the institution",
    "Platform for students to pursue creative work, showcase talent, and network",
    "Develops teamwork, leadership, and ethical values among students",
  ],
  requiredDocuments: [
    { name: "Proposal/Application form for SPICES Scheme", mandatory: true },
    { name: "Details of the student club/chapter/society", mandatory: true },
    { name: "Activity plan and budget proposal", mandatory: true },
    { name: "AICTE approval details of the institution", mandatory: true },
    { name: "Institute recommendation/approval documents", mandatory: true },
    { name: "Any additional documents prescribed by AICTE", mandatory: false },
  ],
  officialPortalUrl: "https://www.aicte.gov.in/sites/",
  ministry: "All India Council for Technical Education (AICTE), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "AICTE",
    "SPICES",
    "student clubs",
    "creativity",
    "ethics",
    "leadership",
    "teamwork",
    "institutional grant",
    "co-funded",
    "technical education",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the AICTE SPICES Scheme?",
      a: "It provides financial assistance of ₹1,00,000 (with matching institution contribution) to AICTE-approved institutions for developing model student clubs that promote interests, creativity, and ethics among students.",
    },
    {
      q: "Who can apply?",
      a: "AICTE-approved institutions with at least 5 years of existence, having a student club with minimum 50 members, and willing to commit a matching contribution of ₹1,00,000.",
    },
    {
      q: "What is the grant amount?",
      a: "AICTE provides ₹1,00,000 as a one-time grant. The institution must contribute a matching amount of at least ₹1,00,000 to the club.",
    },
    {
      q: "What are the faculty requirements?",
      a: "The club coordinator must be a full-time regular faculty with at least 10 years of experience. A co-coordinator with at least 5 years of experience must also be identified.",
    },
    {
      q: "What is the application process?",
      a: "Institutions prepare a proposal with objectives, activities, and budget, submit it through the AICTE portal as per notification, and selected institutions receive grant support to develop a model club.",
    },
  ],
  source: "sample",
};
