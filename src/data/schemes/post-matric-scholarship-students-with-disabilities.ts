import type { Scheme } from "@/lib/types";

export const postMatricScholarshipStudentsWithDisabilities: Scheme = {
  id: "post-matric-scholarship-students-with-disabilities",
  slug: "post-matric-scholarship-students-with-disabilities-mrccjoo5",
  name: "Post Matric Scholarship Students With Disabilities",
  shortName: "PMS-SwD",
  summary:
    "A central government scholarship for students with benchmark disabilities offering maintenance allowance of ₹550–₹1,600/month, disability allowance of ₹2,000–₹4,000/year, and book allowance of ₹1,500/year.",
  description:
    "The Post Matric Scholarship Students With Disabilities is a Central Government scholarship implemented by the Department of Empowerment of Persons with Disabilities (DoEPwD), Ministry of Social Justice and Empowerment. It provides financial assistance to students with benchmark disabilities pursuing post-matric education such as Class XI, Class XII, Diploma, Polytechnic, Undergraduate, Postgraduate, and other recognized professional or technical courses in India. The scheme aims to promote inclusive education and reduce the financial burden on students with disabilities.",
  category: "disability",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Open to scholarship, SC/ST, BC/MBC, OBC, EWS, and General/Merit categories",
      type: "caste-category",
    },
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Disability",
      value: "Must have a valid disability certificate (benchmark disability as per government norms)",
      type: "other",
    },
    {
      label: "Course",
      value: "Must be studying in Class XI, XII, Diploma, Polytechnic, UG, PG, or other post-matric courses",
      type: "education",
    },
    {
      label: "Institution",
      value: "Must be enrolled in a UGC/AICTE or Government-recognized educational institution in India",
      type: "education",
    },
    {
      label: "Income",
      value: "Family income should satisfy the income limit prescribed under the scheme",
      type: "income",
    },
    {
      label: "Other scholarships",
      value: "Should not be receiving another scholarship for the same purpose, if prohibited under the scheme guidelines",
      type: "other",
    },
  ],
  benefits: [
    "Maintenance allowance of ₹550–₹1,600/month (based on course & hostel/day scholar status)",
    "Disability allowance of ₹2,000–₹4,000/year",
    "Book allowance of ₹1,500/year",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Disability Certificate", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    { name: "Previous qualifying examination mark sheet (Class X or equivalent)", mandatory: true },
    { name: "Admission/Bonafide Certificate from the institution", mandatory: true },
    { name: "Bank Account Passbook", mandatory: true },
    { name: "Passport-size Photograph", mandatory: true },
    { name: "Identity Proof and any additional documents specified during application", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Department of Empowerment of Persons with Disabilities (DoEPwD), Ministry of Social Justice and Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "PMS-SwD",
    "post-matric",
    "Class 11",
    "Class 12",
    "diploma",
    "polytechnic",
    "UG",
    "PG",
    "PhD",
    "research",
    "NSP",
    "National Scholarship Portal",
    "central government",
    "DoEPwD",
    "SC-ST",
    "OBC",
    "EWS",
    "general-merit",
    "bc-mbc",
    "all-india",
  ],
  faqs: [
    {
      q: "Who is eligible for the Post Matric Scholarship for Students with Disabilities?",
      a: "Indian citizens with a valid benchmark disability certificate who are studying in Class XI, XII, Diploma, Polytechnic, UG, PG, or other post-matric courses at a UGC/AICTE or government-recognized institution in India. Family income must satisfy the prescribed limit.",
    },
    {
      q: "What financial assistance is provided under this scheme?",
      a: "Students receive a maintenance allowance of ₹550–₹1,600 per month (depending on course type and hostel/day scholar status), a disability allowance of ₹2,000–₹4,000 per year, and a book allowance of ₹1,500 per year.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "The application is done through the National Scholarship Portal (scholarships.gov.in). First, generate an OTR ID via the NSP OTR mobile app by linking your Aadhaar and completing a face scan. Then log in to the NSP website, fill your profile, enter your UDID card number, select 'Post-Matric Scholarship for Students with Disabilities', upload the required documents, and submit.",
    },
    {
      q: "What is an OTR ID and how do I get it?",
      a: "OTR (One Time Registration) ID is a permanent 14-digit ID needed to apply on NSP. Download the NSP OTR and Aadhaar Face RD apps, enter your Aadhaar number to get a reference number via SMS, complete the face scan in the NSP OTR app, and your OTR ID and password will be sent via SMS.",
    },
    {
      q: "Which ministry implements this scheme?",
      a: "The scheme is implemented by the Department of Empowerment of Persons with Disabilities (DoEPwD), under the Ministry of Social Justice and Empowerment, Government of India.",
    },
  ],
  source: "sample",
};
