import { Song } from "@/lib/dummy-data";
import Link from "next/link";
import { SongCard } from "./SongCard";

interface RecentlyPlayedProps {
  songs: Song[];
}

export function RecentlyPlayed({ songs }: RecentlyPlayedProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Recently Played</h2>
        <Link
          href="/search?category=songs"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {songs?.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}
