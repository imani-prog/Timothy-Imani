import { Code2, Database, Cloud } from 'lucide-react'

const ICONS = { Code2, Database, Cloud }

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon]

  return (
    <div className="flex-1 px-6 py-8 text-center sm:text-left">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-5">
        <Icon size={24} />
      </div>

      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
        {service.title}
      </h4>

      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {service.summary}
      </p>

      <ul className="mt-5 space-y-2.5">
        {service.points.map((point) => (
          <li
            key={point}
            className="text-sm text-slate-600 dark:text-slate-300 leading-snug flex gap-2.5"
          >
            <span className="mt-2 w-1 h-1 rounded-full bg-blue-700 dark:bg-blue-400 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
