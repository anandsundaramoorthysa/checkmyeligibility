export interface TeamMember {
  name: string;
  title: string;
  githubUsername: string;
  group: "coordinator" | "lead" | "developer" | "tester";
}

export const TEAM: TeamMember[] = [
  // Project Management & Coordination
  {
    name: "Anand S",
    title: "Project Manager & Coordinator",
    githubUsername: "anandsundaramoorthysa",
    group: "coordinator",
  },
  {
    name: "Melvin Joshua",
    title: "Project Coordinator",
    githubUsername: "MelvinJoshua1375",
    group: "coordinator",
  },

  // Team Leads
  {
    name: "Keerthana",
    title: "Chatbot Development Lead & All-rounder",
    githubUsername: "keerthana-balasubramaniyan",
    group: "lead",
  },
  {
    name: "Buju Saprio",
    title: "Developer Team Lead",
    githubUsername: "bujusaprio",
    group: "lead",
  },
  {
    name: "Kevin",
    title: "Developer Team Lead",
    githubUsername: "kevinjesu11",
    group: "lead",
  },
  {
    name: "Ashwin",
    title: "Tester Team Lead",
    githubUsername: "Ashwinth2004",
    group: "lead",
  },
  {
    name: "Sherina",
    title: "Tester Team Lead",
    githubUsername: "sherinabibiana",
    group: "lead",
  },
  {
    name: "Florina",
    title: "Dashboard Team Lead & Tester",
    githubUsername: "marianflorina",
    group: "lead",
  },
  {
    name: "Janice Melfina",
    title: "Team Lead",
    githubUsername: "J-Melfina",
    group: "lead",
  },

  // Developer Team
  {
    name: "Amos Benson",
    title: "Developer",
    githubUsername: "bensonamos",
    group: "developer",
  },
  {
    name: "Magdalene",
    title: "Developer",
    githubUsername: "MariaMagdalene291",
    group: "developer",
  },
  {
    name: "Merline",
    title: "Developer",
    githubUsername: "MariaMerline291",
    group: "developer",
  },
  {
    name: "Michael",
    title: "Developer",
    githubUsername: "Michaelbevan303",
    group: "developer",
  },
  {
    name: "Tania",
    title: "Developer",
    githubUsername: "Sharlin-Tania",
    group: "developer",
  },

  // Tester Team
  {
    name: "Allwin",
    title: "Tester",
    githubUsername: "AllwinAndrewsj",
    group: "tester",
  },
  {
    name: "Georgia",
    title: "Tester",
    githubUsername: "Georgiaraj30",
    group: "tester",
  },
  {
    name: "Mark",
    title: "Tester",
    githubUsername: "markleander007",
    group: "tester",
  },
  {
    name: "Shahana",
    title: "Tester",
    githubUsername: "ShahanaR06",
    group: "tester",
  },
];

export const TEAM_GROUPS = {
  coordinator: { label: "Project Management & Coordination", members: TEAM.filter((m) => m.group === "coordinator") },
  lead: { label: "Team Leads", members: TEAM.filter((m) => m.group === "lead") },
  developer: { label: "Developer Team", members: TEAM.filter((m) => m.group === "developer") },
  tester: { label: "Tester Team", members: TEAM.filter((m) => m.group === "tester") },
} as const;
