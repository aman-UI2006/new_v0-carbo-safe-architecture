'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Calculator, Leaf, Award, BarChart3, BookOpen, Wallet, User, LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Calculator, label: 'Carbon Calculator', id: 'calculator' },
  { icon: Leaf, label: 'Marketplace', id: 'marketplace' },
  { icon: Award, label: 'Certificates', id: 'certificates' },
  { icon: BarChart3, label: 'History', id: 'history' },
  { icon: BookOpen, label: 'Eco Academy', id: 'academy' },
  { icon: Wallet, label: 'Payments', id: 'payments' },
  { icon: User, label: 'Profile', id: 'profile' },
]

export function IndividualLayout({ 
  children, 
  activeView,
  onViewChange
}: { 
  children: React.ReactNode
  activeView: string
  onViewChange: (view: string) => void
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-50/20 to-background">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen || true ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 bottom-0 w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200 shadow-xl z-40 md:translate-x-0"
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-gradient-eco rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CarboSafe
            </span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeView === item.id
                      ? 'bg-gradient-eco text-white shadow-md glow-accent'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="border-t border-slate-200 mt-8 pt-6">
            <Link href="/">
              <Button variant="outline" className="w-full gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 p-4 flex items-center justify-between">
          <div className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CarboSafe
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 md:p-8 max-w-7xl mx-auto"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
