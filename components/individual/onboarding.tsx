'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Leaf, Zap, Award } from 'lucide-react'

const steps = [
  {
    icon: Leaf,
    title: 'Welcome to CarboSafe',
    description: 'Your personal climate action companion. Track, reduce, and offset your carbon footprint with verified projects.',
  },
  {
    icon: Zap,
    title: 'Quick Carbon Quiz',
    description: 'Answer a few questions about your lifestyle to calculate your personal carbon footprint.',
  },
  {
    icon: Award,
    title: 'Earn Rewards',
    description: 'Offset carbon, earn badges, climb levels, and join a global community of climate champions.',
  },
]

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)

  const Icon = steps[currentStep].icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-eco rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-md shadow-2xl relative z-10"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center text-balance">
              {steps[currentStep].title}
            </h2>
            <p className="text-foreground/60 text-center mb-8 text-pretty">
              {steps[currentStep].description}
            </p>
          </motion.div>

          <div className="flex gap-2 mb-8">
            {steps.map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  idx === currentStep ? 'bg-gradient-eco shadow-lg' : idx < currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {currentStep > 0 && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="w-full hover:shadow-md transition-all"
                >
                  Back
                </Button>
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button
                onClick={() => {
                  if (currentStep < steps.length - 1) {
                    setCurrentStep(currentStep + 1)
                  } else {
                    onComplete()
                  }
                }}
                className="w-full bg-gradient-eco hover:shadow-lg text-white"
              >
                {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
