import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { ProcessFlow } from '@/components/landing/process-flow'
import { ProjectStrip } from '@/components/landing/project-strip'
import { FinalCTA } from '@/components/landing/final-cta'
import { Navigation } from '@/components/landing/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <ProjectStrip />
      <ProcessFlow />
      <FinalCTA />
    </div>
  )
}
