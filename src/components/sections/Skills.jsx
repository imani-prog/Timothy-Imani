import { Monitor, Server, Database, GitBranch } from 'lucide-react'
import { skillCategories } from '../../data/skillsData'

const ICONS = { Monitor, Server, Database, GitBranch }

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 sm:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Technical Skills
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            What I Work With
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon]
            return (
              <div
                key={cat.title}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {cat.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  {cat.groups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2">
                        {group.heading}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}