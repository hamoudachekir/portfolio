import { motion } from 'framer-motion'
import { skillMatrix } from '../data/profile'

const barColor = {
  sky: 'from-sky to-sky-dim',
  mint: 'from-mint to-mint-dim',
  amber: 'from-amber to-amber-dim',
}

const labelColor = {
  sky: 'text-sky',
  mint: 'text-mint',
  amber: 'text-amber',
}

export default function Technologies() {
  return (
    <section id="technologies" className="section-pad border-t border-code-line bg-code-bg">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">skills.json</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Skills matrix</h2>
          <p className="mt-4 max-w-2xl text-code-mute">
            Coding + AI stack with honest proficiency levels (1–5). No inflated cloud/DevOps filler.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillMatrix.map((group, idx) => (
            <motion.article
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="terminal p-5"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className={`font-mono text-sm font-semibold ${labelColor[group.color]}`}>
                  {group.group}
                </h3>
                <span className="font-mono text-[10px] text-code-dim">level / 5</span>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-code-fg sm:text-sm">{skill.name}</span>
                      <span className="font-mono text-[11px] text-code-dim">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-fill bg-gradient-to-r ${barColor[group.color]}`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
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
