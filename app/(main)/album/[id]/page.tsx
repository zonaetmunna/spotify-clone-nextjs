import { SongCard } from '@/components/SongCard';
import { albums } from '@/lib/dummy-data';
import { Play } from 'lucide-react';
import { notFound } from 'next/navigation';

interface AlbumPageProps {
  params: {
    id: string;
  };
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const album = albums.find(a => a.id === params.id);

  if (!album) {
    notFound();
  }

  return (
    <div className="h-full p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative aspect-square w-full md:w-64 overflow-hidden rounded-md">
          <img
            src={album.coverUrl}
            alt={album.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold mb-2">{album.name}</h1>
          <p className="text-neutral-400 mb-4">{album.artist}</p>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>{album.releaseDate}</span>
            <span>•</span>
            <span>{album.songs.length} songs</span>
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
        {album.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
} 