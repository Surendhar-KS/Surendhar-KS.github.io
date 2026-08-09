import NavBar from '@/components/NavBar'
import HeroBioSections from '@/components/sections/HeroBioSections'
import QuoteSection from '@/components/sections/QuoteSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TechnologiesSection from '@/components/sections/TechnologiesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CertificationSection from '@/components/sections/CertificationSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import FeatureSection from '@/components/sections/FeatureSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function NextPortfolio() {
  return (
    <div className="animated-avatar live-nav min-h-screen w-full overflow-x-clip bg-[#faf7f3]">
      <NavBar />
      <HeroBioSections />
      <QuoteSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <CertificationSection />
      <ExperienceSection />
      <FeatureSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
