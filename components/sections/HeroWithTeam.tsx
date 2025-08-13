'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Users, TrendingUp, Clock } from 'lucide-react'
import { useState } from 'react'
import { vtmData } from '@/lib/vtm-data'

export default function HeroWithTeam() {
  const [hoveredVTM, setHoveredVTM] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-made-dark via-purple-950/10 to-made-dark" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-500 rounded-full blur-[128px] animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm mb-8"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>50,000+ creators growing with Made</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="block">Your AI Creative Team</span>
          <span className="block text-gradient">Working 24/7</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Six specialized AI agents that understand creators. 
          From ideation to monetization, they handle everything while you focus on creating.
        </motion.p>

        {/* Live Team Display - All 6 Agents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Team Container */}
          <div className="relative p-8 rounded-3xl glass border border-white/10">
            {/* Status Bar */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">All agents active</span>
            </div>

            {/* VTM Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8">
              {vtmData.map((vtm, index) => (
                <motion.div
                  key={vtm.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setHoveredVTM(vtm.id)}
                  onMouseLeave={() => setHoveredVTM(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Agent Video/Avatar */}
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-made-dark-accent/50 to-transparent">
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
                        <div className="flex items-center justify-center h-full text-4xl">
                          {vtm.avatar}
                        </div>
                      )}
                    </div>

                    {/* Hover Glow */}
                    {hoveredVTM === vtm.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute inset-0 rounded-2xl ${vtm.bgColor} opacity-20 blur-xl pointer-events-none`}
                      />
                    )}

                    {/* Activity Indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className={`absolute -bottom-1 -right-1 w-4 h-4 ${vtm.bgColor} rounded-full`}
                    />
                  </div>

                  {/* Agent Info */}
                  <div className="mt-2 text-center">
                    <h3 className={`font-bold text-sm ${vtm.color}`}>{vtm.name}</h3>
                    <p className="text-xs text-gray-500">{vtm.role.split(' ')[0]}</p>
                  </div>

                  {/* Hover Card */}
                  {hoveredVTM === vtm.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl glass border border-white/10 z-20"
                    >
                      <p className="text-xs text-white font-medium mb-1">{vtm.tagline}</p>
                      <p className="text-xs text-gray-400">{vtm.personality}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-3 rounded-xl bg-white/5">
                <Users className="w-5 h-5 text-blue-400 mb-1" />
                <div className="text-lg font-bold">6 Agents</div>
                <div className="text-xs text-gray-400">Specialized experts</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <TrendingUp className="w-5 h-5 text-green-400 mb-1" />
                <div className="text-lg font-bold">10x Growth</div>
                <div className="text-xs text-gray-400">Average result</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <Clock className="w-5 h-5 text-yellow-400 mb-1" />
                <div className="text-lg font-bold">24/7 Active</div>
                <div className="text-xs text-gray-400">Never sleeps</div>
              </div>
            </div>
          </div>

          {/* Floating activity messages */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 right-8 px-3 py-1.5 glass rounded-full text-xs font-medium"
          >
            <span className="text-blue-400">Milo:</span> Found trending topic!
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 left-8 px-3 py-1.5 glass rounded-full text-xs font-medium"
          >
            <span className="text-green-400">Enzo:</span> +2.3M views predicted
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <span className="flex items-center gap-2 justify-center">
              Start Free - No Card Required
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 glass border border-white/10 rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
            Watch 2-Min Demo
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs">Meet each agent</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}