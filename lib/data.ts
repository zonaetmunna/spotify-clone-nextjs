// Sample data for the Spotify clone
export const sampleTracks = [
  {
    id: "1",
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "2",
    name: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:35",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "3",
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "4",
    name: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    duration: "2:21",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "5",
    name: "good 4 u",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: "6",
    name: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    duration: "3:18",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: "7",
    name: "MONTERO (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "MONTERO",
    duration: "2:17",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: "8",
    name: "Kiss Me More",
    artist: "Doja Cat ft. SZA",
    album: "Planet Her",
    duration: "3:28",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id: "9",
    name: "drivers license",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "4:02",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    id: "10",
    name: "Leave The Door Open",
    artist: "Bruno Mars, Anderson .Paak, Silk Sonic",
    album: "An Evening with Silk Sonic",
    duration: "3:46",
    cover: "/placeholder.svg?height=50&width=50",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
]

export const playlists = [
  {
    id: "1",
    name: "Chill Vibes",
    creator: "Spotify",
    followers: "2,345,678",
    duration: "5h 35min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks,
  },
  {
    id: "2",
    name: "Top Hits 2023",
    creator: "Spotify",
    followers: "5,678,901",
    duration: "3h 15min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks.slice(0, 5),
  },
  {
    id: "liked-songs",
    name: "Liked Songs",
    creator: "You",
    followers: "Only you",
    duration: "10h 12min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks.slice(3, 8),
  },
  {
    id: "3",
    name: "Discover Weekly",
    creator: "Spotify",
    followers: "1,234,567",
    duration: "2h 30min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks.slice(2, 7),
  },
  {
    id: "4",
    name: "Workout Playlist",
    creator: "John Doe",
    followers: "345,678",
    duration: "1h 45min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks.slice(1, 6),
  },
  {
    id: "5",
    name: "Road Trip",
    creator: "Jane Smith",
    followers: "123,456",
    duration: "2h 15min",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks.slice(5, 10),
  },
]

export const artists = [
  {
    id: "1",
    name: "The Weeknd",
    verified: true,
    monthlyListeners: 94567890,
    cover: "/placeholder.svg?height=300&width=300",
    topTracks: sampleTracks.slice(0, 5),
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

export const albums = [
  {
    id: "1",
    name: "After Hours",
    artist: "The Weeknd",
    artistCover: "/placeholder.svg?height=50&width=50",
    year: "2020",
    duration: "56 min 16 sec",
    cover: "/placeholder.svg?height=300&width=300",
    songs: sampleTracks.slice(0, 13),
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
    songs: sampleTracks.slice(5, 8),
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

export const topItems = [
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

export const madeForYou = [
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

export const recentlyPlayed = [
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

export const browseCategories = [
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

export const trendingPlaylists = [
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

export const libraryPlaylists = [
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

export const libraryArtists = [
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

export const libraryAlbums = [
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

export function getPlaylistById(id: string) {
  return playlists.find((playlist) => playlist.id === id)
}

export function getArtistById(id: string) {
  return artists.find((artist) => artist.id === id)
}

export function getAlbumById(id: string) {
  return albums.find((album) => album.id === id)
}
