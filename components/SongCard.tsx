'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { Song } from '@/lib/dummy-data';
import { Pause, Play } from 'lucide-react';

interface SongCardProps {
  song: Song;
  showPlayButton?: boolean;
}

export function SongCard({ song, showPlayButton = true }: SongCardProps) {
  const { playSong, currentSong, isPlaying } = usePlayer();
  const isCurrentSong = currentSong?.id === song.id;

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    playSong(song);
  };

  return (
    <div 
      className="group relative bg-neutral-800/50 hover:bg-neutral-800/70 rounded-md p-3 transition cursor-pointer"
      onClick={handlePlay}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <img
          src={song.coverUrl}
          alt={song.title}
          className="object-cover w-full h-full"
        />
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
            <button className="bg-white rounded-full p-3 hover:scale-105 transition">
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
        <h3 className="font-medium text-white truncate">{song.title}</h3>
        <p className="text-sm text-neutral-400 truncate">{song.artist}</p>
      </div>
    </div>
  );
} 