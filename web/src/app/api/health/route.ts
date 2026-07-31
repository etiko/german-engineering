export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "german-engineering-web",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
