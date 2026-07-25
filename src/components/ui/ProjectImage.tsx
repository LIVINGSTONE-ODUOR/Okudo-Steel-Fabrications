import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
}

export function ProjectImage({ src, alt, className, wrapperClassName }: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={cn('relative overflow-hidden bg-luxury-dark/10', wrapperClassName)}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark/5 to-luxury-gold/10 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark/20 to-luxury-dark/40 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-luxury-gold/30 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/>
            </svg>
            <span className="text-luxury-gold/40 text-xs">Image unavailable</span>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'w-full h-full object-cover transition-all duration-800',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  )
}
