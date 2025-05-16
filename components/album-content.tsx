"use client"

import { useState } from "react"
import { Play, MoreHorizontal, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function AlbumContent({ id }: { id: string }) {
  const album = getAlbumById(id)
  const [isLiked, setIsLiked] = useState(false)

  if (!album) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Album not found</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full">
      <div>
        <div className="flex flex-col items-center gap-6 bg-gradient-to-b from-red-900 to-background p-6 md:flex-row md:items-end">
          <img
            src={album.cover || "/placeholder.svg"}
            alt={album.name}
            className="h-48 w-48 rounded-md shadow-lg md:h-52 md:w-52 lg:h-60 lg:w-60"
          />
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="text-sm font-medium uppercase">Album</div>
            <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl lg:text-6xl">{album.name}</h1>
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
              <div className="flex items-center gap-1">
                <img
                  src={album.artistCover || "/placeholder.svg"}
                  alt={album.artist}
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="font-medium text-white">{album.artist}</span>
                <span>• {album.year}</span>
                <span>• {album.songs.length} songs</span>
                <span>• {album.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-red-900/20 to-background p-6">
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
            {album.songs.map((song, index) => (
              <div
                key={song.id}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md px-4 py-2 hover:bg-card/80"
              >
                <div className="w-8 text-muted-foreground">{index + 1}</div>
                <div className="flex flex-col">
                  <span className="font-medium">{song.name}</span>
                  <span className="text-sm text-muted-foreground">{song.artist}</span>
                </div>
                <div className="text-sm text-muted-foreground">{song.duration}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">More by {album.artist}</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {album.moreByArtist.map((relatedAlbum) => (
                <div
                  key={relatedAlbum.id}
                  className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
                >
                  <div className="relative">
                    <img
                      src={relatedAlbum.cover || "/placeholder.svg"}
                      alt={relatedAlbum.name}
                      className="aspect-square w-full rounded-md object-cover shadow-lg"
                    />
                    <Button
                      variant="default"
                      size="icon"
                      className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-green-500 opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                    >
                      <Play className="h-5 w-5 text-black" fill="black" />
                    </Button>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{relatedAlbum.name}</span>
                    <span className="text-sm text-muted-foreground">{relatedAlbum.year} • Album</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

function getAlbumById(id: string) {
  return albums.find((album) => album.id === id)
}

const albums = [
  {
    id: "1",
    name: "After Hours",
    artist: "The Weeknd",
    artistCover: "/placeholder.svg?height=50&width=50",
    year: "2020",
    duration: "56 min 16 sec",
    cover: "/placeholder.svg?height=300&width=300",
    songs: [
      {
        id: "1",
        name: "Alone Again",
        artist: "The Weeknd",
        duration: "4:10",
      },
      {
        id: "2",
        name: "Too Late",
        artist: "The Weeknd",
        duration: "3:59",
      },
      {
        id: "3",
        name: "Hardest To Love",
        artist: "The Weeknd",
        duration: "3:31",
      },
      {
        id: "4",
        name: "Scared To Live",
        artist: "The Weeknd",
        duration: "3:11",
      },
      {
        id: "5",
        name: "Snowchild",
        artist: "The Weeknd",
        duration: "4:07",
      },
      {
        id: "6",
        name: "Escape From LA",
        artist: "The Weeknd",
        duration: "5:56",
      },
      {
        id: "7",
        name: "Heartless",
        artist: "The Weeknd",
        duration: "3:18",
      },
      {
        id: "8",
        name: "Faith",
        artist: "The Weeknd",
        duration: "4:43",
      },
      {
        id: "9",
        name: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:20",
      },
      {
        id: "10",
        name: "In Your Eyes",
        artist: "The Weeknd",
        duration: "3:57",
      },
      {
        id: "11",
        name: "Save Your Tears",
        artist: "The Weeknd",
        duration: "3:35",
      },
      {
        id: "12",
        name: "After Hours",
        artist: "The Weeknd",
        duration: "6:01",
      },
      {
        id: "13",
        name: "Until I Bleed Out",
        artist: "The Weeknd",
        duration: "3:10",
      },
    ],
    moreByArtist: [
      {
        id: "2",
        name: "Starboy",
        year: "2016",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "3",
        name: "Beauty Behind the Madness",
        year: "2015",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "4",
        name: "Dawn FM",
        year: "2022",
        cover: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "2",
    name: "Starboy",
    artist: "The Weeknd",
    artistCover: "/placeholder.svg?height=50&width=50",
    year: "2016",
    duration: "1 hr 8 min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: [
      {
        id: "1",
        name: "Starboy (feat. Daft Punk)",
        artist: "The Weeknd",
        duration: "3:50",
      },
      {
        id: "2",
        name: "Party Monster",
        artist: "The Weeknd",
        duration: "4:09",
      },
      {
        id: "3",
        name: "False Alarm",
        artist: "The Weeknd",
        duration: "3:40",
      },
    ],
    moreByArtist: [
      {
        id: "1",
        name: "After Hours",
        year: "2020",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "3",
        name: "Beauty Behind the Madness",
        year: "2015",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "4",
        name: "Dawn FM",
        year: "2022",
        cover: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
]
