import CodingAnimation from '../ui/CodingAnimation'
import { Sunrise, Sun, MoonStar } from 'lucide-react'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return { text: 'Good Morning', Icon: Sunrise}
  if (hour < 18) return { text: 'Good Afternoon', Icon: Sun }
  return { text: 'Good Evening', Icon: MoonStar }
}

export default function Hero() {
  const { text: greetingText, Icon: GreetingIcon} = getGreeting()

  return (
    <section
      id="home"
      className="pt-24 pb-12 px-4 sm:pt-32 sm:pb-20 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          id="greeting"
          className="flex items-center justify-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 text-slate-700"
        >
          <span className="text-lg sm:text-3xl font-medium text-orange-600">
            {greetingText}
          </span>
          <GreetingIcon
            size={22}
            className="text-orange-700 sm:w-8 sm:h-8"
          />
        </div>

        <div className="inline-flex flex-col items-center w-full">
          <h1 className="text-[2.25rem] leading-[1.05] tracking-[-0.04em] sm:text-7xl font-extrabold text-slate-900 break-words px-2">
            I'm Timothy Imani.
          </h1>

          <div className="mt-4 w-full flex flex-col items-center justify-center gap-1 sm:mt-6 sm:flex-row sm:gap-4">
            <span className="text-[0.72rem] sm:text-2xl font-medium text-slate-700 uppercase tracking-tight">
              SOFTWARE ENGINEER
            </span>
            <span className="hidden sm:block h-8 sm:h-10 w-0.75 bg-slate-400" />
            <span className="text-[0.72rem] sm:text-2xl font-medium text-slate-700 uppercase tracking-tight">
              CLOUD ENTHUSIAST
            </span>
            <span className="hidden sm:block h-8 sm:h-10 w-0.75 bg-slate-400" />
            <span className="text-[0.72rem] sm:text-2xl font-medium text-slate-700 uppercase tracking-tight">
              WEB DEVELOPER
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-8">
          <CodingAnimation />
        </div>

        <div className="mt-5 flex justify-center sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <a
            href="#about"
            className="w-full max-w-[220px] px-5 py-3 rounded-[26px] bg-orange-600 text-white text-base font-semibold shadow-md hover:bg-orange-800 transition-all duration-200 sm:w-auto sm:max-w-[320px] sm:px-7 sm:py-3 sm:text-lg"
          >
            More About Me
          </a>
        </div>

        <div className="mt-5 text-center sm:mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <a href="https://github.com/imani-prog" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://wa.me/+254743669252" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/whatsapp/25D366"
                alt="WhatsApp"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://www.linkedin.com/in/timothy-imani-5677ba253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://x.com/Imani_dvp" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                alt="Twitter"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://www.reddit.com/user/KindlyAd3304/" target="_blank" rel="noreferrer" aria-label="Reddit" className="flex shrink-0 items-center justify-center transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/reddit/FF4500"
                alt="Reddit"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>
            <a href="https://t.me/Gladiator_CTO" target="_blank" rel="noreferrer" aria-label="Telegram" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/telegram/26A5E4"
                alt="Telegram"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>

            <a href="https://medium.com/@timothyimani128" target="_blank" rel="noreferrer" aria-label="Medium" className="flex shrink-0 items-center justify-center p-1 transition hover:scale-105">
              <img
                src="https://cdn.simpleicons.org/medium/000000"
                alt="Medium"
                className="h-6 w-6 object-contain sm:h-9 sm:w-9"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}