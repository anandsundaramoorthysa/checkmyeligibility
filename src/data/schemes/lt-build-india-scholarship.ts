import type { Scheme } from "@/lib/types";

export const ltBuildIndiaScholarship: Scheme = {
  id: "lt-build-india-scholarship",
  slug: "lt-build-india-scholarship",
  name: "L&T Build India Scholarship",
  shortName: "L&T Build India",
  summary:
    "CSR scholarship from Larsen & Toubro providing up to ₹60,000/year for engineering or ₹40,000/year for MBA, for meritorious first-year students from economically weaker sections.",
  description:
    "The L&T Build India Scholarship is a Corporate Social Responsibility (CSR) initiative by Larsen & Toubro that supports meritorious students from economically weaker sections pursuing engineering or MBA programmes, with priority given to infrastructure-related branches such as civil, mechanical, and construction engineering.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Indian national",
      type: "other",
    },
    {
      label: "Course",
      value: "First year of B.E./B.Tech or MBA at a recognised institution",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Minimum 60% marks in the previous qualifying examination",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹6,00,000",
      type: "income",
    },
    {
      label: "Branch priority",
      value: "Priority given to civil, mechanical, or construction engineering branches",
      type: "other",
    },
  ],
  benefits: [
    "Up to ₹60,000 per year for engineering students",
    "Up to ₹40,000 per year for MBA/management students",
  ],
  requiredDocuments: [
    { name: "Previous year mark sheets", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Admission letter / bonafide certificate", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://www.buddy4study.com/page/lt-build-india-scholarship",
  ministry: "Larsen & Toubro (L&T) — Corporate Social Responsibility",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "L&T",
    "engineering",
    "MBA",
    "EWS",
    "merit",
    "civil engineering",
    "mechanical engineering",
    "buddy4study",
    "undergraduate",
  ],
  faqs: [
    {
      q: "Who can apply for the L&T Build India Scholarship?",
      a: "Indian nationals in their first year of B.E./B.Tech or MBA at a recognised institution, with at least 60% marks in their previous qualifying exam and family income not exceeding ₹6,00,000.",
    },
    {
      q: "How much does the scholarship provide?",
      a: "Up to ₹60,000 per year for engineering students and up to ₹40,000 per year for MBA students.",
    },
    {
      q: "Is any branch given priority?",
      a: "Yes, priority is given to civil, mechanical, or construction engineering branches, reflecting L&T's focus on infrastructure.",
    },
    {
      q: "How do I apply?",
      a: "Visit the L&T Build India Scholarship page on Buddy4Study, register or log in, complete the eligibility check, fill out the application form, upload the required documents, and submit before the deadline.",
    },
  ],
  source: "sample",
};
