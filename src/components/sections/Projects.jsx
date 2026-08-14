import { projects } from '../../data/projectsData'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5 sm:px-8 bg-white dark:bg-slate-900 font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className=" font-semibold uppercase tracking-wider text-orange-700 dark:text-orange-400">
            Sample Projects
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Things I've Built
          </h3>
        </div>

        <p className="text-center text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Below are some of the projects I've worked on, showcasing my skills in software development, cloud computing, and web development. Each project demonstrates my ability to create well-architected, reliable, and scalable solutions.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/imani-prog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub Icon"
              className="w-4 h-4 object-contain"
            />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  )
}