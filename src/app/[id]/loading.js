import styles from "../page.module.css";
export default function Loading() {
  return (
    <main className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>...Loading Your File</p>
    </main>
  );
}
