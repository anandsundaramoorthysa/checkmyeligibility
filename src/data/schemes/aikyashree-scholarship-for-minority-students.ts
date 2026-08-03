import type { Scheme } from "@/lib/types";

export const aikyashreeScholarshipForMinorityStudents: Scheme = {
  id: "aikyashree-scholarship-for-minority-students-mrce3odf",
  slug: "aikyashree-scholarship-for-minority-students-mrce3odf",
  name: "Aikyashree Scholarship for Minority Students",
  shortName: "Aikyashree Scholarship",
  summary:
    "Scholarships up to ₹33,000 for minority students in West Bengal across Pre-Matric, Post-Matric, and Merit-cum-Means tiers via DBT.",
  description:
    "The Aikyashree Scholarship scheme is a vital socio-economic development tool created by the West Bengal State Government to address equity in education. It works by disbursing multiple sub-categories of scholarships—namely Pre-Matric, Post-Matric, Merit-cum-Means (MCM), the Talent Support Programme (TSP), and the Swami Vivekananda Merit-cum-Means (SVMCM) scheme. The core objective is to reduce dropout rates among minority communities by providing continuous financial cushioning across different milestones of a student's career. Funds are mapped directly to educational institutions to subsidize tuition and basic living costs via Direct Benefit Transfer (DBT).",
  category: "scholarship",
  level: "state",
  states: ["west-bengal"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident (domicile) of West Bengal",
      type: "residence",
    },
    {
      label: "Minority community",
      value: "Must belong to a recognized minority community: Muslim, Christian, Sikh, Buddhist, Jain, or Parsi",
      type: "caste-category",
    },
    {
      label: "Enrolment",
      value: "Must be enrolled in a full-time regular course at a government-recognized school, college, or university in West Bengal",
      type: "education",
    },
    {
      label: "Minimum marks",
      value: "At least 50% aggregate marks (or equivalent grade) in last qualifying exam (waived for Class 1)",
      type: "education",
    },
    {
      label: "Family income",
      value: "Annual family income must not exceed ₹2 Lakh for Pre-Matric, Post-Matric, and TSP; ₹2.5 Lakh for Merit-cum-Means and SVMCM",
      type: "income",
    },
    {
      label: "No concurrent scholarship",
      value: "Must not be availing any other concurrent government scholarship",
      type: "other",
    },
  ],
  benefits: [
    "Pre-Matric scholarship up to ₹11,000",
    "Post-Matric scholarship up to ₹16,500",
    "Merit-cum-Means scholarship up to ₹33,000",
    "Covers tuition and basic living costs via Direct Benefit Transfer (DBT)",
    "Includes Talent Support Programme (TSP) and Swami Vivekananda Merit-cum-Means (SVMCM) variants",
  ],
  requiredDocuments: [
    { name: "Recent passport-size color photograph", mandatory: true },
    { name: "Aadhaar Card (student and guardian)", mandatory: true },
    { name: "Domicile Certificate or proof of residence (Voter Card / Ration Card)", mandatory: true },
    { name: "Official Income Certificate from BDO/Joint BDO/Gazetted Officer", mandatory: true },
    { name: "Self-attested marksheet of last qualifying examination", mandatory: true },
    { name: "Current year's admission fee receipt or institutional verification bonafide certificate", mandatory: true },
    { name: "Personal bank passbook showing Account Number, Bank Name, and IFSC (linked to NPCI mapper for DBT)", mandatory: true },
  ],
  officialPortalUrl: "https://wbmdfc.org",
  ministry: "West Bengal Minorities Development & Finance Corporation (WBMDFC), Government of West Bengal",
  applicationMode: ["online"],
  tags: [
    "West Bengal",
    "Aikyashree",
    "minority",
    "scholarship",
    "Pre-Matric",
    "Post-Matric",
    "Merit-cum-Means",
    "SVMCM",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "DBT",
    "state scheme",
  ],
  faqs: [
    {
      q: "What is the Aikyashree Scholarship?",
      a: "A West Bengal government scholarship programme for minority students covering Pre-Matric (up to ₹11,000), Post-Matric (up to ₹16,500), and Merit-cum-Means (up to ₹33,000) tiers, disbursed via DBT.",
    },
    {
      q: "Who is eligible?",
      a: "West Bengal domiciles from recognized minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) enrolled in full-time regular courses, with 50% marks and income below ₹2-2.5 Lakh.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Amounts vary by component: Pre-Matric up to ₹11,000, Post-Matric up to ₹16,500, and Merit-cum-Means up to ₹33,000, depending on course and hosteller status.",
    },
    {
      q: "What documents are required?",
      a: "Passport photo, Aadhaar (student and guardian), domicile proof, income certificate, last exam marksheet, admission fee receipt/bonafide certificate, and bank passbook linked to NPCI mapper.",
    },
    {
      q: "How do I apply?",
      a: "Apply online via the WBMDFC Aikyashree Portal. Register fresh, receive User ID and password via SMS, fill personal/academic/banking details, select eligible scheme tier, upload documents, and Verify and Lock the application.",
    },
  ],
  source: "sample",
};
