import { Container } from '@/components/ui/Container'
import { formatImagePath } from '@/lib/utils'

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-luxury-dark border-t border-white/5 py-16">
      <Container as="div">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <img
                src={formatImagePath('Okudo logo.jpeg')}
                alt="Okudo Engineering"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <span className="font-display text-xl font-bold text-white block leading-none">Okudo</span>
                <span className="font-body text-[10px] tracking-[0.15em] uppercase text-luxury-gold block leading-none mt-0.5">Engineering</span>
              </div>
            </a>
            <p className="font-body text-sm text-white/40 max-w-xs leading-relaxed">
              Premium steel and aluminium engineering solutions for residential, commercial, and architectural developments across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold text-white/80 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Projects', 'Solutions', 'Process', 'Industries', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(`#${item.toLowerCase()}`) }}
                    className="font-body text-sm text-white/40 hover:text-luxury-gold transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-base font-bold text-white/80 mb-6">Solutions</h4>
            <ul className="space-y-3">
              {['Entrance Systems', 'Façade Solutions', 'Safety Systems', 'Lifestyle Structures', 'Shelter Solutions'].map(
                (item) => (
                  <li key={item}>
                    <span className="font-body text-sm text-white/40 hover:text-luxury-gold transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-bold text-white/80 mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-white/40">Nairobi, Kenya</li>
              <li>
                <a href="tel:+254700123456" className="font-body text-sm text-white/40 hover:text-luxury-gold transition-colors">
                  +254 700 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:projects@okudoengineering.com"
                  className="font-body text-sm text-white/40 hover:text-luxury-gold transition-colors"
                >
                  projects@okudoengineering.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30">&copy; 2026 Okudo Engineering. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="font-body text-xs text-white/30 hover:text-luxury-gold transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-body text-xs text-white/30 hover:text-luxury-gold transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
