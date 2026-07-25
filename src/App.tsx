import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Credibility } from '@/components/sections/Credibility'
import { FeaturedDevelopments } from '@/components/sections/FeaturedDevelopments'
import { ArchitecturalSolutions } from '@/components/sections/ArchitecturalSolutions'
import { EngineeringProcess } from '@/components/sections/EngineeringProcess'
import { SignatureProjects } from '@/components/sections/SignatureProjects'
import { IndustriesServed } from '@/components/sections/IndustriesServed'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <FeaturedDevelopments />
        <ArchitecturalSolutions />
        <EngineeringProcess />
        <SignatureProjects />
        <IndustriesServed />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
