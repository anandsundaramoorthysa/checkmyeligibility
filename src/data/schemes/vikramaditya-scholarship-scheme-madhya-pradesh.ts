import type { Scheme } from "@/lib/types";

export const vikramadityaScholarshipSchemeMadhyaPradesh: Scheme = {
  id: "vikramaditya-scholarship-scheme-madhya-pradesh",
  slug: "vikramaditya-scholarship-scheme-madhya-pradesh-y6fm0c5n",
  name: "Vikramaditya Scholarship Scheme \u2013 Madhya Pradesh",
  shortName: "MP Vikramaditya",
  summary:
    "Financial assistance of up to \u20B92,500 per year for meritorious BPL General Category students pursuing undergraduate education at government or government-aided colleges in Madhya Pradesh.",
  description:
    "The Vikramaditya Scholarship Scheme is a Madhya Pradesh government initiative providing financial assistance to meritorious students from Below Poverty Line (BPL) General Category families pursuing undergraduate education at government or government-aided colleges in MP. The scheme aims to support economically weaker students from the General (Open) category who achieve strong academic results, ensuring that financial constraints do not hinder their pursuit of higher education.",
  category: "scholarship",
  level: "state",
  states: ["madhya-pradesh"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a resident of Madhya Pradesh",
      type: "residence",
    },
    {
      label: "Category",
      value:
        "General (Open) category students only \u2014 SC/ST/OBC students are covered under other schemes",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value:
        "Family must be Below Poverty Line (BPL) with annual income \u2264 \u20B91,20,000 \u2014 valid BPL card required",
      type: "income",
    },
    {
      label: "Academic qualification",
      value: "Minimum 60% marks in Class 12",
      type: "education",
    },
    {
      label: "Institution",
      value:
        "Must be enrolled in an undergraduate programme at a government or government-aided college in Madhya Pradesh",
      type: "education",
    },
  ],
  benefits: [
    "Financial assistance of up to \u20B92,500 per year",
    "Covers tuition and academic expenses for the duration of the UG programme",
    "Disbursed directly to the student\u2019s bank account after institutional verification",
  ],
  requiredDocuments: [
    { name: "MP domicile certificate", mandatory: true },
    {
      name: "BPL card / income certificate (annual income \u2264 \u20B91,20,000)",
      mandatory: true,
    },
    {
      name: "Class 12 mark sheet (minimum 60%)",
      mandatory: true,
    },
    {
      name: "Caste certificate (General category proof)",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    { name: "Admission proof / bonafide certificate", mandatory: true },
    { name: "Bank passbook", mandatory: true },
  ],
  officialPortalUrl: "https://scholarshipportal.mp.nic.in/",
  ministry:
    "Department of Higher Education, Government of Madhya Pradesh",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Madhya Pradesh",
    "General category",
    "BPL",
    "merit",
    "undergraduate",
    "UG",
    "EWS",
    "income-based",
    "government college",
    "state scholarship",
  ],
  faqs: [
    {
      q: "Who is eligible for the Vikramaditya Scholarship?",
      a: "General (Open) category students from BPL families (annual income \u2264 \u20B91,20,000) who have scored at least 60% in Class 12 and are enrolled in an undergraduate programme at a government or government-aided college in Madhya Pradesh.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Eligible students receive up to \u20B92,500 per year for the duration of their undergraduate programme.",
    },
    {
      q: "Can SC/ST/OBC students apply?",
      a: "No. SC/ST/OBC students are covered under other dedicated scholarship schemes. This scheme is exclusively for General (Open) category BPL students.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the MP Scholarship Portal at scholarshipportal.mp.nic.in, register or log in with your Samagra ID, select the Vikramaditya Scholarship Scheme, fill in your details, upload the required documents, and submit before the deadline.",
    },
    {
      q: "How is the scholarship disbursed?",
      a: "After institutional verification, the scholarship amount is credited directly to the student\u2019s bank account.",
    },
  ],
  source: "sample",
};
