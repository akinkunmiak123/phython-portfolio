export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Software Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          I build software that
          <span className="block text-gray-400">solves real problems.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I&apos;m Kunmi Akinnitire, a software developer focused on building
          practical applications and clean, user-friendly digital experiences.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:border-gray-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
 