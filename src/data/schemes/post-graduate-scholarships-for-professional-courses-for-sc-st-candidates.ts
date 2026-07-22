import type { Scheme } from "@/lib/types";

export const postGraduateScholarshipsForProfessionalCoursesForScStCandidates: Scheme =
  {
    id: "pg-scholarship-professional-courses-sc-st",
    slug: "post-graduate-scholarships-for-professional-courses-for-sc-st-candidates-mra5j82f",
    name: "Post-Graduate Scholarships for Professional Courses for SC/ST Candidates",
    shortName: "PG Scholarship (SC/ST)",
    summary:
      "\u20B94,500 per month UGC/NSP scholarship for SC/ST candidates pursuing postgraduate professional courses (Engineering, Management, Pharmacy, etc.) at recognised institutions.",
    description:
      'The scheme "Post Graduate Scholarships for Professional Courses for SC/ST Candidates" has been initiated to provide opportunities to the deprived sections of the society, viz. the Scheduled Caste (SC) and Scheduled Tribe (ST) for undertaking postgraduate level studies in Professional subjects like Engineering & Technology, Management, Pharmacy etc. in recognized Indian Universities/Institutions/Colleges. The objective of the scheme is to provide financial assistance to 1000 SC/ST candidates to pursue postgraduate level studies in Professional courses. Scholarship is paid for the complete duration of the post-graduate course via Direct Benefit Transfer (DBT) through the National Scholarship Portal.',
    category: "social-welfare",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Category",
        value: "Must belong to Scheduled Caste (SC) or Scheduled Tribe (ST) category",
        type: "caste-category",
      },
      {
        label: "Education level",
        value:
          "Must have obtained a Graduate degree in the relevant subject and obtained admission at the Postgraduate level for regular full-time courses in any Professional subject",
        type: "education",
      },
      {
        label: "Year of study",
        value:
          "Only students pursuing the first year of a postgraduate course during the current academic year are eligible to apply",
        type: "education",
      },
      {
        label: "Institution type",
        value:
          "Must be studying at a recognised University/Institution/College included under section 2(f) & 12(B) of UGC Act, or a Deemed University under Section 3 of UGC Act, 1956, or a Central/State Government funded institution, or an Institute of National Importance",
        type: "other",
      },
    ],
    benefits: [
      "\u20B94,500 per month for the complete duration of the postgraduate course",
      "1000 SC/ST candidates supported annually",
      "Disbursed via Direct Benefit Transfer (DBT) through the National Scholarship Portal",
      "Covers professional courses including Engineering & Technology, Management, Pharmacy, and others",
    ],
    requiredDocuments: [
      { name: "Copy of Aadhaar Card", mandatory: true },
      { name: "Passport-size Photograph", mandatory: true },
      { name: "Proof of age", mandatory: true },
      { name: "Mark Sheets / Grade Cards & Degrees", mandatory: true },
      {
        name: "Caste certificate",
        mandatory: false,
        note: "If applicable",
      },
      {
        name: "Disability certificate",
        mandatory: false,
        note: "If applicable",
      },
      { name: "Any other document as required", mandatory: false },
    ],
    officialPortalUrl: "https://scholarships.gov.in/",
    ministry:
      "University Grants Commission (UGC) / Ministry of Social Justice and Empowerment",
    applicationMode: ["online"],
    tags: [
      "scholarship",
      "postgraduate",
      "PG",
      "SC",
      "ST",
      "Scheduled Caste",
      "Scheduled Tribe",
      "professional courses",
      "engineering",
      "management",
      "pharmacy",
      "UGC",
      "NSP",
      "DBT",
      "central",
      "social-welfare",
    ],
    faqs: [
      {
        q: "Who is eligible for the PG Scholarship for SC/ST Candidates?",
        a: "SC/ST students who have a Graduate degree in the relevant subject and have taken admission in the first year of a regular full-time postgraduate professional course at a recognised institution.",
      },
      {
        q: "How much is the scholarship amount?",
        a: "The scholarship provides \u20B94,500 per month for the complete duration of the postgraduate course, disbursed via DBT through the National Scholarship Portal.",
      },
      {
        q: "Can OBC students apply for this scholarship?",
        a: "No. This scholarship is exclusively for Scheduled Caste (SC) and Scheduled Tribe (ST) candidates.",
      },
      {
        q: "Can I apply if I am in the second year of my PG course?",
        a: "No. Only students pursuing the first year of a postgraduate course during the current academic year are eligible to apply.",
      },
      {
        q: "How do I apply?",
        a: "Visit the National Scholarship Portal (scholarships.gov.in), register as a new applicant, complete OTP verification, select the UGC scholarship, fill in the application form, upload required documents, and submit before the deadline.",
      },
      {
        q: "How is the scholarship paid?",
        a: "After selection, the awardees are paid via DBT mode. The list of awardees is pushed to the Public Financial Management System (PFMS) by NIC, and PFMS generates payment files for the complete duration of the PG course.",
      },
    ],
    source: "sample",
  };
