import { services } from '../../data/servicesData'
import ServiceCard from '../ui/ServiceCard'

export default function Services() {
  return (
    <section id="services" className="py-20 px-5 sm:px-8 bg-white dark:bg-slate-900 font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Services
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            How I Can Help
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            With expertise spanning software engineering, databases, and
            DevOps, I help build systems that are well-architected, reliable
            in production, and built to grow.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
          >
            Let's discuss your project
          </a>
        </div> */}
      </div>
    </section>
  )
}