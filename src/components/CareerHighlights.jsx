import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/profile'

export default function CareerHighlights() {
  return (
    <section id="career" className="section-pad border-t border-code-line bg-[#0D1219]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">git log --work</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Experience</h2>
          <p className="mt-4 max-w-2xl text-code-mute">
            PFE and internships — shipped systems, not title inflation.
          </p>
        </motion.div>

        <div className="mt-14 space-y-5">
          {experiences.map((exp, idx) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="surface p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-14 w-auto max-w-[7.5rem] rounded-lg border border-white/10 bg-white object-contain px-2 py-1.5"
                    />
                  )}
                  <div>
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">{exp.title}</h3>
                    <p className="mt-1 font-mono text-sm text-sky">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 font-mono text-xs text-code-dim">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-code-mute md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-xs text-code-dim">{exp.stack}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
