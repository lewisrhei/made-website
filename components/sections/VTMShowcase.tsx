'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { vtmData } from '@/lib/vtm-data'
import { ChevronRight, Sparkles, MessageSquare, Zap, Shield } from 'lucide-react'
import { useRef } from 'react'

export default function VTMShowcase() {
  const [selectedVTM, setSelectedVTM] = useState(vtmData[0])
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Dynamic background based on selected VTM */}
      <AnimatePresence>
        <motion.div
          key={selectedVTM.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${selectedVTM.bgColor}`}
        />
      </AnimatePresence>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with personality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span>6 AI Agents, Each with Unique Superpowers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet Your <span className="text-gradient">Dream Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Not just bots - these are AI personalities who understand your creative vision and work tirelessly to make it reality
          </p>
        </motion.div>

        {/* VTM Cards Grid - More Visual */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {vtmData.map((vtm, index) => (
            <motion.div
              key={vtm.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedVTM(vtm)}
              className={`relative cursor-pointer group`}
            >
              {/* Card */}
              <div className={`relative p-4 rounded-2xl transition-all duration-300 ${
                selectedVTM.id === vtm.id 
                  ? 'glass border-2 shadow-2xl' 
                  : 'glass-dark border border-white/5 hover:border-white/20'
              } ${selectedVTM.id === vtm.id ? `border-${vtm.color.replace('text-', '')}` : ''}`}>
                
                {/* Video/Avatar */}
                <div className="relative mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-made-dark-accent to-made-dark aspect-square">
                  {vtm.videoIdle ? (
                    <video
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={vtm.videoIdle} type="video/webm" />
                    </video>
                  ) : (
                    <div className="flex items-center justify-center h-full text-5xl">
                      {vtm.avatar}
                    </div>
                  )}
                  
                  {/* Active indicator */}
                  {selectedVTM.id === vtm.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    />
                  )}
                </div>

                {/* Name & Role */}
                <h3 className={`font-bold text-sm ${vtm.color}`}>{vtm.name}</h3>
                <p className="text-xs text-gray-400">{vtm.role}</p>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${vtm.bgColor} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
                />
              </div>

              {/* Selection Glow */}
              {selectedVTM.id === vtm.id && (
                <motion.div
                  layoutId="vtm-glow"
                  className={`absolute -inset-1 rounded-2xl ${vtm.bgColor} blur-xl opacity-30`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Selected VTM Deep Dive */}
        <motion.div
          key={selectedVTM.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Video & Personality */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden glass border border-white/10">
              {/* Large Video Display */}
              <div className="aspect-video bg-gradient-to-br from-made-dark-accent to-made-dark relative">
                {selectedVTM.videoWelcome ? (
                  <video
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                  >
                    <source src={selectedVTM.videoWelcome} type="video/webm" />
                  </video>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-8xl"
                    >
                      {selectedVTM.avatar}
                    </motion.div>
                  </div>
                )}

                {/* Personality Badge */}
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  className="absolute top-4 left-4 px-4 py-2 glass rounded-full text-sm font-medium"
                >
                  <span className={selectedVTM.color}>●</span> {selectedVTM.personality}
                </motion.div>
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <h3 className={`text-3xl font-bold ${selectedVTM.color} mb-2`}>
                  {selectedVTM.name}
                </h3>
                <p className="text-lg text-gray-300 mb-4">{selectedVTM.description}</p>
                
                {/* Catchphrase */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10"
                >
                  <MessageSquare className={`w-5 h-5 ${selectedVTM.color} mb-2`} />
                  <p className="text-white font-medium italic">"{selectedVTM.catchphrase}"</p>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-6 py-3 ${selectedVTM.bgColor} rounded-full font-bold transition-all duration-300 hover:shadow-lg ${selectedVTM.glowColor}`}
                  >
                    Chat with {selectedVTM.name}
                  </motion.button>
                  <button className="px-6 py-3 glass border border-white/10 rounded-full font-semibold hover:bg-white/5 transition-all">
                    View Work
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills with Examples */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold mb-6">
              What {selectedVTM.name} Does Best
            </h4>
            
            {selectedVTM.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative"
              >
                <div className={`p-6 rounded-2xl transition-all duration-300 ${
                  hoveredSkill === skill.name 
                    ? 'glass border border-white/20 shadow-xl' 
                    : 'glass-dark border border-white/5'
                }`}>
                  {/* Skill Header */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`text-3xl p-3 rounded-xl ${selectedVTM.bgColor} bg-opacity-20`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-white mb-1 flex items-center gap-2">
                        {skill.name}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredSkill === skill.name ? 'translate-x-1' : ''
                        }`} />
                      </h5>
                      <p className="text-gray-300">{skill.description}</p>
                    </div>
                  </div>

                  {/* Real Example */}
                  {skill.example && (
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 mt-3 border-t border-white/10">
                            <div className="flex items-start gap-2">
                              <Zap className="w-4 h-4 text-yellow-400 mt-1" />
                              <div>
                                <p className="text-sm font-medium text-gray-400 mb-1">Real Example:</p>
                                <p className="text-sm text-white/80 italic">{skill.example}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Hover Accent */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className={`absolute bottom-0 left-0 right-0 h-1 ${selectedVTM.bgColor} rounded-b-2xl origin-left`}
                    />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 p-4 rounded-xl glass-dark border border-white/5"
            >
              <Shield className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">Trusted by 10,000+ creators</p>
                <p className="text-xs text-gray-400">{selectedVTM.name} has helped generate 50M+ views</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}