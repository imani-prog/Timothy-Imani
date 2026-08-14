import { Monitor, Server, Database, GitBranch } from 'lucide-react'
import { skillCategories } from '../../data/skillsData'

const ICONS = { Monitor, Server, Database, GitBranch }

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Technical Skills
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            What I Work With
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon]
            return (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 ">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-semibold text-slate-900">
                    {cat.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  {cat.groups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">
                        {group.heading}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700"
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