export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Contact Me</h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300">
          Let's talk about software engineering & building great products!
        </p>

        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Don't like forms?{' '}
          <a
            href="mailto:timothyimani6@gmail.com"
            className="text-blue-400 hover:underline"
          >
            Drop me an email
          </a>
          .
        </p>

        <a
          href="mailto:timothyimani6@gmail.com"
          className="block mt-4 text-lg sm:text-xl font-medium text-white hover:text-blue-400 transition-colors"
        >
          timothyimani6@gmail.com
        </a>

        <p className="mt-3 text-sm text-slate-400">Nairobi, Kenya</p>

        <div className="flex items-center justify-center gap-5 mt-8">
          <a
            href="https://github.com/imani-prog"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub Icon"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/timothy-imani-5677ba253"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn Icon"
              className="w-5 h-5 object-contain"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="text-center text-xs text-slate-500 py-6">
          © {new Date().getFullYear()} Made with 🤍 by Timothy Imani.
        </p>
      </div>
    </section>
  )
}