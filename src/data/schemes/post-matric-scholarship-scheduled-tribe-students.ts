import type { Scheme } from "@/lib/types";

export const postMatricScholarshipScheduledTribeStudents: Scheme = {
  id: "post-matric-scholarship-scheduled-tribe-students",
  slug: "post-matric-scholarship-scheduled-tribe-students-for-studies-in-india-g7k2m9xz",
  name: "Post Matric Scholarship Scheme for Scheduled Tribe Students for Studies in India",
  shortName: "PMS ST",
  summary:
    "Centrally sponsored scholarship providing 100% tuition fee reimbursement and ₹230–₹1,200 per month maintenance allowance to Scheduled Tribe students pursuing post-matriculation to postgraduate studies in India.",
  description:
    "The Post Matric Scholarship Scheme for Scheduled Tribe (ST) Students is a Centrally Sponsored Scheme implemented by the Ministry of Tribal Affairs, Government of India. Introduced in 1944 and revised periodically (last major revision w.e.f. 01-04-2022), it enables eligible ST students to pursue quality education from Class XI through post-graduation and doctoral studies by providing financial assistance covering tuition fees and a monthly maintenance allowance. The scheme is administered through State/UT Governments, with applications invited via the National Scholarship Portal (NSP) or respective state portals. Scholarship amounts are transferred directly to students' bank accounts through Direct Benefit Transfer (DBT).",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to a Scheduled Tribe (ST) as notified for the applicant's domicile State/UT, with a valid ST caste certificate",
      type: "caste-category",
    },
    {
      label: "Academic qualification",
      value: "Must have passed Matriculation or Higher Secondary or any higher examination of a recognized University or Board",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Parental income from all sources must not exceed ₹2,50,000 per annum — valid income certificate required",
      type: "income",
    },
    {
      label: "Institution",
      value: "Must be enrolled in a recognized post-matriculation/post-secondary course at a government or recognized private institution in India",
      type: "education",
    },
    {
      label: "Bank account",
      value: "Must have a valid bank account in a scheduled bank linked with Aadhaar and mobile number, in the student's own name",
      type: "other",
    },
    {
      label: "Other scholarships",
      value: "Student must not be receiving any other scholarship or stipend for the same course",
      type: "other",
    },
    {
      label: "Academic performance",
      value: "Minimum 50% marks in the previous academic year (40% for students studying in tribal-area institutions)",
      type: "education",
    },
  ],
  benefits: [
    "100% tuition fee reimbursement — all compulsory fees charged by the educational institution (subject to state-level fee limits)",
    "Monthly maintenance allowance ranging from ₹230 to ₹1,200 depending on course group (Group I–IV)",
    "Study tour charges up to ₹1,600 per annum",
    "Thesis typing and printing charges up to ₹1,600 for research scholars",
    "Additional disability allowance: ₹800/month (hosteller) or ₹600/month (day scholar) for students with disabilities",
    "Annual book allowance of ₹1,200 for correspondence course students",
    "Direct Benefit Transfer (DBT) to student's own bank account",
  ],
  requiredDocuments: [
    { name: "ST Caste Certificate (from State Tahsildar/Competent Authority)", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Domicile / Nativity Certificate", mandatory: true },
    { name: "Annual Family Income Certificate (below ₹2.5 lakh)", mandatory: true },
    { name: "Previous academic year marksheet", mandatory: true },
    { name: "Current institution bonafide certificate and fee receipt", mandatory: true },
    { name: "Bank passbook (Aadhaar-linked, in student's name)", mandatory: true },
    { name: "10th and 12th marksheets", mandatory: false, note: "Required for renewal applications" },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Tribal Affairs, Government of India",
  applicationMode: ["online", "csc"],
  tags: [
    "scholarship",
    "post matric",
    "ST",
    "scheduled tribe",
    "tribal",
    "central",
    "Ministry of Tribal Affairs",
    "NSP",
    "DBT",
    "tuition fee",
    "maintenance allowance",
    "Class XI",
    "undergraduate",
    "postgraduate",
    "PhD",
    "professional courses",
    "all India",
  ],
  faqs: [
    {
      q: "Who is eligible for the Post Matric Scholarship for ST students?",
      a: "Scheduled Tribe (ST) students who have passed Matriculation or higher, are enrolled in recognized post-matriculation to postgraduate courses in India, and whose family annual income does not exceed ₹2.5 lakh. A valid ST caste certificate, Aadhaar-linked bank account, and minimum 50% marks in the previous year (40% for tribal-area institutions) are required.",
    },
    {
      q: "What is the scholarship amount?",
      a: "The scheme covers 100% compulsory tuition fees (subject to state limits) plus a monthly maintenance allowance ranging from ₹230 to ₹1,200 depending on the course group. Group I (professional/degree courses up to PhD) gets ₹1,200/month for hostellers; Group IV (non-degree post-matric courses) gets ₹230/month for day scholars.",
    },
    {
      q: "Can I apply if I am already receiving another scholarship?",
      a: "No. Students receiving any other scholarship or stipend for the same course are not eligible under this scheme.",
    },
    {
      q: "How do I apply?",
      a: "Register and apply on the National Scholarship Portal (scholarships.gov.in) or your state's scholarship portal. Upload all required documents including ST caste certificate, income certificate, and bank details. Your institution will verify the application, and the scholarship amount will be disbursed via DBT.",
    },
    {
      q: "Is there any fee ceiling for students in private institutions?",
      a: "For government institutions, all compulsory fees are covered. For private institutions, the ceiling is ₹2.5 lakh/year for engineering, ₹6 lakh/year for MBBS/MS/MD, and ₹1 lakh/year for other courses (as far as Government of India support is concerned). State governments may provide additional support.",
    },
    {
      q: "Do students with disabilities get additional benefits?",
      a: "Yes. In addition to the regular stipend, students with disabilities receive an extra ₹800/month (hosteller) or ₹600/month (day scholar). This also applies to leprosy-cured students and those with Sickle Cell Anemia or Thalassemia.",
    },
  ],
  lastVerified: "2026-05-23",
  source: "sample",
};
