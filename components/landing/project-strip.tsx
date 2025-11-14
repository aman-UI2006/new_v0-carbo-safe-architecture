'use client'

import { ChevronRight } from 'lucide-react'

export function ProjectStrip() {
  const projects = [
    { name: 'Solar Farm India', impact: '50K tons', region: 'India' },
    { name: 'Reforestation Brazil', impact: '120K tons', region: 'Brazil' },
    { name: 'Wind Energy Kenya', impact: '85K tons', region: 'Kenya' },
    { name: 'Wetland Restoration', impact: '95K tons', region: 'Southeast Asia' },
  ]

  return (
    <section id="marketplace" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <a href="#" className="flex items-center gap-2 text-accent hover:text-accent/80 transition font-semibold">
            See Marketplace
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-slate-200 bg-card hover:border-accent/50 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition" />
              <h3 className="font-semibold text-foreground mb-2">{project.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-accent font-bold">{project.impact}</span>
                <span className="text-foreground/60">{project.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
