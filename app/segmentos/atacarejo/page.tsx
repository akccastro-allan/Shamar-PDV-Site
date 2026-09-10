import { SegmentSeoPage, segmentMetadata, segmentPages } from "@/lib/segment-pages";

export const metadata = segmentMetadata("atacarejo");

export default function AtacarejoPage() {
  return <SegmentSeoPage segment={segmentPages.atacarejo} />;
}
