"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

const WHATSAPP_NUMBER = "573143457474";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Dr. Felipe! Me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?"
);

const stats = [
  { value: "+500", label: "Pacientes satisfechos" },
  { value: "7+", label: "Años de experiencia" },
  { value: "7", label: "Especialidades" },
];

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgImage}>
        <Image
          src="/hero.png"
          alt="Consultorio odontológico moderno"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={90}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Decorative Orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label">
              Consultorio 805 · Medisalud · Armenia, Quindío
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Tu sonrisa,
            <br />
            <span className="text-gradient">nuestra pasión</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            El <strong>Dr. Felipe Gómez Amaya</strong> ofrece tratamientos odontológicos
            de alta calidad con tecnología moderna, atención personalizada y
            los más altos estándares de comodidad para cada paciente.
          </motion.p>

          {/* Actions */}
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a
              id="hero-whatsapp-cta"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              Agendar por WhatsApp
            </a>
            <a href="tel:3143457474" className="btn btn-outline" id="hero-phone-cta">
              <Phone size={18} />
              Llamar ahora
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: floating card */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.doctorCard}>
            <div className={styles.doctorImageWrap}>
              <Image
                src="/doctor.png"
                alt="Dr. Felipe Gómez Amaya - Odontólogo en Armenia Quindío"
                fill
                style={{ objectFit: "cover" }}
                quality={85}
              />
            </div>
            <div className={styles.doctorInfo}>
              <p className={styles.doctorName}>Dr. Felipe Gómez Amaya</p>
              <p className={styles.doctorTitle}>Odontólogo Especialista</p>
              <div className={styles.doctorBadge}>
                <span className={styles.onlineDot} />
                Atendiendo pacientes
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        className={styles.scrollHint}
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Ver servicios"
      >
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
