import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-paper-line bg-paper">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Formation</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Education</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((edu, idx) => (
            <motion.article
              key={edu.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="surface p-6 md:p-8"
            >
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt=""
                  className="mb-5 h-14 w-14 rounded-lg border border-paper-line bg-white object-contain p-1"
                />
              )}
              <h3 className="font-display text-xl font-bold text-ink">{edu.degree}</h3>
              <p className="mt-2 font-semibold text-signal-deep">{edu.institution}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-ink-mute">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} />
                  {edu.location}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {edu.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
