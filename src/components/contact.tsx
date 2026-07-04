import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";

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
    value: "username",
    href: "https://www.linkedin.com/",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "username",
    href: "https://github.com/",
    icon: ExternalLink,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl border-t border-white/10 p-6 py-12"
    >
      <div className="max-w-2xl">
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let's work together
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-white/70">
          I'm currently open to new opportunities. The fastest way to reach me
          is by email, or find me through the links below.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/50">
          <MapPin className="h-4 w-4" />
          Wellington, New Zealand
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
          >
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                {link.label}
              </p>
              <p className="truncate text-sm text-white/80">{link.value}</p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
        ))}
      </div>
    </section>
  );
}
