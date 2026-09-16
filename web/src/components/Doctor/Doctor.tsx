"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Clock, Users } from "lucide-react";
import styles from "./Doctor.module.css";

const qualities = [
  {
    icon: <GraduationCap size={20} />,
    title: "Formación de Excelencia",
    desc: "Odontólogo con sólida formación académica y actualización continua en las últimas técnicas.",
  },
  {
    icon: <Award size={20} />,
    title: "Tecnología Avanzada",
    desc: "Equipos de diagnóstico y tratamiento de última generación para resultados precisos y seguros.",
  },
  {
    icon: <Clock size={20} />,
    title: "Atención Puntual",
    desc: "Respetamos tu tiempo con citas organizadas y sin esperas innecesarias.",
  },
  {
    icon: <Users size={20} />,
    title: "Trato Personalizado",
    desc: "Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades específicas.",
  },
];

export default function Doctor() {
  return (
    <section id="doctor" className={`section section-light ${styles.doctor}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Image */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imageBg} />
              <div className={styles.imageCard}>
                <Image
                  src="/doctor.png"
                  alt="Dr. Felipe Gómez Amaya - Odontólogo especialista en Armenia Quindío"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                />
              </div>
              {/* Floating accent */}
              <div className={styles.floatingBadge}>
                <span className={styles.floatingNum}>7+</span>
                <span className={styles.floatingText}>Años de<br />experiencia</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className={styles.content}>
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ color: "var(--accent-dark)", background: "rgba(15, 118, 110, 0.1)", borderColor: "rgba(15, 118, 110, 0.25)" }}
            >
              El Doctor
            </motion.span>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Dr. Felipe Gómez Amaya
            </motion.h2>

            <motion.p
              className={styles.bio}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Odontólogo comprometido con brindar la mejor atención a sus
              pacientes en Armenia, Quindío. Con una filosofía centrada en la
              prevención, la estética y la salud bucal integral, cada tratamiento
              se realiza con dedicación, precisión y los más altos estándares de
              calidad.
            </motion.p>

            <motion.p
              className={styles.bio}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Atendiendo en el <strong>Edificio Medisalud, Consultorio 805</strong>,
              ubicado estratégicamente en el corazón de Armenia para tu comodidad.
            </motion.p>

            {/* Qualities */}
            <motion.div
              className={styles.qualities}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {qualities.map((q, i) => (
                <div key={i} className={styles.qualityItem}>
                  <div className={styles.qualityIcon}>{q.icon}</div>
                  <div>
                    <h4 className={styles.qualityTitle}>{q.title}</h4>
                    <p className={styles.qualityDesc}>{q.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
