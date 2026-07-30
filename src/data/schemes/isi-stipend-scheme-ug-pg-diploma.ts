import type { Scheme } from "@/lib/types";

export const isiStipendSchemeUgPgDiploma: Scheme = {
  id: "isi-stipend-scheme-ug-pg-diploma",
  slug: "indian-statistical-institute-stipend-scheme-ug-pg-diploma",
  name: "Stipend Scheme for UG, PG and Diploma Students – Indian Statistical Institute",
  shortName: "ISI Stipend Scheme",
  summary:
    "Monthly stipend of \u20B93,000 to \u20B912,400 and annual contingency grants for students enrolled in B.Stat, B.Math, M.Stat, M.Math, M.Tech, and PG Diploma programmes at the Indian Statistical Institute.",
  description:
    "The Indian Statistical Institute (ISI), an Institute of National Importance established in 1931 and recognised by the UGC, provides generous financial assistance to all non-sponsored students enrolled in its undergraduate, postgraduate, and diploma programmes. The Stipend Scheme covers B.Stat (Hons.), B.Math (Hons.), M.Stat, M.Math, MS (QE), MS (LIS), MS (QMS), M.Tech (CS/CrS/QROR), and PG Diploma in Statistical Methods and Analytics. Students receive a monthly stipend ranging from \u20B93,000 for UG programmes to \u20B912,400 for M.Tech programmes, along with an annual contingency grant for academic expenses. There are no tuition fees for non-sponsored students. PG Diploma stipend is primarily available for students domiciled in North-Eastern States. The stipend continuation is subject to maintaining minimum 75% attendance, satisfactory academic performance, and good conduct. The scheme is administered through the National Scholarship Portal (NSP).",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Admission",
      value:
        "Must be admitted to an official UG, PG, or Diploma programme at the Indian Statistical Institute (ISI Kolkata)",
      type: "education",
    },
    {
      label: "Student status",
      value: "Must be a non-sponsored student",
      type: "other",
    },
    {
      label: "Academic performance",
      value:
        "Must maintain satisfactory performance in coursework and examinations for stipend renewal",
      type: "education",
    },
    {
      label: "Attendance",
      value: "Minimum 75% attendance each semester",
      type: "other",
    },
    {
      label: "PG Diploma stipend",
      value:
        "PG Diploma stipend primarily available for students domiciled in North-Eastern States of India",
      type: "residence",
    },
  ],
  benefits: [
    "\u20B95,000 per month stipend for B.Stat (Hons.) / B.Math (Hons.) students",
    "\u20B95,000 per year contingency grant for UG students",
    "\u20B98,000 per month stipend for M.Stat / M.Math / MS (QE, LIS, QMS) students",
    "\u20B98,000 per year contingency grant for PG students",
    "\u20B912,400 per month stipend for M.Tech (CS / CrS / QROR) students",
    "\u20B98,000 per year contingency grant for M.Tech students",
    "\u20B92,000 per month stipend for PG Diploma (NE domiciled) students",
    "\u20B92,000 per year contingency grant for PG Diploma students",
    "No tuition fees for non-sponsored students",
  ],
  requiredDocuments: [
    { name: "ISI Admission Offer Letter", mandatory: true },
    { name: "Aadhaar Card", mandatory: true },
    { name: "Bank Passbook (student's own account)", mandatory: true },
    { name: "Academic Mark Sheets / Transcripts", mandatory: true },
    { name: "Photograph", mandatory: true },
    {
      name: "Domicile Certificate (North-Eastern States)",
      mandatory: false,
      note: "Required for PG Diploma stipend",
    },
    {
      name: "SC/ST/OBC/EWS Certificate",
      mandatory: false,
      note: "Required if applicable for fee concessions",
    },
  ],
  officialPortalUrl: "https://www.isical.ac.in/",
  ministry:
    "Ministry of Statistics and Programme Implementation, Government of India",
  applicationMode: ["online"],
  tags: [
    "stipend",
    "fellowship",
    "ISI",
    "Indian Statistical Institute",
    "statistics",
    "mathematics",
    "B.Stat",
    "B.Math",
    "M.Stat",
    "M.Math",
    "M.Tech",
    "PG Diploma",
    "central",
    "NSP",
    "Kolkata",
    "research",
    "data science",
  ],
  faqs: [
    {
      q: "What is the ISI Stipend Scheme?",
      a: "A financial assistance programme by the Indian Statistical Institute that provides monthly stipends and annual contingency grants to non-sponsored students enrolled in UG, PG, M.Tech, and PG Diploma programmes at ISI.",
    },
    {
      q: "How much stipend is given?",
      a: "\u20B95,000/month for B.Stat/B.Math (Hons.), \u20B98,000/month for M.Stat/M.Math/MS programmes, \u20B912,400/month for M.Tech programmes, and \u20B92,000/month for PG Diploma (NE domiciled) students.",
    },
    {
      q: "Is there any tuition fee?",
      a: "No. All non-sponsored students at ISI are exempt from tuition fees. They receive stipends and contingency grants in addition.",
    },
    {
      q: "Can PG Diploma students from outside the North-East apply for the stipend?",
      a: "The PG Diploma stipend is primarily available for students domiciled in the North-Eastern States of India.",
    },
    {
      q: "What conditions must be met to continue receiving the stipend?",
      a: "Students must maintain minimum 75% attendance each semester, achieve satisfactory academic performance, and have no disciplinary issues.",
    },
    {
      q: "How do I apply for the ISI Stipend?",
      a: "On admission to ISI, eligible non-sponsored students automatically receive the stipend as per the institute's general brochure. Applications are also processed through the National Scholarship Portal (NSP).",
    },
  ],
  source: "sample",
};
