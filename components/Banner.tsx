import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

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
              Somos uma agência digital, que cria experiências online
              impressionantes e envolventes.
            </h1>

            <p className={styles.description}>
              Entre em contato conosco para saber mais sobre nosso aplicativo de
              meditação para IOS e Android.
            </p>

            <div className={styles.buttonContainer}>
              <a href="https://wa.me/5519983373120" className={styles.button}>
                <FaWhatsapp size="1.25rem" />
              </a>
              <a
                href="https://www.instagram.com/mznapplab/"
                className={styles.button}
              >
                <FaInstagram size="1.25rem" />
              </a>
              <a
                href="https://www.facebook.com/mznapplab"
                className={styles.button}
              >
                <FaFacebook size="1.25rem" />
              </a>
            </div>
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
