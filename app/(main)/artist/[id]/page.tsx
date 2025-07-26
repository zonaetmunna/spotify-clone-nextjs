import { HorizontalCard } from "@/components/HorizontalSongCard";
import { artists } from "@/lib/data";
import { MoreHorizontal, Play, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArtistPageProps {
  params: {
    id: string;
  };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const artistId = await params.id;
  const artist = artists.find((a) => a.id === params.id);

  if (!artist) {
    notFound();
  }


  return (
    <div className="h-full">
      {/* Hero Section with gradient background */}
      <div className="relative bg-gradient-to-b from-indigo-900 via-purple-900 to-transparent p-6 pb-8">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative aspect-square w-full md:w-64 overflow-hidden rounded-full shadow-2xl">
            <Image
              src={artist.cover}
              alt={artist.name}
              width={200}
              height={200}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-end text-white">
            <div className="flex items-center gap-2 mb-2">
              {artist.verified && (
                <UserCheck size={20} className="text-blue-500" />
              )}
              <span className="text-sm font-medium">Verified Artist</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {artist.name}
            </h1>
            <p className="text-lg text-neutral-300">
              {artist.monthlyListeners.toLocaleString()} monthly listeners
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 transition">
            <Play size={24} />
            Play
          </button>
          <button className="border border-neutral-400 hover:border-white text-white font-semibold py-3 px-6 rounded-full transition">
            Follow
          </button>
          <button className="text-neutral-400 hover:text-white p-2 rounded-full transition">
            <MoreHorizontal size={24} />
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Popular Tracks Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular</h2>
          <div className="space-y-2">
            {artist?.topTracks?.map((song, index) => (
              <HorizontalCard key={song.id} song={song} />
            ))}
          </div>
          <button className="text-neutral-400 hover:text-white text-sm font-medium mt-4 transition">
            Show all
          </button>
        </div>

        {/* Albums Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Albums</h2>
            <button className="text-neutral-400 hover:text-white text-sm font-medium transition">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {artist.albums.map((album) => (
              <Link
              href={`/album/${album.id}`}
                key={album.id}
                className="bg-neutral-900/50 hover:bg-neutral-800/50 p-4 rounded-lg transition cursor-pointer group"
              >
                <div className="relative mb-4">
                  <Image
                    src={album.cover}
                    alt={album.name}
                    width={200}
                    height={200}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>
                <h3 className="font-semibold text-white truncate mb-1">
                  {album.name}
                </h3>
                <p className="text-sm text-neutral-400">{album.year} • Album</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Artists Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Fans also like</h2>
            <button className="text-neutral-400 hover:text-white text-sm font-medium transition">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {artist.relatedArtists.map((relatedArtist) => (
              <Link
                href={`/artist/${relatedArtist.id}`}
                key={relatedArtist.id}
                className="bg-neutral-900/50 hover:bg-neutral-800/50 p-4 rounded-lg transition cursor-pointer group"
              >
                <div className="relative mb-4">
                  <img
                    src={relatedArtist.cover}
                    alt={relatedArtist.name}
                    className="w-full aspect-square object-cover rounded-full shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>
                <h3 className="font-semibold text-white truncate mb-1">
                  {relatedArtist.name}
                </h3>
                <p className="text-sm text-neutral-400">Artist</p>
              </Link>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Image
                src={artist.cover}
                alt={artist.name}
                width={200}
                height={200}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="md:w-1/3">
              <div className="bg-neutral-900/50 p-6 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Monthly listeners
                  </h3>
                  <p className="text-2xl font-bold text-white">
                    {artist.monthlyListeners.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Top cities</h4>
                    <div className="space-y-2 text-sm text-neutral-400">
                      <div className="flex justify-between">
                        <span>New York</span>
                        <span>2,345,678 listeners</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Los Angeles</span>
                        <span>1,987,654 listeners</span>
                      </div>
                      <div className="flex justify-between">
                        <span>London</span>
                        <span>1,543,210 listeners</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
