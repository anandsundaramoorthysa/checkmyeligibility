import type { Scheme } from "@/lib/types";

export const evnarayanPreMatricScholarshipScheme: Scheme = {
  id: "devnarayan-pre-matric-scholarship-scheme",
  slug: "devnarayan-pre-matric-scholarship-scheme",
  name: "Devnarayan Pre-Matric Scholarship Scheme",
  summary:
    "Monthly scholarship of ₹50–₹120 for students from Extremely Backward Classes in Rajasthan (Classes 6–10), including free education, accommodation, meals, uniforms, and books.",
  description:
    "A welfare scheme by the Government of Rajasthan for students from 'Very Backward Classes' (such as Banjara, Gujjar, Raika, Gadaria, etc.) to reduce dropout rates and support education from Class 6 to Class 10.",
  category: "social-welfare",
  level: "state",
  states: ["rajasthan"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a native of Rajasthan",
      type: "residence",
    },
    {
      label: "Caste",
      value: "Must belong to notified Extremely Backward Classes (e.g., Banjara, Baladiya, Labana, Gadia-Lohar, Gujjar/Gurjar, Raika/Rebari, Gadariya/Gayari)",
      type: "caste-category",
    },
    {
      label: "Income limit",
      value: "Annual family income must not exceed ₹2,00,000",
      type: "income",
    },
    {
      label: "Exclusion",
      value: "Must not be receiving any other central or state scholarship",
      type: "other",
    },
  ],
  benefits: [
    "Classes 6–8: ₹50 per month (Boys) / ₹100 per month (Girls)",
    "Classes 9–10: ₹60 per month (Boys) / ₹120 per month (Girls)",
    "Free education and accommodation",
    "Free meals, uniforms, and books",
  ],
  requiredDocuments: [
    { name: "Domicile Certificate", mandatory: true },
    { name: "Caste Certificate (issued by Tehsildar or higher)", mandatory: true },
    { name: "Income Certificate", mandatory: true },
    { name: "Academic Marksheet/Certificate", mandatory: true },
    { name: "Jan Aadhar Card", mandatory: true },
    { name: "Aadhar Card", mandatory: true },
  ],
  officialPortalUrl: "https://sjmsnew.rajasthan.gov.in/scholarship/",
  ministry:
    "Social Justice and Empowerment Department / Government of Rajasthan",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "pre-matric",
    "OBC",
    "extremely backward classes",
    "Rajasthan",
    "state",
    "school",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Devnarayan",
  ],
  faqs: [
    {
      q: "Who is eligible for the Devnarayan Pre-Matric Scholarship?",
      a: "Students who are natives of Rajasthan, belong to notified Extremely Backward Classes (such as Banjara, Gujjar, Raika, Gadaria, etc.), have an annual family income not exceeding ₹2,00,000, and are not receiving any other central or state scholarship.",
    },
    {
      q: "What is the scholarship amount?",
      a: "For Classes 6–8: ₹50 per month for boys and ₹100 per month for girls. For Classes 9–10: ₹60 per month for boys and ₹120 per month for girls. The scheme also provides free education, accommodation, meals, uniforms, and books.",
    },
    {
      q: "What classes are covered?",
      a: "The scheme covers students from Class 6 to Class 10.",
    },
    {
      q: "How do I apply?",
      a: "Visit the official Rajasthan scholarship portal, select the login or register option, log in using your Jan-Aadhaar ID on the Rajasthan SSO portal, fill out the application form, attach the required documents, and submit.",
    },
    {
      q: "What documents are required?",
      a: "Domicile certificate, caste certificate issued by Tehsildar or higher, income certificate, academic marksheet/certificate, Jan Aadhar card, and Aadhar card.",
    },
  ],
  source: "sample",
};
