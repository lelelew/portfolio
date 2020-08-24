import Head from "next/head";
import styles from "../styles/Home.module.css";
import { AboveTheFold } from "./components/AboveTheFold";
import { Developer } from "./components/Developer/Developer";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lele Lew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboveTheFold />
      <Developer />
      <Footer />
    </div>
  );
}
