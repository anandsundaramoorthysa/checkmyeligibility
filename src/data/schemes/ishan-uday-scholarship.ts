import type { Scheme } from "@/lib/types";

export const ishanUdayScholarship: Scheme = {
  id: "ishan-uday-scholarship",
  slug: "ishan-uday-scholarship-mrerl328",
  name: "Ishan Uday Special Scholarship Scheme for North Eastern Region",
  shortName: "Ishan Uday",
  summary:
    "\u20B95,400\u2013\u20B97,800 per month UGC scholarship for students from North Eastern states pursuing undergraduate education at recognised institutions outside the NE Region.",
  description:
    "The Ishan Uday Scholarship Scheme, launched by the University Grants Commission (UGC), provides financial support to students from North Eastern states pursuing undergraduate education at recognised colleges and universities outside the North Eastern Region. The scheme aims to bridge educational opportunities and encourage NE students to experience education in other parts of India. The scholarship amount ranges from \u20B95,400 to \u20B97,800 per month depending on the course, disbursed through the National Scholarship Portal (NSP) via Direct Benefit Transfer (DBT).",
  category: "scholarship",
  level: "central",
  states: [
    "all-india",
    "assam",
    "arunachal-pradesh",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "sikkim",
    "tripura",
  ],
  eligibility: [
    {
      label: "Residence",
      value:
        "Permanent resident (domicile) of one of the eight North Eastern states (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, or Tripura)",
      type: "residence",
    },
    {
      label: "Education level",
      value:
        "Enrolled in the first year of a full-time undergraduate course at a college or university outside the North Eastern Region",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Below \u20B94,50,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Admission mode",
      value:
        "Must have obtained admission on merit (not under management or NRI quota)",
      type: "other",
    },
  ],
  benefits: [
    "\u20B95,400\u2013\u20B97,800 per month depending on the course level",
    "Available for the full duration of the undergraduate programme",
    "Disbursed via Direct Benefit Transfer (DBT) through the National Scholarship Portal",
    "Encourages NE students to pursue education outside the North Eastern Region",
  ],
  requiredDocuments: [
    {
      name: "Domicile / nativity certificate from the North Eastern state",
      mandatory: true,
    },
    { name: "Family income certificate", mandatory: true },
    {
      name: "Proof of admission to first-year UG course",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    {
      name: "Bank account passbook",
      mandatory: true,
      note: "Showing account number and IFSC",
    },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Previous qualifying exam mark sheets (Class 12)",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "University Grants Commission (UGC) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Ishan Uday",
    "UGC",
    "North East",
    "northeast",
    "undergraduate",
    "UG",
    "NSP",
    "DBT",
    "merit",
    "Assam",
    "Arunachal Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Sikkim",
    "Tripura",
  ],
  faqs: [
    {
      q: "Who is eligible for the Ishan Uday Scholarship?",
      a: "Students who are permanent residents of one of the eight North Eastern states (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, or Tripura), enrolled in the first year of a full-time UG course at an institution outside the North Eastern Region, with family annual income below \u20B94.5 lakh.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "The scholarship provides \u20B95,400 to \u20B97,800 per month depending on the course, disbursed via DBT through the National Scholarship Portal.",
    },
    {
      q: "Can I apply if my college is in the North Eastern Region?",
      a: "No. The Ishan Uday Scholarship is specifically for students from NE states who pursue undergraduate education at institutions outside the North Eastern Region.",
    },
    {
      q: "Can I apply if I am already receiving another scholarship?",
      a: "Students should check the NSP guidelines. Generally, holding another scholarship may affect eligibility for Ishan Uday.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the National Scholarship Portal (scholarships.gov.in), register or log in, select 'Ishan Uday' from the UGC scholarship list, fill in your details, upload required documents, and submit before the deadline.",
    },
    {
      q: "Is renewal required each year?",
      a: "Yes. Students must submit a renewal application on the National Scholarship Portal each academic year along with updated documents and a passing certificate.",
    },
  ],
  source: "sample",
};
