import { Heart, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-white font-serif dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Me</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Let&apos;s talk about software engineering &amp; building great products.
          </p>
        </div>

        <form className="space-y-5 rounded-2xl border border-gray-200  p-5 dark:border-slate-700 dark:bg-slate-800/60 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent bg-white px-4 py-3 text-sm text-slate-900 transition dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition  dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Project inquiry"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition  dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell me a little about your project..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent text-slate-900 outline-none transition  dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 "
            >
              SUBMIT
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          {/* <div className="mb-3 text-sm text-slate-600 dark:text-slate-300">
            <a href="mailto:timothyimani128@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">
              timothyimani128@gmail.com
            </a>
          </div> */}

          <div className="mb-5 text-sm text-slate-600 dark:text-slate-300">Nairobi, Kenya</div>

          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/imani-prog" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex  items-center justify-center  text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-blue-400">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://www.linkedin.com/in/timothy-imani-5677ba253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center justify-center r text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-blue-400">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="mailto:timothyimani128@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center  text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-blue-400">
              <Mail size={47} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700">
        <p className="text-center text-xs text-slate-500 py-6 dark:text-slate-400">
          {new Date().getFullYear()} Made with <Heart size={12} className="inline-block align-middle" /> by Timothy Imani.
        </p>
      </div>
    </section>
  )
}