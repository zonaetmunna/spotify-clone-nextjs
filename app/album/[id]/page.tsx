import { AlbumContent } from "@/components/album-content"

export default function AlbumPage({ params }: { params: { id: string } }) {
  return <AlbumContent id={params.id} />
}
