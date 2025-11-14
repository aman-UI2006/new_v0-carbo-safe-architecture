'use client'

import { motion } from 'framer-motion'
import { Zap, CheckCircle, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function APIIntegrations() {
  const [connected, setConnected] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: true,
    4: false
  })

  const integrations = [
    { id: 1, name: 'ERP System', description: 'SAP / Oracle integration', icon: '🔗' },
    { id: 2, name: 'Fleet Management', description: 'Vehicle tracking & fuel', icon: '🚗' },
    { id: 3, name: 'Electricity Meter', description: 'Real-time usage sync', icon: '⚡' },
    { id: 4, name: 'Travel Records', description: 'Flight & transport logs', icon: '✈️' }
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

  const handleConnect = (id: number) => {
    setConnected(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-bold text-white mb-2">API & Integrations</h1>
        <p className="text-slate-300">Connect your business tools and systems</p>
      </motion.div>

      {/* Integrations Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((integration) => (
          <motion.div
            key={integration.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            {/* Ripple Animation for Connected */}
            {connected[integration.id] && (
              <motion.div
                animate={{ scale: [1, 1.2, 1.3], opacity: [1, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-500/20 rounded-xl pointer-events-none"
              />
            )}

            <div className={`relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-md border-2 rounded-xl p-6 transition-all ${
              connected[integration.id] ? 'border-green-500/50' : 'border-slate-600/50 hover:border-emerald-500/50'
            }`}>
              <div className="text-4xl mb-4">{integration.icon}</div>

              <h3 className="font-bold text-white mb-1">{integration.name}</h3>
              <p className="text-xs text-slate-400 mb-4">{integration.description}</p>

              <div className="flex items-center gap-2 mb-4">
                {connected[integration.id] ? (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    className="flex items-center gap-1 text-green-400 text-xs font-semibold"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Connected
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                    <Circle className="w-4 h-4" />
                    Not Connected
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleConnect(integration.id)}
                className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                  connected[integration.id]
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                {connected[integration.id] ? 'Disconnect' : 'Connect'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* API Documentation */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">API Documentation</h2>
        <p className="text-slate-300 mb-4">Build custom integrations using our REST API</p>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Zap className="w-4 h-4 mr-2" />
          View API Docs
        </Button>
      </motion.div>
    </motion.div>
  )
}
