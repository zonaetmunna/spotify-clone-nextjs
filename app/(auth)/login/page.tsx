// app/login/page.tsx
import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="w-full max-w-md p-10 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-white">Welcome Back</h1>
          <p className="text-neutral-400 text-sm">Log in to your Spotify account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
