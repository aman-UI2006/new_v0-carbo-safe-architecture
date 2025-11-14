'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Ready to Go Carbon Neutral?
        </h2>
        
        <p className="text-xl text-foreground/70">
          Join thousands making a real impact on climate change. Pick your path and start today.
        </p>

        <Link href="/signup">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent-lg">
            Get Started Now
          </Button>
        </Link>

        <p className="text-sm text-foreground/50">
          Sign up as Individual, Company, or Project Developer
        </p>
      </div>
    </section>
  )
}
