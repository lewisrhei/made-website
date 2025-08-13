export interface VTM {
  id: string
  name: string
  role: string
  tagline: string
  personality: string
  color: string
  bgColor: string
  gradientColors: string
  glowColor: string
  avatar: string
  heroImage: string
  videoIdle: string
  videoWelcome: string
  skills: Skill[]
  description: string
  catchphrase: string
}

export interface Skill {
  name: string
  description: string
  icon: string
  example?: string
}

export const vtmData: VTM[] = [
  {
    id: 'milo',
    name: 'Milo',
    role: 'Creative Director',
    tagline: 'Ideate & Brainstorm',
    personality: 'Energetic creative genius with boundless enthusiasm',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500',
    gradientColors: 'from-blue-500 via-cyan-500 to-indigo-500',
    glowColor: 'shadow-blue-500/50',
    avatar: '🎨',
    heroImage: '/agents/Milo_Transparent.png',
    videoIdle: '/agents/Milo Hero_balanced_736x544.webm',
    videoWelcome: '/agents/Milo Hero_balanced_736x544.webm',
    catchphrase: "Let's create something AMAZING together!",
    description: 'Your creative mastermind who turns trends into viral gold. Milo lives and breathes content, always buzzing with fresh ideas.',
    skills: [
      {
        name: 'Video Ideas',
        description: 'I analyze millions of trending videos to craft ideas perfectly suited for YOUR audience',
        icon: '💡',
        example: '"How about a series where you react to your old videos with plot twists?"'
      },
      {
        name: 'Thumbnail Magic',
        description: 'Eye-popping thumbnails that make scrolling impossible',
        icon: '🖼️',
        example: 'Bright colors, expressive faces, and curiosity gaps that viewers can\'t resist'
      },
      {
        name: 'Title & Tags',
        description: 'SEO-powered titles that balance clickability with discoverability',
        icon: '🏷️',
        example: '"I Tried X for 30 Days" format with trending keywords'
      },
      {
        name: 'Trend Spotting',
        description: 'I spot trends 2 weeks before they explode',
        icon: '📈',
        example: 'Identified the "phone anxiety" trend early, resulting in 10M+ views'
      }
    ]
  },
  {
    id: 'zara',
    name: 'Zara',
    role: 'Community Manager',
    tagline: 'Engage & Connect',
    personality: 'Warm, empathetic community builder who makes everyone feel seen',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500',
    gradientColors: 'from-yellow-400 via-orange-400 to-amber-500',
    glowColor: 'shadow-yellow-500/50',
    avatar: '💛',
    heroImage: '/agents/Zara_Transparent.png',
    videoIdle: '/agents/Zara Hero_balanced_736x544.webm',
    videoWelcome: '/agents/Zara Hero_balanced_736x544.webm',
    catchphrase: "Your community is your superpower!",
    description: 'The heart of your channel. Zara builds genuine connections at scale, turning viewers into a loyal family.',
    skills: [
      {
        name: 'Smart Replies',
        description: 'Personalized responses that sound exactly like you',
        icon: '💌',
        example: 'Turning "First!" into meaningful conversations'
      },
      {
        name: 'Vibe Check',
        description: 'Real-time sentiment analysis of your audience',
        icon: '🎭',
        example: '87% positive vibes on your latest video!'
      },
      {
        name: 'Superfan Recognition',
        description: 'Identify and celebrate your biggest supporters',
        icon: '🏆',
        example: '@Sarah has commented on 47 videos - time for a shoutout!'
      },
      {
        name: 'Drama Prevention',
        description: 'Spot and defuse negativity before it spreads',
        icon: '🛡️',
        example: 'Flagged potential controversy and suggested diplomatic response'
      }
    ]
  },
  {
    id: 'remi',
    name: 'Remi',
    role: 'Content Producer',
    tagline: 'Create & Multiply',
    personality: 'Technical wizard who turns one video into content gold',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500',
    gradientColors: 'from-purple-500 via-violet-500 to-pink-500',
    glowColor: 'shadow-purple-500/50',
    avatar: '🎬',
    heroImage: '/agents/Remi_Transparent.png',
    videoIdle: '/agents/Remi Hero_balanced_736x544.webm',
    videoWelcome: '/agents/Remi Hero_balanced_736x544.webm',
    catchphrase: "One video, infinite possibilities!",
    description: 'Your content multiplication machine. Remi transforms single videos into dozens of clips that dominate every platform.',
    skills: [
      {
        name: 'Viral Clips',
        description: 'Find the golden moments destined to go viral',
        icon: '✂️',
        example: 'Extracted 12 TikTok clips - 8 went viral'
      },
      {
        name: 'Platform Magic',
        description: 'Perfect formatting for every platform',
        icon: '📱',
        example: 'Auto-cropped, captioned, optimized for mobile'
      },
      {
        name: 'AI Videos',
        description: 'Generate new videos from your content library',
        icon: '🤖',
        example: 'Created a "Best of 2024" that got 5M views'
      },
      {
        name: 'Content Remix',
        description: 'Breathe new life into old content',
        icon: '🔄',
        example: 'Turned old tutorial into trending content'
      }
    ]
  },
  {
    id: 'enzo',
    name: 'Enzo',
    role: 'Data Analyst',
    tagline: 'Analyze & Optimize',
    personality: 'Data-obsessed strategist who sees patterns others miss',
    color: 'text-green-400',
    bgColor: 'bg-green-500',
    gradientColors: 'from-green-500 via-emerald-500 to-teal-500',
    glowColor: 'shadow-green-500/50',
    avatar: '📊',
    heroImage: '/agents/Enzo_Transparent.png',
    videoIdle: '/agents/Enzo Hero_balanced_736x544.webm',
    videoWelcome: '/agents/Enzo Hero_balanced_736x544.webm',
    catchphrase: "Numbers don't lie - let's decode your success!",
    description: 'Your strategic mastermind. Enzo transforms data into crystal-clear insights and actionable strategies.',
    skills: [
      {
        name: 'Forecasting',
        description: 'Predict performance before you upload',
        icon: '🔮',
        example: 'Predicted 2.3M views (actual: 2.1M)'
      },
      {
        name: 'Competition Intel',
        description: 'Know exactly how to beat them',
        icon: '🎯',
        example: 'Upload at 2pm to steal the spotlight'
      },
      {
        name: 'Growth Maps',
        description: 'Personalized strategies from YOUR data',
        icon: '🗺️',
        example: 'Tuesday uploads get 3x more views'
      },
      {
        name: 'Revenue Max',
        description: 'Maximize every monetization opportunity',
        icon: '💰',
        example: '8-minute videos earn 47% more'
      }
    ]
  },
  {
    id: 'lila',
    name: 'Lila',
    role: 'Distribution Manager',
    tagline: 'Protect & Monetize',
    personality: 'Fierce protector ensuring you get every dollar you deserve',
    color: 'text-red-400',
    bgColor: 'bg-red-500',
    gradientColors: 'from-red-500 via-rose-500 to-pink-500',
    glowColor: 'shadow-red-500/50',
    avatar: '💎',
    heroImage: '/agents/Lila_Transparent.png',
    videoIdle: '/agents/Lila Hero_balanced_736x544.webm',
    videoWelcome: '/agents/Lila Hero_balanced_736x544.webm',
    catchphrase: "Your content, your rules, your revenue!",
    description: 'Your digital bodyguard and revenue maximizer. Lila protects your content and ensures every view pays.',
    skills: [
      {
        name: 'Content Guard',
        description: 'Hunt down thieves and get your money',
        icon: '🔍',
        example: 'Found 23 reuploads, recovered $4,500'
      },
      {
        name: 'Rights Manager',
        description: 'Automated claiming across platforms',
        icon: '⚖️',
        example: '1,000 videos now paying you royalties'
      },
      {
        name: 'Multi-Platform',
        description: 'Your content everywhere, perfectly timed',
        icon: '🌍',
        example: 'Synchronized release for maximum impact'
      },
      {
        name: 'Revenue Recovery',
        description: 'Find money you didn\'t know existed',
        icon: '💸',
        example: 'Discovered $12K in unclaimed revenue'
      }
    ]
  },
  {
    id: 'amie',
    name: 'Amie',
    role: 'Support Specialist',
    tagline: 'Help & Optimize',
    personality: 'Your reliable friend who\'s always there when you need them',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500',
    gradientColors: 'from-orange-500 via-amber-500 to-yellow-500',
    glowColor: 'shadow-orange-500/50',
    avatar: '🤝',
    heroImage: '/agents/Amie_Transparent.png',
    videoIdle: '/agents/Amie Hero_balanced_736x544.webm',
    videoWelcome: '/agents/Amie Hero_balanced_736x544.webm',
    catchphrase: "No problem too big or small!",
    description: 'Your dedicated problem-solver and workflow optimizer. Amie ensures everything runs smoothly.',
    skills: [
      {
        name: 'Instant Solutions',
        description: 'Technical issues solved in seconds',
        icon: '⚡',
        example: 'Fixed export settings losing quality'
      },
      {
        name: 'Workflow Magic',
        description: 'Turn 6-hour tasks into 6 minutes',
        icon: '🚀',
        example: 'Automated uploads - save 4 hours/video'
      },
      {
        name: 'Feature Requests',
        description: 'Your ideas shape Made\'s future',
        icon: '✨',
        example: 'Your batch thumbnail idea is now live!'
      },
      {
        name: '24/7 Support',
        description: 'I never sleep so you can',
        icon: '🌟',
        example: '3am panic? Recovered footage in 5 min'
      }
    ]
  }
]