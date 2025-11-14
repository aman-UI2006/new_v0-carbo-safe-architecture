import { AuthForm } from '@/components/auth/auth-form'

export const metadata = {
  title: 'Admin Sign Up | CarboSafe',
  description: 'Create or sign in to your Admin CarboSafe account',
}

export default function AdminAuthPage() {
  return (
    <AuthForm 
      role="admin" 
      roleTitle="Admin" 
      roleColor="from-purple-400 to-indigo-600"
    />
  )
}
