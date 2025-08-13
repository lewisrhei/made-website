'use client'

import CinematicHero from '@/components/sections/CinematicHero'
import FullScreenAgents from '@/components/sections/FullScreenAgents'
import { LogoMade } from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { vtmData } from '@/lib/vtm-data'

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  
  useEffect(() => {
    setMounted(true)
  }, [])


  // Define bright and dark gradient sets  
  const brightGradients = [
    'radial-gradient(ellipse 800px 600px at 25% 40%, #06b6d460, transparent), radial-gradient(ellipse 700px 500px at 75% 30%, #facc1550, transparent), radial-gradient(ellipse 650px 450px at 50% 70%, #ec489950, transparent), radial-gradient(ellipse 600px 500px at 85% 60%, #10b98140, transparent), radial-gradient(ellipse 700px 550px at 15% 80%, #ef444440, transparent), radial-gradient(ellipse 550px 400px at 65% 85%, #f9731645, transparent), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)', // Hero - more intense color blobs
    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', // Milo - cyan/blue
    'linear-gradient(135deg, #facc15 0%, #fb923c 100%)', // Zara - yellow/orange
    'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)', // Remi - pink/purple
    'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)', // Enzo - green/teal
    'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', // Lila - red
    'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', // Amie - orange
    'linear-gradient(135deg, #000000 0%, #111111 100%)' // Footer - black
  ]

  const darkGradients = [
    'radial-gradient(ellipse 800px 600px at 25% 40%, #06b6d430, transparent), radial-gradient(ellipse 700px 500px at 75% 30%, #facc1525, transparent), radial-gradient(ellipse 650px 450px at 50% 70%, #ec489925, transparent), radial-gradient(ellipse 600px 500px at 85% 60%, #10b98120, transparent), radial-gradient(ellipse 700px 550px at 15% 80%, #ef444420, transparent), radial-gradient(ellipse 550px 400px at 65% 85%, #f9731622, transparent), linear-gradient(180deg, #000000 0%, #050505 100%)', // Hero - darker version of light mode
    'linear-gradient(to bottom right, #1e3a8a, #1e40af, #000000)', // Milo - dark blue
    'linear-gradient(to bottom right, #78350f, #92400e, #000000)', // Zara - dark yellow/orange  
    'linear-gradient(to bottom right, #581c87, #6b21a8, #000000)', // Remi - dark purple
    'linear-gradient(to bottom right, #14532d, #166534, #000000)', // Enzo - dark green
    'linear-gradient(to bottom right, #7f1d1d, #991b1b, #000000)', // Lila - dark red
    'linear-gradient(to bottom right, #7c2d12, #92400e, #000000)', // Amie - dark orange
    'linear-gradient(to bottom right, #000000, #020617, #000000)'  // Footer
  ]

  // Update current section based on scroll
  useEffect(() => {
    if (!scrollRef.current) return
    
    const container = scrollRef.current
    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const scrollProgress = scrollTop / scrollHeight
      
      // We have: Hero, 6 agents (Milo, Zara, Remi, Enzo, Lila, Amie), Footer = 8 sections
      let section = Math.floor(scrollProgress * 8)
      section = Math.min(Math.max(section, 0), 7)
      
      console.log('Scroll event - Progress:', scrollProgress.toFixed(3), 'Section:', section)
      
      if (section !== currentSection) {
        setCurrentSection(section)
      }
    }
    
    container.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentSection])

  // Debug log
  useEffect(() => {
    console.log('Current state - Mode:', isDarkMode ? 'dark' : 'light', 'Section:', currentSection, 'Gradient:', isDarkMode ? darkGradients[currentSection] : brightGradients[currentSection])
  }, [isDarkMode, currentSection, brightGradients, darkGradients])

  return (
    <>
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <LogoMade className="w-10 h-10 text-white" />
              <span className="font-semibold text-xl text-white tracking-tight">Made</span>
            </motion.div>

            {/* CTA */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white/90 backdrop-blur-sm text-black rounded-full font-medium transition-all duration-300 hover:bg-white"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Gradient Background Layer */}
      <div className="fixed inset-0 z-0">
        {/* Gradient that changes based on current section */}
        <div
          key={`gradient-${currentSection}-${isDarkMode}`}
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isDarkMode 
              ? (darkGradients[currentSection] || darkGradients[0])
              : (brightGradients[currentSection] || brightGradients[0])
          }}
        />
      </div>

      {/* Gradient Mode Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* Main Content with Scroll Snap */}
      <main ref={scrollRef} className="relative snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Cinematic Hero */}
        <div className="snap-start snap-always">
          <CinematicHero />
        </div>

        {/* Full Screen Agent Sections */}
        <FullScreenAgents />

        {/* Minimalist Footer - Full Page */}
        <footer className="relative min-h-screen flex items-center justify-center snap-start">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <LogoMade className="w-16 h-16 text-white/80 mx-auto mb-8" />
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
              Create with confidence.
            </h2>
            <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
              Join thousands of creators using Made.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black rounded-2xl font-medium text-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 pt-8 border-t border-white/10"
          >
            <div className="flex justify-center gap-8 text-sm text-white/40 mb-4">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
            </div>
            <p className="text-xs text-white/30">
              © 2025 Made. All rights reserved.
            </p>
          </motion.div>
        </div>
        </footer>
      </main>
    </>
  )
}