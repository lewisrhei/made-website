'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Clock,
  MessageSquare,
  BarChart,
  Video,
  Users
} from 'lucide-react'

const features = [
  {
    id: 'ideate',
    title: 'Ideate at Lightning Speed',
    description: 'Generate unlimited video ideas based on trends, your niche, and what your audience loves',
    icon: Brain,
    color: 'from-made-blue to-made-purple',
    stats: '100+ ideas/minute',
    demo: {
      prompt: "Give me viral video ideas about cooking",
      response: "15 game-changing kitchen hacks that went viral on TikTok..."
    }
  },
  {
    id: 'create',
    title: 'Create Without Limits',
    description: 'Transform one video into dozens of clips, shorts, and platform-specific content',
    icon: Video,
    color: 'from-made-purple to-made-pink',
    stats: '30+ clips from 1 video',
    demo: {
      prompt: "Create clips from my latest video",
      response: "Found 12 viral moments, creating optimized clips..."
    }
  },
  {
    id: 'analyze',
    title: 'Analyze Like a Pro',
    description: 'Deep insights into what works, predictive analytics, and actionable recommendations',
    icon: BarChart,
    color: 'from-made-green to-made-blue',
    stats: '500+ data points tracked',
    demo: {
      prompt: "Why did my last video underperform?",
      response: "Thumbnail CTR was 40% below average. Here's what to change..."
    }
  },
  {
    id: 'engage',
    title: 'Engage Authentically',
    description: 'AI-powered responses that sound like you, building real connections at scale',
    icon: MessageSquare,
    color: 'from-made-yellow to-made-orange',
    stats: '1000+ comments/day',
    demo: {
      prompt: "Reply to positive comments",
      response: "Crafting personalized responses to 47 new comments..."
    }
  },
  {
    id: 'grow',
    title: 'Grow Consistently',
    description: 'Strategic growth planning, milestone tracking, and competitor analysis',
    icon: TrendingUp,
    color: 'from-made-orange to-made-red',
    stats: '3x faster growth',
    demo: {
      prompt: "How do I reach 100k subscribers?",
      response: "Based on your growth rate, here's your 90-day plan..."
    }
  },
  {
    id: 'protect',
    title: 'Protect Your Content',
    description: 'Monitor unauthorized use, manage rights, and maximize revenue across platforms',
    icon: Shield,
    color: 'from-made-red to-made-purple',
    stats: '$10k+ recovered/year',
    demo: {
      prompt: "Check if my content is being stolen",
      response: "Found 3 unauthorized uses. Initiating claims..."
    }
  }
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const [isTyping, setIsTyping] = useState(false)

  const handleFeatureClick = (feature: typeof features[0]) => {
    setActiveFeature(feature)
    setIsTyping(true)
    setTimeout(() => setIsTyping(false), 1500)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-made-dark-accent/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Dominate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six core capabilities that transform how creators work, powered by cutting-edge AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleFeatureClick(feature)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature.id === feature.id 
                    ? 'glass border-2 border-white/30' 
                    : 'glass-dark hover:bg-white/5'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-2.5 mb-4`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{feature.description}</p>
                <div className="text-xs font-semibold text-gradient">{feature.stats}</div>

                {activeFeature.id === feature.id && (
                  <motion.div
                    layoutId="feature-indicator"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Interactive Demo */}
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className={`absolute -inset-4 bg-gradient-to-br ${activeFeature.color} rounded-3xl blur-3xl opacity-10`} />
            
            <div className="relative glass rounded-3xl p-8 space-y-6">
              {/* Demo Header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeFeature.color} p-2`}>
                  <activeFeature.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{activeFeature.title}</h3>
                  <p className="text-sm text-gray-400">Live Demo</p>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="space-y-4">
                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-end"
                >
                  <div className="bg-gradient-to-r from-made-blue to-made-purple p-4 rounded-2xl rounded-br-sm max-w-xs">
                    <p className="text-sm">{activeFeature.demo.prompt}</p>
                  </div>
                </motion.div>

                {/* AI Response */}
                <AnimatePresence mode="wait">
                  {isTyping ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-2 p-4"
                    >
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce animation-delay-200" />
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce animation-delay-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm">
                        {activeFeature.icon === Brain && '🎨'}
                        {activeFeature.icon === Video && '🎬'}
                        {activeFeature.icon === BarChart && '📈'}
                        {activeFeature.icon === MessageSquare && '💬'}
                        {activeFeature.icon === TrendingUp && '🚀'}
                        {activeFeature.icon === Shield && '🛡️'}
                      </div>
                      <div className="flex-1 bg-white/5 p-4 rounded-2xl rounded-bl-sm">
                        <p className="text-sm text-gray-300">{activeFeature.demo.response}</p>
                        <div className="flex gap-2 mt-3">
                          <div className="h-2 flex-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className={`px-4 py-2 bg-gradient-to-r ${activeFeature.color} rounded-lg text-sm font-semibold transition-all hover:scale-105`}>
                  Try It Now
                </button>
                <button className="px-4 py-2 glass rounded-lg text-sm font-semibold hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}