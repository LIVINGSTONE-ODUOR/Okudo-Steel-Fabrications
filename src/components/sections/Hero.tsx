import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HeroCarousel } from '@/components/ui/HeroCarousel'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-luxury-dark">
      {/* Dynamic Background Carousel */}
      <HeroCarousel />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="gold-line" />
            <span className="font-body text-[11px] tracking-[0.25em] uppercase text-white/70">
              Premium Architectural Engineering
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Engineering Spaces.<br />
            <span className="text-luxury-gold">Elevating Properties.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-lg sm:text-xl text-white/70 max-w-2xl mt-8 leading-relaxed"
          >
            Delivering premium steel and aluminium solutions that enhance residential, commercial, and architectural developments across Kenya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button
              href="#projects"
              variant="primary"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              View Projects
            </Button>
            <Button
              href="#contact"
              variant="outline-light"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            >
              Request Consultation
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hidden md:flex items-center gap-3 mt-20"
          >
            <span className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
            <span className="font-body text-[11px] tracking-[0.2em] uppercase text-white/40">Scroll to explore</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom right stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="font-display text-6xl font-bold text-white/10">15+</div>
            <div className="font-body text-xs tracking-wider uppercase text-white/20">Years of Excellence</div>
          </div>
          <div className="w-px h-16 bg-white/10" />
          <div className="text-right">
            <div className="font-display text-6xl font-bold text-white/10">500+</div>
            <div className="font-body text-xs tracking-wider uppercase text-white/20">Projects Delivered</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
