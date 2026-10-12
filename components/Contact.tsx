export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold">Let&apos;s build something.</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Have a project, idea, or opportunity you&apos;d like to discuss? Feel
          free to get in touch.
        </p>

        <a
          href="mailto:tetisimiak@gmail.com"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
