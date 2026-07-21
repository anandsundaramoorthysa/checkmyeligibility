import type { Scheme } from "@/lib/types";

export const meghalayaBocwBoard: Scheme = {
  id: "meghalaya-bocw-board",
  slug: "meghalaya-bocw-board-mrf5mfab",
  name: "Meghalaya BOCW Board Educational Assistance",
  shortName: "Meghalaya BOCW",
  summary:
    "Monthly stipends of \u20B9400 to \u20B9800 plus one-time grants for books and uniforms for children of registered construction workers in Meghalaya, covering post-matric degree and PG courses.",
  description:
    "The Meghalaya Building and Other Construction Workers Welfare Board (MBOCWWB) provides Educational Assistance via Pre-Matric and Post-Matric Scholarships to the children of registered construction workers. This financial support ensures eligible students can pursue and complete Degree/Post-Graduate (PG) programmes within India without financial hardship. Monthly stipends range from \u20B9400 to \u20B9800, along with one-time grants for books and uniforms.",
  category: "social-welfare",
  level: "state",
  states: ["meghalaya"],
  eligibility: [
    {
      label: "Worker registration",
      value:
        "Parent or guardian must be a registered construction worker under the Meghalaya BOCW Board with active membership",
      type: "other",
    },
    {
      label: "Residency",
      value: "Must be a domicile/resident of Meghalaya",
      type: "residence",
    },
    {
      label: "Course level",
      value: "Must be enrolled in a recognised Post-Matric Degree or Post-Graduate (PG) course",
      type: "education",
    },
    {
      label: "Student status",
      value:
        "Must be studying in a recognised institution and not receiving any other financial assistance or scholarship",
      type: "education",
    },
    {
      label: "Child limit",
      value: "Restricted to a maximum of two children per registered worker",
      type: "other",
    },
  ],
  benefits: [
    "Monthly stipend ranging from \u20B9400 to \u20B9800",
    "One-time grants for books and uniforms",
    "Covers Post-Matric Degree and PG courses",
    "Available for up to two children per registered worker",
  ],
  requiredDocuments: [
    { name: "Valid identity card of the registered construction worker", mandatory: true },
    { name: "Aadhaar card or birth certificate of the student", mandatory: true },
    {
      name: "Admission / bonafide certificate from the Degree/PG college/university",
      mandatory: true,
    },
    {
      name: "Fee receipts (original or attested copies)",
      mandatory: true,
    },
    {
      name: "Previous year's mark sheets",
      mandatory: true,
    },
    {
      name: "Bank passbook (Aadhaar-linked)",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://megbocwwb.gov.in/",
  ministry:
    "Meghalaya Building and Other Construction Workers Welfare Board (MBOCWWB)",
  applicationMode: ["online"],
  tags: [
    "stipend",
    "BOCW",
    "construction workers",
    "Meghalaya",
    "education",
    "degree",
    "PG",
    "post-matric",
    "state scholarship",
    "books",
    "uniforms",
  ],
  faqs: [
    {
      q: "Who is eligible for the Meghalaya BOCW Educational Assistance?",
      a: "Children of registered construction workers under the Meghalaya BOCW Board who are domicile of Meghalaya and enrolled in a recognised Post-Matric Degree or PG course.",
    },
    {
      q: "How much stipend can I receive?",
      a: "Monthly stipends range from \u20B9400 to \u20B9800, plus one-time grants for books and uniforms.",
    },
    {
      q: "Can more than two children from the same family apply?",
      a: "No. The benefit is restricted to a maximum of two children per registered worker.",
    },
    {
      q: "How do I apply?",
      a: "Visit the official Meghalaya BOCW Welfare Board Portal at megbocwwb.gov.in, navigate to the Schemes section, fill out Educational Assistance Form No. XLIV, and upload the required documents.",
    },
    {
      q: "Can I receive this scholarship along with another one?",
      a: "No. The student must not be receiving any other financial assistance or scholarship from any other source.",
    },
  ],
  source: "sample",
};
