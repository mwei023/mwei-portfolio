import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionLabel({ text }) {
  const { ref, inView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 mb-14"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span
        className="text-accent tracking-widest3 uppercase"
        style={{ fontSize: '0.68rem' }}
      >
        {text}
      </span>
      <div className="flex-1 h-px bg-white/[0.07]" />
    </motion.div>
  )
}
