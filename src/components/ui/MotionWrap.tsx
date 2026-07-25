import { motion } from 'framer-motion'

interface MotionWrapProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
}

export function MotionWrap({ children, delay = 0, className, direction = 'up' }: MotionWrapProps) {
  const directionMap = {
    up: { y: 40 },
    left: { x: -40 },
    right: { x: 40 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
