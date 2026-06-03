import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { contact } from '../../data/portfolio'

// SVG icons — inline, no dependency
function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  )
}

const contactLinks = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: <EmailIcon /> },
  { label: 'GitHub', href: contact.github, icon: <GithubIcon /> },
  { label: 'LinkedIn', href: contact.linkedin, icon: <LinkedInIcon /> },
  { label: 'mwei.co.ke', href: contact.website, icon: <GlobeIcon /> },
]

function ContactLink({ link, index }) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 text-ink-muted uppercase tracking-widest px-6 py-3.5 transition-all duration-200 hover:text-accent hover:-translate-y-0.5"
      style={{
        fontSize: '0.72rem',
        letterSpacing: '0.1em',
        border: '1px solid rgba(255,255,255,0.14)',
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 + index * 0.07 }}
      whileHover={{ borderColor: 'rgba(138, 112, 69, 0.5)' }}
    >
      {link.icon}
      {link.label}
    </motion.a>
  )
}

export default function Contact() {
  const { ref: headingRef, inView: headingInView } = useScrollReveal()
  const { ref: subRef, inView: subInView } = useScrollReveal()

  return (
    <section
      id="contact"
      className="bg-bg-3"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-28 md:py-40 flex flex-col items-center text-center">

        <motion.h2
          ref={headingRef}
          className="font-display text-ink mb-5"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 8rem)', lineHeight: 1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          Let's build
          <br />
          something.
        </motion.h2>

        <motion.p
          ref={subRef}
          className="font-serif italic text-ink-muted mb-14 max-w-sm"
          style={{ fontSize: '1.08rem', lineHeight: 1.65 }}
          initial={{ opacity: 0, y: 12 }}
          animate={subInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
        >
          Open to internships, entry-level roles, and good conversations about networks and systems.
        </motion.p>

        <div className="flex flex-wrap gap-3 justify-center">
          {contactLinks.map((link, i) => (
            <ContactLink key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>

      <footer
        className="flex flex-col sm:flex-row justify-between items-center gap-2 px-6 md:px-12 py-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-ink-dim" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>
          © 2026 Peter Mwei — Nairobi, Kenya
        </p>
        <p className="text-ink-dim" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>
          {contact.phone}
        </p>
      </footer>
    </section>
  )
}
