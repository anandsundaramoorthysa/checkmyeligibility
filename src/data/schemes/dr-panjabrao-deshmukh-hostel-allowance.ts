import type { Scheme } from "@/lib/types";

export const drPanjabraoDeshmukhHostelAllowance: Scheme = {
  id: "dr-panjabrao-deshmukh-hostel-maintenance-allowance-maharashtra",
  slug: "dr-panjabrao-deshmukh-hostel-maintenance-allowance-maharashtra",
  name: "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance",
  shortName: "Dr. Punjabrao Deshmukh Hostel Allowance",
  summary:
    "Hostel maintenance allowance up to ₹30,000 per year for students from economically weaker sections pursuing medical degree courses in Maharashtra.",
  description:
    "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance (Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna) is a Government of Maharashtra scheme implemented through the MahaDBT portal. It provides financial assistance for hostel maintenance to students pursuing specified medical degree courses (MBBS, BDS, BAMS, BHMS, B.Sc. Nursing, BPO, BASLP, BPTH, BOTH, BUMS, BP & O) in government-aided, corporation, or private unaided colleges. The scheme targets children of registered labourers and Alpabhudharak shetkari (marginal landholders) as well as students from families with annual income below ₹8,00,000, admitted under General or SEBC categories.",
  category: "education",
  level: "state",
  states: ["maharashtra"],
  eligibility: [
    {
      label: "Domicile",
      value: "Must be a permanent resident of Maharashtra state",
      type: "residence",
    },
    {
      label: "Parent category",
      value:
        "Child of a registered labourer and/or Alpabhudharak shetkari (marginal landholders)",
      type: "occupation",
    },
    {
      label: "Course & institution",
      value:
        "Pursuing MBBS, BDS, BAMS, BHMS, B.Sc. Nursing, BPO, BASLP, BPTH, BOTH, BUMS, BP & O in a government-aided, corporation, or private unaided college in Maharashtra",
      type: "education",
    },
    {
      label: "Admission category",
      value:
        "Admitted under General (Open/EBC/EWS) or SEBC category — management/institute-level quota not eligible",
      type: "caste-category",
    },
    {
      label: "Annual family income",
      value:
        "Family annual income must be below ₹8,00,000 per annum — valid income certificate required",
      type: "income",
    },
    {
      label: "Family beneficiaries",
      value:
        "Maximum two beneficiaries from a single family are allowed to avail this scheme",
      type: "other",
    },
  ],
  benefits: [
    "Hostel maintenance allowance for students whose parents are registered labourers / Alpabhudharak shetkari: ₹30,000/year for Mumbai, Pune, Nagpur, Aurangabad; ₹20,000/year for other locations in Maharashtra (for 10 months in an academic year)",
    "Hostel maintenance allowance for students with annual family income below ₹1,00,000: ₹3,000/year for Mumbai, Pune, Nagpur, Aurangabad; ₹2,000/year for other locations in Maharashtra (for 10 months in an academic year)",
    "Supports students pursuing medical, dental, AYUSH, nursing, and allied health degree courses",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "SSC (Class 10) marksheet", mandatory: true },
    { name: "HSC (Class 12) marksheet", mandatory: true },
    { name: "Annual income certificate of parents", mandatory: true },
    { name: "Previous year's marksheet", mandatory: false },
    { name: "Hostel affidavit", mandatory: true },
    {
      name: "Registered Labourer / Alpabhudharak Shetkari proof letter (approved by Tahsildar)",
      mandatory: true,
    },
    { name: "Domicile certificate of Maharashtra", mandatory: true },
    { name: "Nationalized bank passbook", mandatory: true },
    { name: "Hostel fee receipt", mandatory: true },
    { name: "Father's PAN card", mandatory: true },
    {
      name: "Student's PAN card",
      mandatory: false,
      note: "Optional",
    },
    {
      name: "Mother's PAN card",
      mandatory: false,
      note: "Optional",
    },
  ],
  officialPortalUrl:
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A154AF155ACB2A8B2FDDAB7A49A24E2B13EFE22C60B340852",
  ministry: "Directorate of Medical Education Research, Government of Maharashtra",
  applicationMode: ["online"],
  tags: [
    "hostel",
    "maintenance allowance",
    "medical",
    "MBBS",
    "BDS",
    "nursing",
    "AYUSH",
    "Maharashtra",
    "MahaDBT",
    "registered labourer",
    "alpabhudharak shetkari",
    "marginal landholder",
    "SEBC",
    "EBC",
    "education",
  ],
  faqs: [
    {
      q: "Who is offering this scheme?",
      a: "The Directorate of Medical Education Research, Government of Maharashtra, offers this scheme through the MahaDBT portal.",
    },
    {
      q: "Who is eligible for the scheme?",
      a: "Wards of registered labourers and/or Alpabhudharak shetkari (marginal landholders) pursuing specified medical degree courses (MBBS, BDS, BAMS, BHMS, B.Sc. Nursing, BPO, BASLP, etc.) in government-aided, corporation, or private unaided colleges in Maharashtra, with annual family income below ₹8 lakh.",
    },
    {
      q: "How much hostel maintenance allowance is provided?",
      a: "For registered labourers/Alpabhudharak shetkari: ₹30,000/year in Mumbai, Pune, Nagpur, Aurangabad; ₹20,000/year in other locations. For students with annual family income below ₹1 lakh: ₹3,000/year in major cities; ₹2,000/year in other locations. All amounts are for 10 months in an academic year.",
    },
    {
      q: "How to apply for the scheme?",
      a: "Register and login on the MahaDBT portal (mahadbt.maharashtra.gov.in), select the department and scheme, fill in personal and academic details, upload required documents, and submit the application online.",
    },
    {
      q: "Can students admitted under management quota apply?",
      a: "No. Students who have taken admission under management or institute-level quota are not eligible for this scheme. Only students admitted under General (Open/EBC/EWS) or SEBC category are eligible.",
    },
  ],
  source: "sample",
};