import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { name, image, techStack, description, liveUrl, githubUrl } = project

  return (
    <div className="bg-white border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-semibold text-lg text-slate-900">
          {name}
        </h4>

        {techStack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-700 hover:underline"
            >
              <ExternalLink size={15} />
              Live Site
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-700 hover:underline"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub Icon"
                className="w-4 h-4 object-contain"
              />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}