import type { Scheme } from "@/lib/types";

export const freeCoachingAndAlliedScheme: Scheme = {
  id: "free-coaching-and-allied-scheme",
  slug: "free-coaching-and-allied-scheme",
  name: "Free Coaching and Allied Scheme (for SCs, OBCs, and PM CARES beneficiaries)",
  shortName: "Free Coaching Scheme",
  summary:
    "Quality coaching for SC, OBC, and PM CARES beneficiaries to prepare for competitive exams and professional courses, with coaching fee coverage up to \u20B975,000 and a monthly stipend of up to \u20B96,000.",
  description:
    "Provides quality coaching for economically disadvantaged Scheduled Castes (SCs), Other Backward Classes (OBCs), and beneficiaries of the PM CARES for Children Scheme. The objective is to enable students to appear in competitive examinations for jobs in the Public/Private sector and secure admission to reputed professional institutions. The scheme is currently implemented through Dr. Ambedkar Centres of Excellence (DACE) in empanelled Central Universities and via online partnerships.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste / category",
      value:
        "Must belong to SC or OBC category (or be a beneficiary of the PM CARES for Children Scheme)",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B98,00,000 from all sources",
      type: "income",
    },
    {
      label: "Academic performance",
      value:
        "Minimum 50% marks in the qualifying examination (Class X or XII, depending on the course)",
      type: "education",
    },
    {
      label: "Benefit limit",
      value: "Benefits can be availed not more than twice",
      type: "other",
    },
    {
      label: "Minority candidates",
      value:
        "Candidates belonging to minority communities are directed to similar schemes under the Ministry of Minority Affairs",
      type: "other",
    },
  ],
  benefits: [
    "Coaching fee coverage up to \u20B975,000 for Civil Services / JEE / NEET / CA / GATE",
    "Coaching fee coverage up to \u20B940,000 for SSC / RRB examinations",
    "Coaching fee coverage up to \u20B950,000 for Banking / CAT / CMAT",
    "Monthly stipend of \u20B93,000 for local students",
    "Monthly stipend of \u20B96,000 for outstation students",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card (linked to a Bank Account)", mandatory: true },
    {
      name: "Income Certificate (issued by a Tehsildar or equivalent Revenue Officer)",
      mandatory: true,
    },
    { name: "Caste / Community Certificate", mandatory: true },
    {
      name: "Academic Mark Sheets (Class X / XII / Graduation)",
      mandatory: true,
    },
    {
      name: "Proof of Admission / Enrolment in the competitive coaching course",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://coaching.dosje.gov.in/",
  ministry: "Ministry of Social Justice & Empowerment",
  applicationMode: ["online"],
  tags: [
    "coaching",
    "free coaching",
    "SC",
    "OBC",
    "PM CARES",
    "competitive exams",
    "Civil Services",
    "JEE",
    "NEET",
    "GATE",
    "SSC",
    "RRB",
    "Banking",
    "CAT",
    "stipend",
    "DACE",
    "social-welfare",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "Which categories of students are eligible for the Free Coaching and Allied Scheme?",
      a: "Scheduled Caste (SC) and Other Backward Class (OBC) students with an annual family income not exceeding ₹8,00,000 and at least 50% marks in the qualifying examination. PM CARES for Children Scheme beneficiaries are also eligible. The scheme can be availed not more than twice.",
    },
    {
      q: "Which competitive exams and courses are covered?",
      a: "Civil Services (IAS/IFS), Group A and B services, State PSC exams, JEE, NEET, CA/CS, GATE, SSC, RRB, and Banking/CAT/CMAT examinations. Coaching fee coverage varies by exam — up to ₹75,000 for Civil Services/JEE/NEET/CA/GATE, up to ₹50,000 for Banking/CAT/CMAT, and up to ₹40,000 for SSC/RRB.",
    },
    {
      q: "How are coaching institutes empanelled under this scheme?",
      a: "Coaching institutes must apply to the Ministry of Social Justice and Empowerment for empanelment. They are assessed on infrastructure, faculty qualifications, track record of results, and fee structure. Currently the scheme is also implemented through Dr. Ambedkar Centres of Excellence (DACE) set up in empanelled Central Universities.",
    },
    {
      q: "What is the income limit for eligibility?",
      a: "The annual family income from all sources must not exceed ₹8,00,000. An income certificate issued by a Tehsildar or equivalent revenue officer is required.",
    },
    {
      q: "How do I apply for the Free Coaching and Allied Scheme?",
      a: "Apply online at the official portal (coaching.dosje.gov.in). Register with your details, select the eligible exam and empanelled coaching institute, upload required documents (Aadhaar, income certificate, caste certificate, academic mark sheets, and proof of admission to the coaching course), and submit the application. Admission to a DACE or empanelled institute is required before applying.",
    },
  ],
  source: "sample",
};
