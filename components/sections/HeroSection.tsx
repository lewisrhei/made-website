'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Play, Users, TrendingUp, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { vtmData } from '@/lib/vtm-data'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentVTM, setCurrentVTM] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVTM((prev) => (prev + 1) % vtmData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Creators', color: 'text-blue-400' },
    { icon: TrendingUp, value: '10x', label: 'Faster Growth', color: 'text-green-400' },
    { icon: Zap, value: '24/7', label: 'AI Team Working', color: 'text-yellow-400' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic animated background with VTM colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-made-dark via-made-dark-secondary to-made-dark" />
        
        {/* Animated color blobs based on current VTM */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVTM}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className={`absolute top-20 left-20 w-96 h-96 ${vtmData[currentVTM].bgColor} rounded-full blur-[120px] animate-blob`} />
            <div className={`absolute bottom-20 right-20 w-96 h-96 ${vtmData[(currentVTM + 1) % vtmData.length].bgColor} rounded-full blur-[120px] animate-blob animation-delay-2000`} />
          </motion.div>
        </AnimatePresence>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="font-medium">AI Agents that actually understand creators</span>
            </motion.div>

            {/* Dynamic Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">
                <span className="block text-white">Your Creative</span>
                <span className="block relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentVTM}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${vtmData[currentVTM].color} inline-block`}
                    >
                      {vtmData[currentVTM].role}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="block text-white">Is Here</span>
              </h1>
            </motion.div>

            {/* Dynamic Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentVTM}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xl text-gray-300"
                >
                  <span className="font-semibold text-white">{vtmData[currentVTM].name}:</span> {vtmData[currentVTM].catchphrase}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-dark rounded-xl p-4 border border-white/5"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Meet Your Team
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </button>

              <button className="px-8 py-4 glass border border-white/10 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/20 flex items-center gap-2 justify-center">
                <Play className="w-5 h-5" />
                Watch Creators Win
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>2,847 creators online now</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Setup in 2 minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Animated VTM Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* VTM Video Container */}
            <div className="relative rounded-3xl overflow-hidden glass border border-white/10">
              <div className="aspect-video relative bg-gradient-to-br from-made-dark-accent to-made-dark">
                {/* Animated VTM Videos */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVTM}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {vtmData[currentVTM].videoWelcome ? (
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={() => setIsVideoLoaded(true)}
                      >
                        <source src={vtmData[currentVTM].videoWelcome} type="video/webm" />
                      </video>
                    ) : (
                      <div className="text-8xl animate-bounce">{vtmData[currentVTM].avatar}</div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* VTM Name Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVTM}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`text-2xl font-bold ${vtmData[currentVTM].color}`}>
                        {vtmData[currentVTM].name}
                      </h3>
                      <p className="text-gray-300">{vtmData[currentVTM].personality}</p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* VTM Selection Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {vtmData.map((vtm, index) => (
                <button
                  key={vtm.id}
                  onClick={() => setCurrentVTM(index)}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      currentVTM === index ? 'glass border-2' : 'glass-dark'
                    } border-white/20`}
                  >
                    <span className="text-xl">{vtm.avatar}</span>
                  </motion.div>
                  {currentVTM === index && (
                    <motion.div
                      layoutId="vtm-indicator"
                      className={`absolute inset-0 rounded-full ${vtm.bgColor} opacity-20 blur-xl`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Floating skill badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm font-medium"
            >
              <span className="text-green-400">+</span> 47% growth this week
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm font-medium"
            >
              <span className="text-blue-400">●</span> AI analyzing trends...
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}