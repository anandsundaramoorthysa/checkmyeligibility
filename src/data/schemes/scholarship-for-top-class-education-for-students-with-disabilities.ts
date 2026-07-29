import type { Scheme } from "@/lib/types";

export const scholarshipForTopClassEducationForStudentsWithDisabilities: Scheme = {
  id: "scholarship-for-top-class-education-for-students-with-disabilities",
  slug: "scholarship-for-top-class-education-for-students-with-disabilities-mrccatap",
  name: "Scholarship for Top Class Education for Students with Disabilities",
  shortName: "Top Class Education Scheme for SwDs",
  summary:
    "Full tuition fee (up to \u20B92L/yr) plus \u20B93,000/month maintenance for students with 40%+ disability pursuing UG/PG/Diploma at 241 premier notified institutions, funded by DEPwD.",
  description:
    "The Central Sector Scheme of Scholarship for Top Class Education for Students with Disabilities provides full financial assistance to Indian students with a benchmark disability of 40% or more who are pursuing regular, full-time undergraduate, postgraduate, or diploma courses at 241 premier notified institutions of excellence, including IITs, IIMs, NITs, and other top-tier institutes. Funded by the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment, the scheme aims to promote quality higher education among students with disabilities by covering full tuition fees (capped at \u20B92 Lakhs per annum for private sector notified institutions), maintenance allowances, disability allowance, book grants, and one-time funds for assistive devices and computers. The scheme ensures that financial constraints do not prevent talented students with disabilities from accessing the best educational opportunities in the country.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Disability",
      value: "Must have a benchmark disability of 40% or above (certified by competent authority)",
      type: "other",
    },
    {
      label: "Institution",
      value: "Must be admitted to a full-time course at one of the 241 notified premier institutions (IITs, IIMs, NITs, etc.)",
      type: "education",
    },
    {
      label: "Course level",
      value: "Must be pursuing a regular full-time Graduate, Post Graduate Degree, or Diploma course",
      type: "education",
    },
    {
      label: "Family income",
      value: "Total annual income of parent/guardian must not exceed \u20B96,00,000",
      type: "income",
    },
    {
      label: "Family limit",
      value: "Must NOT be the third sibling in the family availing this scholarship",
      type: "other",
    },
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "other",
    },
  ],
  benefits: [
    "Tuition fee fully covered up to \u20B92,00,000 per annum for private sector notified institutions",
    "\u20B93,000 per month maintenance allowance for hostellers",
    "\u20B91,500 per month maintenance allowance for day scholars",
    "\u20B92,000 per month special allowance for persons with disabilities",
    "\u20B95,000 per annum book grant",
    "\u20B930,000 one-time grant for purchase of a computer (with prior approval)",
    "\u20B930,000 one-time grant for assistive devices (with prior approval)",
  ],
  requiredDocuments: [
    { name: "Disability certificate (40%+ benchmark disability)", mandatory: true },
    { name: "UDID (Unique Disability ID) card", mandatory: true },
    { name: "Admission proof / fee receipt from institution", mandatory: true },
    { name: "Income certificate of parent/guardian", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Bank account details (Aadhaar-linked)", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Previous academic mark sheets / certificates", mandatory: true },
  ],
  officialPortalUrl: "https://depwd.gov.in",
  ministry:
    "Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "DEPwD",
    "top class education",
    "SwD",
    "IIT",
    "IIM",
    "NIT",
    "premier institutions",
    "UG",
    "PG",
    "diploma",
    "NSP",
    "national scholarship portal",
    "central",
    "all-india",
    "tuition fee",
    "assistive devices",
    "maintenance allowance",
  ],
  faqs: [
    {
      q: "What is the minimum disability percentage required?",
      a: "Applicants must have a benchmark disability of 40% or above, certified by a competent medical authority. A valid disability certificate and UDID card are required.",
    },
    {
      q: "Which institutions are covered under this scheme?",
      a: "The scheme covers 241 premier notified institutions of excellence including IITs, IIMs, NITs, AIIMS, central universities, and other top-tier government and private institutions recognised by DEPwD.",
    },
    {
      q: "What is the income limit for this scholarship?",
      a: "The total annual income of the parent or guardian must not exceed \u20B96,00,000. A valid income certificate from a competent authority is required.",
    },
    {
      q: "What expenses are covered under this scholarship?",
      a: "The scholarship covers full tuition fees (up to \u20B92L/year for private institutions), maintenance allowance (\u20B93,000/month hosteller, \u20B91,500/month day scholar), special disability allowance (\u20B92,000/month), book grant (\u20B95,000/year), and one-time grants for computer and assistive devices (\u20B930,000 each).",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Applications are submitted online through the National Scholarship Portal (NSP) at scholarships.gov.in. The process involves One Time Registration (OTR), face authentication via the NSP OTR app, and final application submission with document uploads.",
    },
    {
      q: "Can more than one sibling avail this scholarship?",
      a: "No, only two siblings per family are eligible. The applicant must NOT be the third sibling in the family availing this scholarship.",
    },
    {
      q: "Is this scholarship renewable?",
      a: "Yes, the scholarship is renewable each year subject to maintaining satisfactory academic performance and continuation in the same course. Renewal applications must be submitted annually on the NSP portal.",
    },
  ],
  source: "sample",
};
