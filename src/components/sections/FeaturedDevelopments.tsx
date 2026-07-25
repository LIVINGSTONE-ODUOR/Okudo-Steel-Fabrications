import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MotionWrap } from '@/components/ui/MotionWrap'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/siteData'

export function FeaturedDevelopments() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-luxury-bg">
      <Container>
        <SectionHeader
          label="Featured Developments"
          title="Selected Projects"
          description="Each project represents a partnership built on precision, quality, and architectural excellence."
          headerAction={
            <Button
              variant="outline"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              View All Projects
            </Button>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <MotionWrap key={project.id} delay={i * 0.15}>
              <div className="group cursor-pointer">
                <div className="relative h-[320px] md:h-[400px] overflow-hidden">
                  <ProjectImage
                    src={`/images/${project.image}`}
                    alt={project.title}
                    wrapperClassName="w-full h-full"
                    className="group-hover:scale-108 transition-transform duration-800"
                  />
                  <div className="absolute top-6 left-6 bg-luxury-gold text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-2">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-luxury-dark/0 group-hover:bg-luxury-dark/30 transition-all duration-500" />
                </div>
                <div className="py-6 border-b border-luxury-text/10">
                  <h3 className="font-display text-2xl font-bold text-luxury-text mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-luxury-text/50 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {project.location}
                    </span>
                    <span>{project.completed}</span>
                  </div>
                  <p className="font-body text-sm text-luxury-text/60 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </MotionWrap>
          ))}
        </div>
      </Container>
    </section>
  )
}
