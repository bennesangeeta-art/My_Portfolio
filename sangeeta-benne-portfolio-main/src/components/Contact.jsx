import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

// Contact section with parallax backdrop, EmailJS form submission, and mailto fallback
export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form.querySelector('#firstName')?.value.trim() || ''
    const lastName = form.querySelector('#lastName')?.value.trim() || ''
    const email = form.querySelector('#email')?.value.trim() || ''
    const message = form.querySelector('#message')?.value.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax giant "Contact" backdrop */}
      <motion.div
        style={{ y }}
        className="absolute top-12 left-0 w-full pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <div
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/10"
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground red card aligned to the right */}
      <div className="w-full flex justify-end relative z-10">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white"
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Reach Me
            </span>

            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-black/20 border border-white/30 text-xs font-bold uppercase tracking-wider hover:bg-black/40 transition-colors"
              >
                DM on Instagram
              </a>
            )}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-12"
          >
            {/* Two columns on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left column: First Name, Last Name, Email */}
              <div className="flex flex-col gap-8">
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              {/* Right column: Message textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none resize-none min-h-[120px] h-full transition-colors"
                />
              </div>
            </div>

            {/* Bottom row: permission checkbox, note, urgent mailto, and submit button */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4">
              <div className="space-y-3 max-w-md">
                <label className="flex items-start gap-3 cursor-pointer text-sm text-white/90">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-black w-4 h-4 rounded cursor-pointer"
                  />
                  <span>
                    I agree to share my contact details for communication regarding opportunities.
                  </span>
                </label>

                <p className="text-xs text-white/80 leading-relaxed">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>

                <p className="text-xs text-white/90">
                  Urgent? Email directly at{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline font-bold hover:text-black transition-colors"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </p>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full border font-bold text-sm transition-all duration-300 cursor-pointer ${
                    status === 'sending'
                      ? 'bg-white/20 border-white/30 text-white/70 cursor-wait'
                      : status === 'success'
                        ? 'bg-green-600 border-green-500 text-white'
                        : status === 'error'
                          ? 'bg-red-900 border-red-700 text-white'
                          : 'border-white text-white hover:bg-white hover:text-[#ff2a2a]'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  )}

                  {status === 'success' && <span>Sent Successfully ✓</span>}

                  {status === 'error' && <span>Failed — Try Again</span>}

                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

