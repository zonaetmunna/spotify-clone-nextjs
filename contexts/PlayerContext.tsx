'use client';

import { Song } from '@/lib/dummy-data';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  playSong: (song: Song) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Song[]>([]);
  const [history, setHistory] = useState<Song[]>([]);

  const playSong = useCallback((song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setHistory(prev => [...prev, song]);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const playNext = useCallback(() => {
    if (queue.length > 0) {
      const nextSong = queue[0];
      setQueue(prev => prev.slice(1));
      playSong(nextSong);
    }
  }, [queue, playSong]);

  const playPrevious = useCallback(() => {
    if (history.length > 1) {
      const previousSong = history[history.length - 2];
      setHistory(prev => prev.slice(0, -1));
      playSong(previousSong);
    }
  }, [history, playSong]);

  const addToQueue = useCallback((song: Song) => {
    setQueue(prev => [...prev, song]);
  }, []);

  const removeFromQueue = useCallback((songId: string) => {
    setQueue(prev => prev.filter(song => song.id !== songId));
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        queue,
        playSong,
        togglePlay,
        playNext,
        playPrevious,
        addToQueue,
        removeFromQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
} 