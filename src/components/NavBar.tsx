import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type NavLink = { label: string; target: string }

/** Dropdown links, pointed at the imported design's sections by their Figma names. */
const LINKS: NavLink[] = [
  { label: 'About Me', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Projects', target: 'projects' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' },
]

/**
 * A pill button whose label rolls up one character at a time on hover. The
 * duplicate glyph underneath comes from the `text-shadow` offset by one line, the
 * same trick the reference markup uses.
 */
function RollingLink({ label, onSelect }: { label: string; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="nav-roll group flex h-[36px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] bg-[#faf7f3] px-[16px] py-[8px] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf7f3]"
    >
      <span
        className="flex w-max select-none overflow-hidden font-['Archivo:Medium',sans-serif] text-[16px] font-medium leading-[1.2em] tracking-[-0.02em] text-[#111]"
        style={{ textShadow: '0 1.2em 0 #111' }}
      >
        {[...label].map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="block flex-shrink-0 whitespace-pre leading-[1.2em] transition-transform duration-300 ease-out group-hover:-translate-y-[1.2em]"
            style={{ transitionDelay: `${index * 22}ms`, backfaceVisibility: 'hidden' }}
          >
            {char}
          </span>
        ))}
      </span>
    </button>
  )
}

/**
 * The floating navigation pill. Closed it shows the logo and a three-dot trigger,
 * matching the imported frame; opened it expands into the dark dropdown panel from
 * the reference, with the trigger becoming a close cross.
 */
export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const goTo = (target: string) => {
    setOpen(false)
    const section = document.getElementById(target)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.div
      initial={{ y: -20, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-[30px] z-50 w-[320px]"
    >
      <nav
        ref={navRef}
        className="flex flex-col items-center justify-center rounded-[20px] bg-[#111] py-[12px]"
        data-name={open ? 'Opened' : 'Closed'}
      >
        <div className="flex w-[288px] items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="cursor-pointer font-['Archivo:SemiBold',sans-serif] text-[22px] font-semibold leading-[30.8px] tracking-[-0.88px] whitespace-nowrap text-[#faf7f3]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Surendhar
          </button>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="relative flex h-[36px] w-[44px] cursor-pointer items-center justify-center gap-[3px] overflow-hidden rounded-[8px] bg-[#faf7f3] px-[12px] py-[8px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf7f3]"
          >
            {open ? (
              <>
                <span className="absolute h-[2px] w-[16px] rotate-45 rounded-[371px] bg-[#111]" />
                <span className="absolute h-[2px] w-[16px] -rotate-45 rounded-[371px] bg-[#111]" />
              </>
            ) : (
              <>
                <span className="size-[4px] rounded-[371px] bg-[#111]" />
                <span className="size-[4px] rounded-[371px] bg-[#111]" />
                <span className="size-[4px] rounded-[371px] bg-[#111]" />
              </>
            )}
          </button>
        </div>

        <div
          className="grid w-[288px] transition-[grid-template-rows,opacity] duration-300 ease-out"
          style={{
            gridTemplateRows: open ? '1fr' : '0fr',
            opacity: open ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-start gap-[12px] pt-[24px]">
              {LINKS.map((link, index) => (
                <div
                  key={link.label}
                  className="transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: open ? `${100 + index * 55}ms` : '0ms',
                    opacity: open ? 1 : 0,
                    transform: open ? 'none' : 'translateY(-8px)',
                  }}
                >
                  <RollingLink label={link.label} onSelect={() => goTo(link.target)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}
