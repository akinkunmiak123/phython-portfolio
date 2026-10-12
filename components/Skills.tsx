const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'REST APIs', 'JSON', 'Prisma'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold">Technologies I work with.</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-gray-800 p-6"
            >
              <h3 className="text-xl font-semibold">{skill.category}</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
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
  )
}
