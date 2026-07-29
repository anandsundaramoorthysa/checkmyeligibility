import type { Scheme } from "@/lib/types";

export const postGraduateScholarshipForUniversityRankHolders: Scheme = {
  id: "post-graduate-scholarship-for-university-rank-holders",
  slug: "post-graduate-scholarship-for-university-rank-holders-5t7y1w3q",
  name: "Post Graduate Scholarship for University Rank Holders Scheme",
  shortName: "PG URH",
  summary:
    "A monthly scholarship of ₹3,100 for 1st and 2nd rank holders at the undergraduate level pursuing a regular full-time Master's degree in recognised institutions across India.",
  description:
    "The Post Graduate Scholarship for University Rank Holders is a merit-based scholarship scheme introduced by the University Grants Commission (UGC), Government of India. It aims to attract young and talented students to pursue postgraduate education by providing financial incentives to the First and Second rank holders at the undergraduate level. The scheme covers students from streams including Life Sciences, Physical Sciences, Chemical Sciences, Earth Sciences, Mathematical Sciences, Social Sciences, Commerce, and Languages who have secured admission in a regular full-time Master's degree programme in any recognised university or postgraduate college. A total of 3,000 slots are available per year. Professional courses are not covered under this scheme. The scholarship is tenable for the full duration of the PG course, typically two years.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic rank",
      value: "Must be the First or Second rank holder at the undergraduate level in a university",
      type: "education",
    },
    {
      label: "Minimum marks",
      value: "Must have secured at least 60% marks at the undergraduate level",
      type: "education",
    },
    {
      label: "Course admission",
      value: "Must have taken admission in a regular full-time Master's degree course in a recognised university or postgraduate college",
      type: "education",
    },
    {
      label: "First PG degree",
      value: "The scholarship is available only for the first PG degree",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Must not exceed 30 years of age at the time of admission to the PG course",
      type: "age",
    },
    {
      label: "Subject streams",
      value: "Open to students from Life Sciences, Physical Sciences, Chemical Sciences, Earth Sciences, Mathematical Sciences, Social Sciences, Commerce, and Languages",
      type: "education",
    },
  ],
  benefits: [
    "Scholarship of ₹3,100 per month for a period of 2 years (10 months per year)",
    "Covers the full duration of the postgraduate course",
    "Opportunity to pursue PG in any specialisation at any recognised institution in India",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Undergraduate mark sheets and degree certificate", mandatory: true },
    { name: "University rank certificate", mandatory: true },
    { name: "PG admission proof", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Income certificate", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "University Grants Commission (UGC), Department of Higher Education",
  applicationMode: ["online"],
  tags: [
    "UGC",
    "postgraduate",
    "merit scholarship",
    "university rank holders",
    "first rank",
    "second rank",
    "PG",
    "master degree",
    "central scheme",
    "all-india",
  ],
  faqs: [
    {
      q: "Who is eligible for this scholarship?",
      a: "First and Second rank holders at the undergraduate level who have secured at least 60% marks and have taken admission in a regular full-time Master's degree programme in a recognised institution. The candidate must be below 30 years of age.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Selected students receive ₹3,100 per month for two years (10 months per year), covering the full duration of the PG course.",
    },
    {
      q: "How many slots are available?",
      a: "A total of 3,000 slots are available per year under this scheme.",
    },
    {
      q: "Which subject streams are covered?",
      a: "Life Sciences, Physical Sciences, Chemical Sciences, Earth Sciences, Mathematical Sciences, Social Sciences, Commerce, and Languages. Professional courses are not covered.",
    },
    {
      q: "Can I apply if I am pursuing PG through distance mode?",
      a: "No. The scheme is applicable only for students who have taken admission in a regular, full-time Master's degree course.",
    },
  ],
  source: "sample",
};
