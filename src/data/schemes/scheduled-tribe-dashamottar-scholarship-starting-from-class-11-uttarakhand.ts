import type { Scheme } from "@/lib/types";

export const scheduledTribeDashamottarScholarshipStartingFromClass11Uttarakhand: Scheme = {
  id: "scheduled-tribe-dashamottar-scholarship-starting-from-class-11-uttarakhand",
  slug: "scheduled-tribe-dashamottar-scholarship-starting-from-class-11-uttarakhand",
  name: "Scheduled Tribe Dashamottar Scholarship (Starting from Class 11) - Uttarakhand",
  shortName: "ST Dashamottar (UK)",
  summary:
    "Uttarakhand state scholarship covering tuition fees plus a monthly maintenance allowance of ₹230–₹1,200 for Scheduled Tribe students from Class 11 onward.",
  description:
    "Implemented by the Department of Social Welfare, Government of Uttarakhand, this scheme supports Scheduled Tribe (ST) students from Class 11 onward with financial assistance for tuition fees and academic expenses. It provides a fee waiver along with a monthly maintenance allowance that varies by course group and hosteller/day-scholar status.",
  category: "scholarship",
  level: "state",
  states: ["uttarakhand"],
  eligibility: [
    {
      label: "Domicile",
      value: "Permanent resident of Uttarakhand",
      type: "residence",
    },
    {
      label: "Caste category",
      value: "Must belong to the Scheduled Tribe (ST) category",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value: "Total annual income of parents/guardians from all sources must not exceed ₹2,50,000",
      type: "income",
    },
    {
      label: "Course",
      value: "Enrolled in a recognised post-matric course (Class 11 onward) at a recognised institution",
      type: "education",
    },
  ],
  benefits: [
    "Fee waiver on tuition and academic charges",
    "Monthly maintenance allowance of ₹230–₹1,200, depending on course group and hosteller/day-scholar status",
  ],
  requiredDocuments: [
    { name: "Aadhaar card", mandatory: true },
    { name: "Recent photograph", mandatory: true },
    { name: "Caste certificate", mandatory: true },
    { name: "Residence certificate", mandatory: true },
    { name: "Bank passbook", mandatory: true },
    { name: "Academic qualification certificate", mandatory: true },
    { name: "Income certificate", mandatory: true },
  ],
  officialPortalUrl: "https://scholarships.gov.in",
  ministry: "Department of Social Welfare, Government of Uttarakhand",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "ST",
    "scheduled tribe",
    "uttarakhand",
    "state scheme",
    "fee waiver",
    "higher secondary",
    "undergraduate",
    "postgraduate",
    "phd",
    "NSP",
    "PFMS",
  ],
  faqs: [
    {
      q: "Who is eligible for this scholarship?",
      a: "Permanent residents of Uttarakhand belonging to the Scheduled Tribe category, enrolled in a recognised post-matric course from Class 11 onward, with parental/guardian income not exceeding ₹2,50,000.",
    },
    {
      q: "What financial support does it provide?",
      a: "A waiver of tuition and academic fees, plus a monthly maintenance allowance of ₹230 to ₹1,200 depending on the course group and whether the student is a hosteller or day scholar.",
    },
    {
      q: "How do I apply?",
      a: "Apply through the National Scholarship Portal (scholarships.gov.in). The application passes through institutional verification, physical verification by the Social Welfare Department, and online verification before disbursement via PFMS.",
    },
  ],
  source: "sample",
};
