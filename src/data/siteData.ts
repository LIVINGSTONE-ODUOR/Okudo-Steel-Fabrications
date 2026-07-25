import type { Project, Solution, Stat, Industry, Testimonial, ProcessStep } from '@/types'

export const stats: Stat[] = [
  { value: 15, label: 'Years of Experience' },
  { value: 500, label: 'Projects Delivered' },
  { value: 48, label: 'Developers Served' },
  { value: 120, label: 'Commercial Projects' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export const projects: Project[] = [
  {
    id: 'azure-Gate',
    title: 'Azure Gate',
    location: 'Nairobi, Kenya',
    category: 'Residential',
    completed: 'Completed 2025',
    description:
      'Premium architectural entrance systems, façade solutions, and outdoor lifestyle structures for a 32-unit luxury apartment development.',
    image: 'high quality gate.jpeg',
    tags: ['Architectural Entrance Systems', 'Façade Solutions', 'Outdoor Structures'],
  },
  {
    id: 'westlands-tower-Entrance',
    title: 'Business Tower Entrance',
    location: 'Nairobi, Kenya',
    category: 'Commercial',
    completed: 'Completed 2024',
    description:
      'Comprehensive structural steel framework, premium façade glazing, and architectural safety systems for a 15-storey commercial tower.',
    image: 'professional gate.jpeg',
    tags: ['Structural Steel', 'Façade Glazing', 'Safety Systems'],
  },
  {
    id: 'serena-resort',
    title: 'Serena Beach Resort & Spa',
    location: 'Mombasa, Kenya',
    category: 'Hospitality',
    completed: 'Completed 2025',
    description:
      'Custom outdoor lifestyle structures, modern shelter solutions, and architectural safety systems for a 5-star beachfront resort expansion.',
    image: 'outdoor shade.jpeg',
    tags: ['Outdoor Structures', 'Shelter Solutions', 'Safety Systems'],
  },
  {
    id: 'karen-gardens',
    title: 'Karen Gardens Staircase',
    location: 'Nairobi, Kenya',
    category: 'Residential',
    completed: 'Completed 2024',
    description:
      'Elegant staircase railings, balcony steelwork, and architectural safety systems for a 24-unit luxury garden estate development.',
    image: 'staircase railings.jpeg',
    tags: ['Architectural Safety Systems', 'Balcony Steelwork', 'Staircase Railings'],
  },
  {
    id: 'riverside-offices',
    title: 'Window & Façade Installations for Riverside Offices',
    location: 'Nairobi, Kenya',
    category: 'Commercial',
    completed: 'Completed 2025',
    description:
      'Custom window installations, modern façade glazing, and professional entrance systems for a premier office park development.',
    image: 'window pane.jpeg',
    tags: ['Window Installations', 'Façade Glazing', 'Entrance Systems'],
  },
  {
    id: 'diani-villas',
    title: 'Diani Beachfront Villas',
    location: 'Diani, Kenya',
    category: 'Hospitality',
    completed: 'Completed 2024',
    description:
      'Premium outdoor shade structures, balcony installations, and lifestyle frameworks for an exclusive beachfront villa collection.',
    image: 'balcony steel.jpeg',
    tags: ['Outdoor Structures', 'Balcony Solutions', 'Shade Systems'],
  },
]

export const solutions: Solution[] = [
  {
    id: 'entrance-systems',
    title: 'Architectural Entrance Systems',
    description:
      'Custom-designed entrance solutions that define first impressions. Engineered for security, elegance, and lasting performance in premium residential and commercial developments.',
    category: 'Architectural',
    image: 'high quality gate.jpeg',
    size: 'large',
  },
  {
    id: 'facade-glazing',
    title: 'Premium Façade & Glazing Solutions',
    description:
      'High-performance building envelopes that define architectural character while maximizing energy efficiency and natural light.',
    category: 'Facade',
    image: 'window design.jpeg',
    size: 'small',
  },
  {
    id: 'security-access',
    title: 'Security & Access Solutions',
    description:
      'Integrated security systems engineered for modern developments. Balancing robust protection with elegant architectural integration.',
    category: 'Security',
    image: 'steel door.jpeg',
    size: 'small',
  },
  {
    id: 'outdoor-structures',
    title: 'Outdoor Lifestyle Structures',
    description:
      'Transform outdoor spaces into premium living environments. Custom-designed pergolas, canopies, and shade structures for luxury residences, hotels, and commercial spaces.',
    category: 'Lifestyle',
    image: 'packing shade bigger.jpeg',
    size: 'large',
  },
  {
    id: 'safety-systems',
    title: 'Architectural Safety Systems',
    description:
      'Elegant balustrades, railings, and safety barriers that protect without compromising design vision.',
    category: 'Safety',
    image: 'staircase railing.jpeg',
    size: 'full',
  },
  {
    id: 'shelter-solutions',
    title: 'Modern Shelter & Shade Solutions',
    description:
      'Sophisticated canopy and shade structures that blend architectural beauty with functional protection.',
    category: 'Shelter',
    image: 'water tank stand.jpeg',
    size: 'full',
  },
]

export const industries: Industry[] = [
  { id: 'residential', title: 'Residential Developments', description: 'Gated communities, apartment complexes', image: 'staircase and staircase window.jpeg' },
  { id: 'luxury-homes', title: 'Luxury Homes', description: 'Private residences, villas, estates', image: 'high quality door.jpeg' },
  { id: 'commercial', title: 'Commercial Buildings', description: 'Office towers, retail centres', image: 'professional transparent door.jpeg' },
  { id: 'mixed-use', title: 'Mixed-Use Developments', description: 'Integrated lifestyle destinations', image: 'double window.jpeg' },
  { id: 'hospitality', title: 'Hospitality Projects', description: 'Hotels, resorts, lodges', image: 'chill and drink backyard.jpeg' },
  { id: 'industrial', title: 'Industrial Facilities', description: 'Warehouses, factories, logistics', image: 'watertank stand.jpeg' },
  { id: 'institutional', title: 'Institutional Projects', description: 'Schools, hospitals, government', image: 'transparent door.jpeg' },
  { id: 'infrastructure', title: 'Urban & Public Infrastructure', description: 'Transport, public spaces', image: 'professional packing.jpeg' },
]

export const testimonials: Testimonial[] = [
  {
    id: 'jm',
    quote:
      "Okudo Engineering transformed our vision for Azure Heights into reality. Their understanding of architectural details and commitment to quality elevated the entire development. They are not just a supplier — they are a true project partner.",
    author: 'James Mwangi',
    role: 'Director of Projects',
    company: 'Unity Homes',
    initials: 'JM',
  },
  {
    id: 'sk',
    quote:
      "We engaged Okudo for the structural steelwork on Westlands Business Tower. Their engineering precision and project management were exceptional. They delivered ahead of schedule with zero quality compromises. Our architects were thoroughly impressed.",
    author: 'Sarah Kamau',
    role: 'CEO',
    company: 'Pinnacle Construction Group',
    initials: 'SK',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description:
      'Deep engagement with architects, developers, and stakeholders to understand project vision, requirements, and technical specifications.',
  },
  {
    step: 2,
    title: 'Design & Engineering',
    description:
      'Detailed CAD and 3D modeling, structural calculations, and material selection to create solutions that balance aesthetics with structural integrity.',
  },
  {
    step: 3,
    title: 'Precision Fabrication',
    description:
      'State-of-the-art manufacturing with rigorous quality control. Every component is crafted to exact specifications using premium materials.',
  },
  {
    step: 4,
    title: 'Quality Assurance',
    description:
      'Comprehensive testing and inspection protocols to ensure every solution meets international standards and client expectations.',
  },
  {
    step: 5,
    title: 'Professional Installation',
    description:
      'Expert on-site installation managed by experienced project supervisors, ensuring seamless integration with the architectural timeline.',
  },
  {
    step: 6,
    title: 'Project Handover',
    description:
      'Comprehensive project documentation, client walkthrough, and post-installation support to ensure complete satisfaction and long-term performance.',
  },
]

export const partnerLogos = [
  'Unity Homes',
  'Pinnacle Group',
  'Sterling Developments',
  'Savannah Architects',
  'Crown Realty',
  'Urban Design Studio',
]
