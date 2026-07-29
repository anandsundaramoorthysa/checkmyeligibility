import type { Scheme } from "@/lib/types";

export const anrfPmEcrgEarlyCareerResearchGrant: Scheme = {
  id: "anrf-pm-ecrg-early-career-research-grant",
  slug: "anrf-pm-ecrg-early-career-research-grant-j6m3vx8q",
  name: "ANRF PM Early Career Research Grant (PM ECRG)",
  shortName: "ANRF PM ECRG",
  summary:
    "₹60 lakh over 3 years for early-career researchers with a Ph.D., for undertaking independent research in science and engineering. Around 700 grants awarded annually.",
  description:
    "The ANRF PM Early Career Research Grant (PM ECRG), earlier known as SERB PM ECRG, is a prestigious research funding scheme that provides ₹60 lakh over 3 years to young, independent researchers who have recently completed their Ph.D. The scheme aims to encourage outstanding researchers in the early stages of their career to pursue promising and innovative research in science and engineering. Approximately 700 grants are awarded annually across Indian academic institutions and research laboratories. The grant covers research manpower, consumables, travel, and equipment costs.",
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
      value: "Maximum 42 years of age as on the date of application (age relaxation for reserved categories as per Government norms)",
      type: "age",
    },
    {
      label: "Employment",
      value: "Must be a regular faculty member or researcher at an Indian academic institution, university, or R&D laboratory",
      type: "occupation",
    },
    {
      label: "Ph.D. recency",
      value: "Ph.D. should have been awarded within the last 5 years at the time of application",
      type: "education",
    },
  ],
  benefits: [
    "Total research grant of ₹60,00,000 (₹60 lakh) over 3 years",
    "Covers research manpower (JRFs, SRFs, research associates)",
    "Funds for consumables, chemicals, and lab supplies",
    "Travel support for domestic and international conferences",
    "Equipment purchase (within approved budget)",
    "Institutional overhead charges",
  ],
  requiredDocuments: [
    { name: "Ph.D. degree certificate", mandatory: true },
    { name: "Detailed research proposal (3–5 pages)", mandatory: true },
    { name: "CV of the applicant (with list of publications)", mandatory: true },
    { name: "Age proof", mandatory: true },
    { name: "Endorsement letter from the Head of Institution", mandatory: true },
    { name: "Category certificate (if applicable)", mandatory: false },
    { name: "List of ongoing projects (if any)", mandatory: false },
  ],
  officialPortalUrl: "https://www.anrf.gov.in/fellowships-grants/pm-early-career-research-grant",
  ministry: "Department of Science and Technology (ANRF)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "research grant",
    "early career",
    "science",
    "engineering",
    "ANRF",
    "SERB",
    "PM ECRG",
    "central",
    "all India",
    "PhD",
    "₹60 lakh",
  ],
  faqs: [
    {
      q: "What is the total grant amount under PM ECRG?",
      a: "The total grant is ₹60 lakh, disbursed over a period of 3 years, covering manpower, consumables, travel, and equipment.",
    },
    {
      q: "What is the maximum age for applying?",
      a: "The maximum age is 42 years as on the date of application, with relaxation for reserved categories as per Government of India norms.",
    },
    {
      q: "Can researchers at private institutions apply?",
      a: "Yes, regular faculty members and researchers at recognised Indian academic institutions, universities, and R&D laboratories (including private institutions) are eligible.",
    },
    {
      q: "How many grants are awarded each year?",
      a: "Approximately 700 PM ECRG grants are awarded annually.",
    },
    {
      q: "Is this grant for postdoctoral researchers or faculty?",
      a: "This grant is primarily for young faculty members and independent researchers who have completed their Ph.D. within the last 5 years.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
