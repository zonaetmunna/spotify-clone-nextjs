import { SearchInput } from '@/components/search-input';
import { SearchResults } from '@/components/search-results';
import { albums, playlists, songs } from '@/lib/dummy-data';
import { fireEvent, render, screen } from '@testing-library/react';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('Search Components', () => {
  describe('SearchInput', () => {
    it('renders search input with placeholder', () => {
      render(<SearchInput />);
      expect(screen.getByPlaceholderText('What do you want to listen to?')).toBeInTheDocument();
    });

    it('updates input value on change', () => {
      render(<SearchInput />);
      const input = screen.getByPlaceholderText('What do you want to listen to?');
      fireEvent.change(input, { target: { value: 'test query' } });
      expect(input).toHaveValue('test query');
    });

    it('initializes with provided query', () => {
      render(<SearchInput initialQuery="initial query" />);
      expect(screen.getByPlaceholderText('What do you want to listen to?')).toHaveValue('initial query');
    });
  });

  describe('SearchResults', () => {
    it('shows empty state when no query is provided', async () => {
      render(<SearchResults query="" category="all" />);
      expect(screen.getByText('Enter a search term to find music, artists, playlists, or albums')).toBeInTheDocument();
    });

    it('shows no results message when no matches found', async () => {
      render(<SearchResults query="nonexistent" category="all" />);
      expect(screen.getByText('No results found for "nonexistent"')).toBeInTheDocument();
    });

    it('filters and displays songs matching query', async () => {
      const matchingSong = songs[0];
      render(<SearchResults query={matchingSong.title} category="songs" />);
      expect(screen.getByText(matchingSong.title)).toBeInTheDocument();
      expect(screen.getByText(matchingSong.artist)).toBeInTheDocument();
    });

    it('filters and displays playlists matching query', async () => {
      const matchingPlaylist = playlists[0];
      render(<SearchResults query={matchingPlaylist.name} category="playlists" />);
      expect(screen.getByText(matchingPlaylist.name)).toBeInTheDocument();
      expect(screen.getByText(matchingPlaylist.description)).toBeInTheDocument();
    });

    it('filters and displays albums matching query', async () => {
      const matchingAlbum = albums[0];
      render(<SearchResults query={matchingAlbum.name} category="albums" />);
      expect(screen.getByText(matchingAlbum.name)).toBeInTheDocument();
      expect(screen.getByText(matchingAlbum.artist)).toBeInTheDocument();
    });

    it('displays all matching content when category is "all"', async () => {
      const matchingSong = songs[0];
      const matchingPlaylist = playlists[0];
      const matchingAlbum = albums[0];
      render(<SearchResults query={matchingSong.title} category="all" />);
      
      expect(screen.getByText(matchingSong.title)).toBeInTheDocument();
      expect(screen.getByText(matchingPlaylist.name)).toBeInTheDocument();
      expect(screen.getByText(matchingAlbum.name)).toBeInTheDocument();
    });
  });
}); 