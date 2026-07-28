import type { Scheme } from "@/lib/types";

export const wiseKiranScheme: Scheme = {
  id: "349",
  slug: "wise-kiran-scheme-mr9gnqy8",
  name: "Women in Science and Engineering-KIRAN (WISE-KIRAN)",
  shortName: "WISE-KIRAN",
  summary:
    "An umbrella scheme of DST providing research fellowships, post-doctoral support, and career re-entry opportunities for women in STEM across multiple programmes including WISE-PhD, WISE-PDF, WIDUSHI, and WISE-SCOPE.",
  description:
    "Women in Science and Engineering-KIRAN (WISE-KIRAN) is a flagship umbrella scheme of the Department of Science and Technology (DST), Government of India, designed to address the various challenges faced by women in their scientific journey and enhance their participation in Science and Technology. The scheme adopts a holistic approach with multiple dedicated programmes catering to women of all age groups and career stages. Key programmes include: WISE Fellowship for PhD (WISE-PhD) offering \u20B937,000/month fellowship for women aged 27\u201345 to pursue doctoral research in basic and applied sciences; WISE Post-Doctoral Fellowship (WISE-PDF) providing \u20B967,000/month for women aged 27\u201360 to continue research after PhD; WIDUSHI for senior women scientists up to age 62; WISE-SCOPE for women aged 27\u201360 to re-enter the scientific workforce through societal challenge-driven research; WISE-IPR internship for IPR training; and WINGS for international research exposure. The scheme also includes institutional-level programmes like CURIE for developing research infrastructure in women\u2019s institutions, Vigyan Jyoti for encouraging girls in STEM at the school level, and GATI for gender equity in STEMM institutions.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Gender",
      value: "Must be a woman scientist or technologist (all programmes under WISE-KIRAN are exclusively for women)",
      type: "gender",
    },
    {
      label: "Age",
      value: "Varies by programme: 27\u201345 years (WISE-PhD), 27\u201360 years (WISE-PDF, WISE-SCOPE), up to 62 years (WIDUSHI). Upper age relaxation of 3 years for SC/ST/PH candidates",
      type: "age",
    },
    {
      label: "Educational qualification",
      value: "Post-graduate degree in Basic/Applied Sciences or equivalent (M.Phil, M.Tech, M.Pharm, B.Tech) for WISE-PhD. PhD for WISE-PDF",
      type: "education",
    },
    {
      label: "Employment status",
      value: "Must be unemployed or in temporary research/academic positions. Women in regular/ permanent employment are not eligible",
      type: "other",
    },
    {
      label: "Citizenship",
      value: "Must be an Indian citizen",
      type: "residence",
    },
    {
      label: "Career break",
      value: "Not mandatory but women with a career break are encouraged to apply (WISE-PDF). Some programmes are specifically designed for those re-entering after a break",
      type: "other",
    },
  ],
  benefits: [
    "WISE-PhD: Fellowship of \u20B937,000/month + HRA + Research Grant of \u20B91.0 lakh/year + Institutional overhead of \u20B90.5 lakh/year (up to 5 years)",
    "WISE-PDF: Fellowship of \u20B967,000/month + HRA + Research Grant of \u20B92.0 lakh/year + small equipment grant up to \u20B93.0 lakh + Institutional overhead of \u20B91.0 lakh/year (up to 3 years)",
    "WIDUSHI: Research support for senior women scientists in interdisciplinary areas (up to 62 years of age)",
    "WISE-SCOPE: Opportunity to re-enter mainstream scientific workforce through translational research addressing societal challenges in 5 thematic areas",
    "WISE-IPR: One-year internship training in Intellectual Property Rights for women with PG/PhD in Basic and Applied Sciences (age 25\u201345)",
    "WINGS: International research exposure through fellowships and scientific visits to overseas labs and institutions",
    "CURIE: State-of-the-art research infrastructure development in women\u2019s universities and PG colleges",
    "Vigyan Jyoti: School-level STEM encouragement for meritorious girls in Class 9\u201312 across 250 districts",
  ],
  requiredDocuments: [
    { name: "Proof of date of birth", mandatory: true },
    { name: "Educational qualification certificates (PG/PhD degree)", mandatory: true },
    { name: "Mark sheets of all qualifying examinations", mandatory: true },
    { name: "Research proposal/project synopsis (as per programme)", mandatory: true },
    { name: "CV/bio-data of applicant", mandatory: true },
    { name: "Break-in-career declaration (if applicable)", mandatory: false },
    { name: "No Objection Certificate from host institution", mandatory: true },
    { name: "Certificate for SC/ST/PH (if claiming age relaxation)", mandatory: false },
    { name: "Mentor/supervisor consent letter (for WISE-PhD)", mandatory: true },
    { name: "Publication list (if any)", mandatory: false },
  ],
  officialPortalUrl: "https://dst.gov.in/scientific-programmes/wise-kiran",
  ministry: "Department of Science and Technology (DST)",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "WISE-KIRAN",
    "women-in-science",
    "DST",
    "phd",
    "post-doctoral",
    "STEM",
    "gender-equity",
    "central",
    "all-india",
    "research",
    "career-re-entry",
    "women-empowerment",
  ],
  faqs: [
    {
      q: "Who can apply for WISE-KIRAN schemes?",
      a: "Indian women scientists and technologists with a post-graduate degree in Basic or Applied Sciences (or equivalent). Different programmes have specific age and qualification requirements \u2014 WISE-PhD (27\u201345 years, PG degree), WISE-PDF (27\u201360 years, PhD), WIDUSHI (up to 62 years), and WISE-SCOPE (27\u201360 years).",
    },
    {
      q: "What is the fellowship amount for WISE-PhD?",
      a: "WISE-PhD provides \u20B937,000 per month fellowship along with HRA as per norms, a research grant of \u20B91.0 lakh per year, and institutional overhead charges of \u20B90.5 lakh per year, for a maximum duration of 5 years.",
    },
    {
      q: "What is the fellowship amount for WISE-PDF?",
      a: "WISE-PDF provides \u20B967,000 per month fellowship with HRA, a research grant of \u20B92.0 lakh per year, small equipment grant up to \u20B93.0 lakh, and institutional overhead of \u20B91.0 lakh per year, for up to 3 years.",
    },
    {
      q: "Can women in regular employment apply for WISE-KIRAN?",
      a: "No. Women in regular/permanent employment are not eligible for most WISE-KIRAN programmes. However, women scientists in temporary research or academic positions may apply, provided they leave their previous assignment if the project is approved.",
    },
    {
      q: "Which scientific disciplines are covered?",
      a: "Five subject areas: Physical and Mathematical Sciences, Chemical Sciences, Life Sciences, Earth and Atmospheric Sciences, and Engineering and Technology. WISE-SCOPE additionally covers Energy, Water and Waste Management, Health and Nutrition, Environment and Climate Change, Agriculture, and Engineering Technology Development.",
    },
    {
      q: "How do I apply for WISE-KIRAN programmes?",
      a: "Proposals are submitted online through DST\u2019s e-PMS portal (onlinedst.gov.in) or the WISE online portal (online-wosa.gov.in). Calls for proposals are announced periodically on the DST website (dst.gov.in).",
    },
  ],
  source: "sample",
};
