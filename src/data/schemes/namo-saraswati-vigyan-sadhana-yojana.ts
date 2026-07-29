import type { Scheme } from "@/lib/types";

export const namoSaraswatiVigyanSadhanaYojana: Scheme = {
  id: "namo-saraswati-vigyan-sadhana-yojana",
  slug: "namo-saraswati-vigyan-sadhana-yojana-289",
  name: "Namo Saraswati Vigyan Sadhana Yojana #289",
  shortName: "Namo Saraswati Yojana",
  summary:
    "Gujarat Government scholarship of ₹25,000 over two years for Class 11 and 12 science stream students, providing ₹1,000/month for 10 months each year plus ₹5,000 bonus on passing the Class 12 board exam.",
  description:
    "The Namo Saraswati Vigyan Sadhana Yojana is a flagship scholarship scheme launched by the Government of Gujarat in the 2024-25 state budget to encourage students to pursue science stream education in higher secondary classes. The scheme aims to increase annual science enrolment from 2 lakh to 5 lakh students over the next five years by providing direct financial assistance to eligible students in Classes 11 and 12.\n\nUnder this scheme, students receive ₹10,000 per year in Class 11 and ₹15,000 per year in Class 12, totalling ₹25,000 over two years. The scholarship is disbursed at ₹1,000 per month for 10 months each year, with the remaining ₹5,000 provided after the student successfully passes the Class 12 board examination. The amount is transferred via Direct Benefit Transfer (DBT) directly into the bank account of the student's mother, or the student's own account if the mother is deceased.\n\nThe scheme covers students enrolled in government, grant-in-aid, and self-financed schools recognised by the Gujarat Secondary and Higher Secondary Education Board (GSHSEB) or the Central Board of Secondary Education (CBSE) within Gujarat. Students from government and grant-in-aid schools are eligible irrespective of family income, while students from private/self-financed schools must have a family annual income of ₹6 lakh or less. Importantly, students already receiving other government scholarships (such as Namo Lakshmi, Gyan Setu, or Gyan Sadhana) are eligible for this scheme as an additional benefit.",
  category: "scholarship",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Class & stream",
      value:
        "Must be enrolled in Class 11 or Class 12 in the Science stream (Physics, Chemistry, Mathematics/Biology)",
      type: "education",
    },
    {
      label: "Class 10 performance",
      value:
        "Must have secured 50% or more marks in the Class 10 board examination",
      type: "education",
    },
    {
      label: "School type — government/grant-in-aid",
      value:
        "Students who studied in Classes 9 and 10 in government or grant-in-aid secondary schools in Gujarat are eligible irrespective of family income",
      type: "other",
    },
    {
      label: "School type — self-financed/private",
      value:
        "Students who studied in one or both of Classes 9 and 10 in recognised self-financed (private) secondary schools must have an annual family income of ₹6,00,000 or less",
      type: "income",
    },
    {
      label: "Institution recognition",
      value:
        "Must be enrolled in a school recognised by the Gujarat Secondary and Higher Secondary Education Board (GSHSEB) or the Central Board of Secondary Education (CBSE) within Gujarat",
      type: "education",
    },
    {
      label: "Residency",
      value: "Must be a resident of Gujarat",
      type: "residence",
    },
    {
      label: "Other scholarships",
      value:
        "Students already receiving other government scholarships (Namo Lakshmi, Gyan Setu, Gyan Sadhana, etc.) are still eligible to receive this scheme as an additional benefit",
      type: "other",
    },
  ],
  benefits: [
    "₹10,000 per year in Class 11 (₹1,000/month for 10 months)",
    "₹15,000 per year in Class 12 (₹1,000/month for 10 months + ₹5,000 after passing board exam)",
    "Total scholarship of ₹25,000 over two years",
    "Disbursed via Direct Benefit Transfer (DBT) to the student's mother's bank account or student's own account",
    "Can be availed alongside other government scholarship schemes as an additional benefit",
    "Available for both boys and girls studying science",
    "Budget allocation of ₹250 crore by the Gujarat Government",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true, note: "Student's Aadhaar linked to bank account" },
    { name: "Class 10 Marksheet", mandatory: true, note: "Showing 50% or more marks" },
    { name: "Domicile / Residence Proof of Gujarat", mandatory: true },
    { name: "School Bonafide Certificate (Class 11/12 Science Stream)", mandatory: true },
    { name: "Bank Account Details", mandatory: true, note: "Student's mother's account (or student's own account if mother is deceased); must be Aadhaar-seeded" },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Parent's Aadhaar Card", mandatory: true },
    { name: "Income Certificate", mandatory: false, note: "Required only for students from self-financed/private schools (family income ≤ ₹6 lakh)" },
    { name: "Caste Certificate", mandatory: false, note: "If applicable" },
  ],
  officialPortalUrl: "https://www.shalasurvey.in/",
  ministry:
    "Education Department, Government of Gujarat",
  applicationMode: ["online"],
  tags: [
    "Gujarat",
    "scholarship",
    "science",
    "STEM",
    "Class 11",
    "Class 12",
    "higher secondary",
    "Namo Saraswati",
    "state scholarship",
    "GSHSEB",
    "CBSE",
    "DBT",
    "education",
    "government school",
    "grant-in-aid",
  ],
  faqs: [
    {
      q: "What is the Namo Saraswati Vigyan Sadhana Yojana?",
      a: "It is a scholarship scheme by the Gujarat Government launched in the 2024-25 budget to encourage students to pursue science stream in Class 11 and 12. It provides ₹25,000 over two years — ₹10,000 in Class 11 and ₹15,000 in Class 12.",
    },
    {
      q: "Who is eligible for this scholarship?",
      a: "Students who have scored 50% or more in Class 10 board exams and are enrolled in science stream in Class 11 or 12 at a GSHSEB or CBSE-recognised school in Gujarat. Government/grant-in-aid school students are eligible irrespective of income; private school students must have family income ≤ ₹6 lakh.",
    },
    {
      q: "How is the scholarship amount paid?",
      a: "₹1,000 per month for 10 months each year (₹10,000 for Class 11 and ₹10,000 for Class 12) is disbursed via DBT. The remaining ₹5,000 is paid after the student passes the Class 12 board examination.",
    },
    {
      q: "Can I receive this scholarship along with Namo Lakshmi or other scholarships?",
      a: "Yes. Students already receiving other government scholarships such as Namo Lakshmi, Gyan Setu, or Gyan Sadhana are eligible for the Namo Saraswati scheme as an additional benefit.",
    },
    {
      q: "Do private school students need to meet an income requirement?",
      a: "Yes. Students from self-financed (private) schools must have an annual family income of ₹6 lakh or less. Government and grant-in-aid school students are eligible regardless of income.",
    },
    {
      q: "How do I apply?",
      a: "Schools compile eligible student data and upload it to the education department portal via the Child Tracking System (CTS). Students submit their Aadhaar, bank details, and marksheets to the school administration, which verifies and forwards the application.",
    },
    {
      q: "Is there any application fee?",
      a: "No. There is no application fee for this scholarship.",
    },
  ],
  source: "sample",
};
