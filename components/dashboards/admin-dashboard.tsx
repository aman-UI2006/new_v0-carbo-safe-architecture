'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CheckCircle, AlertCircle, TrendingUp, Users, LogOut } from 'lucide-react'
import Link from 'next/link'

export function AdminDashboard() {
  const verificationQueue = [
    { id: 1, project: 'Solar Farm XYZ', status: 'pending', verificationScore: 92 },
    { id: 2, project: 'Wetland Restoration', status: 'pending', verificationScore: 78 },
    { id: 3, project: 'Wind Farm Alpha', status: 'approved', verificationScore: 98 }
  ]

  const platformStats = [
    { category: 'Jan', users: 1200, projects: 45 },
    { category: 'Feb', users: 1900, projects: 65 },
    { category: 'Mar', users: 2500, projects: 92 },
    { category: 'Apr', users: 3400, projects: 128 }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Admin Control Panel
            </h1>
            <p className="text-foreground/60">Manage projects, verify credits, and oversee platform</p>
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
                <p className="text-sm text-foreground/60 mb-2">Total Users</p>
                <p className="text-3xl font-bold text-foreground">8,420</p>
              </div>
              <Users className="w-12 h-12 text-accent opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Verified Projects</p>
                <p className="text-3xl font-bold text-foreground">254</p>
              </div>
              <CheckCircle className="w-12 h-12 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-secondary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Pending Verification</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <AlertCircle className="w-12 h-12 text-secondary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Credits Issued</p>
                <p className="text-3xl font-bold text-foreground">1.2M</p>
              </div>
              <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Platform Growth */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Platform Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="category" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Bar dataKey="users" fill="#50b83c" name="Users" />
              <Bar dataKey="projects" fill="#3b9bb8" name="Projects" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Verification Queue */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Verification Queue</h2>
          <div className="space-y-4">
            {verificationQueue.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.project}</h3>
                    <div className="flex items-center gap-6 mt-3">
                      <div>
                        <p className="text-xs text-foreground/60">Verification Score</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent"
                              style={{ width: `${item.verificationScore}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-foreground">{item.verificationScore}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {item.status === 'pending' && (
                      <>
                        <Button className="bg-accent hover:bg-accent/90" size="sm">Approve</Button>
                        <Button variant="outline" size="sm">Reject</Button>
                      </>
                    )}
                    {item.status === 'approved' && (
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-lg text-sm font-semibold">
                        Approved ✓
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
