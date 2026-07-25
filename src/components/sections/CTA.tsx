import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/ui/ContactForm'
import { contactInfo } from '@/data/siteData'

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-luxury-dark text-white relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-luxury-gold/20 to-transparent" aria-hidden="true" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-luxury-gold/20 to-transparent" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="gold-line" />
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-white/60">Start Your Project</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Let&apos;s Build Something<br />
              <span className="text-luxury-gold">Exceptional.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base md:text-lg text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Request a project consultation with our engineering team. Fill out the form and we&apos;ll respond via WhatsApp and email within 24 hours.
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-4 p-5 border border-white/10 hover:border-luxury-gold/30 transition-all duration-500 group"
              >
                <svg className="w-6 h-6 text-luxury-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <h4 className="font-body text-sm font-semibold text-white/80">Call Us</h4>
                  <p className="font-body text-xs text-white/40 group-hover:text-luxury-gold transition-colors">{contactInfo.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-white/10 hover:border-luxury-gold/30 transition-all duration-500 group"
              >
                <svg className="w-6 h-6 text-luxury-gold shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <h4 className="font-body text-sm font-semibold text-white/80">WhatsApp</h4>
                  <p className="font-body text-xs text-white/40 group-hover:text-luxury-gold transition-colors">Chat with our team</p>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-5 border border-white/10 hover:border-luxury-gold/30 transition-all duration-500 group sm:col-span-2"
              >
                <svg className="w-6 h-6 text-luxury-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <h4 className="font-body text-sm font-semibold text-white/80">Email Us</h4>
                  <p className="font-body text-xs text-white/40 group-hover:text-luxury-gold transition-colors break-all">{contactInfo.email}</p>
                </div>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-white/30"
            >
              <span className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                15+ Years Experience
              </span>
              <span className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                500+ Projects
              </span>
              <span className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                48+ Developers Served
              </span>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white/[0.03] border border-white/10 p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Request a Consultation</h3>
              <p className="font-body text-sm text-white/40 mb-8">
                Fill in the form below and we&apos;ll get back to you via WhatsApp and email.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
