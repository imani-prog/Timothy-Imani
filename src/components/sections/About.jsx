export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-5 sm:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          About Me
        </h2>
        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Building Reliable Software, End to End
        </h3>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          As a Software Engineer and Web Developer with a Database
          Administrator mindset, I enjoy designing full-stack solutions that
          are fast, reliable, and easy to use. I build APIs, craft responsive
          interfaces, and tune databases and queries for performance and
          integrity. As an entry-level professional, I thrive on learning new
          technologies, exploring better architectures, and improving system
          efficiency. I am a tech enthusiast who loves solving complex
          problems and turning ideas into products.
        </p>

        <blockquote className="mt-8 border-l-4 border-blue-700 pl-4 text-left max-w-xl mx-auto">
          <p className="italic text-slate-700 dark:text-slate-300">
            "Data is not information. Information is not knowledge. Knowledge
            is not wisdom."
          </p>
          <cite className="block mt-2 text-sm text-slate-500 dark:text-slate-400 not-italic">
            — Clifford Stoll
          </cite>
        </blockquote>
      </div>
    </section>
  )
}