'use client'

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Leaf, TrendingUp, Award, Target, LogOut } from 'lucide-react'
import Link from 'next/link'

export function IndividualDashboard() {
  const footprintData = [
    { category: 'Commute', value: 120 },
    { category: 'Electricity', value: 95 },
    { category: 'Flights', value: 240 },
    { category: 'Lifestyle', value: 85 }
  ]

  const offsetTrend = [
    { month: 'Jan', offset: 2 },
    { month: 'Feb', offset: 4 },
    { month: 'Mar', offset: 7 },
    { month: 'Apr', offset: 12 },
    { month: 'May', offset: 18 },
    { month: 'Jun', offset: 25 }
  ]

  const COLORS = ['#50b83c', '#3b9bb8', '#d4a574', '#ef6b4f']

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome, Climate Champion
            </h1>
            <p className="text-foreground/60">Track your impact and offset your carbon footprint</p>
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
          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Total CO₂ Offset</p>
                <p className="text-3xl font-bold text-foreground">25.4 tons</p>
              </div>
              <Leaf className="w-12 h-12 text-accent opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Certificates Earned</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <Award className="w-12 h-12 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-secondary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Monthly Goal</p>
                <p className="text-3xl font-bold text-foreground">72%</p>
              </div>
              <Target className="w-12 h-12 text-secondary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Streak Days</p>
                <p className="text-3xl font-bold text-foreground">23</p>
              </div>
              <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carbon Footprint Breakdown */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Footprint Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={footprintData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, value }) => `${category}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {footprintData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Offset Trend */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Offset Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={offsetTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #50b83c',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="offset"
                  stroke="#50b83c"
                  strokeWidth={3}
                  dot={{ fill: '#50b83c', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Challenges */}
        <div className="mt-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Active Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Walk Instead', 'No Plastic Day', 'Save Energy'].map((challenge, idx) => (
                <div key={idx} className="p-4 border border-slate-200 rounded-lg hover:border-accent/50 transition">
                  <p className="font-semibold text-foreground mb-2">{challenge}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent">+50 XP</span>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">Join</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
