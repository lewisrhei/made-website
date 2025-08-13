'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Scissors, Smartphone, Video, Sparkles, Upload, Download,
  Play, Pause, SkipForward, Layers, Wand2, Film,
  TrendingUp, Clock, Eye, Heart, Share2, MessageSquare,
  Music, Mic, Camera, Tv, Youtube, Instagram,
  ChevronRight, Zap, Repeat, Grid, Layout,
  BarChart3, Star, Flame, Gauge, FileVideo
} from 'lucide-react'

interface ClipMoment {
  id: string
  timestamp: string
  duration: string
  type: 'hook' | 'climax' | 'reaction' | 'transition'
  viralPotential: number
  description: string
}

interface PlatformFormat {
  platform: string
  format: string
  aspectRatio: string
  duration: string
  optimization: string
  icon: any
}

interface AIVideoTemplate {
  id: string
  name: string
  style: string
  duration: string
  elements: string[]
  popularity: number
}

const clipMoments: ClipMoment[] = [
  {
    id: '1',
    timestamp: '0:45',
    duration: '15s',
    type: 'hook',
    viralPotential: 95,
    description: 'Perfect opening hook - high energy reveal'
  },
  {
    id: '2',
    timestamp: '3:21',
    duration: '30s',
    type: 'climax',
    viralPotential: 92,
    description: 'Main story climax - emotional peak'
  },
  {
    id: '3',
    timestamp: '7:18',
    duration: '20s',
    type: 'reaction',
    viralPotential: 88,
    description: 'Genuine surprise reaction - shareable'
  }
]

const platformFormats: PlatformFormat[] = [
  {
    platform: 'TikTok',
    format: '9:16',
    aspectRatio: 'Vertical',
    duration: '15-60s',
    optimization: 'Fast cuts, trending audio',
    icon: Music
  },
  {
    platform: 'YouTube Shorts',
    format: '9:16',
    aspectRatio: 'Vertical',
    duration: '60s max',
    optimization: 'Strong hook, clear value',
    icon: Youtube
  },
  {
    platform: 'Instagram Reels',
    format: '9:16',
    aspectRatio: 'Vertical',
    duration: '90s max',
    optimization: 'Visual appeal, music sync',
    icon: Instagram
  },
  {
    platform: 'Twitter/X',
    format: '16:9',
    aspectRatio: 'Horizontal',
    duration: '2:20 max',
    optimization: 'Captions, quick context',
    icon: MessageSquare
  }
]

const aiTemplates: AIVideoTemplate[] = [
  {
    id: '1',
    name: 'Explainer Video',
    style: 'Motion Graphics',
    duration: '60-90s',
    elements: ['Text overlays', 'Icons', 'Transitions', 'Background music'],
    popularity: 89
  },
  {
    id: '2',
    name: 'Product Showcase',
    style: '3D Animation',
    duration: '30-45s',
    elements: ['3D models', 'Camera movements', 'Lighting effects', 'Text'],
    popularity: 94
  },
  {
    id: '3',
    name: 'Story Compilation',
    style: 'Cinematic',
    duration: '2-3 min',
    elements: ['B-roll', 'Voiceover', 'Music', 'Color grading'],
    popularity: 87
  }
]

const remixStyles = [
  { name: 'Vintage Film', effect: 'Grain + Sepia', trending: true },
  { name: 'Neon Glow', effect: 'RGB Split + Glow', trending: false },
  { name: 'Anime Style', effect: 'Cell Shading + Lines', trending: true },
  { name: 'Glitch Art', effect: 'Distortion + Noise', trending: false }
]

const remiSkills = [
  {
    id: 'extract-clips',
    name: 'Viral Clips',
    icon: Scissors,
    description: 'Find golden moments',
    color: 'from-purple-400 to-pink-400'
  },
  {
    id: 'vertical',
    name: 'Mobile Optimize',
    icon: Smartphone,
    description: 'Convert for all platforms',
    color: 'from-pink-400 to-rose-400'
  },
  {
    id: 'ai-video',
    name: 'AI Generation',
    icon: Wand2,
    description: 'Create from scratch',
    color: 'from-violet-400 to-purple-400'
  },
  {
    id: 'remix',
    name: 'Content Remix',
    icon: Repeat,
    description: 'Transform old content',
    color: 'from-indigo-400 to-violet-400'
  },
  {
    id: 'platform',
    name: 'Multi-Platform',
    icon: Grid,
    description: 'One video, everywhere',
    color: 'from-rose-400 to-pink-400'
  }
]

