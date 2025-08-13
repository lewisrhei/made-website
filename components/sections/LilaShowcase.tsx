'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Shield, Lock, Eye, AlertTriangle, DollarSign, TrendingUp,
  Search, Flag, CheckCircle, XCircle, Globe, Server,
  BarChart3, PieChart, Activity, Zap, Crown, Star,
  FileVideo, Upload, Download, Share2, Users, Sparkles,
  ShieldCheck, ShieldAlert, Copyright, Scale, Gavel,
  Coins, CreditCard, Wallet, ArrowUpRight, ArrowDownRight,
  Radio, Wifi, Signal, Database, Cloud, Link
} from 'lucide-react'

interface ContentMatch {
  id: string
  platform: string
  channel: string
  views: string
  revenue: string
  status: 'claimed' | 'pending' | 'disputed'
  match: number
}

interface RevenueStream {
  source: string
  amount: string
  change: string
  trend: 'up' | 'down'
  icon: any
}

interface ProtectionStat {
  label: string
  value: string
  change: string
  color: string
}

interface PlatformDistribution {
  platform: string
  status: 'live' | 'processing' | 'scheduled'
  reach: string
  revenue: string
  icon: any
}

const contentMatches: ContentMatch[] = [
  {
    id: '1',
    platform: 'YouTube',
    channel: 'RandomChannel123',
    views: '2.3M',
    revenue: '$4,230',
    status: 'claimed',
    match: 98
  },
  {
    id: '2',
    platform: 'TikTok',
    channel: 'content_thief',
    views: '890K',
    revenue: '$1,250',
    status: 'pending',
    match: 95
  },
  {
    id: '3',
    platform: 'Facebook',
    channel: 'viral_videos',
    views: '450K',
    revenue: '$780',
    status: 'claimed',
    match: 92
  }
]

const revenueStreams: RevenueStream[] = [
  {
    source: 'Content ID Claims',
    amount: '$12,450',
    change: '+23%',
    trend: 'up',
    icon: Copyright
  },
  {
    source: 'Licensed Usage',
    amount: '$8,320',
    change: '+15%',
    trend: 'up',
    icon: Scale
  },
  {
    source: 'Platform Royalties',
    amount: '$5,680',
    change: '+8%',
    trend: 'up',
    icon: Crown
  },
  {
    source: 'Direct Monetization',
    amount: '$3,200',
    change: '-5%',
    trend: 'down',
    icon: DollarSign
  }
]

const protectionStats: ProtectionStat[] = [
  { label: 'Protected Videos', value: '1,247', change: '+89', color: 'text-green-400' },
  { label: 'Active Claims', value: '423', change: '+34', color: 'text-yellow-400' },
  { label: 'Revenue Recovered', value: '$45.2K', change: '+$5.3K', color: 'text-blue-400' },
  { label: 'Infringements Stopped', value: '892', change: '+123', color: 'text-red-400' }
]

const platformDistribution: PlatformDistribution[] = [
  { platform: 'YouTube', status: 'live', reach: '5.2M', revenue: '$12.3K', icon: Globe },
  { platform: 'TikTok', status: 'live', reach: '8.9M', revenue: '$8.7K', icon: Radio },
  { platform: 'Instagram', status: 'processing', reach: '3.4M', revenue: '$5.2K', icon: Wifi },
  { platform: 'Twitter', status: 'scheduled', reach: '1.2M', revenue: '$2.1K', icon: Signal }
]

const lilaSkills = [
  {
    id: 'content-guard',
    name: 'Content Guard',
    icon: Shield,
    description: 'Protect your content',
    color: 'from-red-400 to-rose-400'
  },
  {
    id: 'claim-manager',
    name: 'Claim Manager',
    icon: Flag,
    description: 'Automated claiming',
    color: 'from-orange-400 to-red-400'
  },
  {
    id: 'revenue-recovery',
    name: 'Revenue Recovery',
    icon: DollarSign,
    description: 'Get what you deserve',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: 'distribution',
    name: 'Distribution Hub',
    icon: Globe,
    description: 'Everywhere at once',
    color: 'from-purple-400 to-pink-400'
  },
  {
    id: 'monitoring',
    name: 'Content Radar',
    icon: Search,
    description: '24/7 monitoring',
    color: 'from-indigo-400 to-purple-400'
  }
]

