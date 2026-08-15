import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      return
    }

    formData.append('access_key', accessKey)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-white font-serif text-slate-900">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-orange-600 font-bold tracking-tight">Contact Me</h2>
          <p className="mt-4 text-base sm:text-lg font-semibold text-slate-600">
            Let&apos;s talk about software engineering &amp; building great products.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 border border-gray-200  p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent bg-white px-4 py-3 text-sm text-slate-900 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project inquiry"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell me a little about your project..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent text-slate-900 outline-none transition"
            />
          </div>

          <div className="pt-2 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-800 disabled:opacity-60"
            >
              {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
            </button>

            {status === 'sent' && (
              <p className="text-sm text-green-600 font-medium">
                Message sent — I&apos;ll get back to you soon!
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 font-medium">
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </div>
        </form>

        <div className="mt-8 text-center">

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <a href="https://github.com/imani-prog" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://wa.me/+254743669252" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/whatsapp/25D366"
                alt="WhatsApp"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://www.linkedin.com/in/timothy-imani-5677ba253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://x.com/Imani_dvp" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                alt="Twitter"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://www.reddit.com/user/KindlyAd3304/" target="_blank" rel="noreferrer" aria-label="Reddit" className="flex shrink-0 items-center justify-center transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/reddit/FF4500"
                alt="Reddit"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://t.me/Gladiator_CTO" target="_blank" rel="noreferrer" aria-label="Telegram" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/telegram/26A5E4"
                alt="Telegram"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>

            <a href="https://medium.com/@timothyimani128" target="_blank" rel="noreferrer" aria-label="Medium" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/medium/000000"
                alt="Medium"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}