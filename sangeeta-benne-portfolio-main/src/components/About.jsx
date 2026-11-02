import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

// About section with spring-animated 3D flip lanyard ID badge, visiting card back, and torn-paper SVG divider
export default function About() {
  const [flipped, setFlipped] = useState(false)

  const qrValue =
    socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top-right decorative 4-point star */}
      <svg
        className="w-10 h-10 text-black opacity-30 animate-pulse absolute top-12 right-12 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Bottom-left decorative 4-point star */}
      <svg
        style={{ animationDelay: '1s' }}
        className="w-8 h-8 text-black opacity-30 animate-pulse absolute bottom-36 left-10 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Inner container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID badge on a lanyard animated once with Framer Motion */}
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
          className="md:w-[350px] shrink-0 relative flex flex-col items-center mx-auto md:mx-0"
        >
          {/* Black lanyard string */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0" />

          {/* Grey clip rectangle */}
          <div className="w-10 h-7 bg-gray-400 rounded-md border-2 border-gray-700 z-10 -mb-2 shadow-md" />

          {/* 3D Flip Card Button Wrapper */}
          <button
            type="button"
            aria-label="Flip ID card"
            onClick={() => setFlipped((prev) => !prev)}
            className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none z-10 cursor-pointer"
          >
            <div
              style={{
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
              className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
            >
              {/* FRONT FACE: Dark ID card with portrait */}
              <div className="
                absolute inset-0 [backface-visibility:hidden]
                bg-gray-900 w-full h-full rounded-2xl p-3 shadow-2xl flex flex-col
              ">
                {/* Small cutout slot at the top */}
                <div className="w-12 h-2 bg-gray-700 rounded-full mx-auto mb-3 shrink-0" />

                {/* Portrait photo inside */}
                <img
                  src={stackImage}
                  alt="SANGEETA BENNE — Java Full Stack Developer, KodNest student"
                  className="w-full flex-1 rounded-xl object-cover object-top overflow-hidden"
                />
              </div>

              {/* BACK FACE: Visiting Card */}
              <div className="
                absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
                bg-gradient-to-br from-[#141414] to-[#1f1f1f] w-full h-full rounded-2xl shadow-2xl
                overflow-hidden flex flex-col justify-between text-white text-left
              ">
                {/* 6px red bar across the top */}
                <div className="w-full h-[6px] bg-[#ff2a2a] shrink-0" />

                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* Top identity & contact details */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-xl font-black leading-tight">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </div>
                      {personalInfo.title && (
                        <div className="text-xs uppercase tracking-widest text-red-400 mt-0.5">
                          {personalInfo.title}
                        </div>
                      )}
                    </div>

                    <hr className="border-white/10" />

                    {/* Contact rows (hide any row whose value is empty) */}
                    <div className="space-y-2">
                      {personalInfo.emails?.primary && (
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${personalInfo.emails.primary}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white truncate underline-offset-2 hover:underline"
                          >
                            {personalInfo.emails.primary}
                          </a>
                        </div>
                      )}

                      {personalInfo.phone && (
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white truncate underline-offset-2 hover:underline"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="truncate">
                            {personalInfo.location}
                          </span>
                        </div>
                      )}

                      {socialLinks.linkedin && (
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white underline-offset-2 hover:underline"
                          >
                            LinkedIn
                          </a>
                        </div>
                      )}

                      {socialLinks.github && (
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white underline-offset-2 hover:underline"
                          >
                            GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom QR Code box */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="bg-white rounded-lg p-2 shrink-0">
                      <QRCode value={qrValue} size={76} />
                    </div>
                    <span className="text-[10px] text-white/60 leading-snug">
                      Scan to connect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Flip card hint */}
          <p className="text-xs font-bold text-black/60 mt-4">
            Tap the card to flip ↻
          </p>
        </motion.div>

        {/* Right: Heading and bio */}
        <div data-aos="fade-left" className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-black">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider along the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 md:h-28 fill-white pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}
