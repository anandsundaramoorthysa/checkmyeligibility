import type { Scheme } from "@/lib/types";

export const tagoreNationalFellowshipCulturalResearch: Scheme = {
  id: "tagore-national-fellowship-cultural-research",
  slug: "tagore-national-fellowship-for-cultural-research",
  name: "Tagore National Fellowship for Cultural Research",
  shortName: "Tagore National Fellowship",
  summary:
    "Prestigious central fellowship scheme for meritorious researchers pursuing advanced studies in Indian culture, heritage, arts, literature, and humanities, with comprehensive research support and monthly stipends.",
  description:
    "The Tagore National Fellowship for Cultural Research is a prestigious scheme launched by the Ministry of Education (Department of Higher Education) and the Ministry of Culture, Government of India, to promote advanced research, scholarship, and cultural knowledge creation in the diverse fields of Indian culture, heritage, arts, literature, philosophy, history, archaeology, and performing arts. Named after Rabindranath Tagore, the polymath, Nobel laureate, and cultural icon, the fellowship honors his legacy of cultural renaissance and intellectual excellence. The scheme aims to attract and nurture India's brightest minds to pursue doctoral and postdoctoral research on topics of cultural significance, enabling them to become scholars, researchers, and thought leaders in the field of Indian studies. The fellowship provides comprehensive financial support including monthly research stipends, conference travel grants, publication support, and archival research access to facilitate in-depth investigation into aspects of Indian culture, traditions, arts, literature, history, and heritage. Recipients gain access to premier research institutions, museums, archives, and cultural centers across India and internationally.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Academic Qualification",
      value:
        "Minimum Master's degree in subjects related to Indian culture, history, literature, philosophy, performing arts, archaeology, or humanities disciplines with minimum 60% marks or equivalent CGPA",
      type: "education",
    },
    {
      label: "Research Focus",
      value:
        "Proposed research must be on topics directly related to Indian culture, heritage, arts, literature, philosophy, history, archaeology, performing arts, or traditional knowledge systems",
      type: "other",
    },
    {
      label: "Fellowship Period",
      value:
        "Applicants can apply for fellowships of 1-3 years duration for full-time doctoral or postdoctoral research; applicants must not have completed more than 7 years of doctoral research",
      type: "other",
    },
    {
      label: "Age Limit",
      value: "Maximum 40 years of age for doctoral research applicants; maximum 50 years for postdoctoral research applicants",
      type: "age",
    },
    {
      label: "Research Institution Affiliation",
      value:
        "Must have affiliation with or admission from a recognized Indian university, research institute, museum, cultural organization, or heritage center for conducting research",
      type: "education",
    },
    {
      label: "Citizenship",
      value: "Indian citizen or NRI (Non-Resident Indian) of Indian origin; preference given to Indian citizens",
      type: "other",
    },
    {
      label: "Publication Record",
      value:
        "Applicants with prior publications, research papers, or demonstrated scholarly contribution in the field of cultural studies are preferred",
      type: "education",
    },
  ],
  benefits: [
    "Monthly Research Stipend: ₹20,000-₹25,000 per month for doctoral researchers; ₹25,000-₹30,000 per month for postdoctoral researchers",
    "Contingency Grant: ₹50,000 per annum for research-related expenses (archival access, equipment, software, research materials)",
    "Conference and Travel Grant: ₹1,00,000 per annum for attending national/international conferences, seminars, and research meetings",
    "Publication Support: ₹50,000 for peer-reviewed journal publication or research monograph in recognized outlets",
    "Research Library and Archive Access: Free access to major institutional libraries, archives, museums, heritage sites across India",
    "Mentorship: Access to senior researchers, scholars, and cultural experts for guidance and collaboration",
    "International Collaboration Support: Up to ₹2,00,000 for international field research or collaborative projects",
    "Health and Medical Coverage: Health insurance coverage up to ₹5 lakh during fellowship tenure",
    "Certificate and Recognition: Prestigious Tagore National Fellowship certificate and public recognition",
    "No service bond or employment commitment required",
    "Flexibility to pursue research at multiple institutions if required for research objectives",
  ],
  requiredDocuments: [
    { name: "Completed application form (prescribed format)", mandatory: true },
    { name: "Master's degree certificate and marksheet", mandatory: true },
    { name: "Research proposal (5-10 pages)", mandatory: true, note: "Detailed outline of research topic, objectives, methodology, and significance" },
    { name: "Curriculum Vitae (detailed, maximum 3 pages)", mandatory: true, note: "Including educational qualifications, research experience, publications, and awards" },
    {
      name: "Letter of Affiliation/Admission",
      mandatory: true,
      note: "From the university, research institute, museum, or cultural organization where research will be conducted",
    },
    { name: "Letter of Recommendation (2-3 letters)", mandatory: true, note: "From doctoral supervisor, academic mentor, or senior researchers in the field" },
    {
      name: "Research Ethics Clearance (if applicable)",
      mandatory: false,
      note: "If research involves human subjects, cultural communities, or sensitive archival materials",
    },
    { name: "List of Prior Publications (if any)", mandatory: false, note: "With copies of key research papers or monographs" },
    { name: "Aadhaar Card or National ID", mandatory: true },
    { name: "Bank Account Details", mandatory: true, note: "For monthly stipend disbursement via Direct Benefit Transfer (DBT)" },
    { name: "Passport-sized photographs (2-3 copies)", mandatory: true },
    { name: "Proof of Indian Citizenship", mandatory: true, note: "Passport or any government-issued ID" },
    {
      name: "NRI Certificate (if applicable)",
      mandatory: false,
      note: "For NRI applicants, from Ministry of External Affairs or authorized body",
    },
    { name: "Statement of Purpose (500-750 words)", mandatory: true, note: "Explaining motivation for cultural research and career aspirations" },
  ],
  officialPortalUrl: "https://scholarships.gov.in/",
  ministry: "Ministry of Education (Department of Higher Education) & Ministry of Culture, Government of India",
  applicationMode: ["online"],
  tags: [
    "fellowship",
    "research",
    "cultural research",
    "heritage",
    "Indian culture",
    "arts",
    "literature",
    "history",
    "archaeology",
    "philosophy",
    "performing arts",
    "postdoctoral",
    "doctoral",
    "Tagore",
    "humanities",
  ],
  faqs: [
    {
      q: "Who is eligible to apply for the Tagore National Fellowship for Cultural Research?",
      a: "Candidates with a Master's degree (minimum 60% marks) in subjects related to Indian culture, history, arts, literature, or humanities, aged below 40 for doctoral research or below 50 for postdoctoral research, with clear research affiliation at a recognized Indian institution are eligible.",
    },
    {
      q: "What are the preferred research topics?",
      a: "The fellowship supports research on Indian culture, heritage, arts, literature, philosophy, history, archaeology, performing arts (classical dance, music, theatre), traditional knowledge systems, folk arts, cultural practices, historical monuments, and any aspect of Indian cultural studies.",
    },
    {
      q: "Can I apply for postdoctoral research after completing my PhD abroad?",
      a: "Yes, NRIs and Indian citizens who have completed doctoral research (even abroad) can apply for postdoctoral research under this fellowship, provided they have institutional affiliation in India and their research focuses on Indian culture.",
    },
    {
      q: "What is the monthly stipend amount and how is it disbursed?",
      a: "Doctoral researchers receive ₹20,000-₹25,000 per month; postdoctoral researchers receive ₹25,000-₹30,000 per month. Stipends are disbursed monthly via Direct Benefit Transfer (DBT) to the researcher's bank account.",
    },
    {
      q: "What can I use the contingency grant (₹50,000 per annum) for?",
      a: "The contingency grant covers research-related expenses such as purchasing rare books or archival materials, paying for archival access fees, purchasing research software/tools, travel within India for field research, document reproduction costs, and other direct research expenditures.",
    },
    {
      q: "How much can I spend on international collaboration or field research?",
      a: "The fellowship provides up to ₹2,00,000 per annum for international field research, visiting scholars, collaborative projects with foreign institutions, or international conferences directly related to your research topic.",
    },
    {
      q: "Do I need to work at a specific institution during the fellowship?",
      a: "You must have affiliation with a recognized Indian research institution (university, research center, museum, heritage organization). However, you can conduct fieldwork and research at multiple locations if it serves your research objectives, with prior approval.",
    },
    {
      q: "Can I pursue research on contemporary issues or must it be historical?",
      a: "The fellowship supports both historical and contemporary research on Indian culture. Contemporary studies on cultural practices, heritage conservation, arts promotion, language preservation, and modern interpretations of classical traditions are equally eligible.",
    },
    {
      q: "What is the application deadline?",
      a: "Application deadlines typically fall between January and March for the next academic year. Check the National Scholarship Portal (scholarships.gov.in) or the Ministry of Culture website for exact 2026-2027 application dates and announcement details.",
    },
    {
      q: "How do I apply?",
      a: "Visit scholarships.gov.in, register with your details, select 'Tagore National Fellowship for Cultural Research', fill the application form, upload research proposal, CV, affiliation letter, recommendation letters, and other documents, and submit for institutional verification and merit review.",
    },
    {
      q: "What should my research proposal include?",
      a: "Your 5-10 page research proposal should include: (1) Research title and objectives, (2) Significance and novelty of the research, (3) Detailed methodology and approach, (4) Expected outcomes and deliverables, (5) Timeline for completion, (6) Required resources, and (7) How it contributes to Indian cultural scholarship.",
    },
    {
      q: "How are applications reviewed and selected?",
      a: "Applications are reviewed by a panel of senior researchers, scholars, and cultural experts. Selection is based on: research quality and innovation (40%), scholarly merit and academic record (30%), institutional affiliation (15%), and potential contribution to cultural scholarship (15%).",
    },
    {
      q: "Can I work while holding the fellowship?",
      a: "The fellowship is for full-time research and is not compatible with full-time employment. However, teaching 4-6 hours per week at your affiliated institution (e.g., doctoral guidance, seminars) is permitted if it doesn't compromise research time.",
    },
    {
      q: "Is there any requirement to publish from my research?",
      a: "While not mandatory, fellows are encouraged to publish peer-reviewed research papers. The scheme provides ₹50,000 publication support per annum for publishing in recognized journals or bringing out research monographs.",
    },
    {
      q: "Do I need to submit annual progress reports?",
      a: "Yes, fellows must submit annual research progress reports, including publications, conference presentations, and research milestones achieved. Progress review is conducted to ensure research progress and continued suitability for the fellowship.",
    },
    {
      q: "What happens after the fellowship ends?",
      a: "After fellowship completion, there is no employment obligation or service requirement. You are free to pursue any career path — academia, publishing, cultural organizations, museums, government departments, or international opportunities.",
    },
    {
      q: "Can I extend my fellowship if my research requires more time?",
      a: "Extension beyond the initially approved period (1-3 years) is possible in exceptional cases with strong justification, subject to review by the fellowship committee and availability of funds.",
    },
    {
      q: "Is this fellowship available for part-time research?",
      a: "No, the Tagore National Fellowship is exclusively for full-time, dedicated research. Part-time or parallel employment positions are not compatible with the fellowship terms.",
    },
  ],
  source: "sample",
};
