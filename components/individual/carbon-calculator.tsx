'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, CheckCircle, Lightbulb } from 'lucide-react'

const calculatorSteps = [
  {
    id: 'commute',
    question: 'How do you commute daily?',
    type: 'select',
    options: [
      { label: 'Car', value: 120, emoji: '🚗' },
      { label: 'Public Transit', value: 45, emoji: '🚌' },
      { label: 'Bike', value: 0, emoji: '🚴' },
      { label: 'Walk', value: 0, emoji: '🚶' },
    ],
  },
  {
    id: 'electricity',
    question: 'Monthly electricity usage (kWh)?',
    type: 'slider',
    min: 0,
    max: 500,
    default: 150,
  },
  {
    id: 'diet',
    question: 'What\'s your diet preference?',
    type: 'select',
    options: [
      { label: 'Vegan', value: 30, emoji: '🥗' },
      { label: 'Vegetarian', value: 60, emoji: '🥕' },
      { label: 'Pescatarian', value: 80, emoji: '🐟' },
      { label: 'Meat Eater', value: 120, emoji: '🍖' },
    ],
  },
  {
    id: 'flights',
    question: 'Annual flight hours?',
    type: 'slider',
    min: 0,
    max: 100,
    default: 20,
  },
]

export function CarbonCalculator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [completed, setCompleted] = useState(false)

  const currentStep = calculatorSteps[step]

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [currentStep.id]: value })
  }

  const handleNext = () => {
    if (step < calculatorSteps.length - 1) {
      setStep(step + 1)
    } else {
      setCompleted(true)
    }
  }

  const totalFootprint = Object.values(answers).reduce((a, b) => a + b, 0)

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <Card className="p-8 backdrop-blur-xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-white/20 shadow-lg text-center relative overflow-hidden">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 right-6 text-4xl opacity-20"
          >
            🌱
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Your Carbon Footprint</h2>
          <p className="text-6xl font-bold bg-gradient-eco bg-clip-text text-transparent mb-2">
            {(totalFootprint / 1000).toFixed(1)} tons
          </p>
          <p className="text-foreground/60 mb-6">of CO₂ per year</p>
          <p className="text-sm text-foreground/60 mb-8">
            This is equivalent to planting {Math.round(totalFootprint / 21)} trees per year to offset
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-eco hover:shadow-lg text-white">
              Explore Offset Options
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-foreground/60">Step {step + 1} of {calculatorSteps.length}</span>
                <span className="text-sm font-semibold text-foreground/60">{currentStep.question}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / calculatorSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-eco h-full rounded-full shadow-lg"
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-foreground mb-6">{currentStep.question}</h2>

            {/* Options */}
            {currentStep.type === 'select' ? (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentStep.options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      answers[currentStep.id] === option.value
                        ? 'border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg scale-105'
                        : 'border-slate-200 bg-muted/50 hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    <div className="text-3xl mb-2">{option.emoji}</div>
                    <p className="font-semibold text-foreground">{option.label}</p>
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-foreground/60">kWh</span>
                  <motion.span 
                    key={answers[currentStep.id] || currentStep.default}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {answers[currentStep.id] || currentStep.default}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min={currentStep.min}
                  max={currentStep.max}
                  value={answers[currentStep.id] || currentStep.default}
                  onChange={(e) => handleAnswer(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary shadow-md"
                />
                <div className="flex justify-between text-xs text-foreground/40 mt-2">
                  <span>{currentStep.min}</span>
                  <span>{currentStep.max}</span>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  variant="outline"
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="w-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-eco hover:shadow-lg text-white"
                >
                  {step === calculatorSteps.length - 1 ? 'See Results' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
