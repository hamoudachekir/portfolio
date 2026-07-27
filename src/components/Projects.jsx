import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data/profile'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad border-t border-paper-line bg-paper">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Selected work</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Featured PFE first, then academic systems that prove AI + full-stack delivery.
          </p>
        </motion.div>

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface mt-12 overflow-hidden"
          >
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-ink p-8 text-paper md:p-10">
                <span className="inline-flex rounded-full border border-signal-bright/40 bg-signal/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-signal-bright">
                  {featured.badge}
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-paper/75">{featured.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-paper/80"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-bright hover:underline"
                >
                  <Github size={16} />
                  View repository
                </a>
              </div>
              <div className="border-t border-paper-line p-8 md:border-l md:border-t-0 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-paper-line bg-paper px-3 py-1 text-sm text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-ink-soft">
                  Built at Talan as the final-year engineering project: adaptive voice interviews,
                  integrity checks, LangGraph scoring, and recruiter-facing automation across a
                  Dockerised microservice architecture.
                </p>
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {rest.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="surface flex flex-col p-6"
            >
              <h3 className="font-display text-xl font-bold text-ink">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink-mute ring-1 ring-paper-line"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-signal-deep hover:underline"
                >
                  <Github size={15} />
                  Code
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
