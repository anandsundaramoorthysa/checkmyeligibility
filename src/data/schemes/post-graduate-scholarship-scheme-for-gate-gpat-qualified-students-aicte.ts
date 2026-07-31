import type { Scheme } from "@/lib/types";

export const postGraduateScholarshipSchemeForGateGpatQualifiedStudentsAicte: Scheme = {
  id: "post-graduate-scholarship-scheme-for-gate-gpat-qualified-students-aicte",
  slug: "post-graduate-scholarship-scheme-for-gate-gpat-qualified-students-aicte",
  name: "Post Graduate Scholarship Scheme for GATE/GPAT Qualified Students-AICTE",
  shortName: "AICTE PG Scholarship",
  summary:
    "₹12,400 per month scholarship for GATE/CEED qualified students admitted to AICTE-approved PG programmes in engineering and design.",
  description:
    "The scheme Post Graduate Scholarship Scheme for GATE/GPAT Qualified Students-AICTE has been started by the All India Council for Technical Education, Government of India. AICTE awards a Post Graduate Scholarship of ₹12,400 per month to full-time GATE/CEED qualified students admitted to AICTE-approved post-graduate programs in AICTE-approved Institutions and University Departments as per AICTE-approved intake.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "GATE/CEED score",
      value: "Must have a valid GATE/CEED score at the time of admission",
      type: "education",
    },
    {
      label: "Full-time enrolment",
      value: "Must be admitted as a full-time scholar in an AICTE-approved PG programme",
      type: "education",
    },
    {
      label: "Programme type",
      value: "Admitted to Master of Engineering, Master of Technology, or Master of Design at an AICTE-approved institution",
      type: "education",
    },
    {
      label: "Dual degree",
      value: "Students in final years of dual degree integrated programmes eligible from 9th semester onwards (one year in final year)",
      type: "education",
    },
    {
      label: "Intake limit",
      value: "Scholarships limited to AICTE-approved intake; additional 10% from EWS category over and above approved intake",
      type: "other",
    },
  ],
  benefits: [
    "Monthly scholarship of ₹12,400 for the duration of the PG programme",
    "Covers Master of Engineering, Master of Technology, and Master of Design programmes",
    "Additional 10% seats for EWS category candidates over approved intake",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Proof of age", mandatory: true },
    { name: "Mark sheets / Grade Cards & Degree certificates", mandatory: true },
    { name: "GATE/CEED scorecard", mandatory: true },
    { name: "Caste certificate (if applicable)", mandatory: false },
    { name: "Disability certificate (if applicable)", mandatory: false },
    { name: "Income certificate (if applicable)", mandatory: false },
    { name: "Bank account details (no-frill, Jan Dhan, joint accounts not permitted)", mandatory: true },
  ],
  officialPortalUrl: "https://pgscholarship.aicte.gov.in/",
  ministry: "All India Council for Technical Education (AICTE), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "AICTE",
    "GATE",
    "GPAT",
    "CEED",
    "PG scholarship",
    "postgraduate",
    "engineering",
    "design",
    "M.Tech",
    "M.E.",
    "M.Des",
    "technical education",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the AICTE PG Scholarship for GATE/GPAT qualified students?",
      a: "A monthly scholarship of ₹12,400 for full-time GATE/CEED qualified students admitted to AICTE-approved M.E./M.Tech/M.Des programmes at AICTE-approved institutions.",
    },
    {
      q: "Who is eligible?",
      a: "Students with a valid GATE/CEED score, admitted as full-time scholars to AICTE-approved PG programmes within the approved intake limit.",
    },
    {
      q: "What is the scholarship amount?",
      a: "₹12,400 per month for the duration of the PG programme.",
    },
    {
      q: "How do I apply?",
      a: "Institutes upload eligible student details on the AICTE portal. Students receive a Unique ID, log in at pgscholarship.aicte-india.org, upload scanned documents, and the institute verifies and approves the candidature.",
    },
    {
      q: "Are dual degree students eligible?",
      a: "Yes, students in the final years of dual degree integrated programmes are eligible from the 9th semester onwards for one year.",
    },
    {
      q: "Is there an EWS quota?",
      a: "Yes, AICTE provides PG scholarships to an additional 10% of candidates over the approved intake from the EWS category.",
    },
  ],
  source: "sample",
};
