import type { Scheme } from "@/lib/types";

export const sebcPostMatricScholarshipSchemeGujarat: Scheme = {
  id: "sebc-post-matric-scholarship-scheme-gujarat",
  slug: "sebc-post-matric-scholarship-scheme-gujarat-5xo4rnab",
  name: "SEBC Post-Matric Scholarship Scheme \u2013 Gujarat",
  shortName: "SEBC Post-Matric",
  summary:
    "Gujarat state scholarship for SEBC/OBC students covering maintenance allowance (\u20B9150\u2013\u20B91,200/month) and tuition fee reimbursement for post-matric education (Class 11 through PG), via Digital Gujarat portal.",
  description:
    "The SEBC (Socially and Educationally Backward Classes) Post-Matric Scholarship Scheme is a Gujarat state government initiative providing financial support to OBC/SEBC students from Gujarat for post-matric education. The scheme covers a maintenance allowance that varies by course level and hosteller/day-scholar status, plus tuition fee reimbursement up to state-notified ceilings. Applications are managed through the Digital Gujarat portal.",
  category: "social-welfare",
  level: "state",
  states: ["gujarat"],
  eligibility: [
    {
      label: "Residence",
      value:
        "Permanent resident (domicile) of Gujarat",
      type: "residence",
    },
    {
      label: "Caste category",
      value:
        "Must belong to the Socially and Educationally Backward Class (SEBC/OBC) as per Gujarat\u2019s list",
      type: "caste-category",
    },
    {
      label: "Education level",
      value:
        "Enrolled in a recognised institution for post-matric education (Class 11 and above, including diploma, UG, and PG)",
      type: "education",
    },
    {
      label: "Annual family income (standard)",
      value:
        "\u2264 \u20B92,50,000 for standard post-matric scholarship",
      type: "income",
    },
    {
      label: "Annual family income (higher rate)",
      value:
        "Up to \u20B96,00,000 for higher rate scholarship",
      type: "income",
    },
    {
      label: "Exclusion",
      value:
        "Must not hold another scholarship simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "Day scholars \u2014 maintenance allowance per month: Class 11\u201312 \u20B9150, Degree/Diploma \u20B9300, Professional/Technical \u20B9700",
    "Hostellers \u2014 maintenance allowance per month: Class 11\u201312 \u20B9350, Degree/Diploma \u20B9700, Professional/Technical \u20B91,200",
    "Tuition fee reimbursement (actual fees up to state-notified ceilings)",
    "Disbursed via Direct Benefit Transfer (DBT) through the Digital Gujarat portal",
  ],
  requiredDocuments: [
    { name: "Gujarat domicile certificate", mandatory: true },
    { name: "SEBC/OBC caste certificate (Gujarat state)", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Previous year mark sheets", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Admission / bonafide certificate", mandatory: true },
    { name: "Bank passbook", mandatory: true },
  ],
  officialPortalUrl: "https://www.digitalgujarat.gov.in/",
  ministry:
    "Social Justice & Empowerment Department, Government of Gujarat",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "SEBC",
    "OBC",
    "Gujarat",
    "state scholarship",
    "post-matric",
    "fee waiver",
    "maintenance allowance",
    "Digital Gujarat",
    "DBT",
    "backward class",
    "social welfare",
  ],
  faqs: [
    {
      q: "Who is eligible for the SEBC Post-Matric Scholarship?",
      a: "Permanent residents of Gujarat belonging to the Socially and Educationally Backward Class (SEBC/OBC), enrolled in post-matric education (Class 11 and above), with annual family income of \u20B92.5 lakh or less (up to \u20B96 lakh for a higher rate).",
    },
    {
      q: "How much is the maintenance allowance?",
      a: "Day scholars receive \u20B9150/month (Class 11\u201312), \u20B9300/month (Degree/Diploma), or \u20B9700/month (Professional/Technical). Hostellers receive \u20B9350/month (Class 11\u201312), \u20B9700/month (Degree/Diploma), or \u20B91,200/month (Professional/Technical).",
    },
    {
      q: "Does the scheme cover tuition fees?",
      a: "Yes, in addition to the maintenance allowance, tuition fees are reimbursed up to the state-notified ceilings for the course.",
    },
    {
      q: "Can I apply if I already have another scholarship?",
      a: "No. Students must not hold another scholarship simultaneously to be eligible for the SEBC Post-Matric Scholarship.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the Digital Gujarat Scholarship portal (digitalgujarat.gov.in), register using Aadhaar and mobile OTP, select the SEBC Post-Matric Scholarship Scheme, fill in your details, upload the required documents, and submit before the notified deadline.",
    },
    {
      q: "What documents are needed to apply?",
      a: "Gujarat domicile certificate, SEBC/OBC caste certificate, income certificate, previous year mark sheets, Aadhaar card, admission/bonafide certificate, and bank passbook.",
    },
  ],
  source: "sample",
};
