'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { Items, Song } from '@/lib/data';
import { Pause, Play } from 'lucide-react';
import Image from 'next/image';

interface SongCardProps {
  song: Song |Items;
  showPlayButton?: boolean;
}

export function SongCard({ song, showPlayButton = true }: SongCardProps) {
  const { playSong, currentSong, isPlaying } = usePlayer();
  const isCurrentSong = currentSong?.id === song.id;

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    playSong(song as Song);
  };

  return (
    <div 
      className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition cursor-pointer"
      onClick={handlePlay}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src={song.cover}
          alt={song.name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
            <button className="bg-background rounded-full p-3 hover:scale-105 transition">
              {isCurrentSong && isPlaying ? (
                <Pause size={20} />
              ) : (
                <Play size={20} />
              )}
            </button>
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-white truncate">{song.name}</h3>
      </div>
    </div>
  );
} 