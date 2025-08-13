'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { vtmData } from '@/lib/vtm-data'
import { Sparkles, Play, ChevronRight } from 'lucide-react'
import AgentShowcase from './AgentShowcase'

export default function FullScreenAgents() {
  const [activeSkill, setActiveSkill] = useState<{ agent: string, skill: number } | null>(null)

  return (
    <div className="relative">

      {vtmData.map((agent, agentIndex) => (
        <section
          key={agent.id}
          className="relative min-h-screen flex items-center justify-center snap-start snap-always"
        >


          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Use AgentShowcase for all agents */}
            <AgentShowcase agentData={agent} />
          </div>

          {/* Minimalist Section Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-8"
          >
            <div className="flex gap-2">
              {vtmData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 transition-all duration-300 ${
                    idx === agentIndex ? 'w-8 bg-white' : 'w-1 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  )
}