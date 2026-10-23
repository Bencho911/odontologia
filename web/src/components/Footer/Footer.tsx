import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} on-dark`}>
      <div className={`container ${styles.content}`}>
        <p className={styles.name}>Dr. Felipe Gómez Amaya <span>· Ortodoncia y ortopedia maxilar</span></p>
        <p className={styles.text}>Diseñado por Uncoder.com.ar</p>
      </div>
    </footer>
  );
}
