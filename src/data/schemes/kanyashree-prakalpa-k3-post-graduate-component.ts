import type { Scheme } from "@/lib/types";

export const kanyashreePrakalpaK3PostGraduateComponent: Scheme = {
  id: "kanyashree-prakalpa-k3-post-graduate-component",
  slug: "kanyashree-prakalpa-k3-post-graduate-component",
  name: "Kanyashree Prakalpa – K3 Post-Graduate Component",
  shortName: "Kanyashree K3",
  summary:
    "West Bengal scholarship of ₹2,500/month (Science) or ₹2,000/month (Arts/Commerce) for former Kanyashree beneficiaries pursuing full-time postgraduate studies, with income restrictions waived.",
  description:
    "Kanyashree Prakalpa K3 is a specialised sub-component within the Swami Vivekananda Merit-cum-Means Scholarship (SVMCM) framework, targeting women in West Bengal pursuing postgraduate or professional degrees. It relaxes the typical academic score requirements for former Kanyashree (K2) beneficiaries transitioning into postgraduate education, and does not apply an income ceiling.",
  category: "scholarship",
  level: "state",
  states: ["west-bengal"],
  eligibility: [
    {
      label: "Domicile",
      value: "Permanent female resident of West Bengal",
      type: "residence",
    },
    {
      label: "Course",
      value: "Enrolled full-time in a regular postgraduate or professional (Medical/Law/CA) programme at a state-recognised university; distance education is excluded",
      type: "education",
    },
    {
      label: "Academic qualification",
      value: "Minimum 45% aggregate marks in the undergraduate degree from a state college",
      type: "education",
    },
    {
      label: "Annual family income",
      value: "No active income restriction or ceiling",
      type: "income",
    },
  ],
  benefits: [
    "₹2,500 per month for Science stream students",
    "₹2,000 per month for Arts/Commerce stream students",
    "Disbursed via the state SVMCM portal after Head of Institution verification",
  ],
  requiredDocuments: [
    { name: "Madhyamik / equivalent mark sheet (both sides)", mandatory: true },
    { name: "Graduation / final university examination mark sheet (both sides)", mandatory: true },
    { name: "Postgraduate admission receipt", mandatory: true },
    { name: "State domicile certificate (Aadhaar / Voter ID / Ration Card)", mandatory: true },
    { name: "Bank passbook first page (account number and IFSC code)", mandatory: true },
    { name: "Gap year declaration", mandatory: false, note: "If applicable" },
  ],
  officialPortalUrl: "https://svmcm.wb.gov.in/",
  ministry: "Department of Higher Education, Government of West Bengal",
  applicationMode: ["online"],
  tags: [
    "scholarship",
    "kanyashree",
    "west bengal",
    "women",
    "girls",
    "postgraduate",
    "svmcm",
    "state scheme",
  ],
  faqs: [
    {
      q: "Who is eligible for Kanyashree K3?",
      a: "Female residents of West Bengal who were Kanyashree (K2) beneficiaries and are now enrolled full-time in a postgraduate or professional programme at a state-recognised university, with at least 45% aggregate in their undergraduate degree.",
    },
    {
      q: "Is there an income limit?",
      a: "No. Kanyashree K3 does not apply any active family income restriction.",
    },
    {
      q: "How much is the stipend?",
      a: "₹2,500 per month for Science students and ₹2,000 per month for Arts/Commerce students.",
    },
    {
      q: "How do I apply?",
      a: "Register on the SVMCM Portal under 'Kanyashree K3' using your prior K2 ID, complete your profile, upload documents, and submit for verification by your Head of Institution before state approval and disbursement.",
    },
  ],
  source: "sample",
};
