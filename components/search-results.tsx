import { albums, playlists, songs } from '@/lib/dummy-data';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { SongCard } from './SongCard';

interface SearchResultsProps {
  query: string;
  category: string;
}

export async function SearchResults({ query, category }: SearchResultsProps) {
  // Filter results based on query and category
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPlaylists = playlists.filter(playlist =>
    playlist.name.toLowerCase().includes(query.toLowerCase()) ||
    playlist.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAlbums = albums.filter(album =>
    album.name.toLowerCase().includes(query.toLowerCase()) ||
    album.artist.toLowerCase().includes(query.toLowerCase())
  );

  if (!query) {
    return (
      <div className="text-center text-neutral-400">
        Enter a search term to find music, artists, playlists, or albums
      </div>
    );
  }

  if (category === 'songs' || category === 'all') {
    return (
      <div className="space-y-8">
        {filteredSongs.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Songs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredSongs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          </section>
        )}

        {filteredPlaylists.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Playlists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredPlaylists.map((playlist) => (
                <Link
                  key={playlist.id}
                  href={`/playlist/${playlist.id}`}
                  className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-md">
                    <img
                      src={playlist.coverImage}
                      alt={playlist.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-white rounded-full p-3 hover:scale-105 transition">
                        <Play size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-white truncate">{playlist.name}</h3>
                    <p className="text-sm text-neutral-400 truncate">{playlist.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {filteredAlbums.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredAlbums.map((album) => (
                <Link
                  key={album.id}
                  href={`/album/${album.id}`}
                  className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-md">
                    <img
                      src={album.coverImage}
                      alt={album.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-white rounded-full p-3 hover:scale-105 transition">
                        <Play size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-white truncate">{album.name}</h3>
                    <p className="text-sm text-neutral-400 truncate">{album.artist}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {filteredSongs.length === 0 && filteredPlaylists.length === 0 && filteredAlbums.length === 0 && (
          <div className="text-center text-neutral-400">
            No results found for "{query}"
          </div>
        )}
      </div>
    );
  }

  // Handle specific category views
  switch (category) {
    case 'songs':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      );
    case 'playlists':
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredPlaylists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/playlist/${playlist.id}`}
              className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <img
                  src={playlist.coverImage}
                  alt={playlist.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white rounded-full p-3 hover:scale-105 transition">
                    <Play size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-white truncate">{playlist.name}</h3>
                <p className="text-sm text-neutral-400 truncate">{playlist.description}</p>
              </div>
            </Link>
          ))}
        </div>
      );
    case 'albums':
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredAlbums.map((album) => (
            <Link
              key={album.id}
              href={`/album/${album.id}`}
              className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <img
                  src={album.coverImage}
                  alt={album.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white rounded-full p-3 hover:scale-105 transition">
                    <Play size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-white truncate">{album.name}</h3>
                <p className="text-sm text-neutral-400 truncate">{album.artist}</p>
              </div>
            </Link>
          ))}
        </div>
      );
    default:
      return null;
  }
} 