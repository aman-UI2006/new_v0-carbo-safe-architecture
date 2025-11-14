'use client'

import { motion } from 'framer-motion'
import { BarChart3, Leaf, FileText, Award, Users, Zap, Palette, Flame, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface BusinessLayoutProps {
  children: React.ReactNode
  activeView: string
  onViewChange: (view: string) => void
}

export function BusinessLayout({ children, activeView, onViewChange }: BusinessLayoutProps) {
  const menuItems = [
    { id: 'emissions', label: 'Emissions', icon: BarChart3 },
    { id: 'marketplace', label: 'Marketplace', icon: Leaf },
    { id: 'esg', label: 'ESG Reports', icon: FileText },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'integrations', label: 'Integrations', icon: Zap },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'gamification', label: 'Gamification', icon: Flame },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-64 bg-slate-900/50 backdrop-blur-md border-r border-emerald-500/20 h-screen fixed overflow-y-auto"
        >
          <div className="p-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-8"
            >
              CarboSafe
            </motion.div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeView === item.id
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => onViewChange(item.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/50'
                        : 'text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
            </nav>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <Link href="/signup">
              <Button className="w-full gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="ml-64 w-full">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
