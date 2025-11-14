'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function CarbonMarketplace() {
  const [cart, setCart] = useState(0)

  const projects = [
    {
      id: 1,
      name: 'Solar Farm India',
      location: 'Rajasthan, India',
      price: 15,
      credits: 1000,
      score: 4.8,
      image: '☀️',
      impact: '2.5M tons CO₂ avoided'
    },
    {
      id: 2,
      name: 'Reforestation Brazil',
      location: 'Amazon Basin',
      price: 12,
      credits: 1000,
      score: 4.9,
      image: '🌳',
      impact: '1.8M tons CO₂ sequestered'
    },
    {
      id: 3,
      name: 'Wind Energy Kenya',
      location: 'Central Kenya',
      price: 18,
      credits: 1000,
      score: 4.7,
      image: '💨',
      impact: '3.1M tons CO₂ avoided'
    },
    {
      id: 4,
      name: 'Mangrove Protection',
      location: 'Bangladesh',
      price: 10,
      credits: 1000,
      score: 4.9,
      image: '🌿',
      impact: '1.2M tons CO₂ protected'
    }
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
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-bold text-white">Carbon Credit Marketplace</h1>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            className="relative"
          >
            <ShoppingCart className="w-6 h-6 text-emerald-400" />
            {cart > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cart}
              </span>
            )}
          </motion.div>
        </div>
        <p className="text-slate-300">Browse verified carbon offset projects and purchase credits</p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex gap-3 flex-wrap">
        {['All', 'Solar', 'Reforestation', 'Wind', 'Verified'].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full border border-emerald-500/30 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5 }}
            className="bg-gradient-to-b from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all group cursor-pointer"
          >
            {/* Image */}
            <div className="h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform overflow-hidden relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {project.image}
              </motion.div>
            </div>

            <div className="p-5">
              {/* Title */}
              <h3 className="font-bold text-white mb-1">{project.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{project.location}</p>

              {/* Trust Score */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.2 }}>
                    <Star className={`w-4 h-4 ${i < Math.floor(project.score) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
                  </motion.div>
                ))}
                <span className="text-xs text-slate-400 ml-1">{project.score}</span>
              </div>

              {/* Impact */}
              <p className="text-xs text-emerald-400 mb-4">{project.impact}</p>

              {/* Price */}
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">${project.price}</span>
                <span className="text-xs text-slate-400">/1000 credits</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCart(cart + 1)}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                  Buy
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-semibold py-2 rounded-lg transition-colors"
                >
                  <Info className="w-4 h-4 mx-auto" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
