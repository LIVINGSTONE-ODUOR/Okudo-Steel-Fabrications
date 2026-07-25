import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactInfo, serviceOptions } from '@/data/siteData'
import type { ContactFormStatus, ContactFormData } from '@/types'

const mailtoEndpoint = 'https://formsubmit.co/ajax/alusteel.ok@gmail.com'

function generateWhatsAppMessage(data: ContactFormData): string {
  return `*New Enquiry from Okudo Engineering Website*
    
*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email || 'Not provided'}
*Service Required:* ${data.service}
*Project Details:*
${data.details}

Sent via okudoengineering.com`
}

function validateForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name'
  }
  if (!data.phone.trim()) {
    errors.phone = 'Please enter your phone number'
  } else if (!/^[\d\s+\-()]{7,15}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number'
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!data.service) {
    errors.service = 'Please select a service'
  }
  if (!data.details.trim() || data.details.trim().length < 10) {
    errors.details = 'Please provide more details about your project (at least 10 characters)'
  }

  return errors
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<ContactFormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const handleSendEmail = async (data: ContactFormData): Promise<boolean> => {
    try {
      const response = await fetch(mailtoEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || 'Not provided',
          service: data.service,
          message: data.details,
          _subject: `New Enquiry from ${data.name} - ${data.service}`,
          _template: 'table',
        }),
      })
      return response.ok
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validate
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    // Send email (fire and forget - don't block WhatsApp)
    const emailSent = await handleSendEmail(formData)

    // Always open WhatsApp
    const whatsappMessage = generateWhatsAppMessage(formData)
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    if (emailSent) {
      setStatus('success')
    } else {
      // Even if email fails, WhatsApp worked
      setStatus('success')
      setErrorMessage('Note: Email could not be sent, but your WhatsApp message has been opened.')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', phone: '', email: '', service: '', details: '' })
    setErrors({})
    setStatus('idle')
    setErrorMessage('')
  }

  const inputBase =
    'w-full bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm px-5 py-3.5 transition-all duration-300 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30'

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-luxury-gold/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-3">Enquiry Sent Successfully!</h3>
            <p className="font-body text-white/60 max-w-md mx-auto mb-2">
              Your enquiry has been received. We will contact you shortly via WhatsApp and email.
            </p>
            {errorMessage && (
              <p className="font-body text-sm text-yellow-400/80 max-w-md mx-auto mb-4">{errorMessage}</p>
            )}
            <p className="font-body text-sm text-white/40 mb-8">
              A WhatsApp conversation has been opened with our team.
            </p>
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 bg-luxury-gold text-white px-8 py-3 font-body font-semibold text-sm transition-all duration-300 hover:bg-luxury-gold/90"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              Send Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block font-body text-xs font-semibold tracking-wider uppercase text-white/50 mb-2">
                Full Name <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Mwangi"
                className={`${inputBase} ${errors.name ? '!border-red-400/50 !ring-red-400/30' : ''}`}
                disabled={status === 'submitting'}
              />
              {errors.name && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="font-body text-xs text-red-400 mt-1.5">
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className="block font-body text-xs font-semibold tracking-wider uppercase text-white/50 mb-2">
                Phone Number <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+254 712 345 678"
                className={`${inputBase} ${errors.phone ? '!border-red-400/50 !ring-red-400/30' : ''}`}
                disabled={status === 'submitting'}
              />
              {errors.phone && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="font-body text-xs text-red-400 mt-1.5">
                  {errors.phone}
                </motion.p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block font-body text-xs font-semibold tracking-wider uppercase text-white/50 mb-2">
                Email Address <span className="text-white/30">(optional)</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="john@example.com"
                className={`${inputBase} ${errors.email ? '!border-red-400/50 !ring-red-400/30' : ''}`}
                disabled={status === 'submitting'}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="font-body text-xs text-red-400 mt-1.5">
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Service Required */}
            <div>
              <label htmlFor="contact-service" className="block font-body text-xs font-semibold tracking-wider uppercase text-white/50 mb-2">
                Service Required <span className="text-luxury-gold">*</span>
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23B68D40%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat ${
                  errors.service ? '!border-red-400/50 !ring-red-400/30' : ''
                } ${!formData.service ? 'text-white/30' : 'text-white'}`}
                disabled={status === 'submitting'}
              >
                <option value="" disabled className="bg-luxury-dark">
                  Select a service...
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-luxury-dark">
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="font-body text-xs text-red-400 mt-1.5">
                  {errors.service}
                </motion.p>
              )}
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="contact-details" className="block font-body text-xs font-semibold tracking-wider uppercase text-white/50 mb-2">
                Project Details <span className="text-luxury-gold">*</span>
              </label>
              <textarea
                id="contact-details"
                rows={5}
                value={formData.details}
                onChange={(e) => handleChange('details', e.target.value)}
                placeholder="Tell us about your project — scope, timeline, materials, and any specific requirements..."
                className={`${inputBase} resize-none ${errors.details ? '!border-red-400/50 !ring-red-400/30' : ''}`}
                disabled={status === 'submitting'}
              />
              {errors.details && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="font-body text-xs text-red-400 mt-1.5">
                  {errors.details}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-luxury-gold text-white font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300 hover:bg-luxury-gold/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending Enquiry...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  Send Enquiry
                </>
              )}
            </button>

            <p className="font-body text-xs text-white/30 text-center">
              By submitting, you agree to be contacted via WhatsApp and email. We will open WhatsApp with a pre-filled message.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
