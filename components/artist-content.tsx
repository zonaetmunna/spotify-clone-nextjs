"use client"

import { useState } from "react"
import { Play, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ArtistContent({ id }: { id: string }) {
  const artist = getArtistById(id)
  const [isFollowing, setIsFollowing] = useState(false)

  if (!artist) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Artist not found</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full">
      <div>
        <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-b from-purple-900 to-background">
          <div className="absolute bottom-0 left-0 p-6 md:p-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {artist.verified && (
                  <div className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-medium">Verified Artist</div>
                )}
              </div>
              <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">{artist.name}</h1>
              <div className="text-sm text-muted-foreground">
                {artist.monthlyListeners.toLocaleString()} monthly listeners
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="icon"
              className="h-14 w-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600"
            >
              <Play className="h-7 w-7 text-black" fill="black" />
            </Button>
            <Button
              variant={isFollowing ? "outline" : "default"}
              className={`rounded-full ${isFollowing ? "border-white text-white" : ""}`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <MoreHorizontal className="h-7 w-7" />
            </Button>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Popular</h2>
            <div className="grid gap-2">
              {artist.topTracks.map((track, index) => (
                <div
                  key={track.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md px-4 py-2 hover:bg-card/80"
                >
                  <div className="w-8 text-muted-foreground">{index + 1}</div>
                  <div className="flex items-center gap-4">
                    <img
                      src={track.cover || "/placeholder.svg"}
                      alt={track.name}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{track.name}</span>
                      <span className="text-sm text-muted-foreground">{track.album}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{track.duration}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Discography</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {artist.albums.map((album) => (
                <div
                  key={album.id}
                  className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
                >
                  <div className="relative">
                    <img
                      src={album.cover || "/placeholder.svg"}
                      alt={album.name}
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
                    <span className="font-medium">{album.name}</span>
                    <span className="text-sm text-muted-foreground">{album.year} • Album</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Fans also like</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {artist.relatedArtists.map((relatedArtist) => (
                <div
                  key={relatedArtist.id}
                  className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
                >
                  <div className="relative">
                    <img
                      src={relatedArtist.cover || "/placeholder.svg"}
                      alt={relatedArtist.name}
                      className="aspect-square w-full rounded-full object-cover shadow-lg"
                    />
                    <Button
                      variant="default"
                      size="icon"
                      className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-green-500 opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                    >
                      <Play className="h-5 w-5 text-black" fill="black" />
                    </Button>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="font-medium">{relatedArtist.name}</span>
                    <span className="text-sm text-muted-foreground">Artist</span>
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

function getArtistById(id: string) {
  return artists.find((artist) => artist.id === id)
}

const artists = [
  {
    id: "1",
    name: "The Weeknd",
    verified: true,
    monthlyListeners: 94567890,
    cover: "/placeholder.svg?height=300&width=300",
    topTracks: [
      {
        id: "1",
        name: "Blinding Lights",
        album: "After Hours",
        duration: "3:20",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "2",
        name: "Save Your Tears",
        album: "After Hours",
        duration: "3:35",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "3",
        name: "Starboy",
        album: "Starboy",
        duration: "3:50",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "4",
        name: "Die For You",
        album: "Starboy",
        duration: "4:20",
        cover: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "5",
        name: "The Hills",
        album: "Beauty Behind the Madness",
        duration: "3:41",
        cover: "/placeholder.svg?height=50&width=50",
      },
    ],
    albums: [
      {
        id: "1",
        name: "After Hours",
        year: "2020",
        cover: "/placeholder.svg?height=200&width=200",
      },
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
    relatedArtists: [
      {
        id: "2",
        name: "Drake",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "3",
        name: "Post Malone",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "4",
        name: "Kendrick Lamar",
        cover: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "5",
        name: "Doja Cat",
        cover: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
]
