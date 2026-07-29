import type { Scheme } from "@/lib/types";

export const ietIndiaScholarshipAward: Scheme = {
  id: "iet-india-scholarship-award",
  slug: "iet-india-scholarship-award-mrrhifsv",
  name: "IET India Scholarship Award",
  shortName: "IET Scholarship",
  summary:
    "A merit-based scholarship for undergraduate engineering students recognizing academic excellence, leadership, innovation, and technical aptitude. Top prize of ₹6,00,000 plus trophy and IET membership.",
  description:
    "The IET India Scholarship Award is a merit-based scholarship and recognition program conducted by The Institution of Engineering and Technology (IET) India. It recognizes outstanding undergraduate engineering students based on academics, leadership, innovation, extracurricular activities, and technical aptitude. Applications are free of cost.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Course",
      value: "Must be enrolled in a full-time B.E./B.Tech program at an AICTE- or UGC-approved institution",
      type: "education",
    },
    {
      label: "Year of study",
      value: "Must be in the 1st, 2nd, 3rd, or 4th year of engineering",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Must have cleared all regular credit courses in a single attempt with minimum 60% aggregate marks or 6.0 CGPA (10-point scale) in completed semesters",
      type: "education",
    },
    {
      label: "Membership",
      value: "Both IET members and non-members are eligible. IET student members receive additional weightage during evaluation",
      type: "other",
    },
  ],
  benefits: [
    "National Winner: ₹6,00,000 + Trophy + Certificate + 1-Year IET Membership",
    "1st Runner-up: ₹3,00,000 + Trophy + Certificate + 1-Year IET Membership",
    "2nd Runner-up: ₹2,00,000 + Trophy + Certificate + 1-Year IET Membership",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Aadhaar Card or Government-issued ID", mandatory: true },
    { name: "College ID Card", mandatory: true },
    { name: "Academic mark sheets/transcripts", mandatory: true },
    { name: "Bonafide certificate or admission proof", mandatory: true },
    { name: "Details of extracurricular, technical, and leadership achievements", mandatory: false },
    { name: "Certificates for competitions, internships, projects, or innovation", mandatory: false },
    { name: "Resume/CV (if requested during later stages)", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.theietevents.com/register",
  ministry: "The Institution of Engineering and Technology (IET) India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "IET",
    "engineering",
    "B.E.",
    "B.Tech",
    "undergraduate",
    "UG",
    "merit",
    "general-merit",
    "all-india",
    "STEM",
  ],
  faqs: [
    {
      q: "Who is eligible for the IET India Scholarship Award?",
      a: "Indian citizens enrolled in a full-time B.E./B.Tech program at an AICTE- or UGC-approved institution, in any year (1st to 4th), with a minimum of 60% aggregate marks or 6.0 CGPA and all credits cleared in a single attempt.",
    },
    {
      q: "What is the award amount?",
      a: "The National Winner receives ₹6,00,000, the 1st Runner-up receives ₹3,00,000, and the 2nd Runner-up receives ₹2,00,000. All winners also receive a trophy, certificate, and 1-year IET membership.",
    },
    {
      q: "Do I need to be an IET member to apply?",
      a: "No, both IET members and non-members are eligible to apply. However, IET student members receive additional weightage during evaluation.",
    },
    {
      q: "What is the selection process?",
      a: "Shortlisted candidates appear for an online STEM test. Qualifying candidates participate in a regional presentation round, and regional winners compete in the national finals.",
    },
    {
      q: "Is there an application fee?",
      a: "No, applications are completely free of cost.",
    },
  ],
  source: "sample",
};
