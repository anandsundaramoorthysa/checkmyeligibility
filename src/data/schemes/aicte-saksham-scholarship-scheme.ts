import type { Scheme } from "@/lib/types";

export const aicteSakshamScholarshipScheme: Scheme = {
  id: "aicte-saksham-scholarship-scheme",
  slug: "aicte-saksham-scholarship-scheme-mr9geqn9",
  name: "AICTE Saksham Scholarship Scheme",
  shortName: "AICTE Saksham",
  summary:
    "\u20B950,000 per year scholarship for differently-abled students (\u226540% disability) pursuing technical education at AICTE-approved institutions, disbursed via DBT through the National Scholarship Portal.",
  description:
    "Scholarship for differently-abled students pursuing technical education. The AICTE Saksham Scholarship Scheme supports students with disabilities enrolled in AICTE-approved institutions across India, covering tuition and study-related expenses to ensure equal access to technical education.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Disability",
      value:
        "Disability of at least 40%, certified by a competent government-recognised medical authority",
      type: "other",
    },
    {
      label: "Institution",
      value: "Admission in an AICTE-approved college or university",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Below \u20B98,00,000 per annum \u2014 a valid income certificate issued by the state / UT government is required",
      type: "income",
    },
  ],
  benefits: [
    "\u20B950,000 per annum for every year of study",
    "Maximum 4 years for students admitted to the first year of a degree programme",
    "Maximum 3 years for students admitted via lateral entry to the second year",
    "Covers college fee, computer, books, stationery, equipment, and software",
    "Disbursed annually through DBT (Direct Benefit Transfer) via the National Scholarship Portal",
  ],
  requiredDocuments: [
    { name: "Disability Certificate (minimum 40%)", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    { name: "Admission Proof", mandatory: true },
    { name: "Bank Passbook", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Copy of SSC/10th certificate & mark sheet", mandatory: true },
    {
      name: "Copy of HSC/12th certificate & mark sheet",
      mandatory: false,
      note: "Required in case of Degree level admission",
    },
    {
      name: "Copy of ITI certificate & mark sheet",
      mandatory: false,
      note: "Required in case of Lateral Entry for Diploma level",
    },
    {
      name: "Copy of Diploma certificate & mark sheet",
      mandatory: false,
      note: "Required in case of Lateral Entry for Degree level",
    },
    {
      name: "Caste Certificate",
      mandatory: false,
      note: "Required if applicable",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "differently abled",
    "divyang",
    "AICTE",
    "Saksham",
    "technical education",
    "NSP",
    "DBT",
    "degree",
    "diploma",
    "lateral entry",
  ],
  faqs: [
    {
      q: "What is the AICTE Saksham Scholarship Scheme?",
      a: "It is a scholarship by AICTE for differently-abled students (\u226540% disability) pursuing technical education at AICTE-approved institutions. It provides \u20B950,000 per annum to cover college fees, books, equipment, and other study-related expenses.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Students with at least 40% disability, admitted to an AICTE-approved college, with a family income below \u20B98 lakh per annum. Both degree and diploma students (including lateral entry) can apply.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "\u20B950,000 per annum for every year of study \u2014 up to 4 years for first-year degree students and up to 3 years for lateral entry diploma students.",
    },
    {
      q: "What documents are required?",
      a: "Disability Certificate, Aadhaar Card, Income Certificate, Admission Proof, Bank Passbook, Photograph, SSC/10th certificate & mark sheet, and additional certificates for degree-level or lateral entry students.",
    },
    {
      q: "How do I apply?",
      a: "Step 1: Register on the NSP website (scholarships.gov.in) with face eKYC to get a 14-digit OTR ID. Step 2: Log in, select AICTE Saksham Scholarship, fill details, upload documents, and submit. Step 3: College verifies (Level 1), then AICTE approves for direct payment (Level 2).",
    },
  ],
  source: "sample",
};
