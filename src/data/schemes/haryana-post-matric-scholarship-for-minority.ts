import type { Scheme } from "@/lib/types";

export const haryanaPostMatricScholarshipForMinority: Scheme = {
  id: "haryana-post-matric-scholarship-for-minority",
  slug: "haryana-post-matric-scholarship-for-minority",
  name: "Haryana Post Matric Scholarship for Minority",
  shortName: "Haryana Minority Scholarship",
  summary:
    "Admission/tuition fees up to ₹10,000 p.a. plus monthly maintenance allowance for minority community students in Haryana with family income ≤ ₹2,00,000 p.a.",
  description:
    "Launched under the Prime Minister's New 15 Point Programme for the Welfare of Minorities, the Post-Matric Scholarship for Students Belonging to the Minority Communities by the Ministry of Minority Affairs aims to provide better opportunities for higher education to meritorious students from minority communities. Through this scheme, scholarships including admission fees, tuition fees, and maintenance allowance are provided to students from Muslim, Christian, Sikh, Buddhist, Jain, and Zoroastrian (Parsi) communities. The State Government of Haryana implements the scheme in collaboration with the Union Ministry of Minority Affairs.",
  category: "scholarship",
  level: "state",
  states: ["haryana"],
  eligibility: [
    {
      label: "Minority community",
      value: "Must belong to Muslim, Christian, Sikh, Buddhist, Jain, or Zoroastrian (Parsi) community",
      type: "other",
    },
    {
      label: "Minimum marks",
      value: "Must have secured minimum 50% marks in the previous final examination",
      type: "education",
    },
    {
      label: "Family income",
      value: "Annual family income must not exceed ₹2,00,000 from all sources",
      type: "income",
    },
    {
      label: "Enrolment",
      value: "Must be a regular student in a government or private higher secondary school/college/university in Haryana",
      type: "education",
    },
    {
      label: "Single scholarship",
      value: "Must not be availing any other scholarship for the same purpose",
      type: "other",
    },
  ],
  benefits: [
    "Admission and tuition fees up to ₹7,000 per annum for Class 11-12",
    "Admission and tuition fees up to ₹10,000 per annum for Technical/Vocational courses",
    "Admission and tuition fees up to ₹3,000 per annum for UG/PG courses",
    "Monthly maintenance allowance of ₹230 to ₹1,200 per month depending on course and hosteller/day scholar status",
    "30% scholarships earmarked for girl students",
    "Priority to students from BPL families",
  ],
  requiredDocuments: [
    { name: "Student photograph", mandatory: true },
    { name: "Institution verification form", mandatory: true },
    { name: "Self declaration of income certificate", mandatory: true },
    { name: "Self declaration of community certificate", mandatory: true },
    { name: "Previous academic year marksheet", mandatory: true },
    { name: "Current year fee receipt", mandatory: true },
    { name: "Bank account proof in student's name", mandatory: true },
    { name: "Residential certificate", mandatory: true },
    { name: "Aadhaar Card", mandatory: false },
  ],
  officialPortalUrl: "https://harchhatravratti.highereduhry.ac.in/",
  ministry: "Ministry of Minority Affairs, Government of India (implemented by Government of Haryana)",
  applicationMode: ["online"],
  tags: [
    "haryana",
    "post-matric",
    "minority",
    "scholarship",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Zoroastrian",
    "Parsi",
    "state scheme",
    "NSP",
    "maintenance allowance",
  ],
  faqs: [
    {
      q: "What is the Haryana Post Matric Scholarship for Minority?",
      a: "A state-level scholarship providing admission/tuition fees up to ₹10,000 p.a. and monthly maintenance allowance for minority community students in Haryana pursuing post-matric education.",
    },
    {
      q: "Who is eligible?",
      a: "Students from Muslim, Christian, Sikh, Buddhist, Jain, or Parsi communities, with minimum 50% marks in the previous exam, family income ≤ ₹2,00,000 p.a., and enrolled as a regular student in a Haryana institution.",
    },
    {
      q: "What are the fee benefits?",
      a: "Tuition fees up to ₹7,000 p.a. (11-12), ₹10,000 p.a. (Technical/Vocational), and ₹3,000 p.a. (UG/PG). Monthly maintenance allowance ranges from ₹230 to ₹1,200.",
    },
    {
      q: "How do I apply?",
      a: "Visit the National Scholarship Portal (NSP), register or login, select Post-Matric Scholarship for Minorities under Ministry of Minority Affairs, fill in details, upload documents, and submit.",
    },
    {
      q: "Is there preference for any category?",
      a: "Yes, priority is given to BPL families and 30% of scholarships are earmarked for girl students.",
    },
  ],
  source: "sample",
};
