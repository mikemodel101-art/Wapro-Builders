/**
 * Renders a JSON-LD structured data block.
 * Data is built in src/lib/jsonld.ts from the business info in
 * src/content/site.ts — update there, not here.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
