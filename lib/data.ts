export interface Song {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  audioSrc: string;
}
// Sample data for the Spotify clone with real image URLs
export const sampleTracks = [
  {
    id: "1",
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    cover: "https://picsum.photos/id/147/300/300", // Abstract neon lights
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "2",
    name: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:35",
    cover: "https://picsum.photos/id/180/300/300", // Dark moody image
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "3",
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    cover: "https://picsum.photos/id/1025/300/300", // Colorful retro vibe
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "4",
    name: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    duration: "2:21",
    cover: "https://picsum.photos/id/1039/300/300", // Urban landscape
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "5",
    name: "good 4 u",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    cover: "https://picsum.photos/id/1016/300/300", // Vibrant colors
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: "6",
    name: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    duration: "3:18",
    cover: "https://picsum.photos/id/1080/300/300", // Warm sunset tones
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: "7",
    name: "MONTERO (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "MONTERO",
    duration: "2:17",
    cover: "https://picsum.photos/id/1066/300/300", // Bold artistic image
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: "8",
    name: "Kiss Me More",
    artist: "Doja Cat ft. SZA",
    album: "Planet Her",
    duration: "3:28",
    cover: "https://picsum.photos/id/1018/300/300", // Pink/purple aesthetic
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id: "9",
    name: "drivers license",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "4:02",
    cover: "https://picsum.photos/id/1052/300/300", // Melancholic mood
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    id: "10",
    name: "Leave The Door Open",
    artist: "Bruno Mars, Anderson .Paak, Silk Sonic",
    album: "An Evening with Silk Sonic",
    duration: "3:46",
    cover: "https://picsum.photos/id/1067/300/300", // Vintage aesthetic
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
];

export interface Playlist {
  id: string;
  name: string;
  description: string;
  creator: string;
  followers: string;
  duration: string;
  cover: string;
  songs: Song[];
}

export const playlists = [
  {
    id: "1",
    description: "Playlist • 123 songs",
    name: "Chill Vibes",
    creator: "Spotify",
    followers: "2,345,678",
    duration: "5h 35min",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    songs: sampleTracks,
  },
  {
    id: "2",
    name: "Top Hits 2023",
    description: "Playlist • Spotify",
    creator: "Spotify",
    followers: "5,678,901",
    duration: "3h 15min",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    songs: sampleTracks.slice(0, 5),
  },
  {
    id: "liked-songs",
    name: "Liked Songs",
    description: "Playlist • 123 songs",
    creator: "You",
    followers: "Only you",
    duration: "10h 12min",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop",
    songs: sampleTracks.slice(3, 8),
  },
  {
    id: "3",
    name: "Discover Weekly",
    description: "Playlist • Spotify",
    creator: "Spotify",
    followers: "1,234,567",
    duration: "2h 30min",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    songs: sampleTracks.slice(2, 7),
  },
  {
    id: "4",
    name: "Workout Playlist",
    description: "Playlist • 123 songs",
    creator: "John Doe",
    followers: "345,678",
    duration: "1h 45min",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    songs: sampleTracks.slice(1, 6),
  },
  {
    id: "5",
    name: "Road Trip",
    description: "Playlist • 123 songs",
    creator: "Jane Smith",
    followers: "123,456",
    duration: "2h 15min",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop",
    songs: sampleTracks.slice(5, 10),
  },
];

export interface Artist {
  id: string;
  name: string;
  verified: boolean;
  monthlyListeners: number;
  cover: string;
  topTracks: Song[];
  albums: Album[];
}
export const artists = [
  {
    id: "1",
    name: "The Weeknd",
    verified: true,
    monthlyListeners: 94567890,
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    topTracks: sampleTracks.slice(0, 5),
    albums: [
      {
        id: "1",
        name: "After Hours",
        year: "2020",
        cover: "https://picsum.photos/id/147/200/200",
      },
      {
        id: "2",
        name: "Starboy",
        year: "2016",
        cover: "https://picsum.photos/id/180/200/200",
      },
      {
        id: "3",
        name: "Beauty Behind the Madness",
        year: "2015",
        cover: "https://picsum.photos/id/1025/200/200",
      },
      {
        id: "4",
        name: "Dawn FM",
        year: "2022",
        cover: "https://picsum.photos/id/1039/200/200",
      },
    ],
    relatedArtists: [
      {
        id: "2",
        name: "Drake",
        cover:
          "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=200&h=200&fit=crop",
      },
      {
        id: "3",
        name: "Post Malone",
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      },
      {
        id: "4",
        name: "Kendrick Lamar",
        cover:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      },
      {
        id: "5",
        name: "Doja Cat",
        cover:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
      },
    ],
  },
  {
    id: "2",
    name: "Drake",
    verified: false,
    monthlyListeners: 12345678,
    cover:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=300&h=300&fit=crop",
    topTracks: sampleTracks.slice(5, 10),
    albums: [
      {
        id: "1",
        name: "Views",
        year: "2016",
        cover: "https://picsum.photos/id/180/200/200",
      },
      {
        id: "2",
        name: "More Life",
        year: "2015",
        cover: "https://picsum.photos/id/1025/200/200",
      },
      {
        id: "3",
        name: "Views",
        year: "2015",
        cover: "https://picsum.photos/id/1025/200/200",
      },
      {
        id: "4",
        name: "Views",
        year: "2015",
        cover: "https://picsum.photos/id/1025/200/200",
      },
    ],
    relatedArtists: [
      {
        id: "1",
        name: "The Weeknd",
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      },
      {
        id: "3",
        name: "Post Malone",
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      },
      {
        id: "4",
        name: "Kendrick Lamar",
        cover:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      },
      {
        id: "5",
        name: "Doja Cat",
        cover:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
      },
    ],
  },
];

export interface Album {
  id: string;
  name: string;
  artist: string;
  artistCover: string;
  year: string;
  duration: string;
  cover: string;
  songs: Song[];
  releaseDate: string;
  moreByArtist: {
    id: string;
    name: string;
    year: string;
    cover: string;
  }[];
}

export const albums = [
  {
    id: "1",
    name: "After Hours",
    artist: "The Weeknd",
    artistCover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
    year: "2020",
    releaseDate: "2020-01-01",
    duration: "56 min 16 sec",
    cover: "https://picsum.photos/id/147/300/300",
    songs: sampleTracks.slice(0, 13),
    moreByArtist: [
      {
        id: "2",
        name: "Starboy",
        year: "2016",
        cover: "https://picsum.photos/id/180/200/200",
      },
      {
        id: "3",
        name: "Beauty Behind the Madness",
        year: "2015",
        cover: "https://picsum.photos/id/1025/200/200",
      },
      {
        id: "4",
        name: "Dawn FM",
        year: "2022",
        cover: "https://picsum.photos/id/1039/200/200",
      },
    ],
  },
  {
    id: "2",
    name: "Starboy",
    artist: "The Weeknd",

    artistCover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
    year: "2016",
    duration: "1 hr 8 min",
    releaseDate: "2016-01-01",
    cover: "https://picsum.photos/id/180/300/300",
    songs: sampleTracks.slice(5, 8),
    moreByArtist: [
      {
        id: "1",
        name: "After Hours",
        year: "2020",
        cover: "https://picsum.photos/id/147/200/200",
      },
      {
        id: "3",
        name: "Beauty Behind the Madness",
        year: "2015",
        cover: "https://picsum.photos/id/1025/200/200",
      },
      {
        id: "4",
        name: "Dawn FM",
        year: "2022",
        cover: "https://picsum.photos/id/1039/200/200",
      },
    ],
  },
];

export interface Items {
  id: string;
  name: string;
  href: string;
  cover: string;
}

export const topItems = [
  {
    id: "1",
    name: "Liked Songs",
    href: "/playlist/liked-songs",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Top Hits 2023",
    href: "/playlist/2",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Discover Weekly",
    href: "/playlist/3",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "The Weeknd",
    href: "/artist/1",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    name: "Chill Vibes",
    href: "/playlist/1",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  },
  {
    id: "6",
    name: "Workout Playlist",
    href: "/playlist/4",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
  },
];

export const madeForYou = [
  {
    id: "1",
    name: "Daily Mix 1",
    description: "The Weeknd, Drake, Post Malone and more",
    href: "/playlist/daily-1",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Daily Mix 2",
    description: "Coldplay, Imagine Dragons, OneRepublic and more",
    href: "/playlist/daily-2",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Daily Mix 3",
    description: "Kendrick Lamar, J. Cole, Travis Scott and more",
    href: "/playlist/daily-3",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    href: "/playlist/discover",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    name: "Release Radar",
    description: "Catch all the latest music from artists you follow",
    href: "/playlist/release-radar",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop",
  },
  {
    id: "6",
    name: "Time Capsule",
    description: "Songs you loved years ago",
    href: "/playlist/time-capsule",
    cover:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=200&h=200&fit=crop",
  },
];

export const recentlyPlayed = [
  {
    id: "1",
    name: "Blinding Lights",
    description: "The Weeknd",
    href: "/album/1",
    cover: "https://picsum.photos/id/147/200/200",
  },
  {
    id: "2",
    name: "After Hours",
    description: "Album • The Weeknd",
    href: "/album/2",
    cover: "https://picsum.photos/id/180/200/200",
  },
  {
    id: "3",
    name: "This Is The Weeknd",
    description: "Playlist • Spotify",
    href: "/playlist/weeknd",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Top 50 - Global",
    description: "Playlist • Spotify",
    href: "/playlist/top-global",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    name: "Chill Mix",
    description: "Playlist • Spotify",
    href: "/playlist/chill-mix",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
  },
  {
    id: "6",
    name: "Workout Mix",
    description: "Playlist • Spotify",
    href: "/playlist/workout-mix",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop",
  },
];

export const browseCategories = [
  {
    id: "pop",
    name: "Pop",
    color: "#8c67ab",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  },
  {
    id: "hip-hop",
    name: "Hip-Hop",
    color: "#ba5d07",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
  },
  {
    id: "rock",
    name: "Rock",
    color: "#e61e32",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
  },
  {
    id: "rnb",
    name: "R&B",
    color: "#7358ff",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=100&h=100&fit=crop",
  },
  {
    id: "indie",
    name: "Indie",
    color: "#148a08",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
  },
  {
    id: "workout",
    name: "Workout",
    color: "#ff6437",
    cover:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=100&h=100&fit=crop",
  },
  {
    id: "dance",
    name: "Dance/Electronic",
    color: "#509bf5",
    cover: "https://picsum.photos/id/1016/100/100",
  },
  {
    id: "country",
    name: "Country",
    color: "#d84000",
    cover: "https://picsum.photos/id/1025/100/100",
  },
  {
    id: "latin",
    name: "Latin",
    color: "#e1118c",
    cover: "https://picsum.photos/id/1080/100/100",
  },
  {
    id: "chill",
    name: "Chill",
    color: "#0d73ec",
    cover: "https://picsum.photos/id/1066/100/100",
  },
  {
    id: "mood",
    name: "Mood",
    color: "#777777",
    cover: "https://picsum.photos/id/1018/100/100",
  },
  {
    id: "focus",
    name: "Focus",
    color: "#503750",
    cover: "https://picsum.photos/id/1052/100/100",
  },
];

export const trendingPlaylists = [
  {
    id: "1",
    name: "Today's Top Hits",
    description: "Drake is on top of the Hottest 50!",
    href: "/playlist/top-hits",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "RapCaviar",
    description: "New music from Kendrick Lamar, Drake and more",
    href: "/playlist/rapcaviar",
    cover:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    href: "/playlist/all-out-2010s",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Rock Classics",
    description: "Rock legends & epic songs",
    href: "/playlist/rock-classics",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    name: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    href: "/playlist/chill-hits",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop",
  },
  {
    id: "6",
    name: "Viva Latino",
    description: "Today's top Latin hits",
    href: "/playlist/viva-latino",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop",
  },
];

export const libraryPlaylists = [
  {
    id: "1",
    name: "Liked Songs",
    description: "Playlist • 123 songs",
    href: "/playlist/liked-songs",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop",
    duration: "8h 43min",
  },
  {
    id: "2",
    name: "Discover Weekly",
    description: "Playlist • Spotify",
    href: "/playlist/discover-weekly",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
    duration: "1h 57min",
  },
  {
    id: "3",
    name: "Release Radar",
    description: "Playlist • Spotify",
    href: "/playlist/release-radar",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop",
    duration: "2h 12min",
  },
  {
    id: "4",
    name: "Chill Vibes",
    description: "Playlist • John Doe",
    href: "/playlist/1",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
    duration: "3h 25min",
  },
  {
    id: "5",
    name: "Workout Mix",
    description: "Playlist • Jane Smith",
    href: "/playlist/4",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    duration: "1h 45min",
  },
];

export const libraryArtists = [
  {
    id: "1",
    name: "The Weeknd",
    href: "/artist/1",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Drake",
    href: "/artist/2",
    cover:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Billie Eilish",
    href: "/artist/3",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Taylor Swift",
    href: "/artist/4",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    name: "Kendrick Lamar",
    href: "/artist/5",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
  },
];

export const libraryAlbums = [
  {
    id: "1",
    name: "After Hours",
    artist: "The Weeknd",
    href: "/album/1",
    cover: "https://picsum.photos/id/147/200/200",
  },
  {
    id: "2",
    name: "Certified Lover Boy",
    artist: "Drake",
    href: "/album/2",
    cover:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Happier Than Ever",
    artist: "Billie Eilish",
    href: "/album/3",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Midnights",
    artist: "Taylor Swift",
    href: "/album/4",
    cover:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    name: "Mr. Morale & The Big Steppers",
    artist: "Kendrick Lamar",
    href: "/album/5",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
  },
];

export function getPlaylistById(id: string) {
  return playlists.find((playlist) => playlist.id === id);
}

export function getArtistById(id: string) {
  return artists.find((artist) => artist.id === id);
}

export function getAlbumById(id: string) {
  return albums.find((album) => album.id === id);
}
