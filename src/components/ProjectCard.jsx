import { motion } from 'framer-motion'

// External link arrow SVG — inline, minimal
function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="relative group bg-bg"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
      // Card hover: very slight background lift — nothing loud
      whileHover={{ backgroundColor: '#131312' }}
    >
      {/* Left accent bar — draws in on hover */}
      <motion.div
        className="absolute left-0 top-10 bottom-10 w-0.5 bg-accent origin-bottom"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      />

      <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
        {/* Left: content */}
        <div>
          <p
            className="text-ink-dim uppercase tracking-widest mb-3"
            style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}
          >
            {project.number}
          </p>

          <h3
            className="font-serif font-normal text-ink mb-3 transition-colors duration-200 group-hover:text-accent"
            style={{ fontSize: 'clamp(1.15rem, 2vw, 1.7rem)' }}
          >
            {project.name}
          </h3>

          <p
            className="text-ink-muted mb-5 max-w-xl"
            style={{ fontSize: '0.92rem', lineHeight: '1.78' }}
          >
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-ink-dim uppercase tracking-wide px-2.5 py-1"
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.09em',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Impact */}
          <p className="text-accent" style={{ fontSize: '0.78rem', letterSpacing: '0.04em' }}>
            {project.impact}
          </p>
        </div>

        {/* Right: links */}
        <div className="flex md:flex-col gap-2 items-start md:items-end mt-1">
          {project.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-ink-dim uppercase tracking-widest px-3 py-2 transition-colors duration-200 hover:text-accent whitespace-nowrap"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              whileHover={{ borderColor: 'rgba(138, 112, 69, 0.6)' }}
            >
              {link.label}
              <ArrowIcon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
