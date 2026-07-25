export interface Project {
  id: string
  title: string
  location: string
  category: string
  completed: string
  description: string
  image: string
  tags: string[]
}

export interface Solution {
  id: string
  title: string
  description: string
  category: string
  image: string
  size: 'large' | 'small' | 'full'
}

export interface Stat {
  value: number
  suffix?: string
  label: string
}

export interface Industry {
  id: string
  title: string
  description: string
  image: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  initials: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactInfo {
  phone: string
  phoneDisplay: string
  email: string
  location: string
  whatsapp: string
  whatsappUrl: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  details: string
}

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error'
