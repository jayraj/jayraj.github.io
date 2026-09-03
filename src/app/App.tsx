import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  ArrowUp,
  Layers,
  Code2,
  Pencil,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Briefcase,
  User,
  Send,
} from "lucide-react";

// ── PALETTE ───────────────────────────────────────────────────────────────────
const BG       = "#edede9";
const CARD     = "#e4e4de";
const FG       = "#1c1c28";
const FG_MED   = "rgba(28,28,40,0.55)";
const FG_DIM   = "rgba(28,28,40,0.38)";
const FG_FAINT = "rgba(28,28,40,0.22)";
const BORDER   = "rgba(0,0,0,0.08)";
const BORDER_HV= "rgba(0,0,0,0.16)";
const PRIMARY  = "#62b6cb";   // primary buttons
const PRI_HV   = "#4fa8bd";
const ORANGE   = "#F97316";   // Agile PM accent
const TEAL     = "#0e9ab5";   // Frontend accent
const PINK     = "#607CCD";   // UI/UX accent

// ── DATA ──────────────────────────────────────────────────────────────────────
const services = [
  {
    id: "pm",
    icon: <Layers size={22} />,
    title: "Agile Project Management",
    tagline: "On time. In scope. Every sprint.",
    description:
      "I help teams and clients move from idea to delivery with clarity. From discovery workshops to release day, I keep projects on track without the overhead.",
    deliverables: [
      "Product discovery & roadmapping",
      "Sprint planning & backlog grooming",
      "Stakeholder communication",
      "Risk management & retrospectives",
    ],
    accent: ORANGE,
  },
  {
    id: "dev",
    icon: <Code2 size={22} />,
    title: "Frontend Development",
    tagline: "Pixel-perfect. Production-ready.",
    description:
      "I build fast, accessible, and maintainable web interfaces using modern tooling. From design handoff to deployment, the code ships clean.",
    deliverables: [
      "React & TypeScript development",
      "Responsive & accessible UIs",
      "Design system implementation",
      "Performance optimisation",
    ],
    accent: TEAL,
  },
  {
    id: "design",
    icon: <Pencil size={22} />,
    title: "UI/UX Design",
    tagline: "Designed to be used, not just admired.",
    description:
      "I design interfaces grounded in user research and business goals. From low-fi wireframes to high-fidelity prototypes, every decision has a reason.",
    deliverables: [
      "User research & personas",
      "Wireframes & prototyping",
      "High-fidelity UI design",
      "Usability testing & iteration",
    ],
    accent: PINK,
  },
];

