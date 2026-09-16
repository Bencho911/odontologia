"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import styles from "./Contact.module.css";

const WHATSAPP = "573143457474";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", problema: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Dr. Felipe! Me pongo en contacto desde la web.\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Email:* ${form.email}\n` +
      `*Teléfono:* ${form.telefono}\n` +
      `*Consulta:* ${form.problema}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — info */}
          <div className={styles.info}>
            <div className={styles.infoHeader}>
              <motion.span className="section-label" style={{ color: "rgba(212,228,244,0.9)" }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Saca un turno
              </motion.span>
              <motion.h2 className={styles.infoTitle} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Contacto
              </motion.h2>
            </div>

            <div className={styles.contactItems}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}><Mail size={16} /> Escríbenos al Mail</span>
                <a href="mailto:felipegomezamaya@gmail.com" className={styles.contactValue}>felipegomezamaya@gmail.com</a>
              </div>
              <div className={styles.divider} />
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}><MessageCircle size={16} /> Chatea con Nosotros</span>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className={styles.contactValue}>+57 314 345 7474</a>
              </div>
              <div className={styles.divider} />
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}><Phone size={16} /> Llámanos</span>
                <a href="tel:3143457474" className={styles.contactValue}>314 345 7474</a>
              </div>
              <div className={styles.divider} />
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}><MapPin size={16} /> Visítanos</span>
                <a
                  href="https://maps.google.com/?q=Carrera+12+0N-20+Medisalud+Armenia+Quindio"
                  target="_blank" rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  Cra. 12 # 0N-20, Medisalud 805<br />Armenia, Quindío
                </a>
                <span className={styles.contactSub}><Clock size={13} /> Lunes a Sábado · 8am – 6pm</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.div className={styles.formCard} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className={styles.formTitle}>Ponete en contacto para coordinar un turno</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              {[
                { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
                { name: "email", label: "Email", type: "email", placeholder: "tu@email.com" },
                { name: "telefono", label: "Teléfono", type: "tel", placeholder: "+57 300 000 0000" },
              ].map(f => (
                <div key={f.name} className={styles.field}>
                  <label className={styles.fieldLabel}>{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    id={`contact-${f.name}`}
                  />
                </div>
              ))}
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Consulta o motivo</label>
                <textarea
                  name="problema"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  value={form.problema}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                  id="contact-problema"
                />
              </div>
              <button type="submit" className={`btn btn-white ${styles.submit}`} id="contact-submit">
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Clinic photo strip */}
      <div className={styles.photoStrip}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/clinica.jpg" alt="Consultorio Dr. Felipe Gómez" />
      </div>
    </section>
  );
}
