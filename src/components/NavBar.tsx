'use client';
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
function RollingLink({ label, onSelect, isOverDark }: { label: string; onSelect: () => void; isOverDark?: boolean }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`nav-roll group flex h-[36px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] px-[16px] py-[8px] transition-all duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 ${isOverDark ? 'bg-[#111] focus-visible:outline-[#111]' : 'bg-[#faf7f3] focus-visible:outline-[#faf7f3]'}`}
    >
      <span
        className={`flex w-max select-none overflow-hidden font-['Archivo:Medium',sans-serif] text-[16px] font-medium leading-[1.2em] tracking-[-0.02em] transition-colors duration-300 ${isOverDark ? 'text-[#faf7f3]' : 'text-[#111]'}`}
        style={{ textShadow: `0 1.2em 0 ${isOverDark ? '#faf7f3' : '#111'}` }}
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
  const [isOverDark, setIsOverDark] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      
      const navRect = navRef.current.getBoundingClientRect();
      const navCenterY = navRect.top + (navRect.height / 2);
      
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      let overDark = false;
      
      for (let i = 0; i < darkSections.length; i++) {
        const rect = darkSections[i].getBoundingClientRect();
        if (navCenterY >= rect.top && navCenterY <= rect.bottom) {
          overDark = true;
          break;
        }
      }
      
      setIsOverDark(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    // Small timeout ensures the menu closing animation doesn't disrupt scroll calculation
    setTimeout(() => {
      const section = document.getElementById(target)
      if (section) {
        const yOffset = -50; // Add some padding so the dynamic island doesn't cover the header
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50)
  }

  return (
    <div className="fixed left-1/2 top-[30px] z-50 flex justify-center -translate-x-1/2">
      <motion.nav
        layout
        ref={navRef}
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          width: open ? 280 : 120,
          borderRadius: open ? 32 : 32,
        }}
        transition={{ 
          y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          layout: { type: "spring", stiffness: 400, damping: 30 }
        }}
        className={`flex flex-col items-center justify-start overflow-hidden shadow-2xl transition-colors duration-300 ${isOverDark ? 'bg-[#faf7f3]' : 'bg-[#000]'}`}
        data-name={open ? 'Opened' : 'Closed'}
      >
        <motion.div layout className="flex items-center justify-between w-full h-[48px] px-[10px]">
          <AnimatePresence mode="popLayout">
            {open ? (
              <motion.button
                key="full-logo"
                initial={{ opacity: 0, filter: 'blur(4px)', x: -10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                exit={{ opacity: 0, filter: 'blur(4px)', x: -10 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => {
                  setOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={`cursor-pointer font-['Archivo:SemiBold',sans-serif] text-[20px] font-semibold tracking-[-0.04em] whitespace-nowrap pl-3 transition-colors duration-300 ${isOverDark ? 'text-[#111]' : 'text-[#faf7f3]'}`}
              >
                Surendhar
              </motion.button>
            ) : (
              <motion.button
                key="short-logo"
                initial={{ opacity: 0, filter: 'blur(4px)', x: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                exit={{ opacity: 0, filter: 'blur(4px)', x: 10 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={`cursor-pointer font-['Archivo:SemiBold',sans-serif] text-[18px] font-semibold tracking-[-0.04em] whitespace-nowrap pl-3 transition-colors duration-300 ${isOverDark ? 'text-[#111]' : 'text-[#faf7f3]'}`}
              >
                SK
              </motion.button>
            )}
          </AnimatePresence>

          <motion.button
            layout
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className={`relative flex h-[32px] w-[32px] cursor-pointer items-center justify-center overflow-hidden rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300 ${isOverDark ? 'bg-[#111]/10 hover:bg-[#111]/20' : 'bg-white/10 hover:bg-white/20'}`}
          >
            {open ? (
              <>
                <span className={`absolute h-[1.5px] w-[14px] rotate-45 rounded-full transition-colors duration-300 ${isOverDark ? 'bg-[#111]' : 'bg-[#faf7f3]'}`} />
                <span className={`absolute h-[1.5px] w-[14px] -rotate-45 rounded-full transition-colors duration-300 ${isOverDark ? 'bg-[#111]' : 'bg-[#faf7f3]'}`} />
              </>
            ) : (
              <div className="flex gap-[3px]">
                <span className={`size-[3px] rounded-full transition-colors duration-300 ${isOverDark ? 'bg-[#111]' : 'bg-[#faf7f3]'}`} />
                <span className={`size-[3px] rounded-full transition-colors duration-300 ${isOverDark ? 'bg-[#111]' : 'bg-[#faf7f3]'}`} />
                <span className={`size-[3px] rounded-full transition-colors duration-300 ${isOverDark ? 'bg-[#111]' : 'bg-[#faf7f3]'}`} />
              </div>
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
              exit={{ opacity: 0, height: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full px-[12px] pb-[16px]"
            >
              <div className="flex flex-col items-start gap-[8px] pt-[8px]">
                {LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    <RollingLink label={link.label} onSelect={() => goTo(link.target)} isOverDark={isOverDark} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

