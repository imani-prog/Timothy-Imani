import { Activity, GitBranch, Cloud, ArrowRight } from 'lucide-react'

const deploymentBadges = [
  {
    name: 'Portfolio (Vercel)',
    badge: 'https://img.shields.io/badge/Vercel-Live-111827?style=for-the-badge&logo=vercel&logoColor=white',
    url: 'https://timothy-imani.vercel.app/',
  },
  {
    name: 'MediLink (Vercel)',
    badge: 'https://img.shields.io/badge/MediLink-Live-0f766e?style=for-the-badge&logo=vercel&logoColor=white',
    url: 'https://medilink-public.vercel.app',
  },
  {
    name: 'SokoGrid (Vercel)',
    badge: 'https://img.shields.io/badge/SokoGrid-Live-b45309?style=for-the-badge&logo=vercel&logoColor=white',
    url: 'https://soko-grid.vercel.app/',
  },
]

const pipelineSteps = [
  {
    title: 'Frontend',
    stack: 'React + Tailwind CSS',
    detail: 'Responsive UI, reusable components, and optimized rendering.',
  },
  {
    title: 'API',
    stack: 'Java + Spring Boot',
    detail: 'REST endpoints, validation, auth, and business logic.',
  },
  {
    title: 'Database',
    stack: 'PostgreSQL / MySQL',
    detail: 'Relational modeling, indexing, and reliable persistence.',
  },
  {
    title: 'Cloud',
    stack: 'Docker + Vercel + Render/GCP',
    detail: 'Containerized deployments with monitoring and CI/CD.',
  },
]

export default function EngineeringDashboard() {
  return (
    <section id="engineering" className="py-16 sm:py-20 px-4 sm:px-8 font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-semibold uppercase tracking-[0.22em] text-orange-700">
            Engineering Dashboard
          </h2>
          <h3 className="mt-3 text-2xl sm:text-4xl font-bold text-slate-900">
            Build Activity, Live Systems, and Architecture
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed px-1">
            A quick view of my development rhythm, deployment health, and how products flow from interface to infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <article className="min-w-0 border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-2 text-slate-900">
              <Activity size={18} className="text-orange-700" />
              <h4 className="text-lg font-semibold">GitHub Activity</h4>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Recent public coding activity and contribution history.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/imani-prog"
                alt="GitHub contribution chart for Timothy Imani"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>

            <a
              href="https://github.com/imani-prog"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <GitBranch size={16} />
              Open GitHub Profile
            </a>
          </article>

          <article className="min-w-0 border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-2 text-slate-900">
              <Cloud size={18} className="text-orange-700" />
              <h4 className="text-lg font-semibold">Deployment Status</h4>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Live project endpoints and deployment readiness snapshots.
            </p>

            <div className="mt-5 space-y-4">
              {deploymentBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 hover:border-orange-300 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-700">{badge.name}</span>
                  <img
                    src={badge.badge}
                    alt={`${badge.name} deployment badge`}
                    className="h-6 sm:h-7 w-auto self-end sm:self-auto"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-8 sm:mt-10 border border-slate-200 bg-white p-5 sm:p-8">
          <div className="flex items-center gap-2 text-slate-900">
            <ArrowRight size={18} className="text-orange-700" />
            <h4 className="text-lg font-semibold">Interactive System Map</h4>
          </div>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Frontend to cloud delivery pipeline with animated request flow.
          </p>

          <div className="mt-6 sm:mt-8">
            <div className="system-map">
              {pipelineSteps.map((step, index) => (
                <div key={step.title} className="system-step">
                  <div className="system-step-card">
                    <div className="system-step-label">{step.title}</div>
                    <p className="system-step-stack">{step.stack}</p>
                    <p className="system-step-detail">{step.detail}</p>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="system-flow" aria-hidden="true">
                      <div className="system-flow-track" />
                      <span className="system-flow-dot" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
