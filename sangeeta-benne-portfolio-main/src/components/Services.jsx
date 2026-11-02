import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Hanging tag card that turns red when the scroll-driven SVG path passes its top position
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef.current || !cardRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const containerHeight = containerRef.current.offsetHeight
    const cardRelativeTop = cardRect.top - containerRect.top

    if (latest * containerHeight >= cardRelativeTop + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative transition-colors duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_20px_50px_rgba(255,42,42,0.45)] text-white'
          : 'bg-white shadow-xl border border-gray-200 text-gray-900'
      } ${className}`}
    >
      {/* Small punched hole circle at the top */}
      <div
        className={`w-5 h-5 rounded-full mx-auto mt-2 border-2 transition-colors duration-700 ${
          isActive
            ? 'bg-red-900/60 border-white/40'
            : 'bg-gray-100 border-gray-300'
        }`}
      />

      {/* Inner panel */}
      <div
        className={`rounded-[1.5rem] mt-4 p-8 min-h-[220px] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <span
          className={`text-3xl font-serif italic font-black transition-colors duration-700 ${
            isActive ? 'text-white/80' : 'text-gray-400'
          }`}
        >
          {number}
        </span>

        <div className="space-y-2 mt-4">
          <h3 className="text-2xl font-black">{title}</h3>
          <p
            className={`text-sm leading-relaxed transition-colors duration-700 ${
              isActive ? 'text-red-50' : 'text-gray-600'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

// Process / Services section with animated scroll path and hanging tag cards
export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopCurve =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  const cardPositions = [
    {
      className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] text-gray-900 pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest">
            {skillsContent.badge}
          </span>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow SVG at bottom right of heading */}
            <svg
              className="w-8 h-8 text-[#ff2a2a] inline-block ml-2 -mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 20 20"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop 3-layer SVG path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* 1. Faint guide path */}
          <path
            d={desktopCurve}
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* 2. Animated mask */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopCurve}
                stroke="white"
                strokeWidth="20"
                fill="none"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 3. Real black dashed path revealed by the mask */}
          <path
            d={desktopCurve}
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-layer vertical SVG path */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 2,0 L 2,100"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                stroke="white"
                strokeWidth="20"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          <path
            d="M 2,0 L 2,100"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Tag Cards container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const pos = cardPositions[index] || cardPositions[0]
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={pos.className}
                aosType={pos.aosType}
                aosDelay={pos.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}

          {/* Hand-written end note on desktop */}
          <p className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
            {skillsContent.endText}
          </p>
        </div>
      </div>
    </section>
  )
}

