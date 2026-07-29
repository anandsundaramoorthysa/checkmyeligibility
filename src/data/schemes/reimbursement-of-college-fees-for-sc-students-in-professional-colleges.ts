import type { Scheme } from "@/lib/types";

export const reimbursementOfCollegeFeesForScStudentsInProfessionalColleges: Scheme = {
  id: "reimbursement-of-college-fees-for-sc-students-in-professional-colleges",
  slug: "reimbursement-of-college-fees-for-sc-students-in-professional-colleges-6h2d9k4n",
  name: "Reimbursement of College Fees for Scheduled Caste Students in Professional Colleges (Top 20)",
  shortName: "RCFSCSPC",
  summary:
    "Reimbursement of tuition and examination fees for Scheduled Caste students from Puducherry who score above 75% in HSC and secure a Top 20 rank in professional college admissions.",
  description:
    "The Reimbursement of College Fees for Scheduled Caste Students in Professional Colleges (Top 20) scheme is an initiative by the Adi Dravidar Welfare and Scheduled Tribes Welfare Department, Government of Puducherry. It provides full reimbursement of tuition fees and examination fees to deserving Scheduled Caste students who have achieved marks above 75% in the Higher Secondary Course Examination and secured a place in the 'Top 20' rank for admission into professional colleges. Students must be selected through the CENTAC counselling process. The scheme aims to alleviate the financial burden on meritorious SC students pursuing professional education in government or government-recognised private professional colleges.",
  category: "education",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Caste (SC) community",
      type: "caste-category",
    },
    {
      label: "Academic merit",
      value: "Must have scored above 75% marks in the Higher Secondary Course (HSC) examination",
      type: "education",
    },
    {
      label: "Rank requirement",
      value: "Must have secured a place in the 'Top 20' rank and be selected through CENTAC counselling",
      type: "education",
    },
    {
      label: "Domicile",
      value: "Must be a native or permanent resident of Puducherry",
      type: "residence",
    },
    {
      label: "Institution type",
      value: "Must be enrolled in a government or government-recognised private professional college",
      type: "education",
    },
  ],
  benefits: [
    "Full reimbursement of tuition fees for the professional course",
    "Full reimbursement of examination fees",
    "Financial support to reduce educational expenses for meritorious SC students",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Scheduled Caste (SC) certificate", mandatory: true },
    { name: "Higher Secondary mark sheet", mandatory: true },
    { name: "College admission letter / CENTAC allotment order", mandatory: true },
    { name: "Original fee receipt", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Proof of residence (Puducherry)", mandatory: true },
    { name: "Certificate from Head of Institution", mandatory: true },
  ],
  officialPortalUrl: "https://www.myscheme.gov.in/schemes/rcfscspc",
  ministry: "Adi Dravidar Welfare and Scheduled Tribes Welfare Department, Government of Puducherry",
  applicationMode: ["online", "offline"],
  tags: [
    "Puducherry",
    "SC",
    "scheduled caste",
    "fee reimbursement",
    "professional colleges",
    "tuition fee",
    "top 20",
    "CENTAC",
    "merit",
    "state scheme",
  ],
  faqs: [
    {
      q: "Who is eligible for this scheme?",
      a: "Scheduled Caste students who are residents of Puducherry, have scored above 75% in HSC, secured a Top 20 rank, and been selected through CENTAC for admission to a professional college.",
    },
    {
      q: "What expenses are reimbursed?",
      a: "Tuition fees and examination fees paid by the student to the professional college are fully reimbursed.",
    },
    {
      q: "Is there an income limit?",
      a: "No. There is no annual family income limit for this scheme.",
    },
    {
      q: "Which colleges are covered?",
      a: "Government and government-recognised private professional colleges in Puducherry are covered under this scheme.",
    },
    {
      q: "How do I apply?",
      a: "Applications can be submitted online through the e-District portal (edistrict.py.gov.in) or offline at the Office of the Adi Dravidar Welfare Department.",
    },
  ],
  source: "sample",
};
