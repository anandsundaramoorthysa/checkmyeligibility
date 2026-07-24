import type { Scheme } from "@/lib/types";

export const gaonKiBetiYojanaMadhyaPradesh: Scheme = {
  id: "gaon-ki-beti-yojana-madhya-pradesh",
  slug: "gaon-ki-beti-yojana-madhya-pradesh-f3k8n2wp",
  name: "Gaon Ki Beti Yojana",
  shortName: "Gaon Ki Beti",
  summary:
    "Madhya Pradesh government scholarship providing ₹500 per month (₹5,000 per year) to meritorious girl students from rural areas who have secured 60% or more in Class 12 and are pursuing undergraduate studies.",
  description:
    "The Gaon Ki Beti Yojana (Daughter of the Village Scheme) is a Madhya Pradesh government initiative launched in 2005 to encourage higher education among talented girls from rural areas. Under this scheme, girl students who have passed Class 12 with 60% or more marks and are enrolled in undergraduate courses at government or private colleges/universities receive financial assistance of ₹500 per month for 10 academic months, totaling ₹5,000 per year. For students pursuing technical or medical education, the amount is ₹750 per month (₹7,500 per year). The scheme covers all categories (General, SC, ST, OBC, EWS) and is an incentive scheme, meaning beneficiaries can also avail other scholarships simultaneously.",
  category: "scholarship",
  level: "state",
  states: ["madhya-pradesh"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a resident of a rural area (village) in Madhya Pradesh — village domicile proof required",
      type: "residence",
    },
    {
      label: "Gender",
      value: "Female students only",
      type: "gender",
    },
    {
      label: "Academic qualification",
      value: "Must have secured 60% or more marks in Class 12 examination from a village school",
      type: "education",
    },
    {
      label: "Current enrolment",
      value: "Must be enrolled in an undergraduate degree programme at a recognized government or private college/university in Madhya Pradesh",
      type: "education",
    },
    {
      label: "Category",
      value: "Open to all categories — General, SC, ST, OBC, and EWS",
      type: "caste-category",
    },
    {
      label: "Residency",
      value: "Must possess a valid 'Gaon Ki Beti' certificate (village girl certificate) from the Gram Panchayat",
      type: "residence",
    },
  ],
  benefits: [
    "₹500 per month for 10 academic months (₹5,000 per year) for conventional courses (Arts, Science, Commerce)",
    "₹750 per month for 10 academic months (₹7,500 per year) for technical and medical education courses",
    "Disbursed directly to the student's bank account after institutional verification",
    "Incentive scheme — beneficiaries can also receive benefits from other scholarship schemes simultaneously",
    "Financial support covers the entire duration of the undergraduate programme",
  ],
  requiredDocuments: [
    { name: "Class 12 marksheet (showing 60%+ marks)", mandatory: true },
    { name: "Village domicile proof (signed by Gram Panchayat)", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Samagra ID", mandatory: true },
    { name: "Bank passbook (in student's name)", mandatory: true },
    { name: "Caste certificate (if applicable)", mandatory: false, note: "Required for SC/ST/OBC category verification" },
    { name: "Income certificate", mandatory: false },
    { name: "College admission proof / bonafide certificate", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://scholarshipportal.mp.nic.in/",
  ministry: "Department of Higher Education, Government of Madhya Pradesh",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Madhya Pradesh",
    "girl students",
    "women",
    "rural",
    "village",
    "Gaon Ki Beti",
    "undergraduate",
    "UG",
    "state scholarship",
    "merit",
    "class 12",
    "all categories",
    "incentive",
  ],
  faqs: [
    {
      q: "Who is eligible for the Gaon Ki Beti Yojana?",
      a: "Girl students who are residents of rural areas in Madhya Pradesh, have secured 60% or more marks in Class 12, and are enrolled in an undergraduate degree programme at a government or private college/university in MP. The scheme is open to all categories (General, SC, ST, OBC, EWS).",
    },
    {
      q: "How much scholarship is provided?",
      a: "For conventional courses (Arts, Science, Commerce), ₹500 per month for 10 academic months (₹5,000 per year). For technical and medical education, ₹750 per month for 10 academic months (₹7,500 per year).",
    },
    {
      q: "Is there an income limit for this scholarship?",
      a: "There is no income limit. The scheme is based on merit and rural residency, not family income.",
    },
    {
      q: "Can I receive this scholarship along with other scholarships?",
      a: "Yes. The Gaon Ki Beti Yojana is an incentive scheme, so beneficiaries can also receive benefits from other scholarship schemes simultaneously.",
    },
    {
      q: "How do I apply?",
      a: "Register on the MP State Scholarship Portal (scholarshipportal.mp.nic.in), fill out the application form, upload the required documents including your Class 12 marksheet and village domicile proof, and submit. Your college principal will verify and approve the application.",
    },
    {
      q: "What is the application timeline?",
      a: "Applications typically open in August and close by late October each year. The scholarship is renewed annually by submitting updated college bonafide and promotion proof.",
    },
  ],
  lastVerified: "2026-07-07",
  source: "sample",
};
