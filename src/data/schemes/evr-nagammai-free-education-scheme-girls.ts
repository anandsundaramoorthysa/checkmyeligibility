import type { Scheme } from "@/lib/types";

export const evrNagammaiFreeEducationSchemeGirls: Scheme = {
  id: "evr-nagammai-free-education-scheme-girls",
  slug: "evr-nagammai-free-education-scheme-for-girls",
  name: "EVR Nagammai Free Education Scheme for Girls",
  shortName: "EVR Nagammai Scheme",
  summary:
    "State welfare scheme for economically weaker girls in Tamil Nadu providing free education and financial support at various educational levels from primary to postgraduate studies.",
  description:
    "The EVR Nagammai Free Education Scheme for Girls is a landmark social welfare initiative by the Government of Tamil Nadu, named after the pioneering social reformer and women's rights activist EVR Periyar's vision for gender equality and women's education. The scheme is designed to provide free and accessible education to girls from economically weaker sections (EWS) of Tamil Nadu society, removing financial barriers that prevent girls from pursuing higher education. The scheme covers educational expenses from primary level through postgraduate studies, including tuition fees, book allowances, travel allowances, and hostel accommodations for eligible girls. By providing comprehensive educational support, the scheme aims to promote women's empowerment, reduce gender disparities in education, enhance literacy rates, and enable girls to become economically independent and productive citizens contributing to the state's development. The scheme recognizes that girls from poor families often face barriers to education despite their merit and potential. Through financial assistance and welfare support, the scheme ensures no girl child is denied education due to economic hardship, aligning with Tamil Nadu's commitment to universal education and gender equality.",
  category: "scholarship",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "Gender",
      value: "Girl child/Female students only",
      type: "gender",
    },
    {
      label: "Residency",
      value: "Permanent resident of Tamil Nadu; domicile certificate or residence proof required",
      type: "residence",
    },
    {
      label: "Annual Family Income",
      value: "Family annual income below ₹2,50,000 (may be adjusted periodically by Tamil Nadu government)",
      type: "income",
    },
    {
      label: "Educational Level",
      value:
        "Applicable from Class 1 (primary) through postgraduate studies at recognized institutions in Tamil Nadu or India",
      type: "education",
    },
    {
      label: "Academic Performance",
      value:
        "Generally 50% marks or equivalent in the previous qualifying examination; no specific merit cut-off for primary/middle classes",
      type: "education",
    },
    {
      label: "Enrollment Status",
      value: "Must be regularly enrolled in recognized schools or colleges affiliated to Tamil Nadu state board or national boards (CBSE, ICSE)",
      type: "education",
    },
    {
      label: "Previous Welfare Benefits",
      value:
        "Generally not receiving benefits from other state welfare schemes simultaneously for the same educational level",
      type: "other",
    },
  ],
  benefits: [
    "Free Tuition Fees: Complete waiver of tuition fees across all educational levels (primary to postgraduate)",
    "Book Allowance: ₹500-₹1,500 per annum depending on class/course level",
    "Travel Allowance: ₹200-₹500 per month for students commuting to school/college",
    "Hostel Accommodation Support: Free or subsidized hostel facilities for girls pursuing studies away from home",
    "Hostel Meal Allowance: ₹2,000-₹4,000 per month for girls in hostels",
    "Uniform and Clothing Allowance: ₹1,000-₹2,000 per annum",
    "Study Material and Stationery Support: Additional ₹300-₹600 per year for books and writing materials",
    "Special Incentive for Board Exam Success: ₹1,000-₹5,000 bonus upon passing Class 10, Class 12, and undergraduate exams",
    "Postgraduate Study Support: Enhanced allowances for pursuing Master's degrees and professional courses",
    "Educational Loan Support: Facilitation of educational loans with state subsidy on interest component",
    "Scholarship Enhancement: Additional scholarships for outstanding academic performance",
    "Health and Medical Support: Basic health insurance coverage during hostel stay",
    "No repayment obligation or service bond required",
  ],
  requiredDocuments: [
    { name: "Application form (prescribed format by Tamil Nadu state)", mandatory: true },
    { name: "School/College enrollment certificate or admission letter", mandatory: true },
    { name: "Birth certificate or Age proof (10th mark sheet)", mandatory: true },
    {
      name: "Annual Family Income Certificate",
      mandatory: true,
      note: "Issued by Village Officer, Revenue Divisional Officer (RDO), or authorized official confirming income below ₹2,50,000",
    },
    {
      name: "Proof of Tamil Nadu Residency",
      mandatory: true,
      note: "Domicile certificate, residence certificate, or ration card showing continuous residency in Tamil Nadu",
    },
    { name: "Previous Class/Course Mark Sheet", mandatory: true, note: "For continuation applicants in higher classes/courses" },
    { name: "Aadhaar Card (girl child)", mandatory: true },
    { name: "Father/Guardian's Aadhaar Card", mandatory: true },
    { name: "Bank Account Details (Girl's account or Family account)", mandatory: true, note: "For scheme benefit disbursement via bank transfer" },
    { name: "Passport-sized photographs (2-3 copies of girl)", mandatory: true },
    {
      name: "SC/ST/OBC Certificate (if applicable)",
      mandatory: false,
      note: "For category-based priority and additional benefits",
    },
    {
      name: "Disabled Certificate (if applicable)",
      mandatory: false,
      note: "If girl is divyang/differently-abled, for additional support",
    },
    { name: "Single Parent/Widow Certificate (if applicable)", mandatory: false, note: "If family headed by single parent or widow" },
    {
      name: "Death Certificate of Father/Mother",
      mandatory: false,
      note: "If either parent is deceased",
    },
  ],
  officialPortalUrl: "https://www.tn.gov.in/",
  ministry: "Department of School Education & Department of Higher Education, Government of Tamil Nadu",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "girls",
    "women",
    "Tamil Nadu",
    "free education",
    "girls education",
    "state scheme",
    "welfare",
    "EWS",
    "primary",
    "secondary",
    "higher education",
    "postgraduate",
    "hostel support",
    "gender equality",
  ],
  faqs: [
    {
      q: "Who is eligible for the EVR Nagammai Free Education Scheme for Girls?",
      a: "Girl students who are permanent residents of Tamil Nadu, from families with annual income below ₹2,50,000, studying in recognized schools/colleges, and with at least 50% marks in the previous examination are eligible.",
    },
    {
      q: "Does the scheme apply from primary school onwards?",
      a: "Yes, the EVR Nagammai scheme covers education from Class 1 (primary) through postgraduate studies. Benefits vary at different levels — primary and secondary students receive book/travel allowances, while higher education students get enhanced support.",
    },
    {
      q: "What is the maximum family income limit?",
      a: "The family annual income limit is generally ₹2,50,000. However, this ceiling is reviewed and adjusted periodically by the Tamil Nadu government. Check the official state portal or school office for current limits.",
    },
    {
      q: "Are tuition fees completely waived under this scheme?",
      a: "Yes, tuition fees are completely waived for girls under this scheme across all educational levels — primary, secondary, intermediate, undergraduate, and postgraduate. Only other ancillary expenses like travel and books have specific allowances.",
    },
    {
      q: "What hostel support is provided for girls studying in hostels?",
      a: "Girls in hostels receive free or heavily subsidized accommodation plus a monthly meal allowance of ₹2,000-₹4,000. The exact amount depends on the hostel type and educational level. Advance registration with the designated hostel is required.",
    },
    {
      q: "How much is the book and travel allowance?",
      a: "Book allowance is ₹500-₹1,500 per annum depending on the class/course level. Travel allowance is ₹200-₹500 per month for students commuting to school/college daily. Additional study materials allowance of ₹300-₹600 per year is also provided.",
    },
    {
      q: "Do girls get incentives for passing board exams?",
      a: "Yes! Girls receive special incentives ranging from ₹1,000 to ₹5,000 upon successfully passing Class 10, Class 12, and undergraduate final exams. These are one-time bonuses to encourage academic excellence.",
    },
    {
      q: "How do I apply for this scheme?",
      a: "Applications are accepted both online and offline. Online: Visit the Tamil Nadu state education portal, fill the form, and upload documents. Offline: Submit the application and documents to your school/college principal or the nearby welfare office with supporting documents.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines typically open at the beginning of each academic year (April-May). However, new students can apply at any time during the academic year until a specified cut-off date (usually by August-September). Check with your school/college for exact dates.",
    },
    {
      q: "Can I apply if I'm studying in a school/college outside Tamil Nadu?",
      a: "Students studying in recognized institutions outside Tamil Nadu can apply if they are pursuing higher education (undergraduate/postgraduate level) and are permanent residents of Tamil Nadu. Primary and secondary education support is limited to Tamil Nadu-based institutions.",
    },
    {
      q: "Is the income certificate required to be renewed every year?",
      a: "Yes, the income certificate must be renewed annually as scheme benefits are contingent on meeting the income criteria. An outdated income certificate may result in benefit suspension or application rejection.",
    },
    {
      q: "What if my family's income exceeds ₹2,50,000?",
      a: "If family income exceeds the limit, the girl is not eligible for the scheme benefits. However, the income limit is periodically revised by the Tamil Nadu government, so you can reapply in the next cycle if the limit is increased.",
    },
    {
      q: "Do girls need to maintain minimum academic performance to continue receiving benefits?",
      a: "Generally, yes. A minimum of 50% marks or equivalent in the previous examination is required to continue receiving scheme benefits. Girls must show consistent academic performance to retain eligibility in subsequent years.",
    },
    {
      q: "Can I receive this scheme benefit if I also receive other state scholarships?",
      a: "Generally, you cannot receive benefits from multiple state welfare schemes simultaneously for the same educational level. You must declare all ongoing financial assistance and scholarships when applying.",
    },
    {
      q: "Is health insurance included in hostel support?",
      a: "Yes, girls in hostels are covered under basic health insurance provided by the state. This covers emergency medical expenses and inpatient treatment while in hostel.",
    },
    {
      q: "Do girls in private schools/colleges also get benefits?",
      a: "Yes, girls studying in recognized private schools/colleges are eligible, though benefits may vary slightly. Tuition fee waiver is applicable at government institutions; private institutions receive a fixed assistance amount determined by the state.",
    },
    {
      q: "What if my parents are deceased or single parent?",
      a: "If either parent is deceased or the family is headed by a single parent (widow), you can get priority benefits and additional support. Submit death certificate or widow certificate with your application for enhanced assistance.",
    },
    {
      q: "Is there any employment obligation after receiving scheme benefits?",
      a: "No, the EVR Nagammai Scheme is purely an educational support and welfare programme with no employment bond or service obligation. After completing education, you are free to pursue any career path.",
    },
  ],
  source: "sample",
};
