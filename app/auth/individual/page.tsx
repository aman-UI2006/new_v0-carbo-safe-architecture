import { AuthForm } from '@/components/auth/auth-form'

export const metadata = {
  title: 'Individual Sign Up | CarboSafe',
  description: 'Create or sign in to your Individual CarboSafe account',
}

export default function IndividualAuthPage() {
  return (
    <AuthForm 
      role="individual" 
      roleTitle="Individual" 
      roleColor="from-green-400 to-emerald-600"
    />
  )
}
