"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smile, Sparkles, Zap, Star, Shield, Heart, Droplets } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  { id: "ortodoncia-conv", icon: <Smile size={36} />, title: "Ortodoncia Convencional", desc: "Corrección de la alineación dental y la mordida con brackets metálicos o de zafiro, logrando resultados duraderos y efectivos." },
  { id: "ortodoncia-inv", icon: <Sparkles size={36} />, title: "Ortodoncia Invisible", desc: "Alineadores transparentes personalizados que corrigen los dientes discretamente, sin brackets ni alambres visibles.", highlight: true },
  { id: "blanqueamiento", icon: <Zap size={36} />, title: "Blanqueamiento Dental", desc: "Tratamiento profesional que elimina manchas y decoloración, devolviendo la blancura natural de tu sonrisa." },
  { id: "diseno-sonrisa", icon: <Star size={36} />, title: "Diseño de Sonrisa", desc: "Planificación estética personalizada que combina múltiples tratamientos para la sonrisa perfecta que siempre soñaste.", highlight: true },
  { id: "endodoncia", icon: <Shield size={36} />, title: "Endodoncia", desc: "Tratamiento del nervio dental para salvar dientes comprometidos y eliminar el dolor con la máxima precisión." },
  { id: "rehab-oral", icon: <Heart size={36} />, title: "Rehabilitación Oral", desc: "Restauración integral de la función y estética mediante coronas, puentes y prótesis dentales." },
  { id: "limpieza", icon: <Droplets size={36} />, title: "Limpieza Dental", desc: "Profilaxis profesional que elimina placa, sarro y bacterias, previniendo enfermedades periodontales y caries." },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className={styles.section}>
      {/* Decorative tooth bg */}
      <div className={styles.toothBg} aria-hidden />

      <div className="container">
        <div className={styles.header}>
          <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            Nuestros Tratamientos
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            Servicios para cada<br />necesidad
          </motion.h2>
          <motion.p className={styles.sub} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
            Ofrecemos tratamientos odontológicos completos con la última tecnología y un equipo comprometido con tu bienestar.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className={styles.grid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map(s => (
            <motion.div
              key={s.id}
              id={s.id}
              className={`${styles.card} ${s.highlight ? styles.cardHighlight : ""}`}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={`${styles.icon} ${s.highlight ? styles.iconHighlight : ""}`}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.verMas}>Ver más →</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
