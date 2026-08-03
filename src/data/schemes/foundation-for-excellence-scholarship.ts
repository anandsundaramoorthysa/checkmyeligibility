import type { Scheme } from "@/lib/types";

export const foundationForExcellenceScholarship: Scheme = {
  id: "foundation-for-excellence-scholarship-mrerysrw",
  slug: "foundation-for-excellence-scholarship-mrerysrw",
  name: "Foundation for Excellence Scholarship",
  shortName: "FFE Scholarship",
  summary:
    "Merit-cum-means scholarship of ₹50,000 per annum (up to ₹1,00,000 for specific programs) for economically underprivileged students pursuing BE/B.Tech, MBBS, and 5-year Integrated Law degrees.",
  description:
    "FFE provides merit-cum-means scholarships to academically bright, economically underprivileged students in India. The scheme supports students pursuing BE/B.Tech, MBBS, and 5-year Integrated Law degrees, including holistic support through mentorship, skills training, and career guidance. The scholarship covers tuition and essential education expenses until graduation.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Annual family income",
      value: "Family income must not exceed ₹3.0 Lakhs per annum",
      type: "income",
    },
    {
      label: "Course",
      value:
        "Must be a 1st-year student in BE/B.Tech, MBBS, or 5-Year Integrated Law programs",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Minimum 70% marks in 12th/Higher Secondary examination",
      type: "education",
    },
    {
      label: "Entrance exam",
      value:
        "Must have a qualifying rank in national/state-level entrance exams (JEE, NEET, CLAT, etc.)",
      type: "other",
    },
  ],
  benefits: [
    "₹50,000 per annum scholarship for Engineering/Medical students",
    "Up to ₹1,00,000 per annum for specific programs",
    "Covers tuition and essential education expenses until graduation",
    "Holistic support including mentorship, skills training, and career guidance",
  ],
  requiredDocuments: [
    { name: "12th Grade Mark Sheet", mandatory: true },
    { name: "Entrance Exam Rank Certificate", mandatory: true },
    { name: "College Admission / Allotment Letter", mandatory: true },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Or ITR / Salary Certificate",
    },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bonafide Student Certificate", mandatory: true },
  ],
  officialPortalUrl: "https://ffe.org/",
  ministry: "Foundation for Excellence (Private NGO, Bengaluru)",
  applicationMode: ["online"],
  tags: [
    "FFE",
    "Foundation for Excellence",
    "scholarship",
    "merit-cum-means",
    "engineering",
    "B.Tech",
    "MBBS",
    "integrated law",
    "economically weaker section",
    "EWS",
    "mentorship",
    "career guidance",
    "all-india",
    "tuition",
    "undergraduate",
  ],
  faqs: [
    {
      q: "Who is eligible for the Foundation for Excellence Scholarship?",
      a: "Economically underprivileged students with a family income not exceeding ₹3.0 Lakhs per annum, who are 1st-year students in BE/B.Tech, MBBS, or 5-Year Integrated Law programs, have secured a minimum of 70% marks in the 12th/Higher Secondary examination, and hold a qualifying rank in national/state-level entrance exams such as JEE, NEET, or CLAT.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Students receive ₹50,000 per annum, with up to ₹1,00,000 per annum for specific programs. The scholarship covers tuition and essential education expenses until graduation.",
    },
    {
      q: "What courses are supported under the scholarship?",
      a: "BE/B.Tech, MBBS, and 5-Year Integrated Law programs. The scheme also provides holistic support through mentorship, skills training, and career guidance.",
    },
    {
      q: "How do I apply for the scholarship?",
      a: "Applications are submitted online at ffe.org. Candidates must fill the preliminary application form, upload the mandatory primary documents, and undergo a verification process by FFE volunteer facilitators.",
    },
    {
      q: "What documents are required?",
      a: "12th grade mark sheet, entrance exam rank certificate, college admission/allotment letter, income certificate (or ITR/salary certificate), Aadhaar card, and bonafide student certificate.",
    },
  ],
  source: "sample",
};
