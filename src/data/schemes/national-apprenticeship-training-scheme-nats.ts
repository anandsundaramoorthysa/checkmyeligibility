import type { Scheme } from "@/lib/types";

export const nationalApprenticeshipTrainingSchemeNats: Scheme = {
  id: "national-apprenticeship-training-scheme-nats",
  slug: "national-apprenticeship-training-scheme-nats",
  name: "National Apprenticeship Training Scheme (NATS)",
  shortName: "NATS",
  summary:
    "One-year structured on-the-job industry training with monthly stipend of ₹4,800–₹6,150 for graduates, diploma holders, and vocational pass-outs.",
  description:
    "Flagship apprenticeship programme (started 1973) under the Apprentices Act 1961, run by the Ministry of Education (Department of Higher Education) via four Regional Boards of Apprenticeship Training in Mumbai, Chennai, Kanpur, and Kolkata. It gives graduates and diploma holders one year of structured on-the-job industry training with a monthly stipend paid through DBT.",
  category: "skill-development",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Qualification",
      value: "Graduate engineers (B.E./B.Tech.), diploma holders, 10+2 vocational pass-outs, eligible general-stream graduates (B.A./B.Sc./B.Com.), and sandwich-course students",
      type: "education",
    },
    {
      label: "Bank account",
      value: "Must have an Aadhaar-linked bank account for DBT stipend transfer",
      type: "other",
    },
    {
      label: "APAAR ID",
      value: "APAAR ID (Academic Bank of Credits ID) mandatory for registrations from 2024 onwards",
      type: "other",
    },
  ],
  benefits: [
    "Monthly stipend of ₹6,150 for graduate engineers (B.E./B.Tech.)",
    "Monthly stipend of ₹5,450 for diploma technicians",
    "Monthly stipend of ₹4,800 for vocational pass-outs",
    "One year of structured on-the-job industry training",
    "Stipend disbursed directly via DBT (Direct Benefit Transfer)",
  ],
  requiredDocuments: [
    { name: "Degree or diploma certificate and all semester/year mark sheets", mandatory: true },
    { name: "Class 10 and Class 12 mark sheets", mandatory: true },
    { name: "Aadhaar card (mandatory for DBT stipend transfer)", mandatory: true },
    { name: "APAAR ID (Academic Bank of Credits ID)", mandatory: true },
    { name: "Bank account passbook in your own name (savings account with IFSC code)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Date of birth proof (Class 10 certificate)", mandatory: true },
    { name: "Caste/category certificate (if applicable for reserved category establishments)", mandatory: false },
  ],
  officialPortalUrl: "https://nats.education.gov.in",
  ministry: "Department of Higher Education, Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "NATS",
    "apprenticeship",
    "training",
    "on-the-job",
    "graduate",
    "diploma",
    "vocational",
    "stipend",
    "DBT",
    "skill development",
    "central",
    "all-india",
    "Apprentices Act",
  ],
  faqs: [
    {
      q: "What is NATS?",
      a: "The National Apprenticeship Training Scheme provides one-year structured on-the-job industry training to graduates, diploma holders, and vocational pass-outs with a monthly stipend of ₹4,800–₹6,150.",
    },
    {
      q: "Who is eligible?",
      a: "Graduate engineers (B.E./B.Tech.), diploma holders, 10+2 vocational pass-outs, and general-stream graduates (B.A./B.Sc./B.Com.) with an Aadhaar-linked bank account and APAAR ID.",
    },
    {
      q: "What is the stipend amount?",
      a: "₹6,150 per month for graduates, ₹5,450 per month for diploma technicians, and ₹4,800 per month for vocational pass-outs.",
    },
    {
      q: "How do I apply?",
      a: "Register on the NATS 2.0 portal at nats.education.gov.in, apply to establishments, accept the contract initiated by the establishment, and training begins after BOAT/BoPT confirmation.",
    },
    {
      q: "Is APAAR ID mandatory?",
      a: "Yes, APAAR ID (Academic Bank of Credits ID) is mandatory for registrations from 2024 onwards.",
    },
    {
      q: "How is the stipend paid?",
      a: "The stipend is disbursed directly to the apprentice's Aadhaar-linked bank account through DBT (Direct Benefit Transfer).",
    },
  ],
  source: "sample",
};
