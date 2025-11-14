'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sprout, DollarSign, CheckCircle, AlertCircle, LogOut } from 'lucide-react'
import Link from 'next/link'

export function DeveloperDashboard() {
  const projects = [
    {
      name: 'Solar Farm Implementation',
      status: 'verified',
      credits: 5000,
      revenue: '$125K',
      verification: 98
    },
    {
      name: 'Reforestation Initiative',
      status: 'pending',
      credits: 2400,
      revenue: 'Pending',
      verification: 75
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Project Developer Dashboard
            </h1>
            <p className="text-foreground/60">Manage your climate projects and track earnings</p>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Total Credits</p>
                <p className="text-3xl font-bold text-foreground">7,400</p>
              </div>
              <Sprout className="w-12 h-12 text-accent opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Total Revenue</p>
                <p className="text-3xl font-bold text-foreground">$125K</p>
              </div>
              <DollarSign className="w-12 h-12 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-secondary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Projects</p>
                <p className="text-3xl font-bold text-foreground">2</p>
                <p className="text-xs text-accent mt-2">1 verified</p>
              </div>
              <CheckCircle className="w-12 h-12 text-secondary opacity-20" />
            </div>
          </Card>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Your Projects</h2>
          {projects.map((project, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                  <p className="text-sm text-foreground/60 mt-1">Verification: {project.verification}%</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'verified'
                    ? 'bg-accent/20 text-accent'
                    : 'bg-amber-500/20 text-amber-600'
                }`}>
                  {project.status === 'verified' ? 'Verified ✓' : 'Under Review'}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-foreground/60">Carbon Credits</p>
                  <p className="text-lg font-bold text-foreground">{project.credits.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-foreground/60">Revenue</p>
                  <p className="text-lg font-bold text-foreground">{project.revenue}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-foreground/60">Status</p>
                  <p className="text-lg font-bold text-accent">Active</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-foreground/60">Uploaded</p>
                  <p className="text-lg font-bold text-foreground">2024</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="bg-accent hover:bg-accent/90">View Details</Button>
                <Button variant="outline">Download Certificate</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* New Project */}
        <div className="mt-8">
          <Card className="p-8 text-center border-2 border-dashed border-accent/50 hover:border-accent transition">
            <Sprout className="w-12 h-12 text-accent/50 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Submit New Project</h3>
            <p className="text-foreground/60 mb-6">Upload your climate project for AI verification and listing</p>
            <Button className="bg-accent hover:bg-accent/90">
              Start New Project
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
