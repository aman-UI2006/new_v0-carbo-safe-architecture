'use client'

import { motion } from 'framer-motion'
import { Copy, Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BrandingTools() {
  const badges = [
    { title: 'Carbon Neutral', icon: '✅', color: 'from-green-400 to-emerald-600' },
    { title: 'Powered by CarboSafe', icon: '⚡', color: 'from-blue-400 to-blue-600' },
    { title: 'Net-Zero Committed', icon: '🎯', color: 'from-purple-400 to-purple-600' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-bold text-white mb-2">Sustainability Branding Tools</h1>
        <p className="text-slate-300">Showcase your environmental commitment</p>
      </motion.div>

      {/* Badges */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Available Badges</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${badge.color} p-8 rounded-xl text-center mb-4 relative overflow-hidden group-hover:shadow-2xl transition-all`}>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-2"
                >
                  {badge.icon}
                </motion.div>
                <p className="text-white font-bold">{badge.title}</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-slate-700 hover:bg-slate-600 gap-2">
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button className="flex-1 bg-slate-700 hover:bg-slate-600 gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Embeddable Widgets */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white mb-4">Embeddable Widgets</h2>
        <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Your Carbon Impact Widget</h3>
          <div className="bg-slate-700/50 rounded-lg p-6 mb-4 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5,000 tons</div>
            <p className="text-slate-300">CO₂ Offset in 2024</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Copy className="w-4 h-4" />
            Copy Embed Code
          </motion.button>
        </div>
      </motion.div>

      {/* Storytelling */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white mb-4">Sustainability Story</h2>
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-emerald-500/20 rounded-xl p-6">
          <p className="text-slate-300 mb-6">Create a compelling narrative about your sustainability journey</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 gap-2">
            <Share2 className="w-4 h-4" />
            Create Story
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
