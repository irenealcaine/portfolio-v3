import Navbar from "@/Components/Navbar/Navbar";
import styles from "./page.module.css";
import Front from "@/Pages/Home/Home";
import Portfolio from "@/Pages/Portfolio/Portfolio";
import Contact from "@/Pages/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Front />
      <Portfolio />
      <Contact />
      <Navbar />
    </main>
  );
}
