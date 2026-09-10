import { SegmentSeoPage, segmentMetadata, segmentPages } from "@/lib/segment-pages";

export const metadata = segmentMetadata("autopecas");

export default function AutopecasPage() {
  return <SegmentSeoPage segment={segmentPages.autopecas} />;
}
