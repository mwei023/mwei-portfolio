import { motion } from 'framer-motion'
import { philosophy } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function PhilosophyItem({ item, index }) {
  const { ref, inView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      className="grid gap-6 py-10"
      style={{
        gridTemplateColumns: '110px 1fr',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1], // more premium easing
        delay: index * 0.08,
      }}
    >
      {/* Year */}
      <div
        className="font-display text-ink-dim"
        style={{
          fontSize: '1.9rem',
          letterSpacing: '0.04em',
        }}
      >
        {item.year}
      </div>

      {/* Content */}
      <div>
        <h3
          className="text-ink font-medium mb-3"
          style={{
            fontSize: '1.05rem',
            letterSpacing: '0.01em',
          }}
        >
          {item.title}
        </h3>

        <p
          className="text-ink-muted whitespace-pre-line"
          style={{
            fontSize: '0.92rem',
            lineHeight: 1.85,
            maxWidth: '52ch',
          }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function PhilosophySection() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      id="philosophy"
      className="py-24 md:py-32"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Label stays static (don’t animate everything) */}
        <div className="mb-10">
          <span className="text-xs tracking-[0.22em] uppercase text-ink-dim">
            Philosophy
          </span>
        </div>

        {/* Title */}
        <motion.h2
          ref={ref}
          className="font-display text-ink mb-16"
          style={{
            fontSize: 'clamp(3rem, 5vw, 5.5rem)',
            lineHeight: 1,
            letterSpacing: '0.01em',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          My Principles.
        </motion.h2>

        {/* Timeline container */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {philosophy.map((item, i) => (
            <PhilosophyItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}