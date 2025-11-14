'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Upload, TrendingUp, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmissionDashboard() {
  const scopeData = [
    { scope: 'Scope 1', emissions: 500, fill: '#10b981' },
    { scope: 'Scope 2', emissions: 1200, fill: '#06b6d4' },
    { scope: 'Scope 3', emissions: 2800, fill: '#3b82f6' }
  ]

  const monthlyData = [
    { month: 'Jan', emissions: 850, target: 950 },
    { month: 'Feb', emissions: 920, target: 950 },
    { month: 'Mar', emissions: 1020, target: 950 },
    { month: 'Apr', emissions: 980, target: 950 },
    { month: 'May', emissions: 850, target: 950 },
    { month: 'Jun', emissions: 750, target: 950 }
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
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-bold text-white mb-2">Emissions Dashboard</h1>
        <p className="text-slate-300">Track and manage your corporate carbon footprint across all scopes</p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Emissions', value: '4,500 tons', change: '+12%', icon: '📊' },
          { label: 'Scope 1', value: '500 tons', change: '-5%', icon: '🏭' },
          { label: 'Scope 2', value: '1,200 tons', change: '+3%', icon: '⚡' },
          { label: 'Scope 3', value: '2,800 tons', change: '+18%', icon: '🚚' }
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{metric.icon}</span>
              <span className={`text-xs font-bold ${metric.change.startsWith('-') ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Upload Zone */}
      <motion.div variants={itemVariants}>
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-2 border-dashed border-emerald-500/50 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer group">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Upload className="w-12 h-12 text-emerald-400 group-hover:text-emerald-300" />
          </motion.div>
          <p className="text-white font-semibold mb-2">Upload Electricity Bills or Fuel Records</p>
          <p className="text-slate-400 text-sm mb-4">Drag and drop your files or click to browse</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600">Choose Files</Button>
        </div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="bg-slate-800/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Emissions by Scope</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={scopeData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="emissions">
                {scopeData.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} tons`} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-slate-800/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Monthly Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #10b981' }} />
              <Legend />
              <Line type="monotone" dataKey="target" stroke="#64748b" strokeDasharray="5 5" strokeWidth={2} />
              <Line type="monotone" dataKey="emissions" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex gap-4">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
          <Download className="w-4 h-4" />
          Generate Report
        </Button>
        <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
          <TrendingUp className="w-4 h-4 mr-2" />
          View Analytics
        </Button>
      </motion.div>
    </motion.div>
  )
}
