'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, CheckCircle, Lock, Star } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Carbon Footprint 101',
    lessons: 3,
    completed: 2,
    badges: ['Learner', 'Eco-Aware'],
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'Renewable Energy Guide',
    lessons: 4,
    completed: 0,
    badges: [],
    difficulty: 'Intermediate',
  },
  {
    id: 3,
    title: 'Sustainable Living',
    lessons: 5,
    completed: 0,
    badges: [],
    difficulty: 'Advanced',
  },
]

export function Academy() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Eco-Learning Academy</h2>
        <p className="text-foreground/60">Learn and earn badges on your climate journey</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg hover:shadow-xl transition-all flex flex-col h-full group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full font-semibold"
                >
                  {course.difficulty}
                </motion.span>
              </div>

              <h3 className="font-bold text-foreground flex-1 group-hover:text-primary transition-colors mb-4">{course.title}</h3>

              <div className="mb-4 flex-1">
                <div className="flex justify-between text-xs text-foreground/60 mb-2">
                  <span>Progress</span>
                  <span>{course.completed}/{course.lessons}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(course.completed / course.lessons) * 100}%` }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                    className="bg-gradient-eco h-full rounded-full shadow-lg"
                  />
                </div>
              </div>

              {course.badges.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-foreground/60 mb-2 font-semibold">Earned Badges</p>
                  <div className="flex flex-wrap gap-2">
                    {course.badges.map((badge, i) => (
                      <motion.span 
                        key={badge}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-2 py-1 bg-gradient-to-br from-accent/20 to-primary/20 text-accent text-xs rounded-full font-medium flex items-center gap-1"
                      >
                        <Star className="w-3 h-3" />
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-gradient-eco hover:shadow-lg text-white">
                  {course.completed > 0 ? 'Continue' : 'Start'} Learning
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
