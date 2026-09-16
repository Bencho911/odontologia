"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Camila Rodríguez",
    stars: 5,
    text: "Excelente atención del Dr. Felipe. Me realizó la ortodoncia invisible y el resultado fue increíble. Muy profesional y puntual en cada cita.",
    source: "Google",
  },
  {
    name: "Andrés Martínez",
    stars: 5,
    text: "Me hice el blanqueamiento dental y quedé muy satisfecho. El consultorio es moderno y el doctor explica todo con mucha claridad. 100% recomendado.",
    source: "Google",
  },
  {
    name: "Valentina Ospina",
    stars: 5,
    text: "Llevo más de un año en tratamiento de ortodoncia y la diferencia es notable. El Dr. Gómez es muy atento y resuelve todas las dudas. ¡Gracias!",
    source: "Google",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} fill="#44C6E9" color="#44C6E9" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Testimonios
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Lo que opinan<br />nuestros pacientes
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <motion.div key={i} className={styles.card}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className={styles.cardTop}>
                <span className={styles.name}>{r.name}</span>
                <span className={styles.source}>{r.source} ★</span>
              </div>
              <StarRow count={r.stars} />
              <p className={styles.text}>"{r.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {[0,1,2,3,4].map(i => (
            <span key={i} className={`${styles.dot} ${i === 1 ? styles.dotActive : ""}`} />
          ))}
        </div>

        {/* Google link */}
        <motion.div className={styles.googleLink} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <a
            href="https://www.google.com/search?q=Dr.+Felipe+Gómez+Amaya+ortodoncista+Armenia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-cyan"
            id="google-reviews-btn"
            style={{ fontSize: "16px", padding: "12px 28px" }}
          >
            Ver todas las reseñas en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
