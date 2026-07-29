import type { Scheme } from "@/lib/types";

export const licGoldenJubileeScholarship: Scheme =   {
    id: "lic-golden-jubilee-scholarship",
    slug: "lic-golden-jubilee-scholarship-mrernkum",
    name: "LIC Golden Jubilee Scholarship",
    shortName: "LIC GJS",
    summary:
      "Merit-cum-means scholarship for economically weaker students pursuing Medicine, Engineering, Graduation, Diploma, or ITI courses.",
    description:
      "The LIC Golden Jubilee Scholarship is a merit-cum-means initiative for students from economically weaker families. It supports students pursuing studies in Medicine, Engineering, Graduation, Diploma, or ITI courses, and offers a special scholarship for girls completing Class 10 to pursue further studies.",
    category: "finance-credit",
    level: "central",
    states: ["all-india"],
    eligibility: [
      {
        label: "Academic performance",
        value: "Must have passed Class 10 or 12 (or equivalent) with at least 60% marks in the preceding academic year",
        type: "education",
      },
      {
        label: "Family income",
        value: "Annual family income from all sources must not exceed ₹4.5 Lakhs",
        type: "income",
      },
      {
        label: "Enrollment",
        value: "Applicants must be enrolled in the first year of a regular, full-time course",
        type: "education",
      },
      {
        label: "Family limit",
        value: "Only one student per family is eligible",
        type: "other",
      },
    ],
    benefits: [
      "₹40,000 per annum for Medical students",
      "₹30,000 per annum for Engineering students",
      "₹20,000 per annum for General Graduation/Diploma/ITI students",
      "₹15,000 per annum for Special Girl Child Scholarship",
    ],
    requiredDocuments: [
      { name: "Class 10/12 Mark Sheet (proving 60% marks)", mandatory: true },
      { name: "Family Income Certificate (issued by a competent authority)", mandatory: true },
      { name: "College Admission/Bonafide Certificate", mandatory: true },
      { name: "Aadhaar Card", mandatory: true },
      { name: "Bank Passbook/Cancelled Cheque (Aadhaar-seeded)", mandatory: true },
    ],
    officialPortalUrl: "https://licindia.in/",
    ministry: "LIC of India",
    applicationMode: ["online"],
    tags: ["scholarship", "ews", "merit", "medical", "engineering", "graduation", "diploma", "iti"],
    faqs: [
      {
        q: "What is the minimum percentage required?",
        a: "At least 60% marks in Class 10 or 12 (or equivalent) in the preceding academic year.",
      },
      {
        q: "What is the family income limit?",
        a: "Annual family income from all sources must not exceed ₹4.5 Lakhs.",
      },
      {
        q: "How much scholarship is provided?",
        a: "₹40,000/year (Medical), ₹30,000/year (Engineering), ₹20,000/year (General Graduation/Diploma/ITI), ₹15,000/year (Special Girl Child).",
      },
    ],
    source: "sample",
  };
