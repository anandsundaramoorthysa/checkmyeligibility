import type { Scheme } from "@/lib/types";

export const indianOilAcademicScholarshipScheme: Scheme = {
  id: "indian-oil-academic-scholarship-scheme",
  slug: "indian-oil-iocl-academic-scholarship-scheme",
  name: "Indian Oil (IOCL) Academic Scholarship Scheme",
  shortName: "IOCL Scholarship",
  summary:
    "Merit-cum-means scholarship of \u20B91,000 to \u20B93,000 per month for 2,600 meritorious students across India pursuing 10+2, ITI, Engineering, MBBS, or MBA courses.",
  description:
    "The Indian Oil Academic Scholarship Scheme is a flagship initiative by Indian Oil Corporation Limited (IOCL), India's largest commercial enterprise, to provide financial assistance to meritorious students from economically weaker sections. The scheme awards 2,600 scholarships every year across five streams — 2,000 for 10+/ITI students, 300 for Engineering students, 200 for MBBS students, and 100 for MBA students. Students are selected on a 'merit-cum-means' basis, with special encouragement for girl students and persons with disabilities. The scholarship amount is \u20B91,000 per month for 10+/ITI students (2-year duration) and \u20B93,000 per month for Engineering, MBBS, and MBA students (4 years for Engineering/MBBS, 2 years for MBA). Applicants must be Indian citizens aged 15-30 years with a minimum of 65% marks (60% for SC/ST/OBC/Girls, 50% for PwD). The annual family income must not exceed \u20B91,00,000. Applications are accepted online through the IOCL scholarship portal.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Age",
      value: "15 to 30 years (relaxation: 10 years for PwD, 5 years for SC/ST, 3 years for OBC)",
      type: "age",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B91,00,000 per annum",
      type: "income",
    },
    {
      label: "Academic merit (General)",
      value: "Minimum 65% marks in qualifying examination",
      type: "education",
    },
    {
      label: "Academic merit (SC/ST/OBC/Girls)",
      value: "Minimum 60% marks in qualifying examination",
      type: "education",
    },
    {
      label: "Academic merit (PwD)",
      value: "Minimum 50% marks in qualifying examination",
      type: "education",
    },
    {
      label: "Course enrollment",
      value:
        "Must be a first-year student in 10+/ITI (2-year course), Engineering (BE/B.Tech), MBBS, or MBA",
      type: "education",
    },
  ],
  benefits: [
    "\u20B91,000 per month for 10+ and ITI students (duration: 2 years)",
    "\u20B93,000 per month for Engineering students (duration: 4 years)",
    "\u20B93,000 per month for MBBS students (duration: 4 years)",
    "\u20B93,000 per month for MBA students (duration: 2 years)",
    "Total of 2,600 scholarships awarded every year",
    "49.5% seats reserved for SC/ST/OBC students",
    "Special encouragement for girl students and persons with disabilities",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Mark sheet of qualifying examination (Class 10 / Class 12 / Graduation)", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    {
      name: "Caste Certificate (SC/ST/OBC)",
      mandatory: false,
      note: "Required if applicable for reservation",
    },
    { name: "Bank Passbook (student's own account)", mandatory: true },
    { name: "Admission / Bonafide Certificate from institution", mandatory: true },
    { name: "Photograph", mandatory: true },
    {
      name: "Disability Certificate (PwD)",
      mandatory: false,
      note: "Required if applicable",
    },
  ],
  officialPortalUrl: "https://iocl.com/pages/indianoil-academic-scholarships-overview",
  ministry: "Indian Oil Corporation Limited (IOCL) / Ministry of Petroleum and Natural Gas",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "IOCL",
    "Indian Oil",
    "merit-cum-means",
    "engineering",
    "MBBS",
    "MBA",
    "ITI",
    "10+2",
    "central",
    "public sector",
    "women",
    "PwD",
  ],
  faqs: [
    {
      q: "What is the Indian Oil Academic Scholarship?",
      a: "A merit-cum-means scholarship by Indian Oil Corporation Limited (IOCL) providing financial assistance of \u20B91,000 to \u20B93,000 per month to 2,600 meritorious students across India pursuing 10+/ITI, Engineering, MBBS, or MBA courses.",
    },
    {
      q: "How many scholarships are awarded each year?",
      a: "2,600 scholarships — 2,000 for 10+/ITI, 300 for Engineering, 200 for MBBS, and 100 for MBA students.",
    },
    {
      q: "What is the scholarship amount?",
      a: "\u20B91,000/month for 10+/ITI (2 years) and \u20B93,000/month for Engineering/MBBS (4 years) and MBA (2 years).",
    },
    {
      q: "Who is eligible to apply?",
      a: "Indian citizens aged 15-30 years, first-year students in 10+/ITI/Engineering/MBBS/MBA, with minimum 65% marks (60% for SC/ST/OBC/Girls, 50% for PwD) and family income \u2264 \u20B91,00,000.",
    },
    {
      q: "How do I apply for the IOCL Scholarship?",
      a: "Visit the IOCL scholarship portal (iocl.com), fill the online application form during the application window (typically August-October), and submit with required documents.",
    },
    {
      q: "Can I avail this scholarship along with another scholarship?",
      a: "No. Scholarship holders under this scheme cannot avail scholarship under any other scheme. Also, children of IOCL employees, its Joint Venture and Subsidiary companies are not eligible.",
    },
  ],
  source: "sample",
};
