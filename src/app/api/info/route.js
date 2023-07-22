import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const res = await fetch(`https://api.anonfiles.com/v2/file/${id}/info`);
    const data = await res.json();
    const metadata = data?.data?.file?.metadata;
    const response = { url: "", metadata };
    return NextResponse.json({ status: true, response }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ test: "try again later" }, { status: 401 });
  }
}
