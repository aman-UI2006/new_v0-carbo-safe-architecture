'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-balance space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Make Every Action <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Climate-Positive</span>
            </h1>
            
            <p className="text-xl text-foreground/70 leading-relaxed">
              Offset your carbon footprint effortlessly with AI-verified projects, blockchain security, and real impact tracking.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm h-96">
              {/* Animated leaf shape using CSS */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#50b83c', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#20a084', stopOpacity: 0.8 }} />
                  </linearGradient>
                </defs>
                {/* Leaf shape */}
                <path
                  d="M 100 20 Q 120 60 130 100 Q 120 130 100 160 Q 80 130 70 100 Q 80 60 100 20"
                  fill="url(#leafGrad)"
                  className="animate-bounce"
                />
                <path d="M 100 40 Q 100 100 100 160" stroke="#fff" strokeWidth="2" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
