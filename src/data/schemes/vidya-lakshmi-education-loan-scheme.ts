import type { Scheme } from "@/lib/types";

export const vidyaLakshmiEducationLoanScheme: Scheme = {
  id: "vidya-lakshmi-education-loan-scheme",
  slug: "vidya-lakshmi-education-loan-scheme",
  name: "Vidya Lakshmi Education Loan Scheme",
  shortName: "Vidya Lakshmi",
  summary: "A comprehensive central government education loan facilitation scheme providing subsidized and non-subsidized loans to students pursuing higher education in India and abroad, with income-contingent repayment options and special concessions for economically weaker sections.",
  description: "Vidya Lakshmi is a flagship government initiative designed to facilitate easy access to education loans for students pursuing higher education. Operated as a joint initiative of the Ministry of Human Resource Development (MHRD) and participating banks, the scheme provides a comprehensive digital platform for loan applications, processing, and monitoring. It offers two primary loan categories: (1) Subsidized loans for economically weaker sections with government interest subsidy during moratorium period, and (2) Non-subsidized loans for all eligible students at competitive rates. The scheme covers education loans ranging from ₹4,00,000 to ₹1,00,00,000+ depending on course, institution tier, and location. Special features include provision for collateral-free loans up to ₹7.5 lakhs, moratorium period (typically 6 months to 1 year post-completion), income-contingent repayment options, and government interest subsidy for students from EWS backgrounds. The scheme has digitally unified loan processing across multiple banks, reducing application time from weeks to days. Loans are available for undergraduate, postgraduate, research programs, and professional certifications from recognized institutions in India and abroad.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Educational Status",
      value: "Indian citizen student pursuing higher education (UG/PG/Research) in recognized Indian institution or abroad; admission secured or admission letter available",
      type: "education",
    },
    {
      label: "Course and Institution Recognition",
      value: "Course must be minimum 2-3 years duration; institution recognized by UGC/AICTE/DEC/state board; foreign institutions must be recognized by host country authorities",
      type: "education",
    },
    {
      label: "Age Limit",
      value: "Student should be above 16 years and below 40 years of age; no upper age limit for professional development/skill upgrade courses",
      type: "age",
    },
    {
      label: "Family Income",
      value: "No income ceiling for general category; economically weaker sections with annual family income below ₹4,50,000 eligible for subsidized loans with government interest subsidy",
      type: "income",
    },
    {
      label: "Academic Performance",
      value: "Minimum 50% marks or equivalent grade in qualifying examination (CBSE/state board/equivalent); relaxation to 45% for SC/ST/OBC candidates; no eligibility restriction for research programs",
      type: "education",
    },
    {
      label: "Collateral Requirements",
      value: "Collateral-free loans up to ₹7.5 lakhs; loans beyond ₹7.5 lakhs require tangible collateral (property/fixed deposit/gold/NSC/bonds) with valuation",
      type: "other",
    },
    {
      label: "Co-Borrower/Guarantor",
      value: "One creditworthy co-applicant (parent/guardian) required; guarantor with good credit score mandatory for loans above ₹7.5 lakhs or as per bank policy",
      type: "occupation",
    },
  ],
  benefits: [
    {
      label: "Subsidized Loan Amount",
      value: "₹4,00,000 - ₹1,00,00,000+ depending on course, institution, and location; no upper limit for specialized programs",
    },
    {
      label: "Government Interest Subsidy (EWS)",
      value: "100% government interest subsidy during moratorium period (typically 6-12 months post-completion) for students with family income below ₹4,50,000",
    },
    {
      label: "Collateral-Free Loan Component",
      value: "Up to ₹7.5 lakhs available without any collateral requirement; valid for both subsidized and non-subsidized loans",
    },
    {
      label: "Low Interest Rate",
      value: "Interest rates ranging from 8.5%-10.5% per annum depending on loan amount and category; rates adjusted by RBI/participating banks annually",
    },
    {
      label: "Flexible Moratorium Period",
      value: "6 months to 1 year grace period after course completion with no EMI payment during this period; ideal for job search and placement",
    },
    {
      label: "Extended Repayment Period",
      value: "Loan repayment period extends up to 15 years depending on total disbursed amount; maximum tenure flexibility available",
    },
    {
      label: "Income-Contingent Repayment (ICR)",
      value: "Special provision for lower EMI initially (from 25% of income) that increases with salary growth; bridges employment period",
    },
    {
      label: "Loan to All Recognized Institutions",
      value: "Loans available for IIT/NIT/Delhi University/DU colleges through Tier-1 institutions to Tier-3 regional colleges and private institutes",
    },
    {
      label: "Foreign Education Support",
      value: "Loans available for higher education abroad up to ₹1,00,00,000+ for students admitted to recognized universities in USA, UK, Canada, Australia, Singapore, etc.",
    },
    {
      label: "Processing and Documentation Support",
      value: "Free loan processing, no hidden charges, transparent fee structure; SLBC/district bank coordinates assistance; helpline support available",
    },
    {
      label: "Employment-Linked Concessions",
      value: "Special provisions for self-employed applicants; government employment guarantee bonds accepted for enhanced loan eligibility",
    },
    {
      label: "Optional Life Insurance",
      value: "Group life insurance coverage available at subsidized premium (typically ₹0-500 per annum) covering loan amount in case of death/disability",
    },
    {
      label: "Digital Platform Access",
      value: "Access to centralized Vidya Lakshmi portal for online application, document upload, status tracking, and loan management 24/7",
    },
  ],
  requiredDocuments: [
    {
      name: "Completed Loan Application Form",
      mandatory: true,
      note: "Available on Vidya Lakshmi portal (www.vidyalakshmi.nsdl.com) with pre-filled fields based on registration",
    },
    {
      name: "Proof of Identity",
      mandatory: true,
      note: "Aadhaar, PAN, Passport, or Driving License (scanned copy); identity verification mandatory",
    },
    {
      name: "Proof of Address",
      mandatory: true,
      note: "Recent utility bill, rental agreement, property document, or Aadhaar; address proof within 6 months",
    },
    {
      name: "Educational Certificates",
      mandatory: true,
      note: "10th and 12th mark sheets, graduation degree (if applicable), entrance exam scores (CAT/GATE/JEE); certifying minimum qualification",
    },
    {
      name: "Admission/Enrollment Certificate",
      mandatory: true,
      note: "Provisional or final admission letter from institution confirming course, duration, fees; must be on institution letterhead",
    },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Latest income tax return (2 years if self-employed) or salary certificate from employer; for subsidized loan eligibility (<₹4,50,000 annual family income)",
    },
    {
      name: "Fee Structure Document",
      mandatory: true,
      note: "Detailed fee structure from institution showing tuition, hostel, miscellaneous charges; required for loan amount calculation",
    },
    {
      name: "Co-Applicant/Guarantor Documents",
      mandatory: true,
      note: "KYC documents (PAN, Aadhaar, Passport) and income proof of co-applicant/guarantor; creditworthiness assessment required",
    },
    {
      name: "Collateral Documents (if applicable)",
      mandatory: false,
      note: "Property deed, vehicle registration, insurance policy, gold jewelry valuation, NSC/bonds; for loans above ₹7.5 lakhs",
    },
    {
      name: "Bank Account Statements",
      mandatory: false,
      note: "6 months bank statements showing regular deposits; demonstrates financial discipline and repayment capability",
    },
    {
      name: "Employment Letter (if employed)",
      mandatory: false,
      note: "Offer letter from employer or current employment certificate; for self-employed, business registration/GST certificate",
    },
    {
      name: "Form 16/ITR (Income Proof)",
      mandatory: false,
      note: "Income tax documents for past 2 years; strengthens subsidy/concession eligibility",
    },
    {
      name: "Caste Certificate (if SC/ST/OBC)",
      mandatory: false,
      note: "Valid caste certificate for relaxation in academic performance requirement; state-issued certificate",
    },
  ],
  officialPortalUrl: "https://www.vidyalakshmi.nsdl.com/",
  ministry: "Ministry of Human Resource Development (MHRD) / Ministry of Education, Government of India",
  applicationMode: ["online"],
  tags: [
    "education loan",
    "higher education",
    "student loan",
    "subsidized loan",
    "India",
    "abroad education",
    "collateral-free",
    "central government",
    "undergraduate",
    "postgraduate",
    "income-contingent repayment",
    "EWS",
    "interest subsidy",
    "NSDL",
    "digital platform",
  ],
  faqs: [
    {
      question: "What is the Vidya Lakshmi Education Loan Scheme?",
      answer: "Vidya Lakshmi is a centralized digital platform launched by MHRD and Ministry of Education in partnership with participating banks to facilitate education loans for students pursuing higher education. It provides both subsidized loans (with government interest subsidy) for EWS students and non-subsidized loans for all eligible students.",
    },
    {
      question: "What is the maximum loan amount available?",
      answer: "Maximum loan amounts range from ₹1,00,00,000 for domestic education to ₹1,50,00,000+ for foreign education, depending on course type, institution tier, country of study, and duration. No upper limit for specialized/research programs.",
    },
    {
      question: "What is the minimum loan amount?",
      answer: "Minimum loan amount typically starts from ₹4,00,000 for UG courses. However, loans below this may be considered for specific cases, skill development programs, or diploma courses on bank discretion.",
    },
    {
      question: "Is there a collateral requirement?",
      answer: "No collateral is required for loans up to ₹7.5 lakhs. Beyond this, tangible collateral such as property, gold, fixed deposits, or government securities with appropriate valuation is mandatory as per bank policy.",
    },
    {
      question: "What is government interest subsidy?",
      answer: "Government provides 100% interest subsidy during the moratorium period (typically 6-12 months after course completion) for students with family income below ₹4,50,000. Subsidy covers both principal and interest accrual, reducing student burden.",
    },
    {
      question: "How long is the moratorium period?",
      answer: "Moratorium period typically ranges from 6 months to 1 year after course completion, during which no EMI payments are required. This period provides breathing space for job search and initial employment. Exact duration depends on course type and bank policy.",
    },
    {
      question: "What is the interest rate?",
      answer: "Interest rates typically range from 8.5% to 10.5% per annum depending on loan amount, loan type (subsidized/non-subsidized), and prevailing market rates. Rates are variable and reviewed annually by RBI and participating banks.",
    },
    {
      question: "What is the maximum repayment period?",
      answer: "Maximum repayment tenure extends up to 15 years depending on total disbursed amount. For loans ₹20 lakhs and above, tenure up to 20 years may be available. Longer tenure reduces monthly EMI burden.",
    },
    {
      question: "What is income-contingent repayment (ICR)?",
      answer: "ICR is a special repayment option where EMI is initially set at 25% of gross monthly income. As salary increases, EMI automatically increases up to standard rate. This bridges the employment period when income is lower.",
    },
    {
      question: "Can I apply for a loan for education abroad?",
      answer: "Yes, education loans are available for higher education in recognized foreign universities (USA, UK, Canada, Australia, etc.). Maximum loan amount is typically higher for foreign education (₹1,50,00,000+). TOEFL/IELTS scores and admission letter from recognized institution mandatory.",
    },
    {
      question: "What courses are covered under the scheme?",
      answer: "Scheme covers all recognized higher education programs including UG degrees (BA, BSc, BTech), PG degrees (MA, MSc, MTech), professional courses (MBA, CA, Law), research programs (PhD), and specialized certifications from UGC/AICTE/DEC recognized institutions.",
    },
    {
      question: "Can I include living expenses in the loan amount?",
      answer: "Yes, loans can cover course fees, hostel charges, books, uniforms, equipment, travel expenses, and other direct educational expenses. Typical education loan covers tuition + hostel + miscellaneous + books allowance.",
    },
    {
      question: "Is there an age limit for eligibility?",
      answer: "Students should generally be above 16 years and below 40 years of age. However, no strict upper age limit for professional development, skill upgrade programs, or research. Age relaxation available for SC/ST/OBC candidates.",
    },
    {
      question: "How do I apply online through Vidya Lakshmi portal?",
      answer: "Visit www.vidyalakshmi.nsdl.com, register with mobile/email, fill application form with personal/educational/financial details, upload required documents, select preferred banks, and submit. Application status can be tracked in real-time.",
    },
    {
      question: "Which banks participate in Vidya Lakshmi scheme?",
      answer: "Major participating banks include State Bank of India, ICICI Bank, HDFC Bank, Axis Bank, Canara Bank, Union Bank, Central Bank, Indian Bank, Bank of Baroda, and others. Students can apply to multiple banks simultaneously through single portal.",
    },
    {
      question: "What is the approval timeline?",
      answer: "Application approval typically takes 7-15 days once all documents are submitted and verified. Complex cases or foreign education loans may take up to 30 days. Funds are disbursed directly to institution account.",
    },
    {
      question: "Can I get a loan if I don't have a collateral or guarantor?",
      answer: "Yes, collateral-free loans up to ₹7.5 lakhs are available. For loans above this, you need tangible collateral OR a creditworthy guarantor (typically parent). Banks may also accept government employee guarantee bonds.",
    },
    {
      question: "What happens if I can't repay the loan?",
      answer: "If facing financial difficulty, contact your bank for restructuring options including tenure extension, reduced EMI period, or ICR modification. Group life insurance covers loan amount if applicant dies. Default reporting affects credit score negatively.",
    },
  ],
  source: "sample",
};