export default function LilaShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('content-guard')
  const [scanProgress, setScanProgress] = useState(0)
  const [currentMatch, setCurrentMatch] = useState(0)
  const [revenueCounter, setRevenueCounter] = useState(0)
  const [protectionLevel, setProtectionLevel] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [radarAngle, setRadarAngle] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Content Guard Shield Animation
  useEffect(() => {
    if (activeSkill === 'content-guard' && isInView) {
      let level = 0
      const interval = setInterval(() => {
        level += 2
        if (level <= 95) {
          setProtectionLevel(level)
        } else {
          clearInterval(interval)
        }
      }, 30)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Claim Manager Cycling
  useEffect(() => {
    if (activeSkill === 'claim-manager' && isInView) {
      const interval = setInterval(() => {
        setCurrentMatch(prev => (prev + 1) % contentMatches.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Revenue Counter Animation
  useEffect(() => {
    if (activeSkill === 'revenue-recovery' && isInView) {
      let amount = 0
      const target = 45200
      const increment = target / 100
      const interval = setInterval(() => {
        amount += increment
        if (amount <= target) {
          setRevenueCounter(Math.floor(amount))
        } else {
          setRevenueCounter(target)
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Monitoring Radar Animation
  useEffect(() => {
    if (activeSkill === 'monitoring' && isInView) {
      const interval = setInterval(() => {
        setRadarAngle(prev => (prev + 2) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Scan Progress Animation
  useEffect(() => {
    if (activeSkill === 'monitoring' && isInView) {
      setScanProgress(0)
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            setTimeout(() => setScanProgress(0), 500)
            return 100
          }
          return prev + 1
        })
      }, 50)
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
      case 'content-guard':
        return (
          <motion.div className="space-y-4">
            {/* Protection Shield */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Shield Animation Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Shield className="w-64 h-64 text-red-400" />
                </motion.div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-red-400" />
                    <span className="text-white font-semibold">Content Protection Status</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">ACTIVE</span>
                  </motion.div>
                </div>

                {/* Protection Level */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60 text-sm">Protection Level</span>
                    <span className="text-red-400 font-bold">{protectionLevel}%</span>
                  </div>
                  <div className="h-3 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-400 to-rose-400"
                      animate={{ width: `${protectionLevel}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Protection Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {protectionStats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/20 rounded-lg p-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className={`text-2xl font-bold ${stat.color}`}>
                            {stat.value}
                          </p>
                          <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className="text-green-400 text-xs font-medium"
                        >
                          {stat.change}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Security Features */}
                <div className="flex gap-2 mt-4">
                  {['Fingerprinting', 'Watermarking', 'Blockchain'].map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex-1 bg-red-500/10 rounded-lg p-2 text-center"
                    >
                      <Lock className="w-4 h-4 text-red-400 mx-auto mb-1" />
                      <p className="text-xs text-white/60">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )

      case 'claim-manager':
        return (
          <motion.div className="space-y-4">
            {/* Claims Dashboard */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-semibold">Active Content Claims</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Search className="w-5 h-5 text-orange-400" />
                </motion.div>
              </div>

              {/* Matched Content List */}
              <div className="space-y-3">
                {contentMatches.map((match, idx) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className={`p-4 rounded-xl transition-all ${
                      currentMatch === idx
                        ? 'bg-orange-500/20 border border-orange-400/50'
                        : 'bg-black/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={currentMatch === idx ? { 
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                          } : {}}
                          transition={{ duration: 1 }}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            match.status === 'claimed' ? 'bg-green-500/20' :
                            match.status === 'pending' ? 'bg-yellow-500/20' :
                            'bg-red-500/20'
                          }`}
                        >
                          {match.status === 'claimed' ? 
                            <CheckCircle className="w-5 h-5 text-green-400" /> :
                            match.status === 'pending' ?
                            <AlertTriangle className="w-5 h-5 text-yellow-400" /> :
                            <XCircle className="w-5 h-5 text-red-400" />
                          }
                        </motion.div>
                        <div>
                          <p className="text-white font-medium">{match.channel}</p>
                          <p className="text-white/50 text-xs">{match.platform} • {match.views} views</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-orange-400 font-bold">{match.revenue}</p>
                        <p className="text-white/40 text-xs">{match.match}% match</p>
                      </div>
                    </div>

                    {/* Match Progress Bar */}
                    <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${match.match}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className={`h-full ${
                          match.match > 95 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                          match.match > 90 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                          'bg-gradient-to-r from-red-400 to-orange-400'
                        }`}
                      />
                    </div>

                    {/* Action Buttons */}
                    {currentMatch === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="flex gap-2 mt-3"
                      >
                        <button className="flex-1 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                          Claim Revenue
                        </button>
                        <button className="flex-1 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                          Takedown
                        </button>
                        <button className="flex-1 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium">
                          License
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Claim Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">Total Pending Claims</span>
                  <span className="text-orange-400 font-bold">$6,260</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'revenue-recovery':
        return (
          <motion.div className="space-y-4">
            {/* Revenue Dashboard */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Revenue Recovery System</span>
              </div>

              {/* Total Recovered */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-block"
                >
                  <p className="text-white/60 text-sm mb-2">Total Recovered</p>
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    ${revenueCounter.toLocaleString()}
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-green-400 text-sm mt-2"
                  >
                    ↑ $5,320 this month
                  </motion.p>
                </motion.div>
              </div>

              {/* Revenue Streams */}
              <div className="space-y-3 mb-6">
                {revenueStreams.map((stream, idx) => (
                  <motion.div
                    key={stream.source}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between p-3 bg-black/20 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: idx * 0.2,
                          repeat: Infinity
                        }}
                        className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center"
                      >
                        <stream.icon className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                      <div>
                        <p className="text-white text-sm font-medium">{stream.source}</p>
                        <p className="text-white/40 text-xs">{stream.amount}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {stream.trend === 'up' ? 
                        <ArrowUpRight className="w-4 h-4 text-green-400" /> :
                        <ArrowDownRight className="w-4 h-4 text-red-400" />
                      }
                      <span className={stream.trend === 'up' ? 'text-green-400' : 'text-red-400'} >
                        {stream.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Revenue Chart */}
              <div className="bg-black/40 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Monthly Growth</span>
                  <Activity className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex items-end gap-1 h-20">
                  {[30, 45, 35, 60, 75, 65, 80, 90, 85, 95, 88, 92].map((height, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: idx * 0.05, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-yellow-400/50 to-yellow-400 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )

      case 'distribution':
        return (
          <motion.div className="space-y-4">
            {/* Distribution Network */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Global Distribution Network</span>
              </div>

              {/* Network Visualization */}
              <div className="relative h-48 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central Node */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <Upload className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Orbiting Platforms */}
                  {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                    <motion.div
                      key={angle}
                      className="absolute"
                      animate={{
                        rotate: [angle, angle + 360]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        transformOrigin: 'center center',
                        width: '160px',
                        height: '160px',
                        left: '50%',
                        top: '50%',
                        marginLeft: '-80px',
                        marginTop: '-80px'
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-20 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
                      style={{
                        transform: `rotate(${i * 60}deg)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-40px'
                      }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Platform Status */}
              <div className="grid grid-cols-2 gap-3">
                {platformDistribution.map((platform, idx) => (
                  <motion.div
                    key={platform.platform}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/20 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <platform.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-white text-sm">{platform.platform}</span>
                      </div>
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          platform.status === 'live' ? 'bg-green-400' :
                          platform.status === 'processing' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}
                        animate={platform.status === 'processing' ? {
                          scale: [1, 1.5, 1]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Reach: {platform.reach}</span>
                      <span className="text-purple-400 font-medium">{platform.revenue}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Upload Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium"
              >
                Distribute Everywhere
              </motion.button>
            </motion.div>
          </motion.div>
        )

      case 'monitoring':
        return (
          <motion.div className="space-y-4">
            {/* Content Radar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-indigo-400" />
                  <span className="text-white font-semibold">Content Monitoring Radar</span>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">SCANNING</span>
                </motion.div>
              </div>

              {/* Radar Display */}
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Radar Circles */}
                  {[1, 2, 3, 4].map((ring) => (
                    <div
                      key={ring}
                      className="absolute border border-indigo-400/20 rounded-full"
                      style={{
                        width: `${ring * 60}px`,
                        height: `${ring * 60}px`
                      }}
                    />
                  ))}

                  {/* Radar Sweep */}
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: radarAngle }}
                    transition={{ duration: 0 }}
                  >
                    <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-indigo-400 to-transparent origin-left" />
                    <div className="absolute top-1/2 left-1/2 w-1/2 h-24 bg-gradient-to-b from-indigo-400/30 to-transparent origin-left -translate-y-1/2" 
                         style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }} />
                  </motion.div>

                  {/* Detected Content Blips */}
                  {[
                    { x: 30, y: -40, size: 'large' },
                    { x: -50, y: 20, size: 'medium' },
                    { x: 60, y: 30, size: 'small' },
                    { x: -30, y: -50, size: 'medium' },
                    { x: 0, y: 60, size: 'large' }
                  ].map((blip, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute"
                      style={{ left: `${50 + blip.x}%`, top: `${50 + blip.y}%` }}
                      animate={{
                        scale: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        delay: idx * 0.5,
                        repeat: Infinity
                      }}
                    >
                      <div className={`${
                        blip.size === 'large' ? 'w-3 h-3' :
                        blip.size === 'medium' ? 'w-2 h-2' :
                        'w-1 h-1'
                      } bg-red-400 rounded-full`} />
                    </motion.div>
                  ))}

                  {/* Center Dot */}
                  <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                </div>
              </div>

              {/* Scan Progress */}
              <div className="bg-black/40 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm">Scanning Internet...</span>
                  <span className="text-indigo-400 font-bold">{scanProgress}%</span>
                </div>
                <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-400 to-purple-400"
                    animate={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>

              {/* Detection Stats */}
              <div className="grid grid-cols-3 gap-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <Eye className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                  <p className="text-white font-bold">1.2M</p>
                  <p className="text-white/40 text-xs">Scanned</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <p className="text-white font-bold">423</p>
                  <p className="text-white/40 text-xs">Matches</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <Shield className="w-4 h-4 text-green-400 mx-auto mb-1" />
                  <p className="text-white font-bold">892</p>
                  <p className="text-white/40 text-xs">Protected</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
      
      {/* Left: Lila Visual */}
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
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-rose-400/20 blur-3xl scale-150"
          />
          
          {/* Lila Character */}
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
                <div className="text-[200px]">💎</div>
              </div>
            )}
            
            {/* Floating shield particles */}
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
                  x: [-15, 15, -15],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  delay: i * 0.4,
                  repeat: Infinity
                }}
              >
                <Shield className="w-6 h-6 text-red-400/40" />
              </motion.div>
            ))}
            
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
                className="text-lg text-red-400 mt-3 italic font-medium"
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
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-white/60 text-sm uppercase tracking-widest">Protection Suite</span>
          </div>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {lilaSkills.map((skill) => (
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
          className="w-full px-8 py-4 bg-gradient-to-r from-red-400 to-rose-400 text-black rounded-2xl font-semibold text-lg transition-all"
        >
          Let Lila Protect Your Revenue
        </motion.button>
      </motion.div>
    </div>
  )
}