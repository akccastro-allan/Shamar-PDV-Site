import { SegmentSeoPage, segmentMetadata, segmentPages } from "@/lib/segment-pages";

export const metadata = segmentMetadata("varejo");

export default function VarejoPage() {
  return <SegmentSeoPage segment={segmentPages.varejo} />;
}
