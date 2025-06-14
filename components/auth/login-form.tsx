'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Dummy credentials for demo
    if (email === 'demo@example.com' && password === 'password123') {
      // In a real app, you would handle authentication here
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email or username
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-full transition"
      >
        Log In
      </button>

      <div className="text-center">
        <Link 
          href="/signup" 
          className="text-white hover:underline text-sm"
        >
          Don't have an account? Sign up
        </Link>
      </div>
    </form>
  );
} 