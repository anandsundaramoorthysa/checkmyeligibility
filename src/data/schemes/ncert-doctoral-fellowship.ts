import type { Scheme } from "@/lib/types";

export const ncertDoctoralFellowship: Scheme = {
  id: "ncert-doctoral-fellowship-mrdqlpxt",
  slug: "ncert-doctoral-fellowship-mrdqlpxt",
  name: "NCERT Doctoral Fellowship",
  shortName: "NCERT PhD Fellowship",
  summary:
    "Monthly stipend of up to ₹25,000 with an annual contingency grant of ₹10,000 for full-time PhD students conducting research in education and related disciplines at recognized Indian universities.",
  description:
    "The NCERT Doctoral Fellowship is a prestigious program that supports full-time PhD students conducting research in education and related disciplines. The fellowship aims to promote high-quality research in areas such as curriculum design, teaching-learning methodologies, educational psychology, and inclusive education at recognized Indian universities.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a permanent resident of India",
      type: "residence",
    },
    {
      label: "Academic qualification",
      value:
        "Must hold a Master's degree with a minimum of 60% marks at both undergraduate and postgraduate levels",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Maximum age limit is 35 years as of the application deadline",
      type: "age",
    },
    {
      label: "PhD enrollment",
      value:
        "Must be registered or in the process of registering for a regular, full-time PhD program",
      type: "education",
    },
    {
      label: "Research methodology course",
      value:
        "Must have completed or be enrolled in a UGC-approved Pre-doctoral Research Methodology course",
      type: "other",
    },
  ],
  benefits: [
    "₹25,000 per month stipend for NET-qualified candidates",
    "₹23,000 per month stipend for non-NET-qualified candidates",
    "Annual contingency grant of ₹10,000 for research activities",
  ],
  requiredDocuments: [
    { name: "Research Proposal", mandatory: true },
    { name: "PhD Registration Certificate", mandatory: true },
    { name: "Academic Transcripts", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Bank Account Details", mandatory: true },
    { name: "Category Certificate", mandatory: false, note: "If applicable" },
  ],
  officialPortalUrl: "https://ncert.nic.in/",
  ministry: "Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "NCERT",
    "doctoral fellowship",
    "PhD",
    "fellowship",
    "research",
    "education",
    "curriculum design",
    "educational psychology",
    "inclusive education",
    "stipend",
    "contingency grant",
    "central fellowship",
    "Ministry of Education",
  ],
  faqs: [
    {
      q: "Who is eligible for the NCERT Doctoral Fellowship?",
      a: "Permanent residents of India holding a Master's degree with a minimum of 60% marks at both undergraduate and postgraduate levels, not above 35 years of age as of the application deadline, and registered or in the process of registering for a regular, full-time PhD program at a recognized Indian university. Candidates must also have completed or be enrolled in a UGC-approved Pre-doctoral Research Methodology course.",
    },
    {
      q: "What is the fellowship amount?",
      a: "NET-qualified candidates receive ₹25,000 per month and non-NET-qualified candidates receive ₹23,000 per month. An annual contingency grant of ₹10,000 is also provided for research activities.",
    },
    {
      q: "What research areas are supported under the fellowship?",
      a: "Research in education and related disciplines such as curriculum design, teaching-learning methodologies, educational psychology, and inclusive education.",
    },
    {
      q: "How do I apply for the fellowship?",
      a: "Visit the NCERT fellowship notification page, read the eligibility conditions, prepare the research proposal and documents, complete the fellowship application, upload the required documents, and submit the application before the deadline. Applications undergo expert evaluation and selected candidates are notified, after which the fellowship is released as per NCERT rules.",
    },
    {
      q: "What documents are required for the application?",
      a: "Research proposal, PhD registration certificate, academic transcripts, Aadhaar card, photograph, bank account details, and category certificate (if applicable).",
    },
  ],
  source: "sample",
};
