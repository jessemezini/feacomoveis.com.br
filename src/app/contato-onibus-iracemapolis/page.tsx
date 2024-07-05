import styles from "../../styles/contact.module.css";

export default function MznMindfulnessPage() {
  return (
    <div className="container mx-auto max-w-screen-sm my-20">
      <div data-theme="light" className={styles.card}>
        <h2 className={styles.title}>Mais informações para contato</h2>

        <hr color="#dcdcdc" className="mb-6" />

        <h3 className={styles.title}>Circular Iracemápolis</h3>
        <p className={styles.p}>Transporte Municipal 3456.3537</p>

        <h3 className={styles.title}>Limeira / Piracicaba</h3>
        <p className={styles.p}>VB Transportes 3456.3934</p>

        <h3 className={styles.title}>Contato sobre o aplicativo</h3>
        <p className={styles.p}>jessemezini@gmail.com</p>
      </div>
    </div>
  );
}
