import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { processSteps } from '@/data/siteData'

export function EngineeringProcess() {
  return (
    <section id="process" className="py-20 md:py-28 bg-luxury-dark text-white relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="process-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#process-grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <SectionHeader label="Our Process" title="The Okudo Engineering Process" />

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-luxury-gold to-luxury-gold/10" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-14 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] md:left-[23px] top-1 w-3 h-3 rounded-full bg-luxury-gold border-3 border-luxury-dark shadow-[0_0_0_1px_#B68D40]" />

                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <span className="font-display text-4xl md:text-5xl font-bold text-luxury-gold/20 leading-none shrink-0">
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="font-body text-white/60 max-w-xl">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
