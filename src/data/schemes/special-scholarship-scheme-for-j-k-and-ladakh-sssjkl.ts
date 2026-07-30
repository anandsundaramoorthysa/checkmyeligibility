import type { Scheme } from "@/lib/types";

export const specialScholarshipSchemeForJKAndLadakhSssjkl: Scheme = {
  id: "special-scholarship-scheme-for-j-k-and-ladakh-sssjkl",
  slug: "special-scholarship-scheme-for-j-k-and-ladakh",
  name: "Special Scholarship Scheme for J&K and Ladakh (SSSJKL)",
  shortName: "SSSJKL",
  summary:
    "\u20B930,000 to \u20B93 lakh per year scholarship for domicile residents of Jammu & Kashmir and Ladakh pursuing general, engineering, or medical undergraduate courses through AICTE.",
  description:
    "The Special Scholarship Scheme for J&K and Ladakh (SSSJKL), commonly known as PMSSS, is a Government of India initiative. Managed by the All India Council for Technical Education (AICTE), it provides 5,000 annual scholarships to help youth from Jammu & Kashmir and Ladakh pursue higher education in colleges across India.",
  category: "scholarship",
  level: "central",
  states: ["jammu-and-kashmir", "ladakh"],
  eligibility: [
    {
      label: "Domicile",
      value:
        "Must be a domicile resident of the Union Territories of J&K or Ladakh",
      type: "residence",
    },
    {
      label: "Academic qualification",
      value:
        "Must have passed the 10+2 examination from JKBOSE or a CBSE-affiliated school located within J&K or Ladakh",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B98,00,000",
      type: "income",
    },
    {
      label: "Course",
      value:
        "Must be applying for general, engineering, or medical (including BDS and equivalent) undergraduate courses",
      type: "education",
    },
  ],
  benefits: [
    "Scholarship of \u20B930,000 to up to \u20B93 lakh per year",
    "Stipend for living expenses",
    "Fee waiver for tuition and academic fees",
    "Hostel / Accommodation assistance",
    "Available for the full duration of the undergraduate course",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Scanned signature", mandatory: true },
    {
      name: "Domicile certificate of Jammu & Kashmir or Ladakh",
      mandatory: true,
    },
    { name: "Class 10th marksheet / SSC certificate", mandatory: true },
    { name: "Class 12th marksheet", mandatory: true },
    {
      name: "Polytechnic diploma certificate",
      mandatory: false,
      note: "For lateral entry applicants only",
    },
    {
      name: "Family income certificate issued by the competent authority",
      mandatory: true,
    },
    { name: "Aadhaar card", mandatory: true },
    {
      name: "Category / Caste certificate (SC / ST / SEBC / EWS)",
      mandatory: false,
      note: "If applicable",
    },
    {
      name: "Disability certificate",
      mandatory: false,
      note: "For PwD candidates with 40% or more disability",
    },
    {
      name: "Entrance exam scorecard (JEE, NEET, CUET, CLAT, or NATA)",
      mandatory: false,
      note: "If applicable",
    },
    {
      name: "College allotment letter issued by AICTE or counseling authority",
      mandatory: false,
      note: "Post-allotment document",
    },
    {
      name: "Official joining report signed by the head of the allotted college",
      mandatory: false,
      note: "Post-allotment document",
    },
    { name: "College fee receipt", mandatory: false, note: "Post-allotment document" },
    { name: "Institutional student ID card", mandatory: false, note: "Post-allotment document" },
    {
      name: "Bank passbook / Cancelled cheque linked to Aadhaar",
      mandatory: false,
      note: "Post-allotment document",
    },
  ],
  officialPortalUrl: "https://www.aicte.gov.in/index.php/",
  ministry:
    "All India Council for Technical Education (AICTE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "SSSJKL",
    "PMSSS",
    "J&K",
    "Ladakh",
    "AICTE",
    "undergraduate",
    "engineering",
    "medical",
    "JKBOSE",
    "central",
    "stipend",
    "fee waiver",
    "hostel",
    "domicile",
  ],
  faqs: [
    {
      q: "Who is eligible for the SSSJKL / PMSSS scholarship?",
      a: "Domicile residents of J&K or Ladakh who have passed 10+2 from JKBOSE or a CBSE school in J&K/Ladakh, with annual family income below \u20B98,00,000, applying for general, engineering, or medical undergraduate courses.",
    },
    {
      q: "What is the scholarship amount?",
      a: "The scholarship ranges from \u20B930,000 to up to \u20B93 lakh per year, covering tuition fees, hostel accommodation, stipend, and other academic expenses.",
    },
    {
      q: "How many scholarships are awarded each year?",
      a: "AICTE provides 5,000 scholarships annually under this scheme.",
    },
    {
      q: "What courses are covered under this scheme?",
      a: "General undergraduate courses, engineering (B.E. / B.Tech), and medical courses including BDS and equivalent programmes are covered.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Register on the official AICTE JK Scholarship Portal during the application cycle (spring/summer), submit the initial application with required documents, visit a designated Facilitation Center for document verification, participate in online AICTE counseling, and finally report to your allotted college.",
    },
  ],
  source: "sample",
};
