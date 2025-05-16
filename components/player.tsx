"use client"

import { useEffect, useState } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  Laptop2,
  LayoutList,
  Maximize2,
  Heart,
  VolumeX,
  Volume1,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/lib/audio-context"

export function Player() {
  const {
    currentTrack,
    isPlaying,
    volume,
    progress,
    duration,
    togglePlayPause,
    setVolume,
    seekTo,
    nextTrack,
    prevTrack,
  } = useAudio()

  const [isMuted, setIsMuted] = useState(false)
  const [prevVolume, setPrevVolume] = useState(volume)

  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume)
      setIsMuted(false)
    } else {
      setPrevVolume(volume)
      setVolume(0)
      setIsMuted(true)
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Reset progress display when track changes
  useEffect(() => {
    if (!currentTrack) return
  }, [currentTrack])

  return (
    <div className="border-t border-border bg-card p-2">
      <div className="flex items-center justify-between">
        <div className="flex w-1/3 items-center gap-4">
          {currentTrack ? (
            <>
              <img
                src={currentTrack.cover || "/placeholder.svg?height=56&width=56"}
                alt="Album cover"
                className="h-14 w-14 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="font-medium hover:underline cursor-pointer">{currentTrack.name}</span>
                <span className="text-sm text-muted-foreground hover:underline cursor-pointer">
                  {currentTrack.artist}
                </span>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-green-500">
                <Heart className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-md bg-card/50"></div>
              <div className="flex flex-col gap-1">
                <div className="h-4 w-32 rounded-sm bg-card/50"></div>
                <div className="h-3 w-24 rounded-sm bg-card/50"></div>
              </div>
            </div>
          )}
        </div>
        <div className="flex w-1/3 flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <Shuffle className="h-5 w-5" />
            </Button>
            <Button
              onClick={prevTrack}
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-white"
              disabled={!currentTrack}
            >
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              onClick={togglePlayPause}
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-white text-black hover:scale-105"
              disabled={!currentTrack}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button
              onClick={nextTrack}
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-white"
              disabled={!currentTrack}
            >
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <Repeat className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex w-full items-center gap-2">
            <span className="w-10 text-right text-xs text-muted-foreground">
              {currentTrack ? formatTime(progress) : "0:00"}
            </span>
            <Slider
              value={[progress]}
              max={duration || 100}
              step={1}
              onValueChange={(value) => seekTo(value[0])}
              className="cursor-pointer"
              disabled={!currentTrack}
            />
            <span className="w-10 text-xs text-muted-foreground">{currentTrack ? formatTime(duration) : "0:00"}</span>
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-end gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <LayoutList className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <Laptop2 className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white" onClick={toggleMute}>
              {isMuted || volume === 0 ? (
                <VolumeX className="h-5 w-5" />
              ) : volume < 50 ? (
                <Volume1 className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>
            <Slider
              value={[volume]}
              max={100}
              step={1}
              className="w-20 cursor-pointer"
              onValueChange={(value) => {
                setVolume(value[0])
                if (value[0] > 0 && isMuted) {
                  setIsMuted(false)
                }
              }}
            />
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
