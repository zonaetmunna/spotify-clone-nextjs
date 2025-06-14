# Spotify Clone

A Spotify clone built with Next.js, TypeScript, and Tailwind CSS. This project replicates the core features of Spotify's web application with a modern and responsive design.

## Features

- 🎵 Music player with play/pause, next/previous, volume control, and progress bar
- 🔍 Search functionality for songs, albums, artists, and playlists
- 🎨 Beautiful and responsive UI with Tailwind CSS
- 📱 Mobile-friendly design
- 🎧 Dynamic routing for albums, artists, and playlists
- 🎼 Dummy data for testing and development

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide Icons
- React Context API for state management

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/spotify-clone-nextjs.git
cd spotify-clone-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Download placeholder images:

```bash
node scripts/download-images.js
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
spotify-clone-nextjs/
├── app/                    # Next.js app directory
│   ├── album/             # Album pages
│   ├── artist/            # Artist pages
│   ├── playlist/          # Playlist pages
│   ├── search/            # Search page
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── contexts/             # React contexts
├── lib/                  # Utility functions and data
├── public/              # Static assets
└── styles/              # Global styles
```

## Features to Add

- [ ] User authentication
- [ ] Real music streaming
- [ ] Create and edit playlists
- [ ] Like/favorite songs
- [ ] User profile
- [ ] Social features
- [ ] Offline mode
- [ ] Keyboard shortcuts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spotify](https://www.spotify.com) for the inspiration
- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev) for the beautiful icons
