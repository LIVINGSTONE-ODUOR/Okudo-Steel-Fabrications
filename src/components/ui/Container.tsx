import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div' | 'footer' | 'header'
  id?: string
}

export function Container({ children, className, as: Tag = 'section', id }: ContainerProps) {
  return (
    <Tag id={id} className={cn('max-w-[1440px] mx-auto px-6 lg:px-12', className)}>
      {children}
    </Tag>
  )
}
