import type { Scheme } from "@/lib/types";

export const nationalFellowshipForObcStudents: Scheme = {
  id: "national-fellowship-for-obc-students",
  slug: "national-fellowship-for-obc-students",
  name: "National Fellowship for OBC Students",
  shortName: "NF-OBC",
  summary:
    "JRF at ₹31,000/month for 2 years and SRF at ₹35,000/month for 3 years for OBC students pursuing M.Phil. or Ph.D. at UGC-recognised universities, with 1,000 slots annually.",
  description:
    "The National Fellowship for OBC Students (NF-OBC) is a Central Sector Scheme launched by the Ministry of Social Justice and Empowerment and implemented by the University Grants Commission (UGC). It was introduced in 2014-15 to increase opportunities for Other Backward Classes (OBC) students to pursue higher education leading to M.Phil. and Ph.D. degrees. The scheme provides 1,000 Junior Research Fellowships (JRF) per year — 750 for Humanities/Social Sciences (UGC-NET-JRF) and 250 for Sciences (UGC-CSIR NET-JRF). Fellows receive a JRF for the first two years and an SRF for the remaining tenure, along with contingency grants, HRA, and medical benefits. The fellowship is awarded for up to 5 years (2 years JRF + 3 years SRF) subject to satisfactory research progress.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Caste category",
      value: "Must belong to the Other Backward Classes (OBC) category as notified by the Government of India with a valid OBC-NCL certificate",
      type: "caste-category",
    },
    {
      label: "National eligibility test",
      value: "Must have qualified UGC-NET-JRF (for Humanities/Social Sciences) or UGC-CSIR NET-JRF (for Sciences)",
      type: "education",
    },
    {
      label: "Programme",
      value: "Must be enrolled in a regular, full-time M.Phil. or Ph.D. programme at a UGC-recognised university or institution",
      type: "education",
    },
    {
      label: "Other fellowships",
      value: "Must not be receiving any other fellowship, scholarship, or financial benefit from Central or State Government or any other body like UGC",
      type: "other",
    },
    {
      label: "Employment",
      value: "Employees of any university, educational institution, or Central/State/UT Government are not eligible, even if on study leave or Extra-Ordinary Leave (EOL)",
      type: "occupation",
    },
    {
      label: "Tenure validity",
      value: "The JRF award letter is valid for 3 years from the date of issue; fellowship commencement is from the date of declaration of result or date of joining, whichever is later",
      type: "other",
    },
  ],
  benefits: [
    "JRF: ₹31,000 per month for the first 2 years",
    "SRF: ₹35,000 per month for the remaining 3 years (after satisfactory progress)",
    "Contingency Grant (Humanities): ₹10,000/year for initial 2 years; ₹20,500/year for SRF phase",
    "Contingency Grant (Sciences): ₹12,000/year for initial 2 years; ₹25,000/year for SRF phase",
    "House Rent Allowance (HRA) as per UGC norms if hostel accommodation is not provided",
    "Medical facilities as per UGC guidelines",
    "Reader/escort assistance of ₹2,000/month for physically or visually handicapped candidates",
    "1,000 fellowship slots awarded annually (750 Humanities + 250 Sciences)",
    "5% of fellowship slots reserved for persons with disabilities",
  ],
  requiredDocuments: [
    { name: "OBC-NCL Caste Certificate (Central list)", mandatory: true },
    { name: "UGC-NET-JRF or CSIR-NET-JRF qualification proof", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    {
      name: "Admission letter or registration proof for M.Phil./Ph.D.",
      mandatory: true,
    },
    { name: "Post-graduation mark sheet / degree", mandatory: true },
    { name: "Bank passbook (Aadhaar-linked)", mandatory: true },
    {
      name: "Disability certificate (if applicable)",
      mandatory: false,
    },
    {
      name: "Hostel accommodation proof or HRA declaration",
      mandatory: false,
    },
  ],
  officialPortalUrl: "https://www.ugc.gov.in/",
  ministry:
    "Ministry of Social Justice and Empowerment / University Grants Commission (UGC)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "OBC",
    "other backward class",
    "JRF",
    "SRF",
    "PhD",
    "M.Phil",
    "UGC",
    "NET",
    "CSIR",
    "central",
    "research",
    "all India",
    "Ministry of Social Justice",
    "academic",
  ],
  faqs: [
    {
      q: "Who is eligible for the National Fellowship for OBC Students?",
      a: "OBC students who have qualified UGC-NET-JRF (Humanities/Social Sciences) or UGC-CSIR NET-JRF (Sciences) and are enrolled in regular, full-time M.Phil. or Ph.D. programmes at UGC-recognised universities. They must not be receiving any other fellowship or government benefit.",
    },
    {
      q: "How much is the fellowship amount?",
      a: "JRF: ₹31,000/month for the first 2 years. SRF: ₹35,000/month for the remaining 3 years. Additional benefits include contingency grants, HRA, and medical facilities as per UGC norms.",
    },
    {
      q: "How many fellowships are awarded annually?",
      a: "1,000 fellowships per year — 750 for Humanities/Social Sciences subjects (UGC-NET-JRF) and 250 for Science subjects (UGC-CSIR NET-JRF).",
    },
    {
      q: "Can I hold another fellowship simultaneously?",
      a: "No. Students receiving any other fellowship or financial benefit from Central/State Government or UGC are not eligible. This is to prevent duplication and increase coverage.",
    },
    {
      q: "How do I apply?",
      a: "Apply online through the official NF-OBC portal (nfobc.ucanapply.com). Submit your OBC certificate, NET-JRF qualification proof, and admission documents. Your host institution must verify the application before processing.",
    },
    {
      q: "Is the fellowship extendable beyond 2 years?",
      a: "Yes. After the initial 2-year JRF period, the fellowship can be extended as Senior Research Fellowship (SRF) for up to 3 additional years, subject to satisfactory research progress and assessment by UGC.",
    },
    {
      q: "Is there any reservation for persons with disabilities?",
      a: "Yes, at least 5% of the fellowship slots are reserved for candidates with disabilities.",
    },
  ],
  lastVerified: "2026-07-25",
  source: "sample",
};
