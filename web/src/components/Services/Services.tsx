"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smile,
  Sparkles,
  Zap,
  Star,
  Heart,
  Shield,
  Droplets,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    id: "ortodoncia-convencional",
    icon: <Smile size={28} />,
    title: "Ortodoncia Convencional",
    description:
      "Tratamiento con brackets metálicos o de zafiro para corregir la alineación dental y la mordida de forma efectiva y duradera.",
    highlight: false,
  },
  {
    id: "ortodoncia-invisible",
    icon: <Sparkles size={28} />,
    title: "Ortodoncia Invisible",
    description:
      "Alineadores transparentes personalizados que corrigen tus dientes discretamente, sin brackets ni alambres visibles.",
    highlight: true,
  },
  {
    id: "blanqueamiento-dental",
    icon: <Zap size={28} />,
    title: "Blanqueamiento Dental",
    description:
      "Tratamientos profesionales que eliminan manchas y decoloración, devolviendo la blancura natural de tu sonrisa.",
    highlight: false,
  },
  {
    id: "diseno-sonrisa",
    icon: <Star size={28} />,
    title: "Diseño de Sonrisa",
    description:
      "Planificación estética personalizada que combina múltiples tratamientos para lograr la sonrisa perfecta que siempre soñaste.",
    highlight: true,
  },
  {
    id: "endodoncia",
    icon: <Shield size={28} />,
    title: "Endodoncia",
    description:
      "Tratamiento del conducto radicular (nervio) para salvar dientes comprometidos y eliminar el dolor con la máxima precisión.",
    highlight: false,
  },
  {
    id: "rehabilitacion-oral",
    icon: <Heart size={28} />,
    title: "Rehabilitación Oral",
    description:
      "Restauración integral de la función masticatoria y estética mediante coronas, puentes, implantes y prótesis dentales.",
    highlight: false,
  },
  {
    id: "limpieza-dental",
    icon: <Droplets size={28} />,
    title: "Limpieza Dental",
    description:
      "Profilaxis profesional que elimina placa, sarro y bacterias, previniendo enfermedades periodontales y caries.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className={`section ${styles.services}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Servicios
          </motion.span>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tratamientos para{" "}
            <span className="text-gradient">cada necesidad</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ofrecemos soluciones odontológicas completas con la última
            tecnología y un equipo comprometido con tu bienestar y salud bucal.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`glass-card ${styles.card} ${service.highlight ? styles.cardHighlight : ""}`}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`${styles.iconWrap} ${service.highlight ? styles.iconHighlight : ""}`}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              {service.highlight && (
                <span className={styles.popularBadge}>Popular</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
