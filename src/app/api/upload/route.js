import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const res = await fetch("https://api.anonfiles.com/upload", {
    method: "POST",
    headers: {
      "content-type": "multipart/form-data",
    },
    body: formData,
  });
  const info = await res.json();
  return new Response(info, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
