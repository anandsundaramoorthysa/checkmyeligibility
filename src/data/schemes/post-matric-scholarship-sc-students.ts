import type { Scheme } from "@/lib/types";

export const postMatricScholarshipScStudents: Scheme = {
  id: "post-matric-scholarship-sc-students",
  slug: "post-matric-scholarship-for-sc-students",
  name: "Post Matric Scholarship for SC Students",
  shortName: "Post Matric SC Scholarship",
  summary:
    "Central scholarship scheme for meritorious Scheduled Caste (SC) students pursuing higher education (undergraduate and postgraduate), covering tuition fees, living allowances, and special provisions.",
  description:
    "The Post Matric Scholarship for SC Students is a flagship welfare and educational empowerment scheme introduced by the Ministry of Education (Department of Higher Education), Government of India, to facilitate access to higher education for students from Scheduled Caste (SC) communities. The scheme aims to encourage SC students, particularly those from economically weaker sections, to pursue studies beyond secondary education (post-matric level) across diverse academic disciplines. By providing comprehensive financial support including tuition fee reimbursement, living allowances, book allowances, and special provisions for differently-abled students, the scheme removes financial barriers to education. The scholarship is available for full-time undergraduate (UG) and postgraduate (PG) programmes at recognized Indian colleges, universities, and technical institutions. Named as a continuation and extension of educational empowerment, the scheme reflects India's constitutional commitment to social justice and inclusive development of all sections of society.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to a Scheduled Caste (SC) as per the Constitution of India and listed in the official SC list",
      type: "caste-category",
    },
    {
      label: "Course Level",
      value:
        "Enrolled in any full-time undergraduate (Bachelor's) or postgraduate (Master's/Professional) programme at recognized Indian colleges, universities, deemed universities, or technical institutions",
      type: "education",
    },
    {
      label: "Academic Performance",
      value:
        "Minimum 50% marks or equivalent CGPA in the qualifying examination (Class 12 for UG; Bachelor's degree for PG)",
      type: "education",
    },
    {
      label: "Annual Family Income",
      value:
        "For scholarship amount determination: Family annual income should be below ₹4,50,000 (criteria may vary; income-based categorization applies for determining award amount)",
      type: "income",
    },
    {
      label: "Continuation in Education",
      value:
        "Must be continuing in the same course/institution and should have passed previous examination(s) with minimum required performance",
      type: "education",
    },
    {
      label: "Age Limit",
      value: "No specific upper age limit; must be a regular full-time student",
      type: "age",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
  ],
  benefits: [
    "Full Tuition Fee Reimbursement: Actual tuition fee charged by the institution (for eligible students)",
    "Monthly Living Allowance: ₹1,500-₹4,000 per month depending on income category and course level",
    "Book and Stationery Allowance: ₹1,500-₹3,000 per annum",
    "Special Contingency Grant: ₹2,000-₹5,000 per annum for academic-related expenses (lab fees, project materials, etc.)",
    "Special Provisions for PwD (Persons with Disabilities): Additional allowance of ₹2,000 per month if applicable",
    "Maintenance Allowance for Hostellers: Additional ₹1,000-₹1,500 per month for students residing in institution hostels",
    "Medical Allowance: Special provision for medical emergencies",
    "No employment bond or payback requirement",
    "Transportation Allowance: For students commuting from home",
  ],
  requiredDocuments: [
    { name: "Completed application form (prescribed format)", mandatory: true },
    { name: "Class 12 marksheet / Qualifying exam certificate (for UG applicants)", mandatory: true },
    { name: "Bachelor's degree marksheet (for PG applicants)", mandatory: true },
    {
      name: "Scheduled Caste (SC) Certificate",
      mandatory: true,
      note: "Issued by District Revenue Officer / Taluk/Tehsil office, valid and not older than 3 years",
    },
    {
      name: "Annual Family Income Certificate",
      mandatory: true,
      note: "Issued by District Revenue Officer, Taluk Office, or authorized municipal official",
    },
    { name: "Current year college enrollment/admission certificate", mandatory: true },
    { name: "Pass Certificate from previous examination (for continuing students)", mandatory: true },
    { name: "Bank Passbook (first page with account holder name and IFSC code)", mandatory: true },
    { name: "Aadhaar Card (copy)", mandatory: true },
    { name: "Passport-sized photographs (3-4 copies)", mandatory: true },
    {
      name: "Disability Certificate",
      mandatory: false,
      note: "Issued by District Medical Board if student is PWD and eligible for special allowance",
    },
    { name: "Domicile Certificate (state residence proof)", mandatory: false },
    { name: "Migration Certificate (if from another state)", mandatory: false },
    {
      name: "Certificate of Residence",
      mandatory: false,
      note: "For hostel residence allowance claim",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Education (Department of Higher Education), Government of India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "post-matric",
    "SC students",
    "scheduled caste",
    "higher education",
    "undergraduate",
    "postgraduate",
    "central scheme",
    "fee reimbursement",
    "living allowance",
    "social welfare",
  ],
  faqs: [
    {
      q: "Who is eligible for the Post Matric Scholarship for SC Students?",
      a: "SC students with minimum 50% marks in Class 12 (for UG) or Bachelor's degree (for PG), enrolled in recognized colleges/universities in full-time programmes, with family income generally below ₹4,50,000 are eligible.",
    },
    {
      q: "What is the scholarship amount and how is it disbursed?",
      a: "The scholarship covers actual tuition fees plus monthly living allowance (₹1,500-₹4,000 depending on income and course level), book allowance (₹1,500-₹3,000 annually), and contingency grants. It is disbursed through Direct Benefit Transfer (DBT) monthly or in installments via the institution.",
    },
    {
      q: "Is this scholarship available for both undergraduate and postgraduate studies?",
      a: "Yes, the scholarship is available for full-time Bachelor's degree programmes and Master's degree/postgraduate professional programmes at recognized institutions.",
    },
    {
      q: "What is the minimum marks requirement?",
      a: "Minimum 50% marks or equivalent CGPA in the qualifying examination (Class 12 for undergraduate; Bachelor's degree for postgraduate) is mandatory.",
    },
    {
      q: "Can I apply if I'm pursuing part-time or distance learning courses?",
      a: "No, this scholarship is exclusively for full-time, regular programmes at recognized institutions. Part-time and distance learning courses are not eligible.",
    },
    {
      q: "Is the scholarship income-dependent?",
      a: "Yes, the scholarship amount varies based on family annual income. While the central scheme covers all eligible SC students, the quantum of benefits may differ. Detailed income slabs are available on the National Scholarship Portal.",
    },
    {
      q: "How do I apply?",
      a: "Visit scholarships.gov.in, register yourself, select 'Post Matric Scholarship for SC Students', fill the application form, upload required documents (SC certificate, income certificate, enrollment certificate, marksheet, bank details, Aadhaar), and submit for institutional verification.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines typically fall between June and September each year. Check the National Scholarship Portal for exact dates and submission deadlines announced annually.",
    },
    {
      q: "When is the first disbursement made?",
      a: "After institutional verification and approval (typically 1-2 months after submission), the first disbursement is made. Thereafter, monthly or quarterly disbursements continue through DBT.",
    },
    {
      q: "Do I need to renew the scholarship every year?",
      a: "Yes, continuing students must submit renewal applications each academic year along with proof of passing the previous examination, updated income certificate, and enrollment certificate for the new academic year.",
    },
    {
      q: "Is there an additional allowance for students with disabilities?",
      a: "Yes, students with disabilities (PWD) receive an additional monthly allowance of ₹2,000 in addition to other benefits. A valid Disability Certificate from District Medical Board is required.",
    },
    {
      q: "Can I receive this scholarship while pursuing studies abroad?",
      a: "No, this scholarship is for studies in recognized Indian educational institutions only. It is not applicable for overseas higher education.",
    },
    {
      q: "Is there any employment bond or service requirement?",
      a: "No, this is a pure scholarship with no employment bond, service obligation, or payback requirement after completion of studies.",
    },
    {
      q: "Can I claim both hostel maintenance allowance and other allowances together?",
      a: "Yes, if you are residing in institution-approved hostels, you are eligible to claim the hostel maintenance allowance in addition to living allowance and other benefits.",
    },
    {
      q: "What if my SC Certificate is older than 3 years?",
      a: "You need to renew your SC Certificate from the District Revenue Office or authorized official, as outdated certificates may not be accepted during application verification.",
    },
    {
      q: "Can I receive this scholarship along with other central government scholarships?",
      a: "Generally, you cannot receive simultaneous financial support from multiple central scholarship schemes. You must declare all ongoing financial assistance and scholarships in your application.",
    },
  ],
  source: "sample",
};
