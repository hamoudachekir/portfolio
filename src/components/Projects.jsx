import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data/profile'
import Aurora from './Aurora/Aurora'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad relative overflow-hidden border-t border-code-line bg-code-bg">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40">
        <Aurora colorStops={['#22D3EE', '#818CF8', '#34D399']} amplitude={0.9} blend={0.65} speed={0.6} />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">~/projects</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-code-mute">
            Featured PFE first, then systems that prove agents, APIs, and full-stack delivery.
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
              <div className="border-b border-code-line bg-[#0D1117]/90 p-8 md:border-b-0 md:border-r md:p-10">
                <span className="inline-flex rounded border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mint">
                  {featured.badge}
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-code-mute">{featured.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded border border-white/10 px-2.5 py-1 font-mono text-xs text-code-mute"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-sky hover:underline"
                >
                  <Github size={16} />
                  repository
                </a>
              </div>
              <div className="p-8 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-code-dim">stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-code-mute"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-code-mute">
                  Built at Talan: adaptive voice interviews, integrity checks, LangGraph scoring, and
                  recruiter automation across a Dockerised microservice architecture.
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
              className="terminal flex flex-col p-6"
            >
              <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-code-mute">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/10 px-2.5 py-1 font-mono text-[11px] text-code-dim"
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
                  className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-sky hover:underline"
                >
                  <Github size={15} />
                  code
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
