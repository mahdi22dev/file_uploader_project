import styles from "./page.module.css";
import UploadFile from "@/components/UploadFile/UploadFile";
import InfoSection from "@/components/infoSection/InfoSection";
import { ToastContainer } from "react-toastify";

export default function Home(req) {
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
      <UploadFile req={req} />
      <InfoSection />
    </main>
  );
}
