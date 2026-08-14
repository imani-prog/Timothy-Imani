
import GmailIcon from '../../assets/gmail.png'
import { Sunrise, Sun, MoonStar } from 'lucide-react'

const CV_URL = 'https://drive.google.com/file/d/1B9xZ03vUnV6P8gXd1Mws1CT-PWRfkCa0/view?usp=drive_link'
// const WHATSAPP_URL = 'https://wa.me/254743669252'

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
      className="pt-32 font-serif pb-20 px-5 sm:px-8 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* <img
          src={ProfileImage}
          alt="Timothy Imani"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-6 border-4 border-white dark:border-slate-800 shadow-lg"
        /> */}

        <div
          id="greeting"
          className="flex items-center justify-center gap-2 sm:gap-3 mb-4 text-slate-700 dark:text-slate-200"
        >
          <span className="text-xl sm:text-3xl font-medium text-blue-700 dark:text-blue-400">
            {greetingText}
          </span>
          <GreetingIcon
            size={26}
            className="text-blue-700 dark:text-blue-400 sm:w-8 sm:h-8"
          />
        </div>

        <div className="inline-flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-7xl font-extrabold text-slate-900 dark:text-white leading-none break-words px-2">
            I'm Timothy Imani.
          </h1>

          <div className="mt-5 sm:mt-6 w-full flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="text-base sm:text-2xl font-medium text-slate-700 dark:text-slate-200 uppercase tracking-tight">
              SOFTWARE ENGINEER
            </span>
            <span className="hidden sm:block h-8 sm:h-10 w-0.75 bg-slate-400 dark:bg-slate-600" />
            <span className="text-base sm:text-2xl font-medium text-slate-700 dark:text-slate-200 uppercase tracking-tight">
              CLOUD ENTHUSIAST
            </span>
            <span className="hidden sm:block h-8 sm:h-10 w-0.75 bg-slate-400 dark:bg-slate-600" />
            <span className="text-base sm:text-2xl font-medium text-slate-700 dark:text-slate-200 uppercase tracking-tight">
              WEB DEVELOPER
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#about"
            className="w-[65%] max-w-[320px] sm:w-auto px-7 py-3 rounded-[26px] bg-blue-700 text-white text-lg font-semibold shadow-md hover:bg-blue-800 transition-all duration-200"
          >
            More About Me
          </a>
        </div>

        <div className="mt-18 flex items-center justify-center gap-5">
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
            href="mailto:timothyimani128@gmail.com"
            aria-label="Email"
            className="group w-10 h-10 rounded-full flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            title="Email"
          >
            <img
              src={GmailIcon}
              alt="Gmail Icon"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Preview CV"
            className="group w-10 h-10 rounded-full flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            title="Preview CV"
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