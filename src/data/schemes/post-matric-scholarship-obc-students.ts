import type { Scheme } from "@/lib/types";

export const postMatricScholarshipObcStudents: Scheme = {
  id: "post-matric-scholarship-for-obc-students",
  slug: "post-matric-scholarship-for-obc-students",
  name: "Post Matric Scholarship for OBC Students",
  shortName: "OBC Post-Matric Scholarship",
  summary:
    "Central government scholarship for Other Backward Class (OBC) students studying at post-matriculation level, covering maintenance allowance, tuition fees, and other charges.",
  description:
    "The Post Matric Scholarship for Other Backward Classes (OBC) is a centrally-sponsored scheme administered by the Ministry of Social Justice and Empowerment, Government of India. The scheme aims to provide financial assistance to OBC students studying in post-matriculation or post-secondary stage courses so that they can complete their education. The scholarship covers maintenance allowance, reimbursement of non-refundable fees charged by educational institutions, study tour charges, thesis typing/printing charges (for research scholars), and reader charges for blind students. Eligible students can apply through the National Scholarship Portal (NSP), and funds are transferred directly to the student's bank account via the Direct Benefit Transfer (DBT) mechanism. The scheme operates under a 60:40 funding sharing ratio between the Centre and the States/UTs (90:10 for NE states and special category states).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to the Other Backward Classes (OBC) as notified by the respective State/UT government and listed in the Central Government OBC list",
      type: "caste-category",
    },
    {
      label: "Income",
      value: "Annual income of parents/guardians from all sources must not exceed ₹1 lakh",
      type: "income",
    },
    {
      label: "Course Level",
      value:
        "Pursuing any post-matric course (Class 11 and above) at a government or private recognized institution. This includes ITI/Diploma, graduation, postgraduation, and professional/technical courses",
      type: "education",
    },
    {
      label: "Previous Marks",
      value: "No specific minimum percentage required, but students must be studying full-time and making satisfactory progress",
      type: "education",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
    {
      label: "Non-duplication",
      value: "Students receiving benefit under any other scholarship scheme for the same course are not eligible",
      type: "other",
    },
    {
      label: "Repetition",
      value: "No scholarship for repeating a year or for two courses simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "Maintenance Allowance: ₹230–₹1,200 per month depending on course level and day scholar/hosteller status",
    "Reimbursement of non-refundable fees charged by the institution",
    "Study tour charges up to ₹1,600 for degree and PG-level students",
    "Thesis typing and printing charges: ₹1,600 for research scholars",
    "Book allowance for correspondence course students: ₹1,200 per annum",
    "Reader charges for blind students: ₹160 per month",
    "Funds transferred directly via DBT to student's Aadhaar-linked bank account",
  ],
  requiredDocuments: [
    { name: "Completed application through National Scholarship Portal (NSP)", mandatory: true },
    { name: "OBC Certificate from competent authority (State/UT)", mandatory: true, note: "Must be within validity period" },
    { name: "Income Certificate from revenue authority confirming annual income ≤ ₹1 lakh", mandatory: true },
    { name: "Previous year marksheet / pass certificate", mandatory: true },
    { name: "Current year admission receipt / fee receipt from institution", mandatory: true },
    { name: "Aadhaar Card (UIDAI seeding mandatory for DBT)", mandatory: true },
    { name: "Bank passbook (Aadhaar-linked) showing account number and IFSC code", mandatory: true },
    { name: "Domicile or residential certificate", mandatory: true, note: "Issued by State/UT authority" },
    { name: "Passport-sized photographs", mandatory: true },
    { name: "Institution verification (by principal/head of institution)", mandatory: true },
    { name: "Hostel certificate (if availing hosteller allowance)", mandatory: false },
    { name: "Disability certificate (if applicable)", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Social Justice and Empowerment, Government of India",
  applicationMode: ["online"],
  tags: [
    "OBC",
    "other backward classes",
    "post-matric",
    "scholarship",
    "undergraduate",
    "postgraduate",
    "maintenance allowance",
    "fee reimbursement",
    "NSP",
    "DBT",
    "income-based",
    "centrally sponsored",
    "social justice",
  ],
  faqs: [
    {
      q: "Who is eligible for the OBC Post Matric Scholarship?",
      a: "OBC students (as notified by the State/UT government) whose parents' annual income from all sources does not exceed ₹1 lakh and who are pursuing full-time post-matriculation courses are eligible.",
    },
    {
      q: "What is the income limit for this scholarship?",
      a: "The annual family income from all sources must not exceed ₹1 lakh per annum.",
    },
    {
      q: "Does this scholarship cover professional courses like MBBS or Engineering?",
      a: "Yes. The scholarship covers all post-matriculation courses from Class 11 onwards, including diploma, degree, postgraduate, and professional/technical programmes such as MBBS, B.E./B.Tech., MBA, Law, and others.",
    },
    {
      q: "What is the maintenance allowance amount?",
      a: "The maintenance allowance ranges from ₹230 to ₹1,200 per month depending on the level of course (Class 11-12, graduation, PG) and whether the student is a day scholar or hosteller.",
    },
    {
      q: "Are tuition fees reimbursed?",
      a: "Yes, non-refundable fees charged by recognized institutions are reimbursed in full, subject to actuals and the course group.",
    },
    {
      q: "Can a student apply for both this scholarship and a state scholarship?",
      a: "No. A student already receiving benefit under another central or state scholarship for the same course is not eligible.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the National Scholarship Portal (NSP) at scholarships.gov.in during the application window (usually August to October). Upload required documents, get the application verified by your institution, and submit.",
    },
    {
      q: "Is an OBC certificate from any authority acceptable?",
      a: "No. The OBC certificate must be issued by the competent authority of the respective State/UT government, confirming the applicant's OBC status for central government purposes.",
    },
    {
      q: "What happens if I fail or repeat a year?",
      a: "The scholarship is discontinued if a student fails or takes an additional year beyond the normal course duration. No scholarship is given for a repeated year.",
    },
    {
      q: "Is Aadhaar seeding mandatory?",
      a: "Yes. Aadhaar seeding with the bank account is mandatory for DBT transfer of the scholarship amount. Ensure your bank account is linked to your Aadhaar before applying.",
    },
  ],
  source: "sample",
};
