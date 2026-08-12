const CV_URL = '/assets/Timothy_Imani_CV.pdf'

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-5 sm:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/assets/Profile.png"
          alt="Timothy Imani"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-6 border-4 border-white dark:border-slate-800 shadow-lg"
        />

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          I'm Timothy Imani
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Software Engineer, Database Administrator, and Web Developer — a tech
          enthusiast building scalable web apps, reliable data systems, and
          smooth user experiences.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Let's Connect
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/timothy-imani-5677ba253"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group w-10 h-10 rounded-full flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            title="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn Icon"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/imani-prog"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group w-10 h-10 rounded-full flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            title="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub Icon"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="mailto:timothyimani6@gmail.com"
            aria-label="Email"
            className="group w-10 h-10 rounded-full flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            title="Email"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gmail/gmail-original.svg"
              alt="Gmail Icon"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href={CV_URL}
            download
            aria-label="Download CV"
            className="group w-10 h-10 rounded-full flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            title="Download CV"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt="Download CV Icon"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </section>
  )
}