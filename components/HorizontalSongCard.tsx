"use client";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Song } from "@/lib/data";
import { MoreHorizontal, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

interface HorizontalCardProps {
  song: Song;
}

export const HorizontalCard = ({ song }: HorizontalCardProps) => {
  const { playSong, currentSong, isPlaying } = usePlayer();
  const handlePlay = (e: React.MouseEvent) => {
    // e.preventDefault();
    playSong(song as Song);
    console.log("song", song);
  };




  return (
    <div
      className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800/50  cursor-pointer"
      onClick={handlePlay}
    >
      {isPlaying && (
        <Play size={16} className="text-white hidden group-hover:block w-4" />
      )}

      <Image
        src={song.cover}
        alt={song.name}
        width={200}
        height={200}
        priority
        className="w-10 h-10 rounded object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-white truncate">{song.name}</h3>
      </div>

      <span className="text-neutral-400 text-sm">{song.duration}</span>

      <button className="text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100 transition">
        <MoreHorizontal size={16} />
      </button>
    </div>
  );
};
