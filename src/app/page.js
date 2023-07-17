import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "@/component/ThemeToggle/ThemeToggle";
import UploadFile from "@/component/UploadFile/UploadFile";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Upload your file</h1>
      {/* <UploadFile /> */}
    </main>
  );
}
