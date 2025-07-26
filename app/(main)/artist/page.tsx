import { artists } from "@/lib/data"; // example static data
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArtistsPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header Section */}
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            🎤 Artists
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover your favorite artists and their collections.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {artists.map((artist) => (
            <Link
              key={artist?.id}
              href={`/artist/${parseInt(artist?.id) + 1}`}
              className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src={artist?.cover}
                  alt={artist?.name}
                  width={200}
                  height={200}
                  priority
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white rounded-full p-3 hover:scale-105 transition">
                    <Play size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-medium text-white truncate">
                  {artist?.name}
                </h3>
                <p className="text-sm text-neutral-400">Artist</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
