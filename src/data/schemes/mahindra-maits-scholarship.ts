import type { Scheme } from "@/lib/types";

export const mahindraMailtsScholarship: Scheme = {
  id: "mahindra-maits-scholarship",
  slug: "mahindra-all-india-talent-scholarship-maits",
  name: "Mahindra ALL India Talent (MAITS) Scholarship",
  shortName: "Mahindra MAITS",
  summary:
    "Merit-based scholarship for meritorious students across India pursuing undergraduate and postgraduate studies, with financial assistance of up to ₹5 lakh annually.",
  description:
    "The Mahindra ALL India Talent (MAITS) Scholarship is a prestigious scholarship programme launched by the Mahindra Group to identify and support exceptionally meritorious students across India. The scheme aims to recognize and nurture talented young minds regardless of their socioeconomic background, enabling them to pursue higher education without financial constraints. Students from diverse academic streams — engineering, commerce, science, management, and humanities — are encouraged to apply. The scholarship considers both academic merit (70%+ in Class 12 or equivalent) and financial need, with preference given to first-generation learners and students from underprivileged backgrounds. Awards range from partial support to full tuition coverage depending on financial eligibility.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic Performance",
      value: "Minimum 70% aggregate marks in Class 12 / Diploma / Bachelor's degree (or equivalent CGPA)",
      type: "education",
    },
    {
      label: "Course & Institution",
      value:
        "Enrolled in an accredited undergraduate (UG) or postgraduate (PG) programme at a recognized Indian university or institute",
      type: "education",
    },
    {
      label: "Age",
      value: "Maximum 25 years of age as on the application date (relaxation for SC/ST/PwD as per government norms)",
      type: "age",
    },
    {
      label: "Annual Family Income",
      value:
        "Generally below ₹6,00,000 per annum (may vary; merit-based students with higher income also considered for partial support)",
      type: "income",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
  ],
  benefits: [
    "Up to ₹5,00,000 per annum for full scholarship awardees",
    "Partial scholarship ranging from ₹1,00,000 to ₹3,00,000 per annum based on merit and financial need",
    "Mentorship from Mahindra Group professionals",
    "Internship opportunities within Mahindra Group companies",
    "Networking events and career development workshops",
    "Certificate of recognition",
    "Access to Mahindra's digital learning platform and resources",
    "Possibility of pre-placement interviews for qualifying candidates",
  ],
  requiredDocuments: [
    { name: "Completed online application form", mandatory: true },
    { name: "Class 12 marksheet / Diploma / Bachelor's degree certificate", mandatory: true },
    { name: "Current academic enrollment certificate (study/bonafide certificate)", mandatory: true },
    { name: "Annual Family Income Certificate (issued by municipality / gram panchayat)", mandatory: true },
    { name: "Bank Passbook (first page showing account holder name)", mandatory: true },
    { name: "Aadhaar Card (copy)", mandatory: true },
    { name: "PAN Card or Passport (for PG candidates)", mandatory: false },
    {
      name: "Category Certificate (SC / ST / OBC / EWS)",
      mandatory: false,
      note: "Only if applicable",
    },
    {
      name: "Disability Certificate",
      mandatory: false,
      note: "Only if applicable (issued by District Medical Board)",
    },
    { name: "Letter of recommendation from school/college principal or faculty", mandatory: false },
    { name: "Essay / Statement of Purpose (250-500 words)", mandatory: true },
    { name: "Passport-sized photographs (3-4 copies)", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.mahindra.com/",
  ministry: "Mahindra Group (Corporate Social Responsibility)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "merit-based",
    "Mahindra",
    "MAITS",
    "undergraduate",
    "postgraduate",
    "all-india",
    "financial aid",
    "corporate scholarship",
    "first-generation learners",
  ],
  faqs: [
    {
      q: "Who is eligible to apply for the Mahindra MAITS Scholarship?",
      a: "Indian citizens aged below 25 years with a minimum 70% aggregate in their qualifying exam (Class 12, Diploma, or Bachelor's degree), and a family annual income typically below ₹6,00,000 are eligible. Merit-based candidates with higher income may also be considered for partial scholarships.",
    },
    {
      q: "Can I apply if I'm already receiving another scholarship?",
      a: "Yes, you can apply for Mahindra MAITS even if you're receiving another scholarship. However, you cannot receive financial support from two different sources simultaneously. You will need to declare all ongoing financial assistance.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines typically fall in June-July each year. Check the official Mahindra scholarships portal (scholarships.mahindra.com) for exact dates and announce notifications.",
    },
    {
      q: "How long does the scholarship last?",
      a: "The scholarship is awarded for the duration of your current course subject to satisfactory academic performance (usually minimum 60% marks per year) and submission of renewal documents annually.",
    },
    {
      q: "What is the selection process?",
      a: "Selection is based on: (1) merit (70% weightage), (2) financial need (20% weightage), and (3) statement of purpose/interview (10% weightage). Shortlisted candidates may be called for a personal interview.",
    },
    {
      q: "How is the scholarship amount disbursed?",
      a: "The scholarship is credited annually to the student's bank account via Direct Benefit Transfer (DBT) or issued as a cheque to the institution for tuition fee deduction, depending on the award amount and institutional arrangement.",
    },
    {
      q: "Does the scholarship cover living expenses or only tuition fees?",
      a: "The scholarship primarily covers tuition and academic fees. Living expenses are not directly covered, but full-award recipients may receive an annual allowance component.",
    },
    {
      q: "Can international students apply?",
      a: "No, Mahindra MAITS Scholarship is exclusively for Indian citizens studying in recognized Indian institutions.",
    },
  ],
  source: "sample",
};
