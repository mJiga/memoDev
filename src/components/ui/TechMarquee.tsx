import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiSharp,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiFlask,
  SiStreamlit,
  SiGooglecloud,
  SiGithubactions,
  SiPandas,
  SiNumpy,
  SiPlaywright,
  SiSelenium,
  SiChartdotjs,
  SiD3Dotjs,
  SiDotnet,
} from "react-icons/si";
import { Marquee } from "./Marquee";

interface Tech {
  label: string;
  Icon?: IconType;
}

const stack: Tech[] = [
  { label: "C++", Icon: SiCplusplus },
  { label: "Python", Icon: FaPython },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "C#", Icon: SiSharp },
  { label: "Java", Icon: FaJava },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "React", Icon: FaReact },
  { label: ".NET 8", Icon: SiDotnet },
  { label: "Node.js", Icon: FaNodeJs },
  { label: "Express", Icon: SiExpress },
  { label: "Flask", Icon: SiFlask },
  { label: "Streamlit", Icon: SiStreamlit },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Firebase", Icon: SiFirebase },
  { label: "Docker", Icon: FaDocker },
  { label: "Google Cloud", Icon: SiGooglecloud },
  { label: "GitHub Actions", Icon: SiGithubactions },
  { label: "Kusto (KQL)" },
  { label: "Microsoft Fabric" },
  { label: "MCP" },
  { label: "pandas", Icon: SiPandas },
  { label: "NumPy", Icon: SiNumpy },
  { label: "Playwright", Icon: SiPlaywright },
  { label: "Selenium", Icon: SiSelenium },
  { label: "Chart.js", Icon: SiChartdotjs },
  { label: "D3.js", Icon: SiD3Dotjs },
  { label: "Git", Icon: FaGitAlt },
];

/** Continuously scrolling ribbon of the tools on the resume. */
export const TechMarquee = () => (
  <Marquee speed={52} className="py-1">
    {stack.map(({ label, Icon }) => (
      <span
        key={label}
        className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-paper/80 px-4 py-2 text-[12.5px] font-medium text-muted transition-colors duration-300 hover:border-sage/45 hover:text-sage-deep"
      >
        {Icon && <Icon className="text-[15px]" aria-hidden />}
        {label}
      </span>
    ))}
  </Marquee>
);

export default TechMarquee;
