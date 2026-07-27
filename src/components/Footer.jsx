import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper-line bg-ink py-10 text-paper">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-paper/60">
          © {year} <span className="font-semibold text-paper">{profile.name}</span>
        </p>
        <p className="font-mono text-xs text-paper/40">{profile.title}</p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-paper/60 transition hover:text-signal-bright"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-paper/60 transition hover:text-signal-bright"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
