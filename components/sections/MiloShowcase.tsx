'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Lightbulb, Sparkles, TrendingUp, Image, Hash, AtSign,
  Eye, ThumbsUp, MessageSquare, Share2, Zap, Brain,
  Target, Rocket, Film, Clock, ArrowUp, ArrowDown,
  RefreshCw, Layers, Palette, Type, Camera, Play,
  BarChart3, ChevronRight, Star, Flame
} from 'lucide-react'

interface IdeaConcept {
  id: string
  title: string
  hook: string
  angle: string
  format: string
  duration: string
  viralScore: number
}

interface ThumbnailVariant {
  id: string
  style: 'bold' | 'minimal' | 'vibrant' | 'dramatic'
  mainText: string
  subText?: string
  bgColor: string
  textColor: string
  emoji?: string
  clickRate?: number
}

interface TitleVariant {
  hook: string
  angle: string
  emotion: string
  clickability: number
}

const ideaConcepts: IdeaConcept[] = [
  {
    id: '1',
    title: "I Tried X for 30 Days",
    hook: "Transformation Challenge",
    angle: "Personal Journey",
    format: "Documentary Style",
    duration: "10-12 min",
    viralScore: 92
  },
  {
    id: '2',
    title: "Why Nobody Talks About This",
    hook: "Hidden Truth",
    angle: "Contrarian Take",
    format: "Video Essay",
    duration: "8-10 min",
    viralScore: 88
  },
  {
    id: '3',
    title: "The $1 vs $1000 Challenge",
    hook: "Extreme Comparison",
    angle: "Value Discovery",
    format: "Experiment",
    duration: "15-20 min",
    viralScore: 95
  }
]

const thumbnailVariants: ThumbnailVariant[] = [
  {
    id: '1',
    style: 'bold',
    mainText: 'YOU WON\'T BELIEVE',
    subText: 'What Happened Next',
    bgColor: 'from-red-500 to-orange-500',
    textColor: 'text-white',
    emoji: '😱',
    clickRate: 8.2
  },
  {
    id: '2',
    style: 'minimal',
    mainText: 'The Truth.',
    bgColor: 'from-gray-900 to-black',
    textColor: 'text-white',
    clickRate: 6.7
  },
  {
    id: '3',
    style: 'vibrant',
    mainText: 'INSANE RESULTS',
    subText: '(not clickbait)',
    bgColor: 'from-blue-500 via-purple-500 to-pink-500',
    textColor: 'text-white',
    emoji: '🚀',
    clickRate: 9.4
  }
]

const titleVariants: TitleVariant[] = [
  {
    hook: "I Can't Believe This Actually Worked",
    angle: "Surprise & Discovery",
    emotion: "Amazement",
    clickability: 89
  },
  {
    hook: "The Hidden Truth About [Topic]",
    angle: "Revelation & Secrets",
    emotion: "Curiosity",
    clickability: 92
  },
  {
    hook: "Why I Stopped Doing [Thing] (Life-Changing)",
    angle: "Personal Transformation",
    emotion: "Intrigue",
    clickability: 87
  }
]

const trendingTopics = [
  { topic: "Phone Anxiety", growth: "+523%", volume: "2.3M", timing: "Rising Fast" },
  { topic: "Morning Routines", growth: "+89%", volume: "5.7M", timing: "Peak Now" },
  { topic: "AI Tools", growth: "+234%", volume: "8.9M", timing: "Exploding" }
]

const miloSkills = [
  {
    id: 'idea-gen',
    name: 'Idea Generator',
    icon: Lightbulb,
    description: 'Viral concept brainstorming',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'thumbnails',
    name: 'Thumbnail A/B',
    icon: Image,
    description: 'Test thumbnail variations',
    color: 'from-purple-400 to-pink-400'
  },
  {
    id: 'titles',
    name: 'Title Hooks',
    icon: Type,
    description: 'Multiple angle generation',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    id: 'trends',
    name: 'Trend Spotter',
    icon: TrendingUp,
    description: 'Early trend detection',
    color: 'from-green-400 to-emerald-400'
  },
  {
    id: 'viral',
    name: 'Viral Predictor',
    icon: Rocket,
    description: 'Success probability analysis',
    color: 'from-orange-400 to-red-400'
  }
]

