import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatImagePath } from '@/lib/utils'

const carouselImages = [
  'gate.webp',
  'staircase.webp',
  'water tank stand higher.webp',
  'windows installation.webp',
  'staircase railing.webp',
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState<boolean[]>(new Array(carouselImages.length).fill(false))

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }, [])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Preload all images
  useEffect(() => {
    carouselImages.forEach((filename, i) => {
      const img = new Image()
      img.onload = () => {
        setLoaded((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }
      img.src = formatImagePath(filename)
    })
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Base static gradient background while images load */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-dark to-luxury-dark/95" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {loaded[currentIndex] && (
            <img
              src={formatImagePath(carouselImages[currentIndex])}
              alt=""
              className="w-full h-full object-cover opacity-35"
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxury-dark to-transparent" />

      {/* Decorative gold lines */}
      <div className="absolute top-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-luxury-gold/40 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-luxury-gold/40 to-transparent" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? 'w-6 bg-luxury-gold'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
