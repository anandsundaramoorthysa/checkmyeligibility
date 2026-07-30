import type { Scheme } from "@/lib/types";

export const postDoctoralFellowshipToWomenCandidates: Scheme = {
  id: "post-doctoral-fellowship-to-women-candidates",
  slug: "post-doctoral-fellowship-to-women-candidates",
  name: "Post Doctoral Fellowship To Women Candidates",
  shortName: "UGC PDFW",
  summary:
    "UGC fellowship of ₹38,800–₹46,500 per month for unemployed women PhD holders to pursue advanced post-doctoral research in Science, Engineering, Humanities, and Social Sciences at Indian universities for up to 5 years.",
  description:
    "The Post Doctoral Fellowship for Women, implemented by the University Grants Commission (UGC) under the Ministry of Education, provides financial assistance to unemployed women holding a Ph.D. degree to pursue advanced research in Science, Engineering & Technology, Humanities, and Social Sciences at eligible Indian universities, colleges, and institutions. The fellowship is awarded for a duration of five years with 100 fellowships available annually.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Employment status",
      value: "The candidate should be unemployed",
      type: "other",
    },
    {
      label: "Qualification",
      value: "Must have been awarded the Ph.D. degree (Provisional Certificate may be accepted in case the degree is not awarded)",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Should be 55 years of age as of the last date of submission. Age relaxation of 5 years for SC/ST/OBC/PWD",
      type: "age",
    },
    {
      label: "Academic marks (General)",
      value: "Minimum 55% marks at UG level and minimum 60% marks at PG level",
      type: "education",
    },
    {
      label: "Academic marks (Reserved)",
      value: "Minimum 50% marks at UG level and minimum 55% marks at PG level for SC/ST/OBC/PWD categories",
      type: "education",
    },
    {
      label: "NOC",
      value: "Must upload No Objection Certificate from the proposed research centre duly signed by the HOD and Registrar/Principal/Director",
      type: "other",
    },
    {
      label: "Gender",
      value: "Open to women candidates only. Transgender candidates are also eligible",
      type: "gender",
    },
  ],
  benefits: [
    "₹38,800 per month for fresh candidates (first 2 years)",
    "₹46,500 per month after two years",
    "Annual contingency of ₹50,000 for five years",
    "Escorts/Reader assistance of ₹2,000 per month for PWD candidates",
    "Fellowship duration of up to 5 years",
    "100 fellowships available annually",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Proof of Age", mandatory: true },
    { name: "UG/PG Mark Sheets and Degree Certificates", mandatory: true },
    { name: "Ph.D. Degree / Provisional Certificate", mandatory: true },
    { name: "Caste Certificate", mandatory: false },
    { name: "Disability Certificate", mandatory: false },
    { name: "Income Certificate", mandatory: false },
    { name: "Bank Account Details", mandatory: true },
    { name: "No Objection Certificate (NOC) / Undertaking", mandatory: true },
    { name: "Any other document specified during application", mandatory: false },
  ],
  officialPortalUrl: "https://www.ugc.gov.in/",
  ministry:
    "University Grants Commission (UGC) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "post-doctoral",
    "women",
    "PhD",
    "research",
    "UGC",
    "PDF",
    "science",
    "engineering",
    "humanities",
    "social sciences",
    "central",
    "all-india",
    "stipend",
    "contingency",
  ],
  faqs: [
    {
      q: "Who is eligible for the Post Doctoral Fellowship for Women?",
      a: "Unemployed women candidates who have been awarded a Ph.D. degree, are under 55 years of age, meet the minimum academic marks requirements (55% UG / 60% PG for General, 50% UG / 55% PG for reserved categories), and have a No Objection Certificate from the proposed research institution.",
    },
    {
      q: "What is the fellowship amount?",
      a: "Fresh candidates receive ₹38,800 per month, which increases to ₹46,500 per month after two years. An annual contingency of ₹50,000 is also provided for five years. PWD candidates receive an additional ₹2,000 per month as Escorts/Reader assistance.",
    },
    {
      q: "What is the duration of the fellowship?",
      a: "The fellowship is awarded for a duration of five years.",
    },
    {
      q: "How many fellowships are awarded annually?",
      a: "100 fellowships are available each year.",
    },
    {
      q: "How do I apply?",
      a: "Applications are invited online once a year through advertisements in leading newspapers and employment news. Short notifications are also uploaded on the UGC website (ugc.gov.in).",
    },
    {
      q: "What is the selection process?",
      a: "Online applications are scrutinized by a screening committee. Short-listed candidates are called to appear before a selection committee constituted by the Commission. No TA/DA is paid for appearing in the interview.",
    },
    {
      q: "How is the fellowship disbursed?",
      a: "The fellowship amount is disbursed through Canara Bank directly to the awardee's bank account. The awardee must submit a Continuation Certificate every three months, an annual Progress Report, and accounts of contingency grants as per UGC proformas.",
    },
  ],
  source: "sample",
};
