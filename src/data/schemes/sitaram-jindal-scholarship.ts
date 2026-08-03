import type { Scheme } from "@/lib/types";

export const sitaramJindalScholarship: Scheme = {
  id: "sitaram-jindal-scholarship",
  slug: "sitaram-jindal-scholarship",
  name: "Sitaram Jindal Foundation Scholarship",
  shortName: "Sitaram Jindal Scholarship",
  summary:
    "A merit-cum-means private scholarship by Sitaram Jindal Foundation offering \u20B9500 to \u20B93,200 per month for students from Class 11 to postgraduate and professional courses across India.",
  description:
    "The Sitaram Jindal Foundation Scholarship is a prestigious merit-cum-means private scholarship provided by the Sitaram Jindal Foundation, Bengaluru. It is designed to support financially disadvantaged yet academically meritorious students from Class 11 through postgraduate and professional courses including Engineering and Medical. The scholarship covers students across all Indian states and is open year-round with no fixed last date. Monthly financial assistance ranges from \u20B9500 to \u20B93,200 depending on the course level and gender, with girls receiving higher amounts to encourage female education. Additional hostel allowance of \u20B9800 to \u20B91,800 per month is available for hostellers. The foundation supports over 12,000 students annually and has benefited lakhs of students since its inception. Selection is based on academic merit and family income, with applications accepted both online and offline through the foundation\u2019s regional offices.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B92,50,000 per annum (non-salaried) or \u20B94,00,000 per annum (salaried)",
      type: "income",
    },
    {
      label: "Age",
      value: "Must not exceed 30 years at the time of application",
      type: "age",
    },
    {
      label: "Academic performance",
      value: "Minimum 55\u201370% in previous qualifying exam for boys and 50\u201365% for girls (varies by course level and state). Relaxation for physically challenged, widows, and wards of ex-servicemen",
      type: "education",
    },
    {
      label: "Course level",
      value: "Must be enrolled in Class 11, 12, ITI, Diploma, Undergraduate, Postgraduate, Engineering, or Medical course at a recognised institution in India",
      type: "education",
    },
    {
      label: "Other scholarships",
      value: "Must not be receiving any other scholarship exceeding \u20B91,000 per month from another source",
      type: "other",
    },
  ],
  benefits: [
    "Class 11\u201312: \u20B9500/month (boys) or \u20B9700/month (girls)",
    "ITI Courses: \u20B9500\u2013\u20B9700/month depending on institution type",
    "Diploma Courses: \u20B91,000/month (boys) or \u20B91,200/month (girls)",
    "Graduation (General): \u20B91,100/month (boys) or \u20B91,400/month (girls)",
    "Postgraduation (General): \u20B91,500/month (boys) or \u20B91,800/month (girls)",
    "UG Engineering/Medicine: \u20B92,000\u2013\u20B92,500/month (boys) or \u20B92,300\u2013\u20B93,000/month (girls)",
    "PG Engineering/Medicine: \u20B92,800/month (boys) or \u20B93,200/month (girls)",
    "Additional hostel allowance: \u20B9800\u2013\u20B91,800/month based on course level",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Recent passport-size photograph", mandatory: true },
    { name: "Previous qualifying exam mark sheet", mandatory: true },
    { name: "Income certificate (issued by Tehsildar/SDM/competent authority)", mandatory: true },
    { name: "Current year fee receipt from institution", mandatory: true },
    { name: "Bank passbook copy (first page with IFSC code)", mandatory: true },
    { name: "Bonafide certificate from institution", mandatory: true },
    { name: "Hostel warden certificate", mandatory: false, note: "Required for claiming additional hostel allowance" },
    { name: "Disability certificate", mandatory: false, note: "Required for physically challenged applicants" },
    { name: "Ex-servicemen certificate", mandatory: false, note: "Required for wards of ex-servicemen" },
  ],
  officialPortalUrl: "https://www.sitaramjindalfoundation.org/",
  ministry: "Sitaram Jindal Foundation, Bengaluru",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "sitaram-jindal",
    "merit-cum-means",
    "private-scholarship",
    "class-11",
    "class-12",
    "ITI",
    "diploma",
    "undergraduate",
    "postgraduate",
    "engineering",
    "medical",
    "all-india",
    "central",
  ],
  faqs: [
    {
      q: "Who can apply for the Sitaram Jindal Scholarship?",
      a: "Indian students from Class 11 to postgraduate and professional courses (Engineering, Medical) with good academic records and family income within the prescribed limit. Girls, physically challenged students, widows, and wards of ex-servicemen receive relaxed eligibility criteria.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Monthly assistance ranges from \u20B9500 to \u20B93,200 depending on the course level and gender, with girls receiving higher amounts. Additional hostel allowance of \u20B9800 to \u20B91,800 per month is also available for hostellers.",
    },
    {
      q: "What is the family income limit?",
      a: "\u20B92.5 lakh per annum for non-salaried/self-employed applicants and \u20B94 lakh per annum for salaried applicants. A valid income certificate from a competent authority is mandatory.",
    },
    {
      q: "How do I apply?",
      a: "Applications are accepted both online through the official portal (application.sitaramjindalfoundation.org) and offline by downloading the form, filling it, attaching documents, and sending it to the nearest regional office of the foundation.",
    },
    {
      q: "Is there an application deadline?",
      a: "There is no fixed last date. The foundation accepts applications year-round on a rolling basis. However, students are advised to apply as early as possible after securing admission for the current academic year.",
    },
    {
      q: "Can the scholarship be renewed?",
      a: "Yes, the scholarship is renewable annually. Students must submit updated mark sheets, fee receipts, and maintain satisfactory academic performance for renewal. A 5% relaxation in minimum marks is given for renewal applicants.",
    },
  ],
  source: "sample",
};
