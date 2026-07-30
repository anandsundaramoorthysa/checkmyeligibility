import type { Scheme } from "@/lib/types";

export const mukhyamantriMedhaviVidyarthiYojana: Scheme = {
  id: "mukhyamantri-medhavi-vidyarthi-yojana",
  slug: "mukhyamantri-medhavi-vidyarthi-yojana-mp",
  name: "Mukhyamantri Medhavi Vidyarthi Yojana",
  shortName: "MMVY",
  summary:
    "Complete tuition fee coverage for meritorious students from economically weaker families in Madhya Pradesh pursuing undergraduate courses in engineering, medicine, law, and other streams.",
  description:
    "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY) is a flagship scholarship scheme launched by the Government of Madhya Pradesh in 2017 under the Department of Technical Education, Skill Development and Employment. The scheme provides full tuition fee reimbursement to meritorious students from Below Poverty Line families who have passed Class 12 with strong academic results. The government directly pays the approved tuition fee to eligible institutions on behalf of the student, covering engineering, medical, law, polytechnic, and other undergraduate programmes at recognised government and private colleges. Over 1.5 lakh students have benefited from the scheme, with the state government disbursing more than ₹500 crore in tuition fee reimbursements. The scheme has contributed to a significant increase in higher education enrollment among economically disadvantaged students in the state.",
  category: "scholarship",
  level: "state",
  states: ["madhya-pradesh"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident of Madhya Pradesh",
      type: "residence",
    },
    {
      label: "Class 12 marks (MP Board)",
      value: "Minimum 70% marks in Class 12 from MPBSE",
      type: "education",
    },
    {
      label: "Class 12 marks (CBSE/ICSE)",
      value: "Minimum 85% marks in Class 12 from CBSE or ICSE",
      type: "education",
    },
    {
      label: "Annual family income (General/OBC/EWS)",
      value: "Family annual income from all sources ≤ ₹6,00,000",
      type: "income",
    },
    {
      label: "Annual family income (SC/ST)",
      value:
        "Family annual income ≤ ₹8,00,000 for specific professional streams",
      type: "income",
    },
    {
      label: "Entrance exam (Engineering)",
      value: "JEE Main rank within top 1,50,000",
      type: "education",
    },
    {
      label: "Entrance exam (Medical)",
      value: "Qualified NEET with admission to MBBS/BDS in a recognised college",
      type: "education",
    },
    {
      label: "Entrance exam (Law)",
      value:
        "Qualified CLAT with admission to a National Law University or Delhi University",
      type: "education",
    },
  ],
  benefits: [
    "Full tuition fee coverage for government college students",
    "Up to ₹1,50,000 or actual tuition fee (whichever is less) for engineering at private colleges",
    "Full tuition fee coverage for MBBS/BDS at government and private medical colleges in MP",
    "Full tuition fee coverage for law courses at NLUs and Delhi University",
    "Tuition fee reimbursement for general UG courses (BA, BSc, BCom) at government colleges",
    "Applicable at IITs, NITs, AIIMS, and other centrally funded institutions for MP residents",
    "Covers tuition and admission fees only — hostel, mess, and personal expenses are not covered",
    "Renewable each academic year provided satisfactory academic progress is maintained",
    "Payment disbursed via Direct Benefit Transfer (DBT) to the student's Aadhaar-linked bank account",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Class 10 marksheet", mandatory: true },
    { name: "Class 12 marksheet", mandatory: true },
    { name: "MP domicile certificate", mandatory: true },
    {
      name: "Income certificate issued by competent authority",
      mandatory: true,
    },
    { name: "9-digit Samagra ID", mandatory: true },
    {
      name: "College admission letter / fee receipt",
      mandatory: true,
    },
    {
      name: "Bank passbook (Aadhaar-linked, student's name)",
      mandatory: true,
    },
    {
      name: "Entrance exam scorecard (JEE/NEET/CLAT)",
      mandatory: false,
      note: "Required for engineering, medical, and law applicants",
    },
    {
      name: "Caste certificate (SC/ST/OBC)",
      mandatory: false,
      note: "Required if applying under reserved category",
    },
    { name: "Passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://medhavikalyan.mp.gov.in/",
  ministry:
    "Department of Technical Education, Skill Development and Employment, Government of Madhya Pradesh",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Madhya Pradesh",
    "merit",
    "tuition fee",
    "engineering",
    "medical",
    "law",
    "undergraduate",
    "UG",
    "BPL",
    "income-based",
    "government college",
    "private college",
    "state scholarship",
    "JEE",
    "NEET",
    "CLAT",
    "DBT",
  ],
  faqs: [
    {
      q: "What is Mukhyamantri Medhavi Vidyarthi Yojana?",
      a: "MMVY is a Madhya Pradesh government scholarship that covers full tuition fees for meritorious students from economically weaker families pursuing undergraduate courses in engineering, medicine, law, and other streams at recognised institutions.",
    },
    {
      q: "What percentage is required for MMVY?",
      a: "Students from MP Board (MPBSE) need a minimum of 70% in Class 12. Students from CBSE or ICSE boards need a minimum of 85% in Class 12.",
    },
    {
      q: "What is the family income limit for MMVY?",
      a: "General, OBC, and EWS applicants must have an annual family income of ₹6 lakh or less. SC/ST applicants may be eligible with an income limit of up to ₹8 lakh for specific professional streams.",
    },
    {
      q: "Does MMVY cover private college fees?",
      a: "Yes. MMVY covers tuition fees at recognised private colleges as well. For engineering at private colleges, the government pays up to ₹1,50,000 or the actual tuition fee, whichever is less.",
    },
    {
      q: "Can MP residents studying at IITs or NITs apply?",
      a: "Yes. Students from Madhya Pradesh who secure admission to IITs, NITs, AIIMS, and other centrally funded institutions are fully eligible for MMVY benefits.",
    },
    {
      q: "What expenses are NOT covered under MMVY?",
      a: "MMVY only covers tuition and admission fees. Hostel charges, mess fees, caution money, transportation charges, and personal expenses are not covered.",
    },
    {
      q: "How do I apply for MMVY?",
      a: "Visit the official portal at medhavikalyan.mp.gov.in, register using your Aadhaar number and Samagra ID, fill in your academic and personal details, upload the required documents, and submit the application. Your institution must verify the application after submission.",
    },
    {
      q: "How is the scholarship amount disbursed?",
      a: "The scholarship amount is paid directly to the institution's bank account via Direct Benefit Transfer (DBT) through the PFMS system. In some cases, it is credited to the student's Aadhaar-linked bank account.",
    },
  ],
  source: "sample",
};
