import { motion } from 'framer-motion'
import { technologies } from '../data/profile'

export default function Technologies() {
  return (
    <section id="technologies" className="section-pad border-t border-paper-line bg-[#F1EEE7]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Tools I actually use</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Stack</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Honest list — no Kubernetes / Terraform / Azure claims I cannot defend in an interview.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {technologies.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <h3 className="font-display text-lg font-bold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-paper-line bg-paper-elev px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
