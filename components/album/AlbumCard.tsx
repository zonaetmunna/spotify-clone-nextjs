import { Album } from "@/lib/data";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AlbumCard = ({ album }: { album: Album }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-muted/30 backdrop-blur-sm shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-border hover:border-primary">
      <div className="relative aspect-square">
        <Image
          src={album.cover}
          alt={album.name}
          fill
          className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:scale-105">
          <PlayCircle className="text-primary w-6 h-6" />
        </button>
      </div>

      <div className="p-4 space-y-1">
        <Link
          href={`/album/${album.id}`}
          className="block text-sm font-semibold truncate text-foreground hover:text-primary transition-colors"
        >
          {album.name}
        </Link>
        <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
      </div>
    </div>
  );
};
