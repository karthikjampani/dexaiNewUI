import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <a href="/screens/signup">Go to SignUp</a>
    </div>
  );
}
