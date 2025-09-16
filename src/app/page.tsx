import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <a href="/screens/signup">Go to SignUp</a>
      <a href="/screens/dashboard">Go to dashboard</a>
      <a href="/screens/OnBoarding">Go to on boarding</a>
    </div>
  );
}
