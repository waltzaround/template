export function Footer() {
  return (
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
          Made with ❤️ by Firstname Lastname in {new Date().getFullYear()}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
