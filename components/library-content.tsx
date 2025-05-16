"use client"

import { useState } from "react"
import { Search, Grid, List, Clock, Play } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LibraryContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Your Library</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setViewMode("grid")}>
              <Grid className={`h-5 w-5 ${viewMode === "grid" ? "text-white" : "text-muted-foreground"}`} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setViewMode("list")}>
              <List className={`h-5 w-5 ${viewMode === "list" ? "text-white" : "text-muted-foreground"}`} />
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search in Your Library" className="pl-10 w-60 bg-card/50 border-none" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="playlists">
          <TabsList className="mb-6">
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="albums">Albums</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          </TabsList>

          <TabsContent value="playlists">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {libraryPlaylists.map((playlist) => (
                  <Link
                    key={playlist.id}
                    href={playlist.href}
                    className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
                  >
                    <div className="relative">
                      <img
                        src={playlist.cover || "/placeholder.svg"}
                        alt={playlist.name}
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
                      <span className="font-medium">{playlist.name}</span>
                      <span className="text-sm text-muted-foreground">{playlist.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-md border">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 font-medium text-muted-foreground">
                  <div className="w-8">#</div>
                  <div>Title</div>
                  <div className="flex items-center justify-end">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                {libraryPlaylists.map((playlist, index) => (
                  <Link
                    key={playlist.id}
                    href={playlist.href}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t p-4 hover:bg-card/80"
                  >
                    <div className="w-8 text-muted-foreground">{index + 1}</div>
                    <div className="flex items-center gap-4">
                      <img
                        src={playlist.cover || "/placeholder.svg"}
                        alt={playlist.name}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{playlist.name}</span>
                        <span className="text-sm text-muted-foreground">{playlist.description}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{playlist.duration}</div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="artists">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {libraryArtists.map((artist) => (
                <Link
                  key={artist.id}
                  href={artist.href}
                  className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
                >
                  <div className="relative">
                    <img
                      src={artist.cover || "/placeholder.svg"}
                      alt={artist.name}
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
                    <span className="font-medium">{artist.name}</span>
                    <span className="text-sm text-muted-foreground">Artist</span>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="albums">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {libraryAlbums.map((album) => (
                <Link
                  key={album.id}
                  href={album.href}
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
                    <span className="text-sm text-muted-foreground">{album.artist}</span>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="podcasts">
            <div className="flex items-center justify-center p-12 text-muted-foreground">
              <p>No podcasts in your library yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}

const libraryPlaylists = [
  {
    id: "1",
    name: "Liked Songs",
    description: "Playlist • 123 songs",
    href: "/playlist/liked-songs",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "8h 43min",
  },
  {
    id: "2",
    name: "Discover Weekly",
    description: "Playlist • Spotify",
    href: "/playlist/discover-weekly",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "1h 57min",
  },
  {
    id: "3",
    name: "Release Radar",
    description: "Playlist • Spotify",
    href: "/playlist/release-radar",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "2h 12min",
  },
  {
    id: "4",
    name: "Chill Vibes",
    description: "Playlist • John Doe",
    href: "/playlist/1",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "3h 25min",
  },
  {
    id: "5",
    name: "Workout Mix",
    description: "Playlist • Jane Smith",
    href: "/playlist/4",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "1h 45min",
  },
]

const libraryArtists = [
  {
    id: "1",
    name: "The Weeknd",
    href: "/artist/1",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Drake",
    href: "/artist/2",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Billie Eilish",
    href: "/artist/3",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Taylor Swift",
    href: "/artist/4",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Kendrick Lamar",
    href: "/artist/5",
    cover: "/placeholder.svg?height=200&width=200",
  },
]

const libraryAlbums = [
  {
    id: "1",
    name: "After Hours",
    artist: "The Weeknd",
    href: "/album/1",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Certified Lover Boy",
    artist: "Drake",
    href: "/album/2",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Happier Than Ever",
    artist: "Billie Eilish",
    href: "/album/3",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Midnights",
    artist: "Taylor Swift",
    href: "/album/4",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Mr. Morale & The Big Steppers",
    artist: "Kendrick Lamar",
    href: "/album/5",
    cover: "/placeholder.svg?height=200&width=200",
  },
]
