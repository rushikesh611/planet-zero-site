import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planet Zero 🚀</title>
        <meta name="description" content="Planet Zero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-lg">Planet Zero 🚀</h1>
      </div>
    </div>
  );
};

export default Home;
