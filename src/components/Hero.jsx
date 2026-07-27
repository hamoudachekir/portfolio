import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import CvDownload from './CvDownload'
import Aurora from './Aurora/Aurora'

const nameWords = profile.name.split(' ')

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-code-bg">
      {/* React Bits Aurora — full-bleed signature */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
        <Aurora
          colorStops={['#22D3EE', '#34D399', '#FBBF24']}
          amplitude={1.15}
          blend={0.55}
          speed={0.85}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-code-bg/40 via-transparent to-code-bg" />

      <div className="container-page relative z-10 grid min-h-[100svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-6"
          >
            // Tunis · ESPRIT TWIN · available
          </motion.p>

          <h1 className="display text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.12 }}
                className="mr-[0.28em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 font-mono text-lg text-sky sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-code-mute"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
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
            transition={{ delay: 0.6 }}
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
                className="rounded-md border border-white/10 bg-black/30 p-2.5 text-code-mute backdrop-blur-sm transition hover:border-sky/40 hover:text-sky"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.6 }}
          className="terminal overflow-hidden backdrop-blur-md"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/80" />
            <span className="ml-3 text-xs text-code-dim">agent.profile.ts</span>
          </div>
          <pre className="overflow-x-auto bg-black/35 p-5 text-[12px] leading-6 sm:text-[13px]">
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

        <a href="#overview" className="col-span-full inline-flex items-center gap-2 text-sm text-code-dim">
          <ArrowDown size={16} className="text-mint" />
          Scroll
        </a>
      </div>
    </section>
  )
}
