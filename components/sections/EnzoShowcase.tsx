'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  ChartLine, BarChart3, Target, TrendingUp, TrendingDown,
  Calendar, Clock, DollarSign, Users, Eye, Heart,
  ArrowUp, ArrowDown, Zap, Brain, Trophy, Flag,
  Activity, PieChart, Gauge, AlertCircle, CheckCircle,
  Info, ChevronUp, ChevronDown, Sparkles, Star,
  Flame, Award, Map, Compass, Shield, Rocket
} from 'lucide-react'

interface PerformanceMetric {
  label: string
  value: string
  change: number
  prediction: string
  confidence: number
}

interface Competitor {
  name: string
  subscribers: string
  growth: number
  uploadFreq: string
  avgViews: string
  threat: 'low' | 'medium' | 'high'
}

interface StrategyInsight {
  id: string
  title: string
  impact: 'high' | 'medium' | 'low'
  effort: 'high' | 'medium' | 'low'
  roi: number
  description: string
}

interface Milestone {
  target: string
  current: number
  goal: number
  deadline: string
  onTrack: boolean
}

const performanceData: PerformanceMetric[] = [
  {
    label: 'Views',
    value: '2.3M',
    change: 23,
    prediction: '3.1M',
    confidence: 92
  },
  {
    label: 'Watch Time',
    value: '450K hrs',
    change: 15,
    prediction: '520K hrs',
    confidence: 88
  },
  {
    label: 'Engagement',
    value: '8.7%',
    change: -2,
    prediction: '9.2%',
    confidence: 75
  },
  {
    label: 'Revenue',
    value: '$24.5K',
    change: 34,
    prediction: '$32K',
    confidence: 85
  }
]

const competitors: Competitor[] = [
  {
    name: 'CreatorX',
    subscribers: '1.2M',
    growth: 45,
    uploadFreq: '3/week',
    avgViews: '500K',
    threat: 'high'
  },
  {
    name: 'VlogMaster',
    subscribers: '890K',
    growth: 23,
    uploadFreq: '2/week',
    avgViews: '350K',
    threat: 'medium'
  },
  {
    name: 'TechGuru',
    subscribers: '650K',
    growth: 12,
    uploadFreq: '1/week',
    avgViews: '200K',
    threat: 'low'
  }
]

const strategies: StrategyInsight[] = [
  {
    id: '1',
    title: 'Upload at 2pm EST',
    impact: 'high',
    effort: 'low',
    roi: 340,
    description: 'Peak audience activity window'
  },
  {
    id: '2',
    title: 'Add Shorts content',
    impact: 'high',
    effort: 'medium',
    roi: 280,
    description: '3x reach potential'
  },
  {
    id: '3',
    title: 'Collab with @TechGuru',
    impact: 'medium',
    effort: 'medium',
    roi: 220,
    description: 'Cross-pollinate audiences'
  }
]

const milestones: Milestone[] = [
  {
    target: '1M Subscribers',
    current: 847000,
    goal: 1000000,
    deadline: '45 days',
    onTrack: true
  },
  {
    target: 'Silver Play Button',
    current: 92,
    goal: 100,
    deadline: '30 days',
    onTrack: true
  },
  {
    target: '$100K Revenue',
    current: 67,
    goal: 100,
    deadline: '90 days',
    onTrack: false
  }
]

const enzoSkills = [
  {
    id: 'forecast',
    name: 'Forecast',
    icon: ChartLine,
    description: 'Predict performance',
    color: 'from-green-400 to-emerald-400'
  },
  {
    id: 'compete',
    name: 'Competition',
    icon: Target,
    description: 'Beat the competition',
    color: 'from-emerald-400 to-teal-400'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    icon: Brain,
    description: 'Growth roadmap',
    color: 'from-teal-400 to-cyan-400'
  },
  {
    id: 'revenue',
    name: 'Revenue',
    icon: DollarSign,
    description: 'Maximize earnings',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'milestones',
    name: 'Milestones',
    icon: Trophy,
    description: 'Track goals',
    color: 'from-emerald-500 to-green-500'
  }
]

