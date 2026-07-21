import type { Scheme } from "@/lib/types";

export const pmSpecialScholarshipJkLadakhStudents: Scheme = {
  id: "pm-special-scholarship-jk-ladakh-students",
  slug: "pm-special-scholarship-scheme-for-jk-and-ladakh-students",
  name: "PM Special Scholarship Scheme for J&K and Ladakh Students",
  shortName: "PM Special Scholarship J&K/Ladakh",
  summary:
    "Central scholarship scheme for meritorious students from Jammu & Kashmir and Ladakh pursuing higher education, with comprehensive financial support and special provisions for resident students.",
  description:
    "The PM Special Scholarship Scheme for J&K and Ladakh Students is a landmark initiative by the Ministry of Education (Department of Higher Education), Government of India, designed to provide educational opportunities and promote higher education among talented students from the Union Territories of Jammu & Kashmir and Ladakh. Launched as part of Prime Minister's vision to strengthen education infrastructure and talent development in these regions, the scheme offers comprehensive financial support to meritorious students pursuing undergraduate and postgraduate programmes across recognized institutions nationwide. The scholarship aims to attract and nurture talent from these regions, facilitate their access to quality higher education, and enable them to become productive citizens contributing to the socio-economic development of their regions and the nation. The scheme covers tuition fees, monthly stipends, book allowances, travel allowances, and additional provisions for residential students studying outside their home territory.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Residency",
      value:
        "Permanent resident of Jammu & Kashmir or Ladakh (as per official domicile records) — minimum 15 years continuous residency",
      type: "residence",
    },
    {
      label: "Course Level",
      value:
        "Enrolled in full-time undergraduate (Bachelor's) or postgraduate (Master's/Professional) programmes at recognized Indian colleges, universities, deemed universities, or technical institutions",
      type: "education",
    },
    {
      label: "Academic Merit",
      value:
        "Minimum 60% marks or equivalent CGPA in the qualifying examination (Class 12 for UG; Bachelor's degree for PG)",
      type: "education",
    },
    {
      label: "Annual Family Income",
      value: "Family annual income should be below ₹8,00,000 per annum (higher than normal schemes due to regional development focus)",
      type: "income",
    },
    {
      label: "Age Limit",
      value: "Maximum 25 years of age (relaxation of 5 years for SC/ST/PwD categories)",
      type: "age",
    },
    {
      label: "Citizenship",
      value: "Indian citizen, with valid domicile of J&K or Ladakh",
      type: "other",
    },
    {
      label: "Enrollment Status",
      value:
        "Must be a regular full-time student in a recognized institution; not applicable for part-time, distance, or online-only modes",
      type: "education",
    },
  ],
  benefits: [
    "Full Tuition Fee Reimbursement: Actual tuition fees charged by the institution",
    "Monthly Stipend: ₹3,000-₹5,000 per month for undergraduate students; ₹5,000-₹8,000 per month for postgraduate students",
    "Book and Stationery Allowance: ₹3,000 per annum",
    "Travel Allowance for Inter-State Study: ₹15,000-₹25,000 per annum for students studying outside J&K/Ladakh (one-time or semester-wise)",
    "Hostel Accommodation Allowance: ₹2,000-₹3,000 per month for students in approved hostels",
    "Special Research Grant: ₹5,000 per annum for PG students pursuing research projects",
    "Medical Emergency Allowance: ₹10,000-₹25,000 for health-related emergencies",
    "Examination Fee Reimbursement: Reimbursement of entrance exam fees (NEET, JEE, CAT, etc.) up to ₹5,000",
    "Laptop/Device Allowance: One-time grant of ₹25,000 for purchasing a laptop or educational technology devices",
    "No employment bond or service obligation",
    "Preference in college admission counseling and hostel allocation",
  ],
  requiredDocuments: [
    { name: "Completed application form (prescribed format)", mandatory: true },
    { name: "Class 12 marksheet / Qualifying exam certificate", mandatory: true },
    { name: "Bachelor's degree marksheet (for PG applicants)", mandatory: true },
    {
      name: "Domicile Certificate of J&K or Ladakh",
      mandatory: true,
      note: "Issued by District Revenue Officer, confirming at least 15 years continuous residency",
    },
    { name: "Current year college enrollment/admission certificate", mandatory: true },
    {
      name: "Annual Family Income Certificate",
      mandatory: true,
      note: "Issued by District Revenue Officer or authorized official",
    },
    { name: "Bank Passbook (first page with account holder name and IFSC code)", mandatory: true },
    { name: "Aadhaar Card (copy)", mandatory: true },
    { name: "Passport-sized photographs (4-5 copies)", mandatory: true },
    {
      name: "SC/ST/OBC/EWS Certificate",
      mandatory: false,
      note: "If applicable, for age relaxation or category-based benefits",
    },
    {
      name: "Disability Certificate",
      mandatory: false,
      note: "Issued by District Medical Board if student is PWD",
    },
    { name: "School/College Migration Certificate", mandatory: false },
    { name: "Hostel Admission Letter (if applicable)", mandatory: false, note: "For hostel allowance claim" },
    { name: "PAN Card or Passport (optional)", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Education (Department of Higher Education), Government of India; In coordination with J&K and Ladakh administration",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "J&K",
    "Jammu Kashmir",
    "Ladakh",
    "regional scheme",
    "undergraduate",
    "postgraduate",
    "higher education",
    "merit-based",
    "tuition fee reimbursement",
    "travel allowance",
    "central government",
  ],
  faqs: [
    {
      q: "Who is eligible for the PM Special Scholarship Scheme for J&K and Ladakh Students?",
      a: "Students with permanent domicile of J&K or Ladakh (at least 15 years continuous residency), minimum 60% marks in Class 12 (UG) or Bachelor's degree (PG), family income below ₹8,00,000 per annum, and aged below 25 years are eligible.",
    },
    {
      q: "What is the difference between residency in J&K vs Ladakh?",
      a: "Both Jammu & Kashmir and Ladakh are separate Union Territories since 2019. Students from either territory are eligible. Your domicile certificate must be issued by the respective UT's revenue office (Srinagar/Jammu for J&K or Leh/Kargil for Ladakh).",
    },
    {
      q: "Can I apply if my family recently moved to J&K or Ladakh?",
      a: "No, you must have continuous residency of at least 15 years in J&K or Ladakh. Your domicile certificate will verify this requirement. Residency prior to 2019 in J&K counts towards Ladakh residency if you are now in Ladakh.",
    },
    {
      q: "What is the scholarship amount and how is it disbursed?",
      a: "Undergraduate students receive ₹3,000-₹5,000 monthly plus full tuition fees; postgraduate students get ₹5,000-₹8,000 monthly plus tuition. Additional allowances for books (₹3,000/year), travel (₹15,000-₹25,000/year for out-of-territory study), and hostel (₹2,000-₹3,000/month) are provided. Disbursement is via Direct Benefit Transfer (DBT) monthly or quarterly.",
    },
    {
      q: "Is the travel allowance available if I study within J&K or Ladakh?",
      a: "No, the inter-state travel allowance of ₹15,000-₹25,000 is specifically for students studying outside J&K/Ladakh. If you study within the territory, you receive the regular monthly stipend without travel allowance.",
    },
    {
      q: "What is the laptop/device allowance and how can I claim it?",
      a: "One-time grant of ₹25,000 is provided for purchasing a laptop or educational technology device. You need to submit bills/invoices and bank transfer proof for reimbursement during the first year of scholarship disbursement.",
    },
    {
      q: "Can I receive this scholarship while studying abroad?",
      a: "No, this scholarship is exclusively for studies at recognized Indian educational institutions. It is not applicable for overseas higher education, even if you remain an Indian citizen.",
    },
    {
      q: "What is the minimum marks requirement?",
      a: "Minimum 60% marks or equivalent CGPA in the qualifying examination (Class 12 for undergraduate; Bachelor's degree for postgraduate) is mandatory.",
    },
    {
      q: "Can I apply for this scholarship if I'm pursuing part-time or distance learning?",
      a: "No, this scholarship is exclusively for full-time, regular programmes at recognized institutions. Part-time, distance learning, and online-only courses are not eligible.",
    },
    {
      q: "How do I apply?",
      a: "Visit scholarships.gov.in, register with your credentials, select 'PM Special Scholarship for J&K and Ladakh Students', fill the application form, upload all required documents (domicile certificate, income certificate, enrollment certificate, marksheet, bank details, Aadhaar), and submit for institutional verification.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines typically fall between June and September each year. Check the National Scholarship Portal regularly for exact announcement dates, submission deadlines, and scheme-specific updates.",
    },
    {
      q: "Is there an upper age limit?",
      a: "Yes, the maximum age limit is 25 years as on the application date. However, relaxation of 5 additional years is provided for SC/ST/PwD categories, making the limit 30 years for eligible candidates.",
    },
    {
      q: "Can I claim medical emergency allowance multiple times?",
      a: "The ₹10,000-₹25,000 medical emergency allowance is disbursed once during the scholarship tenure, based on documented medical emergencies and institution/government approval.",
    },
    {
      q: "Do I need to renew the scholarship every year?",
      a: "Yes, continuing students must submit renewal applications each academic year with proof of passing the previous examination, updated income certificate (if income changes), and enrollment certificate for the new academic year.",
    },
    {
      q: "Will I get hostel allowance if I'm living with relatives in the city where I study?",
      a: "No, hostel allowance is specifically for students residing in institution-approved hostels. You need to provide hostel admission letter and receipt for claiming this benefit.",
    },
    {
      q: "Is there any employment bond or service requirement after graduation?",
      a: "No, this is a pure scholarship with no employment bond, service obligation, or payback requirement. You are free to pursue any career path after completing your studies.",
    },
    {
      q: "Can I receive this scholarship along with other central government scholarships?",
      a: "Generally, you cannot receive simultaneous financial support from multiple central scholarship schemes. However, state-level scholarships from J&K/Ladakh may be stackable — declare all ongoing financial assistance in your application for clarification.",
    },
    {
      q: "What if my domicile certificate is from the pre-2019 J&K state structure?",
      a: "Post-2019, J&K and Ladakh are separate UTs. If your certificate pre-dates this, get a new domicile certificate from the current UT administration (J&K or Ladakh) confirming your residency status under the new structure.",
    },
  ],
  source: "sample",
};
