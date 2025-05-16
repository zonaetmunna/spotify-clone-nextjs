"use client"

import { useState } from "react"
import { Play, Clock, MoreHorizontal, Heart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function PlaylistContent({ id }: { id: string }) {
  const playlist = getPlaylistById(id)
  const [isLiked, setIsLiked] = useState(false)

  if (!playlist) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Playlist not found</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full">
      <div>
        <div className="flex flex-col items-center gap-6 bg-gradient-to-b from-green-800 to-background p-6 md:flex-row md:items-end">
          <img
            src={playlist.cover || "/placeholder.svg"}
            alt={playlist.name}
            className="h-48 w-48 rounded-md shadow-lg md:h-52 md:w-52 lg:h-60 lg:w-60"
          />
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="text-sm font-medium uppercase">Playlist</div>
            <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl lg:text-6xl">{playlist.name}</h1>
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
              <div className="flex items-center gap-1">
                <span className="font-medium text-white">{playlist.creator}</span>
                <span>• {playlist.followers} likes</span>
                <span>• {playlist.songs.length} songs</span>
                <span>• {playlist.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-900/20 to-background p-6">
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="icon"
              className="h-14 w-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600"
            >
              <Play className="h-7 w-7 text-black" fill="black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${isLiked ? "text-green-500" : "text-muted-foreground"}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-7 w-7 ${isLiked ? "fill-green-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <Download className="h-7 w-7" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <MoreHorizontal className="h-7 w-7" />
            </Button>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-2 text-sm font-medium text-muted-foreground">
              <div className="w-8">#</div>
              <div>Title</div>
              <div className="flex items-center justify-end">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            {playlist.songs.map((song, index) => (
              <div
                key={song.id}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md px-4 py-2 hover:bg-card/80"
              >
                <div className="w-8 text-muted-foreground">{index + 1}</div>
                <div className="flex items-center gap-4">
                  <img
                    src={song.cover || "/placeholder.svg"}
                    alt={song.name}
                    className="h-10 w-10 rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{song.name}</span>
                    <span className="text-sm text-muted-foreground">{song.artist}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

function getPlaylistById(id: string) {
  return playlists.find((playlist) => playlist.id === id)
}

const playlists = [
  {
    id: "1",
    name: "Chill Vibes",
    creator: "Spotify",
    followers: "2,345,678",
    duration: "5h 35min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: [
      {
        id: "1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:20",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "2",
        name: "Save Your Tears",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:35",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "3",
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        duration: "3:23",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "4",
        name: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        album: "F*CK LOVE 3: OVER YOU",
        duration: "2:21",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "5",
        name: "good 4 u",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        duration: "2:58",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "6",
        name: "Peaches",
        artist: "Justin Bieber",
        album: "Justice",
        duration: "3:18",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "7",
        name: "MONTERO (Call Me By Your Name)",
        artist: "Lil Nas X",
        album: "MONTERO",
        duration: "2:17",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "8",
        name: "Kiss Me More",
        artist: "Doja Cat ft. SZA",
        album: "Planet Her",
        duration: "3:28",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "9",
        name: "drivers license",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        duration: "4:02",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "10",
        name: "Leave The Door Open",
        artist: "Bruno Mars, Anderson .Paak, Silk Sonic",
        album: "An Evening with Silk Sonic",
        duration: "3:46",
        cover: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
  {
    id: "2",
    name: "Top Hits 2023",
    creator: "Spotify",
    followers: "5,678,901",
    duration: "3h 15min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: [
      {
        id: "1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:20",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "2",
        name: "Save Your Tears",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:35",
        cover: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
  {
    id: "liked-songs",
    name: "Liked Songs",
    creator: "You",
    followers: "Only you",
    duration: "10h 12min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: [
      {
        id: "1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:20",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "2",
        name: "Save Your Tears",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:35",
        cover: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
]
