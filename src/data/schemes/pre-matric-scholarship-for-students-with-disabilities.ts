import type { Scheme } from "@/lib/types";

export const preMatricScholarshipForStudentsWithDisabilities: Scheme = {
  id: "pre-matric-scholarship-for-students-with-disabilities",
  slug: "pre-matric-scholarship-for-students-with-disabilities-mrf2otm6",
  name: "Pre Matric Scholarship For Students With Disabilities",
  shortName: "Pre-Matric SwD",
  summary:
    "A central government pre-matric scholarship for students with benchmark disabilities in Classes IX and X offering maintenance allowance of ₹500–₹800/month, book grant of ₹1,000/year, and disability allowance of ₹2,000–₹4,000/year.",
  description:
    "The Pre Matric Scholarship for Students with Disabilities is a central scheme of the Department of Empowerment of Persons with Disabilities (Divyangjan), Ministry of Social Justice & Empowerment, Government of India. It provides financial assistance to students with benchmark disabilities studying in Classes IX and X to reduce dropout rates and encourage continued education through maintenance allowance, book grant, and disability allowance.",
  category: "disability",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Open to Differently Abled/Divyang, General/Merit, SC/ST, OBC, and BC/MBC categories",
      type: "caste-category",
    },
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Disability",
      value: "Must have a valid disability certificate for a benchmark disability issued by a competent authority",
      type: "other",
    },
    {
      label: "Education",
      value: "Must be a regular, full-time student studying in Class IX or X in a Government school or a school recognised by the Government or Central/State Board of Secondary Education",
      type: "education",
    },
    {
      label: "Income",
      value: "Parents/guardian's annual income from all sources should not exceed ₹2,50,000",
      type: "income",
    },
    {
      label: "Family limit",
      value: "Not more than 2 children with disabilities of the same parents are eligible. In case the second child is a twin, both twins are eligible",
      type: "other",
    },
    {
      label: "Reservation",
      value: "50% of scholarships reserved for female candidates. Unfilled female slots may be utilised for suitable male candidates",
      type: "gender",
    },
  ],
  benefits: [
    "Maintenance allowance: ₹500/month for Day Scholars, ₹800/month for Hostellers",
    "Book grant: ₹1,000 per annum",
    "Disability allowance: Visually Impaired ₹4,000/annum, Hearing Impaired ₹2,000/annum, Physically Disabled (OH) ₹2,000/annum, Intellectual Disabilities ₹4,000/annum, Other disabilities ₹2,000/annum",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Disability Certificate issued by Competent Authority", mandatory: true },
    { name: "Income Certificate of Parent/Guardian", mandatory: true },
    { name: "Proof of Age", mandatory: true },
    { name: "Educational Qualification Certificate", mandatory: true },
    { name: "Photograph", mandatory: true },
    { name: "Bank Account Details", mandatory: true },
    { name: "Alternative Identity Document (if Aadhaar not available)", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Department of Empowerment of Persons with Disabilities (Divyangjan), Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "disability",
    "pre-matric",
    "Class 9",
    "Class 10",
    "secondary",
    "NSP",
    "National Scholarship Portal",
    "central government",
    "DoEPwD",
    "Divyangjan",
    "SC-ST",
    "OBC",
    "BC-MBC",
    "general-merit",
    "all-india",
  ],
  faqs: [
    {
      q: "Who is eligible for the Pre Matric Scholarship for Students with Disabilities?",
      a: "Indian citizens with a valid benchmark disability certificate who are regular full-time students in Class IX or X at a Government school or a recognised school. Parents/guardian's annual income must not exceed ₹2,50,000. Only 2 children with disabilities per family are eligible (both twins eligible if the second child is a twin).",
    },
    {
      q: "What financial assistance is provided under this scheme?",
      a: "Students receive a maintenance allowance of ₹500/month for day scholars and ₹800/month for hostellers, a book grant of ₹1,000 per annum, and a disability allowance of ₹2,000–₹4,000 per annum depending on the type of disability.",
    },
    {
      q: "Is there a reservation for female students?",
      a: "Yes, 50% of the total scholarships available each year are reserved for female candidates. If adequate eligible female candidates are not available, remaining slots may be utilised for suitable male candidates.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Applications are submitted through the National Scholarship Portal (scholarships.gov.in). Register on the portal, fill in your details, upload the required documents, and submit the application. The application ID and password are sent via SMS to your registered mobile number.",
    },
    {
      q: "Which ministry implements this scheme?",
      a: "The scheme is implemented by the Department of Empowerment of Persons with Disabilities (Divyangjan), under the Ministry of Social Justice and Empowerment, Government of India.",
    },
  ],
  source: "sample",
};
