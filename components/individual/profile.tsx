'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Mail, Bell, Moon, Trash2, ExternalLink, Save, AlertCircle } from 'lucide-react'

export function Profile() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [changed, setChanged] = useState(false)

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled)
    setChanged(true)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setChanged(true)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Profile Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Profile Information
          </h2>

          <div className="space-y-4">
            {[
              { label: 'Full Name', defaultValue: 'Alex Johnson', icon: User },
              { label: 'Email Address', defaultValue: 'alex@example.com', icon: Mail, type: 'email' },
              { label: 'City', defaultValue: 'San Francisco', icon: null },
            ].map((field, i) => {
              const Icon = field.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 text-primary" />}
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type || 'text'}
                    defaultValue={field.defaultValue}
                    onChange={() => setChanged(true)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:border-primary/50"
                  />
                </motion.div>
              )
            })}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-gradient-eco hover:shadow-lg text-white mt-4 gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-foreground mb-6">Preferences</h2>

          <div className="space-y-4">
            {[
              { label: 'Email Notifications', icon: Bell, value: notificationsEnabled, toggle: toggleNotifications },
              { label: 'Dark Mode', icon: Moon, value: darkMode, toggle: toggleDarkMode },
            ].map((pref, i) => {
              const Icon = pref.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{pref.label}</span>
                  </div>
                  <motion.button
                    onClick={pref.toggle}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      pref.value ? 'bg-primary' : 'bg-muted'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={{ x: pref.value ? 24 : 2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="w-5 h-5 rounded-full bg-white shadow-lg"
                    />
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </Card>
      </motion.div>

      {/* Linked Accounts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-foreground mb-6">Linked Accounts</h2>

          <div className="space-y-3">
            <motion.div
              whileHover={{ x: 4, scale: 1.01 }}
              className="flex items-center justify-between p-4 bg-muted rounded-lg hover:shadow-md transition-all"
            >
              <span className="font-medium text-foreground">Google Account</span>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="ghost" className="gap-2 hover:shadow-md">
                  Disconnect
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ x: 4, scale: 1.01 }}
              className="flex items-center justify-between p-4 bg-muted rounded-lg hover:shadow-md transition-all"
            >
              <span className="font-medium text-foreground">Crypto Wallet</span>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-primary text-white hover:shadow-lg">
                  Connect Wallet
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 backdrop-blur-xl bg-red-50/80 border border-red-200 shadow-lg">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Trash2 className="w-5 h-5" />
            </motion.div>
            Danger Zone
          </h2>

          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-red-600 hover:bg-red-700 hover:shadow-lg text-white">
              Delete Account
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}
