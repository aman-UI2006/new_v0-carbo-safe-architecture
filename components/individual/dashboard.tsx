'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Leaf, TrendingUp, Award, Zap, Target, Calendar, Users, Share2, Download } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const footprintData = [
  { category: 'Commute', value: 120, color: '#50b83c' },
  { category: 'Electricity', value: 95, color: '#3b9bb8' },
  { category: 'Flights', value: 240, color: '#d4a574' },
  { category: 'Lifestyle', value: 85, color: '#ef6b4f' }
]

const offsetTrend = [
  { month: 'Jan', offset: 2, target: 5 },
  { month: 'Feb', offset: 4, target: 5 },
  { month: 'Mar', offset: 7, target: 8 },
  { month: 'Apr', offset: 12, target: 10 },
  { month: 'May', offset: 18, target: 15 },
  { month: 'Jun', offset: 25, target: 20 }
]

export function Dashboard({ onViewCertificates }: { onViewCertificates?: () => void }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Welcome, Climate Champion</h1>
          <p className="text-foreground/60 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            You've offset 25.4 tons of CO₂ this year
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 hover:shadow-md">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button size="sm" className="bg-gradient-eco text-white hover:shadow-md">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total CO₂ Offset', value: '25.4 tons', icon: Leaf, color: 'from-emerald-400 to-emerald-600' },
          { label: 'Certificates Earned', value: '12', icon: Award, color: 'from-blue-400 to-blue-600' },
          { label: 'Current Streak', value: '23 days', icon: Zap, color: 'from-orange-400 to-orange-600' },
          { label: 'Monthly Goal', value: '72%', icon: Target, color: 'from-purple-400 to-purple-600' },
        ].map((metric, idx) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={item}
              className="group cursor-pointer"
            >
              <Card className="p-6 backdrop-blur-xl bg-white/50 border border-white/20 shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  </div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="w-12 h-12 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Charts Section */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Footprint Breakdown */}
        <Card className="p-6 backdrop-blur-xl bg-white/50 border border-white/20 shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-foreground mb-6">Carbon Footprint Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={footprintData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, value }) => `${category}: ${value}kg`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {footprintData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}kg CO₂`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Offset Trend */}
        <Card className="p-6 backdrop-blur-xl bg-white/50 border border-white/20 shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-foreground mb-6">Offset Progress vs Target</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={offsetTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '2px solid #50b83c', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Legend />
              <Line type="monotone" dataKey="offset" stroke="#50b83c" strokeWidth={3} dot={{ r: 5, fill: '#50b83c' }} name="Offset (tons)" />
              <Line type="monotone" dataKey="target" stroke="#3b9bb8" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4, fill: '#3b9bb8' }} name="Target (tons)" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Gamification Section */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Level & Eco Score */}
        <motion.div whileHover={{ y: -4 }} className="group">
          <Card className="p-6 backdrop-blur-xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-white/20 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity }}>
                <Award className="w-5 h-5 text-primary" />
              </motion.div>
              Eco Level
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">Level 3</p>
                <p className="text-foreground/60 text-sm">Young Tree</p>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="bg-gradient-eco h-full rounded-full shadow-lg"
                />
              </div>
              <p className="text-sm text-foreground/60">650/1000 XP to Level 4</p>
            </div>
          </Card>
        </motion.div>

        {/* Active Challenges */}
        <motion.div whileHover={{ y: -4 }} className="group">
          <Card className="p-6 backdrop-blur-xl bg-white/50 border border-white/20 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              Active Challenges
            </h3>
            <div className="space-y-3">
              {[{ label: 'Walk Instead', streak: '5 days', xp: 50 }, { label: 'No Plastic Day', streak: '3 days', xp: 30 }].map((ch, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-all cursor-pointer"
                >
                  <div>
                    <p className="font-semibold text-sm">{ch.label}</p>
                    <p className="text-xs text-foreground/60">{ch.streak} streak</p>
                  </div>
                  <motion.span className="text-primary font-bold text-sm">+{ch.xp} XP</motion.span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Leaderboard Peek */}
        <motion.div whileHover={{ y: -4 }} className="group">
          <Card className="p-6 backdrop-blur-xl bg-white/50 border border-white/20 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Leaderboard
            </h3>
            <div className="space-y-2">
              {[{ rank: 1, name: 'Sarah Chen', xp: 2450 }, { rank: 2, name: 'You', xp: 1850, highlight: true }, { rank: 3, name: 'Alex Kumar', xp: 1720 }].map((user) => (
                <motion.div
                  key={user.rank}
                  whileHover={{ x: 2 }}
                  className={`flex items-center justify-between p-2 rounded-lg transition-all ${user.highlight ? 'bg-accent/10 border border-accent/30' : ''}`}
                >
                  <span className="text-sm font-semibold">{user.rank}. {user.name}</span>
                  <span className="text-xs text-accent font-bold">{user.xp} XP</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <Card className="p-6 backdrop-blur-xl bg-gradient-eco relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity" />
          <h3 className="text-lg font-bold text-white mb-4 relative z-10">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {[
              { label: 'Calculate Footprint', action: 'calculate' },
              { label: 'Browse Marketplace', action: 'marketplace' },
              { label: 'View Certificates', action: 'certificates' }
            ].map((action, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => action.action === 'certificates' && onViewCertificates?.()}
                  variant="secondary" 
                  className="w-full hover:shadow-lg"
                >
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
