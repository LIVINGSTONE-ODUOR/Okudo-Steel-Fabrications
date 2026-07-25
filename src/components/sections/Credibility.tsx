import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useScrollReveal, useAnimatedCounter } from '@/hooks/useAnimations'
import { stats } from '@/data/siteData'
import { useEffect } from 'react'

function AnimatedStat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, isVisible } = useScrollReveal(0.5)
  const { count, setStarted } = useAnimatedCounter(value)

  useEffect(() => {
    if (isVisible) setStarted(true)
  }, [isVisible, setStarted])

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-gold mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="font-body text-sm text-luxury-text/60">{label}</div>
      <motion.div
        className="gold-line mx-auto mt-4"
        initial={{ width: 0 }}
        whileHover={{ width: 48 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

export function Credibility() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-luxury-text/5">
      <Container>
        <SectionHeader
          label="Our Credentials"
          title="Built on a Foundation of Trust"
          description="For over a decade, we have been the preferred engineering partner for Kenya's most prestigious developments."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
