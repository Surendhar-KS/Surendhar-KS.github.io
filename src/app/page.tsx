import NavBar from '@/components/NavBar'
import HeroBioSections from '@/components/sections/HeroBioSections'
import QuoteSection from '@/components/sections/QuoteSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TechnologiesSection from '@/components/sections/TechnologiesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import { ScrollFlipCard } from '@/components/ScrollFlipCard'
import { ExperienceSection } from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function NextPortfolio() {
  return (
    <div className="animated-avatar live-nav min-h-screen w-full overflow-x-clip bg-white">
      <NavBar />
      <HeroBioSections />
      <QuoteSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ScrollFlipCard />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
