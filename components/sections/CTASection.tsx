'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Clock, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 })
  const [spotsLeft] = useState(7)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-made-purple/20 via-made-blue/20 to-made-green/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Indicators */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <Clock className="w-4 h-4 text-made-yellow" />
            <span>Limited time: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <Users className="w-4 h-4 text-made-red" />
            <span>Only {spotsLeft} spots left today</span>
          </div>
        </motion.div>

        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Sparkles className="w-4 h-4 text-made-yellow animate-pulse" />
            <span className="font-semibold">Special Launch Offer</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient">10x Your Content Game?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using Made to dominate their niche. 
            Start free, upgrade anytime, cancel whenever.
          </p>

          {/* Value Props */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {[
              { emoji: '🚀', text: 'Setup in 2 minutes' },
              { emoji: '💳', text: 'No credit card required' },
              { emoji: '🎯', text: 'Results in 24 hours' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-xl glass-dark flex items-center gap-2 justify-center"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-made-purple to-made-blue rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-made-purple/50">
              <span className="relative z-10 flex items-center gap-3">
                Claim Your Free Account
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-made-blue to-made-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex -space-x-2">
                {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍🎤', '👨‍🍳'].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full glass border-2 border-made-dark flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">
                +50,000 creators already using Made
              </span>
            </div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-made-yellow fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-400">4.9/5 from 10,000+ reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}