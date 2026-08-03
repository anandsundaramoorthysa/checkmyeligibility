import type { Scheme } from "@/lib/types";

export const hdfcBankParivartanEcssScholarship: Scheme = {
  id: "hdfc-bank-parivartan-ecss-scholarship",
  slug: "hdfc-bank-parivartan-ecss-scholarship",
  name: "HDFC Bank Parivartan ECSS Scholarship",
  shortName: "Parivartan ECSS",
  summary:
    "Annual scholarship of \u20B915,000\u2013\u20B975,000 for underprivileged Indian students from Class 1 through postgraduate level, priority given to those facing a recent family or financial crisis.",
  description:
    "The HDFC Bank Parivartan ECSS (Education, Career & Skill Support) Programme is a CSR initiative providing annual financial aid between \u20B915,000 and \u20B975,000 to help underprivileged Indian students continue their education despite facing severe family or financial crises. It covers students from Class 1 through postgraduate level, with amounts varying by education level. Priority is given to students who have faced a recent personal or family crisis.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian national enrolled in a recognised institution",
      type: "residence",
    },
    {
      label: "Academic performance",
      value:
        "Minimum 55% marks in the previous qualifying examination",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B92,50,000 from all sources",
      type: "income",
    },
    {
      label: "Education level",
      value:
        "Open to students from Class 1 through postgraduate (first year only \u2014 not continuing students)",
      type: "education",
    },
    {
      label: "Crisis priority",
      value:
        "Priority given to students who experienced a personal or family crisis in the past 3 years",
      type: "other",
    },
    {
      label: "Distance learning",
      value: "Distance learning students are not eligible",
      type: "other",
    },
  ],
  benefits: [
    "Class 1\u20136: \u20B915,000 per year",
    "Class 7\u201312 / Diploma / ITI / Polytechnic: \u20B918,000 per year",
    "UG General (BA, BSc, BCom, BCA): \u20B930,000 per year",
    "UG Professional (BTech, MBBS, Law, Architecture, Nursing): \u20B950,000 per year",
    "PG General (MA, MSc, MCom): \u20B935,000 per year",
    "PG Professional (MBA, MTech): \u20B975,000 per year",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Previous year mark sheets", mandatory: true },
    {
      name: "Identity proof (Aadhaar / Voter ID / Driving License)",
      mandatory: true,
    },
    {
      name: "Current admission proof (fee receipt / admission letter / institution ID / bonafide certificate)",
      mandatory: true,
    },
    { name: "Bank passbook or cancelled cheque", mandatory: true },
    {
      name: "Income proof (Gram Panchayat / Ward Councillor / SDM / Tehsildar certificate or self-declared affidavit)",
      mandatory: true,
    },
    {
      name: "Crisis documentation (if claiming crisis-based preference)",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://www.hdfc.bank.in/",
  ministry: "HDFC Bank Ltd. – CSR / Parivartan Initiative",
  applicationMode: ["online"],
  tags: [
    "HDFC Bank",
    "Parivartan",
    "ECSS",
    "scholarship",
    "CSR",
    "underprivileged",
    "Class 1",
    "Class 12",
    "UG",
    "PG",
    "professional",
    "diploma",
    "ITI",
    "polytechnic",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "Who is eligible for the HDFC Bank Parivartan ECSS Scholarship?",
      a: "Indian nationals enrolled in a recognised institution with at least 55% marks in the previous exam and an annual family income of \u20B92,50,000 or less. Priority is given to students facing a recent family or financial crisis.",
    },
    {
      q: "What is the scholarship amount?",
      a: "The scholarship ranges from \u20B915,000 to \u20B975,000 per year depending on the education level \u2014 from Class 1 up to postgraduate professional programmes.",
    },
    {
      q: "How do I apply?",
      a: "Visit parivartanecss.com or the Buddy4Study platform, register, navigate to the Parivartan ECSS Scholarship Programme, fill in your details, upload the required documents, and submit the application.",
    },
    {
      q: "Are distance learning students eligible?",
      a: "No, distance learning students are not eligible for this scholarship.",
    },
    {
      q: "Is there a renewal option?",
      a: "The scholarship is for first-year students only. Continuing students are not eligible to apply again.",
    },
  ],
  source: "sample",
};
