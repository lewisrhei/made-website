'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { vtmData } from '@/lib/vtm-data'
import { useState, useEffect } from 'react'

// Agent Avatar Component with Image to Video Hover
function AgentAvatar({ agent, index }: { agent: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Preload video when component mounts
  useEffect(() => {
    if (agent.videoWelcome) {
      const video = document.createElement('video')
      video.src = agent.videoWelcome
      video.onloadeddata = () => setVideoLoaded(true)
    }
  }, [agent.videoWelcome])

  // Position agents with consistent sizing between images and videos
  // Images are 640x480, videos are 736x544
  // We'll use a fixed container size and scale content to fit
  const baselineHeight = 480 // 50% bigger than 320
  const containerWidth = 360 // 50% bigger than 240
  
  // Truly centered positioning with overlapping arrangement
  // For 6 agents to be centered, position them symmetrically around 0
  const spacing = 200 // Reduced spacing to bring them closer together
  
  // Position agents symmetrically: 3 on left, 3 on right of center
  const agentPositions: Record<string, { x: number; bottomOffset: number }> = {
    'enzo': { x: -spacing * 2.5, bottomOffset: 0 },  // -500
    'lila': { x: -spacing * 1.5, bottomOffset: 0 },  // -300
    'amie': { x: -spacing * 0.5, bottomOffset: 0 },  // -100
    'milo': { x: spacing * 0.5, bottomOffset: 0 },   // 100
    'zara': { x: spacing * 1.5, bottomOffset: 0 },   // 300
    'remi': { x: spacing * 2.5, bottomOffset: 0 }    // 500
  }
  
  const position = agentPositions[agent.id] || { x: 0, bottomOffset: 0 }
  const figmaOrder = ['enzo', 'lila', 'amie', 'milo', 'zara', 'remi']
  const agentIndex = figmaOrder.indexOf(agent.id)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      transition={{ 
        duration: 0.8,
        delay: agentIndex * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="absolute transition-transform duration-200"
      style={{
        left: `calc(50% + ${position.x}px - ${containerWidth/2}px)`,
        bottom: '60px',
        width: `${containerWidth}px`,
        height: `${baselineHeight}px`,
        zIndex: isHovered ? 20 : 6 - agentIndex,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}
    >
      <div className="relative w-full h-full">
        {/* Invisible hover trigger area - narrow width, full height */}
        <div 
          className="absolute inset-x-[30%] inset-y-0 z-30 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {/* Static Image - Consistent sizing */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-end justify-center"
            >
              {agent.heroImage ? (
                <img 
                  src={agent.heroImage} 
                  alt={agent.name}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">{agent.avatar}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video on Hover - Consistent sizing */}
        <AnimatePresence>
          {isHovered && agent.videoWelcome && videoLoaded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-end justify-center"
            >
              <video
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={agent.videoWelcome} type="video/webm" />
              </video>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Speech Bubble on Hover - At same level as images */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-start justify-center pointer-events-none z-50"
            >
              <div className="mt-40">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-2xl relative">
                  <p className="text-black font-semibold text-sm whitespace-nowrap">
                    {agent.catchphrase || `Hi, I'm ${agent.name}!`}
                  </p>
                  {/* Speech bubble tail */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 
                    border-l-[8px] border-l-transparent
                    border-r-[8px] border-r-transparent
                    border-t-[8px] border-t-white/95">
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle glow effect on hover - behind everything, spotlight effect */}
        <motion.div 
          className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[70%] bg-gradient-to-br ${agent.gradientColors} blur-2xl`}
          style={{ zIndex: -1 }}
          animate={{ 
            opacity: isHovered ? 0.4 : 0 
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Agent Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + agentIndex * 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-10"
          style={{ bottom: '-35px' }}
        >
          <h3 className="font-semibold text-white text-base drop-shadow-lg">{agent.name}</h3>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function CinematicHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Removed overlay to let gradient show through */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Epic Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8">
            <span className="text-white/60 text-sm uppercase tracking-widest font-medium">Introducing Made</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Your AI creative team.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/60 to-white/30">
              Six agents. One mission.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-16">
            Professional creators powered by AI. From ideation to publication.
          </p>
        </motion.div>

        {/* Agent Team Formation */}
        <motion.div 
          className="relative h-[420px] mb-4 flex items-end justify-center"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30
          }}
        >
          {/* Agents */}
          <div className="relative w-full h-full">
            {vtmData.map((agent, index) => (
              <AgentAvatar key={agent.id} agent={agent} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-medium text-base transition-all duration-300 hover:scale-[1.02]">
            Get Started
          </button>

          <button className="px-8 py-4 backdrop-blur-sm bg-white/10 rounded-2xl font-medium text-base text-white hover:bg-white/15 transition-all">
            Watch Demo
          </button>
        </motion.div>

      </div>
    </section>
  )
}