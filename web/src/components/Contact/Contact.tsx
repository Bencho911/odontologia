"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Building2 } from "lucide-react";
import styles from "./Contact.module.css";

const WHATSAPP_NUMBER = "573143457474";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Dr. Felipe! Me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?"
);

const contactItems = [
  {
    icon: <MapPin size={22} />,
    label: "Dirección",
    value: "Carrera 12 # 0N-20",
    detail: "Edificio Medisalud, Consultorio 805",
    href: "https://maps.google.com/?q=Carrera+12+0N-20+Medisalud+Armenia+Quindio",
  },
  {
    icon: <Phone size={22} />,
    label: "Teléfono / WhatsApp",
    value: "314 345 7474",
    detail: "Llámanos o escríbenos",
    href: "tel:3143457474",
  },
  {
    icon: <Building2 size={22} />,
    label: "Sede",
    value: "Edificio Medisalud",
    detail: "Consultorio 805 — Armenia, Quindío",
    href: null,
  },
  {
    icon: <Clock size={22} />,
    label: "Horario de Atención",
    value: "Lun – Sáb: 8:00 AM – 6:00 PM",
    detail: "Con cita previa",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Info */}
          <div className={styles.infoCol}>
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contacto
            </motion.span>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Agenda tu cita{" "}
              <span className="text-gradient">hoy mismo</span>
            </motion.h2>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Estamos ubicados en el corazón de Armenia para atenderte. Contáctanos
              por WhatsApp o teléfono y con gusto agendaremos tu visita.
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              className={styles.cards}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {contactItems.map((item, i) => {
                const Tag = item.href ? "a" : "div";
                const linkProps = item.href
                  ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                  : {};

                return (
                  <Tag key={i} className={`glass-card ${styles.contactCard} ${item.href ? styles.contactCardLink : ""}`} {...(linkProps as never)}>
                    <div className={styles.cardIcon}>{item.icon}</div>
                    <div className={styles.cardText}>
                      <p className={styles.cardLabel}>{item.label}</p>
                      <p className={styles.cardValue}>{item.value}</p>
                      <p className={styles.cardDetail}>{item.detail}</p>
                    </div>
                  </Tag>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              className={styles.ctaGroup}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                id="contact-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-whatsapp ${styles.whatsappBtn}`}
              >
                <MessageCircle size={20} />
                Escribir por WhatsApp
              </a>
              <a href="tel:3143457474" className={`btn btn-outline ${styles.phoneBtn}`} id="contact-phone-btn">
                <Phone size={18} />
                Llamar: 314 345 7474
              </a>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            className={styles.mapCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3066!2d-75.6797!3d4.5339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38ff3c19f5b0c1%3A0x9e4f9e0cd7a2e0a!2sCarrera+12+%230N-20%2C+Armenia%2C+Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio Dr. Felipe Gómez Amaya en Armenia"
              />
            </div>
            <div className={styles.mapCaption}>
              <MapPin size={14} />
              Carrera 12 # 0N-20, Medisalud 805 — Armenia, Quindío
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
