import type { LangCode } from "@/lib/types";

/**
 * Static UI strings for the chat screen's English/Hindi/Tamil selector.
 * Covers the welcome screen and composer only — bot replies stay in
 * English (the mock engine has no translation backend), matching the
 * app's existing "preview" framing for unfinished coverage.
 */

export const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "ta", label: "தமிழ்" },
];

/** BCP-47 locale used for speech recognition / synthesis per UI language. */
export const SPEECH_LOCALE: Record<LangCode, string> = {
  en: "en-IN",
  hi: "hi-IN",
  ta: "ta-IN",
};

interface Strings {
  welcomeTitle: string;
  welcomeSubtitle: string;
  personas: {
    farmer: string;
    student: string;
    senior: string;
    business: string;
    certificate: string;
  };
  examples: [string, string, string];
  freeNote: string;
  previewNote: string;
  composerPlaceholder: string;
  trustLine: string;
  searchPlaceholder: string;
  searchEmpty: string;
  micStart: string;
  micStop: string;
}

export const STRINGS: Record<LangCode, Strings> = {
  en: {
    welcomeTitle: "What are you entitled to?",
    welcomeSubtitle:
      "Describe your situation in plain words and I'll find the government schemes, benefits, and certificates you may qualify for.",
    personas: {
      farmer: "I'm a farmer",
      student: "I'm a student",
      senior: "I'm a senior citizen",
      business: "I run a small business",
      certificate: "I need a certificate",
    },
    examples: [
      "What schemes help small farmers?",
      "Scholarships for college students",
      "Pension for senior citizens",
    ],
    freeNote: "Free · No login · Never submits applications for you.",
    previewNote:
      "Preview — answers use a small sample of schemes; full, verified coverage is coming soon.",
    composerPlaceholder: "Describe your situation…",
    trustLine:
      "Sample guidance — always verify on the official portal. We never submit applications for you.",
    searchPlaceholder: "Search this conversation…",
    searchEmpty: "No matches yet.",
    micStart: "Start voice input",
    micStop: "Stop voice input",
  },
  hi: {
    welcomeTitle: "आप किसके लिए पात्र हैं?",
    welcomeSubtitle:
      "अपनी स्थिति सरल शब्दों में बताएं और मैं उन सरकारी योजनाओं, लाभों और प्रमाणपत्रों को खोजूंगा जिनके लिए आप पात्र हो सकते हैं।",
    personas: {
      farmer: "मैं एक किसान हूं",
      student: "मैं एक छात्र हूं",
      senior: "मैं एक वरिष्ठ नागरिक हूं",
      business: "मैं एक छोटा व्यवसाय चलाता हूं",
      certificate: "मुझे एक प्रमाणपत्र चाहिए",
    },
    examples: [
      "छोटे किसानों की मदद करने वाली योजनाएं कौन सी हैं?",
      "कॉलेज छात्रों के लिए छात्रवृत्तियां",
      "वरिष्ठ नागरिकों के लिए पेंशन",
    ],
    freeNote: "मुफ़्त · कोई लॉगिन नहीं · आपके लिए कभी आवेदन जमा नहीं करता।",
    previewNote:
      "पूर्वावलोकन — उत्तर योजनाओं के एक छोटे नमूने का उपयोग करते हैं; पूर्ण, सत्यापित जानकारी जल्द आ रही है।",
    composerPlaceholder: "अपनी स्थिति बताएं…",
    trustLine:
      "नमूना मार्गदर्शन — हमेशा आधिकारिक पोर्टल पर सत्यापित करें। हम आपके लिए कभी आवेदन जमा नहीं करते।",
    searchPlaceholder: "इस बातचीत में खोजें…",
    searchEmpty: "अभी तक कोई मिलान नहीं।",
    micStart: "आवाज़ इनपुट शुरू करें",
    micStop: "आवाज़ इनपुट बंद करें",
  },
  ta: {
    welcomeTitle: "நீங்கள் எதற்கு தகுதியானவர்?",
    welcomeSubtitle:
      "உங்கள் சூழ்நிலையை எளிய வார்த்தைகளில் விவரிக்கவும், நீங்கள் தகுதியுள்ள அரசு திட்டங்கள், சலுகைகள் மற்றும் சான்றிதழ்களை நான் கண்டறிகிறேன்.",
    personas: {
      farmer: "நான் ஒரு விவசாயி",
      student: "நான் ஒரு மாணவன்",
      senior: "நான் ஒரு மூத்த குடிமகன்",
      business: "நான் ஒரு சிறு தொழில் நடத்துகிறேன்",
      certificate: "எனக்கு ஒரு சான்றிதழ் தேவை",
    },
    examples: [
      "சிறு விவசாயிகளுக்கு உதவும் திட்டங்கள் என்ன?",
      "கல்லூரி மாணவர்களுக்கான உதவித்தொகைகள்",
      "மூத்த குடிமக்களுக்கான ஓய்வூதியம்",
    ],
    freeNote: "இலவசம் · உள்நுழைவு தேவையில்லை · உங்களுக்காக விண்ணப்பங்களைச் சமர்ப்பிக்காது.",
    previewNote:
      "முன்னோட்டம் — பதில்கள் சிறிய மாதிரி திட்டங்களைப் பயன்படுத்துகின்றன; முழுமையான, சரிபார்க்கப்பட்ட தகவல் விரைவில் வரும்.",
    composerPlaceholder: "உங்கள் சூழ்நிலையை விவரிக்கவும்…",
    trustLine:
      "மாதிரி வழிகாட்டுதல் — அதிகாரப்பூர்வ போர்ட்டலில் எப்போதும் சரிபார்க்கவும். நாங்கள் உங்களுக்காக விண்ணப்பங்களைச் சமர்ப்பிக்க மாட்டோம்.",
    searchPlaceholder: "இந்த உரையாடலில் தேடுங்கள்…",
    searchEmpty: "இன்னும் பொருத்தங்கள் இல்லை.",
    micStart: "குரல் உள்ளீட்டைத் தொடங்கு",
    micStop: "குரல் உள்ளீட்டை நிறுத்து",
  },
};
