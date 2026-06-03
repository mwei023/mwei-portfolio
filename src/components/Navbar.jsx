import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(12,12,11,0.97)'
          : 'linear-gradient(to bottom, rgba(12,12,11,0.95) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleNavClick(e, '#hero')}
        className="font-display text-ink tracking-wide"
        style={{ fontSize: '1.35rem' }}
      >
        Peter Mwei
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-ink-muted hover:text-ink transition-colors duration-200 uppercase tracking-widest"
              style={{ fontSize: '0.72rem', letterSpacing: '0.12em' }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-px w-6 bg-ink-muted transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block h-px w-6 bg-ink-muted transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-px w-6 bg-ink-muted transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-bg-2 border-b border-white/[0.07] px-8 py-6 flex flex-col gap-5 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-ink-muted hover:text-accent transition-colors uppercase tracking-widest"
              style={{ fontSize: '0.78rem' }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
