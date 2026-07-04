import { MeshGradient } from "@paper-design/shaders-react";

import {
  ArrowUpRight,
  Briefcase,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Wrench,
} from "lucide-react";

// Extend Window interface to include our custom property
declare global {
  interface Window {
    openMobileSidebar?: () => void;
  }
}

interface Project {
  title: string;
  date: string;
  whatItIs: string;
  whatIDid: string;
  tags: string[];
  href: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    date: "2025",
    whatItIs:
      "A short description of what this project is and the problem it solves.",
    whatIDid:
      "A short description of your role and the specific work you contributed.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Project Two",
    date: "2024",
    whatItIs:
      "A short description of what this project is and the problem it solves.",
    whatIDid:
      "A short description of your role and the specific work you contributed.",
    tags: ["Next.js", "Postgres", "tRPC"],
    href: "#",
  },
  {
    title: "Project Three",
    date: "2023",
    whatItIs:
      "A short description of what this project is and the problem it solves.",
    whatIDid:
      "A short description of your role and the specific work you contributed.",
    tags: ["Node", "AWS", "Docker"],
    href: "#",
  },
];

interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2024 — Present",
    summary:
      "One or two sentences describing your scope, the team, and the impact of your work.",
    highlights: [
      "Shipped a feature that moved a key metric by X%.",
      "Led the migration of Y, reducing Z by N%.",
    ],
    tags: ["React", "TypeScript", "Node"],
  },
  {
    role: "Software Engineering Intern",
    company: "Previous Company",
    period: "Summer 2023",
    summary:
      "A short description of what you owned during the internship and what you delivered.",
    highlights: [
      "Built an internal tool used by the whole team.",
      "Wrote tests that lifted coverage on a critical service.",
    ],
    tags: ["Python", "Postgres"],
  },
];

interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

const education: Education[] = [
  {
    degree: "B.S. in Computer Science",
    school: "University Name",
    period: "2020 — 2024",
    detail: "GPA X.X · Relevant coursework or honors.",
  },
];

const skillGroups: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "Python", "SQL", "Go"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind"] },
  { group: "Backend", items: ["Node", "Postgres", "tRPC"] },
  { group: "Infra", items: ["AWS", "Docker", "CI/CD"] },
];

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "you@example.com",
    href: "mailto:you@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://www.linkedin.com/",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com/",
    icon: ExternalLink,
  },
];

function App() {
  return (
    <div className="min-h-">
      <section className="relative  w-full overflow-hidden">
        <MeshGradient
          className="absolute inset-0 h-full w-full"
          colors={["#222", "#151515", "#111111"]}
          distortion={2}
          swirl={0.7}
          grainMixer={0.15}
          grainOverlay={0.22}
          speed={0.125}
          rotation={90}
        />

        <div className="relative z-10 flex min-h-[70vh] flex-col">
          {/* <Header title="Your Name" onMobileMenuClick={handleMobileMenuClick} /> */}

          <div className="flex flex-1 items-center justify-center text-center p-12">
            <div className="max-w-2xl">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Firstname Lastname
              </p>
              <p className="mt-2 text-4xl  tracking-tight text-white/70 ">
                is a junior software engineer
              </p>
              <p className="mt-6 max-w-2xl text-lg font-normal tracking-tight text-white/80 ">
                With XX projects under my belt and a degree from YY, I'm a
                full-stack developer with a passion for building scalable and
                efficient web applications.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border flex items-center gap-2 border-white/15 bg-white/5 px-4 py-2 text-sm  text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border flex items-center gap-2 border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  GitHub <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border flex items-center gap-2 border-white/15 bg-white/5 px-4 py-2 text-sm  text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  Resume <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto w-full  p-6  border-white/10  max-w-6xl"
      >
        <div className="flex items-center justify-center gap-4">
          <div>
            <h2 className="mt-3 text-2xl font-semibold text-center tracking-tight sm:text-3xl">
              A few things I have made
            </h2>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex gap-6 "
            >
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wider text-white/25">
                    Image
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-wrap">
                <div className="">
                  <h3 className="flex mb-1 items-center gap-1.5 text-xl font-bold tracking-tight text-white">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </h3>
                  <span className="shrink-0 text-sm text-white/40">
                    {project.date}
                  </span>
                </div>

                <div className="mt-5 grid gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                      About
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {project.whatItIs}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                      What I did
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {project.whatIDid}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="mx-auto w-full max-w-6xl border-t border-white/10 p-6 py-16"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            About
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Curriculum Vitae
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            A short professional summary — who you are, what you focus on, and
            the kind of work you're looking for. Keep it to two or three
            sentences.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/40">
            <Briefcase className="h-4 w-4" />
            Experience
          </h3>
          <div className="flex flex-col gap-8 lg:col-span-2">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="relative border-l border-white/10 pl-6"
              >
                <span className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/40" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-lg font-semibold text-white">
                    {item.role}
                    <span className="font-normal text-white/50">
                      {" · "}
                      {item.company}
                    </span>
                  </h4>
                  <span className="shrink-0 text-sm tabular-nums text-white/40">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.summary}
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm leading-relaxed text-white/60"
                    >
                      <span className="text-white/30">–</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-3">
          <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/40">
            <GraduationCap className="h-4 w-4" />
            Education
          </h3>
          <div className="flex flex-col gap-8 lg:col-span-2">
            {education.map((item) => (
              <div
                key={`${item.degree}-${item.school}`}
                className="relative border-l border-white/10 pl-6"
              >
                <span className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/40" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-lg font-semibold text-white">
                    {item.degree}
                    <span className="font-normal text-white/50">
                      {" · "}
                      {item.school}
                    </span>
                  </h4>
                  <span className="shrink-0 text-sm tabular-nums text-white/40">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-3">
          <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/40">
            <Wrench className="h-4 w-4" />
            Skills
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {skillGroups.map((group) => (
              <div key={group.group}>
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {group.group}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl border-t border-white/10 p-6 py-16"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's work together
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            I'm currently open to new opportunities. The fastest way to reach me
            is by email, or find me on the links below.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/50">
            <MapPin className="h-4 w-4" />
            City, Country · Open to remote
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    {link.label}
                  </p>
                  <p className="truncate text-sm text-white/80">{link.value}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            );
          })}
        </div>
      </section>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">Firstname Lastname</p>
            <p className="mt-1 text-sm text-white/50">
              Software engineer looking for a new role.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="mailto:you@example.com"
              className="text-white/60 transition-colors hover:text-white"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mx-auto w-full max-w-5xl px-6 pb-10">
          <p className="text-xs text-white/40">
            Made with ❤️ by Firstname Lastname in {new Date().getFullYear()}.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
