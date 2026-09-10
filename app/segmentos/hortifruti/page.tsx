import { SegmentSeoPage, segmentMetadata, segmentPages } from "@/lib/segment-pages";

export const metadata = segmentMetadata("hortifruti");

export default function HortifrutiPage() {
  return <SegmentSeoPage segment={segmentPages.hortifruti} />;
}
