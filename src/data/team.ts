export interface TeamMember {
  name: string;
  title: string;
  githubUsername: string;
  linkedIn?: string;
  skills?: string[];
  group: "coordinator" | "lead" | "developer" | "tester";
}

export const TEAM: TeamMember[] = [
  // Project Management & Coordination
  {
    name: "Anand S",
    title: "Project Manager",
    githubUsername: "anandsundaramoorthysa",
    linkedIn: "https://www.linkedin.com/in/anandsundaramoorthysa",
    skills: ["Next.js", "TypeScript", "LLM", "PostgreSQL"],
    group: "coordinator",
  },
  {
    name: "Melvin Joshua",
    title: "Technical Coordinator",
    githubUsername: "MelvinJoshua1375",
    linkedIn: "https://www.linkedin.com/in/melvin-joshua",
    skills: ["Project Management", "Research", "Documentation"],
    group: "coordinator",
  },

  // Team Leads
  {
    name: "Keerthana B",
    title: "AI Development Lead",
    githubUsername: "keerthana-balasubramaniyan",
    linkedIn: "https://www.linkedin.com/in/keerthana-balasubramaniyan",
    skills: ["LLM", "RAG", "Vercel AI SDK", "Vector Search"],
    group: "lead",
  },
  {
    name: "Buju Saprio J",
    title: "Engineering Lead",
    githubUsername: "bujusaprio",
    linkedIn: "https://www.linkedin.com/in/buju-saprio-a090b6342",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    group: "lead",
  },
  {
    name: "Kevin Jesu S",
    title: "Engineering Lead",
    githubUsername: "kevinjesu11",
    linkedIn: "https://www.linkedin.com/in/kevin-jesu-10a5062a1",
    skills: ["Next.js", "TypeScript", "REST API"],
    group: "lead",
  },
  {
    name: "Ashwin Kumar S",
    title: "Quality Assurance Lead",
    githubUsername: "Ashwinth2004",
    linkedIn: "https://www.linkedin.com/in/ashwinkumar2004",
    skills: ["Test Planning", "QA", "Bug Tracking"],
    group: "lead",
  },
  {
    name: "Sherina Bibiana P",
    title: "Quality Assurance Lead",
    githubUsername: "sherinabibiana",
    linkedIn: "https://www.linkedin.com/in/sherina1704",
    skills: ["QA", "Test Documentation"],
    group: "lead",
  },
  {
    name: "Florina A",
    title: "Console Development Lead",
    githubUsername: "marianflorina",
    linkedIn: "https://www.linkedin.com/in/marian-florina",
    skills: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    group: "lead",
  },

  // Developer Team
  {
    name: "Janice Melfina J",
    title: "Developer",
    githubUsername: "J-Melfina",
    linkedIn: "https://www.linkedin.com/in/janice-melfina-221ba4286",
    skills: ["Next.js", "TypeScript", "UI Development"],
    group: "developer",
  },
  {
    name: "Amos Benson P",
    title: "Developer",
    githubUsername: "bensonamos",
    linkedIn: "https://www.linkedin.com/in/amos-benson-937386373",
    skills: ["Next.js", "TypeScript", "PostgreSQL"],
    group: "developer",
  },
  {
    name: "Maria Magdalene P",
    title: "Developer",
    githubUsername: "MariaMagdalene291",
    linkedIn: "https://www.linkedin.com/in/maria-magdalene-p-1a6971360",
    skills: ["Next.js", "TypeScript"],
    group: "developer",
  },
  {
    name: "Maria Merline P",
    title: "Developer",
    githubUsername: "MariaMerline291",
    linkedIn: "https://www.linkedin.com/in/maria-merline-p-19296b360",
    skills: ["Next.js", "TypeScript"],
    group: "developer",
  },
  {
    name: "Michael Bevan A",
    title: "Developer",
    githubUsername: "Michaelbevan303",
    linkedIn: "https://www.linkedin.com/in/michael-bevan-a-436b11291",
    skills: ["Next.js", "TypeScript", "REST API"],
    group: "developer",
  },
  {
    name: "Sharlin Tania A",
    title: "Developer",
    githubUsername: "Sharlin-Tania",
    linkedIn: "https://www.linkedin.com/in/sharlin-tania-2251b4422",
    skills: ["Next.js", "TypeScript"],
    group: "developer",
  },

  // Tester Team
  {
    name: "Allwin Andrews J",
    title: "Software Tester",
    githubUsername: "AllwinAndrewsj",
    linkedIn: "https://www.linkedin.com/in/allwin-andrews-j",
    skills: ["Manual Testing", "Bug Reporting"],
    group: "tester",
  },
  {
    name: "Georgia R",
    title: "Software Tester",
    githubUsername: "Georgiaraj30",
    linkedIn: "https://www.linkedin.com/in/georgiaraj",
    skills: ["UI Testing", "Bug Reporting"],
    group: "tester",
  },
  {
    name: "Mark Leander S",
    title: "Software Tester",
    githubUsername: "markleander007",
    linkedIn: "https://www.linkedin.com/in/mark-mark-4a7169333",
    skills: ["Regression Testing", "QA"],
    group: "tester",
  },
  {
    name: "Shahana R",
    title: "Software Tester",
    githubUsername: "ShahanaR06",
    linkedIn: "https://www.linkedin.com/in/shahana-r-05b757328",
    skills: ["Testing", "Documentation"],
    group: "tester",
  },
];

export const TEAM_GROUPS = {
  coordinator: { label: "Project Management & Coordination", members: TEAM.filter((m) => m.group === "coordinator") },
  lead:        { label: "Team Leads",                        members: TEAM.filter((m) => m.group === "lead") },
  developer:   { label: "Developer Team",                    members: TEAM.filter((m) => m.group === "developer") },
  tester:      { label: "Tester Team",                       members: TEAM.filter((m) => m.group === "tester") },
} as const;

/** Hex accent per group — used for initials badge background and card border. */
export const GROUP_ACCENT: Record<TeamMember["group"], string> = {
  coordinator: "#FF9933",
  lead:        "#0A3D91",
  developer:   "#138808",
  tester:      "#5B6B7B",
};

export const GROUP_LABEL: Record<TeamMember["group"], string> = {
  coordinator: "Coordination",
  lead:        "Lead",
  developer:   "Developer",
  tester:      "Tester",
};
