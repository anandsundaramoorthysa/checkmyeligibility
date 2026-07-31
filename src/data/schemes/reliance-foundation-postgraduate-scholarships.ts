import type { Scheme } from "@/lib/types";

export const relianceFoundationPostgraduateScholarships: Scheme = {
  id: "reliance-foundation-postgraduate-scholarships",
  slug: "reliance-foundation-postgraduate-scholarships",
  name: "Reliance Foundation Postgraduate Scholarships",
  shortName: "RF PG Scholarship",
  summary:
    "Up to ₹6,00,000 scholarship plus mentorship for Indian PG students in technology and science fields with GATE 550+ or UG CGPA 7.5+.",
  description:
    "The Reliance Foundation Postgraduate Scholarship is a merit-based scholarship program designed to support talented students pursuing postgraduate studies in future-focused technology and science fields in India. The scholarship also provides mentorship, networking opportunities, workshops, and industry exposure to help scholars build impactful careers.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian citizen",
      type: "other",
    },
    {
      label: "Program enrolment",
      value: "Must be enrolled in the first year of a full-time postgraduate program in an eligible discipline",
      type: "education",
    },
    {
      label: "GATE score",
      value: "GATE score between 550 and 1000",
      type: "education",
    },
    {
      label: "UG academic performance",
      value: "UG CGPA of 7.5 or above (or equivalent percentage normalized to CGPA)",
      type: "education",
    },
  ],
  benefits: [
    "Up to ₹6,00,000 over the duration of the postgraduate degree programme",
    "Mentorship from industry leaders",
    "Networking opportunities with peers and professionals",
    "Workshops and skill-building sessions",
    "Industry exposure through events and interactions",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Aadhaar Card or Government ID proof", mandatory: true },
    { name: "Undergraduate mark sheets/transcripts", mandatory: true },
    { name: "GATE scorecard (if applicable)", mandatory: false },
    { name: "Admission proof or bonafide certificate", mandatory: true },
    { name: "College ID card", mandatory: true },
    { name: "Bank account details", mandatory: true },
    { name: "Personal Statement (essay)", mandatory: true },
    { name: "Statement of Purpose (SOP)", mandatory: true },
    { name: "Two Reference Letters (LORs) — one academic, one character", mandatory: true },
    { name: "Class 10 board marksheet", mandatory: true },
    { name: "Class 12 board marksheet", mandatory: true },
    { name: "Family income proof", mandatory: true },
    { name: "Current resume/CV", mandatory: true },
  ],
  officialPortalUrl: "https://www.scholarships.reliancefoundation.org/",
  ministry: "Reliance Foundation (Corporate Social Responsibility)",
  applicationMode: ["online"],
  tags: [
    "reliance foundation",
    "postgraduate",
    "scholarship",
    "merit based",
    "technology",
    "science",
    "GATE",
    "PG",
    "mentorship",
    "all-india",
    "corporate scholarship",
  ],
  faqs: [
    {
      q: "What is the Reliance Foundation Postgraduate Scholarship?",
      a: "A merit-based scholarship of up to ₹6,00,000 for Indian PG students in technology and science fields, including mentorship, networking, workshops, and industry exposure.",
    },
    {
      q: "Who can apply?",
      a: "Indian citizens enrolled in the first year of a full-time PG programme in an eligible discipline, with a GATE score between 550-1000 or a UG CGPA of 7.5 or above.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Up to ₹6,00,000 over the full duration of the postgraduate degree programme, along with mentorship and industry exposure opportunities.",
    },
    {
      q: "What is the application process?",
      a: "Complete an eligibility check, register on the portal, fill out the application with documents and essays, take a 60-minute proctored aptitude test, attend virtual interviews if shortlisted, and final selection is based on overall merit.",
    },
    {
      q: "What documents are required?",
      a: "Aadhaar/ID, UG transcripts, GATE scorecard (if applicable), admission proof, college ID, bank details, two essays, two LORs, Class 10 & 12 marksheets, income proof, and resume.",
    },
    {
      q: "How are scholars selected?",
      a: "Applications are reviewed based on academic scores, GATE rankings, and essay strength. Shortlisted candidates attend virtual interviews, and the top 100 scholars are selected purely on merit.",
    },
  ],
  source: "sample",
};
