import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../../data/experienceData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-5 sm:px-8 font-serif">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-semibold uppercase tracking-wider text-orange-700">
            Experience
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Where I've Worked
          </h3>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-14">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-orange-700 flex items-center justify-center">
                  <Briefcase size={18} className="text-white" />
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {job.role}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                    <Calendar size={13} />
                    {job.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-orange-700 dark:text-orange-400 mb-4">
                  {job.company}
                </p>

                <ul className="space-y-2.5">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex gap-2.5"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}