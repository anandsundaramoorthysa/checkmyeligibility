/**
 * Turns a free-text student message into structured filters that match the
 * vocabulary actually stored in the `schemes` table.
 *
 * The DB stores these columns as JSON-array text, e.g. '["ug","pg"]':
 *   benefit_type    scholarship | stipend | grant | loan | fee_waiver | hostel
 *   category        fellowship | scholarship | sc_st | obc | bc_mbc | ews |
 *                   minority | girl_women | differently_abled | general_merit
 *   education_level primary | upper_primary | secondary | higher_secondary |
 *                   diploma | ug | pg | phd | professional | all
 *   states          all-india | tamil-nadu | kerala | ...
 * Keep these lists in sync with the data — a token that does not exist in the
 * DB silently narrows results to nothing.
 */

export interface Intent {
  /** Kind of help asked for — matched against benefit_type. */
  benefitType?: string;
  /** Social/beneficiary group or scheme family — matched against category. */
  socialCategory?: string;
  /** Study stage — matched against education_level. */
  educationLevel?: string;
  /** Matched against beneficiary_gender. */
  gender?: string;
  /** Matched against states. */
  state?: string;
  /** Distinctive words to match against the scheme name, so a student who
   * names a scheme gets that scheme. Without this, "compare AICTE Pragati and
   * INSPIRE" retrieved neither, because the token filters alone cannot tell
   * one scholarship from another. */
  nameTerms?: string[];
}

/** Words that carry no signal when matching against a scheme name. Scheme
 * names are full of "scholarship"/"scheme", so those would match everything. */
const NAME_STOPWORDS = new Set([
  "about", "after", "again", "against", "annual", "apply", "available", "before",
  "being", "below", "benefit", "benefits", "between", "both", "called", "check",
  "compare", "comparison", "could", "course", "difference", "different", "does",
  "eligible", "eligibility", "family", "fellowship", "from", "getting", "give",
  "grant", "have", "help", "here", "income", "india", "indian", "into", "know",
  "level", "loan", "look", "looking", "many", "more", "most", "much", "need",
  "other", "over", "please", "programme", "program", "scheme",
  "schemes", "scholarship", "scholarships", "should", "some", "student",
  "students", "study", "studying", "such", "support", "tell", "than", "that",
  "their", "them", "then", "there", "these", "they", "this", "those", "through",
  "under", "versus", "very", "want", "were", "what", "when", "where", "which",
  "while", "will", "with", "would", "your", "yojana", "national", "central",
  "state", "government", "govt", "amount", "money", "year", "years", "date",
  "last", "documents", "document", "required", "process", "portal", "online",
  "form", "status", "details", "detail", "information", "info",
  // Greetings and small talk. Without these a bare "hello" became a name term,
  // which made the intent look non-empty, so retrieval reported a match, found
  // nothing, and the assistant told the student there were no schemes in the
  // database at all.
  "hello", "hallo", "hey", "heya", "hiya", "namaste", "namaskar", "vanakkam",
  "greetings", "morning", "afternoon", "evening", "night", "good", "please",
  "thanks", "thank", "welcome", "okay", "sure", "yes", "no", "maybe",
  "anyone", "anybody", "someone", "something", "anything", "nothing",
  "hola", "salam", "assalam", "bonjour", "howdy", "sup", "yo",
]);

const MAX_NAME_TERMS = 6;

