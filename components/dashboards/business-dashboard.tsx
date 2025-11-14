'use client'

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, DollarSign, FileText, Users, LogOut, Leaf } from 'lucide-react'
import Link from 'next/link'

export function BusinessDashboard() {
  const emissionData = [
    { scope: 'Scope 1', emissions: 500 },
    { scope: 'Scope 2', emissions: 1200 },
    { scope: 'Scope 3', emissions: 2800 }
  ]

  const offsetProgress = [
    { quarter: 'Q1', target: 1000, actual: 800 },
    { quarter: 'Q2', target: 1000, actual: 950 },
    { quarter: 'Q3', target: 1000, actual: 1200 },
    { quarter: 'Q4', target: 1000, actual: 1500 }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Corporate Dashboard
            </h1>
            <p className="text-foreground/60">Track your ESG metrics and carbon offsetting progress</p>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-l-4 border-l-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Total Emissions</p>
                <p className="text-3xl font-bold text-foreground">4,500 tons</p>
                <p className="text-xs text-foreground/50 mt-2">Scope 1-3</p>
              </div>
              <TrendingUp className="w-12 h-12 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Offset To Date</p>
                <p className="text-3xl font-bold text-foreground">3,650 tons</p>
                <p className="text-xs text-accent mt-2">81% neutralized</p>
              </div>
              <Leaf className="w-12 h-12 text-accent opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-secondary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Saved in Costs</p>
                <p className="text-3xl font-bold text-foreground">$182K</p>
                <p className="text-xs text-foreground/50 mt-2">Tax benefits</p>
              </div>
              <DollarSign className="w-12 h-12 text-secondary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Team Members</p>
                <p className="text-3xl font-bold text-foreground">24</p>
                <p className="text-xs text-foreground/50 mt-2">With access</p>
              </div>
              <Users className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Emissions by Scope</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={emissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="scope" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Bar dataKey="emissions" fill="#50b83c" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Offset vs Target</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={offsetProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="quarter" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="target" stroke="#999" strokeWidth={2} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="actual" stroke="#50b83c" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-accent hover:bg-accent/90">
                <FileText className="w-4 h-4 mr-2" />
                Generate ESG Report
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Buy Carbon Credits
              </Button>
              <Button className="w-full" variant="outline">
                Manage Team
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Available Projects</h3>
            <div className="space-y-3">
              {['Solar Farm (India)', 'Reforestation (Brazil)', 'Wind Energy (Kenya)'].map((project, idx) => (
                <div key={idx} className="p-3 border border-slate-200 rounded-lg hover:border-accent/50 transition flex items-center justify-between">
                  <span className="text-foreground text-sm">{project}</span>
                  <Button size="sm" className="bg-accent">Buy</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
