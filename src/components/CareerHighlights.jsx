import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/profile'

export default function CareerHighlights() {
  return (
    <section id="career" className="section-pad bg-ink text-paper">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-bright">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Career
          </h2>
          <p className="mt-4 max-w-2xl text-paper/70">
            Internships and PFE focused on shipping real products — not padding titles.
          </p>
        </motion.div>

        <div className="mt-14 space-y-6">
          {experiences.map((exp, idx) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt=""
                      className="h-12 w-12 rounded-lg bg-white object-contain p-1"
                    />
                  )}
                  <div>
                    <h3 className="font-display text-xl font-bold md:text-2xl">{exp.title}</h3>
                    <p className="mt-1 text-signal-bright">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-paper/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/75 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-bright" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-xs text-paper/45">{exp.stack}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
