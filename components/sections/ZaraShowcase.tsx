'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  MessageSquare, ThumbsUp, Send, Zap, TrendingUp, Heart, Star, 
  MessagesSquare, MessageCircleHeart, Trophy, BarChart3, 
  Sparkles, Users, Activity, Smile, Frown, AlertCircle,
  ArrowUp, ArrowDown, Hash, AtSign, HelpCircle, CheckCircle,
  XCircle, Clock, Filter, Tag
} from 'lucide-react'

interface Comment {
  id: string
  username: string
  avatar: string
  text: string
  time: string
  category?: 'question' | 'feedback' | 'support' | 'superfan'
  sentiment?: 'positive' | 'neutral' | 'negative'
  isSuperFan?: boolean
}

const comments: Comment[] = [
  {
    id: '1',
    username: '@creative_soul',
    avatar: 'CS',
    text: "Your editing style is INSANE! How do you make those transitions?",
    time: 'just now',
    category: 'question',
    sentiment: 'positive'
  },
  {
    id: '2',
    username: '@mikeeats',
    avatar: 'ME',
    text: "First! Been here since 1K subs! 🎉",
    time: '2 sec ago',
    category: 'superfan',
    sentiment: 'positive',
    isSuperFan: true
  },
  {
    id: '3',
    username: '@sarah_daily',
    avatar: 'SD',
    text: "This helped me overcome my anxiety, thank you so much 💕",
    time: '5 sec ago',
    category: 'support',
    sentiment: 'positive'
  }
]

const zaraReplies = [
  "Thanks for the love! I use Premiere Pro with custom presets - DM for details! 🎬",
  "OG supporter! 🙌 You've been amazing since day one - much love!",
  "So proud of you! Keep going, you've got this! 💪✨"
]

const zaraSkills = [
  {
    id: 'smart-reply',
    name: 'Smart Reply',
    icon: MessagesSquare,
    description: 'AI-powered personalized responses',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: 'categorization',
    name: 'Categorization',
    icon: Tag,
    description: 'Auto-organize comments by type',
    color: 'from-orange-400 to-red-400'
  },
  {
    id: 'superfan',
    name: 'Superfan Recognition',
    icon: Trophy,
    description: 'Identify loyal supporters',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'vibe-check',
    name: 'Vibe Check',
    icon: Activity,
    description: 'Real-time sentiment analysis',
    color: 'from-green-400 to-emerald-400'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: BarChart3,
    description: 'Deep engagement insights',
    color: 'from-blue-400 to-indigo-400'
  }
]

