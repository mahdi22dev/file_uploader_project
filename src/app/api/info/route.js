import { NextResponse } from "next/server";

export async function GET(request) {
  const url = `https://api.anonfiles.com/v2/file/1eudtd29zd/info`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("file id is wrong");
  }
  const info = await res.json();
  return NextResponse.json({ test: "get file info", info: info });
}
