import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-code-line bg-[#0D1219]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">education/</p>
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
                  className="mb-5 h-14 w-14 rounded-lg border border-white/10 bg-white object-contain p-1"
                />
              )}
              <h3 className="font-display text-xl font-bold text-white">{edu.degree}</h3>
              <p className="mt-2 font-mono text-sm text-sky">{edu.institution}</p>
              <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-code-dim">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {edu.location}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {edu.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-code-mute">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
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
