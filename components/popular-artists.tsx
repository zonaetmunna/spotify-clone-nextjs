import { Artist } from "@/lib/data";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PopularArtistsProps {
  artists: Artist[];
}

export function PopularArtists({ artists }: PopularArtistsProps) {
  return (
    <section className="pb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Popular Artists</h2>
        <Link
          href="/search?category=artists"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-10">
        {artists?.map((artist, index) => (
          <Link
            key={artist?.id}
            href={`/artist/${index + 1}`}
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
    </section>
  );
}
