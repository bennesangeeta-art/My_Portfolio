import {
  personalInfo,
  socialLinks,
  footerContent,
  academy,
} from '../data/portfolioData'

// Site footer with taglines, giant brand display, social links, and KodNest credit
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Taglines */}
        <div className="flex flex-col space-y-1">
          {footerContent.taglines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Column 2: Credential and View Work link */}
        <div className="flex flex-col md:items-center space-y-1">
          <p>{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline hover:text-white transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Column 3: Availability and current year */}
        <div className="flex flex-col md:items-end space-y-1">
          <p>Available for opportunities</p>
          <p>{currentYear}</p>
        </div>
      </div>

      {/* Middle: Huge centred brand name */}
      <div className="py-20 md:py-24 overflow-hidden text-center">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4]">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
        {/* Column 1: Contact link, copyright, and KodNest credit */}
        <div className="flex flex-col space-y-2">
          <a
            href="#contact"
            className="underline hover:text-white transition-colors w-fit"
          >
            Contact
          </a>
          <p className="text-white/60 text-[10px]">{footerContent.copyright}</p>
          <p className="text-white/60 text-[10px]">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener"
              className="underline hover:text-white transition-colors"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2: Primary email and social icons */}
        <div className="flex flex-col md:items-center space-y-3">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline hover:text-white transition-colors"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center space-x-5">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 3: Explore My GitHub link */}
        <div className="flex flex-col md:items-end">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

