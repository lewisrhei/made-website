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

  // Position agents based on Figma layout with specific dimensions
  // Each agent has their own width/height from Figma
  // Using Milo (208px) as baseline height for bottom alignment
  const baselineHeight = 208 // Milo's height (tallest)
  const agentDimensions: Record<string, { width: number; height: number; x: number; bottomOffset: number }> = {
    'enzo': { width: 201, height: 206, x: -380, bottomOffset: baselineHeight - 206 },  // 2px up
    'lila': { width: 184, height: 185, x: -210, bottomOffset: baselineHeight - 185 },  // 23px up
    'amie': { width: 189, height: 191, x: -50, bottomOffset: baselineHeight - 191 },   // 17px up
    'milo': { width: 227, height: 208, x: 120, bottomOffset: 0 },                      // baseline
    'zara': { width: 151, height: 175, x: 310, bottomOffset: baselineHeight - 175 },   // 33px up
    'remi': { width: 213, height: 195, x: 430, bottomOffset: baselineHeight - 195 }    // 13px up
  }
  
  const dimensions = agentDimensions[agent.id] || { width: 200, height: 200, x: 0, bottomOffset: 0 }
  const figmaOrder = ['enzo', 'lila', 'amie', 'milo', 'zara', 'remi']
  const agentIndex = figmaOrder.indexOf(agent.id)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: dimensions.x,
        y: 0
      }}
      transition={{ 
        duration: 0.8,
        delay: agentIndex * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="absolute"
      style={{
        left: '50%',
        bottom: 0,
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        transform: `translateX(-50%) translateY(${dimensions.bottomOffset}px)`,
        zIndex: 6 - agentIndex
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <div className="relative w-full h-full cursor-pointer">
        {/* Static Image - No rounded, show full character */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {agent.heroImage ? (
                <img 
                  src={agent.heroImage} 
                  alt={agent.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">{agent.avatar}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video on Hover */}
        <AnimatePresence>
          {isHovered && agent.videoWelcome && videoLoaded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <video
                className="w-full h-full object-contain drop-shadow-2xl"
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

        {/* Subtle glow effect on hover */}
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${agent.gradientColors} blur-2xl opacity-0 hover:opacity-40 transition-opacity duration-500 scale-125`} />
        
        {/* Agent Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + agentIndex * 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
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

        {/* Agent Team Formation - Figma Layout */}
        <motion.div 
          className="relative h-[250px] mb-16 flex items-end justify-center"
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
          {/* Radial burst effect background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[400px]">
              {/* Add decorative radial lines */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-[1px] h-[200px] bg-gradient-to-t from-transparent via-white/5 to-transparent"
                  style={{
                    transformOrigin: 'center bottom',
                    transform: `rotate(${i * 30}deg) translateX(-50%)`
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                />
              ))}
            </div>
          </div>

          {/* Agents in arc formation */}
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

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}