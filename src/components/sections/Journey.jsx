import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { milestones } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Milestone({ milestone, index }) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      className="grid gap-6 py-8"
      style={{
        gridTemplateColumns: '90px 1fr',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
    >
      <span
        className="font-display text-ink-dim pt-0.5"
        style={{ fontSize: '1.75rem', letterSpacing: '0.02em' }}
      >
        {milestone.year}
      </span>
      <div>
        <p className="text-ink font-medium mb-1.5" style={{ fontSize: '0.97rem' }}>
          {milestone.title}
        </p>
        <p className="text-ink-muted" style={{ fontSize: '0.86rem', lineHeight: 1.72 }}>
          {milestone.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Journey() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      id="journey"
      className="py-20 md:py-28"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <SectionLabel text="Journey" />

        <motion.h2
          ref={ref}
          className="font-display text-ink mb-2"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1 }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          How I got here.
        </motion.h2>

        <div
          className="mt-14 max-w-2xl"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {milestones.map((m, i) => (
            <Milestone key={m.year} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
