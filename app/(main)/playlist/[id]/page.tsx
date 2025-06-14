import { SongCard } from '@/components/SongCard';
import { playlists } from '@/lib/dummy-data';
import { Play } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PlaylistPageProps {
  params: {
    id: string;
  };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const playlist = playlists.find(p => p.id === params.id);

  if (!playlist) {
    notFound();
  }

  return (
    <div className="h-full p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative aspect-square w-full md:w-64 overflow-hidden rounded-md">
          <img
            src={playlist.coverUrl}
            alt={playlist.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold mb-2">{playlist.name}</h1>
          <p className="text-neutral-400 mb-4">{playlist.description}</p>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>{playlist.createdBy}</span>
            <span>•</span>
            <span>{playlist.songs.length} songs</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 transition">
          <Play size={24} />
          Play All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playlist.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
} 