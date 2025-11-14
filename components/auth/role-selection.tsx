'use client'

import Link from 'next/link'
import { Users, Building2, Sprout, Shield } from 'lucide-react'

export function RoleSelection() {
  const roles = [
    {
      id: 'individual',
      icon: Users,
      title: 'Individual',
      subtitle: 'Consumer',
      description: 'Calculate your footprint, offset carbon, earn badges and join our eco-community',
      color: 'from-green-400 to-emerald-600',
      href: '/auth/individual'
    },
    {
      id: 'business',
      icon: Building2,
      title: 'Business',
      subtitle: 'Corporate',
      description: 'Track Scope 1-3 emissions, generate ESG reports, achieve net-zero commitments',
      color: 'from-blue-400 to-blue-600',
      href: '/auth/business'
    },
    {
      id: 'developer',
      icon: Sprout,
      title: 'Project Developer',
      subtitle: 'Farmer / NGO',
      description: 'Submit projects, get AI verified, tokenize credits, earn revenue',
      color: 'from-amber-400 to-orange-600',
      href: '/auth/developer'
    },
    {
      id: 'admin',
      icon: Shield,
      title: 'Admin',
      subtitle: 'CarboSafe Team',
      description: 'Manage projects, verify credits, control marketplace, handle finance',
      color: 'from-purple-400 to-indigo-600',
      href: '/auth/admin'
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold text-foreground">
          Choose Your Path
        </h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Select your role to get started on your climate action journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => {
          const Icon = role.icon
          return (
            <Link key={role.id} href={role.href}>
              <div className="group h-full p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <div className={`mb-6 p-4 w-fit bg-gradient-to-br ${role.color} rounded-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {role.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {role.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-6 text-accent font-semibold group-hover:translate-x-1 transition">
                  Get Started →
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
