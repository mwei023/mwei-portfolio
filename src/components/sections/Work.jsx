import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import ProjectCard from '../ProjectCard'
import { projects } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Work() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="work" className="py-28 md:py-36">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <SectionLabel text="Selected Work" />

        <motion.h2
          ref={ref}
          className="font-display text-ink mb-2"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1 }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Things I've built.
        </motion.h2>
      </div>

      {/* Project grid — full-width border container */}
      <div
        className="max-w-screen-xl mx-auto mt-14 md:mt-20"
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
