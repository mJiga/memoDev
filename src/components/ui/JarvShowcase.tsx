import { FC, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpress, SiNotion } from "react-icons/si";

interface TechItem {
  label: string;
  icon?: ReactNode;
  highlight?: boolean;
}

const techStack: TechItem[] = [
  { label: "MCP", highlight: true },
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "Express", icon: <SiExpress /> },
  { label: "Notion", icon: <SiNotion /> },
  { label: "LLM Agent" },
];

const JarvShowcase: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      isSage: Math.random() < 0.15,
    });

    const particles = Array.from({ length: 60 }, createParticle);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height
        ) {
          Object.assign(p, createParticle());
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isSage
          ? `rgba(129, 178, 154, ${p.opacity * 0.25})`
          : `rgba(61, 64, 91, ${p.opacity * 0.1})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(129, 178, 154, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  const nodeVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const arrowVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <style>{`
        @keyframes jarv-typing{from{width:0}to{width:100%;border-right-color:transparent}}
        @keyframes jarv-blink{50%{border-color:transparent}}
        @keyframes jarv-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        @keyframes jarv-dot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 4px);opacity:0}}
        @keyframes jarv-drift{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}}
        .jarv-typing-text{overflow:hidden;white-space:nowrap;border-right:2px solid transparent;width:0;display:inline-block;max-width:100%}
        .jarv-type{border-right-color:#81B29A;animation:jarv-typing 2s steps(34) .6s forwards,jarv-blink .6s step-end infinite}
      `}</style>

      <div
        ref={wrapperRef}
        className="relative bg-white rounded-2xl overflow-hidden flex items-center justify-center"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0"
        />

        {/* Ambient glows */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.04] pointer-events-none z-0 -top-[150px] -right-[80px] bg-sage"
          style={{ animation: "jarv-drift 15s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.04] pointer-events-none z-0 -bottom-[150px] -left-[80px] bg-accent-hover"
          style={{ animation: "jarv-drift 18s ease-in-out infinite reverse" }}
        />

        <div
          ref={ref}
          className="relative z-[1] w-full px-5 py-10 md:px-8 flex flex-col items-center gap-6 md:gap-9"
        >
          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-sage/10 text-sage px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-[1.2px] uppercase mb-2">
              Featured Project
            </div>
            <div className="flex items-center justify-center gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center font-mono font-medium text-lg text-white shadow-[0_0_30px_rgba(129,178,154,0.15)]">
                J
              </div>
              <h3 className="font-serif text-[42px] md:text-5xl tracking-tight bg-gradient-to-br from-primary to-sage bg-clip-text text-transparent">
                Jarv
              </h3>
            </div>
            <p className="text-sm text-muted font-light tracking-wide leading-relaxed max-w-[480px] mx-auto">
              Personal finance{" "}
              <em className="text-sage not-italic font-medium">MCP server</em> &
              LLM agent that converts natural language into structured financial
              commands, powered by{" "}
              <em className="text-sage not-italic font-medium">Notion</em>.
            </p>
          </motion.div>

          {/* Flow */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2 md:gap-0">
            {/* Input node */}
            <motion.div
              className="relative p-5 rounded-[14px] bg-bone border border-border/50 w-full max-w-[280px] md:w-auto md:max-w-none md:min-w-[200px] shrink-0"
              variants={nodeVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="text-[10px] uppercase tracking-[2px] text-muted mb-2.5 font-medium">
                Natural Language
              </div>
              <div className="font-mono text-xs leading-[1.7] font-light text-primary">
                <span
                  className={`jarv-typing-text ${inView ? "jarv-type" : ""}`}
                >
                  "spent $42 on groceries at HEB"
                </span>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className="flex items-center px-1.5 shrink-0 rotate-90 md:rotate-0"
              variants={arrowVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="relative w-9 h-0.5 bg-gradient-to-r from-border to-sage">
                <div
                  className="absolute w-1 h-1 bg-sage rounded-full -top-[1px] shadow-[0_0_8px_#81B29A]"
                  style={{ animation: "jarv-dot 1.5s ease-in-out infinite" }}
                />
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-sage border-y-[5px] border-y-transparent -ml-px" />
            </motion.div>

            {/* MCP node */}
            <motion.div
              className="relative p-5 rounded-[14px] bg-gradient-to-br from-sage/[0.06] to-accent-hover/[0.04] border border-sage/20 w-full max-w-[280px] md:w-auto md:max-w-none md:min-w-[180px] text-center shrink-0"
              variants={nodeVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: 1.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="inline-flex items-center gap-1.5 bg-sage/10 border border-sage/15 px-2.5 py-1 rounded-md font-mono text-[11px] text-sage mb-2.5">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-sage"
                  style={{ animation: "jarv-pulse 2s ease infinite" }}
                />
                MCP Protocol
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-sage-dark mb-2.5 font-medium">
                Jarv Server
              </div>
              <div className="font-mono text-xs leading-[1.7] font-light text-primary">
                <span className="text-accent-hover">tool:</span>{" "}
                <span className="text-sage-dark">add_transaction</span>
                <br />
                <span className="text-accent-hover">amount:</span>{" "}
                <span className="text-[#b5724a]">42.00</span>
                <br />
                <span className="text-accent-hover">category:</span>{" "}
                <span className="text-[#b5724a]">groceries</span>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className="flex items-center px-1.5 shrink-0 rotate-90 md:rotate-0"
              variants={arrowVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <div className="relative w-9 h-0.5 bg-gradient-to-r from-border to-sage">
                <div
                  className="absolute w-1 h-1 bg-sage rounded-full -top-[1px] shadow-[0_0_8px_#81B29A]"
                  style={{ animation: "jarv-dot 1.5s ease-in-out infinite" }}
                />
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-sage border-y-[5px] border-y-transparent -ml-px" />
            </motion.div>

            {/* Output node */}
            <motion.div
              className="relative p-5 rounded-[14px] bg-bone border border-border/50 w-full max-w-[280px] md:w-auto md:max-w-none md:min-w-[200px] shrink-0"
              variants={nodeVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: 2.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="text-[10px] uppercase tracking-[2px] text-muted mb-2.5 font-medium">
                Notion Database
              </div>
              <div className="font-mono text-xs leading-[1.7] font-light text-primary">
                <span className="text-accent-hover">status:</span>{" "}
                <span className="text-sage-dark">&#10003; recorded</span>
                <br />
                <span className="text-accent-hover">db:</span>{" "}
                <span className="text-[#b5724a]">Chase Sapphire</span>
                <br />
                <span className="text-accent-hover">balance:</span>{" "}
                <span className="text-[#b5724a]">updated</span>
              </div>
            </motion.div>
          </div>

          {/* Tech stack */}
          <motion.div
            className="flex gap-2 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {techStack.map(({ label, icon, highlight }) => (
              <span
                key={label}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300 hover:border-sage-dark hover:text-sage hover:shadow-[0_0_20px_rgba(129,178,154,0.1)] ${
                  highlight
                    ? "border-sage/25 text-sage bg-sage/5"
                    : "border-border bg-white text-muted"
                }`}
              >
                {icon}
                {label}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            <a
              href="https://github.com/mJiga/jarv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-medium no-underline transition-all duration-300 bg-sage text-white shadow-[0_4px_20px_rgba(129,178,154,0.15)] hover:shadow-[0_4px_30px_rgba(129,178,154,0.25)] hover:-translate-y-px"
            >
              <FaGithub />
              View Source
            </a>
            <a
              href="https://www.notion.so/memoo0/jarv-template-2e54abe19ef5802fb3fcce0017006fc1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-medium no-underline transition-all duration-300 text-muted border border-border hover:border-muted hover:text-primary hover:-translate-y-px"
            >
              <SiNotion />
              Notion Template
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default JarvShowcase;
