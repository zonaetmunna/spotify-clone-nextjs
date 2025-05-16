import { PlaylistContent } from "@/components/playlist-content"

export default function PlaylistPage({ params }: { params: { id: string } }) {
  return <PlaylistContent id={params.id} />
}
