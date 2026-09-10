export interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Role {
  id: string;
  company: string;
  team?: string;
  title: string;
  location: string;
  period: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
}

export const profile = {
  name: "Guillermo Jimenez Garcia",
  short: "Memo",
  handle: "memo.dev",
  title: "Software Engineer",
  roles: ["Software Engineer", "Systems & Telemetry", "AI Tooling", "Pianist"],
  blurb:
    "I build tools that collapse feedback loops — from a C++ CLI that turns a week of Office fleet telemetry into seconds, to an MCP server that runs my finances in plain English.",
  location: "El Paso, TX",
  email: "guillermojiga10@gmail.com",
  phone: "+1 (915) 801-8073",
  github: "https://github.com/mJiga",
  linkedin: "https://www.linkedin.com/in/guillermojiga",
  status: "Open to Summer 2027 SWE roles",
};

export const education = {
  school: "The University of Texas at El Paso",
  degree: "B.S. Computer Science",
  graduation: "Expected May 2027",
  gpa: "3.96",
  gpaLabel: "Major GPA",
  coursework: [
    "Data Structures & Algorithms",
    "Computer Architecture",
    "Operating Systems",
    "Advanced OOP",
    "Database Systems",
  ],
  exchange: {
    name: "Google Tech Exchange",
    term: "Spring 2025",
    topics: [
      "Algorithms & System Design",
      "Software Engineering with GenAI",
      "Careers in Tech",
    ],
  },
  honors: [
    "College of Engineering Dean's List — Fall 2023 to Spring 2026",
    "Meta Front-End Developer Professional Certificate",
    "Google Introduction to Generative AI",
  ],
};

export const metrics: Metric[] = [
  { value: 99.9, suffix: "%", label: "Faster update validation loop" },
  { value: 1000, suffix: "+", label: "Policymakers served by HIBRED" },
  { value: 3, suffix: ".96", label: "Major GPA at UTEP" },
  { value: 20, suffix: "+", label: "Events led with GDG El Paso" },
];

export const experience: Role[] = [
  {
    id: "msft-swe",
    company: "Microsoft",
    team: "Click-to-Run (Deployment) — Office Product Group",
    title: "Software Engineering Intern",
    location: "Redmond, WA",
    period: "May – Aug 2026",
    start: "2026-05",
    end: "2026-08",
    summary:
      "Owned three deployment-infrastructure projects end-to-end in a single 12-week internship, context switching between C++, KQL and Microsoft Fabric.",
    highlights: [
      "Cut the Office update validation feedback loop by 99.9% — from a week of fleet telemetry down to seconds — with a C++ CLI that mirrors production update behavior locally.",
      "Reverse-engineered a deprecated Office UI surface still driving production update traffic, then built a Kusto telemetry funnel to A/B test and feature-gate it before rollout, improving update speed 30%.",
      "Unlocked Copilot adoption and build-currency insights by engineering a Fabric ETL pipeline that joins two previously incompatible telemetry datasets on mismatched keys.",
    ],
    stack: ["C++", "Kusto (KQL)", "Microsoft Fabric", "Telemetry", "A/B Testing"],
    href: "https://www.microsoft.com",
  },
  {
    id: "hunt",
    company: "Hunt Institute for Global Competitiveness",
    team: "Border economic research",
    title: "Software Engineering Intern",
    location: "El Paso, TX",
    period: "Sep 2025 – May 2026",
    start: "2025-09",
    end: "2026-05",
    summary:
      "Architected and led a 3-person team building HIBRED, a data platform putting border economic indicators in front of policymakers.",
    highlights: [
      "Led a 3-person team shipping HIBRED — React/TypeScript, .NET 8 and PostgreSQL — serving 1,000+ policymakers across 10+ modules of border economic indicators.",
      "Built an AI chat assistant on a self-hosted 7B-parameter Ollama LLM, giving stakeholders natural-language access to live chart data with zero database access, rate limits or token quotas.",
      "Eliminated SQL injection risk across every public endpoint by replacing dynamic queries with a whitelist-based parameterization pattern for all indicator and geography filters.",
      "Automated wage data collection with a Python/pandas ETL pipeline, cutting processing time 95% and inconsistencies 30% — published in the Institute newsletter and a white paper.",
    ],
    stack: ["React", "TypeScript", ".NET 8", "PostgreSQL", "Python", "Ollama"],
    href: "https://www.utep.edu/hunt-institute/",
  },
  {
    id: "msft-explorer",
    company: "Microsoft",
    team: "Collab Services — Office Product Group",
    title: "Explorer Intern",
    location: "Redmond, WA",
    period: "May – Aug 2025",
    start: "2025-05",
    end: "2025-08",
    summary:
      "Shipped a Copilot tool in a 3-person pod that surfaces version-level changes inside Office documents.",
    highlights: [
      "Cut document catch-up time 90% and boosted user productivity 70% with a Copilot tool surfacing version-level changes in Office documents.",
      "Raised document comparison accuracy 70% by extending Microsoft's internal change-detection logic and optimizing LLM prompts for version-comparison tasks.",
      "Surfaced 8 critical product pain points from a 7-participant user study, shaping feature prioritization through weekly Scrum with cross-functional teams.",
      "Hardened comparison reliability in C# and TypeScript via TDD, unit, integration and stress tests — catching edge cases before rollout.",
    ],
    stack: ["C#", "TypeScript", "Copilot", "LLM Prompting", "TDD"],
    href: "https://www.microsoft.com",
  },
  {
    id: "google",
    company: "Google",
    team: "Tech Exchange, Class of 2025",
    title: "Student Engineer",
    location: "Remote",
    period: "Jan – Apr 2025",
    start: "2025-01",
    end: "2025-04",
    summary:
      "Selected for Google Tech Exchange — built and shipped a production web app alongside a Google engineer and three teammates.",
    highlights: [
      "Shipped a fitness tracking web app to Google Cloud Run — a Streamlit UI over BigQuery, containerized with Docker and deployed through GitHub Actions CI/CD.",
      "Improved query performance 40% via BigQuery partitioning and clustering, and integrated the Gemini API for personalized fitness recommendations.",
    ],
    stack: ["Python", "BigQuery", "Cloud Run", "Docker", "GitHub Actions", "Gemini API"],
    href: "https://buildyourfuture.withgoogle.com/programs/tech-exchange",
  },
];

export const leadership = {
  org: "Google Developer Groups",
  role: "Vice President of Operations",
  location: "El Paso, TX",
  period: "Jan 2024 – Present",
  detail:
    "Grew CS department event attendance 30% by diversifying programming into hackathons, speaker series, industry panels and resume workshops, leading a 10-person team across 20+ events.",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C++", "Python", "Java", "C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Frameworks & Data",
    items: [
      "React",
      "Node.js",
      "Express",
      ".NET 8",
      "Flask",
      "Streamlit",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    group: "Platform & Tooling",
    items: [
      "Docker",
      "GitHub Actions",
      "Google Cloud",
      "BigQuery",
      "Cloud Run",
      "Microsoft Fabric",
      "Kusto (KQL)",
      "IIS",
      "Telemetry",
    ],
  },
  {
    group: "Libraries",
    items: ["Playwright", "Selenium", "pandas", "NumPy", "Chart.js", "D3.js"],
  },
  {
    group: "AI & Agentic",
    items: [
      "Model Context Protocol",
      "Claude Code",
      "Copilot",
      "Ollama",
      "Codex",
      "Cursor",
      "Gemini",
    ],
  },
];