const projects = [
  {
    id: 1,
    title: "HealthTrack Platform",
    category: "Agile PM · Web App",
    year: "2024",
    description:
      "Led a cross-functional team of 6 through a 4-month Agile delivery, shipping a patient-facing health dashboard on time and 15% under budget.",
    tags: ["Scrum", "Jira", "Stakeholder Mgmt", "Risk Planning"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=600&fit=crop&auto=format",
    accent: ORANGE,
  },
  {
    id: 2,
    title: "Pulse E-Commerce",
    category: "Frontend Development",
    year: "2024",
    description:
      "Built a performant, accessible storefront in React and TypeScript with a custom component library, reducing load time by 40% versus the legacy site.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=600&fit=crop&auto=format",
    accent: TEAL,
  },
  {
    id: 3,
    title: "Waypoint SaaS App",
    category: "UI/UX Design",
    year: "2023",
    description:
      "End-to-end UX for a B2B logistics SaaS — user interviews, information architecture, wireframes, and a Figma design system adopted by the in-house team.",
    tags: ["Figma", "UX Research", "Prototyping", "Design System"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&h=600&fit=crop&auto=format",
    accent: PINK,
  },
];

const skillGroups = [
  {
    group: "UI/UX Design",
    items: ["Figma", "User Research", "Prototyping", "Design Systems", "Wireframing", "Accessibility"],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Git"],
  },
  {
    group: "Quality Assurance",
    items: ["TDD", "BDD", "Playwright"],
  },
  {
    group: "Project Management",
    items: ["Scrum", "Kanban", "Jira", "Confluence", "Risk Management", "Roadmapping"],
  },
];

const navLinks = ["services", "work", "about", "contact"] as const;

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 140;
      for (const id of ["contact", "about", "work", "services", "home"]) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Onest', sans-serif", background: BG, color: FG }}>

      {/* ── 1. NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(237,237,233,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
            style={{ color: "rgba(28,28,40,0.45)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(28,28,40,0.45)")}
          >
            Jay Raj Bhatta
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-sm capitalize tracking-wide transition-colors"
                style={{ color: activeSection === s ? PRIMARY : "rgba(28,28,40,0.5)" }}
                onMouseEnter={(e) => { if (activeSection !== s) e.currentTarget.style.color = FG; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = activeSection === s ? PRIMARY : "rgba(28,28,40,0.5)"; }}
              >
                {s}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm px-4 py-1.5 transition-all"
              style={{ background: PRIMARY, color: "#fff", borderRadius: "2px" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = PRI_HV)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = PRIMARY)}
            >
              {"Let's Talk"}
            </button>
          </div>

          <button
            className="md:hidden"
            style={{ color: "rgba(28,28,40,0.5)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ background: "rgba(28,28,40,0.3)" }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ width: "min(420px, 85vw)", background: BG, borderLeft: `1px solid ${BORDER}` }}
        >
          <div className="flex flex-col items-start justify-center gap-8 h-full px-10">
            {navLinks.map((s) => {
              const iconMap: Record<string, React.ReactNode> = {
                services: <Layers size={24} />,
                work: <Briefcase size={24} />,
                about: <User size={24} />,
                contact: <Send size={24} />,
              };
              return (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="flex items-center gap-4 text-4xl capitalize font-bold transition-colors"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "rgba(28,28,40,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(28,28,40,0.5)")}
                >
                  {iconMap[s]}
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 2. HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-20 pt-36 overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          <div className="absolute top-0 left-1/2 w-px h-full" style={{ background: "rgba(0,0,0,0.04)" }} />
        </div>
        {/* Glows */}
        <div className="absolute pointer-events-none" style={{ top: "15%", left: "8%", width: "560px", height: "560px", borderRadius: "50%", background: `radial-gradient(circle, rgba(98,182,203,0.18) 0%, transparent 65%)` }} />
        <div className="absolute pointer-events-none" style={{ top: "40%", right: "10%", width: "320px", height: "320px", borderRadius: "50%", background: `radial-gradient(circle, rgba(123,94,255,0.1) 0%, transparent 65%)` }} />

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: PRIMARY, boxShadow: `0 0 8px rgba(98,182,203,0.9)` }} />
            <span className="text-xs tracking-[0.18em] uppercase" style={{ color: "rgba(28,28,40,0.4)" }}>
              Open to new projects · Available now
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold tracking-tight mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2.8rem, 9vw, 8.5rem)", lineHeight: 0.92, color: FG }}
          >
            I design,<br />
            <span style={{ color: PRIMARY }}>build</span> &amp; ship<br />
            digital products.
          </h1>

          <p className="max-w-lg text-base md:text-lg leading-relaxed mb-10" style={{ color: FG_MED }}>
            Freelance specialist combining Agile project management, frontend engineering, and UI/UX design — so your project ships on time, works beautifully, and is built to last.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { label: "Agile PM",      icon: <Layers size={13} />, color: ORANGE },
              { label: "Frontend Dev",  icon: <Code2 size={13} />,  color: TEAL   },
              { label: "UI/UX Design",  icon: <Pencil size={13} />, color: PINK   },
            ].map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-2 px-4 py-2 text-sm"
                style={{ border: `1px solid ${pill.color}40`, color: pill.color, borderRadius: "2px", background: `${pill.color}0d` }}
              >
                {pill.icon} {pill.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-5 flex-wrap">
            <button
              onClick={() => scrollTo("work")}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "rgba(28,28,40,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(28,28,40,0.45)")}
            >
              View My Work <ArrowDown size={13} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all"
              style={{ background: PRIMARY, color: "#fff", borderRadius: "2px" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = PRI_HV)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = PRIMARY)}
            >
              Start a Project <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-8 right-6 md:right-10 hidden md:flex items-center gap-5 text-xs tracking-widest uppercase" style={{ color: FG_FAINT }}>
          <span>19+ Years</span>
          <span style={{ width: "24px", height: "1px", background: "rgba(28,28,40,0.15)", display: "inline-block" }} />
          <span>20+ Projects</span>
          <span style={{ width: "24px", height: "1px", background: "rgba(28,28,40,0.15)", display: "inline-block" }} />
          <span>15+ Clients</span>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section id="services" className="px-6 md:px-10 py-28" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: PRIMARY }}>What I Do</span>
            <h2 className="font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", color: FG }}>
              Three disciplines.<br />One point of contact.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: FG_MED }}>
              Most projects need a designer, a developer, and someone to manage the process. I do all three — which means less overhead, faster decisions, and a consistent vision from brief to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.id}
                className="group relative p-8 flex flex-col transition-all duration-300"
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "4px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${s.accent}50`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
              >
                <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${s.accent}60, transparent)` }} />

                <div className="mb-6 w-10 h-10 flex items-center justify-center" style={{ background: `${s.accent}18`, color: s.accent, borderRadius: "4px" }}>
                  {s.icon}
                </div>
                <h3 className="font-bold mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.15rem", color: FG }}>
                  {s.title}
                </h3>
                <p className="text-xs mb-4 font-medium" style={{ color: s.accent }}>{s.tagline}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: FG_MED }}>{s.description}</p>
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm" style={{ color: FG_DIM }}>
                      <CheckCircle2 size={13} style={{ color: s.accent, marginTop: "3px", flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WORK ── */}
      <section id="work" className="px-6 md:px-10 py-28" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between pb-8 mb-14" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: PRIMARY }}>Portfolio</span>
              <h2 className="font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", color: FG }}>
                Selected Work
              </h2>
            </div>
            <span className="text-sm hidden md:block" style={{ color: FG_FAINT }}>2023 – 2024</span>
          </div>
          <p className="text-center font-bold tracking-tight py-16" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: FG_MED }}>
           Coming soon.........
           </p>
{/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col"
                style={{ border: `1px solid ${BORDER}`, borderRadius: "3px", overflow: "hidden", cursor: "pointer", transition: "border-color 0.25s", background: CARD }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER_HV; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" style={{ background: `radial-gradient(ellipse at 0% 50%, ${project.accent}0c 0%, transparent 55%)` }} />

                <div className="overflow-hidden" style={{ aspectRatio: "16/10", background: "#d8d8d2" }}>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ opacity: 0.75 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.75"; (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>

                <div className="relative flex flex-col gap-3 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: FG }}>{project.title}</h3>
                    <span className="text-xs px-2 py-0.5 flex-shrink-0" style={{ border: `1px solid ${BORDER}`, borderRadius: "2px", color: FG_DIM }}>{project.year}</span>
                  </div>
                  <p className="text-xs font-medium tracking-wide uppercase" style={{ color: project.accent }}>{project.category}</p>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MED }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1" style={{ background: "rgba(28,28,40,0.06)", borderRadius: "2px", color: FG_DIM }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: project.accent }}>
                  <ExternalLink size={16} />
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── 5. ABOUT ── */}
      <section id="about" className="px-6 md:px-10 py-28" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: PRIMARY }}>About</span>
            <h2 className="font-bold mb-8 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.9rem, 3.5vw, 3rem)", color: FG }}>
              One specialist.<br />The full picture.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: FG_MED }}>
              <p>{"I'm Jay Raj Bhatta — a freelance product specialist with 19+ years working across the design, development, and delivery of digital products. I started as a designer, grew into engineering, and eventually into running projects end-to-end."}</p>
              <p>{"What that means for you: I can take a brief from first conversation to final deployment without handing off between agencies, freelancers, or departments. One person, full accountability."}</p>
              <p>{"I work with startups, scale-ups, and established businesses who need a reliable specialist — not a team of ten."}</p>
            </div>

            <div className="flex items-center gap-5 mt-10 flex-wrap">
              {[
                { icon: <Github size={17} />,   label: "GitHub",   href: "https://github.com/jayraj" },
                { icon: <Linkedin size={17} />, label: "LinkedIn", href: "https://www.linkedin.com/in/jayrajbhatta/" },
                { icon: <Mail size={17} />,     label: "Email",    href: "mailto:jayraj.bhatta@gmail.com" },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} aria-label={label} target={label !== "Email" ? "_blank" : undefined} rel="noreferrer"
                  className="transition-colors" style={{ color: "rgba(28,28,40,0.38)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(28,28,40,0.38)")}
                >
                  {icon}
                </a>
              ))}
              <div style={{ width: "1px", height: "16px", background: BORDER }} />
              <a href="#" className="flex items-center gap-1 text-sm transition-colors" style={{ color: PRIMARY }}
                onMouseEnter={(e) => (e.currentTarget.style.color = PRI_HV)}
                onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY)}
              >
                Download CV <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {skillGroups.map((group) => (
              <div key={group.group}>
                <h4 className="text-xs tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(28,28,40,0.35)" }}>{group.group}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1.5 cursor-default transition-all"
                      style={{ border: `1px solid ${BORDER}`, borderRadius: "2px", color: "rgba(28,28,40,0.6)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${PRIMARY}60`; (e.currentTarget as HTMLElement).style.color = FG; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = "rgba(28,28,40,0.6)"; }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-8 mt-2" style={{ borderTop: `1px solid ${BORDER}` }}>
              {[{ value: "19+", label: "Years Exp." }, { value: "20+", label: "Projects" }, { value: "15+", label: "Clients" }].map((stat) => (
                <div key={stat.label}>
                  <div className="font-bold mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "2.4rem", color: FG, lineHeight: 1 }}>{stat.value}</div>
                  <div className="text-xs" style={{ color: "rgba(28,28,40,0.38)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CONTACT ── */}
      <section id="contact" className="px-6 md:px-10 py-28" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden text-center px-8 py-20 md:py-28" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "4px" }}>
            <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(98,182,203,0.18) 0%, transparent 65%)" }} />

            <div className="relative">
              <span className="text-xs tracking-[0.2em] uppercase block mb-4" style={{ color: PRIMARY }}>Contact</span>
              <h2 className="font-bold mb-5 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(2rem, 5vw, 4.5rem)", color: FG }}>
                Ready to start<br />a project?
              </h2>
              <p className="max-w-md mx-auto mb-4 text-base leading-relaxed" style={{ color: FG_MED }}>
                {"I'm currently available for new projects. Whether you need a designer, a developer, or someone to manage the whole thing — let's talk."}
              </p>
              <div className="flex items-center justify-center gap-2 mb-10" style={{ color: "rgba(28,28,40,0.35)" }}>
                <MapPin size={13} />
                <span className="text-xs tracking-wide">Available remotely · Typically replies within 24h</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:jayraj.bhatta@gmail.com"
                  className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all"
                  style={{ background: PRIMARY, color: "#fff", borderRadius: "2px" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = PRI_HV)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = PRIMARY)}
                >
                  <Mail size={14} /> jayraj.bhatta@gmail.com <ArrowUpRight size={13} />
                </a>
                <a href="https://www.linkedin.com/in/jayrajbhatta/" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-8 py-4 text-sm transition-all"
                  style={{ border: `1px solid ${BORDER_HV}`, color: "rgba(28,28,40,0.6)", borderRadius: "2px" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(28,28,40,0.3)"; (e.currentTarget as HTMLElement).style.color = FG; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = BORDER_HV; (e.currentTarget as HTMLElement).style.color = "rgba(28,28,40,0.6)"; }}
                >
                  <Linkedin size={14} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FOOTER ── */}
      <footer className="px-6 md:px-10 py-8" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <span className="text-xs tracking-wide" style={{ color: "rgba(28,28,40,0.3)" }}>
            © 2024 Jay Raj Bhatta. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-xs whitespace-nowrap" style={{ color: "rgba(28,28,40,0.3)" }}>
              Agile PM · Frontend Dev · UI/UX Design <span className="hidden md:inline">· Available Remotely</span>
            </span>
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center justify-center transition-all hover:scale-105"
              style={{ width: "40px", height: "40px", borderRadius: "50%", background: PRIMARY, color: "#fff", flexShrink: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = PRI_HV)}
              onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY)}
              aria-label="Go to Home"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
