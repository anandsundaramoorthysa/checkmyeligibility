import type { Scheme } from "@/lib/types";

export const drDSKothariPostdoctoralFellowship: Scheme = {
  id: "dr-d-s-kothari-postdoctoral-fellowship",
  slug: "dr-d-s-kothari-postdoctoral-fellowship",
  name: "Dr. D.S. Kothari Postdoctoral Fellowship",
  shortName: "DSKPDF",
  summary:
    "UGC-funded postdoctoral fellowship offering ₹43,400–₹46,500 per month plus an annual ₹1,00,000 contingency grant to PhD graduates in Sciences, Engineering, and Medicine.",
  description:
    "The Dr. D.S. Kothari Postdoctoral Fellowship is a UGC-funded programme for PhD graduates in the Sciences, Engineering, and Medicine, supporting independent research under the guidance of a mentor at a recognised institution.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Qualification",
      value: "Must hold a PhD degree",
      type: "education",
    },
    {
      label: "Age",
      value: "Preferably below 35 years (relaxations for women, SC/ST, OBC, and persons with disabilities)",
      type: "age",
    },
    {
      label: "Employment status",
      value: "Must be currently unemployed",
      type: "occupation",
    },
    {
      label: "Research proposal",
      value: "Requires a research proposal and a mentor willing to host the fellow",
      type: "other",
    },
  ],
  benefits: [
    "₹43,400 per month in the first year",
    "₹46,500 per month in the second and third years",
    "Annual contingency grant of ₹1,00,000",
  ],
  requiredDocuments: [
    { name: "PhD thesis summary", mandatory: true },
    { name: "Postdoctoral research proposal", mandatory: true },
    { name: "Mentor's CV and consent letter", mandatory: true },
    { name: "PhD degree certificate", mandatory: true },
    { name: "Age proof", mandatory: true },
    { name: "Academic transcripts", mandatory: true },
  ],
  officialPortalUrl: "https://dskpdf.unipune.ac.in/",
  ministry: "University Grants Commission (UGC)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "postdoctoral",
    "phd",
    "research",
    "UGC",
    "science",
    "engineering",
    "medicine",
    "SC",
    "ST",
    "OBC",
    "EWS",
  ],
  faqs: [
    {
      q: "Who is eligible for the Dr. D.S. Kothari Postdoctoral Fellowship?",
      a: "PhD graduates in Sciences, Engineering, or Medicine, preferably under 35 years old (with relaxations for women, SC/ST, OBC, and PwD candidates), who are currently unemployed and have a research proposal and mentor.",
    },
    {
      q: "How much does the fellowship pay?",
      a: "₹43,400 per month in the first year, ₹46,500 per month in the second and third years, plus an annual contingency grant of ₹1,00,000.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the DSKPDF portal (dskpdf.unipune.ac.in), submitting your thesis summary, research proposal, mentor's consent, and supporting documents. Applications are screened by a selection committee.",
    },
  ],
  source: "sample",
};
