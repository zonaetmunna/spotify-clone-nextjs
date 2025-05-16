import Link from "next/link"
import { Home, Search, Library, Plus, Heart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sidebar() {
  return (
    <div className="flex h-full w-[240px] flex-col bg-card p-2">
      <div className="flex flex-col gap-2 p-2">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-white">
          <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.669 11.538a.498.498 0 01-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 01-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 01.166.686zm.979-2.178a.624.624 0 01-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 01-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 01.206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 11-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 11-.764 1.288z" />
          </svg>
          <span>Spotify</span>
        </Link>
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            className="flex items-center gap-4 rounded-md px-3 py-2 text-white transition-colors hover:bg-muted"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-4 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-white"
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Link>
        </nav>
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <Library className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="flex w-full justify-start gap-2 text-muted-foreground hover:text-white"
              size="sm"
            >
              <span>Playlists</span>
            </Button>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-muted/50 p-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search in Your Library</span>
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-2 p-2">
            <Link href="/playlist/liked-songs" className="flex items-center gap-3 rounded-md p-2 hover:bg-muted">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-purple-700 to-blue-400">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Liked Songs</span>
                <span className="text-sm text-muted-foreground">Playlist • 123 songs</span>
              </div>
            </Link>
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
              >
                <img
                  src={playlist.cover || "/placeholder.svg"}
                  alt={playlist.name}
                  className="h-12 w-12 rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{playlist.name}</span>
                  <span className="text-sm text-muted-foreground">Playlist • {playlist.creator}</span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="mt-auto p-2">
        <Button
          variant="ghost"
          className="flex w-full items-center justify-start gap-2 text-muted-foreground hover:text-white"
          size="sm"
        >
          <Download className="h-4 w-4" />
          <span>Install App</span>
        </Button>
      </div>
    </div>
  )
}

const playlists = [
  {
    id: "1",
    name: "Chill Vibes",
    creator: "Spotify",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Top Hits 2023",
    creator: "Spotify",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Indie Mix",
    creator: "Spotify",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Workout Playlist",
    creator: "John Doe",
    cover: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    name: "Road Trip",
    creator: "Jane Smith",
    cover: "/placeholder.svg?height=100&width=100",
  },
]
