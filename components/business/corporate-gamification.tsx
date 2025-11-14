'use client'

import { motion } from 'framer-motion'
import { Award, Flame, TrendingUp } from 'lucide-react'

export function CorporateGamification() {
  const leaderboard = [
    { rank: 1, name: 'Tech Corp', score: 8500, trend: 'up' },
    { rank: 2, name: 'Your Company', score: 7200, trend: 'up' },
    { rank: 3, name: 'Green Industries', score: 6800, trend: 'down' },
    { rank: 4, name: 'Eco Solutions', score: 5900, trend: 'up' }
  ]

  const challenges = [
    { title: 'Carbon Fast', goal: '1000 tons', progress: 750 },
    { title: 'Green Team', goal: '50 members', progress: 32 },
    { title: 'Zero Waste Week', goal: 'Complete', progress: 60 }
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
        <h1 className="text-4xl font-bold text-white mb-2">Corporate Gamification</h1>
        <p className="text-slate-300">Engage your team in sustainability challenges</p>
      </motion.div>

      {/* Eco Score Meter */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Company Eco-Score</h2>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4"
        >
          7,200
        </motion.div>
        <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
          />
        </div>
        <p className="text-slate-300">72% to Net-Zero Goal</p>
      </motion.div>

      {/* Leaderboard */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white mb-4">Company Leaderboard</h2>
        <div className="space-y-3">
          {leaderboard.map((company, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-emerald-500/20 rounded-lg hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`text-2xl font-bold w-8 text-center ${
                  idx === 0 ? 'text-yellow-400' : idx === 1 ? 'text-slate-400' : idx === 2 ? 'text-orange-400' : 'text-slate-500'
                }`}>
                  {company.rank}
                </div>
                <div className="flex-1">
                  <p className={`font-bold ${idx === 1 ? 'text-emerald-400' : 'text-white'}`}>{company.name}</p>
                  <p className="text-xs text-slate-400">{company.score} points</p>
                </div>
              </div>
              <motion.div
                animate={company.trend === 'up' ? { y: [0, -3, 0] } : { y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className={`w-5 h-5 ${company.trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Active Challenges */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white mb-4">Active Challenges</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                  <Flame className="w-5 h-5 text-orange-400" />
                </motion.div>
                <h3 className="font-bold text-white">{challenge.title}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-slate-400">Progress</span>
                    <span className="text-xs text-emerald-400 font-bold">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${challenge.progress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400">Goal: {challenge.goal}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Reward Badges */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white mb-4">Achievement Badges</h2>
        <motion.div className="grid grid-cols-3 gap-4">
          {[
            { icon: '🏆', label: 'Champion' },
            { icon: '🌱', label: 'Green Leader' },
            { icon: '⚡', label: 'Energy Star' }
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl mb-2">{badge.icon}</div>
              <p className="text-xs font-semibold text-slate-300">{badge.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
