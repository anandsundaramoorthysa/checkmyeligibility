import type { Scheme } from "@/lib/types";

export const opJindalEngineeringManagementScholarshipOpjems: Scheme = {
  id: "op-jindal-engineering-management-scholarship-opjems",
  slug: "op-jindal-engineering-management-scholarship-opjems-mri1s97w",
  name: "OP Jindal Engineering & Management Scholarship (OPJEMS)",
  shortName: "OPJEMS",
  summary:
    "A merit-based scholarship by the O.P. Jindal Group offering ₹80,000/year for engineering students and ₹1,50,000/year for management students at premier Indian institutes.",
  description:
    "The OPJEMS is a merit-based scholarship started by the O.P. Jindal Group in 2007 to recognize outstanding students from selected premier engineering and management institutions in India. Around 100 students are awarded every year.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Open to General/Merit, BC/MBC, SC/ST, OBC, EWS, and Minority categories",
      type: "caste-category",
    },
    {
      label: "Institution",
      value: "Must belong to a participating institute such as IITs, NITs, BITS Pilani, and other select premier institutions",
      type: "education",
    },
    {
      label: "Course (Engineering)",
      value: "Must be studying Civil, Electrical, Mechanical, or Metallurgical Engineering at a participating institute",
      type: "education",
    },
    {
      label: "Nomination",
      value: "Generally, the top three students from each eligible branch/year are nominated by their institute",
      type: "other",
    },
    {
      label: "Education level",
      value: "Undergraduate (UG) or Postgraduate (PG) programmes",
      type: "education",
    },
  ],
  benefits: [
    "Engineering students: ₹80,000 per year",
    "Management students: ₹1,50,000 per year",
    "Medal and certificate of achievement",
    "Recognition and networking opportunities",
  ],
  requiredDocuments: [
    { name: "Passport-size photograph", mandatory: true },
    { name: "Institute ID Card", mandatory: true },
    { name: "Academic mark sheets/transcripts of previous semesters or years", mandatory: true },
    { name: "Proof of admission/enrollment in the eligible engineering or management program", mandatory: true },
    { name: "Institute nomination letter or recommendation (if applicable)", mandatory: false },
    { name: "Entrance examination scorecard/rank proof (for first-year students)", mandatory: false },
    { name: "Resume/Curriculum Vitae (CV)", mandatory: true },
    { name: "Government-issued photo ID proof (Aadhaar Card, PAN Card, etc.)", mandatory: true },
    { name: "Bank account details for scholarship disbursement", mandatory: true },
    { name: "Business proposal/project proposal in PDF format (if required during the selection process)", mandatory: false },
    { name: "Any additional documents requested by the OPJEMS portal during application submission", mandatory: false },
  ],
  officialPortalUrl: "https://jindal.opjems.com/",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "engineering",
    "management",
    "UG",
    "PG",
    "undergraduate",
    "postgraduate",
    "merit",
    "OPJEMS",
    "OP Jindal",
    "Jindal Group",
    "IIT",
    "NIT",
    "BITS Pilani",
    "all-india",
    "general-merit",
    "bc-mbc",
    "sc-st",
    "obc",
    "ews",
    "minority",
  ],
  faqs: [
    {
      q: "Who is eligible for the OP Jindal Engineering & Management Scholarship?",
      a: "Students from participating premier institutes (IITs, NITs, BITS Pilani, etc.) who are studying Civil, Electrical, Mechanical, or Metallurgical Engineering (for engineering scholars) or management programmes. Students must be nominated by their institute, typically the top three from each eligible branch/year.",
    },
    {
      q: "How much scholarship is awarded?",
      a: "Engineering students receive ₹80,000 per year and management students receive ₹1,50,000 per year.",
    },
    {
      q: "How many students are selected every year?",
      a: "Around 100 students are awarded the scholarship every year.",
    },
    {
      q: "What is the selection process?",
      a: "Eligible students are nominated by their institute. Shortlisted students take an online assessment/behavioral test, followed by a personal interview. Final selection is based on academic performance, test results, and interview performance.",
    },
    {
      q: "What is the application process?",
      a: "Eligible students are first nominated by their institute. Nominated students then register on the OPJEMS portal, fill the application form, submit a business proposal, and appear for online tests and interviews.",
    },
    {
      q: "Is financial need a criterion for selection?",
      a: "No, OPJEMS is a purely merit-based scholarship. Financial need is not taken into account.",
    },
    {
      q: "Do I need to sign any bond if I receive the scholarship?",
      a: "No, there are no bonds or obligations to accept the scholarship.",
    },
    {
      q: "Can I hold other scholarships along with OPJEMS?",
      a: "Yes, a student holding any other scholarship can still apply for OPJEMS, provided they meet the eligibility criteria.",
    },
  ],
  source: "sample",
};
