import type { Scheme } from "@/lib/types";

export const topClassEducationForStudentsWithDisabilities: Scheme = {
  id: "top-class-education-for-students-with-disabilities",
  slug: "top-class-education-for-students-with-disabilities",
  name: "Top Class Education for Students with Disabilities",
  shortName: "TCE Disabilities",
  summary:
    "Full tuition fee coverage plus a living allowance, book grant, and one-time computer and aids/devices grants for disabled students pursuing full-time diploma, UG, or PG courses.",
  description:
    "Administered by the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment, this scheme provides comprehensive financial support to students with disabilities pursuing full-time diploma, undergraduate, or postgraduate studies at approved institutions. It covers tuition fees, a monthly living allowance, an annual book grant, and one-time grants for a computer and assistive aids/devices.",
  category: "disability",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Disability",
      value: "Minimum 40% disability, as certified by a competent medical authority",
      type: "other",
    },
    {
      label: "Course",
      value: "Admission to a full-time diploma, undergraduate, or postgraduate course at a notified institution",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Parental income not exceeding ₹6,00,000",
      type: "income",
    },
    {
      label: "Sibling limit",
      value: "Not eligible if already the third sibling in the family receiving this scholarship",
      type: "other",
    },
  ],
  benefits: [
    "Full tuition fee coverage, up to a ₹2,00,000 per annum ceiling for private institutions",
    "₹3,000 per month living expense allowance",
    "₹5,000 per year book grant",
    "₹30,000 one-time grant for purchase of a computer",
    "₹30,000 one-time reimbursement for assistive aids/devices",
    "₹2,000 per month special allowance",
  ],
  requiredDocuments: [
    { name: "Income certificate", mandatory: true },
    { name: "Domicile certificate", mandatory: true },
    { name: "Degree / mark sheets", mandatory: true },
    { name: "Current fee receipt", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Bonafide student certificate", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Disability certificate", mandatory: true },
    { name: "Declaration certificate", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "divyang",
    "diploma",
    "undergraduate",
    "postgraduate",
    "depwd",
    "assistive devices",
    "computer grant",
    "NSP",
  ],
  faqs: [
    {
      q: "Who is eligible for this scheme?",
      a: "Students with at least 40% disability, admitted full-time to a diploma, undergraduate, or postgraduate course at a notified institution, with parental income not exceeding ₹6,00,000.",
    },
    {
      q: "What financial support does it provide?",
      a: "Full tuition fees (up to ₹2,00,000/year for private institutions), a ₹3,000/month living allowance, a ₹5,000/year book grant, one-time grants of ₹30,000 each for a computer and for assistive aids/devices, and a ₹2,000/month special allowance.",
    },
    {
      q: "How do I apply?",
      a: "Register on scholarships.gov.in, verify via OTP, set a password, log in to your applicant dashboard, complete the application form with the required document uploads, and submit.",
    },
  ],
  source: "sample",
};
