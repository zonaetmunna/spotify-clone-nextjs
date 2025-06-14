export function SearchSkeleton() {
  return (
    <div className="space-y-8">
      <section>
        <div className="h-8 w-48 bg-neutral-800/50 rounded-md mb-4 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-neutral-800/50 rounded-md p-3 animate-pulse">
              <div className="aspect-square w-full bg-neutral-700/50 rounded-md mb-3" />
              <div className="h-4 w-3/4 bg-neutral-700/50 rounded-md mb-2" />
              <div className="h-3 w-1/2 bg-neutral-700/50 rounded-md" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="h-8 w-48 bg-neutral-800/50 rounded-md mb-4 animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-neutral-800/50 rounded-md p-3 animate-pulse">
              <div className="aspect-square w-full bg-neutral-700/50 rounded-md mb-3" />
              <div className="h-4 w-3/4 bg-neutral-700/50 rounded-md mb-2" />
              <div className="h-3 w-1/2 bg-neutral-700/50 rounded-md" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 