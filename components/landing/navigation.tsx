'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-xl text-foreground">CarboSafe</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/70 hover:text-foreground transition">Features</a>
          <a href="#process" className="text-foreground/70 hover:text-foreground transition">How it Works</a>
          <a href="#marketplace" className="text-foreground/70 hover:text-foreground transition">Marketplace</a>
        </div>

        <Link href="/signup">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}
