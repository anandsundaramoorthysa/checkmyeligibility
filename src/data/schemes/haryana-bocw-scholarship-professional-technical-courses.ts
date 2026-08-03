import type { Scheme } from "@/lib/types";

export const haryanaBocwScholarshipProfessionalTechnicalCourses: Scheme = {
  id: "haryana-bocw-welfare-board-scholarship-professional-technical-degree-courses",
  slug: "haryana-bocw-welfare-board-scholarship-professional-technical-degree-courses",
  name: "Haryana BOCW Welfare Board – Scholarship for Professional/Technical Degree Courses",
  shortName: "Haryana BOCW Scholarship",
  summary:
    "Full financial support for admission, tuition, and examination fees for children of registered construction workers in Haryana pursuing professional or technical degree courses.",
  description:
    "The Haryana Building and Other Construction Workers Welfare Board (HBOCWWB) under the Labour Department, Government of Haryana, offers a scholarship to support the children of registered construction workers in pursuing higher education in professional and technical fields. Under this scheme, all academic expenses including admission fees, tuition fees, and examination fees are fully covered. The government directly pays the fees to the respective institution, ensuring no financial burden on the student. For private institutions, fees are reimbursed as per government college rates. The scheme applies to both professional and technical courses. The parent (mother or father) must be a registered member of the Construction Workers Board with at least 1 year of active membership. Up to 3 daughters and 2 sons per family can benefit. Applications are accepted online through the Haryana Antyodaya SARAL Portal.",
  category: "scholarship",
  level: "state",
  states: ["haryana"],
  eligibility: [
    {
      label: "Residence",
      value: "Must be a permanent resident of Haryana",
      type: "residence",
    },
    {
      label: "Parent's registration",
      value:
        "Parent (mother or father) must be registered with the Haryana Building and Other Construction Workers Welfare Board",
      type: "occupation",
    },
    {
      label: "Membership duration",
      value: "Minimum 1 year of active membership with the Construction Workers Board",
      type: "other",
    },
    {
      label: "Course",
      value: "Must be enrolled in a professional or technical degree course",
      type: "education",
    },
    {
      label: "Employment status",
      value: "Applicant should not be self-employed or currently employed",
      type: "occupation",
    },
    {
      label: "Family limit",
      value: "Up to 3 daughters and up to 2 sons per family are eligible",
      type: "other",
    },
  ],
  benefits: [
    "Full coverage of admission fees",
    "Full coverage of tuition fees",
    "Full coverage of examination fees",
    "Fees paid directly to the institution by the government",
    "For private institutions, fees reimbursed as per government college rates",
  ],
  requiredDocuments: [
    { name: "Haryana Domicile Certificate", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bank Account Details", mandatory: true },
    { name: "Passport Size Photograph", mandatory: true },
    { name: "Construction Worker Registration Number / Card", mandatory: true },
    { name: "Work Slip", mandatory: true },
    { name: "Declaration Form", mandatory: true },
    { name: "Mobile Number", mandatory: true },
    {
      name: "Caste Certificate",
      mandatory: false,
      note: "Required if applicable",
    },
    { name: "Email ID", mandatory: true },
  ],
  officialPortalUrl: "https://saralharyana.gov.in/",
  ministry:
    "Labour Department / Haryana Building and Other Construction Workers Welfare Board, Government of Haryana",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "Haryana",
    "BOCW",
    "construction workers",
    "professional",
    "technical",
    "degree",
    "tuition fee",
    "labour welfare",
    "state scheme",
    "SARAL Portal",
  ],
  faqs: [
    {
      q: "What is the Haryana BOCW Scholarship for Professional/Technical Courses?",
      a: "A scheme by the Haryana Building and Other Construction Workers Welfare Board that provides full financial support (admission, tuition, and examination fees) for children of registered construction workers pursuing professional or technical degree courses in Haryana.",
    },
    {
      q: "Who is eligible to apply?",
      a: "Children of construction workers registered with the Haryana BOCW Board with at least 1 year of active membership. The student must be a Haryana resident enrolled in a professional or technical course and should not be self-employed or currently employed.",
    },
    {
      q: "How many children per family can benefit?",
      a: "Up to 3 daughters and up to 2 sons per family are eligible.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the Haryana Antyodaya SARAL Portal (saralharyana.gov.in), register with your details, login, select the scheme under 'Financial Assistance for Education', fill the application form, upload required documents, and submit.",
    },
    {
      q: "Is the fee paid to the student or the institution?",
      a: "The fees are paid directly to the respective institution by the government. No direct payment is given to students.",
    },
    {
      q: "What if the student fails in a class?",
      a: "If a student fails in a class, they will not receive benefits for that academic year.",
    },
  ],
  source: "sample",
};
