import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'outline-light'
  href?: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  icon,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-sm tracking-[0.02em] cursor-pointer transition-all duration-400'

  const variants = {
    primary: `${base} bg-luxury-gold text-white btn-gold-hover`,
    outline: `${base} bg-transparent text-luxury-text border border-luxury-text/20 hover:border-luxury-gold hover:text-luxury-gold`,
    'outline-light': `${base} bg-transparent text-white border border-white/20 hover:border-luxury-gold hover:text-luxury-gold`,
  }

  const content = (
    <>
      <span className="relative z-1">{children}</span>
      {icon && <span className="relative z-1 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cn(variants[variant], 'group', className)}>
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(variants[variant], 'group', className)}
    >
      {content}
    </button>
  )
}
