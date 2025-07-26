// app/signup/page.tsx
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="w-full max-w-md p-10 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Sign up for free to start listening
          </h1>
          <p className="text-neutral-400 text-sm">
            Discover music tailored to you
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
