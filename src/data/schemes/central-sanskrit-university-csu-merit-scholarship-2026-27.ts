import type { Scheme } from "@/lib/types";

export const centralSanskritUniversityCsuMeritScholarship202627: Scheme = {
  id: "central-sanskrit-university-csu-merit-scholarship-2026-27",
  slug: "central-sanskrit-university-csu-merit-scholarship-2026-27",
  name: "Central Sanskrit University (CSU) Merit Scholarship 2026\u201327",
  shortName: "CSU Merit Scholarship",
  summary:
    "Monthly scholarship for students pursuing Sanskrit, Pali, or Prakrit from Class 9 to PhD, with amounts from \u20B9500\u2013\u20B92,500/month and a contingency grant for PhD scholars.",
  description:
    "The Central Sanskrit University (CSU) Merit Scholarship is offered under the Ministry of Education, Government of India, to encourage students pursuing Sanskrit, Pali, or Prakrit as a main or optional subject. The scholarship supports students from Class IX to Ph.D. level in recognized institutions through monthly financial assistance and additional benefits for Ph.D. scholars.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Subject requirement",
      value:
        "Must be pursuing Sanskrit, Pali, or Prakrit as a main or optional subject in a recognised institution",
      type: "education",
    },
    {
      label: "Education level",
      value: "Open to students from Class IX to Ph.D. level",
      type: "education",
    },
    {
      label: "Minimum marks",
      value:
        "At least 60% marks in the previous qualifying examination (relaxation: 55% for OBC, 50% for SC/ST/PwD). Applies to both overall aggregate and the Sanskrit/Pali/Prakrit subject (paper of at least 100 marks)",
      type: "education",
    },
    {
      label: "Language proficiency",
      value:
        "Must be able to read and write simple Sanskrit / Pali / Prakrit",
      type: "other",
    },
    {
      label: "Exclusivity",
      value:
        "Must not be receiving any other government scholarship for the same course",
      type: "other",
    },
    {
      label: "Gap year",
      value: "Must not have a gap year",
      type: "other",
    },
  ],
  benefits: [
    "Class 9\u201310: \u20B9500/month for 10 months",
    "Class 11\u201312: \u20B9600/month for 10 months",
    "UG (Shastri / B.A.): \u20B9800/month for 10 months",
    "PG (Acharya / M.A.): \u20B91,000/month for 10 months",
    "PhD / Vidyavaridhi: \u20B92,500/month for 36 months + Contingency Grant of \u20B95,000 per year",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Signature of the applicant", mandatory: true },
    {
      name: "Academic / Qualifying examination certificates and mark sheets",
      mandatory: true,
    },
    {
      name: "Institution verification / recommendation by Principal / HOD / Dean",
      mandatory: true,
    },
    {
      name: "Aadhaar-linked bank account details",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://sanskrit.nic.in",
  ministry: "Ministry of Education, Government of India",
  applicationMode: ["online"],
  tags: [
    "Central Sanskrit University",
    "CSU",
    "Sanskrit",
    "Pali",
    "Prakrit",
    "merit scholarship",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "UG",
    "PG",
    "PhD",
    "Shastri",
    "Acharya",
    "Vidyavaridhi",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "Who can apply for the CSU Merit Scholarship?",
      a: "Students from Class IX to PhD level who are pursuing Sanskrit, Pali, or Prakrit as a main or optional subject in a recognised institution and have secured at least 60% marks in the previous qualifying examination.",
    },
    {
      q: "What are the scholarship amounts?",
      a: "Class 9\u201310: \u20B9500/month, Class 11\u201312: \u20B9600/month, UG: \u20B9800/month, PG: \u20B91,000/month, PhD: \u20B92,500/month plus a contingency grant of \u20B95,000 per year.",
    },
    {
      q: "What is the application deadline?",
      a: "The application deadline is August 25, 2026.",
    },
    {
      q: "Is there a minimum marks requirement in the Sanskrit subject?",
      a: "Yes, the 60% minimum applies to both the overall aggregate and the Sanskrit/Pali/Prakrit subject, which must be a paper of at least 100 marks.",
    },
    {
      q: "Can I apply if I am receiving another scholarship?",
      a: "No, applicants must not be receiving any other government scholarship for the same course.",
    },
  ],
  source: "sample",
};
