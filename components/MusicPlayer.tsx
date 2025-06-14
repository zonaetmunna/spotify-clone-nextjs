'use client';

import { Song } from '@/lib/dummy-data';
import {
    Pause,
    Play,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MusicPlayerProps {
  currentSong: Song;
  onNext: () => void;
  onPrevious: () => void;
}

export default function MusicPlayer({ currentSong, onNext, onPrevious }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black p-4">
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNext}
      />
      
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Song Info */}
        <div className="flex items-center space-x-4 w-1/4">
          <img 
            src={currentSong.coverUrl} 
            alt={currentSong.title}
            className="w-14 h-14 rounded"
          />
          <div>
            <h3 className="text-white font-medium">{currentSong.title}</h3>
            <p className="text-gray-400 text-sm">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center space-x-6 mb-2">
            <button 
              onClick={() => setIsShuffle(!isShuffle)}
              className={`text-gray-400 hover:text-white ${isShuffle ? 'text-green-500' : ''}`}
            >
              <Shuffle size={20} />
            </button>
            <button 
              onClick={onPrevious}
              className="text-gray-400 hover:text-white"
            >
              <SkipBack size={24} />
            </button>
            <button 
              onClick={togglePlay}
              className="bg-white rounded-full p-2 hover:scale-105 transition"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button 
              onClick={onNext}
              className="text-gray-400 hover:text-white"
            >
              <SkipForward size={24} />
            </button>
            <button 
              onClick={() => setIsRepeat(!isRepeat)}
              className={`text-gray-400 hover:text-white ${isRepeat ? 'text-green-500' : ''}`}
            >
              <Repeat size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-gray-400 text-xs">
              {Math.floor(audioRef.current?.currentTime || 0)}s
            </span>
            <div 
              ref={progressRef}
              className="h-1 bg-gray-600 rounded-full w-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-gray-400 text-xs">
              {Math.floor(audioRef.current?.duration || 0)}s
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 w-1/4 justify-end">
          <button 
            onClick={toggleMute}
            className="text-gray-400 hover:text-white"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
} 