'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, TrendingUp, Zap, Filter, ShoppingCart } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Amazon Rainforest Protection',
    location: 'Brazil',
    type: 'Reforestation',
    impact: '500 tons CO₂/year',
    price: '$12.50/ton',
    verification: 95,
    image: 'url("/amazon-rainforest-trees.jpg")',
  },
  {
    id: 2,
    name: 'Solar Farm Project',
    location: 'India',
    type: 'Renewable Energy',
    impact: '1000 tons CO₂/year',
    price: '$8.00/ton',
    verification: 98,
    image: 'url("/solar-panels-farm.jpg")',
  },
  {
    id: 3,
    name: 'Ocean Cleanup Initiative',
    location: 'Pacific Ocean',
    type: 'Marine Conservation',
    impact: '300 tons CO₂/year',
    price: '$15.00/ton',
    verification: 92,
    image: 'url("/ocean-cleanup.jpg")',
  },
  {
    id: 4,
    name: 'Wind Energy Expansion',
    location: 'Kenya',
    type: 'Renewable Energy',
    impact: '800 tons CO₂/year',
    price: '$9.50/ton',
    verification: 96,
    image: 'url("/wind-turbines.jpg")',
  },
]

export function Marketplace() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [cart, setCart] = useState(0)

  return (
    <div className="space-y-6">
      {/* Filters & Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 flex-wrap justify-between"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="gap-2 hover:shadow-md">
              <Filter className="w-4 h-4" />
              All Types
            </Button>
          </motion.div>
          {['Africa', 'South America', 'Asia'].map((region) => (
            <motion.div key={region} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="hover:shadow-md">{region}</Button>
            </motion.div>
          ))}
        </div>
        <motion.div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
          <ShoppingCart className="w-4 h-4 text-primary" />
          <span className="font-semibold text-primary">{cart} items</span>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            onClick={() => setSelectedProject(project.id)}
            className="cursor-pointer group"
          >
            <Card className="overflow-hidden backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
              {/* Image */}
              <div className="relative h-40 bg-muted overflow-hidden group-hover:shadow-inner">
                <motion.div
                  className="w-full h-full bg-cover bg-center group-hover:scale-125 transition-transform duration-500"
                  style={{ backgroundImage: project.image }}
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="sm" className="bg-white text-primary hover:shadow-lg">
                      View Project
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg">
                  {project.verification}% Verified
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex items-center gap-1 text-xs text-foreground/60 mb-3">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-accent">
                    <TrendingUp className="w-4 h-4" />
                    {project.impact}
                  </div>
                  <p className="text-lg font-bold text-foreground">{project.price}</p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="w-full mt-3 bg-gradient-eco hover:shadow-lg text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      setCart(cart + 1)
                    }}
                  >
                    Offset Now
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
