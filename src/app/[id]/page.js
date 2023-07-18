import React from "react";
import { notFound } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
let files = [];

const getdata = async () => {
  const fileref = collection(db, `/files/`);
  onSnapshot(fileref, (snapshot) => {
    files = snapshot.docs.map((doc) => {
      return { id: doc.id };
    });
  });
};

export async function generateStaticParams() {
  await getdata();

  return files;
}

export default async function Page({ params }) {
  const res = await fetch(
    `https://api.anonfiles.com/v2/file/${params.id}/info`
  );
  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();

  const { name, id, size } = data?.data?.file?.metadata;
  return (
    <>
      <div>
        <h1>file info</h1>
        <p>{params.id}</p>
        <p>{name}</p>
        <p>{id}</p>
        <p>{size?.readable}</p>
      </div>
    </>
  );
  // ...
}
