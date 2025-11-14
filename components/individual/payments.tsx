'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard, Wallet, Download, Filter, CheckCircle } from 'lucide-react'

const transactions = [
  {
    id: 1,
    type: 'offset',
    project: 'Amazon Rainforest Protection',
    amount: '$62.50',
    tons: '5.0',
    date: '2024-06-15',
    status: 'Completed',
  },
  {
    id: 2,
    type: 'offset',
    project: 'Solar Farm Project',
    amount: '$28.00',
    tons: '3.5',
    date: '2024-05-20',
    status: 'Completed',
  },
  {
    id: 3,
    type: 'refund',
    project: 'Cancelled Wind Project',
    amount: '$24.00',
    tons: '2.0',
    date: '2024-04-10',
    status: 'Refunded',
  },
]

export function Payments() {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-foreground mb-6">Payment Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { id: 'card', icon: CreditCard, label: 'Credit Card', desc: 'Visa, Mastercard, Amex' },
              { id: 'wallet', icon: Wallet, label: 'Digital Wallet', desc: 'UPI, PayPal, Apple Pay' },
            ].map((method) => {
              const Icon = method.icon
              return (
                <motion.button
                  key={method.id}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 border-2 rounded-lg transition-all relative overflow-hidden group ${
                    paymentMethod === method.id ? 'border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg' : 'border-slate-200 hover:border-primary/50 hover:shadow-md'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-eco opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <Icon className="w-6 h-6 mb-2 relative z-10" />
                  <p className="font-semibold relative z-10">{method.label}</p>
                  <p className="text-xs text-foreground/60 relative z-10">{method.desc}</p>
                </motion.button>
              )
            })}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-gradient-eco hover:shadow-lg text-white">
              Add Payment Method
            </Button>
          </motion.div>
        </Card>
      </motion.div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-xl font-bold text-foreground">Transaction History</h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="sm" className="gap-2 hover:shadow-md">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </motion.div>
        </div>

        <div className="space-y-3">
          {transactions.map((tx, idx) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 4, scale: 1.01 }}
            >
              <Card className="p-4 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground">{tx.project}</p>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </motion.div>
                    </div>
                    <p className="text-xs text-foreground/60">{tx.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{tx.amount}</p>
                    <p className="text-xs text-accent font-medium">{tx.tons} tons CO₂</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download Receipts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-primary" />
            Download Receipts
          </h2>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" className="w-full gap-2 hover:shadow-md">
              <Download className="w-4 h-4" />
              Download All Receipts (PDF)
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}
