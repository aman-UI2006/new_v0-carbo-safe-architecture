'use client'

import { useState } from 'react'
import { BusinessLayout } from '@/components/business/layout'
import { EmissionDashboard } from '@/components/business/emission-dashboard'
import { CarbonMarketplace } from '@/components/business/carbon-marketplace'
import { ESGReporting } from '@/components/business/esg-reporting'
import { CertificatesProof } from '@/components/business/certificates-proof'
import { TeamManagement } from '@/components/business/team-management'
import { APIIntegrations } from '@/components/business/api-integrations'
import { BrandingTools } from '@/components/business/branding-tools'
import { CorporateGamification } from '@/components/business/corporate-gamification'

export default function BusinessDashboardPage() {
  const [activeView, setActiveView] = useState('emissions')

  const renderView = () => {
    switch (activeView) {
      case 'emissions':
        return <EmissionDashboard />
      case 'marketplace':
        return <CarbonMarketplace />
      case 'esg':
        return <ESGReporting />
      case 'certificates':
        return <CertificatesProof />
      case 'team':
        return <TeamManagement />
      case 'integrations':
        return <APIIntegrations />
      case 'branding':
        return <BrandingTools />
      case 'gamification':
        return <CorporateGamification />
      default:
        return <EmissionDashboard />
    }
  }

  return (
    <BusinessLayout activeView={activeView} onViewChange={setActiveView}>
      {renderView()}
    </BusinessLayout>
  )
}
