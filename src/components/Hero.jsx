import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import CvDownload from './CvDownload'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-mesh">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-page relative z-10 grid min-h-[100svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-6"
          >
            // Tunis · ESPRIT TWIN · available
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="display text-5xl leading-[0.95] sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-mono text-lg text-sky sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-code-mute"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View NextHire PFE
            </a>
            <CvDownload variant="full" />
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex items-center gap-3"
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
                className="rounded-md border border-white/10 bg-white/5 p-2.5 text-code-mute transition hover:border-sky/40 hover:text-sky"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="terminal overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/80" />
            <span className="ml-3 text-xs text-code-dim">agent.profile.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 text-[12px] leading-6 sm:text-[13px]">
            <code>
              <span className="text-sky">const</span> <span className="text-amber">engineer</span> = {'{\n'}
              {'  '}<span className="text-mint">name</span>: <span className="text-amber">&apos;Hamouda Chekir&apos;</span>,{'\n'}
              {'  '}<span className="text-mint">role</span>: <span className="text-amber">&apos;Full-Stack &amp; AI&apos;</span>,{'\n'}
              {'  '}<span className="text-mint">focus</span>: [{'\n'}
              {'    '}<span className="text-amber">&apos;LLM agents&apos;</span>,{'\n'}
              {'    '}<span className="text-amber">&apos;LangGraph&apos;</span>,{'\n'}
              {'    '}<span className="text-amber">&apos;FastAPI microservices&apos;</span>,{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="text-mint">proof</span>: <span className="text-amber">&apos;NextHire @ Talan (PFE)&apos;</span>,{'\n'}
              {'  '}<span className="text-mint">ship</span>: <span className="text-sky">true</span>,{'\n'}
              {'}'};{'\n\n'}
              <span className="text-code-dim">{'// await engineer.build(problem)'}</span>
            </code>
          </pre>
        </motion.div>

        <a href="#overview" className="col-span-full inline-flex items-center gap-2 text-sm text-code-dim lg:mt-0">
          <ArrowDown size={16} className="text-mint" />
          Scroll
        </a>
      </div>
    </section>
  )
}
