import type { Scheme } from "@/lib/types";

export const jkTyreShikshaSarthiScholarship: Scheme = {
  id: "jk-tyre-shiksha-sarthi-scholarship",
  slug: "jk-tyre-shiksha-sarthi-scholarship-75",
  name: "JK Tyre Shiksha Sarthi Scholarship",
  shortName: "JK Tyre Shiksha Sarthi",
  summary:
    "One-time financial grant of up to ₹25,000 for daughters of Heavy Motor Vehicle (HMV) drivers pursuing undergraduate or diploma courses in select states, offered by JK Tyre & Industries Ltd. under its CSR initiative.",
  description:
    "The JK Tyre Shiksha Sarthi Scholarship Program is a Corporate Social Responsibility (CSR) initiative by JK Tyre & Industries Ltd. aimed at empowering daughters of Heavy Motor Vehicle (HMV) drivers by providing financial support for higher education. The scholarship covers tuition fees, examination fees, books, and other academic expenses for female students pursuing general or professional undergraduate courses or diploma programmes. It is available to residents of Rajasthan, Madhya Pradesh, Uttarakhand, Karnataka, and Tamil Nadu. In deserving cases, the scholarship may be renewed for the entire duration of the graduation programme, provided the student maintains the required academic performance. Since its launch, the programme has supported hundreds of young women from the transport community in pursuing their educational aspirations.",
  category: "scholarship",
  level: "central-state",
  states: ["rajasthan", "madhya-pradesh", "karnataka", "tamil-nadu"],
  eligibility: [
    {
      label: "Gender",
      value: "Exclusively for female students",
      type: "gender",
    },
    {
      label: "Parent's occupation",
      value:
        "Father or guardian must be a Heavy Motor Vehicle (HMV) driver — valid Commercial Driving License or Shramik Card required",
      type: "occupation",
    },
    {
      label: "Course enrolled",
      value:
        "Must be enrolled in a general or professional undergraduate course (B.A., B.Sc., B.Com, B.Tech, B.E., B.B.A., B.C.A., etc.) or a diploma programme at a recognised institution",
      type: "education",
    },
    {
      label: "Academic performance",
      value: "Minimum 55% marks in the previous academic year",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "Family annual income from all sources ≤ ₹5,00,000",
      type: "income",
    },
    {
      label: "Residence",
      value:
        "Must be a resident of Rajasthan, Madhya Pradesh, Uttarakhand, Karnataka, or Tamil Nadu",
      type: "residence",
    },
  ],
  benefits: [
    "One-time scholarship of ₹25,000 for professional undergraduate courses (B.Tech, B.E., etc.)",
    "One-time scholarship of ₹15,000 for general undergraduate courses (B.A., B.Sc., B.Com, etc.)",
    "One-time scholarship of ₹15,000 for diploma courses",
    "Amount can be used for tuition fees, examination fees, books, stationery, and other educational expenses",
    "In deserving cases, the scholarship may be renewed for the full graduation duration based on academic performance",
    "Direct transfer to the student's bank account",
  ],
  requiredDocuments: [
    {
      name: "Aadhaar card",
      mandatory: true,
    },
    {
      name: "Father's Commercial Driving License or Shramik Card",
      mandatory: true,
      note: "Proof of parent's occupation as an HMV driver",
    },
    {
      name: "Previous year's marksheet",
      mandatory: true,
    },
    {
      name: "Current year admission proof",
      mandatory: true,
      note: "Admission letter, institution ID card, or fee receipt",
    },
    {
      name: "Income certificate",
      mandatory: true,
      note: "Issued by competent authority — ITR, salary slips, or letter from Gram Panchayat/Tehsildar/SDM",
    },
    {
      name: "Bonafide letter from college",
      mandatory: false,
      note: "Stating total fees/expenses incurred in the academic year",
    },
    {
      name: "Bank passbook",
      mandatory: true,
    },
    {
      name: "Passport-size photograph",
      mandatory: true,
    },
  ],
  officialPortalUrl: "https://www.buddy4study.com/page/jk-tyre-shiksha-sarthi-scholarship-program",
  ministry: "JK Tyre & Industries Ltd. (CSR Initiative)",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "CSR",
    "JK Tyre",
    "girl students",
    "women",
    "HMV drivers",
    "transport community",
    "undergraduate",
    "diploma",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttarakhand",
    "Karnataka",
    "Tamil Nadu",
    "income-based",
    "merit-cum-means",
    "private scholarship",
  ],
  faqs: [
    {
      q: "What is the JK Tyre Shiksha Sarthi Scholarship?",
      a: "It is a CSR initiative by JK Tyre & Industries Ltd. that provides financial assistance to daughters of Heavy Motor Vehicle (HMV) drivers pursuing undergraduate or diploma courses in select Indian states.",
    },
    {
      q: "Who is eligible for this scholarship?",
      a: "Female students who are daughters of HMV drivers, enrolled in undergraduate or diploma courses, with at least 55% marks in the previous academic year, annual family income ≤ ₹5 lakh, and residing in Rajasthan, Madhya Pradesh, Uttarakhand, Karnataka, or Tamil Nadu.",
    },
    {
      q: "How much scholarship amount is provided?",
      a: "₹25,000 for professional undergraduate courses (B.Tech, B.E.), ₹15,000 for general undergraduate courses (B.A., B.Sc., B.Com), and ₹15,000 for diploma courses.",
    },
    {
      q: "Can the scholarship be renewed?",
      a: "In deserving cases, the scholarship may be renewed for the entire duration of the graduation programme, provided the student maintains the required academic performance.",
    },
    {
      q: "How do I apply for this scholarship?",
      a: "Visit the Buddy4Study portal at buddy4study.com, register or log in, search for 'JK Tyre Shiksha Sarthi Scholarship', fill in the application form, upload the required documents, and submit before the deadline.",
    },
    {
      q: "Is there any application fee?",
      a: "No. The application process is completely free of cost.",
    },
    {
      q: "Can students from all states apply?",
      a: "No. Only students who are residents of Rajasthan, Madhya Pradesh, Uttarakhand, Karnataka, or Tamil Nadu are eligible to apply.",
    },
  ],
  source: "sample",
};
