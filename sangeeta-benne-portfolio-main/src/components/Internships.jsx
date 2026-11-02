import { internshipsList } from '../data/portfolioData'

// Individual internship card displaying role, organization, skills gained, and technologies
function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        {/* Top row: duration and mini badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-white/40 text-xs uppercase tracking-widest">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & organization */}
        <div>
          <h3 className="text-2xl font-black text-white leading-snug">
            {intern.role}
          </h3>
          <p className="uppercase text-red-200 font-bold text-sm tracking-wider mt-1">
            {intern.organization}
          </p>
        </div>

        {/* Skills Gained bulleted list */}
        <div className="space-y-2 pt-2">
          <p className="text-white/80 text-xs font-bold uppercase tracking-wider">
            Skills Gained:
          </p>
          <ul className="list-disc list-inside space-y-1 text-red-50 text-sm">
            {intern.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Technologies row of mono pills */}
      <div className="border-t border-white/15 pt-4 space-y-2">
        <p className="text-white/80 text-xs font-bold uppercase tracking-wider">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-black/30 border border-white/15 font-mono text-xs text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Work experience / internships section
export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top torn-paper SVG divider transitioning from the dark section above */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#0a0a0a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="w-10 h-10 text-black opacity-20 animate-pulse absolute bottom-10 left-10 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        {/* Centred Header */}
        <div
          data-aos="fade-up"
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base font-medium">
            Hands-on industry training and full-stack software development experience.
          </p>
        </div>

        {/* Internships grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${intern.role}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

