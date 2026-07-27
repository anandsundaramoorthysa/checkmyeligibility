import type { Scheme } from "@/lib/types";

export const anrfNationalPostdoctoralFellowship: Scheme = {
  id: "anrf-national-postdoctoral-fellowship",
  slug: "anrf-national-postdoctoral-fellowship-k7m2vx9p",
  name: "ANRF National Postdoctoral Fellowship (N-PDF)",
  shortName: "ANRF N-PDF",
  summary:
    "₹60,000/month (JRF) or ₹65,000/month (SRF) for postdoctoral researchers in science and engineering, for up to 2 years.",
  description:
    "The ANRF National Postdoctoral Fellowship (N-PDF), formerly SERB N-PDF, is designed to identify and support promising young researchers for conducting postdoctoral research in frontier areas of science and engineering at Indian academic institutions and R&D laboratories. The fellowship provides a monthly stipend of ₹60,000 (JRF level) or ₹65,000 (SRF level) along with a contingent grant of ₹3,00,000 per annum for a period of up to 2 years. Fellows work under the guidance of a host mentor at a host institution. The scheme aims to provide research opportunities to young PhD holders and help them develop as independent researchers.",
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
      value: "Must hold a Ph.D. degree in Science or Engineering from a recognized university or institution",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum 36 years of age as on the date of application (age relaxation for reserved categories as per Government norms)",
      type: "age",
    },
    {
      label: "Host mentor",
      value: "Must have a confirmed host mentor and host institution willing to supervise the research",
      type: "other",
    },
    {
      label: "Employment status",
      value: "Must not be employed or hold any regular position at the time of application",
      type: "other",
    },
  ],
  benefits: [
    "Monthly stipend of ₹60,000 (JRF level) or ₹65,000 (SRF level)",
    "Contingent grant of ₹3,00,000 per annum for research-related expenses",
    "Fellowship duration of up to 2 years",
    "Opportunity to work under experienced mentors at reputed institutions",
    "Research opportunities in frontier areas of science and engineering",
  ],
  requiredDocuments: [
    { name: "Ph.D. degree certificate", mandatory: true },
    { name: "Detailed research proposal", mandatory: true },
    { name: "CV of the applicant", mandatory: true },
    { name: "Host mentor's CV and consent letter", mandatory: true },
    { name: "Age proof", mandatory: true },
    { name: "Category certificate (if applicable)", mandatory: false },
    { name: "Experience certificates", mandatory: false },
  ],
  officialPortalUrl: "https://www.anrf.gov.in/fellowships-grants/national-postdoctoral-fellowship",
  ministry: "Department of Science and Technology (ANRF)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "postdoctoral",
    "science",
    "engineering",
    "research",
    "ANRF",
    "SERB",
    "N-PDF",
    "central",
    "all India",
    "PhD",
    "stipend",
  ],
  faqs: [
    {
      q: "What is the monthly stipend for ANRF N-PDF?",
      a: "₹60,000 per month at JRF level and ₹65,000 per month at SRF level, along with a contingency grant of ₹3,00,000 per annum.",
    },
    {
      q: "What is the maximum age for applying?",
      a: "The maximum age is 36 years as on the date of application, with relaxation for reserved categories as per Government of India norms.",
    },
    {
      q: "Can foreign nationals apply?",
      a: "No, only Indian citizens are eligible to apply for the ANRF N-PDF.",
    },
    {
      q: "How long is the fellowship?",
      a: "The fellowship is awarded for a period of up to 2 years.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
