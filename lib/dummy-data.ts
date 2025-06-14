export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  coverUrl: string;
  songs: Song[];
  releaseDate: string;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  monthlyListeners: number;
  albums: Album[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
  createdBy: string;
}

// Dummy Songs
export const songs: Song[] = [
  {
    id: "1",
    title: "Summer Vibes",
    artist: "Chill Wave",
    album: "Ocean Dreams",
    duration: 180,
    coverUrl: "/images/album1.jpg",
    audioUrl: "/music/summer-vibes.mp3"
  },
  {
    id: "2",
    title: "Midnight City",
    artist: "Electric Dreams",
    album: "Neon Nights",
    duration: 240,
    coverUrl: "/images/album2.jpg",
    audioUrl: "/music/midnight-city.mp3"
  },
  // Add more dummy songs here
];

// Dummy Albums
export const albums: Album[] = [
  {
    id: "1",
    name: "Ocean Dreams",
    artist: "Chill Wave",
    coverUrl: "/images/album1.jpg",
    songs: songs.filter(song => song.album === "Ocean Dreams"),
    releaseDate: "2024-01-15"
  },
  {
    id: "2",
    name: "Neon Nights",
    artist: "Electric Dreams",
    coverUrl: "/images/album2.jpg",
    songs: songs.filter(song => song.album === "Neon Nights"),
    releaseDate: "2024-02-20"
  },
  // Add more dummy albums here
];

// Dummy Artists
export const artists: Artist[] = [
  {
    id: "1",
    name: "Chill Wave",
    imageUrl: "/images/artist1.jpg",
    monthlyListeners: 1200000,
    albums: albums.filter(album => album.artist === "Chill Wave")
  },
  {
    id: "2",
    name: "Electric Dreams",
    imageUrl: "/images/artist2.jpg",
    monthlyListeners: 850000,
    albums: albums.filter(album => album.artist === "Electric Dreams")
  },
  // Add more dummy artists here
];

// Dummy Playlists
export const playlists: Playlist[] = [
  {
    id: "1",
    name: "Chill Vibes",
    description: "Perfect for relaxing and unwinding",
    coverUrl: "/images/playlist1.jpg",
    songs: songs.slice(0, 5),
    createdBy: "Spotify"
  },
  {
    id: "2",
    name: "Workout Mix",
    description: "High energy tracks to keep you moving",
    coverUrl: "/images/playlist2.jpg",
    songs: songs.slice(5, 10),
    createdBy: "Spotify"
  },
  // Add more dummy playlists here
]; 