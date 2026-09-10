import { SegmentSeoPage, segmentMetadata, segmentPages } from "@/lib/segment-pages";

export const metadata = segmentMetadata("material-de-construcao");

export default function MaterialConstrucaoPage() {
  return <SegmentSeoPage segment={segmentPages["material-de-construcao"]} />;
}
