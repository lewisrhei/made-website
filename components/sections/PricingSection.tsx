'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, Crown } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for new creators',
    price: 0,
    priceLabel: 'Free Forever',
    icon: Sparkles,
    color: 'from-gray-600 to-gray-500',
    features: [
      '3 AI agents (Milo, Zora, Enzo)',
      '10 video ideas per month',
      '5 AI responses per day',
      'Basic analytics',
      'Community support',
      '1 connected channel'
    ],
    limitations: [
      'Limited to 10 videos/month',
      'No video downloads',
      'Basic features only'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For serious creators',
    price: 49,
    priceLabel: '/month',
    icon: Zap,
    color: 'from-made-purple to-made-blue',
    features: [
      'All 6 AI agents',
      'Unlimited video ideas',
      'Unlimited AI responses',
      'Advanced analytics & forecasting',
      'Priority support',
      '5 connected channels',
      'Auto-clipping & repurposing',
      'Thumbnail A/B testing',
      'Content calendar',
      'API access'
    ],
    limitations: [],
    cta: 'Go Pro',
    popular: true,
    savings: 'Save $240/year with annual'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For teams & agencies',
    price: 199,
    priceLabel: '/month',
    icon: Crown,
    color: 'from-made-yellow to-made-orange',
    features: [
      'Everything in Pro',
      'Unlimited channels',
      'Custom AI training',
      'White-label options',
      'Dedicated account manager',
      'SLA guarantee',
      'Advanced API access',
      'Team collaboration',
      'Custom integrations',
      'Priority processing'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price === 0) return plan.price
    if (billingPeriod === 'annual') {
      return Math.floor(plan.price * 0.8) // 20% discount
    }
    return plan.price
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-made-dark-accent/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple Pricing, <span className="text-gradient">Massive Value</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your creator journey
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full glass">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === 'annual' 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-made-green">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-gradient-to-r from-made-purple to-made-blue rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative p-8 rounded-3xl h-full flex flex-col ${
                plan.popular 
                  ? 'glass border-2 border-made-purple/50' 
                  : 'glass-dark'
              }`}>
                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-made-purple/20 to-made-blue/20 rounded-3xl blur-xl" />
                )}

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} p-2.5 mb-4`}>
                      <plan.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-gray-400">{plan.priceLabel}</span>
                    </div>
                    {plan.savings && billingPeriod === 'annual' && (
                      <p className="text-sm text-made-green mt-1">{plan.savings}</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-made-green shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-start gap-3 opacity-50">
                        <span className="w-5 h-5 text-center text-gray-500 shrink-0">×</span>
                        <span className="text-sm text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-made-purple to-made-blue hover:shadow-lg hover:shadow-made-purple/50 hover:scale-105'
                      : 'glass hover:bg-white/10'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-made-green" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-made-green" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-made-green" />
              <span>No credit card required for free</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}