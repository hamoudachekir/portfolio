import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Work', href: '#career' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#technologies' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(href.slice(1))
    if (!el) return
    window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'border-b border-paper-line bg-paper/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Hamouda<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition hover:text-signal-deep"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn-primary ml-3 !py-2 !px-4 text-xs">
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-paper-line bg-paper md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="rounded-md px-3 py-3 text-sm font-medium text-ink-soft"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
