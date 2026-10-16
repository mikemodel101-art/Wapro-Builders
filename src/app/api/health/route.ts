/**
 * Health check endpoint for hosting platforms.
 *
 * NOTE: This website intentionally uses NO database — all content lives in
 * plain files under src/content/ and public/images/. This endpoint simply
 * confirms the app server is up.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ ok: true });
}
