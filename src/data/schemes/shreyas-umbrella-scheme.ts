import type { Scheme } from "@/lib/types";

export const shreyasUmbrellaScheme: Scheme = {
  id: "shreyas-umbrella-scheme",
  slug: "shreyas-umbrella-scheme-mp2qx7rv",
  name: "SHREYAS – Scholarships for Higher Education for Young Achievers Scheme",
  shortName: "SHREYAS",
  summary:
    "An umbrella scheme of the Ministry of Social Justice & Empowerment providing scholarships, fellowships, free coaching, and interest subsidies on education loans for SC, OBC, and EBC students pursuing higher education in India and abroad (2021-22 to 2025-26).",
  description:
    "SHREYAS (Scholarships for Higher Education for Young Achievers Scheme) is an umbrella initiative of the Department of Social Justice & Empowerment, Ministry of Social Justice & Empowerment, Government of India, operational from 2021-22 to 2025-26. It consolidates multiple Central Sector schemes under one framework to promote higher education among socially and economically disadvantaged students belonging to Scheduled Castes (SC), Other Backward Classes (OBC), and Economically Backward Classes (EBC).\n\nFor SC students, the scheme operates four sub-schemes: (i) Top Class Education Scheme – covering tuition fees, living expenses, and academic allowances at notified top institutions; (ii) National Overseas Scholarship – enabling SC students to pursue higher education abroad with tuition fees, living allowance, and travel support; (iii) National Fellowship for SC Students – providing monthly fellowships for M.Phil and Ph.D. research; and (iv) Free Coaching Scheme – offering coaching for competitive examinations through empanelled institutes.\n\nFor OBC and EBC students, the scheme runs two sub-schemes: (i) National Fellowship for OBC Students – awarding 1,000 fellowships annually for M.Phil and Ph.D. programmes to candidates qualifying UGC-NET-JRF or CSIR-NET-JRF; and (ii) Interest Subsidy on Education Loans for Overseas Studies – where the government pays the interest during the moratorium (study) period on education loans taken for pursuing higher education abroad.\n\nAll benefits under SHREYAS are disbursed through Direct Benefit Transfer (DBT) to ensure transparency and eliminate intermediaries. Applications are processed through the National Scholarship Portal (NSP) and relevant ministry portals.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Community",
      value:
        "Must belong to Scheduled Castes (SC), Other Backward Classes (OBC), or Economically Backward Classes (EBC) as per the applicable sub-scheme",
      type: "caste-category",
    },
    {
      label: "Income ceiling",
      value:
        "Family annual income limits vary by sub-scheme — generally below ₹6,00,000 to ₹8,00,000 per annum for scholarship/coaching schemes; no income ceiling for fellowship schemes",
      type: "income",
    },
    {
      label: "Academic qualification",
      value:
        "Varies by sub-scheme — post-graduation for fellowship schemes, first-year undergraduate for Top Class Education, and graduation for coaching schemes",
      type: "education",
    },
    {
      label: "National exam (for fellowships)",
      value:
        "Must have qualified UGC-NET-JRF or CSIR-NET-JRF for fellowship sub-schemes (SC and OBC)",
      type: "education",
    },
    {
      label: "Admission (for overseas schemes)",
      value:
        "Must have secured admission in a recognised foreign university for overseas scholarship and interest subsidy sub-schemes",
      type: "education",
    },
    {
      label: "Exclusion",
      value:
        "Must not be receiving benefits from any other similar central or state scholarship/fellowship for the same purpose simultaneously",
      type: "other",
    },
  ],
  benefits: [
    "Top Class Education (SC): Full tuition fees, living expenses, and academic allowance at notified top institutions",
    "National Overseas Scholarship (SC): Tuition fees, living allowance, travel expenses, and other support for studying abroad",
    "National Fellowship (SC): ₹25,000/month (JRF) and ₹28,000/month (SRF) for M.Phil/Ph.D. research in India",
    "Free Coaching (SC/OBC): Free coaching for competitive examinations through empanelled coaching institutes",
    "National Fellowship (OBC): 1,000 fellowships annually for M.Phil/Ph.D. at UGC-recognised institutions",
    "Interest Subsidy (OBC/EBC): Government bears education loan interest during the study (moratorium) period for overseas education",
    "All benefits disbursed via Direct Benefit Transfer (DBT) for transparency",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Caste Certificate (SC/OBC/EBC)", mandatory: true },
    {
      name: "Income Certificate",
      mandatory: true,
      note: "Issued by a competent state/UT authority; required for scholarship and coaching sub-schemes",
    },
    { name: "Academic mark sheets and degree certificates", mandatory: true },
    {
      name: "UGC-NET / CSIR-NET scorecard",
      mandatory: false,
      note: "Required for fellowship sub-schemes",
    },
    {
      name: "Admission letter from recognised institution",
      mandatory: false,
      note: "Required for overseas scholarship, overseas interest subsidy, and Top Class Education sub-schemes",
    },
    {
      name: "Passport",
      mandatory: false,
      note: "Required for overseas education sub-schemes",
    },
    {
      name: "Education loan sanction letter",
      mandatory: false,
      note: "Required for Interest Subsidy sub-scheme",
    },
    { name: "Bank passbook (Aadhaar-seeded)", mandatory: true },
    { name: "Photograph", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry:
    "Department of Social Justice & Empowerment / Ministry of Social Justice & Empowerment",
  applicationMode: ["online", "offline"],
  tags: [
    "scholarship",
    "fellowship",
    "coaching",
    "interest subsidy",
    "education loan",
    "SHREYAS",
    "SC",
    "OBC",
    "EBC",
    "social welfare",
    "higher education",
    "M.Phil",
    "PhD",
    "UGC-NET",
    "CSIR-NET",
    "NSP",
    "DBT",
    "overseas",
    "all-india",
    "central",
    "umbrella scheme",
  ],
  faqs: [
    {
      q: "What is SHREYAS?",
      a: "SHREYAS (Scholarships for Higher Education for Young Achievers Scheme) is an umbrella scheme of the Ministry of Social Justice & Empowerment that consolidates multiple Central Sector schemes — scholarships, fellowships, free coaching, and interest subsidies — to promote higher education among SC, OBC, and EBC students.",
    },
    {
      q: "Who is eligible for SHREYAS?",
      a: "Students belonging to Scheduled Castes (SC), Other Backward Classes (OBC), or Economically Backward Classes (EBC) are eligible, subject to the specific eligibility conditions of the sub-scheme they apply under (income limits, academic qualifications, category, etc.).",
    },
    {
      q: "What sub-schemes are included under SHREYAS for SC students?",
      a: "For SC students, SHREYAS includes: (i) Top Class Education Scheme, (ii) National Overseas Scholarship, (iii) National Fellowship for SC Students, and (iv) Free Coaching Scheme for SCs and OBCs.",
    },
    {
      q: "What sub-schemes are included under SHREYAS for OBC and EBC students?",
      a: "For OBC and EBC students, SHREYAS includes: (i) National Fellowship for OBC Students (1,000 fellowships annually) and (ii) Interest Subsidy on Education Loans for Overseas Studies.",
    },
    {
      q: "How do I apply under SHREYAS?",
      a: "Applications are processed through the National Scholarship Portal (scholarships.gov.in) for most sub-schemes. Fellowship schemes may require application through UGC or the relevant body. Overseas schemes may have separate application windows on the Ministry portal.",
    },
    {
      q: "Can I receive benefits from more than one SHREYAS sub-scheme?",
      a: "Generally, no. A student cannot simultaneously receive benefits from multiple central or state scholarships/fellowships for the same purpose. Check the specific sub-scheme guidelines for details.",
    },
    {
      q: "What is the duration of SHREYAS?",
      a: "SHREYAS is operational from 2021-22 to 2025-26 as per the current sanction period of the Ministry of Social Justice & Empowerment.",
    },
  ],
  source: "sample",
};
