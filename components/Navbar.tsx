export default function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="text-xl font-bold">
          Kunmi
        </a>

        <div className="flex flex-wrap gap-5 text-sm text-gray-400">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
