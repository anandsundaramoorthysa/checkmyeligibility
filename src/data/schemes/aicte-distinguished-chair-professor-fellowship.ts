import type { Scheme } from "@/lib/types";

export const aicteDistinguishedChairProfessorFellowship: Scheme = {
  id: "aicte-distinguished-chair-professor-fellowship",
  slug: "aicte-distinguished-chair-professor-fellowship-mra6i9tv",
  name: "AICTE - Distinguished Chair Professor Fellowship",
  shortName: "AICTE DCPF",
  summary:
    "Fellowship providing an honorarium of ₹10,000/- to highly qualified superannuated professionals with exceptional contributions in their field, to motivate and inspire students and faculty at AICTE-approved institutes.",
  description:
    "AICTE - Distinguished Chair Professor Fellowship scheme by the All India Council for Technical Education, Ministry of Education. The fellowship intends to utilize the expertise of highly qualified and experienced superannuated professionals who have made unparalleled, exceptional professional contributions to society in their respective fields/disciplines for motivating and inspiring students/faculty of AICTE-approved institutes.\n\nThe proposals for the fellowship are by nomination only. Nominations with all necessary details can be sent throughout the year to: The Director (Faculty Development Cell), AICTE, Nelson Mandela Marg, Vasant Kunj, New Delhi-110070 (Director.fdc@aicte-india.org).",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Professional status",
      value:
        "The awardee must be a highly qualified superannuated Professional in his/her field",
      type: "other",
    },
    {
      label: "Expertise",
      value:
        "The awardee should be an acknowledged leader (expert) in that particular field of specialization having actively engaged in research and development",
      type: "other",
    },
    {
      label: "Societal contribution",
      value:
        "The awardee should have contributed to the development of society through his / her excellent fieldwork",
      type: "other",
    },
  ],
  benefits: [
    "An honorarium of ₹10,000/-",
    "Opportunity to motivate and inspire students and faculty at AICTE-approved institutes",
    "Platform to share expertise and contribute to technical education",
    "Recognition as a Distinguished Chair Professor by AICTE",
  ],
  requiredDocuments: [
    { name: "Letter of Acceptance", mandatory: true },
    { name: "Bank account details with IFSC code", mandatory: true },
    { name: "Detailed Curriculum Vitae (CV) / Biodata", mandatory: true },
    { name: "Proof of retirement / superannuation", mandatory: false, note: "Required if applicable" },
    { name: "Nomination letter / recommendation", mandatory: true },
    { name: "Proposed lecture / activity schedule", mandatory: true },
  ],
  officialPortalUrl: "https://www.aicte-india.org/",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["offline"],
  tags: [
    "AICTE",
    "fellowship",
    "distinguished chair professor",
    "superannuated",
    "research",
    "technical education",
    "nomination",
    "grant",
    "faculty development",
  ],
  faqs: [
    {
      q: "What is the AICTE Distinguished Chair Professor Fellowship?",
      a: "It is a fellowship by AICTE that utilizes the expertise of highly qualified superannuated professionals who have made exceptional contributions in their field to motivate and inspire students and faculty at AICTE-approved institutes. It provides an honorarium of ₹10,000/-.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Highly qualified superannuated professionals who are acknowledged leaders in their field, actively engaged in research and development, and have contributed to the development of society through excellent fieldwork.",
    },
    {
      q: "How much is the honorarium?",
      a: "The fellowship provides an honorarium of ₹10,000/-.",
    },
    {
      q: "How do I apply?",
      a: "Applications are by nomination only. Nominations with all necessary details can be sent throughout the year to: The Director (Faculty Development Cell), AICTE, Nelson Mandela Marg, Vasant Kunj, New Delhi-110070, or via email at Director.fdc@aicte-india.org.",
    },
    {
      q: "What documents are required?",
      a: "Letter of Acceptance, bank account details with IFSC code, detailed CV/Biodata, proof of retirement/superannuation (if required), nomination letter/recommendation, and proposed lecture/activity schedule.",
    },
  ],
  source: "sample",
};
