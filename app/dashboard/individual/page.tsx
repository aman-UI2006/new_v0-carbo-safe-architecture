'use client'

import { useState } from 'react'
import { IndividualLayout } from '@/components/individual/layout'
import { Dashboard } from '@/components/individual/dashboard'
import { Onboarding } from '@/components/individual/onboarding'
import { CarbonCalculator } from '@/components/individual/carbon-calculator'
import { Marketplace } from '@/components/individual/marketplace'
import { Certificates } from '@/components/individual/certificates'
import { Academy } from '@/components/individual/academy'
import { Payments } from '@/components/individual/payments'
import { Profile } from '@/components/individual/profile'

export default function IndividualPage() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)
  const [activeView, setActiveView] = useState('dashboard')

  if (!hasCompletedOnboarding) {
    return <Onboarding onComplete={() => setHasCompletedOnboarding(true)} />
  }

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onViewCertificates={() => setActiveView('certificates')} />
      case 'calculator':
        return <CarbonCalculator />
      case 'marketplace':
        return <Marketplace />
      case 'certificates':
        return <Certificates />
      case 'academy':
        return <Academy />
      case 'payments':
        return <Payments />
      case 'profile':
        return <Profile />
      default:
        return <Dashboard onViewCertificates={() => setActiveView('certificates')} />
    }
  }

  return (
    <IndividualLayout activeView={activeView} onViewChange={setActiveView}>
      {renderView()}
    </IndividualLayout>
  )
}
