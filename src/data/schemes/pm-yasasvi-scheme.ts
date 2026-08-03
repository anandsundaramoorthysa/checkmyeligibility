import type { Scheme } from "@/lib/types";

export const pmYasasviScheme: Scheme = {
  id: "pm-yasasvi-scheme",
  slug: "pm-yasasvi-scheme",
  name: "PM Young Achievers Scholarship Award Scheme for Vibrant India",
  shortName: "PM-YASASVI",
  summary:
    "An umbrella scholarship scheme for OBC, EBC, and DNT students providing financial support from pre-matric to top-class college education, with family income up to \u20B92.5 lakh per annum.",
  description:
    "The PM Young Achievers Scholarship Award Scheme for Vibrant India (PM-YASASVI) is a flagship umbrella scheme of the Ministry of Social Justice and Empowerment, Government of India. It consolidates earlier initiatives including the Dr. Ambedkar Post-Matric Scholarship for EBCs and the Dr. Ambedkar Pre-Matric and Post-Matric Scholarships for DNTs. The scheme is designed to provide comprehensive financial assistance to students from Other Backward Classes (OBC), Economically Backward Classes (EBC), and Denotified, Nomadic and Semi-Nomadic Tribes (DNT) at various levels of education \u2014 from Class 9 through postgraduate and professional courses. It comprises five sub-schemes: Pre-Matric Scholarship, Post-Matric Scholarship, Top Class School Education, Top Class College Education, and Construction of Hostels for OBC Boys and Girls. Scholarships are awarded based on merit and family income, with amounts ranging from \u20B94,000 per annum for pre-matric students to full financial support including tuition fees, living expenses, and academic allowances for top-class education. Applications are submitted through the National Scholarship Portal (scholarships.gov.in) and disbursements are made directly to beneficiaries\u2019 accounts via DBT.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste/category",
      value: "Must belong to OBC, EBC, or DNT (Denotified, Nomadic, Semi-Nomadic Tribes) category",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Must not exceed \u20B92,50,000 per annum from all sources",
      type: "income",
    },
    {
      label: "Citizenship",
      value: "Must be a citizen of India",
      type: "residence",
    },
    {
      label: "Academic performance",
      value: "Must have secured 60% or above in Class 8 or Class 10 (for Top Class School/College sub-schemes). For Pre/Post-Matric: minimum marks as prescribed by state government",
      type: "education",
    },
    {
      label: "Educational stage",
      value: "Varies by sub-scheme: Class 9\u201310 (Pre-Matric), Class 11 onwards (Post-Matric), Top Class Schools (Class 9\u201312), Top Class Colleges (undergraduate and postgraduate)",
      type: "education",
    },
  ],
  benefits: [
    "Pre-Matric Scholarship: Consolidated academic allowance of \u20B94,000 per annum for Class 9 and 10 students in government schools",
    "Post-Matric Scholarship: Academic allowance from \u20B95,000 to \u20B920,000 per annum plus tuition fee reimbursement (up to \u20B910,000) based on course category",
    "Top Class School Education: Up to \u20B975,000 per annum for Class 9\u201310 and up to \u20B91,25,000 per annum for Class 11\u201312 covering tuition fees, hostel fees, and other charges",
    "Top Class College Education: Full financial support including tuition fees, living expenses, books, and stationery for meritorious students at top institutions",
    "Direct Benefit Transfer (DBT) \u2014 scholarship amount credited directly to the beneficiary\u2019s bank account",
    "At least 30% scholarships reserved for girls across all sub-schemes",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Caste certificate (OBC/EBC/DNT)", mandatory: true },
    { name: "Income certificate (below \u20B92.5 lakh)", mandatory: true },
    { name: "Previous class mark sheet", mandatory: true },
    { name: "Recent passport-size photograph", mandatory: true },
    { name: "Bank account details (linked with Aadhaar)", mandatory: true },
    { name: "Admission/bonafide certificate from institution", mandatory: true },
    { name: "Domicile certificate", mandatory: false },
    { name: "Disability certificate (if applicable)", mandatory: false, note: "Required for PwD candidates to claim additional allowance" },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Social Justice and Empowerment",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "PM-YASASVI",
    "OBC",
    "EBC",
    "DNT",
    "pre-matric",
    "post-matric",
    "top-class-school",
    "top-class-college",
    "social-justice",
    "central",
    "all-india",
    "merit",
    "income-below-2.5-lakh",
  ],
  faqs: [
    {
      q: "Who is eligible for the PM-YASASVI scholarship?",
      a: "Students belonging to OBC, EBC, or DNT categories with a family income of up to \u20B92.5 lakh per annum are eligible. For Top Class sub-schemes, students must also have secured 60% or above in the previous qualifying examination.",
    },
    {
      q: "What is the scholarship amount under PM-YASASVI?",
      a: "The amount varies by sub-scheme: Pre-Matric students receive \u20B94,000 per annum. Post-Matric students receive \u20B95,000 to \u20B920,000 per annum plus tuition fees. Top Class School students get up to \u20B975,000 (Class 9\u201310) or \u20B91,25,000 (Class 11\u201312) per annum. Top Class College students receive full financial support.",
    },
    {
      q: "How do I apply for the PM-YASASVI scholarship?",
      a: "Applications are submitted online through the National Scholarship Portal (scholarships.gov.in). Register on the portal, fill in the application form, upload the required documents, and submit before the deadline.",
    },
    {
      q: "Is there an entrance exam for PM-YASASVI?",
      a: "No. The YASASVI Entrance Test (YET) has been discontinued. Selections are now made on merit based on marks obtained in the previous final examination.",
    },
    {
      q: "Which sub-schemes are covered under PM-YASASVI?",
      a: "Five sub-schemes: Pre-Matric Scholarship (Class 9\u201310), Post-Matric Scholarship (Class 11 onwards), Top Class School Education (meritorious students in top schools), Top Class College Education (meritorious students in top colleges), and Construction of Hostels for OBC Boys and Girls.",
    },
    {
      q: "Is there a renewal process each year?",
      a: "Yes. Students must renew their scholarship each academic year through the NSP portal by maintaining satisfactory academic performance and submitting updated attendance and progress reports verified by the institution.",
    },
  ],
  source: "sample",
};
