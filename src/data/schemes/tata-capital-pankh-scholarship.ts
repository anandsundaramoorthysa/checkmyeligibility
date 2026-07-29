import type { Scheme } from "@/lib/types";

export const tataCapitalPankhScholarship: Scheme = {
  id: "tata-capital-pankh-scholarship",
  slug: "tata-capital-pankh-scholarship-mres3izq",
  name: "Tata Capital Pankh Scholarship",
  shortName: "Tata Capital Pankh",
  summary:
    "Up to 80% of tuition fees (₹10,000–₹1,00,000 depending on course level and marks) for meritorious students from economically weaker families studying in Class 11–12, ITI, Diploma, UG, or professional degree programmes, administered via Buddy4Study.",
  description:
    "The Tata Capital Pankh Scholarship Programme is a CSR initiative by Tata Capital Ltd. to support meritorious students from economically weaker backgrounds in pursuing their education. It covers Class 11, Class 12, ITI, Diploma, undergraduate, and professional degree courses, providing financial assistance of up to 80% of tuition fees, with the amount varying based on academic performance and level of study. The programme is managed through Buddy4Study and gives additional weightage to girl students, SC/ST students, and students with disabilities.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Indian nationals only",
      type: "residence",
    },
    {
      label: "Annual family income",
      value: "From all sources must not exceed ₹2,50,000 per year",
      type: "income",
    },
    {
      label: "Course & enrollment",
      value:
        "Enrolled in Class 11, Class 12, ITI, Diploma, Undergraduate (UG), or a Professional Degree programme (MBBS, B.E./B.Tech, Law, etc.)",
      type: "education",
    },
    {
      label: "Minimum academic marks",
      value:
        "60% in the previous academic year for Class 11–12, Diploma, ITI, and general UG courses; 80% for professional degree programmes",
      type: "education",
    },
    {
      label: "Exclusion",
      value: "Children of Tata Capital and Buddy4Study employees are not eligible",
      type: "other",
    },
    {
      label: "Priority consideration",
      value:
        "Open to students from all backgrounds; additional weightage is given to girl students, SC/ST students, and students with disabilities",
      type: "other",
    },
  ],
  benefits: [
    "Class 11 & 12: up to ₹10,000 (60–80% marks), ₹12,000 (81–90%), or ₹15,000 (91%+) per academic year",
    "UG / Diploma / ITI: up to ₹12,000 (60–80% marks), ₹15,000 (81–90%), or ₹18,000 (91%+) per academic year",
    "Professional degree programmes (MBBS, B.Tech, Law, etc.): up to ₹1,00,000 per academic year",
    "Covers up to 80% of tuition fees, subject to the applicable cap",
  ],
  requiredDocuments: [
    { name: "Aadhaar card (photo ID)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Income proof",
      mandatory: true,
      note: "Government-issued income certificate, Form 16A, or salary slips of parent/guardian",
    },
    {
      name: "Proof of admission",
      mandatory: true,
      note: "School/college ID card or bonafide certificate",
    },
    { name: "Current year fee receipt", mandatory: true },
    {
      name: "Bank account passbook copy or cancelled cheque",
      mandatory: true,
      note: "Must show account holder's name, account number, and IFSC",
    },
    { name: "Previous year mark sheets or grade cards", mandatory: true },
    {
      name: "Disability certificate",
      mandatory: false,
      note: "Required if applicable",
    },
    {
      name: "Caste certificate",
      mandatory: false,
      note: "Required if applicable, for priority consideration",
    },
  ],
  officialPortalUrl:
    "https://www.buddy4study.com/page/the-tata-capital-pankh-scholarship-programme",
  ministry: "Tata Capital Ltd. — CSR initiative, administered via Buddy4Study",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Tata Capital",
    "Pankh",
    "Buddy4Study",
    "EWS",
    "merit",
    "class 11",
    "class 12",
    "ITI",
    "diploma",
    "undergraduate",
    "professional degree",
    "girl students",
    "SC/ST",
    "disability",
  ],
  faqs: [
    {
      q: "Who is eligible for the Tata Capital Pankh Scholarship?",
      a: "Indian students enrolled in Class 11, Class 12, ITI, Diploma, UG, or a professional degree programme, from families with annual income up to ₹2,50,000, who scored at least 60% (80% for professional courses) in their previous academic year. Children of Tata Capital and Buddy4Study employees are not eligible.",
    },
    {
      q: "How much financial assistance does the scholarship provide?",
      a: "Up to 80% of tuition fees, capped by course level and marks: ₹10,000–₹15,000 for Class 11–12, ₹12,000–₹18,000 for UG/Diploma/ITI, and up to ₹1,00,000 for professional degree programmes such as MBBS, B.Tech, and Law.",
    },
    {
      q: "How do I apply?",
      a: "Visit the official Buddy4Study Tata Capital Pankh Scholarship page, click 'Apply Now', register or log in, complete the eligibility verification and application form, upload the required documents, and submit. You can track your application status on the Buddy4Study dashboard.",
    },
    {
      q: "Is priority given to any group of students?",
      a: "Yes. While open to all eligible students, additional weightage is given to girl students, SC/ST students, and students with disabilities.",
    },
    {
      q: "Who can I contact for queries?",
      a: "Email pankh@buddy4study.com or call 011-430-92248 (Ext-225), Monday–Friday, 10 AM–6 PM.",
    },
  ],
  source: "sample",
};
