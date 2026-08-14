import GmailIcon from '../../assets/gmail.png'

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

          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 "
            >
              SUBMIT
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">

          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/imani-prog" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://wa.me/+254743669252" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons whatsapp/whatsapp-original.svg"
                alt="WhatsApp"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://www.linkedin.com/in/timothy-imani-5677ba253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://x.com/Imani_dvp" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                alt="Twitter"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://www.reddit.com/user/KindlyAd3304/" target="_blank" rel="noreferrer" aria-label="Reddit" className="flex items-center justify-center transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/reddit/FF4500"
                alt="Reddit"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://t.me/Gladiator_CTO" target="_blank" rel="noreferrer" aria-label="Telegram" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/telegram/26A5E4"
                alt="Telegram"
                className="h-10 w-10 object-contain"
              />
            </a>

            <a href="mailto:timothyimani128@gmail.com" aria-label="Email" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src={GmailIcon}
                alt="Gmail"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a href="https://medium.com/@timothyimani128" target="_blank" rel="noreferrer" aria-label="Medium" className="flex items-center justify-center p-1.5 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/medium/000000"
                alt="Medium"
                className="h-10 w-10 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-700 bg-gray-300">
        <p className="text-center py-6">
          &copy;
          {new Date().getFullYear()} Timothy Imani.
        </p>
      </div>
    </section>
  )
}