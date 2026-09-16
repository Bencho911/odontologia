"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.text}>Diseñado por Uncoder.com.ar</p>
        </div>
      </div>
    </footer>
  );
}
