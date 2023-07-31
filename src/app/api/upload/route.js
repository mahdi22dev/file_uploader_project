import { db } from "@/lib/firebase";
// import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { NextResponse } from "next/server";
// const colref = collection(db, "files");

// const adddata = async (id, name) => {
//   await setDoc(doc(colref, id), {
//     id: id,
//     name: name,
//     created_at: Timestamp.now(),
//   });
// };

export async function POST(request) {
  let formData = await request.formData();
  try {
    const res = await fetch("https://api.anonfiles.com/upload", {
      method: "POST",
      body: formData,
    });

    const info = await res.json();
    console.log(info);
    const { id, name } = info?.data?.file?.metadata;
    const metadata = info?.data?.file?.metadata;
    // await adddata(id, name);
    const results = { url: "url", metadata };
    return NextResponse.json(
      { message: "upload done", done: true, results },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { done: false, test: "faild to upload file" },
      { status: 401 }
    );
  }
}
