import type { Scheme } from "@/lib/types";

export const jaiBhimMukhyamantriPratibhaVikasYojana: Scheme = {
  id: "jai-bhim-mukhyamantri-pratibha-vikas-yojana",
  slug: "jai-bhim-mukhyamantri-pratibha-vikas-yojana",
  name: "Jai Bhim Mukhyamantri Pratibha Vikas Yojana",
  shortName: "Jai Bhim Coaching Delhi",
  summary:
    "Delhi government scheme offering free coaching to SC/ST/OBC/EWS students for competitive examinations including UPSC Civil Services, SSC, banking, railways, and entrance tests like NEET and JEE.",
  description:
    "The Jai Bhim Mukhyamantri Pratibha Vikas Yojana (JBMPVY) is a flagship scheme of the Government of National Capital Territory of Delhi implemented by the Delhi Scheduled Castes and Scheduled Tribes Finance and Development Corporation (DSCSTFDC). The scheme provides free coaching to economically weaker students from SC, ST, OBC, and EWS (Economically Weaker Sections) categories at empanelled private coaching institutes in Delhi. The objective is to bridge the gap between meritorious but financially disadvantaged students and high-quality coaching needed to clear competitive examinations. Under the scheme, eligible students can choose from empanelled coaching institutes and receive professional coaching for Group A & B (Central) Services exams (including UPSC Civil Services IAS/IPS/IFS), Group C & D Services, SSC, banking and insurance exams, railways, Delhi Judicial Services, CLAT/law entrance, engineering entrance (JEE), medical entrance (NEET), and other national and state-level competitive examinations. The coaching fees are paid directly to the empanelled institutes by the Delhi government on behalf of students.",
  category: "scholarship",
  level: "state",
  states: ["delhi"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to SC, ST, OBC (as notified by Delhi government), or EWS category",
      type: "caste-category",
    },
    {
      label: "Income",
      value: "Annual family income must not exceed ₹8 lakh per annum for OBC and EWS categories; for SC/ST, up to ₹6 lakh per annum (check current notification for exact limits)",
      type: "income",
    },
    {
      label: "Age Limit",
      value: "Generally between 18 and 30 years (relaxable as per category and exam rules). For JEE/NEET, students studying in Class 11/12 are also eligible",
      type: "age",
    },
    {
      label: "Domicile",
      value: "Must be a permanent resident of Delhi and possess a valid Delhi domicile certificate",
      type: "other",
    },
    {
      label: "Qualification",
      value: "Minimum graduation for Group A/B services; Class 12 pass for JEE/NEET coaching; Class 10 pass for some Group C/D exams",
      type: "education",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
    {
      label: "Repetition",
      value: "A student can avail the scheme a maximum of two times for the same examination",
      type: "other",
    },
  ],
  benefits: [
    "Free coaching at empanelled private coaching institutes (no fees from student)",
    "Coaching fees of up to ₹1,00,000 per student per annum paid directly to the institute by the Delhi government",
    "Coverage of Group A & B Services (UPSC IAS/IPS/IFS, Delhi Judicial Services)",
    "Coverage of Group C & D Services, SSC, Banking, Railways",
    "Coverage of professional entrance exams: JEE (Main & Advanced), NEET, CLAT, CAT, GATE",
    "Access to quality coaching at established private institutes in Delhi",
    "Monthly stipend of ₹2,500 for students appearing for Group A/B exams",
  ],
  requiredDocuments: [
    { name: "Application form (from DSCSTFDC or empanelled institute)", mandatory: true },
    { name: "SC/ST/OBC/EWS Certificate from competent authority (Delhi)", mandatory: true },
    { name: "Income Certificate (annual family income as per scheme limit)", mandatory: true },
    { name: "Delhi Domicile Certificate", mandatory: true },
    { name: "Date of birth proof (10th marksheet / Aadhaar / birth certificate)", mandatory: true },
    { name: "Educational qualification certificates (graduation / 12th certificate as applicable)", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Passport-sized photographs", mandatory: true },
    { name: "Bank passbook copy (account in student's name)", mandatory: true },
    { name: "Residential proof (ration card / voter ID / utility bill)", mandatory: true, note: "Additional domicile proof if required" },
    { name: "Selection letter from empanelled coaching institute", mandatory: false, note: "Some institutes provide after registration" },
  ],
  officialPortalUrl: "https://edistrict.delhigovt.nic.in/",
  ministry: "Delhi Scheduled Castes and Scheduled Tribes Finance & Development Corporation (DSCSTFDC), Government of NCT of Delhi",
  applicationMode: ["online", "offline"],
  tags: [
    "Delhi",
    "free coaching",
    "SC/ST",
    "OBC",
    "EWS",
    "UPSC",
    "IAS",
    "SSC",
    "NEET",
    "JEE",
    "banking",
    "competitive exam",
    "Jai Bhim",
    "state scheme",
    "coaching institute",
    "DSCSTFDC",
  ],
  faqs: [
    {
      q: "Which categories of students are eligible for Jai Bhim Mukhyamantri Pratibha Vikas Yojana?",
      a: "Students belonging to Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and Economically Weaker Sections (EWS) who are residents of Delhi are eligible.",
    },
    {
      q: "What examinations are covered under this scheme?",
      a: "The scheme covers UPSC Civil Services (IAS/IPS/IFS), Delhi Judicial Services, SSC, banking and insurance exams, railways, JEE (Main and Advanced), NEET, CLAT, CAT, GATE, and other national/state competitive examinations.",
    },
    {
      q: "Who pays the coaching fees?",
      a: "The Delhi government pays coaching fees directly to the empanelled private coaching institute on behalf of the student. Students do not pay any fees.",
    },
    {
      q: "What is the maximum coaching fee covered?",
      a: "The government reimburses up to ₹1,00,000 per student per annum to the coaching institute.",
    },
    {
      q: "How many times can I avail this scheme?",
      a: "You can avail the scheme a maximum of two times for the same examination category.",
    },
    {
      q: "Is there a monthly stipend?",
      a: "Yes, students coaching for Group A & B services (UPSC/Judicial Services) receive a monthly stipend of ₹2,500.",
    },
    {
      q: "How do I apply?",
      a: "You can apply through the e-District Delhi portal (edistrict.delhigovt.nic.in) or directly at a DSCSTFDC office. Choose an empanelled coaching institute, submit the application with all documents, and await verification.",
    },
    {
      q: "Can I choose any coaching institute in Delhi?",
      a: "No. You must select an institute from the list of empanelled institutes approved by DSCSTFDC. The list is available on the DSCSTFDC website and the Delhi government portal.",
    },
    {
      q: "What is the income limit for SC/ST students?",
      a: "For SC/ST students, the annual family income limit is generally up to ₹6 lakh. Please check the latest official notification for exact limits, as they are revised periodically.",
    },
    {
      q: "Is Delhi domicile mandatory?",
      a: "Yes. You must be a permanent resident of Delhi with a valid domicile certificate. Students studying in Delhi from other states are not eligible.",
    },
  ],
  source: "sample",
};
