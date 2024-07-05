import styles from "../../styles/contact.module.css";

export default function MznMindfulnessPage() {
  return (
    <div className="container mx-auto max-w-screen-sm my-20">
      <div data-theme="light" className={styles.card}>
        <h2 className={styles.title}>
          MZN Mindfulness - Entre em contato contato
        </h2>

        <hr color="#dcdcdc" />

        <h3 className={styles.title}>Responsável</h3>
        <p className={styles.p}>55+ 19 98260-4543 Jesse Mezini</p>

        <h3 className={styles.title}>Suporte sobre o aplicativo</h3>
        <p className={styles.p}>jessemezini@gmail.com</p>
      </div>
    </div>
  );
}
