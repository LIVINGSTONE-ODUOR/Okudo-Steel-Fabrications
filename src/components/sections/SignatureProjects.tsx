import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MotionWrap } from '@/components/ui/MotionWrap'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { formatImagePath } from '@/lib/utils'

const caseStudies = [
  {
    id: 'kitisuru',
    title: 'Transforming Luxury Living at Kitisuru Hills',
    description:
      "A 48-unit luxury gated community requiring comprehensive architectural metal solutions. Our team delivered custom entrance systems, façade glazing, outdoor structures, and safety systems that elevated the development's market position.",
    category: 'Residential Development',
    location: 'Nairobi',
    image: 'matching fence and gate.webp',
    clientObjective: 'Create a distinct architectural identity that commands premium pricing in a competitive market.',
    engineeringHighlight: 'Custom gold-anodized aluminium entrance systems with integrated smart access technology.',
    badge: 'Before — After',
  },
  {
    id: 'upper-hill',
    title: 'Structural Framework for Upper Hill Commercial Centre',
    description:
      "A landmark 22-storey commercial development in Nairobi's premier business district. Our scope encompassed the entire structural steel framework, premium façade system, and integrated safety solutions.",
    category: 'Commercial Development',
    location: 'Nairobi CBD',
    image: 'roll round window.webp',
    clientObjective: 'Deliver a world-class commercial space that attracts multinational tenants and commands premium lease rates.',
    engineeringHighlight: 'Project completed 3 weeks ahead of schedule. Building achieved 95% occupancy within 6 months of completion.',
    badge: 'Commercial Excellence',
  },
  {
    id: 'lavington-residence',
    title: 'Custom Staircase & Balcony Design at Lavington Residence',
    description:
      "A 6,000 sqft private residence requiring bespoke staircase railings, balcony steelwork, and window installations. Our team designed and fabricated custom architectural safety systems that became the home's defining feature.",
    category: 'Luxury Residence',
    location: 'Lavington, Nairobi',
    image: 'staircase railing silver.webp',
    clientObjective: 'Create a signature interior feature that combines safety with sculptural elegance.',
    engineeringHighlight: 'Hand-finished stainless steel railings with integrated LED lighting and custom glass balustrades.',
    badge: 'Interior Excellence',
  },
  {
    id: 'gigiri-windows',
    title: 'Premium Window Installation at Gigiri Corporate Centre',
    description:
      "A premier corporate centre requiring comprehensive window and façade installations across 8 floors. Our team delivered precision-fitted aluminium glazing systems that transformed the building's aesthetic and energy performance.",
    category: 'Commercial Installation',
    location: 'Gigiri, Nairobi',
    image: 'windows 2.webp',
    clientObjective: 'Achieve a uniform, modern façade while maximizing natural light and thermal efficiency.',
    engineeringHighlight: 'Thermally-broken aluminium frames with low-E glazing, installed with zero tolerance deviation.',
    badge: 'Installation Mastery',
  },
]

export function SignatureProjects() {
  return (
    <section className="py-20 md:py-28 bg-luxury-bg">
      <Container>
        <SectionHeader
          label="Signature Projects"
          title="Case Studies in Excellence"
          description="How we partnered with leading developers to transform architectural visions into reality."
        />

        {caseStudies.map((cs, i) => {
          const isReversed = i === 1
          return (
            <MotionWrap
              key={cs.id}
              delay={0.15}
              className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${i === 0 ? 'mb-20 md:mb-28' : ''}`}
            >
              <div className={`relative ${isReversed ? 'md:order-2' : ''}`}>
                <div className="relative h-[350px] md:h-[500px] overflow-hidden">
                  <ProjectImage
                    src={formatImagePath(cs.image)}
                    alt={cs.title}
                    wrapperClassName="w-full h-full"
                    className="hover:scale-105 transition-transform duration-800"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`absolute -bottom-4 ${isReversed ? '-left-4' : '-right-4'} bg-luxury-gold text-white px-6 py-3 hidden md:block`}
                >
                  <span className="font-body text-sm font-semibold">{cs.badge}</span>
                </motion.div>
              </div>

              <div className={isReversed ? 'md:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label">{cs.category}</span>
                  <span className="w-px h-3 bg-luxury-gold/30" />
                  <span className="font-body text-sm text-luxury-gold font-medium">{cs.location}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-luxury-text mb-4">{cs.title}</h3>
                <div className="w-16 h-0.5 bg-luxury-gold mb-6" />
                <p className="font-body text-luxury-text/70 leading-relaxed mb-6">{cs.description}</p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <span className="section-label block mb-1">Client Objective</span>
                    <p className="font-body text-sm text-luxury-text/60">{cs.clientObjective}</p>
                  </div>
                  <div>
                    <span className="section-label block mb-1">Engineering Highlight</span>
                    <p className="font-body text-sm text-luxury-text/60">{cs.engineeringHighlight}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-luxury-gold font-semibold text-sm group cursor-pointer"
                >
                  <span>View Full Case Study</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </MotionWrap>
          )
        })}
      </Container>
    </section>
  )
}
