import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import QuoteReveal from '@/components/QuoteReveal'
import ScrollAvatar from '@/components/ScrollAvatar'
import MobilePortfolio from '@/imports/390WDefault'
import DesktopPortfolio from '@/imports/Body'

const MOBILE_QUERY = '(max-width: 1023px)'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
    setIsMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

/**
 * Renders the imported portfolio design: the fluid desktop frame at >=1024px and
 * the 390w frame below it. Both roots are imported verbatim from `@/imports`; the
 * interactive nav, the scroll-driven avatar and quote reveal, and the outer sizing
 * shells live here.
 *
 * `live-nav` hides the import's static nav pill, `mobile-portfolio` lets the 390w
 * body flow off its baked height, and `animated-avatar` hides the import's static
 * portrait card — all three are scoped rules in `src/index.css`.
 */
export default function Portfolio() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <div className="mobile-portfolio live-nav relative w-full overflow-x-clip">
        <MobilePortfolio />
        <NavBar />
        <QuoteReveal />
      </div>
    )
  }

  return (
    <div className="animated-avatar live-nav min-h-screen w-full overflow-x-clip">
      <DesktopPortfolio />
      <NavBar />
      <ScrollAvatar />
      <QuoteReveal />
    </div>
  )
}
