'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Dummy signup logic for demo
    if (email && password && username) {
      // In a real app, you would handle user registration here
      router.push('/login');
    } else {
      setError('Please fill in all fields');
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
          What's your email?
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
          Create a username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Choose a username"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
          Create a password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Create a password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-full transition"
      >
        Sign Up
      </button>

      <div className="text-center">
        <Link 
          href="/login" 
          className="text-white hover:underline text-sm"
        >
          Already have an account? Log in
        </Link>
      </div>
    </form>
  );
} 