"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Doctor.module.css";

export default function Doctor() {
  return (
    <section id="doctor" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left - Photo */}
          <motion.div className={styles.left} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className={styles.photoWrap}>
              <Image src="/Doctor.jpeg" alt="Dra. Patricia Nieves Kiriaco - Odontóloga" fill style={{ objectFit: "cover" }} quality={90} />
            </div>
          </motion.div>

          {/* Right - Text */}
          <div className={styles.right}>
            <div className={styles.header}>
              <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Sobre Mí
              </motion.span>
              <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Dr. Felipe<br />Gómez Amaya
              </motion.h2>
            </div>
            
            <motion.div className={styles.content} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
              <p>Odontólogo especialista en Ortodoncia, dedicado a transformar sonrisas con las técnicas más avanzadas y un enfoque humano.</p>
              <p>Egresado de [Universidad], con más de 7 años de experiencia brindando atención de alta calidad. Miembro activo de asociaciones odontológicas reconocidas, siempre en constante actualización para ofrecer los mejores tratamientos a mis pacientes.</p>
              <p>Mi objetivo es que cada paciente se sienta cómodo, seguro y feliz con su sonrisa, utilizando tecnología de punta y tratamientos personalizados.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
