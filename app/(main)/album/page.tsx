import { AlbumCard } from "@/components/album/AlbumCard";
import { albums } from "@/lib/data"; // example static data

export default function AlbumsPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header Section */}
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            🎵 Albums
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore your favorite albums curated just for you.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
