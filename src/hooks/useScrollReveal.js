import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Returns a ref and a boolean `inView`.
 * once: true means the element only animates in once, never resets.
 * margin: fires slightly before the element reaches the viewport.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -60px 0px',
    ...options,
  })
  return { ref, inView }
}
