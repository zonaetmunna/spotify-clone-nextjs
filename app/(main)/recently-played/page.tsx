import { SongCard } from "@/components/SongCard";
import { recentlyPlayed } from "@/lib/data"; // static or fetched data

export default function RecentlyPlayedPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ⏪ Recently Played
          </h2>
          <p className="text-sm text-muted-foreground">
            Here’s a list of your recently played songs, albums, and playlists.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recentlyPlayed.map((item) => (
            <SongCard key={item.id} song={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
