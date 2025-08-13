'use client'

import { motion } from 'framer-motion'
import { Star, Play, TrendingUp, Users, DollarSign } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    handle: '@sarahcreates',
    avatar: '👩‍🎨',
    content: 'Made completely transformed my workflow. I went from posting once a week to daily content across 3 platforms. My audience grew 10x in 2 months!',
    stats: {
      growth: '+850K followers',
      revenue: '$45K/month',
      time: '80% time saved'
    },
    platform: 'YouTube',
    verified: true
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    handle: '@mjgaming',
    avatar: '🎮',
    content: "The AI agents feel like having a full production team. Milo's ideas are always on point, and Remi turns my streams into viral clips automatically.",
    stats: {
      growth: '+2.3M followers',
      revenue: '$120K/month',
      time: '6 hours → 30 min/day'
    },
    platform: 'Twitch',
    verified: true
  },
  {
    id: 3,
    name: 'Alex Rivera',
    handle: '@cookwithalex',
    avatar: '👨‍🍳',
    content: "I was burned out and ready to quit. Made brought back my passion for creating. Now I focus on cooking while my AI team handles everything else.",
    stats: {
      growth: '+450K followers',
      revenue: '$28K/month',
      time: 'No more burnout'
    },
    platform: 'TikTok',
    verified: true
  }
]

const metrics = [
  { icon: Users, value: '50K+', label: 'Active Creators' },
  { icon: TrendingUp, value: '2.5B+', label: 'Views Generated' },
  { icon: DollarSign, value: '$180M+', label: 'Creator Earnings' },
  { icon: Play, value: '10M+', label: 'Videos Created' }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-made-dark-accent/30 to-transparent" />
      
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
            Creators Are <span className="text-gradient">Thriving</span> with Made
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of creators who've transformed their content game
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl glass"
            >
              <metric.icon className="w-8 h-8 mx-auto mb-3 text-gradient" />
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-made-purple/20 to-made-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 rounded-2xl glass h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-made-yellow text-made-yellow" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-4 rounded-xl bg-white/5">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Growth</div>
                    <div className="text-sm font-bold text-made-green">{testimonial.stats.growth}</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-xs text-gray-400">Revenue</div>
                    <div className="text-sm font-bold text-made-yellow">{testimonial.stats.revenue}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Time</div>
                    <div className="text-sm font-bold text-made-blue">{testimonial.stats.time}</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {testimonial.name}
                      {testimonial.verified && (
                        <svg className="w-4 h-4 text-made-blue" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">{testimonial.handle} • {testimonial.platform}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Join the creator revolution</p>
          <button className="px-8 py-4 bg-gradient-to-r from-made-purple to-made-blue rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-made-purple/50">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  )
}