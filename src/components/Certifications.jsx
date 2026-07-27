import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications, languages } from '../data/profile'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad border-t border-paper-line bg-[#F1EEE7]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Credentials</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Certifications</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="surface p-6"
            >
              <Award className="text-signal" size={22} />
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{cert.title}</h3>
              <p className="mt-2 text-sm font-semibold text-signal-deep">{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-ink-mute">{cert.date}</p>
              <p className="mt-3 text-sm text-ink-soft">{cert.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-full border border-paper-line bg-paper-elev px-4 py-2 text-sm text-ink-soft"
            >
              <strong className="text-ink">{lang.name}</strong> — {lang.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
