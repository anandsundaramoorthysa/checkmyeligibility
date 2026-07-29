import type { Scheme } from "@/lib/types";

export const scholarshipsHigherEducationAbroadOpenCategory: Scheme = {
  id: "scholarships-higher-education-abroad-open-category",
  slug: "scholarships-higher-education-abroad-meritorious-boys-girls-open-category",
  name: "Scholarships For Higher Education Abroad To Meritorious Boys And Girls From Open Category",
  shortName: "Higher Education Abroad Scholarship (Open Category)",
  summary: "A central government scholarship program supporting meritorious students from the open category pursuing higher education at premier foreign universities, enabling international academic exposure and research opportunities while reducing financial barriers.",
  description: "This is a prestigious central government scholarship scheme designed to facilitate higher education opportunities for meritorious students from the open category at leading foreign universities. The scheme recognizes academic excellence and provides comprehensive financial support covering tuition fees, accommodation, travel, and living expenses for postgraduate studies abroad. It aims to enable talented Indian students to pursue advanced degrees in science, technology, engineering, mathematics, and other professional disciplines from top-ranked universities in developed nations. The scheme is administered by the Ministry of Education (formerly MHRD) and operates in collaboration with international partner institutions and educational councils. Eligible students must demonstrate exceptional academic merit (typically 80%+ in relevant exams), strong entrance test performance (GMAT, GRE, IELTS/TOEFL), and commitment to return to India post-study. Scholarship covers up to 100% of tuition fees (typically $40,000-80,000 annually for premier institutions), monthly living stipend of $1,200-1,500 USD, international travel expenses (₹1,50,000-2,00,000), health insurance, and research allowance. The scheme emphasizes development of human capital, enhancing India's research capabilities, and fostering international academic collaborations. Over 500 scholars have been supported annually, many becoming leaders in their respective fields post-return.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Educational Qualification",
      value: "Bachelor's degree (4-year minimum) in relevant discipline from recognized Indian/foreign university; minimum 80% marks or equivalent grade; pursuing Master's or PhD programs abroad",
      type: "education",
    },
    {
      label: "Academic Merit",
      value: "Consistent academic excellence demonstrated through marks in graduation and entrance exams; competitive performance in standardized tests (GRE 320+, GMAT 650+, or equivalent)",
      type: "education",
    },
    {
      label: "Entrance Examination",
      value: "Valid scores in internationally recognized tests: GRE (for STEM), GMAT (for Management/Economics), IELTS (7.0+) or TOEFL (100+); tests taken within 2 years",
      type: "education",
    },
    {
      label: "University Ranking and Recognition",
      value: "Admission secured from top 500 ranked universities globally (Times Higher Education, QS Rankings, or ARWU); institution must be accredited by recognized national/regional accreditation bodies",
      type: "education",
    },
    {
      label: "Category Specification",
      value: "Student must belong to open/general category; SC/ST/OBC students not eligible for this specific scheme (separate schemes available for reserved categories)",
      type: "caste-category",
    },
    {
      label: "Citizenship and Nationality",
      value: "Indian citizen with no restriction on residency duration; possessing valid Indian passport; no dual citizenship; commitment to work in India for 3-5 years post-graduation",
      type: "residence",
    },
    {
      label: "Age and Previous Funding",
      value: "Age typically 22-35 years at time of application; not previously awarded any government scholarship for foreign education; no ongoing government-funded studies abroad",
      type: "age",
    },
  ],
  benefits: [
    {
      label: "Full Tuition Fee Coverage",
      value: "100% tuition fees paid directly to foreign university; covers up to $40,000-80,000 annually depending on program and institution tier",
    },
    {
      label: "Monthly Living Allowance (Stipend)",
      value: "USD 1,200-1,500 per month (~₹1,00,000-1,25,000) for covering accommodation, food, and daily expenses; disbursed directly to student account",
    },
    {
      label: "International Travel Support",
      value: "One-time travel grant of ₹1,50,000-2,00,000 for economy class international air travel covering return journey (India to university and back)",
    },
    {
      label: "Medical and Health Insurance",
      value: "Comprehensive health insurance coverage costing ₹50,000-1,00,000 annually; includes hospitalization, medications, and emergency evacuation",
    },
    {
      label: "Research and Project Support",
      value: "Annual research allowance of USD 500-1,000 for research materials, conference participation, field studies, and thesis/dissertation support",
    },
    {
      label: "Exam Preparation Assistance",
      value: "Free coaching and guidance for standardized tests (GRE, GMAT, IELTS, TOEFL); practice materials and mock tests provided; counseling for application preparation",
    },
    {
      label: "University Selection Support",
      value: "Guidance in identifying top-ranked universities matching student's profile; assistance with university applications and admission procedures; coordination with partner universities",
    },
    {
      label: "Visa Assistance and Documentation",
      value: "Support with student visa applications including financial document preparation; coordination with foreign embassy/consulate; emergency documentation services",
    },
    {
      label: "Readjustment Allowance Upon Return",
      value: "Settling-in allowance of ₹2,00,000-3,00,000 upon completion of studies and return to India; aids transition and initial employment period",
    },
    {
      label: "Career Placement and Mentoring",
      value: "Networking with Indian industry leaders and government agencies; placement assistance upon return; mentorship from successful returnee scholars",
    },
    {
      label: "Academic Exchange and Networking",
      value: "Access to Indian student networks abroad; participation in alumni association events; connection with Indian diplomatic missions for networking opportunities",
    },
    {
      label: "Publication and Dissemination Support",
      value: "Support for publishing research outcomes and findings in international journals; conference presentation assistance; knowledge dissemination funding",
    },
    {
      label: "Post-Study Employment Linkage",
      value: "Job placement assistance in India post-graduation; preferential consideration for government positions; industry partnerships for employment opportunities",
    },
  ],
  requiredDocuments: [
    {
      name: "Completed Scholarship Application Form",
      mandatory: true,
      note: "Official application form from Ministry of Education portal or centralized scholarship portal; prescribed format with all sections completed",
    },
    {
      name: "Bachelor's Degree Certificate and Mark Sheet",
      mandatory: true,
      note: "Final degree certificate and mark sheet showing minimum 80% marks or equivalent grade; certified copies required from recognized Indian/foreign university",
    },
    {
      name: "Standardized Test Scores",
      mandatory: true,
      note: "Valid GRE/GMAT scores (320+/650+ respectively) and IELTS/TOEFL scores (7.0+/100+ respectively); test reports obtained directly from testing agencies within 2 years",
    },
    {
      name: "Foreign University Admission Letter",
      mandatory: true,
      note: "Provisional or final admission letter from top-ranked foreign university; letter must specify program duration, tuition fees, and commencement date; on official university letterhead",
    },
    {
      name: "Proof of Identity and Citizenship",
      mandatory: true,
      note: "Valid Indian passport with minimum 5-10 year validity; Aadhaar card; PAN card; all government-issued identity documents",
    },
    {
      name: "Educational Transcripts",
      mandatory: true,
      note: "Official transcripts from all educational institutions attended; 12th mark sheet, Bachelor's degree transcripts, any prior postgraduate records; certified copies",
    },
    {
      name: "Statement of Purpose (SOP)",
      mandatory: true,
      note: "500-1,000 word essay explaining educational objectives, career goals, research interests, and rationale for chosen program and university; must align with scholarship objectives",
    },
    {
      name: "Academic Reference Letters",
      mandatory: true,
      note: "2-3 reference letters from faculty/professors who taught applicant; should highlight academic excellence, research potential, and suitability for advanced studies",
    },
    {
      name: "Curriculum Vitae (CV)",
      mandatory: false,
      note: "Detailed CV listing academic qualifications, research experience, publications, conference presentations, awards, skills, and relevant achievements",
    },
    {
      name: "Research Proposal or Project Plan",
      mandatory: false,
      note: "Detailed proposal of intended research/thesis work; outline of methodology, objectives, and expected outcomes; 2-3 pages maximum; demonstrates research aptitude",
    },
    {
      name: "Financial Documents",
      mandatory: false,
      note: "Bank statements, income tax returns, investment certificates proving financial stability; demonstrates ability to manage personal expenses and support emergency situations",
    },
    {
      name: "Recommendation from Employer (if applicable)",
      mandatory: false,
      note: "Letter of recommendation from employer or professional supervisor if applicant is working; highlights professional competence and commitment to development",
    },
    {
      name: "Post-Graduation Commitment Letter",
      mandatory: false,
      note: "Written commitment to return to India and contribute to national development for minimum 3-5 years; may include preference to work in government/academia",
    },
  ],
  officialPortalUrl: "https://www.scholarships.gov.in/",
  ministry: "Ministry of Education (formerly MHRD), Government of India",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "higher education",
    "abroad",
    "foreign university",
    "master's",
    "PhD",
    "meritorious students",
    "open category",
    "international education",
    "central government",
    "tuition coverage",
    "living allowance",
    "India",
    "postgraduate",
    "excellence",
  ],
  faqs: [
    {
      question: "What is this scholarship scheme for?",
      answer: "This scheme provides comprehensive financial support to meritorious students from the open category pursuing Master's and PhD programs at top-ranked foreign universities. It covers tuition fees, living expenses, travel, insurance, and research support to enable Indian students to access world-class education and contribute to national development upon return.",
    },
    {
      question: "Who is eligible to apply?",
      answer: "Indian citizens with Bachelor's degree and minimum 80% marks, valid GRE/GMAT (320+/650+) and IELTS/TOEFL (7.0+/100+) scores, admission from top 500-ranked universities globally, belonging to open/general category, aged 22-35 years are eligible.",
    },
    {
      question: "Why is this scheme limited to open category only?",
      answer: "This specific scheme targets open category students; separate scholarship schemes exist for SC/ST/OBC categories with comparable benefits and support. Multiple schemes ensure targeted support for different categories with tailored eligibility criteria.",
    },
    {
      question: "What is the maximum tuition fee coverage?",
      answer: "The scheme covers 100% tuition fees up to $40,000-80,000 annually depending on program and university tier. Premium institutions or specialized programs may have higher fees; in such cases, application with additional justification is required.",
    },
    {
      question: "What is the monthly living allowance?",
      answer: "Monthly living stipend is USD 1,200-1,500 (approximately ₹1,00,000-1,25,000) disbursed directly to student's bank account covering accommodation, food, transportation, and other daily expenses.",
    },
    {
      question: "Which foreign universities are eligible?",
      answer: "Only universities ranked in top 500 globally (as per Times Higher Education, QS Rankings, or ARWU) are eligible. University must be accredited by recognized national or regional accreditation body in respective country.",
    },
    {
      question: "What programs are covered?",
      answer: "Master's (1-2 year) and PhD (3-5 year) programs in STEM fields (Science, Technology, Engineering, Mathematics), Management, Economics, and other professional disciplines are covered.",
    },
    {
      question: "What are the required standardized test scores?",
      answer: "GRE score of 320+, GMAT score of 650+, IELTS score of 7.0+, or TOEFL score of 100+ are required. Test scores should be obtained from official testing agencies within 2 years of application.",
    },
    {
      question: "Do I need to have a foreign university admission letter before applying?",
      answer: "Yes, provisional or final admission letter from eligible top-ranked foreign university is mandatory. Letter must specify program duration, tuition fees, and course commencement date.",
    },
    {
      question: "Is there a commitment to work in India after studies?",
      answer: "Yes, scholarship recipients commit to work in India for minimum 3-5 years post-graduation. This could be in government sector, academia, industry, or research institutions contributing to national development.",
    },
    {
      question: "What is included in the travel support?",
      answer: "One-time travel grant of ₹1,50,000-2,00,000 covers economy class international air travel from India to university location and return journey upon completion of studies.",
    },
    {
      question: "Is health insurance covered?",
      answer: "Yes, comprehensive health insurance costing ₹50,000-1,00,000 annually is provided, covering hospitalization, medications, emergency medical care, and medical evacuation if required.",
    },
    {
      question: "What support is available for research?",
      answer: "Annual research allowance of USD 500-1,000 is provided for research materials, conference participation, field studies, and thesis/dissertation research-related expenses.",
    },
    {
      question: "What happens if I don't return to India after completing studies?",
      answer: "Scholarship agreement requires commitment to work in India for 3-5 years post-graduation. Failure to return may result in repayment of scholarship amount or legal action as per terms and conditions.",
    },
    {
      question: "How are the application and selection done?",
      answer: "Applications are submitted online through the centralized scholarship portal. Selection is through rigorous evaluation of academic merit, standardized test scores, university admission, research proposal, and suitability for advanced studies. Final selection by expert committee.",
    },
    {
      question: "What is the application timeline?",
      answer: "Applications typically open in October-November for academic year starting in August-September. Application deadline is usually January-February. Selection results announced by April-May with scholarship commencement from June onwards.",
    },
    {
      question: "What documents are mandatory for application?",
      answer: "Mandatory documents include: (1) Completed application form, (2) Bachelor's degree certificate with 80%+ marks, (3) GRE/GMAT scores, (4) IELTS/TOEFL scores, (5) Foreign university admission letter, (6) Passport, (7) Educational transcripts, (8) Statement of Purpose, (9) Reference letters.",
    },
    {
      question: "What support is provided after returning to India?",
      answer: "Settling-in allowance of ₹2,00,000-3,00,000 is provided upon return. Career placement assistance, mentorship from successful returnees, networking with Indian industry and government agencies, and preferential consideration for government positions are available.",
    },
  ],
  source: "sample",
};
