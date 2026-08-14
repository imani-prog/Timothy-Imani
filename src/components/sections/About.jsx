import { Phone, Mail, GraduationCap, MapPin } from 'lucide-react'
import ProfileImage from '../../assets/Profile.jpeg'
import { skillGroups } from '../../data/skillsData'

const CV_URL = 'https://drive.google.com/file/d/1B9xZ03vUnV6P8gXd1Mws1CT-PWRfkCa0/view?usp=drive_link'
const WHATSAPP_URL = 'https://wa.me/254743669252'

export default function About() {
  return (
    <section id="about" className="py-20 px-5 sm:px-8 bg-white font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-semibold uppercase tracking-[0.22em] text-orange-700">
            About Me
          </h2>
          <h3 className="mt-4 text-3xl sm:text-5xl font-light tracking-tight text-slate-900">
            Let me introduce myself.
          </h3>
        </div>

        <div className="space-y-12">
          <div className="space-y-5 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-slate-600">
              I'm a skilled professional with a diverse technical background. My expertise spans
              <span className="font-semibold text-slate-900"> Software Engineering</span>,
              <span className="font-semibold text-slate-900"> Cloud Systems</span>, and
              <span className="font-semibold text-slate-900"> Web Development</span>.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              I like taking a problem apart until it's simple. Whether it's a slow query, a fragile deployment,
              or an interface that confuses people, my instinct is to trace it back to the root cause rather than
              patch the symptom. That habit shapes how I build software. I design systems end to end, from the
              database schema up through the API to the interface, because understanding every layer is what lets
              me actually fix things instead of guessing. I care about software that holds up under real use:
              code that's easy to reason about, data that stays consistent, and systems that keep running without
              someone babysitting them.
            </p>

          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
            <div>
              <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-900 mb-5">
                Profile
              </h4>
              <p className="text-base leading-relaxed text-slate-600">
                Since beginning my journey as a Software Engineer nearly one year ago, I've worked on
                multiple projects and collaborated with teams to build practical digital solutions. My focus
                is creating applications that solve real problems while maintaining clean architecture,
                performance, and long-term maintainability.
              </p>

              <div className="mt-8 grid sm:grid-cols-[220px_1fr] gap-6 items-center sm:items-start">
                <img
                  src={ProfileImage}
                  alt="Timothy Imani"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto sm:mx-0"
                />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={18} className="mt-0.5 text-orange-700 shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      BSc Computer Science, Machakos University
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 text-orange-700 shrink-0" />
                    <a
                      href="tel:+254743669252"
                      className="text-sm text-slate-600 hover:text-orange-700"
                    >
                      +254 743 669 252
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 text-orange-700 shrink-0" />
                    <a
                      href="mailto:timothyimani128@gmail.com"
                      className="text-sm text-slate-600 hover:text-orange-700"
                    >
                      timothyimani128@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-orange-700 shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      Nairobi, Kenya
                    </span>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="grid grid-cols-3 gap-4 text-center sm:text-left">
                      <div>
                        <div className="text-2xl font-semibold text-orange-600">+5</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-orange-600">6</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Stacks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-orange-600">1+</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-900 mb-4">
                Skills
              </h4>
              <div className="space-y-3 text-base text-slate-600">
                {skillGroups.map((group) => (
                  <div key={group.main} className="leading-relaxed">
                    <span className="font-semibold text-slate-900">{group.main}</span>
                    <span className="text-slate-500"> ({group.related.join(', ')})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3 w-full max-w-[300px] sm:max-w-[420px] mx-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:flex-1 min-w-0 text-center px-2 py-2.5 sm:py-3 rounded-full bg-orange-700 text-white text-sm font-semibold shadow-sm hover:bg-orange-800 transition-all duration-200"
            >
              HIRE ME
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:flex-1 min-w-0 text-center px-2 py-2.5 sm:py-3 rounded-full border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-all duration-200"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}