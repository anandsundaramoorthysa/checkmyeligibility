export interface TeamMember {
  name: string;
  title: string;
  githubUsername: string;
  linkedIn?: string;
  group: "coordinator" | "lead" | "developer" | "tester";
}

export const TEAM: TeamMember[] = [
  // Project Management & Coordination
  {
    name: "Anand S",
    title: "Project Manager & Coordinator",
    githubUsername: "anandsundaramoorthysa",
    linkedIn: "https://www.linkedin.com/in/anandsundaramoorthysa",
    group: "coordinator",
  },
  {
    name: "Melvin Joshua",
    title: "Project Coordinator",
    githubUsername: "MelvinJoshua1375",
    linkedIn: "https://www.linkedin.com/in/melvin-joshua",
    group: "coordinator",
  },

  // Team Leads
  {
    name: "Keerthana B",
    title: "Chatbot Development Lead & All-rounder",
    githubUsername: "keerthana-balasubramaniyan",
    linkedIn: "https://www.linkedin.com/in/keerthana-balasubramaniyan",
    group: "lead",
  },
  {
    name: "Buju Saprio J",
    title: "Developer Team Lead",
    githubUsername: "bujusaprio",
    linkedIn: "https://www.linkedin.com/in/buju-saprio-a090b6342",
    group: "lead",
  },
  {
    name: "Kevin Jesu S",
    title: "Developer Team Lead",
    githubUsername: "kevinjesu11",
    linkedIn: "https://www.linkedin.com/in/kevin-jesu-10a5062a1",
    group: "lead",
  },
  {
    name: "Ashwin Kumar S",
    title: "Tester Team Lead",
    githubUsername: "Ashwinth2004",
    linkedIn: "https://www.linkedin.com/in/ashwinkumar2004",
    group: "lead",
  },
  {
    name: "Sherina Bibiana P",
    title: "Tester Team Lead",
    githubUsername: "sherinabibiana",
    linkedIn: "https://www.linkedin.com/in/sherina1704",
    group: "lead",
  },
  {
    name: "Florina A",
    title: "Dashboard Team Lead & Tester",
    githubUsername: "marianflorina",
    linkedIn: "https://www.linkedin.com/in/marian-florina",
    group: "lead",
  },

  // Developer Team
  {
    name: "Janice Melfina J",
    title: "Developer",
    githubUsername: "J-Melfina",
    linkedIn: "https://www.linkedin.com/in/janice-melfina-221ba4286",
    group: "developer",
  },
  {
    name: "Amos Benson P",
    title: "Developer",
    githubUsername: "bensonamos",
    linkedIn: "https://www.linkedin.com/in/amos-benson-937386373",
    group: "developer",
  },
  {
    name: "Maria Magdalene P",
    title: "Developer",
    githubUsername: "MariaMagdalene291",
    linkedIn: "https://www.linkedin.com/in/maria-magdalene-p-1a6971360",
    group: "developer",
  },
  {
    name: "Maria Merline P",
    title: "Developer",
    githubUsername: "MariaMerline291",
    linkedIn: "https://www.linkedin.com/in/maria-merline-p-19296b360",
    group: "developer",
  },
  {
    name: "Michael Bevan A",
    title: "Developer",
    githubUsername: "Michaelbevan303",
    linkedIn: "https://www.linkedin.com/in/michael-bevan-a-436b11291",
    group: "developer",
  },
  {
    name: "Sharlin Tania A",
    title: "Developer",
    githubUsername: "Sharlin-Tania",
    linkedIn: "https://www.linkedin.com/in/sharlin-tania-2251b4422",
    group: "developer",
  },

  // Tester Team
  {
    name: "Allwin Andrews J",
    title: "Tester",
    githubUsername: "AllwinAndrewsj",
    linkedIn: "https://www.linkedin.com/in/allwin-andrews-j",
    group: "tester",
  },
  {
    name: "Georgia R",
    title: "Tester",
    githubUsername: "Georgiaraj30",
    linkedIn: "https://www.linkedin.com/in/georgiaraj",
    group: "tester",
  },
  {
    name: "Mark Leander S",
    title: "Tester",
    githubUsername: "markleander007",
    linkedIn: "https://www.linkedin.com/in/mark-mark-4a7169333",
    group: "tester",
  },
  {
    name: "Shahana R",
    title: "Tester",
    githubUsername: "ShahanaR06",
    linkedIn: "https://www.linkedin.com/in/shahana-r-05b757328",
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