export default function MiloShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('idea-gen')
  const [currentIdea, setCurrentIdea] = useState(0)
  const [showingThumbnail, setShowingThumbnail] = useState(0)
  const [selectedTitle, setSelectedTitle] = useState(0)
  const [viralScore, setViralScore] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [typingText, setTypingText] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // Idea Generation Animation
  useEffect(() => {
    if (activeSkill === 'idea-gen' && isInView) {
      const cycle = setInterval(() => {
        setCurrentIdea(prev => (prev + 1) % ideaConcepts.length)
      }, 3000)
      return () => clearInterval(cycle)
    }
  }, [activeSkill, isInView])

  // Thumbnail Cycling
  useEffect(() => {
    if (activeSkill === 'thumbnails' && isInView) {
      const cycle = setInterval(() => {
        setShowingThumbnail(prev => (prev + 1) % thumbnailVariants.length)
      }, 2500)
      return () => clearInterval(cycle)
    }
  }, [activeSkill, isInView])

  // Viral Score Animation
  useEffect(() => {
    if (activeSkill === 'viral' && isInView) {
      let score = 0
      const interval = setInterval(() => {
        score += 3
        if (score <= 94) {
          setViralScore(score)
        } else {
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Typing Effect for Ideas
  useEffect(() => {
    if (activeSkill === 'idea-gen' && isInView) {
      const text = ideaConcepts[currentIdea].title
      setTypingText('')
      let charIndex = 0
      const interval = setInterval(() => {
        if (charIndex <= text.length) {
          setTypingText(text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(interval)
        }
      }, 30)
      return () => clearInterval(interval)
    }
  }, [currentIdea, activeSkill, isInView])

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
      case 'idea-gen':
        return (
          <motion.div className="space-y-4">
            {/* Brainstorming Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Animated Brain Network */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 12}%`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">Generating Viral Concepts</span>
                </div>

                {/* Current Idea Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdea}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-3"
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {typingText}
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
                      />
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-blue-500/20 rounded-lg p-3"
                      >
                        <Zap className="w-4 h-4 text-blue-400 mb-1" />
                        <p className="text-xs text-white/60">Hook</p>
                        <p className="text-sm text-white font-medium">{ideaConcepts[currentIdea].hook}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-cyan-500/20 rounded-lg p-3"
                      >
                        <Target className="w-4 h-4 text-cyan-400 mb-1" />
                        <p className="text-xs text-white/60">Angle</p>
                        <p className="text-sm text-white font-medium">{ideaConcepts[currentIdea].angle}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-indigo-500/20 rounded-lg p-3"
                      >
                        <Film className="w-4 h-4 text-indigo-400 mb-1" />
                        <p className="text-xs text-white/60">Format</p>
                        <p className="text-sm text-white font-medium">{ideaConcepts[currentIdea].format}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-purple-500/20 rounded-lg p-3"
                      >
                        <Clock className="w-4 h-4 text-purple-400 mb-1" />
                        <p className="text-xs text-white/60">Duration</p>
                        <p className="text-sm text-white font-medium">{ideaConcepts[currentIdea].duration}</p>
                      </motion.div>
                    </div>

                    {/* Viral Score */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${ideaConcepts[currentIdea].viralScore}%` }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    />
                    <p className="text-xs text-white/60">Viral Potential: {ideaConcepts[currentIdea].viralScore}%</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Idea Branches */}
            <div className="grid grid-cols-3 gap-2">
              {['Trending Now', 'Evergreen', 'Seasonal'].map((type, idx) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    {idx === 0 && <TrendingUp className="w-4 h-4 text-green-400 mb-1" />}
                    {idx === 1 && <Star className="w-4 h-4 text-yellow-400 mb-1" />}
                    {idx === 2 && <Clock className="w-4 h-4 text-blue-400 mb-1" />}
                  </motion.div>
                  <p className="text-xs text-white/60">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'thumbnails':
        return (
          <motion.div className="space-y-4">
            {/* A/B Testing Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Thumbnail A/B Testing</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowingThumbnail((prev) => (prev + 1) % thumbnailVariants.length)}
                  className="p-2 bg-white/10 rounded-lg"
                >
                  <RefreshCw className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              {/* Thumbnail Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={showingThumbnail}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                  className={`aspect-video rounded-xl bg-gradient-to-br ${thumbnailVariants[showingThumbnail].bgColor} p-8 flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-20 bg-white"
                        style={{
                          left: `${i * 5}%`,
                          transform: 'rotate(45deg)'
                        }}
                        animate={{ y: [-100, 100] }}
                        transition={{
                          duration: 3,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>

                  {/* Thumbnail Content */}
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="relative z-10 text-center"
                  >
                    {thumbnailVariants[showingThumbnail].emoji && (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-4"
                      >
                        {thumbnailVariants[showingThumbnail].emoji}
                      </motion.div>
                    )}
                    <h3 className={`text-3xl font-black ${thumbnailVariants[showingThumbnail].textColor} mb-2`}>
                      {thumbnailVariants[showingThumbnail].mainText}
                    </h3>
                    {thumbnailVariants[showingThumbnail].subText && (
                      <p className={`text-lg ${thumbnailVariants[showingThumbnail].textColor} opacity-90`}>
                        {thumbnailVariants[showingThumbnail].subText}
                      </p>
                    )}
                  </motion.div>

                  {/* Play Button */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-black/20 rounded-lg p-3"
                >
                  <Eye className="w-4 h-4 text-blue-400 mb-1" />
                  <p className="text-xl font-bold text-white">
                    {thumbnailVariants[showingThumbnail].clickRate}%
                  </p>
                  <p className="text-xs text-white/60">Click Rate</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/20 rounded-lg p-3"
                >
                  <ThumbsUp className="w-4 h-4 text-green-400 mb-1" />
                  <p className="text-xl font-bold text-white">
                    {(thumbnailVariants[showingThumbnail].clickRate * 10.2).toFixed(0)}%
                  </p>
                  <p className="text-xs text-white/60">Engagement</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/20 rounded-lg p-3"
                >
                  <Share2 className="w-4 h-4 text-purple-400 mb-1" />
                  <p className="text-xl font-bold text-white">
                    {(thumbnailVariants[showingThumbnail].clickRate * 3.7).toFixed(0)}%
                  </p>
                  <p className="text-xs text-white/60">Shares</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Style Selector */}
            <div className="flex gap-2">
              {['Bold', 'Minimal', 'Vibrant', 'Dramatic'].map((style, idx) => (
                <motion.button
                  key={style}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                    idx === showingThumbnail 
                      ? 'bg-purple-500/30 text-purple-400 border border-purple-400/50' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {style}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )

      case 'titles':
        return (
          <motion.div className="space-y-4">
            {/* Title Variations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Title Hook Generator</span>
              </div>

              {/* Title Options */}
              <div className="space-y-3">
                {titleVariants.map((variant, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    onClick={() => setSelectedTitle(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedTitle === idx
                        ? 'bg-cyan-500/20 border border-cyan-400/50'
                        : 'bg-black/20 hover:bg-black/30'
                    }`}
                  >
                    <h4 className="text-white font-medium mb-2">{variant.hook}</h4>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Target className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-white/60">{variant.angle}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-white/60">{variant.emotion}</span>
                      </div>
                    </div>

                    {/* Clickability Score */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/40">Clickability</span>
                        <span className="text-cyan-400 font-bold">{variant.clickability}%</span>
                      </div>
                      <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${variant.clickability}%` }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* SEO Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {['viral', 'trending', 'must-watch', '2024', 'shocking'].map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                  >
                    #{tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'trends':
        return (
          <motion.div className="space-y-4">
            {/* Trend Radar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">Trend Spotting Radar</span>
              </div>

              {/* Trending Topics */}
              <div className="space-y-3">
                {trendingTopics.map((trend, idx) => (
                  <motion.div
                    key={trend.topic}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="bg-black/20 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white font-medium text-lg">{trend.topic}</h4>
                        <p className="text-white/40 text-xs">Search Volume: {trend.volume}</p>
                      </div>
                      <motion.div
                        animate={{ 
                          scale: trend.timing === 'Exploding' ? [1, 1.2, 1] : 1,
                          rotate: trend.timing === 'Exploding' ? [0, 5, -5, 0] : 0
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          trend.timing === 'Exploding' ? 'bg-red-500/20 text-red-400' :
                          trend.timing === 'Peak Now' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {trend.timing}
                      </motion.div>
                    </div>

                    {/* Growth Indicator */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowUp className="w-4 h-4 text-green-400" />
                      </motion.div>
                      <span className="text-green-400 font-bold text-sm">{trend.growth}</span>
                      <div className="flex-1 h-1 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: idx * 0.2 }}
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trend Prediction */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30"
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Next Big Thing:</span>
                  <span className="text-green-400 font-bold text-sm">AI Avatars</span>
                </div>
                <p className="text-xs text-white/50 mt-1">Predicted to explode in 2-3 weeks</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'viral':
        return (
          <motion.div className="space-y-4">
            {/* Viral Predictor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold">Viral Probability Analysis</span>
              </div>

              {/* Main Score */}
              <div className="relative h-40 flex items-center justify-center mb-6">
                {/* Circular Progress */}
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="60"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="60"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 60}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 60 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 60 * (1 - viralScore / 100) }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    strokeLinecap="round"
                    transform="rotate(-90 50% 50%)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score Display */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.5 }}
                    className="text-5xl font-bold text-white"
                  >
                    {viralScore}%
                  </motion.div>
                  <p className="text-white/60 text-sm">Viral Probability</p>
                </div>
              </div>

              {/* Factors */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { factor: 'Timing', score: 95, icon: Clock },
                  { factor: 'Hook', score: 89, icon: Zap },
                  { factor: 'Thumbnail', score: 92, icon: Image },
                  { factor: 'Length', score: 87, icon: Film }
                ].map((item, idx) => (
                  <motion.div
                    key={item.factor}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-black/20 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-3 h-3 text-orange-400" />
                        <span className="text-white text-sm">{item.factor}</span>
                      </div>
                      <span className="text-orange-400 font-bold text-sm">{item.score}%</span>
                    </div>
                    <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.score}%` }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-orange-400 to-red-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recommendation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-4 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/30"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-sm font-medium">Recommendation:</span>
                </div>
                <p className="text-white/80 text-sm mt-1">Upload at 2pm EST for maximum reach</p>
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
      
      {/* Left: Milo Visual */}
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
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl scale-150"
          />
          
          {/* Milo Character */}
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
                <div className="text-[200px]">💡</div>
              </motion.div>
            )}
            
            {/* Floating idea bubbles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 40}%`
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity
                }}
              >
                <div className="w-3 h-3 bg-blue-400 rounded-full" />
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
                className="text-lg text-blue-400 mt-3 italic font-medium"
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
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-white/60 text-sm uppercase tracking-widest">Creative Arsenal</span>
          </div>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {miloSkills.map((skill) => (
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
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-2xl font-semibold text-lg transition-all"
        >
          Let Milo Spark Your Creativity
        </motion.button>
      </motion.div>
    </div>
  )
}