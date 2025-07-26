import { FeaturedPlaylists } from "@/components/featured-playlists";
import { MadeForYou } from "@/components/made-for-you";
import { NewReleases } from "@/components/new-releases";
import { PopularArtists } from "@/components/popular-artists";
import { RecentlyPlayed } from "@/components/recently-played";
import { SearchSkeleton } from "@/components/search-skeleton";
import {
  albums,
  Artist,
  artists,
  madeForYou,
  playlists,
  sampleTracks,
} from "@/lib/data";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="space-y-8">
        <Suspense fallback={<SearchSkeleton />}>
          <FeaturedPlaylists playlists={playlists.slice(0, 6)} />
        </Suspense>

        <Suspense fallback={<SearchSkeleton />}>
          <RecentlyPlayed songs={sampleTracks.slice(0, 6)} />
        </Suspense>

        <Suspense fallback={<SearchSkeleton />}>
          <NewReleases albums={albums.slice(0, 6)} />
        </Suspense>

        <Suspense fallback={<SearchSkeleton />}>
          <MadeForYou songs={madeForYou} />
        </Suspense>

        <Suspense fallback={<SearchSkeleton />}>
          <PopularArtists artists={artists as unknown as Artist[]} />{" "}
        </Suspense>
      </div>
    </div>
  );
}
