// app/api/getCoffee/route.ts
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id" }), {
      status: 400,
    });
  }

  try {
    const res = await fetch(`${process.env.GET_COFFEES_URL}/${id}`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch coffee" }), {
      status: 500,
    });
  }
}
