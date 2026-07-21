import type { Scheme } from "@/lib/types";

export const visvesvarayaPhdSchemeForElectronicsIt: Scheme = {
  id: "visvesvaraya-phd-scheme-for-electronics-it",
  slug: "visvesvaraya-phd-scheme-for-electronics-it-mrdwc5u8",
  name: "Visvesvaraya PhD Scheme for Electronics & IT",
  shortName: "MeitY PhD Scheme",
  summary:
    "MeitY-funded PhD fellowship providing \u20B938,750/month (years 1\u20132) and \u20B943,750/month (years 3\u20135) to increase the number of PhDs in Electronics System Design & Manufacturing (ESDM) and IT/ITES sectors.",
  description:
    "The Visvesvaraya PhD Scheme for Electronics & IT is a MeitY initiative (Cabinet-approved 2014, Phase-II approved 2021) to increase the number of PhDs in Electronics System Design & Manufacturing (ESDM) and IT/ITES sectors. Implemented through 97+ supported institutions and managed by the Digital India Corporation (DIC), the scheme provides comprehensive fellowship support to full-time PhD scholars in these critical technology domains.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Programme",
      value: "Must be admitted to a PhD programme at a MeitY-supported institution",
      type: "education",
    },
    {
      label: "Academic qualification",
      value:
        "M.E./M.Tech./M.S. with minimum 6.5/10 CGPA or 60% marks (55% for SC/ST), or B.E./B.Tech. with valid GATE score",
      type: "education",
    },
    {
      label: "Institution",
      value: "Must be enrolled at one of the 97+ MeitY-supported institutions",
      type: "education",
    },
    {
      label: "International students",
      value: "Up to 10% non-Indian students permitted per institution",
      type: "other",
    },
  ],
  benefits: [
    "Monthly stipend of \u20B938,750 for years 1\u20132",
    "Monthly stipend of \u20B943,750 for years 3\u20135",
    "Research contingency grant",
    "Support for conference attendance and publication",
  ],
  requiredDocuments: [
    { name: "UG/PG degree certificates and marksheets", mandatory: true },
    { name: "Research proposal / SOP", mandatory: true },
    { name: "Entrance exam scorecard (GATE/NET)", mandatory: true },
    {
      name: "NOC for part-time candidates",
      mandatory: false,
      note: "Required for part-time applicants only",
    },
  ],
  officialPortalUrl: "https://phd.dic.gov.in/",
  ministry: "Ministry of Electronics and Information Technology (MeitY)",
  applicationMode: ["offline"],
  tags: [
    "fellowship",
    "PhD",
    "research",
    "MeitY",
    "DIC",
    "electronics",
    "IT",
    "ESDM",
    "Visvesvaraya",
    "all-india",
    "central",
    "GATE",
    "engineering",
  ],
  faqs: [
    {
      q: "Who is eligible for the Visvesvaraya PhD Scheme?",
      a: "Students admitted to a PhD programme at a MeitY-supported institution with M.E./M.Tech./M.S. (min 6.5 CGPA or 60%, 55% for SC/ST) or B.E./B.Tech. with valid GATE score.",
    },
    {
      q: "How much is the fellowship amount?",
      a: "\u20B938,750 per month for years 1\u20132 and \u20B943,750 per month for years 3\u20135.",
    },
    {
      q: "Do I apply directly to MeitY?",
      a: "No. Apply directly to a participating institution's regular PhD admission process. Once admitted, the institution nominates the candidate under the scheme.",
    },
    {
      q: "Which institutions are supported?",
      a: "The scheme is implemented through 97+ MeitY-supported institutions across India. Check the official portal for the complete list.",
    },
  ],
  source: "sample",
};
