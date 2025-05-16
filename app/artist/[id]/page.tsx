import { ArtistContent } from "@/components/artist-content"

export default function ArtistPage({ params }: { params: { id: string } }) {
  return <ArtistContent id={params.id} />
}
