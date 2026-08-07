import { useEffect, useState } from 'react'
import imgPortrait from '@/imports/Body/b550edd9ec0ab68267cf752d0fb3374f2541e97a.png'
import imgPortraitBack from '@/imports/Body/b550edd9ec0ab68267cf752d0fb3374f2541.png'

/** Scroll distance over which the avatar flips and settles (the hero pin length). */
const PIN_LENGTH = 900
/* Scales relative to the card's 200×228 base size. It begins small, tucked under
   the SOFTWARE ENGINEER headline, and grows as the hero scrolls away. */
const START_SCALE = 1
const END_SCALE = 2.15

const clamp = (value: number) => Math.min(1, Math.max(0, value))
/** Smoothstep so the flip eases in and out rather than snapping. */
const smooth = (t: number) => t * t * (3 - 2 * t)

function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setScrollY(window.scrollY)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return scrollY
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * The portrait card from the imported hero. It starts oversized directly beneath
 * the SOFTWARE ENGINEER headline, then flips a full turn on its vertical axis
 * while scaling down to the 200×228 resting size the design pins at the bottom
 * of the sticky hero. Once the sticky range ends it scrolls away with the page.
 */
export default function ScrollAvatar() {
  const scrollY = useScrollY()
  const reduced = usePrefersReducedMotion()

  const progress = reduced ? 1 : smooth(clamp(scrollY / PIN_LENGTH))
  const scale = START_SCALE + (END_SCALE - START_SCALE) * progress
  // A single half-turn: starts showing the front view, lands on the back view.
  const rotateY = 180 * progress
  // After the pin releases, the card travels up with the document like the
  // sticky container in the imported design does.
  const release = Math.max(0, scrollY - PIN_LENGTH)

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-[20px] left-1/2 z-10 h-[228px] w-[200px]"
      style={{
        transform: `translate(-50%, ${-release}px)`,
        perspective: '1600px',
      }}
    >
      <div
        className="relative size-full"
        style={{
          transform: `scale(${scale}) rotateY(${rotateY}deg)`,
          transformOrigin: 'bottom center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front view */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-white"
          style={{ backfaceVisibility: 'hidden' }}
          data-name="Portrait of portfolio creator – front view"
        >
          <img
            alt="Portrait of Surendhar K, front view"
            className="absolute left-0 top-[-8.79%] h-[117.57%] w-full max-w-none"
            src={imgPortrait}
          />
        </div>
        {/* Back view — mirrored the same way the imported Avatar - Back frame is */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[20px] bg-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          data-name="Portrait of portfolio creator – back view"
        >
          <div className="size-full">
            <img
              alt="Portrait of Surendhar K, back view"
              className="absolute left-0 top-[-8.79%] h-[117.57%] w-full max-w-none"
              src={imgPortraitBack}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