export default function ZaraShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('smart-reply')
  const [visibleComments, setVisibleComments] = useState<number[]>([])
  const [typingIndex, setTypingIndex] = useState(-1)
  const [typedReplies, setTypedReplies] = useState<string[]>(['', '', ''])
  const [showCategories, setShowCategories] = useState(false)
  const [vibeScore, setVibeScore] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Smart Reply Sequential Animation
  useEffect(() => {
    if (activeSkill === 'smart-reply' && isInView) {
      setVisibleComments([])
      setTypedReplies(['', '', ''])
      setTypingIndex(-1)

      const sequence = async () => {
        // Show first comment
        await new Promise(resolve => setTimeout(resolve, 500))
        setVisibleComments([0])
        
        // Start typing first reply
        await new Promise(resolve => setTimeout(resolve, 800))
        setTypingIndex(0)
        await typeReply(0, zaraReplies[0])
        
        // Show second comment
        await new Promise(resolve => setTimeout(resolve, 500))
        setVisibleComments([0, 1])
        
        // Type second reply
        await new Promise(resolve => setTimeout(resolve, 800))
        setTypingIndex(1)
        await typeReply(1, zaraReplies[1])
        
        // Show third comment
        await new Promise(resolve => setTimeout(resolve, 500))
        setVisibleComments([0, 1, 2])
        
        // Type third reply
        await new Promise(resolve => setTimeout(resolve, 800))
        setTypingIndex(2)
        await typeReply(2, zaraReplies[2])
        setTypingIndex(-1)
      }

      sequence()
    }
  }, [activeSkill, isInView])

  const typeReply = (index: number, text: string): Promise<void> => {
    return new Promise(resolve => {
      let charIndex = 0
      const interval = setInterval(() => {
        if (charIndex <= text.length) {
          setTypedReplies(prev => {
            const newReplies = [...prev]
            newReplies[index] = text.slice(0, charIndex)
            return newReplies
          })
          charIndex++
        } else {
          clearInterval(interval)
          resolve()
        }
      }, 20)
    })
  }

  // Vibe Check Animation
  useEffect(() => {
    if (activeSkill === 'vibe-check' && isInView) {
      let score = 0
      const interval = setInterval(() => {
        score += 2
        if (score <= 87) {
          setVibeScore(score)
        } else {
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Intersection Observer for triggering animations
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
      case 'smart-reply':
        return (
          <div className="space-y-3">
            <AnimatePresence mode="sync">
              {comments.map((comment, idx) => (
                visibleComments.includes(idx) && (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                    className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                  >
                    {/* Comment */}
                    <div className="flex items-start gap-3">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs"
                      >
                        {comment.avatar}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white text-sm">{comment.username}</span>
                          <span className="text-white/40 text-xs">{comment.time}</span>
                        </div>
                        <p className="text-white/70 text-sm">{comment.text}</p>
                      </div>
                    </div>

                    {/* Zara's Reply */}
                    {(typingIndex >= idx || typedReplies[idx]) && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 ml-12"
                      >
                        <div className="flex items-start gap-3">
                          <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", delay: 0.2 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center"
                          >
                            <Star className="w-4 h-4 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-white text-sm">Zara AI</span>
                              <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="px-2 py-0.5 bg-yellow-400/20 text-yellow-400 text-xs rounded-full"
                              >
                                Auto-Reply
                              </motion.span>
                            </div>
                            <div className="min-h-[24px]">
                              <p className="text-white/90 text-sm">
                                {typedReplies[idx]}
                                {typingIndex === idx && (
                                  <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-0.5 h-3 bg-yellow-400 ml-0.5"
                                  />
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        )

      case 'categorization':
        return (
          <motion.div className="space-y-4">
            {/* Category Filters */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 mb-4"
            >
              {['Questions', 'Feedback', 'Support', 'Superfans'].map((cat, idx) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white flex items-center gap-1.5"
                >
                  {cat === 'Questions' && <HelpCircle className="w-3 h-3" />}
                  {cat === 'Feedback' && <MessageSquare className="w-3 h-3" />}
                  {cat === 'Support' && <Heart className="w-3 h-3" />}
                  {cat === 'Superfans' && <Trophy className="w-3 h-3" />}
                  <span>{cat}</span>
                  <span className="text-yellow-400 font-bold">
                    {idx === 0 ? '24' : idx === 1 ? '18' : idx === 2 ? '12' : '8'}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Categorized Comments */}
            {comments.map((comment, idx) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-black/20 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-3"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: idx * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className={`p-2 rounded-lg ${
                    comment.category === 'question' ? 'bg-blue-500/20' :
                    comment.category === 'superfan' ? 'bg-yellow-500/20' :
                    comment.category === 'support' ? 'bg-pink-500/20' :
                    'bg-green-500/20'
                  }`}
                >
                  {comment.category === 'question' && <HelpCircle className="w-4 h-4 text-blue-400" />}
                  {comment.category === 'superfan' && <Trophy className="w-4 h-4 text-yellow-400" />}
                  {comment.category === 'support' && <Heart className="w-4 h-4 text-pink-400" />}
                  {comment.category === 'feedback' && <MessageSquare className="w-4 h-4 text-green-400" />}
                </motion.div>
                <div className="flex-1">
                  <p className="text-white/70 text-sm truncate">{comment.text}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    comment.category === 'question' ? 'bg-blue-500/20 text-blue-400' :
                    comment.category === 'superfan' ? 'bg-yellow-500/20 text-yellow-400' :
                    comment.category === 'support' ? 'bg-pink-500/20 text-pink-400' :
                    'bg-green-500/20 text-green-400'
                  }`}
                >
                  {comment.category}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )

      case 'superfan':
        return (
          <motion.div className="space-y-4">
            {/* Superfan Leaderboard */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-5 border border-yellow-500/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Top Supporters This Month</span>
              </div>
              
              {[
                { name: '@mikeeats', comments: 47, likes: 234, since: '2 years' },
                { name: '@dailyvlog_jen', comments: 35, likes: 189, since: '18 months' },
                { name: '@tech_wizard', comments: 28, likes: 156, since: '1 year' }
              ].map((fan, idx) => (
                <motion.div
                  key={fan.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        rotate: idx === 0 ? [0, 360] : 0,
                        scale: idx === 0 ? [1, 1.2, 1] : 1
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: idx === 0 ? Infinity : 0,
                        repeatDelay: 1
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' :
                        idx === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600 text-white' :
                        'bg-gradient-to-br from-orange-600 to-orange-800 text-white'
                      }`}
                    >
                      {idx + 1}
                    </motion.div>
                    <div>
                      <p className="text-white font-medium text-sm">{fan.name}</p>
                      <p className="text-white/50 text-xs">Member for {fan.since}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-yellow-400 font-bold text-sm">{fan.comments}</p>
                      <p className="text-white/40 text-xs">comments</p>
                    </div>
                    <div className="text-right">
                      <p className="text-pink-400 font-bold text-sm">{fan.likes}</p>
                      <p className="text-white/40 text-xs">hearts</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Recognition Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="bg-black/30 rounded-xl p-4 text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="inline-block"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-3">
                  <Star className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <p className="text-white font-medium">Auto-sending personalized thank you messages!</p>
              <p className="text-white/50 text-sm mt-1">3 superfans recognized today</p>
            </motion.div>
          </motion.div>
        )

      case 'vibe-check':
        return (
          <motion.div className="space-y-4">
            {/* Overall Vibe Meter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Community Vibe Check</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  {vibeScore > 70 ? '😄' : vibeScore > 40 ? '😊' : '😐'}
                </motion.span>
              </div>
              
              {/* Vibe Score Bar */}
              <div className="relative h-8 bg-black/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${vibeScore}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{vibeScore}% Positive</span>
                </div>
              </div>

              {/* Sentiment Breakdown */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { emoji: '😄', label: 'Positive', value: 87, color: 'from-green-400 to-emerald-500' },
                  { emoji: '😐', label: 'Neutral', value: 8, color: 'from-gray-400 to-gray-500' },
                  { emoji: '😔', label: 'Negative', value: 5, color: 'from-red-400 to-red-500' }
                ].map((sentiment, idx) => (
                  <motion.div
                    key={sentiment.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-black/20 rounded-xl p-3 text-center"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: sentiment.label === 'Positive' ? [0, 10, -10, 0] : 0
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3
                      }}
                      className="text-2xl mb-2"
                    >
                      {sentiment.emoji}
                    </motion.div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${sentiment.color} bg-clip-text text-transparent`}>
                      {sentiment.value}%
                    </div>
                    <div className="text-white/50 text-xs">{sentiment.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Real-time Sentiment Stream */}
            <motion.div className="space-y-2">
              {['Love the energy! 🔥', 'This is exactly what I needed', 'Meh, seen better'].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.3 }}
                  className="flex items-center gap-3 bg-black/20 rounded-lg p-2"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    idx === 2 ? 'bg-yellow-400' : 'bg-green-400'
                  }`} />
                  <p className="text-white/60 text-sm flex-1">{text}</p>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.3 + 0.3 }}
                  >
                    {idx === 2 ? '😐' : '😊'}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )

      case 'analytics':
        return (
          <motion.div className="space-y-4">
            {/* Engagement Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: 'Reply Rate', value: '94%', change: '+12%', icon: MessagesSquare },
                { label: 'Avg Response', value: '2.3m', change: '-45s', icon: Clock },
                { label: 'Engagement', value: '8.7x', change: '+2.1x', icon: TrendingUp },
                { label: 'Sentiment', value: '87%', change: '+5%', icon: Heart }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <stat.icon className="w-4 h-4 text-white/40" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className={`text-xs font-medium ${
                        stat.change.startsWith('+') ? 'text-green-400' : 'text-yellow-400'
                      }`}
                    >
                      {stat.change}
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="text-2xl font-bold text-white"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Activity Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-black/30 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-medium">Peak Engagement Times</span>
                <Activity className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="flex items-end gap-1 h-20">
                {[40, 65, 45, 80, 95, 70, 85, 60, 75, 90, 55, 45].map((height, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-yellow-400/50 to-yellow-400 rounded-t"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-white/40 text-xs">12am</span>
                <span className="text-white/40 text-xs">12pm</span>
                <span className="text-white/40 text-xs">11pm</span>
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
      
      {/* Left: Zara Visual */}
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
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl scale-150"
          />
          
          {/* Zara Character */}
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
                <div className="text-[200px]">💛</div>
              </motion.div>
            )}
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
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
                className="text-lg text-yellow-400 mt-3 italic font-medium"
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
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/60 text-sm uppercase tracking-widest">Core Skills</span>
          </div>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {zaraSkills.map((skill) => (
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
          className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-2xl font-semibold text-lg transition-all"
        >
          Let Zara Engage Your Community
        </motion.button>
      </motion.div>
    </div>
  )
}