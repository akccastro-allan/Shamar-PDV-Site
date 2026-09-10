import { SegmentSeoPage, segmentMetadata, segmentPages } from "@/lib/segment-pages";

export const metadata = segmentMetadata("mercado");

export default function MercadoPage() {
  return <SegmentSeoPage segment={segmentPages.mercado} />;
}
