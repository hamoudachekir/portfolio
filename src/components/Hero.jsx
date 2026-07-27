import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-mesh">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-center pb-16 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
        >
          Tunis · ESPRIT TWIN · Available
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="display max-w-4xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-2xl font-display text-xl font-semibold text-signal-deep sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            See NextHire PFE
          </a>
          <a href={profile.cvEn} download className="btn-secondary">
            <Download size={16} />
            Download CV
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-4"
        >
          {[
            { Icon: Github, href: profile.github, label: 'GitHub' },
            { Icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
            { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="rounded-md border border-paper-line bg-paper-elev p-2.5 text-ink-soft transition hover:border-signal hover:text-signal-deep"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-16 inline-flex items-center gap-2 text-sm text-ink-mute"
        >
          <ArrowDown size={16} className="text-signal" />
          Scroll
        </motion.a>
      </div>
    </section>
  )
}
