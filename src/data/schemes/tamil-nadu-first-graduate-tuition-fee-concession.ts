import type { Scheme } from "@/lib/types";

export const tamilNaduFirstGraduateTuitionFeeConcession: Scheme = {
  id: "tamil-nadu-first-graduate-tuition-fee-concession",
  slug: "tamil-nadu-first-graduate-tuition-fee-concession-4m1p8s3k",
  name: "Tamil Nadu First Graduate Tuition Fee Concession Scheme",
  shortName: "TN First Graduate Concession",
  summary:
    "Full tuition fee waiver for the first graduate in a family pursuing professional courses (Engineering, Medical, etc.) through single-window counselling in Tamil Nadu.",
  description:
    "The Tamil Nadu First Graduate Tuition Fee Concession Scheme is a flagship initiative by the Higher Education Department, Government of Tamil Nadu, to encourage first-generation learners to pursue professional higher education. Students who are the first graduates in their family and secure admission to professional courses such as Engineering, Medical, Agriculture, Nursing, and Law through the single-window counselling system are eligible for a full tuition fee waiver. The scheme applies to government, government-aided, and private institutions across the state. There is no income limit for eligibility. The concession covers the entire duration of the course, provided the student maintains continuous promotion. Over 1.56 lakh students benefit annually, with the state government allocating more than ₹400 crore per year for this scheme.",
  category: "education",
  level: "state",
  states: ["tamil-nadu"],
  eligibility: [
    {
      label: "First graduate status",
      value: "Must be the first graduate in the family — no parent or sibling should be a graduate or have availed this concession previously",
      type: "education",
    },
    {
      label: "Admission mode",
      value: "Must have secured admission through single-window counselling (TNEA / TANCMAT / NEET counselling) for professional courses",
      type: "education",
    },
    {
      label: "Domicile",
      value: "Must be a resident of Tamil Nadu",
      type: "residence",
    },
    {
      label: "Income limit",
      value: "No family income limit — open to all eligible students regardless of income",
      type: "income",
    },
    {
      label: "Course type",
      value: "Must be enrolled in a professional degree course — Engineering, Medical, Agriculture, Nursing, or Law",
      type: "education",
    },
  ],
  benefits: [
    "Full tuition fee waiver for the entire duration of the professional course",
    "Applicable in government, government-aided, and private institutions",
    "Fee concession ranging from ₹20,000 to ₹27,500 per year for engineering in self-financing colleges",
    "Complete fee exemption for government and government-aided college students",
  ],
  requiredDocuments: [
    { name: "First Graduate Certificate (REV-104) issued by Tahsildar via e-Sevai", mandatory: true },
    { name: "Joint Declaration Form signed by parent and student", mandatory: true },
    { name: "TNEA / counselling allotment order", mandatory: true },
    { name: "Community certificate", mandatory: true },
    { name: "Income certificate", mandatory: false },
    { name: "Sibling non-availment self-declaration", mandatory: true },
    { name: "10th and 12th mark sheets", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
  ],
  officialPortalUrl: "https://www.tneaonline.org",
  ministry: "Higher Education Department, Government of Tamil Nadu",
  applicationMode: ["online"],
  tags: [
    "Tamil Nadu",
    "first graduate",
    "tuition fee concession",
    "professional courses",
    "engineering",
    "medical",
    "single window counselling",
    "TNEA",
    "first generation learner",
    "state scheme",
  ],
  faqs: [
    {
      q: "Who is considered a 'first graduate'?",
      a: "A student whose parents and siblings have not completed a graduate degree and who has not previously availed the first graduate fee concession. Only one child per family is eligible for this benefit.",
    },
    {
      q: "Is there an income limit?",
      a: "No. There is no family income limit for the Tamil Nadu First Graduate Tuition Fee Concession Scheme.",
    },
    {
      q: "Which courses are covered?",
      a: "Professional courses including Engineering, Medical (MBBS), Agriculture, Nursing, and Law, secured through single-window counselling in Tamil Nadu.",
    },
    {
      q: "Does the concession cover hostel and other fees?",
      a: "No. The concession covers only the tuition fee component. Hostel, mess, and examination fees must be paid separately.",
    },
    {
      q: "How do I obtain the First Graduate Certificate?",
      a: "Apply online through the Tamil Nadu e-Sevai portal (tnesevai.tn.gov.in) under Revenue Department service REV-104. The fee is ₹60 and the certificate is valid for up to 3 years.",
    },
  ],
  source: "sample",
};
