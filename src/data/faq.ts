/**
 * Canonical FAQ list. Used by the homepage teaser, the /faq page, and the
 * FAQPage JSON-LD on both. Kept plain so it can move to a CMS/pipeline later.
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is CheckMyEligibility free to use?",
    a: "Yes, completely free. There is no subscription, no login, and no fee of any kind. Government schemes and certificates are your right — we never charge you to find what you're entitled to.",
  },
  {
    q: "Do you apply for schemes on my behalf?",
    a: "No. We help you understand what you may qualify for, the documents you'll need, and exactly where to apply. The application itself always happens on the official government portal, submitted by you. We never ask for your login details or submit anything for you.",
  },
  {
    q: "Are you the government, or affiliated with it?",
    a: "No. CheckMyEligibility is an independent guide. We are not affiliated with, endorsed by, or operated by any government body. We simply make official information easier to understand and link you to the genuine government portals.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We are built to be private by design. We don't require an account, and we ask for the minimum information needed to suggest relevant schemes. We never collect or store your Aadhaar number, bank details, or scanned documents.",
  },
  {
    q: "How does the scheme matching work?",
    a: "You describe your situation in plain language — for example, \"I'm a farmer in Bihar\" or \"I'm a student looking for a scholarship.\" We match that against the eligibility details of government schemes and surface the ones most likely to fit, so you can verify and apply on the official portal.",
  },
  {
    q: "Which languages do you support?",
    a: "Our goal is to answer in plain, simple language so anyone can understand. We're expanding multi-language support, including Hindi and Tamil, so you can ask and read answers in the language you're most comfortable with.",
  },
  {
    q: "How accurate is the information?",
    a: "We work hard to keep scheme and certificate details accurate, but rules, income limits, and deadlines change often and vary by state. Always confirm the final eligibility and requirements on the official government portal before you apply.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account is needed. You can start describing your situation straight away and get suggestions without signing up or sharing personal contact details.",
  },
  {
    q: "Can you guarantee I'll get a scheme or benefit?",
    a: "No. Whether you ultimately receive a benefit is decided by the concerned government department based on official eligibility and verification. We help you find and understand the right schemes — we don't decide approvals.",
  },
  {
    q: "What if I can't find a scheme for my situation?",
    a: "New schemes and certificates are being added over time. If nothing matches today, describe your situation to the assistant — it can point you toward the closest options and the certificates you may need to qualify later.",
  },
  {
    q: "Who built CheckMyEligibility?",
    a: "CheckMyEligibility is a student-led project from the Dept. of Data Science, Loyola College, Chennai, funded by the department. A team of 18 students — validators and developers — built the platform and manually review every scheme against official government portals.",
  },
  {
    q: "Is CheckMyEligibility open source?",
    a: "Yes. CheckMyEligibility is open source under the MIT License. The source code is publicly available on GitHub.",
  },
  {
    q: "How is the scheme data validated?",
    a: "Every scheme is manually reviewed by a trained team of students against its official government portal. They verify availability, structured eligibility, and application links before a scheme appears on CheckMyEligibility — so you get accurate, up-to-date information.",
  },
];
