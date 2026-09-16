"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Clinic.module.css";

const images = [
  { src: "/clinica.jpg",       alt: "Consultorio Dr. Felipe Gómez - Armenia" },
  { src: "/Consultorio1.png",  alt: "Consultorio 1" },
  { src: "/Consultorio2.png",  alt: "Consultorio 2" },
  { src: "/Consultorio3.png",  alt: "Consultorio 3" },
  { src: "/Consultorio4.png",  alt: "Consultorio 4" },
  { src: "/Consultorio5.png",  alt: "Consultorio 5" },
  { src: "/Consultorio6.png",  alt: "Consultorio 6" },
];

export default function Clinic() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <section id="clinica" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Las Instalaciones
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Nuestra Clínica
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className={styles.imgWrap}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <Image src={images[idx].src} alt={images[idx].alt} fill style={{ objectFit: "cover" }} quality={88} />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
            <ChevronLeft size={28} />
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === idx ? styles.dotActive : ""}`} onClick={() => setIdx(i)} aria-label={`Imagen ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