export default function RemiShowcase({ agentData }: { agentData: any }) {
  const [activeSkill, setActiveSkill] = useState('extract-clips')
  const [currentClip, setCurrentClip] = useState(0)
  const [selectedPlatform, setSelectedPlatform] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [remixProgress, setRemixProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Clip Extraction Animation
  useEffect(() => {
    if (activeSkill === 'extract-clips' && isInView) {
      const interval = setInterval(() => {
        setCurrentClip(prev => (prev + 1) % clipMoments.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Platform Cycling
  useEffect(() => {
    if (activeSkill === 'vertical' && isInView) {
      const interval = setInterval(() => {
        setSelectedPlatform(prev => (prev + 1) % platformFormats.length)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // AI Generation Progress
  useEffect(() => {
    if (activeSkill === 'ai-video' && isInView) {
      setGenerationProgress(0)
      const interval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [activeSkill, isInView])

  // Remix Progress
  useEffect(() => {
    if (activeSkill === 'remix' && isInView) {
      setRemixProgress(0)
      const interval = setInterval(() => {
        setRemixProgress(prev => {
          if (prev >= 100) {
            setTimeout(() => setRemixProgress(0), 1000)
            return 100
          }
          return prev + 5
        })
      }, 100)
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
      case 'extract-clips':
        return (
          <motion.div className="space-y-4">
            {/* Video Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Viral Moment Detection</span>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-400 text-xs font-medium">LIVE ANALYSIS</span>
                </motion.div>
              </div>

              {/* Video Preview with Timeline */}
              <div className="relative bg-black/50 rounded-xl overflow-hidden">
                {/* Video Frame */}
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 relative">
                  {/* Scanning Effect */}
                  <motion.div
                    className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ left: 0 }}
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Current Clip Indicator */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentClip}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-4 left-4 bg-black/60 backdrop-blur rounded-lg p-3"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-white text-sm font-medium">
                          {clipMoments[currentClip].type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-white/80 text-xs">{clipMoments[currentClip].description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Timeline Bar */}
                <div className="p-4 bg-black/40">
                  <div className="relative h-2 bg-white/10 rounded-full">
                    {/* Progress Bar */}
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Clip Markers */}
                    {clipMoments.map((clip, idx) => (
                      <motion.div
                        key={clip.id}
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ left: `${(idx + 1) * 25}%` }}
                        initial={{ scale: 0 }}
                        animate={{ scale: currentClip === idx ? 1.5 : 1 }}
                        transition={{ type: "spring" }}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          currentClip === idx 
                            ? 'bg-purple-400 border-purple-400' 
                            : 'bg-white/20 border-white/40'
                        }`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Time Display */}
                  <div className="flex justify-between mt-2">
                    <span className="text-white/40 text-xs">0:00</span>
                    <span className="text-white/40 text-xs">10:42</span>
                  </div>
                </div>
              </div>

              {/* Detected Clips */}
              <div className="space-y-2 mt-4">
                {clipMoments.map((clip, idx) => (
                  <motion.div
                    key={clip.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      currentClip === idx 
                        ? 'bg-purple-500/20 border border-purple-400/50' 
                        : 'bg-black/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={currentClip === idx ? { rotate: 360 } : {}}
                        transition={{ duration: 1 }}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          clip.type === 'hook' ? 'bg-blue-500/20' :
                          clip.type === 'climax' ? 'bg-red-500/20' :
                          clip.type === 'reaction' ? 'bg-yellow-500/20' :
                          'bg-green-500/20'
                        }`}
                      >
                        <Scissors className="w-4 h-4 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {clip.timestamp} • {clip.duration}
                        </p>
                        <p className="text-white/50 text-xs">{clip.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-400 font-bold text-sm">{clip.viralPotential}%</div>
                      <div className="text-white/40 text-xs">viral score</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )

      case 'vertical':
        return (
          <motion.div className="space-y-4">
            {/* Platform Converter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Layout className="w-5 h-5 text-pink-400" />
                <span className="text-white font-semibold">Smart Format Conversion</span>
              </div>

              {/* Before/After Display */}
              <div className="grid grid-cols-2 gap-4">
                {/* Original */}
                <div>
                  <p className="text-white/60 text-xs mb-2">ORIGINAL</p>
                  <motion.div
                    animate={{ rotateY: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/10 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tv className="w-8 h-8 text-white/20" />
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs text-white/40">16:9</div>
                  </motion.div>
                </div>

                {/* Converted */}
                <div>
                  <p className="text-white/60 text-xs mb-2">OPTIMIZED</p>
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ rotateY: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-24 aspect-[9/16] bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-400/30 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent"
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white/40" />
                      </div>
                      <div className="absolute bottom-2 left-2 text-xs text-white/40">9:16</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Platform Selection */}
              <div className="mt-6 space-y-3">
                {platformFormats.map((platform, idx) => (
                  <motion.div
                    key={platform.platform}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedPlatform(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedPlatform === idx
                        ? 'bg-pink-500/20 border border-pink-400/50'
                        : 'bg-black/20 hover:bg-black/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={selectedPlatform === idx ? { rotate: [0, 360] } : {}}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center"
                        >
                          <platform.icon className="w-5 h-5 text-pink-400" />
                        </motion.div>
                        <div>
                          <p className="text-white font-medium">{platform.platform}</p>
                          <p className="text-white/50 text-xs">{platform.format} • {platform.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-pink-400 text-sm font-medium">{platform.aspectRatio}</p>
                        <p className="text-white/40 text-xs">{platform.optimization}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Export Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-white font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export All Formats
              </motion.button>
            </motion.div>
          </motion.div>
        )

      case 'ai-video':
        return (
          <motion.div className="space-y-4">
            {/* AI Generation Studio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-violet-400" />
                  <span className="text-white font-semibold">AI Video Generator</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6"
                >
                  <Sparkles className="w-6 h-6 text-violet-400" />
                </motion.div>
              </div>

              {/* Template Selection */}
              <div className="space-y-3 mb-6">
                {aiTemplates.map((template, idx) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedTemplate(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedTemplate === idx
                        ? 'bg-violet-500/20 border border-violet-400/50'
                        : 'bg-black/20 hover:bg-black/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{template.name}</h4>
                      <span className="text-violet-400 text-sm">{template.style}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span>{template.duration}</span>
                      <span>•</span>
                      <span>{template.elements.length} elements</span>
                    </div>
                    {/* Popularity Bar */}
                    <div className="mt-2 h-1 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${template.popularity}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="h-full bg-gradient-to-r from-violet-400 to-purple-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Generation Progress */}
              {generationProgress > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/40 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">Generating AI Video...</span>
                    <span className="text-violet-400 font-bold">{generationProgress}%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-400 to-purple-400"
                      animate={{ width: `${generationProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  {generationProgress === 100 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-400 text-xs mt-2"
                    >
                      ✓ Video generated successfully!
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* Elements Preview */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {aiTemplates[selectedTemplate].elements.map((element, idx) => (
                  <motion.div
                    key={element}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-violet-500/10 rounded-lg p-2 text-center"
                  >
                    <p className="text-xs text-violet-400">{element}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )

      case 'remix':
        return (
          <motion.div className="space-y-4">
            {/* Content Remixer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-semibold">Content Transformation</span>
              </div>

              {/* Remix Styles */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {remixStyles.map((style, idx) => (
                  <motion.div
                    key={style.name}
                    initial={{ opacity: 0, rotateY: -180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-black/20 rounded-xl p-4 border border-white/10 overflow-hidden"
                  >
                    {style.trending && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-2 right-2"
                      >
                        <Flame className="w-4 h-4 text-orange-400" />
                      </motion.div>
                    )}
                    <h4 className="text-white font-medium text-sm mb-1">{style.name}</h4>
                    <p className="text-white/40 text-xs">{style.effect}</p>
                    {/* Preview Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        background: [
                          'linear-gradient(45deg, transparent, rgba(99,102,241,0.3), transparent)',
                          'linear-gradient(45deg, transparent, rgba(168,85,247,0.3), transparent)',
                          'linear-gradient(45deg, transparent, rgba(99,102,241,0.3), transparent)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Remix Progress */}
              {remixProgress > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-black/40 rounded-xl p-4 mb-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">Applying style...</span>
                    <span className="text-indigo-400 font-bold">{remixProgress}%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-400 to-violet-400"
                      animate={{ width: `${remixProgress}%` }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Before/After Slider */}
              <div className="relative aspect-video bg-black/40 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Before */}
                  <div className="w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <p className="text-white/40 text-sm">Original</p>
                  </div>
                  {/* After */}
                  <div className="w-1/2 bg-gradient-to-br from-indigo-900/30 to-violet-900/30 flex items-center justify-center">
                    <p className="text-indigo-400 text-sm">Remixed</p>
                  </div>
                </div>
                {/* Slider Handle */}
                <motion.div
                  className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
                  animate={{ x: [-100, 100, -100] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ left: '50%' }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-black" />
                  </div>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <Eye className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                  <p className="text-white font-bold">2.3x</p>
                  <p className="text-white/40 text-xs">More Views</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <Heart className="w-4 h-4 text-pink-400 mx-auto mb-1" />
                  <p className="text-white font-bold">89%</p>
                  <p className="text-white/40 text-xs">Engagement</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/20 rounded-lg p-3 text-center"
                >
                  <Share2 className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                  <p className="text-white font-bold">5.7k</p>
                  <p className="text-white/40 text-xs">Shares</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )

      case 'platform':
        return (
          <motion.div className="space-y-4">
            {/* Multi-Platform Dashboard */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Grid className="w-5 h-5 text-rose-400" />
                <span className="text-white font-semibold">One-Click Distribution</span>
              </div>

              {/* Platform Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'YouTube', icon: Youtube, color: 'red', status: 'ready' },
                  { name: 'TikTok', icon: Music, color: 'pink', status: 'uploading' },
                  { name: 'Instagram', icon: Instagram, color: 'purple', status: 'scheduled' },
                  { name: 'Twitter', icon: MessageSquare, color: 'blue', status: 'ready' },
                  { name: 'Facebook', icon: Share2, color: 'indigo', status: 'ready' },
                  { name: 'LinkedIn', icon: Tv, color: 'cyan', status: 'scheduled' }
                ].map((platform, idx) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className={`relative bg-${platform.color}-500/10 border border-${platform.color}-400/30 rounded-xl p-4 text-center`}
                  >
                    <platform.icon className={`w-6 h-6 text-${platform.color}-400 mx-auto mb-2`} />
                    <p className="text-white text-xs font-medium">{platform.name}</p>
                    {platform.status === 'uploading' && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1 right-1"
                      >
                        <Upload className="w-3 h-3 text-yellow-400" />
                      </motion.div>
                    )}
                    {platform.status === 'scheduled' && (
                      <div className="absolute top-1 right-1">
                        <Clock className="w-3 h-3 text-blue-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Upload Progress */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/40 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Publishing to 6 platforms...</span>
                  <span className="text-rose-400 font-bold">4/6</span>
                </div>
                <div className="space-y-2">
                  {['YouTube', 'TikTok', 'Instagram', 'Twitter'].map((platform, idx) => (
                    <div key={platform} className="flex items-center gap-3">
                      <span className="text-white/60 text-xs w-20">{platform}</span>
                      <div className="flex-1 h-1 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: idx * 0.3 }}
                          className="h-full bg-gradient-to-r from-rose-400 to-pink-400"
                        />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.3 + 1.5 }}
                      >
                        <Star className="w-3 h-3 text-green-400" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Performance Preview */}
              <div className="mt-4 p-3 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-lg border border-rose-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-rose-400" />
                    <span className="text-white text-sm">Estimated Reach</span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-rose-400 font-bold"
                  >
                    2.5M views
                  </motion.span>
                </div>
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
      
      {/* Left: Remi Visual */}
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
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl scale-150"
          />
          
          {/* Remi Character */}
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
                <div className="text-[200px]">🎬</div>
              </div>
            )}
            
            {/* Floating video frames */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + (i % 3) * 30}%`,
                  top: `${10 + Math.floor(i / 3) * 45}%`
                }}
                animate={{
                  y: [-15, 15, -15],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [-5, 5, -5]
                }}
                transition={{
                  duration: 4 + i,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              >
                <div className="w-8 h-6 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded border border-white/20" />
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
                className="text-lg text-purple-400 mt-3 italic font-medium"
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
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-white/60 text-sm uppercase tracking-widest">Production Suite</span>
          </div>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {remiSkills.map((skill) => (
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
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-black rounded-2xl font-semibold text-lg transition-all"
        >
          Let Remi Multiply Your Content
        </motion.button>
      </motion.div>
    </div>
  )
}