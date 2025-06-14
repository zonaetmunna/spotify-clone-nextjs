'use client'
import { usePlayer } from "@/contexts/PlayerContext"
import MusicPlayer from "./MusicPlayer"

function PlayerWrapper() {
    const { currentSong, playNext, playPrevious } = usePlayer()
    
    if (!currentSong) return null
    
    return (
      <MusicPlayer
        currentSong={currentSong}
        onNext={playNext}
        onPrevious={playPrevious}
      />
    )
  }

  export default PlayerWrapper