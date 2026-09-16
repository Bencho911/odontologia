"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import styles from "./Hero.module.css";

const WHATSAPP = "573143457474";
const WA_MSG = encodeURIComponent("Hola Dr. Felipe! Me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?");

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          <motion.span className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Ortodoncista · Armenia, Quindío
          </motion.span>

          <motion.h1 className={`section-title ${styles.heading}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Dr. Felipe<br />Gómez Amaya
          </motion.h1>

          <motion.p className={styles.sub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
            Transformamos sonrisas con ortodoncia convencional e invisible, blanqueamiento dental, diseño de sonrisa y mucho más. Atención personalizada con tecnología de punta en el corazón de Armenia.
          </motion.p>

          <motion.div className={styles.actions} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.38 }}>
            <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-blue" id="hero-wa-cta">
              <MessageCircle size={18} /> Agendar por WhatsApp
            </a>
            <a href="tel:3143457474" className="btn btn-outline-cyan" id="hero-phone-cta">
              <Phone size={16} /> Llamar ahora
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className={styles.stats} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            {[
              { n: "+500", l: "Pacientes satisfechos" },
              { n: "7+", l: "Años de experiencia" },
              { n: "7", l: "Especialidades" },
            ].map(s => (
              <div key={s.l} className={styles.stat}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Doctor photo */}
        <motion.div className={styles.right} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className={styles.photoFrame}>
            <div className={styles.photoBubble1} />
            <div className={styles.photoBubble2} />
            <div className={styles.photoCard}>
              <Image src="/Doctor.jpeg" alt="Dr. Felipe Gómez Amaya — Ortodoncista en Armenia Quindío" fill style={{ objectFit: "cover", objectPosition: "top center" }} priority quality={92} />
            </div>
            {/* Location badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <div>
                <p className={styles.badgeMain}>Medisalud, Consul. 805</p>
                <p className={styles.badgeSub}>Armenia, Quindío</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
