import type { Scheme } from "@/lib/types";

export const mukhyamantriGyanSadhanaMeritScholarshipScheme: Scheme = {
  id: "mukhyamantri-gyan-sadhana-merit-scholarship-scheme",
  slug: "mukhyamantri-gyan-sadhana-merit-scholarship-scheme",
  name: "Mukhyamantri Gyan Sadhana Merit Scholarship Scheme",
  shortName: "Gyan Sadhana Gujarat",
  summary:
    "Merit-based scholarship of ₹20,000–₹25,000 per year for 25,000 meritorious students in Gujarat who studied Class 1–8 in government or aided schools, to support their education up to Class 12.",
  description:
    "The Mukhyamantri Gyan Sadhana Merit Scholarship Scheme (CGMS) is a flagship initiative of the Government of Gujarat, administered by the State Examination Board (SEB), Gandhinagar. Launched from the academic year 2023-24, it supports 25,000 bright students who have studied consecutively from Class 1 to Class 8 in government or government-aided primary schools (or self-financed schools under the RTE Act, 2009). Selected students receive financial assistance to continue their education from Class 9 through Class 12, covering tuition fees and other academic expenses. The scheme aligns with the objectives of the National Education Policy (NEP) and the Right to Education Act, 2009, and aims to prevent dropouts among meritorious students from economically weaker sections.",
  category: "social-welfare",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident of Gujarat",
      type: "residence",
    },
    {
      label: "Education (previous)",
      value:
        "Must have studied consecutively from Class 1 to Class 8 in a government, government-aided primary school, or self-financed school under the RTE Act, 2009 in Gujarat",
      type: "education",
    },
    {
      label: "Class 8 completion",
      value: "Must have completed Class 8 and be eligible for admission to Class 9",
      type: "education",
    },
    {
      label: "Selection process",
      value: "Must have been selected on merit through the CGMS examination conducted by SEB, Gandhinagar",
      type: "education",
    },
    {
      label: "Income",
      value: "Open to students from economically weaker sections — no specific income ceiling mentioned in scheme guidelines",
      type: "income",
    },
    {
      label: "Attendance",
      value: "Selected students must maintain at least 80% attendance to continue receiving scholarship benefits",
      type: "education",
    },
  ],
  benefits: [
    "Classes 9–10: ₹22,000 per year (₹20,000 scholarship + ₹3,000 tuition fee support)",
    "Classes 11–12: ₹25,000 per year (₹25,000 scholarship + ₹4,000 tuition fee support)",
    "Total of 25,000 students selected annually across Gujarat",
    "Scholarship covers the full duration from Class 9 to Class 12",
    "Disbursed directly to the student's bank account via DBT",
    "No application fee for the CGMS examination",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Gujarat domicile / residence proof", mandatory: true },
    {
      name: "Class 8 marksheet from government/aided school or RTE school",
      mandatory: true,
    },
    { name: "Previous class marksheet", mandatory: true },
    {
      name: "Income certificate (if applicable)",
      mandatory: false,
    },
    {
      name: "SC/ST/PH certificate (if applicable)",
      mandatory: false,
    },
    { name: "Bank passbook (student's name)", mandatory: true },
    { name: "School bonafide certificate", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "U-DISE number of the school",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://sebexam.org/",
  ministry:
    "Education Department, Government of Gujarat / State Examination Board (SEB)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Gujarat",
    "merit",
    "CGMS",
    "SEB",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "government school",
    "RTE",
    "NEP",
    "state scholarship",
    "DBT",
    "Gyan Sadhana",
  ],
  faqs: [
    {
      q: "Who is eligible for the Gyan Sadhana Merit Scholarship?",
      a: "Students who have studied consecutively from Class 1 to Class 8 in government, government-aided, or RTE self-financed schools in Gujarat, and have been selected on merit through the CGMS examination. The scheme supports 25,000 meritorious students annually.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Students in Classes 9–10 receive ₹22,000 per year (₹20,000 scholarship + ₹3,000 tuition support). Students in Classes 11–12 receive ₹25,000 per year (₹25,000 scholarship + ₹4,000 tuition support).",
    },
    {
      q: "How do I apply for the CGMS examination?",
      a: "Register online at sebexam.org during the registration window (typically February–March). The exam is conducted in April and results are declared in May. There is no application fee.",
    },
    {
      q: "What is the exam pattern?",
      a: "The CGMS exam is a 150-minute MCQ test covering Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT). The exam is available in English and Gujarati.",
    },
    {
      q: "Is there an attendance requirement to continue the scholarship?",
      a: "Yes, selected students must maintain at least 80% attendance in their school to continue receiving scholarship benefits.",
    },
    {
      q: "Can students from private schools apply?",
      a: "Only students who have studied Class 1–8 in government, government-aided, or self-financed schools under the RTE Act, 2009 are eligible. General private school students are not eligible.",
    },
  ],
  lastVerified: "2026-07-25",
  source: "sample",
};
