import type { Scheme } from "@/lib/types";

export const drAmbedkarPostMatricScholarshipEbc: Scheme = {
  id: "dr-ambedkar-post-matric-scholarship-ebc",
  slug: "dr-ambedkar-post-matric-scholarship-ebc",
  name: "Dr. Ambedkar Post-Matric Scholarship for Economically Backward Classes (EBC)",
  shortName: "Dr. Ambedkar PMS (EBC)",
  summary:
    "Centrally sponsored post-matric scholarship providing maintenance allowance up to ₹750/month plus fee reimbursement for EBC students from the General category (not SC/ST/OBC) pursuing post-Class-10 education, with a family income ceiling of ₹1 lakh per annum.",
  description:
    "The Dr. Ambedkar Centrally Sponsored Scheme of Post-Matric Scholarships for Economically Backward Class (EBC) Students is implemented by the Department of Social Justice & Empowerment, Ministry of Social Justice & Empowerment, Government of India. The scheme was introduced to provide financial assistance to economically disadvantaged students from the General category who do not fall under the SC, ST, or OBC reservation categories, enabling them to complete their post-matriculation or post-secondary education.\n\nThe scholarship covers two main components: a monthly maintenance allowance to help with living expenses during the course of study, and reimbursement of compulsory non-refundable institutional fees such as tuition, enrolment, library, and examination fees. The maintenance allowance varies depending on the course group and whether the student is a hosteller or day scholar, ranging from ₹160 to ₹750 per month.\n\nAdditional benefits include study tour charges of up to ₹900 per annum for professional and technical courses, thesis typing and printing charges of up to ₹1,000 for research scholars, and reader charges for blind scholars. The scholarship is disbursed directly to the student's Aadhaar-linked bank account through Direct Benefit Transfer (DBT) via the National Scholarship Portal (NSP).\n\nThe scheme has a specific limitation: a maximum of two boys from the same family can avail of this scholarship, with no such cap on girls. Applications are processed annually through the National Scholarship Portal (scholarships.gov.in), and the scholarship is renewable each year provided the student maintains good academic progress and conduct.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value:
        "Must belong to the General category (i.e., not SC, ST, or OBC) and be classified as Economically Backward Class (EBC)",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value:
        "Total annual family income from all sources must not exceed ₹1,00,000 per annum",
      type: "income",
    },
    {
      label: "Course level",
      value:
        "Must be pursuing recognised post-matriculation (post-Class-10) education in India, including Class 11, 12, ITI, diploma, undergraduate, postgraduate, M.Phil, and Ph.D. programmes",
      type: "education",
    },
    {
      label: "Institution",
      value:
        "Must be enrolled in a recognised institution in India",
      type: "education",
    },
    {
      label: "Family limit",
      value:
        "A maximum of two male students from the same family can receive this scholarship; there is no cap for female students",
      type: "other",
    },
    {
      label: "Other scholarships",
      value:
        "Must not be receiving any other scholarship or stipend from any other source during the same period",
      type: "other",
    },
  ],
  benefits: [
    "Monthly maintenance allowance: up to ₹750 (hostellers) or ₹350 (day scholars) for Group A courses (M.Phil, Ph.D, engineering, management)",
    "Monthly maintenance allowance: up to ₹510 (hostellers) or ₹335 (day scholars) for Group B courses (B.Pharma, LLB, hotel management, PG courses)",
    "Monthly maintenance allowance: up to ₹400 (hostellers) or ₹210 (day scholars) for Group C courses (general graduation — B.A., B.Sc., B.Com)",
    "Monthly maintenance allowance: up to ₹260 (hostellers) or ₹160 (day scholars) for Group D courses (ITI, polytechnic, senior secondary)",
    "Full reimbursement of compulsory non-refundable institutional fees (tuition, enrolment, library, examination, etc.)",
    "Study tour charges of up to ₹900 per annum for essential study-related travel in professional/technical courses",
    "Thesis typing and printing charges of up to ₹1,000 for research scholars",
    "Reader charges for blind scholars up to ₹175 per month depending on the course group",
    "Disbursed directly via Direct Benefit Transfer (DBT) to the student's Aadhaar-linked bank account",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Issued by Tehsildar or equivalent competent authority showing annual family income ≤ ₹1,00,000",
    },
    {
      name: "Caste Certificate / Category Certificate",
      mandatory: true,
      note: "Proof of General category (non-SC/ST/OBC) EBC status",
    },
    { name: "Previous year's marksheet", mandatory: true },
    {
      name: "Current year fee receipt",
      mandatory: true,
      note: "From the recognised institution",
    },
    { name: "Aadhaar-linked bank account details", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    {
      name: "Bonafide / institution verification",
      mandatory: true,
    },
    {
      name: "Domicile certificate",
      mandatory: false,
      note: "Required by some states during verification",
    },
    {
      name: "Disability certificate",
      mandatory: false,
      note: "Required if claiming reader charges as a blind scholar",
    },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Department of Social Justice & Empowerment / Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "post-matric",
    "EBC",
    "economically backward classes",
    "general category",
    "Dr. Ambedkar",
    "NSP",
    "DBT",
    "maintenance allowance",
    "fee reimbursement",
    "all-india",
    "central",
    "centrally sponsored",
    "social justice",
  ],
  faqs: [
    {
      q: "What is the Dr. Ambedkar Post-Matric Scholarship for EBC?",
      a: "It is a Centrally Sponsored scheme by the Ministry of Social Justice & Empowerment that provides financial assistance (maintenance allowance + fee reimbursement) to EBC students from the General category (not SC/ST/OBC) pursuing post-matric education in India, with a family income ceiling of ₹1 lakh per annum.",
    },
    {
      q: "Who is eligible for this scholarship?",
      a: "Indian nationals belonging to the General category (excluding SC, ST, OBC) classified as EBC, pursuing recognised post-Class-10 education in India, with annual family income not exceeding ₹1 lakh. A maximum of two boys per family can apply; there is no cap for girls.",
    },
    {
      q: "How much is the maintenance allowance?",
      a: "It varies by course group: Group A (M.Phil/Ph.D/Engineering/Management): up to ₹750/month for hostellers and ₹350 for day scholars. Group B (B.Pharma/LLB/PG): up to ₹510/month. Group C (general graduation): up to ₹400/month. Group D (ITI/Polytechnic/Class 11-12): up to ₹260/month.",
    },
    {
      q: "Does the scholarship cover tuition fees?",
      a: "Yes. The scheme reimburses compulsory non-refundable institutional fees including tuition, enrolment, library, and examination fees, in addition to the maintenance allowance.",
    },
    {
      q: "How do I apply?",
      a: "Register and apply through the National Scholarship Portal (scholarships.gov.in). Complete One-Time Registration (OTR), fill the application form, upload required documents (income certificate, academic records, bank details), and submit for institution and state verification.",
    },
    {
      q: "Is this scholarship available for studying abroad?",
      a: "No. The scholarship is available only for studies in recognised institutions within India. For overseas studies, a separate interest subsidy scheme exists for EBC students.",
    },
    {
      q: "Can I receive this scholarship along with another scholarship?",
      a: "No. Students receiving any other scholarship or stipend from any source are not eligible for this scholarship during the same period.",
    },
  ],
  source: "sample",
};
