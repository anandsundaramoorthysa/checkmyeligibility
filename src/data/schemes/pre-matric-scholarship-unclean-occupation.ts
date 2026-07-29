import type { Scheme } from "@/lib/types";

export const prematricScholarshipUncleanOccupation: Scheme = {
  id: "pre-matric-scholarship-unclean-occupation",
  slug: "pre-matric-scholarship-students-unclean-occupation",
  name: "Award of Pre-matric Scholarship to the Students Whose Parents Are Engaged in Unclean Occupation",
  shortName: "Pre-Matric Scholarship (Unclean Occupation)",
  summary: "A central government scholarship program supporting students from economically disadvantaged families whose parents are engaged in occupations classified as unclean or manual scavenging work, enabling educational access and social mobility for vulnerable sections.",
  description: "The Award of Pre-matric Scholarship to the Students Whose Parents Are Engaged in Unclean Occupation is a flagship central government initiative designed to support vulnerable student populations whose parents work in stigmatized and low-income occupations. The scheme recognizes the unique socio-economic challenges faced by families dependent on manual scavenging, waste collection, sanitation work, and allied unclean occupations. It provides comprehensive financial support covering tuition fees, monthly maintenance allowances, book allowances, and supplies to ensure that children from such backgrounds can continue their education without financial constraints. The scholarship covers pre-matric education (Classes 1-10) and aims to break the cycle of poverty and social marginalization. Students can pursue education at government or government-aided schools and private institutions recognized by the state education board. The scheme emphasizes merit-based selection combined with need-based support, ensuring deserving students are not denied education due to economic hardship. Monthly stipends range from ₹100-500 depending on class level, along with annual book allowance of ₹500-1,200. The scheme has been instrumental in improving school enrollment and retention rates among children of manual scavengers and sanitation workers across India.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Parental Occupation",
      value: "Parents or legal guardians engaged in unclean occupations including manual scavenging, waste collection, sanitation work, sweeping, cleaning, or allied low-income occupations classified as unclean",
      type: "occupation",
    },
    {
      label: "Educational Level",
      value: "Student currently studying or seeking admission in Classes 1-10 (pre-matric) in government, government-aided, or recognized private schools",
      type: "education",
    },
    {
      label: "Family Income",
      value: "Family annual income below ₹1,50,000 per annum or as per state government norms; economically weaker section status",
      type: "income",
    },
    {
      label: "Academic Performance",
      value: "Minimum 50% marks in previous class examination or satisfactory academic performance for Class 1 students (based on school assessment)",
      type: "education",
    },
    {
      label: "Residency",
      value: "Indian citizen; student must be a permanent resident of India or state as per applicable rules; state domicile may be required",
      type: "residence",
    },
    {
      label: "Regular School Enrollment",
      value: "Regular enrollment in recognized educational institution; attendance record of minimum 75% in previous session",
      type: "education",
    },
    {
      label: "No Duplicate Benefits",
      value: "Student not receiving other government scholarships or maintenance allowances for the same educational level; cannot be part of another central scholarship scheme simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "Monthly Maintenance Allowance — ₹100-500 per month depending on class level (Classes 1-5: ₹100-200; Classes 6-10: ₹250-500)",
    "Annual Book Allowance — ₹500-₹1,200 per annum for purchase of books and stationery items; disbursed once yearly",
    "Tuition Fee Reimbursement — Full or partial tuition fees reimbursement for students in private or government-aided schools (₹500-₹3,000 per annum)",
    "Examination Fee Coverage — Board examination fees waived or reimbursed for Class 10 students; internal examination fees also covered",
    "School Uniform Allowance — ₹300-600 per annum for school uniform purchase or two pairs of uniform provision (Classes 1-10)",
    "Miscellaneous Supplies — ₹200-400 annually for miscellaneous educational supplies including school bag, writing materials, and other essentials",
    "Health and Hygiene Support — Health checkup camps, sanitation kits, personal hygiene items, and counseling on health awareness",
    "Protective Meals/Mid-Day Meal Support — Priority access to mid-day meal schemes; additional nutritional support for identified malnourished students",
    "Residential Support (if applicable) — Free or subsidized hostel accommodation for girls in Classes 6-10; residential facilities in selected areas",
    "Transportation and Travel Support — Free school bus travel or monthly travel allowance of ₹100-250 for students traveling more than 1 km",
    "Counseling and Mentoring — Educational counseling, career guidance, life skills training, and mentoring from appointed counselors",
    "Merit-Based Incentive — Additional bonus/incentive of ₹500-₹2,000 for scoring above 80% in Class 8 or 10 examinations",
    "Administrative and Processing Support — Free scholarship processing, no application fees, assistance in document collection, and dedicated scholarship helpline",
  ],
  requiredDocuments: [
    {
      name: "Completed Scholarship Application Form",
      mandatory: true,
      note: "Official form available from school or state scholarship portal; to be filled by parent/guardian",
    },
    {
      name: "Proof of Parental Occupation",
      mandatory: true,
      note: "Occupation certificate from municipal authority, employer, or gram panchayat confirming unclean occupation status",
    },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Family annual income below ₹1,50,000; issued by gram panchayat or municipal authority within 6 months",
    },
    {
      name: "School Enrollment Certificate",
      mandatory: true,
      note: "Current year enrollment certificate or admission letter from school confirming class and regular attendance",
    },
    {
      name: "Birth Certificate or Age Proof",
      mandatory: true,
      note: "Birth certificate or Class 1 admission register extract confirming date of birth",
    },
    {
      name: "Previous Year Mark Sheet",
      mandatory: true,
      note: "Mark sheet showing minimum 50% marks for continuing students; not required for Class 1 admission applicants",
    },
    {
      name: "Domicile or Residency Certificate",
      mandatory: true,
      note: "Proof of permanent residence in India/state; domicile certificate from revenue office or utility bill",
    },
    {
      name: "Bank Account Details",
      mandatory: true,
      note: "Candidate or parent's bank account details (IFSC, account number) for scholarship disbursement; linked to Aadhaar if available",
    },
    {
      name: "Aadhaar Card (if available)",
      mandatory: false,
      note: "Aadhaar ID of student or parent for faster processing and direct benefit transfer (DBT)",
    },
    {
      name: "Caste Certificate (if applicable)",
      mandatory: false,
      note: "SC/ST/OBC certificate if claiming category-based benefits or priority; state-issued within validity period",
    },
    {
      name: "Photograph",
      mandatory: false,
      note: "Passport-sized photograph of student (2-4 copies) for application and identity verification",
    },
    {
      name: "School Attendance Certificate",
      mandatory: false,
      note: "Certificate confirming minimum 75% attendance in previous academic year or current year",
    },
    {
      name: "Guardian Certificate (if applicable)",
      mandatory: false,
      note: "Legal guardianship documentation if student is orphan or separated from parents",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Social Justice and Empowerment / Department of Social Justice, Government of India",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "pre-matric",
    "students",
    "sanitation workers",
    "manual scavenging",
    "unclean occupation",
    "economically weaker section",
    "central government",
    "social welfare",
    "girls education",
    "empowerment",
    "India",
    "Class 1-10",
    "vulnerable sections",
  ],
  faqs: [
    {
      q: "What is considered an 'unclean occupation' under this scheme?",
      a: "Unclean occupations include manual scavenging, waste collection, sanitation work, sweeping streets, cleaning public facilities, handling waste materials, and allied low-income occupations involving manual labor in unhygienic conditions. These are historically marginalized occupations. The occupation certificate from municipal authority or gram panchayat confirms eligibility.",
    },
    {
      q: "Who is eligible to apply for this scholarship?",
      a: "Students in Classes 1-10 whose parents/guardians are engaged in unclean occupations and whose family annual income is below ₹1,50,000 are eligible. Additionally, students must maintain minimum 50% marks in previous examination, be Indian citizens with domicile proof, and not be receiving other government scholarships simultaneously.",
    },
    {
      q: "What is the maximum monthly maintenance allowance?",
      a: "Monthly maintenance allowances range from ₹100-500 depending on class level. Classes 1-5 receive ₹100-200 per month, while Classes 6-10 receive ₹250-500 per month. Students can also receive annual book allowance of ₹500-₹1,200 and uniform allowance of ₹300-600.",
    },
    {
      q: "How much is the annual book allowance?",
      a: "The annual book allowance ranges from ₹500-₹1,200 per annum depending on class level. Lower classes (1-5) typically receive ₹500-800, while higher classes (6-10) receive ₹900-1,200. Allowance is disbursed once per academic year.",
    },
    {
      q: "Are students in private schools eligible?",
      a: "Yes, students in recognized private schools and government-aided schools are eligible provided they meet all other criteria including income limit, parental occupation status, and academic performance. Tuition fee reimbursement may be limited to actual school fees within prescribed limits.",
    },
    {
      q: "What documents are mandatory for application?",
      a: "Mandatory documents include: (1) Scholarship application form, (2) Occupation certificate confirming parental unclean occupation, (3) Income certificate below ₹1,50,000, (4) School enrollment certificate, (5) Birth certificate/age proof, (6) Previous year mark sheet (if applicable), (7) Domicile certificate, (8) Bank account details with IFSC code.",
    },
    {
      q: "Is the scholarship renewable every year?",
      a: "Yes, the scholarship is renewable annually provided the student continues in school, maintains minimum 50% marks, meets income criteria, and has not received other government scholarships. Fresh application or renewal form submission may be required each academic year depending on state procedures.",
    },
    {
      q: "Can a student receive scholarship for both Classes 9 and 10?",
      a: "Yes, a student can receive the scholarship for each class individually from Class 1 to 10, provided they meet eligibility criteria each year. However, they cannot receive duplicate benefits from other schemes for the same class level.",
    },
    {
      q: "How is the scholarship amount disbursed?",
      a: "Scholarship amounts are typically disbursed through Direct Benefit Transfer (DBT) to the student's or parent's bank account on a monthly or quarterly basis. Some states may disburse annually. Bank account details linked to Aadhaar ID facilitate faster processing.",
    },
    {
      q: "What is the minimum percentage required to continue the scholarship?",
      a: "Students must maintain a minimum of 50% marks in the previous class examination to continue receiving the scholarship. Performance below 50% may result in scholarship discontinuation unless justified by special circumstances. Class 1 students are exempted from this requirement.",
    },
    {
      q: "Can girls receive additional benefits under this scheme?",
      a: "Yes, girls are given priority and may receive additional benefits including free/subsidized hostel accommodation in Classes 6-10, separate health awareness programs, counseling services, and gender-specific support. Some states offer higher allowances specifically for girls.",
    },
    {
      q: "Is there a provision for residential/hostel accommodation?",
      a: "Yes, free or heavily subsidized hostel accommodation is available for girls in Classes 6-10 in selected locations. Boys may also get hostel support in specific regions. Hostel residents receive additional meal allowances of ₹2,000-4,000 per month.",
    },
    {
      q: "Can students from other states apply in their resident state?",
      a: "Domicile or residency requirements typically require minimum residence period (usually 3-5 years) in the state. Students from other states may apply if they have established residence. Proof of domicile issued by revenue office or state administration is required.",
    },
    {
      q: "What is the examination fee coverage?",
      a: "Class 10 board examination fees are fully waived or reimbursed. Internal examination fees and school assessment fees are also covered. This removes a significant financial barrier for students appearing in board examinations.",
    },
    {
      q: "Is there a merit-based incentive bonus?",
      a: "Yes, students scoring above 80% in Class 8 or 10 examinations receive a merit-based incentive bonus ranging from ₹500 to ₹2,000 as recognition of academic excellence. This incentivizes students to perform better in examinations.",
    },
    {
      q: "How can I apply online for this scholarship?",
      a: "Online application is available through state scholarship portals or the central portal depending on your state. Register with required credentials, fill the application form, upload scanned documents, and submit. You will receive acknowledgment with reference number for tracking application status.",
    },
    {
      q: "What if my occupation certificate is from an informal source?",
      a: "Official occupation certificates are issued by municipal authorities, gram panchayats, or employers. If informal, get certified by local administration or employer. The certificate must confirm the nature of unclean occupation and duration of employment for eligibility verification.",
    },
    {
      q: "Can I appeal if my scholarship application is rejected?",
      a: "Yes, rejection decisions can be appealed to the state scholarship authorities within 30 days with supporting evidence addressing rejection reasons. Common reasons include income ceiling exceed, incomplete documents, or academic performance below 50%. Appeal procedures are specified by each state.",
    },
  ],
  source: "sample",
};
