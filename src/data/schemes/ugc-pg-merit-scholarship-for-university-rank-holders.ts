import type { Scheme } from "@/lib/types";

export const ugcPgMeritScholarshipForUniversityRankHolders: Scheme = {
  id: "ugc-pg-merit-scholarship-for-university-rank-holders",
  slug: "ugc-pg-merit-scholarship-for-university-rank-holders-mrcau3rc",
  name: "UGC PG Merit Scholarship for University Rank Holders",
  shortName: "UGC PG Merit Scholarship",
  summary:
    "\u20B937,200 per annum scholarship for 1st or 2nd rank holders at university level pursuing full-time PG programmes in basic streams, implemented by UGC.",
  description:
    "A prestigious national initiative by the University Grants Commission (UGC) designed to attract highly talented undergraduate toppers toward higher education. The scholarship supports students who secured the 1st or 2nd rank at the university level during their undergraduate degree and are now pursuing a regular, full-time Master's programme in foundational, non-professional disciplines. The scheme covers basic streams such as B.A., B.Sc., B.Com in Life Sciences, Physical Sciences, Chemical Sciences, Earth Sciences, Mathematical Sciences, Social Sciences, Commerce, and Languages. It aims to build research and academic capacity across India by encouraging meritorious students to continue their education at the postgraduate level.",
  category: "scholarship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "University rank",
      value: "Must be the 1st or 2nd rank holder at the university level during graduation",
      type: "education",
    },
    {
      label: "Academic stream",
      value: "Graduation must be in basic streams: B.A., B.Sc., B.Com in Life/Physical/Chemical/Earth/Mathematical/Social Sciences, Commerce, or Languages",
      type: "education",
    },
    {
      label: "Minimum marks",
      value: "At least 60% aggregate marks in the undergraduate programme",
      type: "education",
    },
    {
      label: "PG enrolment",
      value: "Must be enrolled in the 1st year of a regular, full-time Master's degree at a recognised Indian university or PG college",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Must not exceed 30 years of age at the time of admission to the PG programme",
      type: "age",
    },
    {
      label: "Minimum UG cohort",
      value: "Minimum 100 students appeared for final UG exam (affiliating universities) or 25 students (deemed universities / autonomous colleges)",
      type: "other",
    },
    {
      label: "Excluded courses",
      value: "Professional courses, distance learning, and second PG degrees are strictly not eligible",
      type: "other",
    },
  ],
  benefits: [
    "\u20B937,200 per annum as scholarship amount",
    "Tenure of 2 years (full duration of the postgraduate course)",
    "Disbursed through the National Scholarship Portal (NSP)",
  ],
  requiredDocuments: [
    { name: "Official undergraduate degree mark sheet and provisional certificate", mandatory: true },
    { name: "Rank certificate issued by university registrar or exam controller verifying 1st or 2nd position", mandatory: true },
    { name: "Admission slip / fee receipt / bonafide certificate from current PG institution", mandatory: true },
    { name: "Aadhaar card (linked with bank account)", mandatory: true },
    { name: "Bank passbook (first page showing account details and IFSC code)", mandatory: true },
    { name: "Recent passport-size photograph", mandatory: true },
  ],
  officialPortalUrl: "https://www.ugc.gov.in/Scholarships/stu_Scholarship1",
  ministry: "University Grants Commission (UGC), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "UGC",
    "PG",
    "merit",
    "rank holders",
    "postgraduate",
    "university topper",
    "central",
    "all-india",
    "NSP",
    "national scholarship portal",
    "basic sciences",
    "commerce",
    "languages",
    "arts",
  ],
  faqs: [
    {
      q: "Who is eligible for the UGC PG Merit Scholarship?",
      a: "Students who secured the 1st or 2nd rank at the university level during their undergraduate degree in basic streams (B.A., B.Sc., B.Com) with minimum 60% marks, and are enrolled in the 1st year of a regular full-time Master's programme at a recognised Indian university. Age limit is 30 years.",
    },
    {
      q: "What is the scholarship amount?",
      a: "Selected scholars receive \u20B937,200 per annum for the full duration of the postgraduate course (2 years).",
    },
    {
      q: "Which courses are eligible under this scheme?",
      a: "Only basic streams such as Life Sciences, Physical Sciences, Chemical Sciences, Earth Sciences, Mathematical Sciences, Social Sciences, Commerce, and Languages are eligible. Professional courses, distance learning, and second PG degrees are not covered.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Applications are submitted online through the National Scholarship Portal (NSP) at scholarships.gov.in. Complete the One-Time Registration (OTR), fill the application form under UGC/AICTE Schemes, upload the required documents, and submit.",
    },
    {
      q: "What documents are required for the rank certificate?",
      a: "The rank certificate must be issued by the university registrar or controller of examinations, officially verifying the 1st or 2nd position at the university level during graduation.",
    },
    {
      q: "Is there a minimum number of students required in the UG class?",
      a: "Yes, for affiliating universities at least 100 students must have appeared for the final UG examination. For deemed universities or autonomous colleges, the minimum is 25 students.",
    },
  ],
  source: "sample",
};
