import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MotionWrap } from '@/components/ui/MotionWrap'
import { testimonials, partnerLogos } from '@/data/siteData'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-luxury-bg">
      <Container>
        <SectionHeader
          label="Client Testimonials"
          title="Trusted by Kenya's Leading Developers"
          description="Our reputation is built on the success of our clients' projects."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <MotionWrap key={t.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white p-8 md:p-10 border border-luxury-text/5 cursor-pointer transition-shadow duration-400 hover:shadow-[0_20px_60px_rgba(11,17,32,0.08)]"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2].map((star) => (
                    <svg key={star} className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-luxury-text/80 leading-relaxed text-lg mb-8">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-luxury-dark flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-luxury-gold">{t.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-luxury-text">{t.author}</h4>
                    <p className="font-body text-sm text-luxury-text/50">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </MotionWrap>
          ))}
        </div>

        {/* Partner Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-luxury-text/10"
        >
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-luxury-text/30 text-center mb-8">
            Trusted by leading developers and architectural firms
          </p>
          <div className="overflow-hidden">
            <div className="flex marquee-track">
              {[...partnerLogos, ...partnerLogos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display text-2xl text-luxury-text/20 font-bold whitespace-nowrap px-8"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
