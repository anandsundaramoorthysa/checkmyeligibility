import type { Scheme } from "@/lib/types";

export const mahatmaJyotiraoPhuleEducationalConcession: Scheme = {
  id: "mahatma-jyotirao-phule-educational-concession",
  slug: "mahatma-jyotirao-phule-educational-concession",
  name: "Mahatma Jyotirao Phule Educational Concession",
  shortName: "Phule Educational Concession",
  summary: "A Maharashtra state government initiative providing comprehensive educational concessions, fee waivers, and financial support to students from economically weaker and marginalized communities, honoring the legacy of social reformer Mahatma Jyotirao Phule.",
  description: "The Mahatma Jyotirao Phule Educational Concession is a flagship scheme by the Maharashtra government dedicated to promoting educational equity and social justice. Named after the renowned social reformer and education pioneer Mahatma Jyotirao Phule, the scheme provides multifaceted educational support to students from economically disadvantaged backgrounds, lower castes, and marginalized communities. The concession encompasses tuition fee waivers, examination fee reductions, scholarship stipends, hostel facilities, and educational materials support. The scheme operates across all levels of education from primary through higher education (Class 1 to PG/Professional courses). Primary benefits include up to 100% tuition fee waiver for identified EWS and SC/ST students, monthly stipends ranging from ₹100 to ₹500, annual book allowances, and free hostel accommodation with meal support for eligible girls. The scheme emphasizes intersectional support recognizing gender disparities, caste-based discrimination, and economic hardship. Special provisions exist for students pursuing professional courses (engineering, medicine, law, management) with enhanced support. The scheme has been instrumental in increasing literacy rates and educational access among marginalized communities in Maharashtra.",
  category: "scholarship",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Residency",
      value: "Permanent resident of Maharashtra state; domicile proof required; student should have studied minimum 2 years in Maharashtra schools",
      type: "residence",
    },
    {
      label: "Economic Status",
      value: "Economically weaker section with annual family income below ₹2,50,000; or SC/ST/OBC category candidates regardless of income with documentation",
      type: "income",
    },
    {
      label: "Educational Level",
      value: "Student pursuing education from Class 1 through postgraduate/professional courses (engineering, medicine, law, management) in recognized institutions",
      type: "education",
    },
    {
      label: "Academic Performance",
      value: "Minimum 40% marks in previous examination or satisfactory school record; no eligibility restriction for SC/ST/OBC candidates; Class 1-3 students exempt from marks criteria",
      type: "education",
    },
    {
      label: "School/Institution Recognition",
      value: "Studying in school/college recognized by state education board, UGC, AICTE, or equivalent regulatory body; private institution recognition required",
      type: "education",
    },
    {
      label: "Social Category",
      value: "Student belonging to SC/ST/OBC/DT (Denotified Tribe) category as per constitutional classification; or EWS certificate holder; caste certificate from state issued authority mandatory",
      type: "caste-category",
    },
    {
      label: "Regular Enrollment",
      value: "Regular student with minimum 75% attendance in previous academic year; currently enrolled in recognized institution; no defaulting history on previous scholarships",
      type: "other",
    },
  ],
  benefits: [
    {
      label: "Tuition Fee Waiver",
      value: "Full or partial tuition fee waiver (up to 100% for identified EWS/SC/ST students); applicable across all educational levels",
    },
    {
      label: "Monthly Stipend/Maintenance Allowance",
      value: "₹100-500 per month depending on educational level and category; Class 1-5: ₹100-150; Class 6-10: ₹200-300; UG/PG: ₹300-500",
    },
    {
      label: "Annual Book and Stationery Allowance",
      value: "₹500-₹1,500 per annum for purchasing textbooks, notebooks, pens, and other stationery materials",
    },
    {
      label: "Examination Fee Reimbursement",
      value: "Full reimbursement of board examination fees (Class 10, 12) and university examination fees for higher education",
    },
    {
      label: "School Uniform Allowance",
      value: "₹300-600 per annum for two pairs of school uniform or annual uniform provision for school-going children",
    },
    {
      label: "Hostel Accommodation and Meals",
      value: "Free or heavily subsidized hostel accommodation for girls and SC/ST boys; hostel meals (breakfast + lunch + dinner) provided free or subsidized",
    },
    {
      label: "Travel and Conveyance Support",
      value: "Monthly travel allowance of ₹100-₹300 or free travel pass for public transport; applicable for students traveling more than 2 km daily",
    },
    {
      label: "Calamity Relief and Contingency",
      value: "Emergency financial support (₹5,000-20,000) for students facing calamities, illness, or unforeseen circumstances affecting education continuity",
    },
    {
      label: "Professional Course Enhancement",
      value: "Enhanced support for engineering, medicine, law, management students: ₹500-₹2,000 monthly stipend + hostel support + specialized lab fee reimbursement",
    },
    {
      label: "Girl Child Special Support",
      value: "Exclusive benefits for girls including free hostel with security, additional ₹50-100 monthly allowance, sanitation products provision, health insurance",
    },
    {
      label: "Merit-Based Incentive",
      value: "Bonus scholarship of ₹500-₹2,000 for students scoring above 75% in class examinations or board examinations",
    },
    {
      label: "Vocational and Skill Development",
      value: "Support for vocational courses, ITI training, skill development programs through direct fee coverage and certification support",
    },
    {
      label: "Health and Counseling Services",
      value: "Free health checkups, counseling services for academic and personal issues, anti-harassment support, and mental health awareness programs",
    },
  ],
  requiredDocuments: [
    {
      name: "Completed Scholarship Application Form",
      mandatory: true,
      note: "Official form available from school/college or Maharashtra state scholarship portal; prescribed format only",
    },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Family annual income below ₹2,50,000; issued by gram panchayat or municipal corporation within 6 months",
    },
    {
      name: "Caste Certificate",
      mandatory: true,
      note: "Valid SC/ST/OBC/DT certificate issued by state authority (revenue office); must be within validity period with reference number",
    },
    {
      name: "Maharashtra Domicile Certificate",
      mandatory: true,
      note: "Proof of permanent residence in Maharashtra; issued by taluka office or municipal authority; minimum 3-5 years residency",
    },
    {
      name: "Current Year Enrollment Certificate",
      mandatory: true,
      note: "School/college enrollment certificate confirming current class/year and regular admission status",
    },
    {
      name: "Previous Year Mark Sheet",
      mandatory: true,
      note: "Marks/grade statement from previous academic year; minimum 40% marks or satisfactory performance certificate",
    },
    {
      name: "Proof of Identity",
      mandatory: true,
      note: "Aadhaar card, PAN, passport, or voter ID of student; any government-issued identity document acceptable",
    },
    {
      name: "Bank Account Details",
      mandatory: true,
      note: "Student's or parent's bank account with IFSC code; linked to Aadhaar for direct benefit transfer (DBT)",
    },
    {
      name: "Proof of Address",
      mandatory: false,
      note: "Recent utility bill, rental agreement, property tax receipt, or ration card confirming Maharashtra residence",
    },
    {
      name: "School/College Fee Structure",
      mandatory: false,
      note: "Detailed fee breakdown from institution confirming tuition, examination, hostel, and miscellaneous charges",
    },
    {
      name: "Guardian/Parent Identity and Income Proof",
      mandatory: false,
      note: "Parent/guardian PAN, salary certificate, or ITR for income verification; required for income-based concession",
    },
    {
      name: "Disability Certificate (if applicable)",
      mandatory: false,
      note: "Disability certificate issued by state medical authority; for students with disabilities seeking enhanced support",
    },
    {
      name: "Single Parent/Widow Certificate (if applicable)",
      mandatory: false,
      note: "Death certificate or legal guardianship document if student from single-parent family; establishes eligibility for priority support",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Department of School Education & Department of Higher Education, Government of Maharashtra",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "educational concession",
    "Maharashtra",
    "state scheme",
    "fee waiver",
    "EWS",
    "SC/ST/OBC",
    "social justice",
    "girls education",
    "stipend",
    "hostel support",
    "Jyotirao Phule",
    "social reformer",
    "India",
    "education equity",
  ],
  faqs: [
    {
      question: "What is the Mahatma Jyotirao Phule Educational Concession?",
      answer: "It is a Maharashtra state government scheme honoring the legacy of social reformer Mahatma Jyotirao Phule. It provides comprehensive educational concessions including fee waivers, stipends, book allowances, and hostel support to students from economically weaker and marginalized communities, promoting educational equity and social justice.",
    },
    {
      question: "Who is eligible for this scheme?",
      answer: "Students from economically weaker sections (family income <₹2,50,000), SC/ST/OBC/DT category students, permanent Maharashtra residents, studying in Classes 1 through postgraduate/professional courses in recognized institutions, with minimum 40% marks in previous examination.",
    },
    {
      question: "Do SC/ST/OBC students need to meet income criteria?",
      answer: "No, SC/ST/OBC/DT category students are eligible regardless of income if they meet other criteria (residency, academic performance, enrollment status). Only EWS students need to meet the ₹2,50,000 annual family income limit.",
    },
    {
      question: "What is the monthly maintenance allowance?",
      answer: "Monthly stipend varies by educational level: Classes 1-5 receive ₹100-150, Classes 6-10 receive ₹200-300, undergraduate students receive ₹300-400, and postgraduate students receive ₹400-500. Professional course students may receive higher amounts.",
    },
    {
      question: "Is tuition fee waiver applicable to private schools?",
      answer: "Yes, tuition fee waiver applies to recognized private schools, government schools, and government-aided institutions. The waiver amount depends on school category and student's EWS/SC/ST/OBC status. Private school fee waivers may be capped at state norms.",
    },
    {
      question: "What is the annual book allowance?",
      answer: "Annual book and stationery allowance ranges from ₹500 to ₹1,500 per annum depending on educational level. Lower classes (1-5) typically receive ₹500-800, while higher classes (9-12) receive ₹1,000-1,500.",
    },
    {
      question: "Is hostel accommodation free or subsidized?",
      answer: "Hostel accommodation is free for SC/ST girls and heavily subsidized for EWS girls. Boys from SC/ST category also get free hostel. Hostel meals (all three meals) are either free or heavily subsidized depending on category.",
    },
    {
      question: "Can I receive this concession for both primary and higher education?",
      answer: "Yes, the scheme covers all educational levels from Class 1 through postgraduate and professional courses. A student can receive concessions throughout their educational journey as long as they meet eligibility criteria each year.",
    },
    {
      question: "What documents are mandatory for application?",
      answer: "Mandatory documents include: (1) Income certificate, (2) Caste certificate (if claiming category benefit), (3) Maharashtra domicile certificate, (4) Current enrollment certificate, (5) Previous mark sheet, (6) Identity proof, (7) Bank account details with IFSC code.",
    },
    {
      question: "How is domicile proof established?",
      answer: "Maharashtra domicile/residency can be proven through revenue office-issued domicile certificate, school enrollment showing 2+ years in Maharashtra schools, utility bills, rental agreements, or property tax receipts. Minimum 3-5 years residency in state typically required.",
    },
    {
      question: "What are the special benefits for girl students?",
      answer: "Girls receive exclusive benefits including: free hostel accommodation with security features, additional ₹50-100 monthly allowance, free sanitation products provision, health insurance coverage, and priority processing. Separate helplines and counseling services provided.",
    },
    {
      question: "Do professional course students get additional support?",
      answer: "Yes, engineering, medicine, law, and management students get enhanced support: higher monthly stipends (₹500-₹2,000), hostel facility with better provisions, specialized laboratory fee reimbursement, and professional development allowance.",
    },
    {
      question: "Can I apply if my family income exceeds ₹2,50,000?",
      answer: "Yes, if you belong to SC/ST/OBC/DT category regardless of income level. EWS students must have family income below ₹2,50,000. Income limits may be revised annually by government.",
    },
    {
      question: "What is the minimum academic performance requirement?",
      answer: "Minimum 40% marks in previous examination or satisfactory school performance. SC/ST/OBC students get relaxation where needed. Classes 1-3 students are exempt from minimum marks requirement.",
    },
    {
      question: "What happens if my scholarship is discontinued?",
      answer: "Scholarship can be discontinued if: (1) Performance drops below 40% marks, (2) Attendance falls below 75%, (3) Student changes school/course without permission, (4) Income limit exceeded for EWS students. Reinstatement possible after addressing grounds for discontinuation.",
    },
    {
      question: "How is the scholarship amount disbursed?",
      answer: "Scholarship is disbursed via Direct Benefit Transfer (DBT) to student's or parent's bank account linked to Aadhaar ID. Monthly stipends credited monthly; annual allowances (books, uniforms) typically disbursed in June/July.",
    },
    {
      question: "Can I apply for this scheme if I'm from outside Maharashtra?",
      answer: "No, permanent residency in Maharashtra is mandatory. Students must have domicile certificate or proof of residence in Maharashtra for at least 3-5 years, and studied in Maharashtra schools for minimum 2 years.",
    },
    {
      question: "How do I apply for this scheme?",
      answer: "Apply online through Maharashtra scholarship portal (https://scholarships.gov.in/) or offline by collecting forms from school/district office. Fill application with required documents, submit to school/district education office, and track status online.",
    },
  ],
  source: "sample",
};
