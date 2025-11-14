'use client'

import { motion } from 'framer-motion'
import { Users, Plus, Trash2, Shield, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TeamManagement() {
  const teamMembers = [
    { id: 1, name: 'Sarah Chen', email: 'sarah@company.com', role: 'Admin', avatar: '👩' },
    { id: 2, name: 'John Smith', email: 'john@company.com', role: 'Manager', avatar: '👨' },
    { id: 3, name: 'Emily Davis', email: 'emily@company.com', role: 'Viewer', avatar: '👩' },
    { id: 4, name: 'Alex Kumar', email: 'alex@company.com', role: 'Manager', avatar: '👨' }
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

  const roleColors = {
    Admin: 'bg-red-500/20 text-red-400 border-red-500/50',
    Manager: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    Viewer: 'bg-blue-500/20 text-blue-400 border-blue-500/50'
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
          <div>
            <h1 className="text-4xl font-bold text-white">Team Management</h1>
            <p className="text-slate-300">Manage team members and their access levels</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Invite Member
          </motion.button>
        </div>
      </motion.div>

      {/* Team Table */}
      <motion.div variants={itemVariants} className="bg-slate-800/50 backdrop-blur-md border border-emerald-500/20 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-emerald-500/20 bg-slate-800/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Member</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Role</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-500/10">
            {teamMembers.map((member, idx) => (
              <motion.tr
                key={member.id}
                variants={itemVariants}
                className="hover:bg-slate-700/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{member.avatar}</span>
                    <span className="font-semibold text-white">{member.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400 text-sm">{member.email}</td>
                <td className="px-6 py-4">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold ${roleColors[member.role as keyof typeof roleColors]}`}
                  >
                    {member.role}
                  </motion.div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-400" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Activity Log */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: 'Sarah Chen invited Alex Kumar', time: '2 hours ago', icon: '👥' },
            { action: 'John Smith generated ESG Report', time: '4 hours ago', icon: '📄' },
            { action: 'Emily Davis purchased 5000 credits', time: '1 day ago', icon: '💳' }
          ].map((activity, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-slate-800/30 border border-emerald-500/10 rounded-lg hover:border-emerald-500/30 transition-colors"
            >
              <span className="text-2xl">{activity.icon}</span>
              <div className="flex-1">
                <p className="text-white font-medium">{activity.action}</p>
                <p className="text-xs text-slate-400">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
