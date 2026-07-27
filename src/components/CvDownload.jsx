import { useEffect, useRef, useState } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import { profile } from '../data/profile'

/**
 * Dual CV download (EN + FR). Use compact in navbar, full in hero.
 */
export default function CvDownload({ variant = 'full' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const compact = variant === 'compact'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={
          compact
            ? 'inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-code-fg transition hover:border-sky/50 hover:text-sky'
            : 'btn-secondary'
        }
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Download size={compact ? 14 : 16} />
        {compact ? 'CV' : 'Download CV'}
        <ChevronDown size={14} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 mt-2 min-w-[11rem] overflow-hidden rounded-lg border border-white/10 bg-code-panel shadow-lift ${
            compact ? 'right-0' : 'left-0'
          }`}
        >
          <a
            role="menuitem"
            href={profile.cvEn}
            download="Hamouda_Chekir_CV_EN.pdf"
            className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-code-fg transition hover:bg-sky/10 hover:text-sky"
            onClick={() => setOpen(false)}
          >
            <span className="text-sky">EN</span>
            English PDF
          </a>
          <a
            role="menuitem"
            href={profile.cvFr}
            download="Hamouda_Chekir_CV_FR.pdf"
            className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 font-mono text-xs text-code-fg transition hover:bg-mint/10 hover:text-mint"
            onClick={() => setOpen(false)}
          >
            <span className="text-mint">FR</span>
            Français PDF
          </a>
        </div>
      )}
    </div>
  )
}
