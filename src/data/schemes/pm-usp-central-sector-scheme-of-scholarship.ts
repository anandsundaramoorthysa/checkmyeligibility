import type { Scheme } from "@/lib/types";

export const pmUspCentralSectorSchemeOfScholarship: Scheme = {
  id: "pm-usp-central-sector-scheme-of-scholarship",
  slug: "pradhan-mantri-uchchatar-shiksha-protsahan-pm-usp-csss-247",
  name: "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship for College and University Students #247",
  shortName: "PM-USP CSSS",
  summary:
    "Up to 82,000 fresh scholarships per year for meritorious students from families with income up to ₹4.5 lakh — ₹12,000/year at graduation, ₹20,000/year at post-graduation — awarded by the Ministry of Education based on Class XII board results.",
  description:
    "The Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship for College and University Students is a merit-cum-means scholarship scheme implemented by the Department of Higher Education, Ministry of Education, Government of India since 2008. The objective is to provide financial assistance to meritorious students from economically weaker families to meet a part of their day-to-day expenses while pursuing higher studies.\n\nA maximum of 82,000 fresh scholarships are awarded annually on the basis of Class XII board examination results. The scholarships are allocated amongst State Education Boards based on the state's population in the 18-25 age group, with 50% earmarked for girls. Slots are distributed among Humanities, Science, and Commerce streams in the ratio of 3:3:1, and distributed across reserved categories as per the Central Reservation Policy (15% SC, 7.5% ST, 27% OBC, and 5% horizontal reservation for PwD).\n\nThe scholarship is renewable year-to-year up to post-graduate level, with renewal contingent on securing at least 50% marks in the annual examination and maintaining at least 75% attendance. The total tenure does not exceed 5 years. Disbursement is done via Direct Benefit Transfer (DBT) into the student's own bank account.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Class XII performance",
      value:
        "Must be above the 80th percentile of successful candidates in the relevant stream from the respective Board of Examination in Class XII of 10+2 pattern or equivalent",
      type: "education",
    },
    {
      label: "Course type",
      value:
        "Must be pursuing a regular degree course (not correspondence, distance mode, or diploma courses) at a college/institution recognised by AICTE and the respective regulatory bodies",
      type: "education",
    },
    {
      label: "Family income",
      value:
        "Gross parental/family income must not exceed ₹4,50,000 per annum. Income certificate is required only for fresh applicants",
      type: "income",
    },
    {
      label: "Other scholarships",
      value:
        "Must not be availing benefit of any other scholarship scheme, including state-run scholarship schemes, fee waiver, or reimbursement schemes",
      type: "other",
    },
    {
      label: "Admission timing",
      value:
        "Students who have completed Class XII in the last academic year and got admission in the 1st year of a regular graduation course are eligible for fresh scholarship. Students who took a drop after Class XII are not eligible",
      type: "other",
    },
    {
      label: "Renewal criteria",
      value:
        "Must secure at least 50% marks in the annual examination and maintain at least 75% attendance for scholarship renewal in subsequent years",
      type: "education",
    },
  ],
  benefits: [
    "₹12,000 per annum for the first three years of graduation (college and university courses)",
    "₹20,000 per annum at post-graduation level",
    "₹12,000 per annum for B.Tech/B.Engg. in 1st, 2nd, and 3rd year; ₹20,000 in 4th year",
    "₹20,000 per annum in the 4th and 5th year for 5-year integrated/professional courses",
    "Maximum of 82,000 fresh scholarships awarded annually (50% earmarked for girls)",
    "Renewable year-to-year up to post-graduate level for a total duration not exceeding 5 years",
    "Disbursed directly to the student's bank account via Direct Benefit Transfer (DBT)",
    "Reservation benefits as per Central Reservation Policy (15% SC, 7.5% ST, 27% OBC, 5% PwD)",
  ],
  requiredDocuments: [
    {
      name: "Class XII Marksheet",
      mandatory: true,
      note: "Showing position in the 80th percentile of successful candidates in the relevant stream",
    },
    {
      name: "Family Income Certificate",
      mandatory: true,
      note: "Certifying gross annual family income up to ₹4,50,000; required only for fresh applicants",
    },
    {
      name: "Category/Caste Certificate (SC/ST/OBC)",
      mandatory: false,
      note: "Required if applying under reserved category quotas",
    },
    {
      name: "Disability Certificate",
      mandatory: false,
      note: "Required if applying under PwD horizontal reservation (40% or more disability)",
    },
    {
      name: "Aadhaar Card",
      mandatory: true,
      note: "Linked to the student's bank account",
    },
    {
      name: "Bank Passbook (student's own account)",
      mandatory: true,
      note: "Savings bank account in the student's own name, Aadhaar-seeded for DBT",
    },
    {
      name: "Institution Bonafide / Admission Letter",
      mandatory: true,
      note: "Confirming enrolment in a regular degree course with a valid AISHE code",
    },
    {
      name: "Previous Year Marksheet (for renewal)",
      mandatory: false,
      note: "Required for renewal applicants showing at least 50% marks in the annual examination",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Department of Higher Education, Ministry of Education, Government of India",
  applicationMode: ["online"],
  tags: [
    "PM-USP",
    "CSSS",
    "scholarship",
    "merit",
    "means",
    "college",
    "university",
    "graduation",
    "post-graduation",
    "engineering",
    "medical",
    "NSP",
    "national scholarship portal",
    "all-india",
    "central",
    "DBT",
    "AICTE",
    "education",
    "Ministry of Education",
  ],
  faqs: [
    {
      q: "What is the PM-USP Central Sector Scheme of Scholarship?",
      a: "It is a merit-cum-means scholarship by the Ministry of Education providing financial assistance to meritorious students from families with income up to ₹4.5 lakh. Up to 82,000 fresh scholarships are awarded annually based on Class XII board results.",
    },
    {
      q: "How much scholarship amount is provided?",
      a: "₹12,000 per annum for the first three years of graduation, ₹20,000 per annum at post-graduation level, and ₹20,000 in the 4th/5th year for 5-year integrated professional courses. B.Tech/B.Engg. students get ₹12,000 for 3 years and ₹20,000 in the 4th year.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Students who are in the top 20% (80th percentile) of their Class XII board results in the relevant stream, pursuing a regular degree course, with family income up to ₹4.5 lakh per annum, and not receiving any other scholarship.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the National Scholarship Portal (scholarships.gov.in). Applications are verified at two levels: first by the institute, then by the State Higher Education Department. No offline applications are accepted.",
    },
    {
      q: "How is the scholarship renewed each year?",
      a: "Renewal requires securing at least 50% marks in the annual examination and maintaining at least 75% attendance. Renewal applications must be submitted on NSP before the cut-off date. The scholarship is renewable up to post-graduate level for a total of 5 years.",
    },
    {
      q: "Can I receive this scholarship along with other scholarships?",
      a: "No. Students already receiving any other scholarship (including state-run schemes, fee waivers, or reimbursement schemes) are not eligible for this scholarship.",
    },
    {
      q: "How is the scholarship amount disbursed?",
      a: "The scholarship is disbursed directly into the student's own savings bank account via Direct Benefit Transfer (DBT). Students can track payment status on the PFMS portal.",
    },
  ],
  source: "sample",
};
