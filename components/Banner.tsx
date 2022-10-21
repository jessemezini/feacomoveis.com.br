import React from "react";
import Image from "next/image";

import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <header className={styles.navbar}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </header>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </main>
      </div>
    </div>
  );
}

export default Banner;