export default function EnzoShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('forecast')
  const [selectedMetric, setSelectedMetric] = useState(0)
  const [chartData, setChartData] = useState<number[]>([])
  const [selectedCompetitor, setSelectedCompetitor] = useState(0)
  const [revenueGrowth, setRevenueGrowth] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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
        growth += 3
        if (growth <= 234) {
          setRevenueGrowth(growth)
        } else {
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Cycle through metrics
  useEffect(() => {
    if (activeSkill === 'forecast' && isInView) {
      const interval = setInterval(() => {
        setSelectedMetric(prev => (prev + 1) % performanceData.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const renderSkillDemo = () => {
    switch (activeSkill) {
      case 'forecast':
        return (
          <motion.div className="space-y-4">
            {/* Performance Forecast Dashboard */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Performance Forecast</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5"
                >
                  <Sparkles className="w-5 h-5 text-green-400" />
                </motion.div>
              </div>

              {/* Live Chart */}
              <div className="relative h-40 mb-4">
                <svg className="w-full h-full">
                  {/* Grid Lines */}
                  {[0, 25, 50, 75, 100].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={`${100 - y}%`}
                      x2="100%"
                      y2={`${100 - y}%`}
                      stroke="rgba(255,255,255,0.1)"
                      strokeDasharray="5,5"
                    />
                  ))}
                  
                  {/* Data Line */}
                  <motion.polyline
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    points={chartData.map((value, idx) => 
                      `${(idx / 11) * 100}%,${100 - value}%`
                    ).join(' ')}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                  />
                  
                  {/* Data Points */}
                  {chartData.map((value, idx) => (
                    <motion.circle
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      cx={`${(idx / 11) * 100}%`}
                      cy={`${100 - value}%`}
                      r="3"
                      fill="#10b981"
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {performanceData.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedMetric(idx)}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${
                      selectedMetric === idx
                        ? 'bg-green-500/20 border border-green-400/50'
                        : 'bg-black/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-white/60 text-xs">{metric.label}</span>
                      <motion.div
                        animate={{ 
                          scale: selectedMetric === idx ? [1, 1.2, 1] : 1
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="flex items-center gap-1"
                      >
                        {metric.change > 0 ? (
                          <ArrowUp className="w-3 h-3 text-green-400" />
                        ) : (
                          <ArrowDown className="w-3 h-3 text-red-400" />
                        )}
                        <span className={`text-xs font-bold ${
                          metric.change > 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {Math.abs(metric.change)}%
                        </span>
                      </motion.div>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Predicted:</span>
                      <span className="text-xs text-green-400 font-medium">{metric.prediction}</span>
                    </div>
                    {/* Confidence Bar */}
                    <div className="mt-2 h-1 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.confidence}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI Insight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30"
              >
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Key Insight:</span>
                </div>
                <p className="text-white/80 text-sm mt-1">
                  Upload frequency increase to 3x/week will boost views by 47%
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'compete':
        return (
          <motion.div className="space-y-4">
            {/* Competitive Analysis */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-teal-400" />
                <span className="text-white font-semibold">Competitive Intelligence</span>
              </div>

              {/* Competitor Cards */}
              <div className="space-y-3">
                {competitors.map((comp, idx) => (
                  <motion.div
                    key={comp.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    onClick={() => setSelectedCompetitor(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedCompetitor === idx
                        ? 'bg-teal-500/20 border border-teal-400/50'
                        : 'bg-black/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">{comp.name}</h4>
                        <p className="text-white/50 text-sm">{comp.subscribers} subs</p>
                      </div>
                      <motion.div
                        animate={{ 
                          scale: comp.threat === 'high' ? [1, 1.2, 1] : 1,
                          rotate: comp.threat === 'high' ? [0, 5, -5, 0] : 0
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          comp.threat === 'high' ? 'bg-red-500/20 text-red-400' :
                          comp.threat === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {comp.threat} threat
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-white/40">Growth</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-teal-400" />
                          <span className="text-white font-medium">+{comp.growth}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white/40">Upload</p>
                        <p className="text-white font-medium">{comp.uploadFreq}</p>
                      </div>
                      <div>
                        <p className="text-white/40">Avg Views</p>
                        <p className="text-white font-medium">{comp.avgViews}</p>
                      </div>
                    </div>

                    {/* Comparison Bar */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-white/40">You vs Them:</span>
                      <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden flex">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '45%' }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className="bg-gradient-to-r from-green-400 to-emerald-400"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '55%' }}
                          transition={{ duration: 1, delay: idx * 0.2 + 0.2 }}
                          className="bg-gradient-to-r from-teal-400 to-cyan-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Battle Plan */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 p-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-lg border border-teal-500/30"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400" />
                  <span className="text-white text-sm">Battle Strategy:</span>
                </div>
                <p className="text-white/80 text-sm mt-1">
                  Focus on daily uploads to outpace CreatorX's growth
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'strategy':
        return (
          <motion.div className="space-y-4">
            {/* Strategy Matrix */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Map className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Growth Strategy Matrix</span>
              </div>

              {/* Impact vs Effort Grid */}
              <div className="relative h-48 bg-black/20 rounded-xl mb-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 border-l-2 border-b-2 border-white/10">
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40">Effort →</span>
                  <span className="absolute -left-10 top-1/2 -translate-y-1/2 rotate-180 text-xs text-white/40" style={{ writingMode: 'vertical-lr' }}>← Impact</span>
                </div>

                {/* Strategy Points */}
                {strategies.map((strategy, idx) => {
                  const x = strategy.effort === 'low' ? 20 : strategy.effort === 'medium' ? 50 : 80
                  const y = strategy.impact === 'high' ? 20 : strategy.impact === 'medium' ? 50 : 80
                  
                  return (
                    <motion.div
                      key={strategy.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.2, type: "spring" }}
                      className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${100 - y}%` }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          delay: idx * 0.5,
                          repeat: Infinity
                        }}
                        className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-black font-bold text-sm"
                      >
                        {idx + 1}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Strategy Details */}
              <div className="space-y-2">
                {strategies.map((strategy, idx) => (
                  <motion.div
                    key={strategy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-black/20 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-black text-xs font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-white text-sm font-medium">{strategy.title}</span>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className="flex items-center gap-1"
                      >
                        <Rocket className="w-3 h-3 text-cyan-400" />
                        <span className="text-cyan-400 font-bold text-sm">{strategy.roi}% ROI</span>
                      </motion.div>
                    </div>
                    <p className="text-white/50 text-xs">{strategy.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Next Action */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-black font-medium"
              >
                Execute Top Strategy
              </motion.button>
            </motion.div>
          </motion.div>
        )

      case 'revenue':
        return (
          <motion.div className="space-y-4">
            {/* Revenue Optimization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-white font-semibold">Revenue Maximizer</span>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl font-bold text-green-400"
                >
                  ${(24500 + revenueGrowth * 100).toLocaleString()}
                </motion.div>
              </div>

              {/* Revenue Streams */}
              <div className="space-y-3 mb-6">
                {[
                  { source: 'Ad Revenue', amount: '$12,400', percent: 51, growth: 23 },
                  { source: 'Sponsorships', amount: '$8,200', percent: 33, growth: 45 },
                  { source: 'Memberships', amount: '$2,900', percent: 12, growth: 67 },
                  { source: 'Merchandise', amount: '$1,000', percent: 4, growth: 120 }
                ].map((stream, idx) => (
                  <motion.div
                    key={stream.source}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-black/20 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">{stream.source}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold">{stream.amount}</span>
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="flex items-center gap-1"
                        >
                          <ArrowUp className="w-3 h-3 text-green-400" />
                          <span className="text-green-400 text-xs font-bold">+{stream.growth}%</span>
                        </motion.div>
                      </div>
                    </div>
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stream.percent}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Growth Projection */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Annual Projection</span>
                  <Flame className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  ${(294000 + revenueGrowth * 1000).toLocaleString()}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                      animate={{ width: `${revenueGrowth / 2.34}%` }}
                    />
                  </div>
                  <span className="text-green-400 font-bold text-sm">+{revenueGrowth}%</span>
                </div>
              </div>

              {/* Optimization Tips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 flex items-center gap-2 text-sm"
              >
                <Info className="w-4 h-4 text-green-400" />
                <span className="text-white/80">Enable mid-roll ads for +$3.2K/month</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'milestones':
        return (
          <motion.div className="space-y-4">
            {/* Milestone Tracker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Milestone Tracker</span>
              </div>

              {/* Milestone Cards */}
              <div className="space-y-3">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={milestone.target}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15, type: "spring" }}
                    className="bg-black/20 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">{milestone.target}</h4>
                        <p className="text-white/50 text-sm">Due in {milestone.deadline}</p>
                      </div>
                      <motion.div
                        animate={{ 
                          scale: milestone.onTrack ? 1 : [1, 1.2, 1],
                          rotate: milestone.onTrack ? 0 : [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`p-2 rounded-full ${
                          milestone.onTrack ? 'bg-green-500/20' : 'bg-yellow-500/20'
                        }`}
                      >
                        {milestone.onTrack ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-yellow-400" />
                        )}
                      </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="h-3 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${milestone.current}%` }}
                          transition={{ duration: 1.5, delay: idx * 0.2 }}
                          className={`h-full ${
                            milestone.onTrack
                              ? 'bg-gradient-to-r from-green-400 to-emerald-400'
                              : 'bg-gradient-to-r from-yellow-400 to-orange-400'
                          }`}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{milestone.current}%</span>
                      </div>
                    </div>

                    {/* Target vs Current */}
                    <div className="flex items-center justify-between mt-2 text-xs">
                      <span className="text-white/40">
                        Current: {milestone.current}%
                      </span>
                      <span className="text-white/40">
                        Goal: {milestone.goal}%
                      </span>
                    </div>

                    {/* Trophy Animation for Near Completion */}
                    {milestone.current > 90 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ 
                            rotate: [0, -10, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Award className="w-8 h-8 text-yellow-400" />
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Next Milestone Alert */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/30"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white text-sm">Next Achievement:</span>
                  <span className="text-yellow-400 font-bold text-sm">1M Subscribers in 45 days!</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
      
      {/* Left: Enzo Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative">
          {/* Animated data visualization background */}
          <motion.div 
            className="absolute inset-0 opacity-20"
          >
            {/* Floating chart elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${15 + Math.floor(i / 4) * 40}%`
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 5 + i,
                  delay: i * 0.5,
                  repeat: Infinity
                }}
              >
                {i % 3 === 0 && <BarChart3 className="w-6 h-6 text-green-400" />}
                {i % 3 === 1 && <PieChart className="w-6 h-6 text-emerald-400" />}
                {i % 3 === 2 && <ChartLine className="w-6 h-6 text-teal-400" />}
              </motion.div>
            ))}
          </motion.div>

          {/* Pulsing glow background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity
            }}
            className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 blur-3xl"
          />
          
          {/* Enzo Character */}
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
                <div className="text-[200px]">📊</div>
              </motion.div>
            )}
            
            {/* Name and info */}
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
                className="text-lg text-green-400 mt-3 italic font-medium"
              >
                "{agentData.catchphrase}"
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right: Interactive Skills Showcase */}
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
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-white/60 text-sm uppercase tracking-widest">Analytics Arsenal</span>
          </div>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {enzoSkills.map((skill) => (
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

        {/* Dynamic Skill Demonstration */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSkillDemo()}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-400 text-black rounded-2xl font-semibold text-lg transition-all"
        >
          Let Enzo Decode Your Success
        </motion.button>
      </motion.div>
    </div>
  )
}