'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  ChartLine, BarChart3, Target, TrendingUp, TrendingDown,
  Users, Eye, DollarSign, Clock, Trophy, Star,
  ArrowUp, ArrowDown, Zap, Brain, Activity
} from 'lucide-react'

export default function EnzoShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('forecast')
  const [isInView, setIsInView] = useState(false)
  const [selectedMetric, setSelectedMetric] = useState(0)
  const [chartData, setChartData] = useState<number[]>([])
  const [revenueGrowth, setRevenueGrowth] = useState(0)
  const [selectedCompetitor, setSelectedCompetitor] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    { id: 'forecast', name: 'Performance Forecast', icon: ChartLine, description: 'Predict video success', color: 'from-green-400 to-emerald-400' },
    { id: 'benchmark', name: 'Competitor Analysis', icon: BarChart3, description: 'Compare against competitors', color: 'from-emerald-400 to-teal-400' },
    { id: 'strategy', name: 'Strategy Coach', icon: Target, description: 'Data-driven recommendations', color: 'from-teal-400 to-green-400' },
    { id: 'revenue', name: 'Revenue Optimization', icon: DollarSign, description: 'Maximize earnings potential', color: 'from-green-500 to-emerald-500' },
    { id: 'milestones', name: 'Growth Milestones', icon: Trophy, description: 'Track progress goals', color: 'from-emerald-500 to-green-600' }
  ]

  const performanceMetrics = [
    { label: 'Views', current: '2.4M', predicted: '3.2M', change: 33, confidence: 92 },
    { label: 'Engagement', current: '8.7%', predicted: '11.2%', change: 29, confidence: 88 },
    { label: 'Revenue', current: '$4,230', predicted: '$6,890', change: 63, confidence: 85 },
    { label: 'Subscribers', current: '47.2K', predicted: '68.5K', change: 45, confidence: 90 }
  ]

  const competitors = [
    { name: 'TechReviewer Pro', subs: '850K', growth: 12, views: '420K avg', threat: 'high' },
    { name: 'Daily Tech Tips', subs: '520K', growth: 8, views: '280K avg', threat: 'medium' },
    { name: 'Gadget Guru', subs: '390K', growth: 15, views: '180K avg', threat: 'medium' }
  ]

  const strategyInsights = [
    { title: 'Post during peak hours (7-9 PM)', impact: 'high', roi: 85, description: 'Increase views by 40%' },
    { title: 'Create trending tech tutorials', impact: 'high', roi: 92, description: 'Capitalize on viral topics' },
    { title: 'Collaborate with micro-influencers', impact: 'medium', roi: 78, description: 'Expand audience reach' }
  ]

  const milestones = [
    { goal: '100K Subscribers', current: 47200, target: 100000, progress: 47, deadline: '6 months' },
    { goal: '$10K Monthly Revenue', current: 4230, target: 10000, progress: 42, deadline: '4 months' },
    { goal: '5M Monthly Views', current: 2400000, target: 5000000, progress: 48, deadline: '3 months' }
  ]

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Generate chart data animation
  useEffect(() => {
    if ((activeSkill === 'forecast' || activeSkill === 'revenue') && isInView) {
      const newData: number[] = []
      for (let i = 0; i < 12; i++) {
        newData.push(Math.random() * 100)
      }
      setChartData(newData)
    }
  }, [activeSkill, isInView])

  // Revenue growth animation
  useEffect(() => {
    if (activeSkill === 'revenue' && isInView) {
      let growth = 0
      const interval = setInterval(() => {
        growth += 2
        if (growth <= 84) {
          setRevenueGrowth(growth)
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Cycling competitor analysis
  useEffect(() => {
    if (activeSkill === 'benchmark' && isInView) {
      const interval = setInterval(() => {
        setSelectedCompetitor(prev => (prev + 1) % competitors.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Cycling performance metrics
  useEffect(() => {
    if (activeSkill === 'forecast' && isInView) {
      const interval = setInterval(() => {
        setSelectedMetric(prev => (prev + 1) % performanceMetrics.length)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case 'high': return 'text-red-400 bg-red-400/20'
      case 'medium': return 'text-yellow-400 bg-yellow-400/20'
      default: return 'text-green-400 bg-green-400/20'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-green-400 bg-green-400/20'
      case 'medium': return 'text-yellow-400 bg-yellow-400/20'
      default: return 'text-blue-400 bg-blue-400/20'
    }
  }

  const renderSkillDemo = () => {
    switch (activeSkill) {
      case 'forecast':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Performance Forecast</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <ChartLine className="w-4 h-4 text-green-400" />
                <span>Next 30 days</span>
              </div>
            </div>

            {/* Current Metric Display */}
            <motion.div
              key={selectedMetric}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400 font-semibold">{performanceMetrics[selectedMetric].label}</span>
                <div className="flex items-center gap-1">
                  <ArrowUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">{performanceMetrics[selectedMetric].change}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-white/60 text-sm">Current</div>
                  <div className="text-2xl font-bold text-white">{performanceMetrics[selectedMetric].current}</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Predicted</div>
                  <div className="text-2xl font-bold text-green-400">{performanceMetrics[selectedMetric].predicted}</div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">Confidence</span>
                  <span className="text-green-400 text-sm">{performanceMetrics[selectedMetric].confidence}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${performanceMetrics[selectedMetric].confidence}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-green-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Chart Visualization */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="h-32 flex items-end justify-between gap-1">
                {chartData.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-gradient-to-t from-green-400 to-green-600 rounded-t flex-1"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )

      case 'benchmark':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Competitor Analysis</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>Market position</span>
              </div>
            </div>

            {/* Featured Competitor */}
            <motion.div
              key={selectedCompetitor}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold">{competitors[selectedCompetitor].name}</h4>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatColor(competitors[selectedCompetitor].threat)}`}>
                  {competitors[selectedCompetitor].threat} threat
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-white/60 text-sm">Subscribers</div>
                  <div className="text-white font-bold">{competitors[selectedCompetitor].subs}</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Avg Views</div>
                  <div className="text-white font-bold">{competitors[selectedCompetitor].views}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-white/60 text-sm">Growth Rate</div>
                <div className="flex items-center gap-1">
                  {competitors[selectedCompetitor].growth > 10 ? (
                    <TrendingUp className="w-4 h-4 text-red-400" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  )}
                  <span className={`text-sm ${competitors[selectedCompetitor].growth > 10 ? 'text-red-400' : 'text-green-400'}`}>
                    {competitors[selectedCompetitor].growth}%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Competitive Advantage */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-400/20">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Your Advantage</span>
              </div>
              <p className="text-white text-sm">Higher engagement rate and better content retention vs competitors</p>
            </div>
          </motion.div>
        )

      case 'strategy':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Strategy Recommendations</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Brain className="w-4 h-4 text-teal-400" />
                <span>AI-powered insights</span>
              </div>
            </div>

            {strategyInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">{insight.title}</h4>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                    {insight.impact} impact
                  </div>
                </div>
                
                <p className="text-white/60 text-xs mb-3">{insight.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs">Expected ROI</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-white/10 rounded-full h-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${insight.roi}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-1 bg-teal-400 rounded-full"
                      />
                    </div>
                    <span className="text-teal-400 text-xs font-medium">{insight.roi}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )

      case 'revenue':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Revenue Optimization</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span>Monthly growth</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400 font-semibold">Revenue Growth</span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-2xl"
                >
                  💰
                </motion.div>
              </div>
              
              <div className="text-center mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  +{revenueGrowth}%
                </motion.div>
                <div className="text-green-400 text-sm">vs last month</div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-white font-bold">$4.2K</div>
                  <div className="text-white/60 text-xs">Current</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-green-400 font-bold">$6.9K</div>
                  <div className="text-white/60 text-xs">Projected</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-white font-bold">$10K</div>
                  <div className="text-white/60 text-xs">Target</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">Ad Revenue</span>
                </div>
                <div className="text-xl font-bold text-white">$2.8K</div>
                <div className="text-blue-400 text-xs">+12% this month</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm">Sponsorships</span>
                </div>
                <div className="text-xl font-bold text-white">$1.4K</div>
                <div className="text-purple-400 text-xs">+28% this month</div>
              </div>
            </div>
          </motion.div>
        )

      case 'milestones':
        return (
          <motion.div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">Growth Milestones</span>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Trophy className="w-4 h-4 text-emerald-500" />
                <span>Progress tracking</span>
              </div>
            </div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.goal}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">{milestone.goal}</h4>
                  <span className="text-white/60 text-xs">{milestone.deadline}</span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-xs">
                    {milestone.current.toLocaleString()} / {milestone.target.toLocaleString()}
                  </span>
                  <span className="text-emerald-400 text-xs font-medium">{milestone.progress}%</span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${milestone.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                    className="h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
      
      {/* Left: Enzo Visual */}
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
            className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 blur-3xl scale-150"
          />
          
          {/* Enzo Character */}
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
                className={`text-lg ${agentData.color ? agentData.color.replace('text-', 'text-') : 'text-green-400'} mt-3 italic font-medium`}
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
            <ChartLine className={`w-5 h-5 ${agentData.color ? agentData.color.replace('text-', 'text-') : 'text-green-400'}`} />
            <span className="text-white/60 text-sm uppercase tracking-widest">Analytics Skills</span>
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
          className={`w-full px-8 py-4 bg-gradient-to-r ${agentData.gradientColors || 'from-green-500 to-emerald-500'} text-white rounded-2xl font-semibold text-lg transition-all`}
        >
          Work with {agentData.name}
        </motion.button>
      </motion.div>
    </div>
  )
}