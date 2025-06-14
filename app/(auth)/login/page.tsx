import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-900 rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Log in to Spotify</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
} 