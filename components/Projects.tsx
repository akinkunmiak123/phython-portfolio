const projects = [
  {
    title: 'Expense Tracker',
    category: 'Full-Stack Python Web Application',
    description:
      'A personal expense management web application built with Flask and PostgreSQL. It allows users to record and manage expenses, analyze spending patterns, visualize financial data, and export filtered expense records to CSV.',
    problem:
      'Tracking personal expenses manually can make it difficult to understand spending habits, compare expenses across months, and identify where money is going.',
    solution:
      'I built a web application using Flask and PostgreSQL to manage expense records and summarize spending. The application includes category and monthly filters, interactive charts, server-side validation, and CSV export.',
    technologies: [
      'Python',
      'Flask',
      'PostgreSQL',
      'Neon',
      'Jinja2',
      'CSS',
      'Chart.js',
      'Psycopg',
      'Vercel',
    ],
    features: [
      'Add, edit, and delete expenses',
      'Running expense total',
      'Spending breakdown by category',
      'Monthly and category filters',
      'Interactive doughnut chart',
      'Monthly spending bar chart',
      'Export filtered records to CSV',
      'Server-side validation and flash messages',
    ],
    github: 'https://github.com/akinkunmiak123/expense-tracker',
    live: 'https://expense-tracker-puce-three-90.vercel.app/',
  },
  {
    title: 'Appointment Booking Web Application',
    category: 'Full-Stack Web Application',
    description:
      'A full-stack appointment booking application that allows users to book appointments, view available time slots, manage bookings, and cancel appointments through a responsive web interface.',
    problem:
      'Manual appointment scheduling can result in double bookings, inconsistent records, and a poor user experience.',
    solution:
      'I developed a web application with a Next.js frontend and a FastAPI backend. The application validates bookings, checks available time slots, and communicates with the backend through HTTP requests.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'REST API',
    ],
    features: [
      'Appointment booking',
      'Date-based available time slots',
      'Double-booking prevention',
      'Appointment listing',
      'Appointment cancellation',
      'Booking success and error messages',
    ],
    github: 'https://github.com/akinkunmiak123/appointment-booking-web',
    live: 'https://appointment-booking-web-liart.vercel.app/',
  },
  {
    title: 'Automated Web Scraper & Excel Report Generator',
    category: 'Python Automation',
    description:
      'A Python automation pipeline that collects book information from an online bookstore, processes the data, maintains historical records, and generates formatted Excel reports.',
    problem:
      'Collecting, cleaning, and reporting information from a website manually can be repetitive and time-consuming.',
    solution:
      'I built an automated pipeline using Requests and BeautifulSoup to collect book data, Pandas to process it, and openpyxl to generate multi-sheet Excel reports. The workflow also supports daily execution using Windows Task Scheduler.',
    technologies: [
      'Python',
      'Requests',
      'BeautifulSoup',
      'Pandas',
      'openpyxl',
      'CSV',
      'Windows Task Scheduler',
    ],
    features: [
      'Automated website data extraction',
      'Data cleaning and processing',
      'CSV data storage and run history',
      'Formatted multi-sheet Excel reports',
      'Summary statistics and charts',
      'Retry logic and error logging',
      'Daily task scheduling',
    ],
    github: 'https://github.com/akinkunmiak123/book-scraper-report',
  },
  {
    title: 'CLI Appointment Booking System',
    category: 'Python Application',
    description:
      'A Python command-line appointment management system designed to handle basic scheduling workflows while preventing double bookings.',
    problem:
      'Manual appointment scheduling can lead to double bookings and inconsistent records.',
    solution:
      'I built a command-line application that lets users book, view, cancel, and manage appointments, with input validation and JSON-based data persistence.',
    technologies: ['Python', 'JSON', 'Git', 'GitHub'],
    features: [
      'Appointment booking',
      'Double-booking prevention',
      'Input validation',
      'Appointment cancellation',
      'Available time slot listing',
      'JSON data persistence',
    ],
    github: 'https://github.com/akinkunmiak123/appointment-booking',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold">Things I&apos;ve built.</h2>

        <div className="mt-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-800 p-8"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                {project.category}
              </p>

              <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
                {project.description}
              </p>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold">The Problem</h4>

                  <p className="mt-3 leading-7 text-gray-400">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">The Solution</h4>

                  <p className="mt-3 leading-7 text-gray-400">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold">Key Features</h4>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <span className="text-white">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold">Technologies</h4>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                  >
                    Live Demo ↗
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
                >
                  View on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
