import type { Scheme } from "@/lib/types";

export const icssrDoctoralFellowship: Scheme = {
  id: "icssr-doctoral-fellowship",
  slug: "icssr-doctoral-fellowship-for-social-sciences-research",
  name: "ICSSR Doctoral Fellowship",
  shortName: "ICSSR Doctoral Fellowship",
  summary:
    "Prestigious national fellowship scheme by the Indian Council of Social Science Research for meritorious doctoral researchers pursuing advanced studies in social sciences disciplines across Indian universities.",
  description:
    "The ICSSR Doctoral Fellowship is a premier research funding scheme administered by the Indian Council of Social Science Research (ICSSR), an autonomous organization under the Ministry of Education, Government of India. The fellowship is designed to support talented doctoral scholars pursuing full-time doctoral (PhD) research in social sciences disciplines at recognized Indian universities. The scheme aims to strengthen research capacity in social sciences by attracting and nurturing the best minds to contribute to knowledge creation, policy research, and scholarly advancement in fields such as economics, political science, sociology, social anthropology, history, geography, psychology, public administration, management studies, and other allied social sciences. The ICSSR Doctoral Fellowship provides comprehensive financial support including monthly research stipends, conference travel grants, research contingency allowances, and access to research resources and networks. The fellowship recognizes the importance of rigorous doctoral research in addressing contemporary social issues and contributing to evidence-based policy formulation. Fellows become part of a vibrant community of researchers and gain access to ICSSR's extensive library, research infrastructure, and national/international scholarly networks.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic Qualification",
      value:
        "Minimum Master's degree with 55% marks or equivalent CGPA (or 50% for SC/ST/OBC candidates) in any social sciences discipline from a recognized university",
      type: "education",
    },
    {
      label: "Enrollment Status",
      value:
        "Must be enrolled as a full-time doctoral (PhD) student in a recognized Indian university and have completed formal admission requirements; not more than 2 years into doctoral research at the time of application",
      type: "education",
    },
    {
      label: "Research Focus",
      value:
        "Research topic must be in social sciences disciplines — economics, political science, sociology, anthropology, history, geography, psychology, public administration, management, development studies, gender studies, or related fields",
      type: "other",
    },
    {
      label: "Age Limit",
      value: "Maximum 35 years of age as on the date of application (relaxation of 5 years for SC/ST/OBC/PwD candidates)",
      type: "age",
    },
    {
      label: "Citizenship",
      value: "Indian citizen; fellowship is available only for Indian nationals",
      type: "other",
    },
    {
      label: "Academic Performance",
      value:
        "Consistent academic performance in Bachelor's and Master's degrees; should demonstrate research aptitude through marks, publications, or seminar presentations",
      type: "education",
    },
    {
      label: "University Recommendation",
      value:
        "Must have formal recommendation from the doctoral supervisor and the university department where doctoral research is being pursued",
      type: "other",
    },
  ],
  benefits: [
    "Monthly Research Stipend: ₹25,000 per month for doctoral research (among the highest central fellowships)",
    "Contingency Grant: ₹1,00,000 per annum for research-related expenses (field surveys, data collection, literature procurement, software licenses)",
    "Conference and Seminar Grant: ₹50,000 per annum for presenting research at national/international conferences and seminars",
    "Library and Resource Access: Free lifetime access to ICSSR's digital and physical library resources, working paper series, and research databases",
    "National Research Network Access: Connection to ICSSR's network of research centers, institutes, and senior scholars across India",
    "Research Supervision and Mentorship: Regular interaction with ICSSR faculty and senior researchers for guidance",
    "Publication Support: Preference in publication of research papers in ICSSR journals and publications",
    "International Engagement: Opportunities for participation in international research collaborations and workshops",
    "Certificate and Recognition: ICSSR Doctoral Fellowship certificate on completion with national recognition",
    "Health Insurance Coverage: Basic health insurance coverage during fellowship tenure (where applicable)",
    "No service bond or employment commitment",
    "Flexibility in research design and methodology within social sciences domain",
  ],
  requiredDocuments: [
    { name: "Completed application form (prescribed ICSSR format)", mandatory: true },
    { name: "Master's degree certificate and marksheet", mandatory: true },
    { name: "PhD enrollment certificate from the university", mandatory: true },
    { name: "Research proposal/synopsis (5-7 pages)", mandatory: true, note: "Approved by doctoral supervisor, outlining research objectives, methodology, and contribution" },
    { name: "Detailed Curriculum Vitae (2-3 pages maximum)", mandatory: true, note: "Including educational qualifications, academic achievements, research interests, publications, awards" },
    { name: "Letter from Doctoral Supervisor", mandatory: true, note: "Recommending the candidate for ICSSR fellowship and certifying research progress" },
    { name: "Letter from University Department/Head", mandatory: true, note: "Confirming PhD enrollment, research focus, and institutional support" },
    { name: "Statement of Purpose (500-750 words)", mandatory: true, note: "Explaining research motivation, relevance to social sciences, and contribution to the field" },
    { name: "Master's thesis/dissertation abstract (if completed)", mandatory: false, note: "Or summary of Master's research" },
    { name: "List of publications (if any)", mandatory: false, note: "With copies of peer-reviewed papers, working papers, or conference presentations" },
    { name: "Aadhaar Card or National ID", mandatory: true },
    { name: "Bank Account Details and IFSC Code", mandatory: true, note: "For monthly stipend disbursement via Direct Benefit Transfer (DBT)" },
    { name: "Passport-sized photographs (2-3 copies)", mandatory: true },
    { name: "SC/ST/OBC Certificate (if applicable)", mandatory: false, note: "For availing age and marks relaxation" },
  ],
  officialPortalUrl: "https://www.icssr.org/",
  ministry: "Indian Council of Social Science Research (ICSSR), Ministry of Education, Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "doctorate",
    "PhD",
    "social sciences",
    "research",
    "ICSSR",
    "economics",
    "political science",
    "sociology",
    "anthropology",
    "history",
    "geography",
    "management",
    "development studies",
    "psychology",
    "public administration",
  ],
  faqs: [
    {
      q: "Who is eligible to apply for the ICSSR Doctoral Fellowship?",
      a: "Indian citizens with a Master's degree (55% marks minimum, or 50% for SC/ST/OBC), currently enrolled as full-time PhD students in a recognized Indian university, within 2 years of doctoral research enrollment, aged below 35 years (40 for SC/ST/OBC/PwD) are eligible.",
    },
    {
      q: "What are the eligible social sciences disciplines?",
      a: "Economics, Political Science, Sociology, Social Anthropology, History, Geography, Psychology, Public Administration, Management Studies, Development Studies, Gender Studies, Law, Education, Environmental Studies, and other recognized social sciences disciplines are eligible.",
    },
    {
      q: "What is the monthly stipend amount?",
      a: "The monthly research stipend is ₹25,000 per month, disbursed directly to the fellow's bank account via Direct Benefit Transfer (DBT) on the 1st of each month (or nearest working day).",
    },
    {
      q: "What can I use the contingency grant (₹1,00,000 per annum) for?",
      a: "The contingency grant covers research expenses including field survey costs, data collection, purchase of research books and materials, subscription to journals and databases, software licenses, travel within India for research fieldwork, and other direct research-related expenditures. Advance approval required from ICSSR.",
    },
    {
      q: "Can I use the conference grant to attend international conferences?",
      a: "Yes, the ₹50,000 annual conference grant can be used for presenting research papers at national or international conferences and seminars. International conference attendance requires prior approval from ICSSR.",
    },
    {
      q: "How long is the ICSSR Doctoral Fellowship tenure?",
      a: "The fellowship is typically granted for 3 years, which is the standard duration for doctoral research. However, it can be extended up to 4-5 years in exceptional cases where research requires additional time, subject to satisfactory progress and committee approval.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines vary. ICSSR typically announces two application cycles per year — one in December-January and another in June-July. Check the official ICSSR website (icssr.org) for exact 2026 application dates and announcements.",
    },
    {
      q: "How do I apply?",
      a: "Visit the ICSSR website (icssr.org), navigate to the Fellowship section, fill the online application form with complete details, upload all required documents (research proposal, CV, supervisor's recommendation, university letter), and submit. Applications are processed online.",
    },
    {
      q: "Is my Master's degree from abroad recognized?",
      a: "Master's degrees from foreign universities are recognized if the degree is from a university recognized by the Association of Indian Universities (AIU) or equivalent body. You must obtain AIU recognition of your foreign degree before applying.",
    },
    {
      q: "What should my research proposal include?",
      a: "Your 5-7 page research proposal should include: (1) Research title, (2) Research questions and objectives, (3) Significance and relevance to social sciences, (4) Detailed methodology and research design, (5) Expected outcomes and contribution, (6) Timeline for completion, and (7) Resource requirements.",
    },
    {
      q: "Can I change my research topic after receiving the fellowship?",
      a: "Minor modifications to research methodology or focus within the approved domain are permitted. However, substantial topic changes require written approval from ICSSR and your doctoral committee. ICSSR reviews progress annually.",
    },
    {
      q: "Do I need to work while pursuing the fellowship?",
      a: "The ICSSR Doctoral Fellowship is intended for full-time research. Taking up full-time employment during the fellowship tenure is not permitted. However, teaching 4-6 hours per week as a teaching assistant at your university is permissible.",
    },
    {
      q: "What are the merit review criteria for selection?",
      a: "Selection is based on: (1) Master's degree performance (25%), (2) Research proposal quality and originality (35%), (3) Relevance to social sciences scholarship (20%), (4) Supervisor's recommendation and institutional support (15%), and (5) Candidate's research aptitude and publications (5%).",
    },
    {
      q: "Is there any requirement to publish from my research?",
      a: "While not mandatory during the fellowship, fellows are encouraged to disseminate findings through publications. ICSSR provides preference for publishing research papers in its journals and supports publication through its networks.",
    },
    {
      q: "Do I need to submit progress reports?",
      a: "Yes, fellows must submit annual research progress reports including research milestones achieved, publications, conference presentations, and continuation of research. Progress is reviewed annually to ensure satisfactory advancement.",
    },
    {
      q: "What happens after the fellowship ends?",
      a: "After fellowship completion (upon PhD completion), there is no employment obligation or service requirement. You are free to pursue any career path — academia, research institutes, government, NGOs, international organizations, or other sectors.",
    },
    {
      q: "Can I receive ICSSR fellowship along with other scholarships?",
      a: "You cannot receive simultaneous financial support from multiple national fellowship schemes (like INSPIRE, DST INSPIRE Fellow, DBT-STRIDE, etc.). However, you can receive state scholarships or institutional support. Declare all ongoing financial assistance in your application.",
    },
    {
      q: "Is the ICSSR fellowship available for part-time or distance learning PhD programmes?",
      a: "No, the ICSSR Doctoral Fellowship is exclusively for full-time, regular doctoral programmes in recognized universities. Part-time, distance learning, or online-only doctoral programmes are not eligible.",
    },
  ],
  source: "sample",
};
