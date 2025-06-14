import { SongCard } from '@/components/SongCard';
import { albums, playlists, songs } from '@/lib/dummy-data';

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* Featured Playlists */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition cursor-pointer">
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <img
                  src={playlist.coverUrl}
                  alt={playlist.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-white truncate">{playlist.name}</h3>
                <p className="text-sm text-neutral-400 truncate">{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {songs.slice(0, 6).map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section>
        <h2 className="text-2xl font-bold mb-4">New Releases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {albums.map((album) => (
            <div key={album.id} className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition cursor-pointer">
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <img
                  src={album.coverUrl}
                  alt={album.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-white truncate">{album.name}</h3>
                <p className="text-sm text-neutral-400 truncate">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
