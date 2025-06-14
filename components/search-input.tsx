'use client';

import { useDebounce } from '@/hooks/use-debounce';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface SearchInputProps {
  initialQuery?: string;
}

export function SearchInput({ initialQuery = '' }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initialQuery);
  const debouncedValue = useDebounce(value, 500);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/search?${createQueryString('query', debouncedValue)}`);
    }
  }, [debouncedValue, createQueryString, router]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
      <input
        type="text"
        placeholder="What do you want to listen to?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-neutral-800/50 rounded-md py-3 pl-10 pr-4 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20"
      />
    </div>
  );
} 