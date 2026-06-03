import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const details = [
  { label: 'Based', value: 'Nairobi, Kenya' },
  { label: 'Education', value: 'BSc. Computer Science, Maasai Mara University' },
  { label: 'Experience', value: 'IT Support Intern — BRS (Apr–Aug 2025)' },
  { label: 'Certifications', value: 'CompTIA Network+ (in progress), CCNA, Linux Foundation' },
  { label: 'Seeking', value: 'NOC / Network & Security Internship or Entry Role' },
  { label: 'Currently Building', value: 'RAG Knowledge Assistant (Python, FastAPI, LangChain)' },
]

function DetailRow({ label, value, index }) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      className="flex justify-between items-baseline py-4"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
    >
      <span
        className="text-ink-dim uppercase tracking-widest flex-shrink-0 mr-6"
        style={{ fontSize: '0.67rem', letterSpacing: '0.15em' }}
      >
        {label}
      </span>
      <span className="text-ink-muted text-right" style={{ fontSize: '0.86rem' }}>
        {value}
      </span>
    </motion.div>
  )
}

export default function About() {
  const { ref: textRef, inView: textInView } = useScrollReveal()

  return (
    <section id="about" className="bg-bg-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-28 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left: text */}
        <div>
          <SectionLabel text="About" />
          <motion.p
            ref={textRef}
            className="font-serif text-ink-muted"
            style={{ fontSize: 'clamp(1.1rem, 1.7vw, 1.42rem)', lineHeight: 1.68, fontWeight: 400 }}
            initial={{ opacity: 0, y: 18 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          >
            I'm a Computer Science student at Maasai Mara University awaiting graduation who builds things{' '}
            <em className="text-ink">end-to-end</em> — from database schema to CI/CD pipeline to live
            deployment.
            <br />
            <br />
            My interests sit at the intersection of{' '}
            <em className="text-ink">backend systems, network infrastructure, and security</em>. I'm
            working toward a career in network operations and security engineering, and every project I
            take on moves me closer to understanding how systems actually hold together under load.
          </motion.p>
        </div>

        {/* Right: detail rows */}
        <div className="pt-1">
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {details.map((d, i) => (
              <DetailRow key={d.label} label={d.label} value={d.value} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
