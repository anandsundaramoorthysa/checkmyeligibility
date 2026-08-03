import type { Scheme } from "@/lib/types";

export const freeEducationScholarshipForProfessionalCoursesEngineeringMedicalAgricultureVeterinaryAndLaw: Scheme =
  {
    id: "free-education-scholarship-for-professional-courses-engineering-medical-agriculture-veterinary-and-law-mrf4o3ea",
    slug: "free-education-scholarship-for-professional-courses-engineering-medical-agriculture-veterinary-and-law-mrf4o3ea",
    name: "Free Education Scholarship for Professional Courses (Engineering, Medical, Agriculture, Veterinary, and Law)",
    shortName: "Free Education (Professional Courses)",
    summary:
      "Full fee waiver for BC, MBC, and DNC students of Tamil Nadu pursuing professional courses like Engineering, Medical, Agriculture, Veterinary, and Law in Government, Government-aided, and Self-financing colleges.",
    description:
      "The Free Education Scholarship for Professional Courses, implemented by the Backward Classes, Most Backward Classes and Minorities Welfare Department, Government of Tamil Nadu, provides full fee support to eligible BC, MBC and DNC students pursuing professional courses such as Engineering, Medical, Agriculture, Veterinary and Law in Government, Government-aided and Self-financing colleges. The scheme covers the full tuition fee, special fees, other non-refundable compulsory fees, and the full examination fee as prescribed by the Government, enabling eligible students from backward communities to pursue higher professional education without financial barriers.",
    category: "scholarship",
    level: "state",
    states: ["tamil-nadu"],
    eligibility: [
      {
        label: "Residence",
        value: "Applicant must be a student and a resident of Tamil Nadu",
        type: "residence",
      },
      {
        label: "Community",
        value:
          "Must belong to Backward Classes (BC), Most Backward Classes (MBC), or Denotified Communities (DNC)",
        type: "caste-category",
      },
      {
        label: "Course",
        value:
          "Must be pursuing a professional course (Engineering, Medical, Agriculture, Veterinary, or Law) in a Government, Government-aided, or Self-financing college",
        type: "education",
      },
      {
        label: "Annual family income",
        value: "Annual family income must not exceed ₹1,00,000",
        type: "income",
      },
      {
        label: "Family qualification",
        value: "There should be no graduate in the family",
        type: "other",
      },
    ],
    benefits: [
      "Full tuition fee waiver",
      "Special fees waiver",
      "Waiver of other non-refundable compulsory fees",
      "Full examination fee as prescribed by the Government",
    ],
    requiredDocuments: [
      { name: "Aadhaar / Identity Proof", mandatory: true },
      { name: "Caste Certificate", mandatory: true },
      { name: "Admission Letter / Enrollment Proof", mandatory: true },
      { name: "Bank Account Details", mandatory: true },
      { name: "Income Certificate", mandatory: true },
      {
        name: "No Graduate Certificate",
        mandatory: true,
        note: "Self-declaration or certificate from a Gazetted Officer",
      },
      { name: "Previous Academic Records", mandatory: true },
      { name: "Any other documents required by the authority", mandatory: false },
    ],
    officialPortalUrl: "https://bcmbcmw.tn.gov.in",
    ministry:
      "Backward Classes, Most Backward Classes and Minorities Welfare Department, Government of Tamil Nadu",
    applicationMode: ["offline"],
    tags: [
      "Tamil Nadu",
      "scholarship",
      "free education",
      "fee waiver",
      "professional courses",
      "engineering",
      "medical",
      "agriculture",
      "veterinary",
      "law",
      "BC",
      "MBC",
      "DNC",
      "backward classes",
      "most backward classes",
      "denotified communities",
      "state scholarship",
      "tuition fee",
      "exam fee",
      "education",
    ],
    faqs: [
      {
        q: "Who is eligible for the Free Education Scholarship for Professional Courses?",
        a: "Students who are residents of Tamil Nadu, belong to Backward Classes (BC), Most Backward Classes (MBC), or Denotified Communities (DNC), and are pursuing a professional course (Engineering, Medical, Agriculture, Veterinary, or Law) in a Government, Government-aided, or Self-financing college. The annual family income must not exceed ₹1,00,000 and there should be no graduate in the family.",
      },
      {
        q: "What does the scholarship cover?",
        a: "The scheme covers the full tuition fee, special fees, other non-refundable compulsory fees, and the full examination fee as prescribed by the Government.",
      },
      {
        q: "Can I apply if I study in a self-financing college?",
        a: "Yes. Students pursuing professional courses in Government, Government-aided, and Self-financing colleges are eligible under this scheme.",
      },
      {
        q: "What is the annual family income limit?",
        a: "The annual family income must not exceed ₹1,00,000. A valid income certificate is required as proof.",
      },
      {
        q: "What does 'no graduate in the family' mean?",
        a: "It means no member of the applicant's family should have already completed a degree. Applicants must submit a No Graduate Certificate, either as a self-declaration or a certificate obtained from a Gazetted Officer.",
      },
      {
        q: "What is the application process?",
        a: "The application process is offline. Collect the application form from your educational institution, fill in the application form and attach the required documents, submit the completed application to the institution, and obtain an acknowledgement/receipt after submission.",
      },
    ],
    source: "sample",
  };
