import { useEffect } from 'react'

/** Opacity the not-yet-revealed words sit at. */
const DIM = 0.16
/** How many words the revealing edge is spread across, so it feathers. */
const FEATHER = 6

const clamp = (value: number) => Math.min(1, Math.max(0, value))

/**
 * Drives a word-by-word scroll reveal on the imported "From idea to launch…" quote.
 *
 * Rather than rebuilding the section, this reads the words straight out of the
 * imported DOM — each word is its own `[data-name="span"]` inside the Quote
 * Section — and animates their opacity against the section's position in the
 * viewport. The imported markup is untouched.
 */
export default function QuoteReveal() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>('[data-name="Quote Section"], [data-name="Quote Section → Container"]')
    if (!section) return

    const words = Array.from(section.querySelectorAll<HTMLElement>('[data-name="span"]'))
    if (words.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    for (const word of words) {
      word.style.willChange = 'opacity'
      if (!reduced) word.style.transition = 'opacity 220ms linear'
    }

    const paint = () => {
      const rect = section.getBoundingClientRect()
      const viewport = window.innerHeight
      const content = section.querySelector<HTMLElement>('[data-name="Content"]')
      // The total scrollable distance while the element remains sticky
      const travel = content ? rect.height - content.getBoundingClientRect().height : rect.height * 0.5
      
      // Starts exactly as the section reaches the top of the viewport (when it becomes sticky)
      const from = 0
      // Completes exactly as the container unsticks, proceeding seamlessly to the next page
      const to = -travel
      const progress = reduced ? 1 : clamp((from - rect.top) / (from - to))
      const edge = progress * (words.length + FEATHER)

      words.forEach((word, index) => {
        const revealed = clamp((edge - index) / FEATHER)
        word.style.opacity = String(DIM + (1 - DIM) * revealed)
      })
    }

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        paint()
      })
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      for (const word of words) {
        word.style.opacity = ''
        word.style.transition = ''
        word.style.willChange = ''
      }
    }
  }, [])

  return null
}
