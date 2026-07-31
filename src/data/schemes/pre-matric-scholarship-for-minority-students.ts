import type { Scheme } from "@/lib/types";

export const preMatricScholarshipForMinorityStudents: Scheme = {
  id: "pre-matric-scholarship-for-minority-students",
  slug: "pre-matric-scholarship-for-minority-students",
  name: "Pre-Matric Scholarship for Minority Students",
  shortName: "Minority Pre-Matric",
  summary:
    "Central scholarship for minority-community students in Classes 1–10, providing ₹100–₹600/month plus annual book grants to improve retention and enrolment.",
  description:
    "The Pre-Matric Scholarship for Minority Students is a centrally-sponsored scheme by the Ministry of Minority Affairs, providing financial support to students from notified minority communities studying in Classes 1 to 10. It aims to improve retention and enrolment among minority students by covering maintenance costs and annual book grants for both day scholars and hostellers.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value: "Must belong to a notified minority community: Muslim, Christian, Sikh, Buddhist, Jain, or Zoroastrian (Parsi)",
      type: "other",
    },
    {
      label: "Education level",
      value: "Enrolled in Classes 1–10 (Primary, Upper Primary, or Secondary) at a recognised school",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Parental/guardian income not exceeding ₹1,00,000",
      type: "income",
    },
    {
      label: "Academic performance",
      value: "Minimum 50% marks in the previous qualifying examination",
      type: "education",
    },
    {
      label: "Other conditions",
      value: "Cannot hold any other concurrent scholarship; 30% of awards are reserved for girl students",
      type: "other",
    },
  ],
  benefits: [
    "Day scholars: ₹100 per month plus an annual book grant of ₹500–₹1,000 (varies by class)",
    "Hostellers: ₹600 per month plus an equivalent annual book grant (Classes 3–10)",
    "Disbursed via Direct Benefit Transfer",
  ],
  requiredDocuments: [
    { name: "Minority community certificate", mandatory: true },
    { name: "Income certificate", mandatory: true },
    { name: "Previous year mark sheet", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    { name: "Proof of admission", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in",
  ministry: "Ministry of Minority Affairs, Government of India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "minority",
    "muslim",
    "christian",
    "sikh",
    "buddhist",
    "jain",
    "parsi",
    "pre-matric",
    "primary",
    "secondary",
    "NSP",
    "DBT",
  ],
  faqs: [
    {
      q: "Who is eligible for the Pre-Matric Scholarship for Minority Students?",
      a: "Students from notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Zoroastrian) studying in Classes 1–10, with parental income not exceeding ₹1,00,000 and a minimum of 50% marks in the previous exam.",
    },
    {
      q: "How much financial support is provided?",
      a: "Day scholars receive ₹100/month plus a ₹500–₹1,000 annual book grant; hostellers receive ₹600/month plus an equivalent book grant for Classes 3–10.",
    },
    {
      q: "Is there a reservation for girl students?",
      a: "Yes, 30% of the total scholarships are reserved for girl students.",
    },
    {
      q: "How do I apply?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in), select this scheme, complete the form, upload documents, and submit for school verification before Direct Benefit Transfer disbursement.",
    },
  ],
  source: "sample",
};
