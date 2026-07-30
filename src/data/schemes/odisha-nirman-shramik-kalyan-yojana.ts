import type { Scheme } from "@/lib/types";

export const odishaNirmanShramikKalyanYojana: Scheme = {
  id: "odisha-nirman-shramik-kalyan-yojana",
  slug: "odisha-nirman-shramik-kalyan-yojana",
  name: "Odisha Nirman Shramik Kalyan Yojana — Scholarship for Children of Construction Workers",
  shortName: "Odisha BOC Scholarship",
  summary:
    "₹2,000 to ₹40,000 per year for children of registered construction workers in Odisha studying in Class 6 and above.",
  description:
    "The Nirman Shramik Kalyan Yojana, administered by the Odisha Building and Other Construction Workers' Welfare Board (BOCW), provides educational scholarships to the children of registered construction workers in the state. The scholarship amount ranges from ₹2,000 per year for students in Class 6 to ₹40,000 per year for students pursuing professional courses like engineering and medical studies. The scheme aims to promote education among the children of construction workers and reduce dropout rates. Both parents must be registered with the BOCW Board, and the family's annual income must not exceed ₹2,00,000.",
  category: "scholarship",
  level: "state",
  states: ["odisha"],
  eligibility: [
    {
      label: "Parent registration",
      value: "Parent (father or mother) must be a registered construction worker with the Odisha BOCW Board",
      type: "occupation",
    },
    {
      label: "Annual family income",
      value: "Annual family income must not exceed ₹2,00,000 per annum",
      type: "income",
    },
    {
      label: "Education level",
      value: "Must be studying in Class 6 or above (including professional courses)",
      type: "education",
    },
    {
      label: "Institution",
      value: "Must be studying in a recognised school or institution in Odisha",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Must have passed the previous examination in the first division or equivalent",
      type: "education",
    },
  ],
  benefits: [
    "₹2,000 per year for students in Class 6 to Class 8",
    "₹4,000 per year for students in Class 9 to Class 10",
    "₹6,000 per year for students in Class 11 to Class 12",
    "₹10,000 to ₹40,000 per year for students pursuing graduation and professional courses",
    "Additional maintenance allowance for hostellers",
  ],
  requiredDocuments: [
    { name: "Parent's BOCW registration certificate", mandatory: true },
    { name: "Family income certificate", mandatory: true },
    { name: "Aadhaar Card of the student", mandatory: true },
    { name: "Previous year marksheet / pass certificate", mandatory: true },
    { name: "Bank passbook (student's account)", mandatory: true },
    { name: "Admission letter / bonafide from current institution", mandatory: true },
    { name: "Self-declaration / affidavit", mandatory: false },
  ],
  officialPortalUrl: "https://bocw.odisha.gov.in",
  ministry: "Labour and Employees' State Insurance Department, Government of Odisha",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "construction workers",
    "BOCW",
    "Odisha",
    "state",
    "means-based",
    "Class 6 to professional courses",
    "children of workers",
  ],
  faqs: [
    {
      q: "Who is eligible for the Odisha BOC Scholarship?",
      a: "Children of registered construction workers with the Odisha BOCW Board, studying in Class 6 or above, with annual family income below ₹2 lakh.",
    },
    {
      q: "How much scholarship will I receive?",
      a: "The scholarship amount ranges from ₹2,000 per year (Class 6–8) to ₹40,000 per year (professional courses), depending on the level of study.",
    },
    {
      q: "Can I apply if I am studying outside Odisha?",
      a: "The scheme generally covers institutions in Odisha. Contact the BOCW Board for specific queries about studying outside the state.",
    },
    {
      q: "Is this scholarship renewable every year?",
      a: "Yes, the scholarship is renewed each year subject to maintaining the required academic performance and continued registration of the parent with the Board.",
    },
  ],
  lastVerified: "2026-07-26",
  source: "sample",
};
