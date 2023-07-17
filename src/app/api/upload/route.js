import { db } from "@/lib/utils/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { NextResponse } from "next/server";
const colref = collection(db, "files");
const adddata = async (id, name) => {
  // with specfic id overwrite data also
  await setDoc(doc(colref, id), {
    id: id,
    name: name,
    created_at: Timestamp.now(),
  });
};
export async function POST(request) {
  let formData = await request.formData();
  try {
    const res = await fetch("https://api.anonfiles.com/upload", {
      method: "POST",
      body: formData,
    });

    const info = await res.json();
    const { id, name } = info?.data?.file?.metadata;
    await adddata(id, name);
    return NextResponse.json({ message: "upload done", info }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { test: "faild to upload file", error },
      { status: 401 }
    );
  }
}
