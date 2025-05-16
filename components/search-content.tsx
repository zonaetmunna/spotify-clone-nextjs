import { Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SearchContent() {
  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="What do you want to listen to?" className="pl-10 bg-card/50 border-none h-12 text-lg" />
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold">Browse all</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {browseCategories.map((category) => (
            <Link
              key={category.id}
              href={`/genre/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
              style={{ backgroundColor: category.color }}
            >
              <div className="aspect-square p-4">
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <img
                src={category.cover || "/placeholder.svg"}
                alt={category.name}
                className="absolute bottom-0 right-0 h-20 w-20 translate-x-4 translate-y-4 rotate-12 transform object-cover shadow-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-6"
              />
            </Link>
          ))}
        </div>

        <h2 className="mb-4 mt-8 text-2xl font-bold">Trending now</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {trendingPlaylists.map((playlist) => (
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
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{playlist.name}</span>
                <span className="text-sm text-muted-foreground">{playlist.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

const browseCategories = [
  {
    id: "pop",
    name: "Pop",
    color: "#8c67ab",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "hip-hop",
    name: "Hip-Hop",
    color: "#ba5d07",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "rock",
    name: "Rock",
    color: "#e61e32",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "rnb",
    name: "R&B",
    color: "#7358ff",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "indie",
    name: "Indie",
    color: "#148a08",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "workout",
    name: "Workout",
    color: "#ff6437",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "dance",
    name: "Dance/Electronic",
    color: "#509bf5",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "country",
    name: "Country",
    color: "#d84000",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "latin",
    name: "Latin",
    color: "#e1118c",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "chill",
    name: "Chill",
    color: "#0d73ec",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "mood",
    name: "Mood",
    color: "#777777",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "focus",
    name: "Focus",
    color: "#503750",
    cover: "/placeholder.svg?height=100&width=100",
  },
]

const trendingPlaylists = [
  {
    id: "1",
    name: "Today's Top Hits",
    description: "Drake is on top of the Hottest 50!",
    href: "/playlist/top-hits",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "RapCaviar",
    description: "New music from Kendrick Lamar, Drake and more",
    href: "/playlist/rapcaviar",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    href: "/playlist/all-out-2010s",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Rock Classics",
    description: "Rock legends & epic songs",
    href: "/playlist/rock-classics",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    href: "/playlist/chill-hits",
    cover: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Viva Latino",
    description: "Today's top Latin hits",
    href: "/playlist/viva-latino",
    cover: "/placeholder.svg?height=200&width=200",
  },
]
