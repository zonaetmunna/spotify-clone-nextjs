import { Play } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function HomeContent() {
  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <h1 className="mb-6 text-3xl font-bold">Good afternoon</h1>
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-center gap-4 rounded-md bg-card/50 p-2 transition-colors hover:bg-card/80"
            >
              <img
                src={item.cover || "/placeholder.svg"}
                alt={item.name}
                className="h-12 w-12 rounded-md object-cover"
              />
              <span className="font-medium">{item.name}</span>
              <Button
                variant="default"
                size="icon"
                className="ml-auto h-10 w-10 rounded-full bg-green-500 opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
              >
                <Play className="h-5 w-5 text-black" fill="black" />
              </Button>
            </Link>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold">Made for You</h2>
        <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {madeForYou.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
            >
              <div className="relative">
                <img
                  src={item.cover || "/placeholder.svg"}
                  alt={item.name}
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
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.description}</span>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold">Recently Played</h2>
        <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {recentlyPlayed.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col gap-2 rounded-md p-3 transition-colors hover:bg-card/80"
            >
              <div className="relative">
                <img
                  src={item.cover || "/placeholder.svg"}
                  alt={item.name}
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
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

const topItems = [
  {
    id: "1",
    name: "Liked Songs",
    href: "/playlist/liked-songs",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Top Hits 2023",
    href: "/playlist/2",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Discover Weekly",
    href: "/playlist/3",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "The Weeknd",
    href: "/artist/1",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    name: "Chill Vibes",
    href: "/playlist/1",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "6",
    name: "Workout Playlist",
    href: "/playlist/4",
    cover: "/placeholder.svg?height=100&width=100",
  },
]

const madeForYou = [
  {
    id: "1",
    name: "Daily Mix 1",
    description: "The Weeknd, Drake, Post Malone and more",
    href: "/playlist/daily-1",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Daily Mix 2",
    description: "Coldplay, Imagine Dragons, OneRepublic and more",
    href: "/playlist/daily-2",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Daily Mix 3",
    description: "Kendrick Lamar, J. Cole, Travis Scott and more",
    href: "/playlist/daily-3",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    href: "/playlist/discover",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Release Radar",
    description: "Catch all the latest music from artists you follow",
    href: "/playlist/release-radar",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Time Capsule",
    description: "Songs you loved years ago",
    href: "/playlist/time-capsule",
    cover: "/placeholder.svg?height=200&width=200",
  },
]

const recentlyPlayed = [
  {
    id: "1",
    name: "Blinding Lights",
    description: "The Weeknd",
    href: "/album/1",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "After Hours",
    description: "Album • The Weeknd",
    href: "/album/2",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "This Is The Weeknd",
    description: "Playlist • Spotify",
    href: "/playlist/weeknd",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Top 50 - Global",
    description: "Playlist • Spotify",
    href: "/playlist/top-global",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Chill Mix",
    description: "Playlist • Spotify",
    href: "/playlist/chill-mix",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Workout Mix",
    description: "Playlist • Spotify",
    href: "/playlist/workout-mix",
    cover: "/placeholder.svg?height=200&width=200",
  },
]
