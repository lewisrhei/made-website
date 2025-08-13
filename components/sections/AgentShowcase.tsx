'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Lightbulb, Image, LayoutTemplate, BrainIcon, TrendingUp, 
  Scissors, Smartphone, VideoIcon, 
  ChartLine, BarChart3Icon, Target, ClipboardCheck,
  Eye, Flag, FileUp,
  Bug, Hand, Star
} from 'lucide-react'
import ZaraShowcase from './ZaraShowcase'

// Define skills for each agent
const agentSkills = {
  'Milo': [
    { id: 'video-ideas', name: 'Video Ideas', icon: Lightbulb, description: 'Generate viral video concepts', color: 'from-blue-400 to-indigo-400' },
    { id: 'thumbnails', name: 'Thumbnail Design', icon: Image, description: 'Create eye-catching thumbnails', color: 'from-indigo-400 to-purple-400' },
    { id: 'metadata', name: 'Video Metadata', icon: LayoutTemplate, description: 'Optimize titles and descriptions', color: 'from-blue-500 to-cyan-400' },
    { id: 'brainstorm', name: 'Creative Brainstorm', icon: BrainIcon, description: 'Unlimited creative exploration', color: 'from-cyan-400 to-blue-400' }
  ],
  'Remi': [
    { id: 'create-clips', name: 'Create Clips', icon: Scissors, description: 'Extract best moments', color: 'from-pink-400 to-purple-400' },
    { id: 'vertical-video', name: 'Convert to Vertical', icon: Smartphone, description: 'Optimize for mobile platforms', color: 'from-purple-400 to-pink-400' },
    { id: 'ai-video', name: 'Generate AI Video', icon: VideoIcon, description: 'Create videos from scratch', color: 'from-pink-500 to-rose-400' },
    { id: 'trending', name: 'Trending Formats', icon: TrendingUp, description: 'Match viral video styles', color: 'from-rose-400 to-pink-400' }
  ],
  'Enzo': [
    { id: 'forecast', name: 'Performance Forecast', icon: ChartLine, description: 'Predict video success', color: 'from-green-400 to-emerald-400' },
    { id: 'benchmark', name: 'Benchmark Analysis', icon: BarChart3Icon, description: 'Compare against competitors', color: 'from-emerald-400 to-teal-400' },
    { id: 'strategy', name: 'Strategy Coach', icon: Target, description: 'Data-driven recommendations', color: 'from-teal-400 to-green-400' },
    { id: 'milestones', name: 'Track Milestones', icon: ClipboardCheck, description: 'Monitor growth goals', color: 'from-green-500 to-emerald-500' }
  ],
  'Lila': [
    { id: 'fan-content', name: 'Monitor Fan Content', icon: Eye, description: 'Track content about you', color: 'from-purple-400 to-violet-400' },
    { id: 'claim', name: 'Content Claims', icon: Flag, description: 'Protect your content', color: 'from-violet-400 to-purple-400' },
    { id: 'upload', name: 'Reference Upload', icon: FileUp, description: 'Manage content library', color: 'from-purple-500 to-indigo-400' },
    { id: 'distribute', name: 'Multi-Platform', icon: Star, description: 'Distribute everywhere', color: 'from-indigo-400 to-purple-400' }
  ],
  'Amie': [
    { id: 'bug-report', name: 'Bug Reports', icon: Bug, description: 'Track and fix issues', color: 'from-red-400 to-orange-400' },
    { id: 'feature-request', name: 'Feature Requests', icon: Hand, description: 'Collect user ideas', color: 'from-orange-400 to-yellow-400' },
    { id: 'feedback', name: 'Feedback Analysis', icon: Star, description: 'Understand user needs', color: 'from-yellow-400 to-orange-400' },
    { id: 'support', name: 'User Support', icon: Hand, description: 'Help users succeed', color: 'from-orange-500 to-red-400' }
  ]
}

export default function AgentShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('')
  
  // Use Zara's special showcase
  if (agentData.name === 'Zara') {
    return <ZaraShowcase agentData={agentData} />
  }

  const skills = agentSkills[agentData.name as keyof typeof agentSkills] || []
  
  // Set initial active skill
  if (!activeSkill && skills.length > 0) {
    setActiveSkill(skills[0].id)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
      
      {/* Left: Agent Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative">
          {/* Subtle glow background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${agentData.gradientColors} opacity-10 blur-3xl scale-150`} />
          
          {/* Agent - Natural Presentation */}
          <div className="relative">
            {agentData.videoWelcome ? (
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <video
                  className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={agentData.videoWelcome} type="video/webm" />
                </video>
              </motion.div>
            ) : (
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="aspect-square max-w-md mx-auto flex items-center justify-center"
              >
                <div className="text-[200px]">{agentData.avatar}</div>
              </motion.div>
            )}
            
            {/* Name and tagline */}
            <div className="mt-8 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-bold text-white mb-2"
              >
                {agentData.name}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/60"
              >
                {agentData.role}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg ${agentData.color.replace('text-', 'text-')} mt-3 italic font-medium`}
              >
                "{agentData.catchphrase}"
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right: Skills Showcase */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Skills Navigation */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className={`w-5 h-5 ${agentData.color.replace('text-', 'text-')}`} />
            <span className="text-white/60 text-sm uppercase tracking-widest">Core Skills</span>
          </div>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill) => (
              <motion.button
                key={skill.id}
                onClick={() => setActiveSkill(skill.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeSkill === skill.id
                    ? 'bg-gradient-to-r ' + skill.color + ' text-black font-semibold'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <skill.icon className="w-4 h-4" />
                <span>{skill.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skill Details */}
        <motion.div
          key={activeSkill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10"
        >
          {skills.map((skill) => {
            if (skill.id !== activeSkill) return null
            return (
              <div key={skill.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                    <p className="text-white/60">{skill.description}</p>
                  </div>
                </div>
                
                {/* Example demonstration area */}
                <div className="mt-6 p-4 bg-white/5 rounded-xl">
                  <p className="text-white/80 mb-2 text-sm font-medium">How it works:</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {agentData.name} analyzes patterns, trends, and data to deliver {skill.description.toLowerCase()}. 
                    This skill has helped thousands of creators improve their content strategy and grow their audience.
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full px-8 py-4 bg-gradient-to-r ${agentData.gradientColors} text-white rounded-2xl font-semibold text-lg transition-all`}
        >
          Work with {agentData.name}
        </motion.button>
      </motion.div>
    </div>
  )
}