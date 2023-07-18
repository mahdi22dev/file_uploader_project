import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "@/component/ThemeToggle/ThemeToggle";
import UploadFile from "@/component/UploadFile/UploadFile";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Anonymous File Upload</h1>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme='dark'
      />
      <UploadFile />
    </main>
  );
}