/** Distinctive tokens worth matching against a scheme's name. */
export function extractNameTerms(message: string): string[] {
  const seen = new Set<string>();
  const terms: string[] = [];
  for (const raw of message.split(/[^A-Za-z0-9.'-]+/)) {
    const t = raw.replace(/^[.'-]+|[.'-]+$/g, "").toLowerCase();
    if (t.length < 4 || NAME_STOPWORDS.has(t) || seen.has(t)) continue;
    if (/^\d+$/.test(t)) continue;
    seen.add(t);
    terms.push(t);
    if (terms.length >= MAX_NAME_TERMS) break;
  }
  return terms;
}

const BENEFIT_KEYWORDS: Record<string, string[]> = {
  loan: [
    "loan", "education loan", "study loan", "vidya lakshmi", "bank loan",
    "borrow", "repay", "emi", "interest subsidy",
  ],
  fee_waiver: [
    "fee waiver", "fee reimbursement", "fee concession", "tuition waiver",
    "free education", "fee exemption",
  ],
  hostel: ["hostel", "accommodation", "boarding", "residential"],
  stipend: ["stipend", "monthly allowance", "contingency"],
  grant: ["grant", "research grant", "seed money", "project funding"],
  scholarship: [
    "scholarship", "scholarships", "merit", "financial aid", "financial support",
    "bursary", "award", "post-matric", "pre-matric", "national means",
  ],
};

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  fellowship: [
    "fellowship", "jrf", "srf", "doctoral", "post-doc", "postdoc",
    "research scholar", "research fellow", "ugc net", "csir", "icmr",
  ],
  sc_st: [
    "sc", "st", "sc/st", "scheduled caste", "scheduled tribe", "dalit",
    "tribal", "adivasi",
  ],
  obc: ["obc", "other backward", "backward class"],
  bc_mbc: ["bc", "mbc", "most backward"],
  ews: ["ews", "economically weaker", "low income", "bpl", "below poverty"],
  minority: [
    "minority", "muslim", "christian", "sikh", "jain", "buddhist", "parsi",
  ],
  girl_women: [
    "girl", "girls", "female", "woman", "women", "lady", "ladies", "daughter",
  ],
  differently_abled: [
    "disabled", "disability", "differently abled", "divyang", "handicapped",
    "blind", "deaf", "pwd",
  ],
  general_merit: ["general category", "merit based", "topper", "rank holder"],
};

const LEVEL_KEYWORDS: Record<string, string[]> = {
  phd: ["phd", "ph.d", "doctoral", "doctorate", "research scholar", "d.phil"],
  pg: [
    "pg", "postgraduate", "post graduate", "post-graduation", "m.tech", "mtech",
    "msc", "m.sc", "ma", "mcom", "mba", "masters", "master's", "mca",
  ],
  ug: [
    "ug", "undergraduate", "under graduate", "b.tech", "btech", "bsc", "b.sc",
    "ba", "bcom", "bba", "bca", "degree", "graduation", "college", "bachelor",
  ],
  professional: [
    "mbbs", "medical", "engineering", "law", "llb", "architecture", "nursing",
    "b.ed", "professional course",
  ],
  diploma: ["diploma", "polytechnic", "iti", "vocational", "certificate course"],
  higher_secondary: [
    "higher secondary", "11th", "12th", "class 11", "class 12", "hsc",
    "intermediate", "plus two", "+2", "puc",
  ],
  secondary: ["secondary", "9th", "10th", "class 9", "class 10", "sslc", "matric"],
  upper_primary: ["upper primary", "6th", "7th", "8th", "middle school"],
  primary: ["primary school", "1st standard", "class 1", "class 2", "class 3"],
};

const GENDER_KEYWORDS: Record<string, string[]> = {
  female: ["girl", "girls", "female", "woman", "women", "lady", "ladies", "daughter", "she", "her"],
  male: ["boy", "boys", "male", "man", "men", "son", "he", "his"],
};

/** DB slug -> spellings a student might type. */
const STATE_KEYWORDS: Record<string, string[]> = {
  "tamil-nadu": ["tamil nadu", "tamilnadu", "chennai", "madras", "coimbatore"],
  kerala: ["kerala", "kochi", "trivandrum", "thiruvananthapuram", "malayalam"],
  karnataka: ["karnataka", "bangalore", "bengaluru", "mysore"],
  "andhra-pradesh": ["andhra pradesh", "andhra", "vijayawada", "visakhapatnam"],
  telangana: ["telangana", "hyderabad"],
  maharashtra: ["maharashtra", "mumbai", "pune", "nagpur"],
  gujarat: ["gujarat", "ahmedabad", "surat", "vadodara"],
  "madhya-pradesh": ["madhya pradesh", "bhopal", "indore"],
  "west-bengal": ["west bengal", "kolkata", "calcutta"],
  bihar: ["bihar", "patna"],
  odisha: ["odisha", "orissa", "bhubaneswar"],
  punjab: ["punjab", "amritsar", "ludhiana"],
  rajasthan: ["rajasthan", "jaipur", "jodhpur"],
  delhi: ["delhi", "new delhi"],
  chhattisgarh: ["chhattisgarh", "raipur"],
  meghalaya: ["meghalaya", "shillong"],
  assam: ["assam", "guwahati"],
  "uttar-pradesh": ["uttar pradesh", "lucknow", "kanpur", "varanasi"],
};

/** Multi-word keywords are matched as substrings; single words need boundaries
 * so that "st" does not fire inside "student" and "ba" not inside "bank". */
function matches(text: string, keyword: string): boolean {
  if (keyword.includes(" ")) return text.includes(keyword);
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![\\w.])${escaped}(?![\\w.])`, "i").test(text);
}

function firstMatch(text: string, table: Record<string, string[]>): string | undefined {
  for (const [key, keywords] of Object.entries(table)) {
    if (keywords.some((kw) => matches(text, kw))) return key;
  }
  return undefined;
}

export function extractIntent(message: string): Intent {
  const text = message.toLowerCase();
  const intent: Intent = {};

  const benefitType = firstMatch(text, BENEFIT_KEYWORDS);
  if (benefitType) intent.benefitType = benefitType;

  const socialCategory = firstMatch(text, CATEGORY_KEYWORDS);
  if (socialCategory) intent.socialCategory = socialCategory;

  const educationLevel = firstMatch(text, LEVEL_KEYWORDS);
  if (educationLevel) intent.educationLevel = educationLevel;

  const gender = firstMatch(text, GENDER_KEYWORDS);
  if (gender) intent.gender = gender;

  const state = firstMatch(text, STATE_KEYWORDS);
  if (state) intent.state = state;

  const nameTerms = extractNameTerms(message);
  if (nameTerms.length) intent.nameTerms = nameTerms;

  return intent;
}

/** True when nothing useful was extracted, so retrieval should not filter. */
export function isEmptyIntent(intent: Intent): boolean {
  return Object.keys(intent).length === 0;
}
