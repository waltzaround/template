import { Briefcase, GraduationCap, Wrench } from "lucide-react";

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

export function Resume() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl border-t border-white/10 p-6 py-16"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          About
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Resume
        </h2>
        <p className="mt-4 leading-relaxed text-white/70">
          A short professional summary — who you are, what you focus on, and the
          kind of work you're looking for. Keep it to two or three sentences.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <h3 className="flex items-start gap-2 text-sm font-medium uppercase tracking-wider text-white/40">
          <Briefcase className="h-4 w-4" />
          Experience
        </h3>
        <div className="flex flex-col gap-8 lg:col-span-2">
          {experience.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="relative border-l border-white/10 pl-6"
            >
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
  );
}
