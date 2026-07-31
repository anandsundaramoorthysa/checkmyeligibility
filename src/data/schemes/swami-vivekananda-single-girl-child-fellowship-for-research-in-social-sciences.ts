import type { Scheme } from "@/lib/types";

export const swamiVivekanandaSingleGirlChildFellowshipForResearchInSocialSciences: Scheme = {
  id: "swami-vivekananda-single-girl-child-fellowship-for-research-in-social-sciences",
  slug: "swami-vivekananda-single-girl-child-fellowship-for-research-in-social-sciences",
  name: "Swami Vivekananda Single Girl Child Fellowship for Research in Social Sciences",
  shortName: "UGC Single Girl Child Fellowship",
  summary:
    "Fellowship of ₹25,000–₹28,000/month plus contingency for single girl children pursuing a PhD in Social Sciences, by UGC.",
  description:
    "A fellowship scheme by the University Grants Commission (UGC) for the single girl child for research in Social Sciences with an aim to compensate for direct costs of higher education, especially for such girls who happen to be the only girl child in their family. The objectives are to support the higher education of a single girl child in Social Sciences, recognize the value of observance of small family norms, recognize the norm of a single girl child in society, propagate the concept of the single girl child norm, and promote single girls in society.",
  category: "fellowship",
  level: "central",
  states: ["all-india"],
  eligibility: [
    {
      label: "Single girl child",
      value: "Must be the only girl child of her parents without any brother or sister (twin or fraternal daughters also eligible)",
      type: "gender",
    },
    {
      label: "PhD enrolment",
      value: "Must be registered in a regular, full-time PhD program in Social Sciences at a University/College/Institute under section 2(f) and 12(b) of UGC Act, deemed universities, central/state funded institutions, or Institutes of National Importance",
      type: "education",
    },
    {
      label: "Age limit",
      value: "Up to 40 years for general category; up to 45 years for SC/ST/OBC/PwD",
      type: "age",
    },
    {
      label: "Mode",
      value: "PhD through distance education mode is not covered under the scheme",
      type: "other",
    },
    {
      label: "Transgender",
      value: "Transgender candidates are eligible to apply under the scheme as per norms",
      type: "gender",
    },
  ],
  benefits: [
    "Fellowship ₹25,000 per month for the initial two years",
    "Fellowship ₹28,000 per month for the remaining tenure",
    "Contingency grant ₹10,000 per annum for initial two years",
    "Contingency grant ₹20,500 per annum for remaining tenure",
    "Escort/Reader assistance ₹2,000 per month for PwD candidates",
  ],
  requiredDocuments: [
    { name: "Aadhaar Card", mandatory: true },
    { name: "Proof of Identity", mandatory: true },
    { name: "Proof of Age (Birth Certificate or Class 10 marksheet)", mandatory: true },
    { name: "Bank details", mandatory: true },
    { name: "Proof of pursuing PhD in Social Sciences", mandatory: true },
    { name: "Passport-size photograph", mandatory: true },
    { name: "Caste Certificate (if applicable)", mandatory: false },
    { name: "Disability Certificate (if applicable)", mandatory: false },
    { name: "Transgender ID Card (if applicable)", mandatory: false },
    { name: "Affidavit on ₹50 stamp paper proving single girl child status, duly attested by SDM/First Class Magistrate/Gazetted Officer (not below Tahsildar)", mandatory: true },
  ],
  officialPortalUrl: "https://www.ugc.gov.in/",
  ministry: "University Grants Commission (UGC), Ministry of Education",
  applicationMode: ["online"],
  tags: [
    "UGC",
    "single girl child",
    "fellowship",
    "social sciences",
    "PhD",
    "research",
    "women",
    "girl child",
    "small family norm",
    "central",
    "all-india",
  ],
  faqs: [
    {
      q: "What is the Swami Vivekananda Single Girl Child Fellowship?",
      a: "A UGC fellowship for single girl children pursuing a PhD in Social Sciences, providing ₹25,000–₹28,000 per month plus contingency grants to support higher education and promote the small family norm.",
    },
    {
      q: "Who is eligible?",
      a: "A single girl child (only daughter, no siblings) registered in a regular full-time PhD in Social Sciences at a recognized institution. Age limit: 40 years (general) or 45 years (SC/ST/OBC/PwD).",
    },
    {
      q: "What is the fellowship amount?",
      a: "₹25,000/month for the first 2 years and ₹28,000/month for the remaining tenure, plus contingency grants of ₹10,000–₹20,500 per annum and ₹2,000/month escort reader assistance for PwD candidates.",
    },
    {
      q: "What documents are required for single girl child proof?",
      a: "An affidavit on ₹50 stamp paper from the fellow/parent, duly attested by SDM/First Class Magistrate/Gazetted Officer (not below Tahsildar rank) as per the prescribed proforma.",
    },
    {
      q: "How do I apply?",
      a: "Applications are invited online once a year through advertisements in leading newspapers and employment news. Short notifications are also uploaded to the UGC website. Apply strictly as per instructions on the online portal.",
    },
    {
      q: "Are twin daughters eligible?",
      a: "Yes, twin daughters or fraternal daughters are also eligible to apply under this scheme.",
    },
    {
      q: "Is distance education PhD covered?",
      a: "No, admission to PhD through distance education mode is not covered under this scheme.",
    },
  ],
  source: "sample",
};
