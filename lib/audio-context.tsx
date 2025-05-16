"use client"

import type React from "react"
import { createContext, useContext, useState, useRef, useEffect } from "react"

export type Track = {
  id: string
  name: string
  artist: string
  album?: string
  duration: string
  cover: string
  audioSrc: string
}

type AudioContextType = {
  currentTrack: Track | null
  isPlaying: boolean
  volume: number
  progress: number
  duration: number
  queue: Track[]
  playTrack: (track: Track) => void
  togglePlayPause: () => void
  setVolume: (volume: number) => void
  seekTo: (time: number) => void
  nextTrack: () => void
  prevTrack: () => void
  addToQueue: (track: Track) => void
  clearQueue: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.7)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [queue, setQueue] = useState<Track[]>([])

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.volume = volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Handle track changes
  useEffect(() => {
    if (!audioRef.current) return

    if (currentTrack) {
      audioRef.current.src = currentTrack.audioSrc
      audioRef.current.load()

      audioRef.current.onloadedmetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration)
        }
      }

      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err)
          setIsPlaying(false)
        })
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentTrack])

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err)
        setIsPlaying(false)
      })

      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setProgress(audioRef.current.currentTime)
        }
      }, 1000)
    } else {
      audioRef.current.pause()
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Handle track ending
  useEffect(() => {
    if (!audioRef.current) return

    const handleEnded = () => {
      nextTrack()
    }

    audioRef.current.addEventListener("ended", handleEnded)

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded)
      }
    }
  }, [queue])

  const playTrack = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume / 100)
  }

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setProgress(time)
    }
  }

  const nextTrack = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0]
      const newQueue = queue.slice(1)
      setQueue(newQueue)
      playTrack(nextTrack)
    }
  }

  const prevTrack = () => {
    // In a real app, you'd maintain a history of played tracks
    // For simplicity, we'll just restart the current track
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      setProgress(0)
    }
  }

  const addToQueue = (track: Track) => {
    setQueue([...queue, track])
  }

  const clearQueue = () => {
    setQueue([])
  }

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        volume: volume * 100,
        progress,
        duration,
        queue,
        playTrack,
        togglePlayPause,
        setVolume,
        seekTo,
        nextTrack,
        prevTrack,
        addToQueue,
        clearQueue,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}
