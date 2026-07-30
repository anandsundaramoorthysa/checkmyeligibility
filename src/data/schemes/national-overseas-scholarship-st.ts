import type { Scheme } from "@/lib/types";

export const nationalOverseasScholarshipSt: Scheme = {
  id: "358",
  slug: "national-overseas-scholarship-st",
  name: "National Overseas Scholarship for Scheduled Tribes (ST) Students",
  shortName: "NOS-ST",
  summary:
    "A central sector scheme by the Ministry of Tribal Affairs providing full financial support to 20 ST students annually for pursuing Master\u2019s, PhD, and Post-Doctoral research abroad at top QS-ranked universities.",
  description:
    "The National Overseas Scholarship (NOS) for Scheduled Tribes (ST) Students is a prestigious central sector scheme administered by the Ministry of Tribal Affairs, Government of India. The scheme provides comprehensive financial assistance to meritorious ST students for pursuing higher education abroad, including Master\u2019s degree, PhD, and Post-Doctoral research programmes at top QS World Ranked Universities (Top 1000). A total of 20 scholarships are awarded every year, of which 17 are for ST candidates and 3 are reserved for Particularly Vulnerable Tribal Groups (PVTG). At least 30% of scholarships are reserved for female candidates. The scholarship covers tuition fees, annual maintenance allowance of USD 15,400 (or \u00A39,900 in the UK), contingency and equipment allowance of USD 1,532 (or \u00A31,116 in the UK), economy class airfare, visa fees, medical insurance, and incidental journey expenses. The scheme is implemented through Indian Embassies/Missions abroad in collaboration with the Ministry of External Affairs. Selection is merit-based through an Expert Committee interview, and selected students are given up to 2 years to secure admission in a foreign university.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value: "Must belong to a Scheduled Tribe (ST) category. 3 of 20 slots reserved for PVTG candidates",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B96,00,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Age",
      value: "Maximum 32 years for Master\u2019s, 35 years for PhD, and 38 years for Post-Doctoral research (as of 1st July of selection year)",
      type: "age",
    },
    {
      label: "Academic performance",
      value: "Must have secured at least 55% marks in the qualifying examination",
      type: "education",
    },
    {
      label: "Course level",
      value: "Must be pursuing or seeking admission to Master\u2019s, PhD, or Post-Doctoral research at a recognised foreign university (Top 1000 QS World Ranking)",
      type: "education",
    },
    {
      label: "Exclusivity",
      value: "Must be the only child in the family availing this scholarship",
      type: "other",
    },
  ],
  benefits: [
    "Annual Maintenance Allowance: USD 15,400 (US/other countries) or \u00A39,900 (UK)",
    "Annual Contingency & Equipment Allowance: USD 1,532 (US) or \u00A31,116 (UK) for books, thesis preparation, and study tours",
    "Tuition Fees: Actual institutional fees covered in full",
    "Economy class airfare from India to the educational institution and return",
    "Visa fees as per actuals",
    "Medical insurance premium as per actuals",
    "Incidental journey expenses of USD 20 and local travel from airport to institution",
    "Poll tax as per actuals",
  ],
  requiredDocuments: [
    { name: "Scheduled Tribe (ST) certificate issued by competent authority", mandatory: true },
    { name: "PVTG certificate (if applying under PVTG quota)", mandatory: false },
    { name: "Proof of date of birth (Class 10 certificate/mark sheet)", mandatory: true },
    { name: "Mark sheets of all qualifying examinations", mandatory: true },
    { name: "Admission/offer letter from a foreign university (Top 1000 QS ranking)", mandatory: true },
    { name: "Annual family income certificate", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Valid passport copy", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Research proposal (for PhD applicants)", mandatory: false },
    { name: "Statement of Purpose", mandatory: false },
    { name: "IELTS/TOEFL score card", mandatory: false, note: "Required by most foreign universities for admission" },
  ],
  officialPortalUrl: "https://overseas.tribal.gov.in/",
  ministry: "Ministry of Tribal Affairs",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "overseas",
    "ST",
    "scheduled-tribe",
    "ministry-of-tribal-affairs",
    "central",
    "all-india",
    "masters",
    "phd",
    "post-doctoral",
    "abroad",
    "foreign-study",
    "merit",
    "pvtg",
  ],
  faqs: [
    {
      q: "Who is eligible for the National Overseas Scholarship for ST students?",
      a: "Scheduled Tribe (ST) students who have secured at least 55% in their qualifying exam, with a family income not exceeding \u20B96 lakh per annum, and who have secured admission (or are seeking admission) in a Top 1000 QS World Ranked University abroad for Master\u2019s, PhD, or Post-Doctoral research.",
    },
    {
      q: "How many scholarships are awarded each year?",
      a: "A total of 20 scholarships are awarded annually \u2014 17 for ST candidates and 3 reserved for Particularly Vulnerable Tribal Groups (PVTG). At least 30% of the awards are reserved for female candidates.",
    },
    {
      q: "What expenses does the scholarship cover?",
      a: "The scholarship covers tuition fees, annual maintenance allowance (USD 15,400 or \u00A39,900), contingency allowance (USD 1,532 or \u00A31,116), economy airfare, visa fees, medical insurance, poll tax, and incidental journey expenses.",
    },
    {
      q: "What is the age limit for this scholarship?",
      a: "Maximum 32 years for Master\u2019s programmes, 35 years for PhD, and 38 years for Post-Doctoral research, as of 1st July of the selection year.",
    },
    {
      q: "How do I apply for the NOS-ST scholarship?",
      a: "Applications are submitted online through the official NOS portal at overseas.tribal.gov.in. Register, fill in personal and academic details, upload documents via DigiLocker, and submit before the deadline (typically 30 June).",
    },
    {
      q: "Can I apply without an admission offer from a foreign university?",
      a: "Yes. Selected candidates are given up to 2 years to secure admission in a recognised foreign university (Top 1000 QS World Ranking). However, having an admission offer strengthens the application.",
    },
  ],
  source: "sample",
};
