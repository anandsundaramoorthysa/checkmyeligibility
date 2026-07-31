import type { Scheme } from "@/lib/types";

export const pragatiScholarshipSchemeForGirlStudentsTechnicalDiploma: Scheme = {
  id: "pragati-scholarship-scheme-for-girl-students-technical-diploma",
  slug: "pragati-scholarship-scheme-for-girl-students-technical-diploma",
  name: "Pragati Scholarship Scheme For Girl Students (Technical Diploma)",
  shortName: "Pragati Diploma",
  summary:
    "₹50,000 per year (up to 3 years for 1st-year entry, 2 years for lateral entry) for girl students in AICTE-approved diploma programmes, for residents of specified Union Territories and North Eastern States.",
  description:
    "Administered by AICTE, Ministry of Education, this variant of the Pragati Scholarship supports girl students enrolled in the 1st or 2nd year of a diploma course at an AICTE-approved institution. It is restricted to residents of 13 specified Union Territories and North Eastern States: Andaman & Nicobar Islands, Jammu & Kashmir, Ladakh, Dadra & Nagar Haveli and Daman & Diu, Lakshadweep, Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura. The scholarship provides ₹50,000 per annum, disbursed via the National Scholarship Portal.",
  category: "scholarship",
  level: "central",
  states: ["assam", "jammu-and-kashmir", "ladakh", "meghalaya"],
  eligibility: [
    {
      label: "Gender",
      value: "Female students only",
      type: "gender",
    },
    {
      label: "Residence",
      value:
        "Resident of one of 13 specified Union Territories / North Eastern States: Andaman & Nicobar Islands, Jammu & Kashmir, Ladakh, Dadra & Nagar Haveli and Daman & Diu, Lakshadweep, Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura",
      type: "residence",
    },
    {
      label: "Course",
      value:
        "Enrolled in the 1st or 2nd year (lateral entry) of a diploma course at an AICTE-approved institution",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Not exceeding ₹8,00,000 per annum",
      type: "income",
    },
  ],
  benefits: [
    "₹50,000 per annum",
    "Payable for up to 3 years for 1st-year entry students",
    "Payable for up to 2 years for lateral-entry (2nd-year) students",
    "Disbursed via Direct Benefit Transfer through the National Scholarship Portal",
  ],
  requiredDocuments: [
    { name: "SSC / 10th certificate", mandatory: true },
    { name: "HSC / 12th certificate", mandatory: false, note: "As applicable" },
    { name: "ITI / Diploma certificate", mandatory: false, note: "Required for lateral entry" },
    { name: "Bank passbook", mandatory: true },
    { name: "Caste certificate", mandatory: false, note: "If applicable" },
    { name: "Aadhaar card", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Study / bonafide certificate", mandatory: true },
    { name: "Family income certificate", mandatory: true },
    { name: "Parental declaration", mandatory: true },
    { name: "Bank mandate form", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/Students",
  ministry: "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "pragati",
    "AICTE",
    "girl students",
    "women",
    "diploma",
    "technical",
    "lateral entry",
    "north east",
    "union territory",
    "NSP",
    "DBT",
    "DigiLocker",
    "PFMS",
  ],
  faqs: [
    {
      q: "Who is eligible for this Pragati diploma scholarship?",
      a: "Girl students in the 1st or 2nd year (lateral entry) of an AICTE-approved diploma course, resident in one of 13 specified Union Territories or North Eastern States, with family income not exceeding ₹8,00,000 per annum.",
    },
    {
      q: "How much does the scholarship provide?",
      a: "₹50,000 per year, for up to 3 years for 1st-year entrants or up to 2 years for lateral-entry students.",
    },
    {
      q: "How do I apply?",
      a: "Register on the National Scholarship Portal, complete the application form, upload documents via DigiLocker, and track disbursement through the PFMS portal.",
    },
  ],
  source: "sample",
};
