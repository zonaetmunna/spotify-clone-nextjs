import { SearchInput } from '@/components/search-input';
import { SearchResults } from '@/components/search-results';
import { SearchSkeleton } from '@/components/search-skeleton';
import { Suspense } from 'react';

interface SearchPageProps {
  searchParams: {
    query?: string;
    category?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { query = '', category = 'all' } = searchParams;

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <SearchInput initialQuery={query} />
      </div>
      <Suspense fallback={<SearchSkeleton />}>
        <SearchResults query={query} category={category} />
      </Suspense>
    </div>
  );
} 