import { AuthForm } from '@/components/auth/auth-form'

export const metadata = {
  title: 'Business Sign Up | CarboSafe',
  description: 'Create or sign in to your Business CarboSafe account',
}

export default function BusinessAuthPage() {
  return (
    <AuthForm 
      role="business" 
      roleTitle="Business" 
      roleColor="from-blue-400 to-blue-600"
    />
  )
}
