import { MeshGradient } from "@paper-design/shaders-react";
import { Download, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative m-6 rounded-3xl border-2 border-white/10 overflow-hidden mb-0">
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

      <div className="relative z-10 flex min-h-[70vh] flex-col ">
        <div className="flex flex-1 items-center justify-center p-12 text-center">
          <div className="max-w-2xl">
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Firstname Lastname
            </p>
            <p className="mt-2 text-4xl tracking-tight text-white/70">
              is a junior software engineer
            </p>
            <p className="mt-6 max-w-2xl text-lg font-normal tracking-tight text-white/80">
              With XX projects under my belt and a degree from YY, I'm a
              full-stack developer with a passion for building scalable and
              efficient web applications.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                Resume
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
