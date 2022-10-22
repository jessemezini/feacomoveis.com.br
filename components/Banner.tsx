import React from "react";
import Image from "next/image";

import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <header className={styles.navbar}>
          <Image src="/logo.png" alt="MZN App Lab" width={84} height={84} />
        </header>

        <main className={styles.main}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              The leading Customer Application for your daily workspace.
            </h1>

            <p className={styles.description}>
              Flow adds smart capabilities on top of your bank accounts. Connect
              your banks to Flow and get complete control over your money
              instantly anytime.
            </p>
          </div>

          <div className={styles.image}>
            <Image
              src="/banner-mockup.png"
              layout="responsive"
              alt="MZN Mindfulness"
              width={600}
              height={827}
              sizes="100vw"
              priority
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Banner;
