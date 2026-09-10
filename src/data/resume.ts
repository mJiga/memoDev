/** One position held at a company. */
export interface Role {
  title: string;
  team?: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

/** A company groups every role held there, newest first. */
export interface Company {
  id: string;
  name: string;
  location: string;
  href?: string;
  roles: Role[];
}

export const profile = {
  name: "Guillermo Jimenez Garcia",
  short: "Memo",
  handle: "memo.dev",
  title: "Software Engineer",
  roles: ["Software Engineer", "Developer", "Pianist"],
  tagline: "Concert pianist by day, full-stack engineer by night.",
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
  graduation: "May 2027",
  gpa: "3.96",
  note: "Google Tech Exchange, Spring 2025 · Dean's List every semester",
};

export const leadership = {
  org: "Google Developer Groups El Paso",
  role: "VP of Operations",
  period: "2024 – Present",
};

/** Shown as an icon row in About — the tools, not an exhaustive inventory. */
export const stack = [
  "C++",
  "Python",
  "TypeScript",
  "C#",
  "React",
  ".NET 8",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Google Cloud",
  "Kusto (KQL)",
  "MCP",
];

export const experience: Company[] = [
  {
    id: "microsoft",
    name: "Microsoft",
    location: "Redmond, WA",
    href: "https://www.microsoft.com",
    roles: [
      {
        title: "Software Engineering Intern",
        team: "Click-to-Run (Deployment) — Office Product Group",
        period: "May – Aug 2026",
        summary:
          "Owned three deployment-infrastructure projects end-to-end in a single 12-week internship, context switching between C++, KQL and Microsoft Fabric.",
        highlights: [
          "Cut the Office update validation loop by 99.9% — a week of fleet telemetry down to seconds — with a C++ CLI that mirrors production update behavior locally.",
          "Reverse-engineered a deprecated Office UI surface still driving production traffic, then built a Kusto funnel to A/B test and feature-gate it, improving update speed 30%.",
        ],
        stack: ["C++", "Kusto (KQL)", "Microsoft Fabric"],
      },
      {
        title: "Explorer Intern",
        team: "Collab Services — Office Product Group",
        period: "May – Aug 2025",
        summary:
          "Shipped a Copilot tool in a 3-person pod that surfaces version-level changes inside Office documents.",
        highlights: [
          "Cut document catch-up time 90% with a Copilot tool that surfaces version-level changes inside Office documents.",
          "Raised comparison accuracy 70% by extending Microsoft's internal change-detection logic and tuning prompts for version-comparison tasks.",
        ],
        stack: ["C#", "TypeScript", "Copilot"],
      },
    ],
  },
  {
    id: "hunt",
    name: "Hunt Institute for Global Competitiveness",
    location: "El Paso, TX",
    href: "https://www.utep.edu/hunt-institute/",
    roles: [
      {
        title: "Software Engineering Intern",
        team: "Border economic research",
        period: "Sep 2025 – May 2026",
        summary:
          "Architected and led a 3-person team building HIBRED, a data platform putting border economic indicators in front of policymakers.",
        highlights: [
          "Led a 3-person team shipping HIBRED — React, .NET 8 and PostgreSQL — serving 1,000+ policymakers across 10+ modules of border economic indicators.",
          "Built an AI chat assistant on a self-hosted 7B Ollama model, giving stakeholders natural-language access to live chart data with zero database access.",
        ],
        stack: ["React", ".NET 8", "PostgreSQL"],
      },
    ],
  },
  {
    id: "google",
    name: "Google",
    location: "Remote",
    href: "https://buildyourfuture.withgoogle.com/programs/tech-exchange",
    roles: [
      {
        title: "Student Engineer",
        team: "Tech Exchange, Class of 2025",
        period: "Jan – Apr 2025",
        summary:
          "Selected for Google Tech Exchange — built and shipped a production web app alongside a Google engineer and three teammates.",
        highlights: [
          "Shipped a fitness tracking app to Google Cloud Run — Streamlit over BigQuery, containerized and deployed through GitHub Actions.",
          "Improved query performance 40% with BigQuery partitioning and clustering, and integrated the Gemini API for personalized recommendations.",
        ],
        stack: ["Python", "BigQuery", "Cloud Run"],
      },
    ],
  },
];
