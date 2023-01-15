import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/ContatoOnibusIracemapolis.module.css";

const contatoOnibusIracemapolis: NextPage = () => {
  return (
    <>
      <Head>
        <title>MZN Mindfulness - Contato</title>
        <meta name="description" content="App development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Mais informações para contato</h2>

          <hr color="#dcdcdc" />

          <h3 className={styles.title}>Responsável</h3>
          <p className={styles.p}>55+ 19 98260-4543 Jesse Mezini</p>

          <h3 className={styles.title}>Contato sobre o aplicativo</h3>
          <p className={styles.p}>jessemezini@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default contatoOnibusIracemapolis;
