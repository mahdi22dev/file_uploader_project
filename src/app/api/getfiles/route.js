// import { db } from "@/lib/utils/firebase";
// import { collection, onSnapshot } from "firebase/firestore";
// import { NextResponse } from "next/server";

// let files = [];
// const getdata = async () => {
//   const fileref = collection(db, `/files/`);

//   onSnapshot(fileref, (snapshot) => {
//     files = snapshot.docs.map((doc) => {
//       return { ...doc.data(), id: doc.id };
//     });
//     console.log(files);
//   });
// };
// export async function GET() {
//   try {
//     getdata();
//     // console.log("from get");
//     return NextResponse.json(
//       { message: "fetch data done", files: files },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { test: "faild to fetch data", error },
//       { status: 401 }
//     );
//   }
// }
