import { ArrowUpRight } from "lucide-react";

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

export function Projects() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-6xl border-white/10 p-6"
    >
      <div className="flex items-center justify-center gap-4">
        <div>
          <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
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
            className="group relative flex gap-6"
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
              <div>
                <h3 className="mb-1 flex items-center gap-1.5 text-xl font-bold tracking-tight text-white">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
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
  );
}
