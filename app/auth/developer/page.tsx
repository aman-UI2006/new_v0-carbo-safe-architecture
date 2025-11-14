import { AuthForm } from '@/components/auth/auth-form'

export const metadata = {
  title: 'Project Developer Sign Up | CarboSafe',
  description: 'Create or sign in to your Project Developer CarboSafe account',
}

export default function DeveloperAuthPage() {
  return (
    <AuthForm 
      role="developer" 
      roleTitle="Project Developer" 
      roleColor="from-amber-400 to-orange-600"
    />
  )
}
