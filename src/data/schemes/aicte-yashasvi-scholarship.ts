import type { Scheme } from "@/lib/types";

export const aicteYashasviScholarship: Scheme = {
  id: "aicte-yashasvi-scholarship",
  slug: "aicte-yashasvi-scholarship-scheme-mrdzdhlg",
  name: "AICTE \u2013 Yashasvi Scholarship Scheme",
  shortName: "AICTE Yashasvi",
  summary:
    "\u20B950,000 per year for Degree (UG) and \u20B930,000 per year for Diploma students pursuing core engineering branches at AICTE-approved institutions, from families with annual income below \u20B98 lakh.",
  description:
    "AICTE Yashasvi is a central merit-cum-means assistance program initiated by the All India Council for Technical Education (AICTE). The scheme supports highly meritorious students from financially weak backgrounds pursuing technical education in core branches of engineering \u2014 Civil, Mechanical, Chemical, Electrical, and Electronics. It covers students enrolled in the first year of a full-time Degree or Diploma programme, as well as second-year students admitted via lateral entry, at any AICTE-approved institution. The scholarship amount is \u20B950,000 per annum for Degree (UG) students and \u20B930,000 per annum for Diploma students, disbursed through the National Scholarship Portal (NSP) via Direct Benefit Transfer (DBT).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic Status",
      value:
        "Enrolled in the 1st year of a full-time Degree/Diploma programme or 2nd year via Lateral Entry at an AICTE-approved institution",
      type: "education",
    },
    {
      label: "Stream",
      value:
        "Restricted to Core Engineering/Technology branches (Civil, Mechanical, Chemical, Electrical, and Electronics)",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Below \u20B98,00,000 per annum \u2014 a valid income certificate issued by a competent state authority is required",
      type: "income",
    },
    {
      label: "Exclusion",
      value:
        "Not eligible if receiving benefits from any other state or central scholarship for the same course",
      type: "other",
    },
  ],
  benefits: [
    "\u20B950,000 per annum for Degree (UG) students",
    "\u20B930,000 per annum for Diploma students",
    "Available for the full duration of the course (up to 4 years for Degree; up to 3 years for Diploma)",
    "Disbursed annually through DBT via the National Scholarship Portal",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card & APAAR ID / DigiLocker ID", mandatory: true },
    {
      name: "10th & 12th Class Marksheets",
      mandatory: true,
      note: "Diploma marksheets required for Lateral Entry students",
    },
    {
      name: "Family Income Certificate",
      mandatory: true,
      note: "Issued by a competent state authority",
    },
    {
      name: "Current Course Admission Letter / Fee Receipt",
      mandatory: true,
    },
    {
      name: "Bonafide Student Certificate",
      mandatory: true,
      note: "Signed by the Institute Principal",
    },
    {
      name: "Aadhaar-seeded Bank Passbook",
      mandatory: true,
      note: "Showing Account Number and IFSC",
    },
  ],
  officialPortalUrl: "https://yashasvi.aicte-india.org/",
  ministry:
    "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "merit",
    "means",
    "AICTE",
    "Yashasvi",
    "degree",
    "diploma",
    "core engineering",
    "civil",
    "mechanical",
    "chemical",
    "electrical",
    "electronics",
    "NSP",
    "DBT",
    "polytechnic",
    "lateral entry",
  ],
  faqs: [
    {
      q: "Who is eligible for the AICTE Yashasvi Scholarship?",
      a: "Students enrolled in the first year (or second year via lateral entry) of a full-time Degree or Diploma programme in core engineering branches at an AICTE-approved institution, whose family annual income does not exceed \u20B98 lakh.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "Degree (UG) students receive \u20B950,000 per annum and Diploma students receive \u20B930,000 per annum, disbursed through Direct Benefit Transfer (DBT) via the National Scholarship Portal.",
    },
    {
      q: "Can I apply if I am already receiving another scholarship?",
      a: "No. Students receiving benefits from any other state or central scholarship for the same course are not eligible for the AICTE Yashasvi Scholarship.",
    },
    {
      q: "What engineering branches are covered?",
      a: "The scheme is restricted to core Engineering/Technology branches: Civil, Mechanical, Chemical, Electrical, and Electronics.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the official AICTE Yashasvi Portal (yashasvi.aicte-india.org), register using your APAAR ID or DigiLocker credentials, complete your profile, upload documents, submit online, and then submit a hard copy with original documents to your college's Institute Nodal Officer (INO) before the deadline.",
    },
    {
      q: "Is renewal required each year?",
      a: "Yes. Students must submit a renewal application on the National Scholarship Portal each academic year along with updated documents and a passing certificate.",
    },
  ],
  source: "sample",
};
