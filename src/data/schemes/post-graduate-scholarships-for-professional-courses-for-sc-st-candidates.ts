import type { Scheme } from "@/lib/types";

export const postGraduateScholarshipsForProfessionalCoursesForScStCandidates: Scheme = {
  id: "post-graduate-scholarships-for-professional-courses-for-sc-st-candidates",
  slug: "post-graduate-scholarships-for-professional-courses-for-sc-st-candidates",
  name: "Post-Graduate Scholarships for Professional Courses for SC/ST Candidates",
  summary:
    "\u20B94,500 per month scholarship for 1,000 SC/ST students pursuing first-year postgraduate professional courses (Engineering, Management, Pharmacy, etc.) at recognised Indian institutions through UGC.",
  description:
    'The scheme "Post Graduate Scholarships for Professional Courses for SC/ST Candidates" has been initiated to provide opportunities to the deprived sections of the society, viz. the Scheduled Caste (SC) and Scheduled Tribe (ST) for undertaking postgraduate level studies in Professional subjects like Engineering & Technology, Management, Pharmacy etc. in recognized Indian Universities/Institutions/Colleges. Objective: The objective of the scheme is to provide financial assistance to 1000 SC/ST candidates to pursue postgraduate level studies in Professional courses.',
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to SC or ST category",
      type: "caste-category",
    },
    {
      label: "Academic qualification",
      value:
        "Must have obtained a Graduate degree in the relevant subject and secured admission at the Postgraduate level for a regular full-time course in a Professional subject",
      type: "education",
    },
    {
      label: "Year of study",
      value:
        "Must be pursuing the first year of a postgraduate course during the current academic year",
      type: "education",
    },
    {
      label: "Institution type",
      value:
        "Must be enrolled in a recognised University/Institution/College under section 2(f) & 12(B) of UGC Act, a Deemed University under Section 3 of UGC Act, a Central/State Government funded institution, or an Institute of National Importance",
      type: "education",
    },
  ],
  benefits: [
    "Scholarship of \u20B94,500 per month",
    "Financial assistance for the complete duration of the post-graduate course",
    "Disbursed through Direct Benefit Transfer (DBT) mode via PFMS",
  ],
  requiredDocuments: [
    { name: "Copy of Aadhaar Card", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Proof of age", mandatory: true },
    { name: "Mark Sheets / Grade Cards & Degrees", mandatory: true },
    { name: "Caste certificate (SC/ST)", mandatory: false },
    { name: "Disability certificate", mandatory: false, note: "If applicable" },
    { name: "Any other document, as required", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "University Grants Commission (UGC) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "postgraduate",
    "PG",
    "SC",
    "ST",
    "professional courses",
    "engineering",
    "management",
    "pharmacy",
    "UGC",
    "NSP",
    "DBT",
    "PFMS",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "Who is eligible for this scholarship?",
      a: "SC/ST category students who have obtained a Graduate degree and secured admission in the first year of a regular full-time Postgraduate professional course at a recognised Indian institution.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Selected candidates receive \u20B94,500 per month for the complete duration of the postgraduate course.",
    },
    {
      q: "How many scholarships are awarded each year?",
      a: "A total of 1,000 scholarships are awarded annually under this scheme.",
    },
    {
      q: "Which professional courses are covered?",
      a: "Professional subjects include Engineering & Technology, Management, Pharmacy, and other professional courses offered at recognised Indian universities and institutions.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Apply online on the National Scholarship Portal (scholarships.gov.in) after UGC publishes the annual advertisement. Register, fill the application form, submit documents, and get it verified by your host institution.",
    },
  ],
  source: "sample",
};
