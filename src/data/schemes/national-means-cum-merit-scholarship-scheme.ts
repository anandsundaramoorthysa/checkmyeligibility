import type { Scheme } from "@/lib/types";

export const nationalMeansCumMeritScholarshipScheme: Scheme = {
  id: "national-means-cum-merit-scholarship-scheme",
  slug: "national-means-cum-merit-scholarship-scheme-nmms",
  name: "National Means-cum-Merit Scholarship Scheme (NMMS)",
  shortName: "NMMS",
  summary: "A central government scholarship program supporting talented students from economically weaker sections pursuing secondary education, balancing merit-based selection with financial need to reduce school dropouts and encourage academic excellence.",
  description: "The National Means-cum-Merit Scholarship Scheme (NMMS) is a flagship initiative of the Ministry of Education (formerly MHRD) designed to identify and support talented students from economically disadvantaged backgrounds at the secondary education level. The scheme operates on a dual criterion: academic excellence (merit) combined with financial need (means). It provides annual scholarships of ₹12,000 (₹1,000 per month for 12 months) to identified meritorious students from economically weaker sections, helping to reduce school dropout rates and promote educational continuity. The scheme targets students in Classes IX and X across all states and union territories. Selection is based on performance in state-level entrance exams (meritorious students scoring in top positions) combined with income limit criteria (family annual income not exceeding ₹3,50,000). The scheme emphasizes geographical representation ensuring participation from rural and urban areas, various social categories, and both genders. Special provisions exist for SC/ST/OBC students with relaxed criteria. NMMS has benefited over 20 lakh students nationwide, significantly reducing secondary education dropout rates and enabling continuation to higher education.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Class and Stream",
      value: "Student studying in Class IX or X (secondary education level) in government or government-aided school; pursuing regular academics (not distance learning)",
      type: "education",
    },
    {
      label: "Family Income Limit",
      value: "Annual family income not exceeding ₹3,50,000; income limit may be adjusted annually; includes all sources of family income",
      type: "income",
    },
    {
      label: "Academic Performance (Merit Criterion)",
      value: "Minimum 55% marks in previous annual examination or qualifying entrance exam; SC/ST students require minimum 50% marks; must be in top merit positions in state/district",
      type: "education",
    },
    {
      label: "National Test Selection",
      value: "Selected through SAT (Scholastic Aptitude Test) conducted nationally; clearing NMMS entrance test at state/UT level with qualifying marks and merit ranking",
      type: "education",
    },
    {
      label: "Residency and Citizenship",
      value: "Indian citizen; state resident as per specified duration (typically 3-5 years); studied in state school system for continuous two years before selection",
      type: "residence",
    },
    {
      label: "School Type and Recognition",
      value: "Studying in government or government-aided school recognized by state board; private school students not eligible; school must be affiliated with recognized state board (CBSE/ICSE/State Board)",
      type: "education",
    },
    {
      label: "Previous Scholarship Status",
      value: "Not receiving any other national-level scholarship simultaneously; state scholarships may overlap; no student previously awarded NMMS for same class level can reapply",
      type: "other",
    },
  ],
  benefits: [
    {
      label: "Annual Scholarship Amount",
      value: "₹12,000 per annum (₹1,000 per month for 12 months) disbursed in monthly installments or half-yearly installments",
    },
    {
      label: "Direct Benefit Transfer (DBT)",
      value: "Scholarship amount transferred directly to student's or parent's bank account via DBT system; no paper-based payments",
    },
    {
      label: "No Collateral or Guarantee",
      value: "Pure scholarship grant with no repayment requirement; no collateral, guarantor, or employment bond needed",
    },
    {
      label: "Academic Support",
      value: "Access to government school educational resources; free textbooks and educational materials as per state norms; counseling support available",
    },
    {
      label: "Continuity through Secondary Level",
      value: "Scholarship available for both Class IX and Class X (2-year support); students maintain scholarship if marks criteria met annually",
    },
    {
      label: "Priority for Backward Areas",
      value: "Special consideration for students from Schedule Tribe (ST) areas, Schedule Caste (SC) habitations, and geographically backward districts",
    },
    {
      label: "Girl Child Priority",
      value: "Preference given to girl students in merit-selection process; girls' scholarship retention often has relaxed continuation criteria",
    },
    {
      label: "SC/ST/OBC Concession",
      value: "Relaxed merit criterion (50% instead of 55% marks) for SC/ST candidates; reserved quota for SC/ST/OBC categories in scholarship distribution",
    },
    {
      label: "Rural Student Representation",
      value: "Priority allocation to students from rural and semi-urban areas; state ensures geographical balance in scholarship distribution",
    },
    {
      label: "Entrance Exam Preparation Support",
      value: "Practice test materials, sample question papers, and exam guidance provided; preparation resources available through government websites",
    },
    {
      label: "Career Counseling",
      value: "Career guidance and counseling services provided through schools; information about post-secondary education pathways and skill development",
    },
    {
      label: "Educational Continuation Support",
      value: "Facilitation for higher education admission; career fairs and vocational guidance organized to ensure educational continuation",
    },
    {
      label: "Official Recognition and Prestige",
      value: "NMMS scholarship provides official recognition as meritorious student; credential enhances college admission prospects and employment opportunities",
    },
  ],
  requiredDocuments: [
    {
      name: "Completed NMMS Application Form",
      mandatory: true,
      note: "Official application form provided by school or state education portal; prescribed format only; filled by student with parental consent",
    },
    {
      name: "Proof of Income",
      mandatory: true,
      note: "Family annual income below ₹3,50,000; income certificate from gram panchayat/revenue office within 6 months; includes salary + self-employment + agricultural income",
    },
    {
      name: "Birth Certificate or Age Proof",
      mandatory: true,
      note: "Birth certificate or Class IX admission register showing date of birth; age should confirm student is in eligible class range",
    },
    {
      name: "School Enrollment Certificate",
      mandatory: true,
      note: "Current year enrollment certificate from school confirming Class IX or X enrollment; issued on school letterhead by principal",
    },
    {
      name: "Previous Year Mark Sheet",
      mandatory: true,
      note: "Mark sheet from previous class showing minimum 55% marks (50% for SC/ST); official certificate from school with performance details",
    },
    {
      name: "Proof of Residency",
      mandatory: true,
      note: "State residency proof (domicile certificate, utility bill, ration card, property deed); confirming 3-5 years continuous residence in state",
    },
    {
      name: "Caste Certificate (if applicable)",
      mandatory: true,
      note: "Valid SC/ST/OBC certificate from state revenue office; mandatory for claiming category-based relaxation in marks or reserved quota",
    },
    {
      name: "Bank Account Details",
      mandatory: true,
      note: "Student's or parent's bank account with IFSC code; preferably linked to Aadhaar for DBT; account holder verification required",
    },
    {
      name: "Aadhaar Card",
      mandatory: false,
      note: "Student's Aadhaar ID for digital verification and DBT processing; facilitates faster fund transfer and duplicate prevention",
    },
    {
      name: "Passport-Sized Photograph",
      mandatory: false,
      note: "2-4 passport-sized recent photographs of student; black & white or color acceptable; for identification and record purposes",
    },
    {
      name: "School Conduct Certificate",
      mandatory: false,
      note: "School principal's conduct and character certificate; confirms good behavior and regular attendance; optional but strengthens application",
    },
    {
      name: "Guardianship Certificate (if applicable)",
      mandatory: false,
      note: "Legal guardianship documentation if student is orphan or separated from parents; establishes legal representative for communication",
    },
    {
      name: "Disability Certificate (if applicable)",
      mandatory: false,
      note: "Disability certificate from medical authority if student has any disability; for priority and concession consideration",
    },
  ],
  officialPortalUrl: "https://www.nmmsonline.nic.in/",
  ministry: "Ministry of Education (formerly MHRD), Department of School Education & Literacy, Government of India",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "NMMS",
    "secondary education",
    "Class IX",
    "Class X",
    "merit-cum-means",
    "central government",
    "student support",
    "economic assistance",
    "education equity",
    "dropout reduction",
    "India",
    "school scholarship",
    "economically weaker section",
    "national scheme",
  ],
  faqs: [
    {
      question: "What is the National Means-cum-Merit Scholarship Scheme (NMMS)?",
      answer: "NMMS is a central government scholarship program providing annual grants of ₹12,000 to talented students from economically weaker sections studying in Classes IX and X. It combines merit-based selection (through entrance examination) with financial need (income limit of ₹3,50,000) to support secondary education continuation and reduce school dropout rates.",
    },
    {
      question: "Who is eligible to apply for NMMS?",
      answer: "Students studying in Class IX or X in government/government-aided schools with minimum 55% marks (50% for SC/ST) in previous exam, annual family income below ₹3,50,000, state residency for 3-5 years, and who cleared the NMMS entrance exam are eligible.",
    },
    {
      question: "What is the scholarship amount?",
      answer: "Annual scholarship amount is ₹12,000 (₹1,000 per month for 12 months) disbursed monthly or half-yearly through Direct Benefit Transfer (DBT) to student's/parent's bank account.",
    },
    {
      question: "How many years can I receive this scholarship?",
      answer: "NMMS scholarship is available for both Class IX and Class X (2-year support maximum). Students must reapply each year to continue, meeting merit criteria (minimum marks) and means criteria (income limit) annually.",
    },
    {
      question: "What is the income limit?",
      answer: "Annual family income ceiling is ₹3,50,000 from all sources. This includes salary income, self-employment income, agricultural income, rental income, and any other family earnings. Income certificate must be issued by revenue office.",
    },
    {
      question: "What is the minimum marks requirement?",
      answer: "General category students require minimum 55% marks in previous annual examination. SC/ST category students are eligible with minimum 50% marks. Performance must also rank in top merit positions in state/district level entrance exam.",
    },
    {
      question: "Which schools are eligible?",
      answer: "Only government schools and government-aided schools recognized by state education boards are eligible. Private schools are not covered. Schools must be affiliated with CBSE, ICSE, or state board.",
    },
    {
      question: "How is selection done?",
      answer: "Selection is through two-stage process: (1) Academic qualification (55% marks), (2) Merit-cum-means entrance examination (SAT) conducted at state/UT level. Top scorers in entrance exam with family income below ₹3,50,000 are selected.",
    },
    {
      question: "Is there relaxation for SC/ST/OBC students?",
      answer: "Yes, SC/ST students get relaxation in marks criterion (50% instead of 55%) and may have reserved quota positions. OBC students may also get some priority consideration depending on state policies.",
    },
    {
      question: "Are girls given priority?",
      answer: "Yes, girl students are given priority in merit-based selection process, and their scholarship is often retained with relatively relaxed continuation criteria. Many states ensure gender balance in scholarship distribution.",
    },
    {
      question: "Can I apply if I'm studying in a private school?",
      answer: "No, NMMS is only for government and government-aided schools. Students in private schools are not eligible, even if they meet other criteria.",
    },
    {
      question: "What is the application process?",
      answer: "Students apply through their school after it announces NMMS selection. Application forms are filled online via state portal or offline through school. After submission, students appear in state-level SAT (Scholastic Aptitude Test). Merit lists are prepared and scholarships awarded.",
    },
    {
      question: "When is the scholarship disbursed?",
      answer: "Scholarship is disbursed monthly (₹1,000 per month) or half-yearly through Direct Benefit Transfer (DBT) to linked bank account. First disbursement typically starts within 2-3 months of approval.",
    },
    {
      question: "Can I receive NMMS along with other scholarships?",
      answer: "NMMS cannot be received simultaneously with other national-level scholarships. However, state-level scholarships may be combined depending on scheme guidelines. State scholarships and NMMS can often be received together.",
    },
    {
      question: "What happens if my family income increases during the year?",
      answer: "If income exceeds ₹3,50,000 during the scholarship year, the student remains eligible for that year. However, income increase affects renewal for the next year. Fresh income certificate is required during annual renewal process.",
    },
    {
      question: "What documents are mandatory for application?",
      answer: "Mandatory documents include: (1) Application form, (2) Income certificate <₹3,50,000, (3) Birth certificate/age proof, (4) School enrollment certificate, (5) Previous mark sheet, (6) Residency proof, (7) Caste certificate (if applicable), (8) Bank account details.",
    },
    {
      question: "How do I get my income certificate?",
      answer: "Income certificate is issued by gram panchayat in rural areas or municipal corporation in urban areas. Apply at local revenue office with supporting documents like salary slips, tax returns, or employment letter. Certificate is typically issued within 7-10 days.",
    },
    {
      question: "Can I appeal if my scholarship application is rejected?",
      answer: "Yes, rejected applications can be appealed within specified time period (typically 30 days) to district education office with supporting evidence. Common rejection reasons include income exceeding limit or marks below minimum threshold.",
    },
  ],
  source: "sample",
};
