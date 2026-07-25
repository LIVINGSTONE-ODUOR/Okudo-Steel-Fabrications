import { motion } from 'framer-motion'
import { ProjectImage } from './ProjectImage'

const stripImages = [
  { src: 'office door.jpeg', label: 'Commercial Access' },
  { src: 'transparent door unfinished.jpeg', label: 'Custom Fabrication' },
  { src: 'unfinishe staircase railings.jpeg', label: 'Railing Systems' },
  { src: 'unfinished balcony.jpeg', label: 'Balcony Framing' },
  { src: 'water tank stand.jpeg', label: 'Structural Supports' },
]

export function ImageStrip() {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="gold-line" />
        <span className="section-label">Project Gallery</span>
      </motion.div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-luxury-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-luxury-bg to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 lg:-mx-12 px-6 lg:px-12"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(182, 141, 64, 0.3) transparent',
          }}
        >
          {[...stripImages, ...stripImages].map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % stripImages.length) * 0.08 }}
              className="group shrink-0 cursor-pointer"
            >
              <div className="relative w-[240px] h-[180px] md:w-[280px] md:h-[200px] overflow-hidden border border-luxury-text/5 hover:border-luxury-gold/30 transition-all duration-500">
                <ProjectImage
                  src={`/images/${img.src}`}
                  alt={img.label}
                  wrapperClassName="w-full h-full"
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 text-white/0 group-hover:text-white/90 text-xs font-medium transition-colors duration-500">
                  {img.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
