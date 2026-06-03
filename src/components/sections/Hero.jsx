import { motion } from 'framer-motion'

// Each element fades up with a slight delay stagger — scalpel, not fireworks.
const variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-24 pt-28 pb-16"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Eyebrow */}
      <motion.p
        className="text-accent uppercase tracking-widest3 mb-7"
        style={{ fontSize: '0.72rem' }}
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        Software &amp; Systems Engineer / Infrastructure-minded Software Engineer — Nairobi, Kenya
      </motion.p>

      {/* Name */}
      <motion.h1
        className="font-display text-ink leading-tight2 mb-9"
        style={{ fontSize: 'clamp(5rem, 12vw, 13rem)', lineHeight: 0.9 }}
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={0.22}
      >
        Peter
        <br />
        Mwei
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="font-serif italic text-ink-muted mb-12 max-w-xl"
        style={{ fontSize: 'clamp(1.05rem, 2vw, 1.45rem)', lineHeight: 1.65 }}
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={0.38}
      >
        I build full-stack systems, harden them, and ship them —<br className="hidden md:block" /> from M-Pesa integrations to network infrastructure.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap gap-4 items-center"
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={0.52}
      >
        <button
          onClick={() => handleScroll('#work')}
          className="px-8 py-3 bg-accent text-bg font-body font-medium uppercase tracking-widest transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
          style={{ fontSize: '0.75rem' }}
        >
          View Work
        </button>
        <button
          onClick={() => handleScroll('#contact')}
          className="px-8 py-3 font-body uppercase tracking-widest text-ink-muted transition-all duration-200 hover:text-ink hover:-translate-y-px"
          style={{
            fontSize: '0.75rem',
            border: '1px solid rgba(255,255,255,0.14)',
          }}
        >
          Get in Touch
        </button>
      </motion.div>
    </section>
  )
}
