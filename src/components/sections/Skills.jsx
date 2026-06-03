import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { skillGroups } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function SkillGroup({ group, index }) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      className="bg-bg p-8 md:p-10"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.09 }}
    >
      <p
        className="text-accent uppercase mb-6"
        style={{ fontSize: '0.67rem', letterSpacing: '0.18em' }}
      >
        {group.label}
      </p>
      <ul className="flex flex-col gap-2.5">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="text-ink-muted pl-4 relative"
            style={{ fontSize: '0.87rem' }}
          >
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 text-ink-dim"
              style={{ fontSize: '0.7rem' }}
            >
              —
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="skills" className="py-28 md:py-36" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <SectionLabel text="Skills" />

        <motion.h2
          ref={ref}
          className="font-display text-ink mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1 }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          What I work with.
        </motion.h2>

        {/* 4-col grid, collapses to 2 on tablet, 1 on mobile */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
