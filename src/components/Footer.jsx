import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'
import CvDownload from './CvDownload'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-code-line bg-code-bg py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono text-xs text-code-dim">
          © {year} <span className="text-code-fg">{profile.name}</span>
        </p>
        <CvDownload variant="compact" />
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-code-dim transition hover:text-sky"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-code-dim transition hover:text-sky"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
