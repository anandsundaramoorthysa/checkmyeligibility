import type { Scheme } from "@/lib/types";

export const swamiVivekanandaMeritCumMeansScholarshipWestBengal: Scheme = {
  id: "swami-vivekananda-merit-cum-means-scholarship-west-bengal",
  slug: "swami-vivekananda-merit-cum-means-scholarship-west-bengal",
  name: "Swami Vivekananda Merit-cum-Means Scholarship (West Bengal)",
  shortName: "SVMCM",
  summary:
    "Monthly scholarship of \u20B91,000\u2013\u20B98,000 for West Bengal students from Classes 11\u201312 to postgraduate level, with 60% minimum marks and family income below \u20B92.5 lakh per annum.",
  description:
    "The Swami Vivekananda Merit-cum-Means Scholarship (SVMCM), also known as the Bikash Bhavan Scholarship, is a flagship initiative of the Higher Education Department, Government of West Bengal. The scheme provides financial assistance to meritorious students from economically weaker families across the state, covering Higher Secondary (Classes 11\u201312), Undergraduate (UG), Postgraduate (PG), and professional courses including Engineering, Medical, Polytechnic, and Research levels (M.Phil/Ph.D). Scholarship amounts range from \u20B91,000 to \u20B98,000 per month depending on the course level. Selection is based on merit-cum-means criteria \u2014 students must have secured at least 60% marks in the last qualifying examination (53% for PG) and have a family income not exceeding \u20B92,50,000 per annum. The scheme is renewable each year subject to satisfactory academic performance and is administered through the online portal svmcm.wb.gov.in.",
  category: "scholarship",
  level: "state",
  states: ["west-bengal"],
  eligibility: [
    {
      label: "Domicile",
      value:
        "Must be a permanent resident of West Bengal \u2014 domicile / PRC certificate required",
      type: "residence",
    },
    {
      label: "Academic merit (HS / UG)",
      value:
        "Minimum 60% marks in aggregate in the last qualifying examination (Madhyamik for HS, HS for UG) from West Bengal Board",
      type: "education",
    },
    {
      label: "Academic merit (PG \u2014 General)",
      value:
        "Minimum 53% marks in the Honours subject at the undergraduate level",
      type: "education",
    },
    {
      label: "Academic merit (PG \u2014 Engineering / AICTE)",
      value:
        "Minimum 55% marks in Graduation from any State University or AICTE-approved institute in West Bengal",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Below \u20B92,50,000 per annum from all sources (not applicable for Board Toppers, Kanyashree K3, and M.Phil/Ph.D applicants)",
      type: "income",
    },
    {
      label: "Institution",
      value:
        "Must be enrolled in a full-time regular course at a recognised institution based in West Bengal (no distance / open learning)",
      type: "education",
    },
    {
      label: "Other scholarship",
      value:
        "Must not be availing any other government (central / state) scholarship or stipend for the same course",
      type: "other",
    },
  ],
  benefits: [
    "HS (Classes 11\u201312): \u20B91,000 per month",
    "UG Arts / Commerce: \u20B91,000 per month",
    "UG Science / UGC Professional: \u20B91,500 per month",
    "UG Engineering Degree / Medical Degree: \u20B95,000 per month",
    "Diploma / Polytechnic: \u20B91,500 per month",
    "PG Arts / Commerce: \u20B92,000 per month",
    "PG Science / UGC Professional: \u20B92,500 per month",
    "PG Engineering / AICTE Professional: \u20B95,000 per month",
    "Non-NET M.Phil: \u20B95,000 per month",
    "Non-NET Ph.D: \u20B98,000 per month",
    "Kanyashree K3 applicants (PG) get income proof waiver with relaxed 45% marks",
    "Renewable each year subject to minimum 60% marks (UG) or 50% marks (PG) at promotional examination",
  ],
  requiredDocuments: [
    {
      name: "West Bengal domicile / PRC certificate",
      mandatory: true,
    },
    {
      name: "Marksheet of the last qualifying examination",
      mandatory: true,
    },
    {
      name: "Family income certificate (from competent authority \u2014 MP/MLA or BDO)",
      mandatory: true,
      note: "Not required for Board Toppers, Kanyashree K3, and M.Phil/Ph.D applicants",
    },
    {
      name: "Aadhaar card",
      mandatory: true,
    },
    {
      name: "Bank passbook (first page with account details, IFSC, Aadhaar-seeded)",
      mandatory: true,
    },
    {
      name: "Bonafide certificate / admission receipt from institution",
      mandatory: true,
    },
    {
      name: "Passport-size photograph",
      mandatory: true,
    },
    {
      name: "Caste certificate",
      mandatory: false,
      note: "Required if applicable (SC / ST / OBC)",
    },
    {
      name: "Kanyashree ID",
      mandatory: false,
      note: "Required for Kanyashree K3 applicants",
    },
    {
      name: "Declaration for year gap (if applicable)",
      mandatory: false,
      note: "Required if qualifying exam year is not the current admission year",
    },
  ],
  officialPortalUrl: "https://svmcm.wb.gov.in/",
  ministry:
    "Higher Education Department, Government of West Bengal (also administered by West Bengal Minorities Development & Finance Corporation for minority students)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Swami Vivekananda",
    "SVMCM",
    "West Bengal",
    "merit-cum-means",
    "Bikash Bhavan",
    "HS",
    "undergraduate",
    "postgraduate",
    "engineering",
    "medical",
    "polytechnic",
    "M.Phil",
    "Ph.D",
    "Kanyashree",
    "K3",
    "state scheme",
    "income less than 2.5 lakh",
  ],
  faqs: [
    {
      q: "Who is eligible for the Swami Vivekananda Merit-cum-Means Scholarship?",
      a: "Permanent residents of West Bengal enrolled in full-time regular courses at recognised institutions within the state, with minimum 60% marks in the last qualifying examination (53% for PG Honours) and a family income below \u20B92,50,000 per annum.",
    },
    {
      q: "What is the scholarship amount for different courses?",
      a: "The monthly scholarship ranges from \u20B91,000 (HS / UG Arts/Commerce) to \u20B98,000 (Non-NET Ph.D). Engineering and Medical degree students receive \u20B95,000 per month, while PG Science students get \u20B92,500 per month.",
    },
    {
      q: "How do I apply for the SVMCM scholarship?",
      a: "Applications are submitted online at svmcm.wb.gov.in. Register with personal and academic details, upload the required documents, and submit before the deadline. Fresh applications typically open in November\u2013December each year.",
    },
    {
      q: "Can Kanyashree recipients apply?",
      a: "Yes. Kanyashree K3 applicants pursuing PG courses with minimum 45% marks are eligible and are exempted from submitting income proof.",
    },
    {
      q: "Is the scholarship renewable each year?",
      a: "Yes. Renewal requires submitting a fresh application each academic year with proof of promotion to the next class. Students must pass all semester examinations in the first attempt and maintain minimum 60% marks (UG) or 50% marks (PG).",
    },
    {
      q: "Can I avail this scholarship along with other government scholarships?",
      a: "No. SVMCM scholars cannot simultaneously receive any other central or state government scholarship or stipend for the same course of study.",
    },
    {
      q: "Are students studying outside West Bengal eligible?",
      a: "No. The scholarship is only for students enrolled in educational institutions based within the state of West Bengal.",
    },
  ],
  source: "sample",
};
