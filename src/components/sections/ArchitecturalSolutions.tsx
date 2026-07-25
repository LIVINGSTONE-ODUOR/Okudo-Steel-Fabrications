import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MotionWrap } from '@/components/ui/MotionWrap'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { ImageStrip } from '@/components/ui/ImageStrip'

const mainSolutions = [
  {
    title: 'Architectural Entrance Systems',
    description:
      'Custom-designed entrance solutions that define first impressions. Engineered for security, elegance, and lasting performance in premium residential and commercial developments.',
    category: 'Architectural',
    image: 'door 1.jpeg',
    span: 'lg:col-span-7',
  },
  {
    title: 'Premium Façade & Glazing Solutions',
    description:
      'High-performance building envelopes that define architectural character while maximizing energy efficiency and natural light.',
    category: 'Facade',
    image: 'window design.jpeg',
    span: 'lg:col-span-5',
  },
  {
    title: 'Security & Access Solutions',
    description:
      'Integrated security systems engineered for modern developments. Balancing robust protection with elegant architectural integration.',
    category: 'Security',
    image: 'steel door.jpeg',
    span: 'lg:col-span-5',
  },
  {
    title: 'Outdoor Lifestyle Structures',
    description:
      'Transform outdoor spaces into premium living environments. Custom-designed pergolas, canopies, and shade structures for luxury residences, hotels, and commercial spaces.',
    category: 'Lifestyle',
    image: 'packing shade bigger.jpeg',
    span: 'lg:col-span-7',
  },
]

const secondarySolutions = [
  {
    title: 'Architectural Safety Systems',
    description: 'Elegant balustrades, railings, and safety barriers that protect without compromising design vision.',
    image: 'staircase railing installation.jpeg',
  },
  {
    title: 'Modern Shelter & Shade Solutions',
    description: 'Sophisticated canopy and shade structures that blend architectural beauty with functional protection.',
    image: 'packing shade.jpeg',
  },
]

export function ArchitecturalSolutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader
          label="Architectural Solutions"
          title="Comprehensive Engineering & Design Capabilities"
        />

        {/* Main Solutions - Asymmetrical Grid */}
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          {mainSolutions.map((sol, i) => (
            <MotionWrap key={sol.title} delay={i * 0.1} className={`md:col-span-12 ${sol.span} group cursor-pointer`}>
              <div className="img-zoom relative h-[300px] md:h-[420px] overflow-hidden">
                <ProjectImage
                  src={`/images/${sol.image}`}
                  alt={sol.title}
                  wrapperClassName="w-full h-full"
                  className="group-hover:scale-108 transition-transform duration-800"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="section-label text-[11px]">{sol.category}</span>
                  <span className="w-px h-3 bg-luxury-gold/30" />
                  <span className="font-body text-[11px] text-luxury-gold font-medium">Premium Solution</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-luxury-text mb-2">{sol.title}</h3>
                <p className={`font-body text-luxury-text/60 ${sol.span === 'lg:col-span-7' ? 'max-w-xl' : ''}`}>
                  {sol.description}
                </p>
              </div>
            </MotionWrap>
          ))}
        </div>

        {/* Secondary Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {secondarySolutions.map((sol, i) => (
            <MotionWrap key={sol.title} delay={0.3 + i * 0.1}>
              <div className="group cursor-pointer">
                <div className="flex items-start gap-6 p-6 border border-luxury-text/10 hover:border-luxury-gold/30 transition-all duration-500">
                  <div className="w-20 h-20 shrink-0 overflow-hidden">
                    <ProjectImage
                      src={`/images/${sol.image}`}
                      alt={sol.title}
                      wrapperClassName="w-full h-full"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-luxury-text mb-1">{sol.title}</h4>
                    <p className="font-body text-sm text-luxury-text/60">{sol.description}</p>
                  </div>
                </div>
              </div>
            </MotionWrap>
          ))}
        </div>

        {/* Image Gallery Strip */}
        <ImageStrip />
      </Container>
    </section>
  )
}
