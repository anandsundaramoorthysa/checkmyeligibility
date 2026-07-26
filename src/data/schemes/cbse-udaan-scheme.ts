import type { Scheme } from "@/lib/types";

export const cbseUdaanScheme: Scheme = {
  id: "cbse-udaan-scheme",
  slug: "cbse-udaan-scheme-for-girl-students-qw4nr7kl",
  name: "CBSE Udaan Scheme for Girl Students",
  shortName: "CBSE Udaan",
  summary:
    "Free coaching and study material for meritorious girl students from economically weaker sections to prepare for engineering entrance examinations (JEE Main/Advanced, NEET) during Class 11 and 12.",
  description:
    "CBSE Udaan is a project launched by the Central Board of Secondary Education under the aegis of the Ministry of Education to address the low enrolment of girl students in prestigious engineering institutions. The scheme provides free offline/online coaching, study material, virtual weekend contact classes, and tablets with pre-loaded content to meritorious girl students enrolled in Class 11 (Science/PCM stream) from economically weaker backgrounds. The objective is to bridge the gap between school education and engineering entrance examinations, empowering girl students to pursue careers in Science, Technology, Engineering, and Mathematics (STEM). Selected students also receive no admission or tuition fees if they secure admission in IITs, NITs, or other prestigious engineering colleges.",
  category: "education",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Gender",
      value: "Exclusively for female (girl) students",
      type: "other",
    },
    {
      label: "Class & Stream",
      value:
        "Must be enrolled in Class 11 in Science stream with Physics, Chemistry, and Mathematics (PCM) as major subjects",
      type: "education",
    },
    {
      label: "School affiliation",
      value:
        "Must be studying in Kendriya Vidyalaya (KV), Navodaya Vidyalaya (NV), or any CBSE-affiliated school",
      type: "education",
    },
    {
      label: "Class 10 academic performance",
      value:
        "Minimum 70% overall aggregate in Class 10 (or CGPA of 8.0) AND minimum 80% marks in Science and Mathematics combined (or CGPA of 9.0)",
      type: "education",
    },
    {
      label: "Annual family income",
      value:
        "Family annual income must not exceed ₹6,00,000 per annum — valid income certificate required",
      type: "income",
    },
  ],
  benefits: [
    "Free study material and video lectures for Physics, Chemistry, and Mathematics (PCM) for Class 11 and 12",
    "Free tablets with pre-loaded study content",
    "Live online/virtual weekend classes with expert teachers",
    "Virtual contact classes at approximately 60 centres across India",
    "No admission fees and tuition fees if admitted to IIT, NIT, or other prestigious engineering colleges",
    "Peer learning and mentoring opportunities",
    "Student helpline service for doubt resolution",
    "Motivation and orientation sessions for students and parents",
    "Continuous progress tracking and feedback to parents",
    "Reservation as per JEE (Advanced): OBC (NCL) 27%, SC 15%, ST 7.5%, PwD 3%",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Class 10 mark sheet", mandatory: true },
    { name: "Annual family income certificate (≤ ₹6 lakh)", mandatory: true },
    {
      name: "Category certificate (SC/ST/OBC/PwD)",
      mandatory: false,
      note: "Required if applicable for reservation",
    },
    {
      name: "School verification form (signed by Principal)",
      mandatory: true,
    },
    { name: "Passport-sized photograph", mandatory: true },
    { name: "Bank account details", mandatory: true },
  ],
  officialPortalUrl: "https://cbseacademic.nic.in",
  ministry:
    "Central Board of Secondary Education (CBSE) / Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "coaching",
    "girl students",
    "women",
    "STEM",
    "engineering",
    "JEE",
    "NEET",
    "Class 11",
    "Class 12",
    "PCM",
    "CBSE",
    "Udaan",
    "IIT",
    "NIT",
    "free coaching",
    "study material",
    "virtual classes",
    "tablet",
  ],
  faqs: [
    {
      q: "Who is eligible for CBSE Udaan Scheme?",
      a: "The scheme is exclusively for girl students enrolled in Class 11 (Science stream/PCM) in Kendriya Vidyalaya, Navodaya Vidyalaya, or any CBSE-affiliated school, with minimum 70% in Class 10 overall and 80% in Science and Mathematics, and family income not exceeding ₹6 lakh per annum.",
    },
    {
      q: "What benefits are provided under the scheme?",
      a: "Selected students receive free study material, video lectures, tablets with pre-loaded content, live virtual weekend classes, and no admission/tuition fees if they secure admission in IITs, NITs, or prestigious engineering colleges.",
    },
    {
      q: "How can I apply for CBSE Udaan Scheme?",
      a: "The application process is conducted entirely online through the official CBSE Academic website (cbseacademic.nic.in). Students need to register, fill in personal and academic details, upload documents, and submit the application.",
    },
    {
      q: "What is the income limit for availing CBSE Udaan Scheme?",
      a: "The annual family income of the applicant's parents or guardian must not exceed ₹6,00,000 per annum.",
    },
    {
      q: "Is there any reservation under the scheme?",
      a: "Yes, reservation is as per JEE (Advanced) norms: OBC (NCL) 27%, SC 15%, ST 7.5%, and PwD 3% of seats in every category.",
    },
  ],
  source: "sample",
};