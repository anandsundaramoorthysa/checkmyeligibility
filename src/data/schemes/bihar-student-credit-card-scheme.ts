import type { Scheme } from "@/lib/types";

export const biharStudentCreditCardScheme: Scheme = {
  id: "bihar-student-credit-card-scheme",
  slug: "bihar-student-credit-card-scheme",
  name: "Bihar Student Credit Card Scheme",
  shortName: "BSCC",
  summary:
    "Education loan of up to ₹4 lakh at 0% interest for Class 12 pass students of Bihar to pursue higher education in recognised technical, professional, and general courses.",
  description:
    "The Bihar Student Credit Card Scheme (BSCC) is a transformative education financing initiative under the Mukhyamantri Nishchay Swayam Sahayata Bhata Yojana (MNSSBY), launched in October 2016 by the Government of Bihar. The scheme provides education loans of up to ₹4 lakh at zero per cent interest to Class 12 pass students from Bihar for pursuing higher education at recognised institutions across India. The loan covers tuition fees, hostel charges, books, study materials, laptop, and examination fees. No collateral is required as the loan is guaranteed by the Bihar state government. Since September 2025, the interest rate has been universally reduced to 0% for all students. Repayment begins after course completion plus a one-year moratorium period, or six months after securing a job, whichever is earlier. Applications are processed online through the official portal, followed by mandatory document verification at the District Registration and Counselling Centre (DRCC). Over 5 lakh students have benefited from the scheme.",
  category: "education-loan",
  level: "state",
  states: ["bihar"],
  eligibility: [
    {
      label: "Residence",
      value:
        "Must be a permanent resident of Bihar — domicile certificate required",
      type: "residence",
    },
    {
      label: "Education",
      value:
        "Must have passed Class 12 (Intermediate) from any recognised board — BSEB, CBSE, ICSE, or any state board",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Must not exceed 25 years at the time of application",
      type: "age",
    },
    {
      label: "Institution",
      value:
        "Must be enrolled in or have admission to a course at a UGC, AICTE, or state government-recognised institution",
      type: "education",
    },
    {
      label: "Other assistance",
      value:
        "Must not be receiving any other allowance, scholarship, student credit card, or education loan from any government scheme",
      type: "other",
    },
  ],
  benefits: [
    "Education loan of up to ₹4,00,000 for higher education",
    "Zero per cent (0%) interest rate for all students since September 2025",
    "No collateral or security required — Bihar government guaranteed",
    "Covers tuition fees, hostel accommodation, books, study materials, laptop, and examination fees",
    "Moratorium period of one year after course completion before repayment begins",
    "Flexible repayment tenure of 7 to 10 years",
    "Loan processing is free — no application or processing fee",
    "Applicable for over 42 approved courses including B.Tech, MBBS, BA, BSc, BCom, BBA, LLB, BCA, MBA, and more",
    "No minimum percentage requirement in Class 12 — just need to have passed",
  ],
  requiredDocuments: [
    {
      name: "Aadhaar card",
      mandatory: true,
    },
    {
      name: "10th marksheet and certificate",
      mandatory: true,
    },
    {
      name: "12th marksheet and certificate",
      mandatory: true,
    },
    {
      name: "Bihar domicile / residential certificate",
      mandatory: true,
    },
    {
      name: "Family income certificate",
      mandatory: true,
      note: "Issued by competent authority — no strict income ceiling applies",
    },
    {
      name: "Admission letter from institution",
      mandatory: true,
    },
    {
      name: "Fee structure of the course",
      mandatory: true,
    },
    {
      name: "Bank passbook (Aadhaar-linked)",
      mandatory: true,
    },
    {
      name: "Passport-size photographs",
      mandatory: true,
    },
    {
      name: "PAN card",
      mandatory: false,
      note: "If available — for applicant and co-applicant",
    },
    {
      name: "Co-applicant (parent/guardian) documents",
      mandatory: true,
      note: "Aadhaar, PAN, income proof (salary slip/ITR), and bank statement (last 6 months)",
    },
  ],
  officialPortalUrl:
    "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
  ministry:
    "Education Department, Government of Bihar (processed by Bihar State Education Finance Corporation — BSEFC)",
  applicationMode: ["online"],
  tags: [
    "education loan",
    "Bihar",
    "0% interest",
    "student credit card",
    "Class 12",
    "higher education",
    "tuition fee",
    "MNSSBY",
    "7 Nishchay",
    "no collateral",
    "technical courses",
    "professional courses",
    "general courses",
    "state scheme",
  ],
  faqs: [
    {
      q: "What is the Bihar Student Credit Card Scheme?",
      a: "BSCC is a Bihar government education loan scheme under the MNSSBY programme that provides loans of up to ₹4 lakh at 0% interest to Class 12 pass students for pursuing higher education at recognised institutions.",
    },
    {
      q: "What is the interest rate?",
      a: "Since September 2025, the interest rate is 0% for all students. You only repay the principal amount.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Permanent residents of Bihar who have passed Class 12, are aged 25 years or below, and are enrolled in a recognised higher education course. No minimum percentage in Class 12 is required.",
    },
    {
      q: "Is collateral required?",
      a: "No. The loan is guaranteed by the Bihar state government — no property, FD, or guarantor is needed.",
    },
    {
      q: "What courses are covered?",
      a: "Over 42 courses are covered including B.Tech, MBBS, BDS, BA, BSc, BCom, BBA, BCA, LLB, MBA, MCA, B.Ed, nursing, polytechnic, diploma, paramedical, pharmacy, and agriculture at recognised institutions.",
    },
    {
      q: "How do I apply?",
      a: "Register at 7nishchay-yuvaupmission.bihar.gov.in, fill the BSCC application form, upload documents, and then visit your district's DRCC (District Registration and Counselling Centre) with original documents within 60 days of online submission for verification.",
    },
    {
      q: "When does repayment start?",
      a: "Repayment begins after course completion plus a one-year moratorium, or six months after securing a job, whichever is earlier. Repayment tenure is typically 7 to 10 years.",
    },
    {
      q: "Is there any application fee?",
      a: "No. The application and processing are completely free. Do not pay any agent — the scheme is processed directly by the government.",
    },
  ],
  source: "sample",
};
