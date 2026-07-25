import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MotionWrap } from '@/components/ui/MotionWrap'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { industries } from '@/data/siteData'
import { formatImagePath } from '@/lib/utils'

export function IndustriesServed() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader
          label="Industries Served"
          title="Sectors We Transform"
          description="From luxury residential to large-scale commercial, our expertise spans the full spectrum of architectural and construction sectors."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, i) => (
            <MotionWrap key={industry.id} delay={i * 0.08}>
              <div className="group cursor-pointer">
                <div className="relative h-[200px] md:h-[260px] overflow-hidden">
                  <ProjectImage
                    src={formatImagePath(industry.image)}
                    alt={industry.title}
                    wrapperClassName="w-full h-full"
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="py-4 border-b border-luxury-text/10">
                  <h3 className="font-display text-lg font-bold text-luxury-text group-hover:text-luxury-gold transition-colors">
                    {industry.title}
                  </h3>
                  <p className="font-body text-xs text-luxury-text/50 mt-1">{industry.description}</p>
                </div>
              </div>
            </MotionWrap>
          ))}
        </div>
      </Container>
    </section>
  )
}
