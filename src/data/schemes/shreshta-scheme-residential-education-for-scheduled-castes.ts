import type { Scheme } from "@/lib/types";

export const shreshtaSchemeResidentialEducationForScheduledCastes: Scheme = {
  id: "shreshta-scheme-residential-education-for-scheduled-castes",
  slug: "shreshta-scheme-residential-education-for-scheduled-castes",
  name: "SHRESHTA Scheme (Residential Education for Scheduled Castes)",
  shortName: "SHRESHTA",
  summary:
    "Fully funded residential education at empanelled private CBSE schools for SC students in Classes 9\u201312, covering tuition, boarding, lodging, and all academic expenses with no cost to the family.",
  description:
    "SHRESHTA provides quality residential education to Scheduled Caste students in Classes IX and XI through selected private residential schools affiliated with CBSE. Students are selected through the National Testing Agency (NTA) entrance examination. The Government bears the educational and residential expenses of the selected students.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Citizenship",
      value: "Applicant must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Caste (SC) category",
      type: "caste-category",
    },
    {
      label: "Current class",
      value:
        "Must be studying in Class VIII (for admission to Class IX) or Class X (for admission to Class XI)",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B92,50,000",
      type: "income",
    },
    {
      label: "Entrance exam",
      value:
        "Must qualify the SHRESHTA Entrance Examination conducted by NTA",
      type: "other",
    },
  ],
  benefits: [
    "Fully funded tuition fees at empanelled private CBSE residential schools",
    "Free boarding and lodging for the duration of the programme",
    "Free uniform and other academic expenses covered",
    "No financial contribution required from the student or family",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    {
      name: "SC (Scheduled Caste) caste certificate from competent authority",
      mandatory: true,
    },
    {
      name: "Income certificate (annual family income \u2264 \u20B92,50,000)",
      mandatory: true,
    },
    {
      name: "Class 8 mark sheet and school records or transfer certificate",
      mandatory: true,
    },
    { name: "Birth certificate or Class 10 certificate (age proof)", mandatory: true },
    { name: "Passport-size photographs", mandatory: true },
    { name: "Bank account passbook of student or parent", mandatory: true },
    { name: "Parent/guardian identity proof", mandatory: true },
  ],
  officialPortalUrl: "https://socialjustice.gov.in",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "SHRESHTA",
    "residential education",
    "SC",
    "Scheduled Caste",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "CBSE",
    "NTA",
    "social-welfare",
    "boarding",
    "hostel",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What does SHRESHTA stand for?",
      a: "SHRESHTA stands for 'Scheme for Residential Education for Students in High Schools in Targeted Areas'. It is a central government scheme launched by the Ministry of Social Justice and Empowerment to provide quality residential education to Scheduled Caste students.",
    },
    {
      q: "Who is eligible for the SHRESHTA scheme?",
      a: "Indian citizens belonging to the Scheduled Caste (SC) category who are studying in Class VIII (for Class IX entry) or Class X (for Class XI entry), with an annual family income not exceeding ₹2,50,000, who qualify the SHRESHTA Entrance Examination conducted by the National Testing Agency (NTA).",
    },
    {
      q: "Which schools are covered under SHRESHTA?",
      a: "SHRESHTA places students in empanelled private residential CBSE-affiliated schools across India. These schools are selected and empanelled by the Ministry of Social Justice and Empowerment based on quality of education, infrastructure, and performance track record.",
    },
    {
      q: "What does SHRESHTA provide to selected students?",
      a: "SHRESHTA is fully funded by the Government of India. It provides free tuition at an empanelled private CBSE residential school, free boarding and lodging, free uniforms, and all other academic expenses. There is no financial contribution required from the student or family.",
    },
    {
      q: "How do I apply for the SHRESHTA scheme?",
      a: "Visit the National Scholarship Portal (scholarships.gov.in) or the official Ministry of Social Justice and Empowerment portal (socialjustice.gov.in) when the annual notification is released. Register, fill the application form, upload required documents (Aadhaar, SC caste certificate, income certificate, Class 8 mark sheet, birth certificate, photographs, and bank passbook), and appear for the SHRESHTA Entrance Examination conducted by NTA.",
    },
  ],
  source: "sample",
};
