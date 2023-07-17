import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAaMUoj0KqciSjaG--_zT7bb5Q6fV9scYA",
  authDomain: "file-uploader-a0f03.firebaseapp.com",
  projectId: "file-uploader-a0f03",
  storageBucket: "file-uploader-a0f03.appspot.com",
  messagingSenderId: "834724852705",
  appId: "1:834724852705:web:2f736461bf2852960158a0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
