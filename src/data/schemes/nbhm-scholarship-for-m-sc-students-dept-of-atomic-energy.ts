import type { Scheme } from "@/lib/types";

export const nbhmScholarshipForMScStudentsDeptOfAtomicEnergy: Scheme = {
  id: "nbhm-scholarship-for-m-sc-students-dept-of-atomic-energy",
  slug: "nbhm-scholarship-for-m-sc-students-dept-of-atomic-energy-mrcbf8aj",
  name: "NBHM Scholarship for M.Sc. Students (Dept. of Atomic Energy)",
  shortName: "NBHM M.Sc. Scholarship",
  summary:
    "Monthly stipend of ₹8,000 for up to two years for meritorious Mathematics and Statistics students pursuing M.Sc. programs, funded by the Department of Atomic Energy (DAE).",
  description:
    "The National Board for Higher Mathematics (NBHM) Master's Scholarship Scheme is a highly prestigious, merit-based financial aid program funded by the Department of Atomic Energy (DAE), Government of India. It is specifically designed to identify young mathematical talent across the country, encouraging them to pursue advanced education and future research careers in the field of Mathematics or Statistics. The scholarship provides a financial safety net for a maximum duration of two years, helping scholars focus completely on their academic curriculum without financial constraints. Shortlisted awardees are selected through a standardized national screening structure consisting of a competitive written examination followed by an interactive oral evaluation.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an active citizen of India",
      type: "residence",
    },
    {
      label: "Qualification",
      value:
        "Must hold a recognized Bachelor's degree (such as B.Sc., B.Math, or B.Stat) in Mathematics, or be currently enrolled in the final year of such an undergraduate program",
      type: "education",
    },
    {
      label: "Master's enrollment",
      value:
        "Must be preparing to secure admission or already be registered as a regular, full-time student in the first year of a qualifying Master's program (M.A./M.Sc.) in Mathematics or Statistics",
      type: "education",
    },
    {
      label: "Integrated programs",
      value:
        "Students pursuing the final two years of an integrated M.Sc. or integrated Ph.D. program are also fully eligible",
      type: "education",
    },
    {
      label: "Repeat application",
      value:
        "Candidates who have previously availed or drawn this specific Master's funding from the board are barred from applying a second time",
      type: "other",
    },
    {
      label: "Other fellowships",
      value:
        "Selected scholars must not hold any other parallel major national fellowship or scholarship, such as CSIR, UGC, or DST, while receiving support from this scheme",
      type: "other",
    },
  ],
  benefits: [
    "Monthly stipend of ₹8,000 per month",
    "Financial support for a maximum duration of two years",
  ],
  requiredDocuments: [
    {
      name: "Government-issued Photo Identity Card",
      mandatory: true,
      note: "Aadhaar Card, Passport, PAN Card, Voter ID, or Driver's License",
    },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Official Signature", mandatory: true, note: "Scanned copy as per the prescribed portal format" },
    { name: "Bachelor's Degree Certificates and Mark Sheets", mandatory: true },
    {
      name: "Proof of Master's Enrollment / Admission",
      mandatory: true,
      note: "Proof of ongoing enrollment or admission to the Master's program",
    },
    { name: "Caste Certificate", mandatory: false, note: "Required for reserved category applicants, if applicable" },
    {
      name: "Self-Certificate",
      mandatory: true,
      note: "Confirming that the candidate has never previously received this specific M.Sc. funding",
    },
  ],
  officialPortalUrl: "https://www.imsc.res.in/~nbhm/",
  ministry: "Department of Atomic Energy (DAE)",
  applicationMode: ["online"],
  tags: [
    "NBHM",
    "scholarship",
    "M.Sc.",
    "Mathematics",
    "Statistics",
    "Department of Atomic Energy",
    "DAE",
    "stipend",
    "merit",
    "national screening test",
    "IMSc",
    "central scholarship",
    "all-india",
    "postgraduate",
  ],
  faqs: [
    {
      q: "Who is eligible for the NBHM M.Sc. Scholarship?",
      a: "Indian citizens who hold a recognized Bachelor's degree (B.Sc., B.Math, or B.Stat) in Mathematics, or are in the final year of such a program, and who are preparing to secure admission or are already registered as regular, full-time first-year students in a qualifying M.A./M.Sc. program in Mathematics or Statistics. Students in the final two years of an integrated M.Sc. or integrated Ph.D. program are also eligible.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Selected scholars receive a monthly stipend of ₹8,000 for a maximum duration of two years.",
    },
    {
      q: "How are candidates selected?",
      a: "Awardees are selected through a standardized national screening structure consisting of a competitive written examination followed by an interactive oral evaluation.",
    },
    {
      q: "Can I apply if I have already received this scholarship before?",
      a: "No. Candidates who have previously availed or drawn this specific Master's funding from the board are barred from applying a second time.",
    },
    {
      q: "Can I hold another fellowship along with this scholarship?",
      a: "No. Selected scholars must not hold any other parallel major national fellowship or scholarship, such as CSIR, UGC, or DST, while receiving support from this scheme.",
    },
    {
      q: "How do I apply?",
      a: "The application process is conducted online through the IMSc NBHM Portal when the application window opens annually. Create an account with a valid email ID and mobile number, fill in personal, academic, and test center details, upload the required scanned documents, pay the application fee online, and submit. The portal locks the data permanently after submission, and the final confirmation page must be printed for verification during the written exam and interview.",
    },
  ],
  source: "sample",
};
