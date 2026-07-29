import type { Scheme } from "@/lib/types";

export const tamilNaduPostMatricScholarshipBcMbcDnc: Scheme = {
  id: "tamil-nadu-post-matric-scholarship-bc-mbc-dnc",
  slug: "tamil-nadu-post-matric-scholarship-for-bc-mbc-dnc-students-290",
  name: "Tamil Nadu Post-Matric Scholarship for BC/MBC/DNC Students #290",
  shortName: "TN BC/MBC/DNC Scholarship",
  summary:
    "Tamil Nadu Government scholarship covering tuition fee, special fee, exam fee, and book money for BC, MBC, and DNC students pursuing ITI, diploma, UG, PG, professional, and Ph.D. courses, with a family income limit of ₹2.5 lakh per annum.",
  description:
    "The Tamil Nadu Post-Matric Scholarship for BC/MBC/DNC Students is a state welfare scheme implemented by the Directorate of Backward Classes Welfare, Government of Tamil Nadu. It provides financial assistance to students belonging to Backward Classes (BC), Most Backward Classes (MBC), and Denotified Communities (DNC) who are pursuing post-matriculation education including ITI, diploma in polytechnics, undergraduate, postgraduate, professional, and Ph.D. courses.\n\nThe scheme covers tuition fee and special fee (as fixed for government educational institutions), full examination fee, and book money as notified in the scholarship notification. Students staying in hostels attached to educational institutions receive additional boarding and lodging charges at ₹4,000 per year (₹400 per month for 10 months). Students studying in the second shift in government and government-aided colleges are also eligible under the same conditions.\n\nFor students from Tamil Nadu studying in central government institutions (IIT, IIM, IIIT, NIT, and Central Universities), the reimbursement covers tuition fee, special fee, exam fee, and other compulsory fees up to ₹2,00,000 per year, whichever is lesser. Applications are processed through the educational institution to the Directorate of Backward Classes Welfare, Chennai.",
  category: "scholarship",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to Backward Classes (BC), Most Backward Classes (MBC), or Denotified Communities (DNC) as per the Tamil Nadu government community list",
      type: "caste-category",
    },
    {
      label: "Residency",
      value: "Must be a native of Tamil Nadu",
      type: "residence",
    },
    {
      label: "Course level",
      value:
        "Must be pursuing post-matriculation education: ITI, Diploma in Polytechnics, Undergraduate, Postgraduate, Professional, or Ph.D. courses at a recognised institution",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Annual parental income must not exceed ₹2,50,000 per annum. A valid income certificate issued by the Tamil Nadu government is required",
      type: "income",
    },
    {
      label: "Institution type",
      value:
        "Must be enrolled in a government or government-aided institution in Tamil Nadu. For central government institutions (IIT, IIM, IIIT, NIT, Central Universities), students must be a native of Tamil Nadu",
      type: "education",
    },
    {
      label: "Other scholarships",
      value:
        "Must not be receiving any other scholarship from the Government of India, State Government, or any other agency simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "Full tuition fee reimbursement (as per government norms for government and government-aided institutions)",
    "Special fee reimbursement",
    "Examination fee sanctioned in full",
    "Book money as notified in the scholarship notification",
    "Boarding and lodging charges of ₹4,000 per year (₹400/month for 10 months) for hostellers",
    "For central government institutions (IIT/IIM/IIIT/NIT/Central Universities): reimbursement up to ₹2,00,000 per year covering tuition fee, special fee, exam fee, and other compulsory fees",
    "Coverage for the entire duration of the UG/PG course",
    "Second-shift students in government and government-aided colleges are eligible under the same conditions",
    "Disbursement via Direct Benefit Transfer (DBT) to the student's Aadhaar-seeded bank account",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true, note: "Must be linked to the student's bank account" },
    { name: "BC/MBC/DNC Community Certificate", mandatory: true, note: "Issued by the competent authority in Tamil Nadu" },
    {
      name: "Annual Family Income Certificate",
      mandatory: true,
      note: "Issued by the Tamil Nadu government, certifying income below ₹2.5 lakh per annum",
    },
    { name: "Nativity Certificate", mandatory: true, note: "Proof of being a native of Tamil Nadu" },
    { name: "Bonafide Certificate from Institution", mandatory: true, note: "Issued by the Head of Institution confirming current enrolment" },
    { name: "Fee Receipts / Paid Fee Copies", mandatory: true, note: "For all semesters of the current academic year" },
    { name: "Academic Marksheets", mandatory: true, note: "Previous year/mark sheet for shortlisting (Class 12 or equivalent)" },
    { name: "Bank Passbook (first page copy)", mandatory: true, note: "Student's own account, Aadhaar-seeded" },
    {
      name: "Self-Declaration of Family Income",
      mandatory: true,
      note: "Signed declaration by the student that no other scholarship is being availed",
    },
    {
      name: "Undertaking by Student, Supervisor, and Head of Institution",
      mandatory: true,
      note: "Duly signed and stamped on the prescribed format",
    },
    {
      name: "Proof of Residential Address",
      mandatory: false,
      note: "If different from the address on the nativity certificate",
    },
  ],
  officialPortalUrl: "https://www.tnssp.gov.in/",
  ministry:
    "Directorate of Backward Classes Welfare / BC, MBC & MW Department, Government of Tamil Nadu",
  applicationMode: ["online", "offline"],
  tags: [
    "Tamil Nadu",
    "scholarship",
    "post-matric",
    "BC",
    "MBC",
    "DNC",
    "backward classes",
    "most backward classes",
    "denotified communities",
    "state scholarship",
    "tuition fee",
    "exam fee",
    "education",
    "UG",
    "PG",
    "diploma",
    "ITI",
    "professional",
    "PhD",
    "IIT",
    "NIT",
    "central university",
    "DBT",
  ],
  faqs: [
    {
      q: "Who is eligible for the Tamil Nadu BC/MBC/DNC Post-Matric Scholarship?",
      a: "Students belonging to Backward Classes (BC), Most Backward Classes (MBC), or Denotified Communities (DNC) who are native to Tamil Nadu, pursuing post-matriculation courses (ITI, diploma, UG, PG, professional, or Ph.D.) at recognised institutions, with an annual family income not exceeding ₹2.5 lakh.",
    },
    {
      q: "What does the scholarship cover?",
      a: "It covers tuition fee, special fee, full examination fee, and book money. Hostellers receive an additional ₹4,000 per year for boarding and lodging. For students at IIT/IIM/IIIT/NIT/Central Universities, the reimbursement is up to ₹2,00,000 per year.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Collect the application form from your educational institution, fill it with the required documents, and submit it through your institution's Head to the Directorate of Backward Classes Welfare, Chennai. Applications can also be submitted online through the Tamil Nadu State Scholarship Portal (TNSSP).",
    },
    {
      q: "Can I avail this scholarship if I study in a central government institution like IIT or NIT?",
      a: "Yes. Tamil Nadu natives belonging to BC/MBC/DNC communities studying UG/PG courses at IIT, IIM, IIIT, NIT, and Central Universities are eligible. The reimbursement covers fees up to ₹2,00,000 per year.",
    },
    {
      q: "Is renewal required every year?",
      a: "Yes. Students must apply for renewal each academic year through their institution. Renewal requires satisfactory attendance and academic performance in the previous year. Fresh applications typically open in November and renewals in October.",
    },
    {
      q: "Can I receive this scholarship along with another scholarship?",
      a: "No. Students already receiving any scholarship from the Government of India, State Government, or any other agency are not eligible to receive this scholarship simultaneously.",
    },
    {
      q: "How is the scholarship amount disbursed?",
      a: "The scholarship amount is disbursed via Direct Benefit Transfer (DBT) directly to the student's Aadhaar-seeded bank account after institutional and departmental verification.",
    },
  ],
  source: "sample",
};
