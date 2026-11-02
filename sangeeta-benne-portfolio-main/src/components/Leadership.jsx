import { leadershipList } from '../data/portfolioData'

// Alternating timeline card for each leadership/activity item
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative flex items-start md:items-center justify-between w-full ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Red glowing dot on the vertical timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_15px_rgba(255,42,42,0.9)] border-2 border-white z-10" />

      {/* Card (45% width on md+, offset from left line on mobile) */}
      <div
        data-aos={isEven ? 'fade-right' : 'fade-left'}
        className={`w-full pl-12 md:pl-0 md:w-[45%] ${
          isEven ? 'md:text-right' : 'md:text-left'
        }`}
      >
        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 space-y-2">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
              {item.badge}
            </span>
          </div>
          <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors">
            {item.title}
          </h3>
          <p className="font-mono uppercase text-xs text-red-400 tracking-widest">
            {item.role}
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Empty spacer on the opposite side for md+ */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  )
}

// Leadership & Engagement timeline section
export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-28 pb-28 px-6 md:px-12 relative overflow-hidden">
      {/* Top torn-paper divider transitioning from the red Internships section */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 -translate-y-[1px] fill-[#ff2a2a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Centred Header */}
        <div
          data-aos="fade-up"
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-sm md:text-base">
            Academic project collaboration, technical workshops, and continuous developer growth.
          </p>
        </div>

        {/* Vertical Timeline */}
        {leadershipList.length > 0 && (
          <div className="relative space-y-12">
            {/* 2px vertical gradient line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

            {leadershipList.map((item, index) => (
              <LeadershipItem key={item.title} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

