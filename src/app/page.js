import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "@/component/themeToggle";
import UploadFile from "@/component/UploadFile";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>
      <ThemeToggle />
      <UploadFile />
    </main>
  );
}
