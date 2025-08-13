'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Bug, Hand, Star, Users, MessageSquare,
  Clock, AlertTriangle, CheckCircle, BarChart3, Target,
  Zap
} from 'lucide-react'

export default function AmieShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('bug-reports')
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    { id: 'bug-reports', name: 'Bug Reports', icon: Bug, description: 'Track and resolve issues', color: 'from-red-400 to-orange-400' },
    { id: 'feature-requests', name: 'Feature Requests', icon: Hand, description: 'Collect user ideas', color: 'from-orange-400 to-yellow-400' },
    { id: 'feedback-analysis', name: 'Feedback Analysis', icon: Star, description: 'Understand user needs', color: 'from-yellow-400 to-orange-400' },
    { id: 'user-support', name: 'User Support', icon: MessageSquare, description: 'Help users succeed', color: 'from-orange-500 to-red-400' },
    { id: 'success-insights', name: 'Success Insights', icon: Target, description: 'Track user success', color: 'from-purple-400 to-blue-400' }
  ]

  const renderSkillDemo = () => {
    switch (activeSkill) {
      case 'bug-reports':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Bug Reports</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>3 active issues</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-2">Video upload fails on Safari</h4>
              <p className="text-white/60 text-sm mb-3">Users report upload issues with large files</p>
              <div className="flex items-center justify-between">
                <span className="text-red-400 text-xs bg-red-400/20 px-2 py-1 rounded">High Priority</span>
                <button className="text-red-400 text-xs">Resolve</button>
              </div>
            </div>
          </motion.div>
        )
      
      case 'feature-requests':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Feature Requests</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Hand className="w-4 h-4 text-orange-400" />
                <span>592 votes</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-white text-xs">247</span>
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">Bulk video scheduling</h4>
              <p className="text-white/60 text-sm">Allow scheduling multiple videos at once</p>
            </div>
          </motion.div>
        )
      
      case 'feedback-analysis':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Sentiment Analysis</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <BarChart3 className="w-4 h-4 text-yellow-400" />
                <span>885 responses</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">Positive</span>
                </div>
                <div className="text-2xl font-bold text-white">78%</div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">Issues</span>
                </div>
                <div className="text-2xl font-bold text-white">7%</div>
              </div>
            </div>
          </motion.div>
        )
      
      case 'user-support':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Support Queue</span>
              <div className="flex items-center gap-3 text-xs text-white/60">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>2.5hr avg</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>4.7/5</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-2">How to set up automated posting?</h4>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-xs">From @new_creator</span>
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-xs">5/5</span>
                  <button className="text-blue-400 text-xs">Reply</button>
                </div>
              </div>
            </div>
          </motion.div>
        )
      
      case 'success-insights':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Success Metrics</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Target className="w-4 h-4 text-purple-400" />
                <span>Live data</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-400/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold text-sm">Active Users</span>
                  </div>
                  <span className="text-xl font-bold text-white">12,847</span>
                </div>
                <div className="text-xs text-white/60">+23% growth this month</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold text-sm">Feature Adoption</span>
                  </div>
                  <span className="text-xl font-bold text-white">94%</span>
                </div>
                <div className="text-xs text-white/60">Features used within 7 days</div>
              </div>
            </div>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
      
      {/* Left: Amie Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative">
          {/* Animated glow background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl scale-150"
          />
          
          {/* Amie Character */}
          <div className="relative">
            {agentData.videoWelcome ? (
              <div className="relative">
                <video
                  className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={agentData.videoWelcome} type="video/webm" />
                </video>
              </div>
            ) : (
              <div className="aspect-square max-w-md mx-auto flex items-center justify-center">
                <div className="text-[200px]">{agentData.avatar}</div>
              </div>
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
                className={`text-lg ${agentData.color ? agentData.color.replace('text-', 'text-') : 'text-purple-400'} mt-3 italic font-medium`}
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
            <Bug className={`w-5 h-5 ${agentData.color ? agentData.color.replace('text-', 'text-') : 'text-purple-400'}`} />
            <span className="text-white/60 text-sm uppercase tracking-widest">Support Skills</span>
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

        {/* Skill Demo */}
        <motion.div
          key={activeSkill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-h-[400px]"
        >
          {renderSkillDemo()}
        </motion.div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full px-8 py-4 bg-gradient-to-r ${agentData.gradientColors || 'from-purple-500 to-blue-500'} text-white rounded-2xl font-semibold text-lg transition-all`}
        >
          Work with {agentData.name}
        </motion.button>
      </motion.div>
    </div>
  )
}