import type { Scheme } from "@/lib/types";

export const gpatScholarship: Scheme = {
  id: "gpat-scholarship",
  slug: "gpat-scholarship-n4m7vk2x",
  name: "GPAT Scholarship — Graduate Pharmacy Aptitude Test",
  shortName: "GPAT Scholarship",
  summary:
    "₹30,890 per month for GPAT-qualified M.Pharm students, plus 15% weightage in PSU recruitment for GPAT-qualified candidates.",
  description:
    "The GPAT (Graduate Pharmacy Aptitude Test) is a national-level entrance examination conducted by the National Testing Agency (NTA) for admission to M.Pharm and related postgraduate pharmacy programmes. GPAT-qualified candidates are eligible for a monthly scholarship of ₹30,890 (equivalent to JRF-NET scholarship rates) during their M.Pharm programme. Additionally, GPAT-qualified candidates receive 15% weightage in recruitment by Public Sector Undertakings (PSUs) in the pharmacy sector. The scholarship is funded by the All India Council for Technical Education (AICTE) and provides financial support to pharmacy students pursuing postgraduate education.",
  category: "scholarship",
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
      value: "Must hold a B.Pharm degree from a recognised university and have qualified the GPAT examination",
      type: "education",
    },
    {
      label: "Admission",
      value: "Must be admitted to a full-time M.Pharm programme at an AICTE-approved institution",
      type: "education",
    },
    {
      label: "Age limit",
      value: "No upper age limit for the scholarship, but age limits may apply for PSU recruitment",
      type: "age",
    },
  ],
  benefits: [
    "Monthly scholarship of ₹30,890 for the duration of the M.Pharm programme",
    "15% weightage in PSU recruitment for GPAT-qualified candidates",
    "Eligibility for admission to premier M.Pharm programmes across India",
    "Contingency grant and other admissible allowances as per AICTE norms",
    "Opportunity for research funding and fellowships during M.Pharm",
  ],
  requiredDocuments: [
    { name: "GPAT scorecard", mandatory: true },
    { name: "B.Pharm degree certificate / provisional certificate", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bank passbook (account number and IFSC)", mandatory: true },
    { name: "M.Pharm admission letter", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Category certificate (if applicable)", mandatory: false },
  ],
  officialPortalUrl: "https://gp.nta.ac.in",
  ministry: "Ministry of Education / AICTE",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "pharmacy",
    "GPAT",
    "M.Pharm",
    "NTA",
    "AICTE",
    "central",
    "all India",
    "merit-based",
    "PSU recruitment",
    "postgraduate",
  ],
  faqs: [
    {
      q: "How much scholarship do I get after qualifying GPAT?",
      a: "GPAT-qualified students receive a monthly scholarship of ₹30,890 during their M.Pharm programme, equivalent to JRF-NET scholarship rates.",
    },
    {
      q: "What is the benefit for PSU recruitment?",
      a: "GPAT-qualified candidates receive 15% weightage in recruitment by Public Sector Undertakings (PSUs) in the pharmacy sector.",
    },
    {
      q: "Is there an age limit for GPAT scholarship?",
      a: "There is no upper age limit for the scholarship itself, but individual PSUs may have their own age limits for recruitment.",
    },
    {
      q: "Can I apply if I am already doing M.Pharm?",
      a: "Students admitted to M.Pharm programmes in the current academic year can apply if they have a valid GPAT score.",
    },
    {
      q: "Who conducts the GPAT exam?",
      a: "The GPAT exam is conducted by the National Testing Agency (NTA) on behalf of the Ministry of Education / AICTE.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
