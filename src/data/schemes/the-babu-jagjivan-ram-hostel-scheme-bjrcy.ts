import type { Scheme } from "@/lib/types";

export const theBabuJagjivanRamHostelSchemeBjrcy: Scheme = {
  id: "the-babu-jagjivan-ram-hostel-scheme-bjrcy",
  slug: "the-babu-jagjivan-ram-hostel-scheme-bjrcy-mrf9jm38",
  name: "Babu Jagjivan Ram Hostel Scheme (BJRCY)",
  shortName: "BJRCY Hostel",
  summary:
    "A centrally sponsored scheme providing 100% central funding for constructing and expanding hostel facilities for Scheduled Caste (SC) students, with construction grants up to \u20B93.50 lakh per inmate and maintenance funds between \u20B95\u201315 lakh every five years.",
  description:
    "The Babu Jagjivan Ram Hostel Scheme (BJRCY) is a centrally sponsored scheme under the PM-AJAY framework aimed at constructing and expanding hostel facilities for Scheduled Caste (SC) students. Its primary goal is to promote educational opportunities and reduce dropout rates by providing safe, affordable accommodation to students pursuing higher and post-matric studies. The scheme provides 100% central funding for hostel construction, capped at \u20B93.50 lakh per inmate in Himalayan/North-East states and \u20B93.00 lakh elsewhere, along with a one-time furnishing grant of \u20B92,500 per student and maintenance funds between \u20B95 lakh and \u20B915 lakh every five years.",
  category: "social-welfare",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Category",
      value: "Must belong to the Scheduled Caste (SC) community",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Total annual family income must be below \u20B98,00,000",
      type: "income",
    },
    {
      label: "Education level",
      value:
        "Must be enrolled as a regular student from Class 6 up to PhD/Professional levels",
      type: "education",
    },
    {
      label: "Institution",
      value:
        "Must be studying in a recognised government institution located outside their native home district",
      type: "education",
    },
  ],
  benefits: [
    "100% central funding for hostel construction",
    "Construction grant capped at \u20B93.50 lakh per inmate in Himalayan/North-East states",
    "Construction grant capped at \u20B93.00 lakh per inmate in other states",
    "One-time furnishing grant of \u20B92,500 per student",
    "Maintenance funds between \u20B95 lakh and \u20B915 lakh every five years",
    "Safe and affordable accommodation to reduce dropout rates",
  ],
  requiredDocuments: [
    { name: "SC caste certificate", mandatory: true },
    { name: "Income certificate (annual family income below \u20B98 lakh)", mandatory: true },
    { name: "College bonafide / recommendation letter", mandatory: true },
    { name: "Admission proof", mandatory: true },
    { name: "Aadhaar card", mandatory: true },
    {
      name: "Cost estimates vetted by PWD/CPWD/state construction agency",
      mandatory: false,
      note: "For institutional applicants",
    },
    {
      name: "Student roster",
      mandatory: false,
      note: "For institutional applicants",
    },
  ],
  officialPortalUrl: "https://socialjustice.gov.in/",
  ministry:
    "Ministry of Social Justice and Empowerment",
  applicationMode: ["offline"],
  tags: [
    "hostel",
    "SC",
    "Scheduled Caste",
    "PM-AJAY",
    "BJRCY",
    "construction",
    "accommodation",
    "social welfare",
    "central",
    "all-india",
    "education",
  ],
  faqs: [
    {
      q: "Who is eligible for the Babu Jagjivan Ram Hostel Scheme?",
      a: "Scheduled Caste (SC) students with annual family income below \u20B98 lakh, enrolled as regular students from Class 6 to PhD/Professional levels in a recognised government institution outside their home district.",
    },
    {
      q: "What funding does the scheme provide?",
      a: "The scheme provides 100% central funding for hostel construction (up to \u20B93.50 lakh per inmate in Himalayan/North-East states, \u20B93.00 lakh elsewhere), a one-time furnishing grant of \u20B92,500 per student, and maintenance funds between \u20B95\u201315 lakh every five years.",
    },
    {
      q: "How do I apply for a hostel seat?",
      a: "Secure admission to a recognised post-matric institution outside your home district, gather required documents (Caste Certificate, Income Certificate, bonafide letter), and submit your application to the local Assistant Commissioner of Social Welfare or District Social Welfare Office.",
    },
    {
      q: "Is this scheme only for SC students?",
      a: "Yes. The scheme is specifically designed for Scheduled Caste (SC) students to promote educational equity and reduce dropout rates.",
    },
  ],
  source: "sample",
};
