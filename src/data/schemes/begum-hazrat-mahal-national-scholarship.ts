import type { Scheme } from "@/lib/types";

export const begumHazratMahalNationalScholarship: Scheme = {
  id: "begum-hazrat-mahal-national-scholarship",
  slug: "begum-hazrat-mahal-national-scholarship-for-minority-girls",
  name: "Begum Hazrat Mahal National Scholarship for Minority Girls",
  shortName: "Begum Hazrat Mahal",
  summary:
    "Merit-based scholarship for girls from minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Zoroastrian) pursuing higher education, with annual support up to ₹20,000.",
  description:
    "The Begum Hazrat Mahal National Scholarship for Minority Girls is a prestigious scholarship scheme introduced by the Ministry of Minority Affairs, Government of India, to promote higher education among girls from minority communities. The scheme aims to encourage and support meritorious girls from economically weaker sections of Muslim, Christian, Sikh, Buddhist, Jain, and Zoroastrian communities to pursue undergraduate and postgraduate education. The scholarship recognizes the importance of empowering girls from minority backgrounds and enabling them to achieve their educational aspirations. Named after the historical figure Begum Hazrat Mahal, the scheme reflects India's commitment to inclusive education and social equity.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Gender",
      value: "Female students only",
      type: "gender",
    },
    {
      label: "Religion/Community",
      value:
        "Girls from minority communities — Muslim, Christian, Sikh, Buddhist, Jain, or Zoroastrian",
      type: "other",
    },
    {
      label: "Academic Performance",
      value:
        "Minimum 55% marks or equivalent CGPA in the previous qualifying examination",
      type: "education",
    },
    {
      label: "Course Level",
      value:
        "Enrolled in any undergraduate (UG) or postgraduate (PG) programme at recognized Indian colleges/universities",
      type: "education",
    },
    {
      label: "Annual Family Income",
      value: "Below ₹2,00,000 per annum (family income ceiling as per government norms)",
      type: "income",
    },
    {
      label: "Age",
      value: "Generally below 30 years (relaxation for SC/ST/PwD as per government guidelines)",
      type: "age",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
  ],
  benefits: [
    "Annual scholarship of ₹20,000 per annum",
    "One-time scholarship amount disbursed annually via Direct Benefit Transfer (DBT)",
    "Applicable for all years of undergraduate and postgraduate studies",
    "No upper limit on the number of scholarships awarded",
    "Financial support without any employment bond or service obligation",
  ],
  requiredDocuments: [
    { name: "Completed application form", mandatory: true },
    { name: "Class 10 (SSC) / 12 (HSC) marksheet", mandatory: true },
    {
      name: "Current year college enrollment certificate / study certificate",
      mandatory: true,
    },
    { name: "Annual Family Income Certificate", mandatory: true, note: "Issued by District Revenue Officer / Block Development Officer" },
    { name: "Caste/Community Certificate (as applicable)", mandatory: true, note: "To verify minority community status" },
    { name: "Bank Passbook (first page)", mandatory: true },
    { name: "Aadhaar Card (copy)", mandatory: true },
    { name: "Passport-sized photographs (2-3 copies)", mandatory: true },
    {
      name: "Previous qualification marksheet (UG marksheet for PG applicants)",
      mandatory: false,
      note: "For postgraduate students",
    },
    {
      name: "Disability Certificate",
      mandatory: false,
      note: "Only if applicable",
    },
    { name: "Domicile Certificate (state residence proof)", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Minority Affairs, Government of India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "minority girls",
    "women",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Zoroastrian",
    "undergraduate",
    "postgraduate",
    "higher education",
    "national scholarship portal",
    "NSP",
  ],
  faqs: [
    {
      q: "Who is eligible to apply for the Begum Hazrat Mahal National Scholarship?",
      a: "Girls from minority communities (Muslim, Christian, Sikh, Buddhist, Jain, or Zoroastrian) with minimum 55% marks in the previous exam, family income below ₹2 lakh per annum, and enrolled in recognized undergraduate or postgraduate programmes are eligible.",
    },
    {
      q: "What communities are covered under this scholarship?",
      a: "The scheme covers six minority communities: Muslim, Christian, Sikh, Buddhist, Jain, and Zoroastrian communities.",
    },
    {
      q: "How much is the scholarship amount?",
      a: "The annual scholarship is ₹20,000, which is disbursed once a year via Direct Benefit Transfer to the student's bank account.",
    },
    {
      q: "Is there a limit on how many scholarships are awarded each year?",
      a: "No, there is no upper limit on the number of scholarships. As long as applicants meet eligibility criteria, they can receive the scholarship.",
    },
    {
      q: "Can postgraduate (PG) students apply?",
      a: "Yes, both undergraduate and postgraduate female students from eligible minority communities can apply for the scholarship.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Register on the National Scholarship Portal (scholarships.gov.in), fill out the application form, upload required documents (marksheet, income certificate, community certificate, bank passbook, Aadhaar), and submit. Your institution will verify your enrollment.",
    },
    {
      q: "When is the application deadline?",
      a: "Application deadlines typically fall between June and August each year. Visit scholarships.gov.in for the exact dates and notifications.",
    },
    {
      q: "What is the minimum marks requirement?",
      a: "You must have scored a minimum of 55% marks (or equivalent CGPA) in your previous qualifying examination to be eligible.",
    },
    {
      q: "Can I apply if my family income is above ₹2 lakh?",
      a: "No, the scheme is restricted to girls whose family annual income is below ₹2,00,000. This is strictly adhered to for ensuring support reaches economically weaker sections.",
    },
    {
      q: "How is the community status verified?",
      a: "You must submit a Community/Caste Certificate issued by the District Revenue Officer or authorized government official confirming your minority community status.",
    },
    {
      q: "Is there an employment obligation after receiving the scholarship?",
      a: "No, this is a pure scholarship with no employment bond or service obligation. You are free to pursue any career path after completing your studies.",
    },
    {
      q: "Can I receive this scholarship along with other scholarships?",
      a: "Generally, you cannot receive financial support from multiple government scholarship schemes simultaneously. Declare all ongoing financial assistance in your application.",
    },
  ],
  source: "sample",
};
