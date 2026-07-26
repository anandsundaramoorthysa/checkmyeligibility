import type { Scheme } from "@/lib/types";

export const necMeritScholarship: Scheme = {
  id: "nec-merit-scholarship",
  slug: "nec-merit-scholarship-north-eastern-council-mr9m7ghi",
  name: "North Eastern Council (NEC) Merit Scholarship",
  shortName: "NEC Merit Scholarship",
  summary:
    "Merit-based scholarship of \u20B920,000 to \u20B930,000 per year for students from North Eastern States pursuing Diploma, Degree, Postgraduate, M.Phil., or Ph.D. courses at recognised institutions across India.",
  description:
    "The North Eastern Council (NEC) Merit Scholarship is a 100% centrally funded scheme operated by the Ministry of Development of North Eastern Region (DoNER), Government of India. The scheme aims to promote higher education and provide financial assistance to meritorious students from the eight North Eastern States (Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura). It covers Diploma, Degree, Postgraduate, and M.Phil./Ph.D. courses at recognised institutions across India. There are 1,600 scholarship seats available per year, and selection is purely on merit basis. The scholarship amount ranges from \u20B920,000 per year for Diploma courses to \u20B930,000 per year for M.Phil./Ph.D. courses. The scholarship is valid for the entire duration of the course, subject to renewal conditions. Applications are accepted online through the National Scholarship Portal (NSP).",
  category: "scholarship",
  level: "central",
  states: [
    "assam",
    "meghalaya",
  ],
  eligibility: [
    {
      label: "Domicile",
      value:
        "Must be a permanent resident of one of the eight North Eastern States: Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, or Tripura",
      type: "residence",
    },
    {
      label: "Academic merit (Diploma)",
      value:
        "Minimum 60% marks in HSLC/HSSLC/Secondary School Examination from a recognised State/Central board",
      type: "education",
    },
    {
      label: "Academic merit (Degree)",
      value:
        "Minimum 60% marks in HSSLC/Senior Secondary Examination from a recognised State/Central board",
      type: "education",
    },
    {
      label: "Academic merit (Postgraduate)",
      value:
        "Minimum 60% marks in any degree-level course (BA/BSc/BE/BTech/MBBS/LLB/BCA/BBA etc.) from a recognised university",
      type: "education",
    },
    {
      label: "Academic merit (M.Phil./Ph.D.)",
      value:
        "Minimum 60% marks in Postgraduate degree from a recognised university",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Must not exceed \u20B98,00,000 per annum from all sources",
      type: "income",
    },
  ],
  benefits: [
    "\u20B920,000 per year for Diploma courses",
    "\u20B922,000 per year for Degree courses (BA, B.Com, B.Sc, BBA, etc.)",
    "\u20B925,000 per year for Postgraduate courses",
    "\u20B930,000 per year for M.Phil./Ph.D. courses",
    "Scholarship valid for the entire duration of the course (subject to renewal)",
    "1,600 scholarship seats available per year",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Domicile / Permanent Resident Certificate of the NE State", mandatory: true },
    { name: "Mark sheets of qualifying examinations", mandatory: true },
    { name: "Income Certificate issued by competent authority", mandatory: true },
    { name: "Bank Passbook (student's own account with IFSC code)", mandatory: true },
    { name: "Admission / Bonafide Certificate from the institution", mandatory: true },
    { name: "Photograph", mandatory: true },
    {
      name: "Promotion Certificate",
      mandatory: false,
      note: "Required at the time of renewal",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Ministry of Development of North Eastern Region (DoNER) / North Eastern Council (NEC)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "North East",
    "NEC",
    "merit",
    "diploma",
    "degree",
    "postgraduate",
    "PhD",
    "M.Phil",
    "central",
    "NSP",
    "Arunachal Pradesh",
    "Assam",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Sikkim",
    "Tripura",
  ],
  faqs: [
    {
      q: "What is the NEC Merit Scholarship?",
      a: "A merit-based scholarship by the North Eastern Council (NEC) under the Ministry of DoNER, providing financial assistance to students from the eight North Eastern States pursuing higher education in recognised institutions across India.",
    },
    {
      q: "Which states are eligible?",
      a: "Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura.",
    },
    {
      q: "How much scholarship amount is provided?",
      a: "\u20B920,000/year for Diploma, \u20B922,000/year for Degree, \u20B925,000/year for Postgraduate, and \u20B930,000/year for M.Phil./Ph.D. courses.",
    },
    {
      q: "What is the minimum percentage required?",
      a: "Minimum 60% marks in the qualifying examination (HSLC/HSSLC for Diploma/Degree, degree-level for PG, and PG for M.Phil./Ph.D.).",
    },
    {
      q: "How do I apply for the NEC Merit Scholarship?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in), select the NEC Merit Scholarship Scheme, fill in the application form, upload the required documents, and submit before the deadline.",
    },
    {
      q: "Is renewal required every year?",
      a: "Yes. Students must renew their scholarship each academic year by maintaining satisfactory academic performance and submitting updated documents including a promotion certificate.",
    },
    {
      q: "Can I receive this scholarship along with another scholarship?",
      a: "No. Students already receiving scholarship or financial assistance from any other source are not eligible.",
    },
  ],
  source: "sample",
};
