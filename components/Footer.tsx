export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>© 2026 Kunmi. All rights reserved.</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/akinkunmiak123"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
