import type { Scheme } from "@/lib/types";

export const nationalFellowshipScholarshipStStudents: Scheme = {
  id: "national-fellowship-scholarship-higher-education-st-students",
  slug: "national-fellowship-and-scholarship-for-higher-education-of-st-students",
  name: "National Fellowship and Scholarship for Higher Education of ST Students",
  shortName: "ST Fellowship & Scholarship",
  summary:
    "Central scholarship and fellowship programme for meritorious Scheduled Tribe (ST) students pursuing postgraduate and research studies, with monthly stipends and contingency grants.",
  description:
    "The National Fellowship and Scholarship for Higher Education of ST Students is a flagship scheme by the Ministry of Education (formerly MHRD), Government of India, designed to identify and support exceptionally meritorious Scheduled Tribe (ST) students pursuing postgraduate studies (Master's and doctoral programmes) at recognized universities and research institutions across India. The scheme aims to facilitate social mobility and promote higher education among ST communities by providing financial support, mentorship, and research opportunities. Under this scheme, qualified ST candidates receive monthly fellowships, research contingency grants, and academic support to pursue advanced studies in diverse disciplines including science, technology, humanities, social sciences, and professional fields. The fellowship enables ST students to focus entirely on their research and academic pursuits without financial constraints.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to a Scheduled Tribe (ST) as per the Indian Constitution and listed in the official ST list of the applicant's state/UT",
      type: "caste-category",
    },
    {
      label: "Course Level",
      value:
        "Pursuing a full-time postgraduate degree (Master's — M.A., M.Sc., M.Com., M.Tech., etc.) or doctoral research programme (PhD) at recognized Indian universities/research institutions",
      type: "education",
    },
    {
      label: "Academic Merit",
      value:
        "Minimum 55% marks or equivalent CGPA in the qualifying examination (Bachelor's degree for Master's applicants; Master's degree for PhD applicants)",
      type: "education",
    },
    {
      label: "Entrance Exam",
      value:
        "Qualified in recognized national-level entrance examinations (NET/GATE/CSIR-NET/JAM or equivalent) or admission to a deemed university / IIT / NIT / IMSC / IISC / IISER",
      type: "education",
    },
    {
      label: "Age Limit",
      value: "Generally no upper age limit for pursuing postgraduate studies, but candidates should be recent graduates or currently enrolled",
      type: "age",
    },
    {
      label: "Citizenship",
      value: "Indian citizen",
      type: "other",
    },
    {
      label: "Continuation",
      value:
        "Continuing students who previously received similar scholarships must maintain satisfactory academic progress (minimum 55% marks per semester/year)",
      type: "other",
    },
  ],
  benefits: [
    "Monthly Fellowship: ₹5,000 per month for Master's students; ₹7,000 per month for PhD students",
    "Contingency Grant: ₹8,000 to ₹12,000 per annum for academic-related expenses (books, lab materials, conference travel)",
    "Accommodation Allowance: Additional support available for students pursuing research at non-home institutions",
    "Research Allowance: Additional grant for fieldwork, lab equipment, or specialized research materials",
    "No requirement of service bond or employment commitment after completion of studies",
    "Merit recognition and credentials for higher academic and professional pursuits",
    "Access to research facilities and mentorship from senior academicians",
  ],
  requiredDocuments: [
    { name: "Completed application form (as per prescribed format)", mandatory: true },
    { name: "Bachelor's degree certificate and marksheet", mandatory: true },
    {
      name: "Master's degree certificate and marksheet (for PhD applicants)",
      mandatory: true,
      note: "Required only if applying for doctoral fellowship",
    },
    {
      name: "Scheduled Tribe (ST) Certificate",
      mandatory: true,
      note: "Issued by the District Revenue Officer or authorized official, confirming ST status",
    },
    { name: "Current institutional enrollment certificate / study certificate", mandatory: true },
    { name: "Entrance examination scorecard", mandatory: true, note: "NET/GATE/CSIR-NET/JAM or equivalent" },
    { name: "Research Proposal (for PhD applicants)", mandatory: false, note: "Max 2-3 pages outlining research objectives" },
    { name: "Letter(s) of Recommendation", mandatory: false, note: "From faculty/research supervisor (1-2 letters)" },
    { name: "Statement of Purpose / Academic Goals", mandatory: true, note: "500-750 words" },
    { name: "Bank Passbook (first page with account holder's name and IFSC code)", mandatory: true },
    { name: "Aadhaar Card (copy)", mandatory: true },
    { name: "Passport or PAN Card", mandatory: false },
    { name: "Domicile Certificate (state residence proof)", mandatory: false },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Education (Department of Higher Education), Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "scholarship",
    "ST students",
    "scheduled tribe",
    "postgraduate",
    "PhD",
    "research",
    "higher education",
    "national fellowship",
    "ministry of education",
    "merit-based",
    "social welfare",
  ],
  faqs: [
    {
      q: "Who is eligible to apply for the National Fellowship and Scholarship for Higher Education of ST Students?",
      a: "ST students pursuing full-time Master's or PhD programmes at recognized Indian universities with minimum 55% marks in the qualifying examination and having qualified in entrance exams like NET/GATE/CSIR-NET/JAM are eligible.",
    },
    {
      q: "What is the scholarship amount and frequency of disbursement?",
      a: "Master's students receive ₹5,000 per month, and PhD students receive ₹7,000 per month. Additionally, a contingency grant of ₹8,000-₹12,000 per annum is provided. Stipends are typically disbursed monthly or quarterly through Direct Benefit Transfer (DBT).",
    },
    {
      q: "Can I apply if I'm pursuing a part-time or distance learning course?",
      a: "No, this fellowship is exclusively for full-time, regular postgraduate and doctoral programmes at recognized institutions.",
    },
    {
      q: "Is there an entrance exam requirement?",
      a: "Yes, applicants must have qualified in a recognized national-level entrance examination such as NET (National Eligibility Test), GATE, CSIR-NET, JAM, or equivalent, or secured admission to premier institutions like IITs, NITs, IMSC, IISC, IISER.",
    },
    {
      q: "What is the minimum marks requirement?",
      a: "A minimum of 55% marks or equivalent CGPA in the qualifying examination (Bachelor's degree for Master's; Master's degree for PhD) is mandatory.",
    },
    {
      q: "Can I apply for both Master's and PhD fellowship simultaneously?",
      a: "No, you must choose one level. However, once you complete your Master's and move to PhD, you can apply for PhD fellowship if you meet the eligibility criteria.",
    },
    {
      q: "Is the fellowship available for all fields of study?",
      a: "Yes, the fellowship is available across all academic disciplines — science, technology, humanities, social sciences, commerce, law, arts, and professional studies.",
    },
    {
      q: "How do I apply?",
      a: "Visit the National Scholarship Portal (scholarships.gov.in), register, select this fellowship scheme, fill the application form, upload required documents (ST certificate, entrance exam scorecard, enrollment certificate, marksheet, Aadhaar, bank details), and submit for institutional verification.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines typically fall between June and September. Check the National Scholarship Portal for exact announcement dates and submission deadlines each year.",
    },
    {
      q: "Can I continue the fellowship if I change my institution during my course?",
      a: "Yes, you can, provided the new institution is recognized by the government and you have transferred with proper institutional documentation. Inform the scholarship authorities about the transfer.",
    },
    {
      q: "Will I get the fellowship if I take a semester or year off?",
      a: "No, the fellowship is disbursed only for the duration when you are actively enrolled and pursuing full-time studies. If you take a break, disbursement will be paused and may resume upon your return.",
    },
    {
      q: "Is there any service obligation or bond after receiving the fellowship?",
      a: "No, this is a pure scholarship/fellowship with no employment bond, service obligation, or payback requirement.",
    },
    {
      q: "Can I receive this fellowship along with other scholarships?",
      a: "Generally, you cannot receive simultaneous financial support from multiple central government scholarship schemes. Declare all ongoing scholarships and financial aid in your application.",
    },
    {
      q: "How long does the fellowship last?",
      a: "The fellowship is provided for the entire duration of your postgraduate programme (typically 2 years for Master's and 3-5 years for PhD), subject to maintaining satisfactory academic progress and annual renewal.",
    },
  ],
  source: "sample",
};
