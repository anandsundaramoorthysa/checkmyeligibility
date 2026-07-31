import type { Scheme } from "@/lib/types";

export const primeMinisterVidyalaxmiScheme: Scheme = {
  id: "prime-minister-vidyalaxmi-scheme",
  slug: "prime-minister-vidyalaxmi-scheme",
  name: "Prime Minister Vidyalaxmi Scheme",
  shortName: "PM Vidyalaxmi",
  summary:
    "75% government credit guarantee on education loans up to ₹7.5 lakh for meritorious students admitted to India's top 860 QHEIs.",
  description:
    "The PM-Vidyalaxmi scheme is a central sector initiative by the Government of India designed to ensure that no meritorious student is denied higher education due to financial constraints. It provides a completely digital, transparent, and seamless ecosystem for accessing collateral-free and guarantor-free education loans to pursue higher studies in the nation's premier institutions. The scheme covers 860 Qualified Higher Education Institutions (QHEIs) across India and provides a 75% government credit guarantee on loans up to ₹7.5 lakh, making quality higher education accessible to deserving students.",
  category: "education-loan",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Nationality",
      value: "Must be an Indian national",
      type: "other",
    },
    {
      label: "Institution",
      value: "Must have secured admission on merit (excluding management quota) to any of the designated top 860 QHEIs in India",
      type: "education",
    },
    {
      label: "Education level",
      value: "Applicable for both undergraduate and postgraduate degree/diploma programmes",
      type: "education",
    },
  ],
  benefits: [
    "75% Government credit guarantee on education loans up to ₹7.5 lakh",
    "Collateral-free and guarantor-free education loans",
    "Completely digital application and tracking process",
    "Ability to compare offers from multiple banks on a single platform",
    "Interest subvention available for eligible students",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "PAN Card", mandatory: true },
    { name: "Passport-sized photographs", mandatory: true },
    { name: "Class 10 marksheet", mandatory: true },
    { name: "Class 12 marksheet", mandatory: true },
    { name: "Graduation marksheets (for postgraduate courses)", mandatory: false },
    { name: "Entrance exam scorecard", mandatory: true },
    { name: "Official admission letter", mandatory: true },
    { name: "Official schedule of fees from the institution", mandatory: true },
  ],
  officialPortalUrl: "https://pmvidyalaxmi.co.in/",
  ministry: "Department of Higher Education, Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "education loan",
    "PM Vidyalaxmi",
    "credit guarantee",
    "central sector",
    "higher education",
    "QHEI",
    "merit based",
    "collateral free",
    "all-india",
    "undergraduate",
    "postgraduate",
  ],
  faqs: [
    {
      q: "What is the Prime Minister Vidyalaxmi Scheme?",
      a: "It is a central sector initiative that provides a 75% government credit guarantee on education loans up to ₹7.5 lakh for meritorious students admitted to India's top 860 Qualified Higher Education Institutions (QHEIs).",
    },
    {
      q: "Who is eligible to apply?",
      a: "Indian nationals who have secured admission on merit (excluding management quota) to any of the designated top 860 QHEIs for undergraduate or postgraduate degree/diploma programmes.",
    },
    {
      q: "What is the benefit available under this scheme?",
      a: "The government provides a 75% credit guarantee on loans up to ₹7.5 lakh, making collateral-free and guarantor-free education loans accessible through a unified digital platform.",
    },
    {
      q: "Which institutions are covered?",
      a: "The scheme covers the top 860 Qualified Higher Education Institutions (QHEIs) in India. Students must check eligibility on the official PM-Vidyalaxmi portal.",
    },
    {
      q: "How can I apply?",
      a: "Eligible students can apply through the official PM-Vidyalaxmi portal at https://pmvidyalaxmi.co.in/, where they can submit applications, compare offers from multiple banks, and track progress digitally.",
    },
    {
      q: "Can I apply for postgraduate courses?",
      a: "Yes, the scheme covers both undergraduate and postgraduate degree/diploma programmes at designated QHEIs.",
    },
  ],
  source: "sample",
};
