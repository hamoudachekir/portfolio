import { motion } from 'framer-motion'
import { focusAreas, profile } from '../data/profile'

export default function Overview() {
  return (
    <section id="overview" className="section-pad border-t border-code-line bg-code-bg">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="eyebrow">readme.md</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">About</h2>
          <p className="mt-5 text-lg leading-relaxed text-code-mute">{profile.summary}</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area, idx) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="terminal p-6"
            >
              <p className="font-mono text-xs text-code-dim">0{idx + 1}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-code-mute">{area.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
