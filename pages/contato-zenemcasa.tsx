import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/ContatoOnibusIracemapolis.module.css";

const contatoZenEmCasa: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zen em Casa - Contato</title>
        <meta name="description" content="App development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Zen em Casa - Entre em contato contato
          </h2>

          <hr color="#dcdcdc" />

          <h3 className={styles.title}>Responsável</h3>
          <p className={styles.p}>55+ 19 98260-4543 Jesse Mezini</p>

          <h3 className={styles.title}>Suporte sobre o aplicativo</h3>
          <p className={styles.p}>jessemezini@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default contatoZenEmCasa;
