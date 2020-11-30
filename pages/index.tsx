import Head from "next/head";
import styles from "../styles/Home.module.css";
import { AboveTheFold } from "../components/AboveTheFold";
import { Developer } from "../components/Developer/Developer";
import { Business } from "../components/Business/Business";
import { Education } from "../components/Education/Education";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lele Lew</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AboveTheFold />
      <Developer />
      {/* <Business /> */}
      <Education />
      <Footer />
    </div>
  );
}
