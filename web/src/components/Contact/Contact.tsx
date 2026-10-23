"use client";
import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle, Clock, CircleAlert, Send } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

const WHATSAPP = "573143457474";

type Form = { nombre: string; email: string; telefono: string; problema: string };
type Errors = Partial<Record<keyof Form, string>>;

const fields = [
  { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre completo", autoComplete: "name" },
  { name: "email", label: "Correo", type: "email", placeholder: "tucorreo@ejemplo.com", autoComplete: "email" },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "300 000 0000", autoComplete: "tel" },
] as const;

function validate(f: Form): Errors {
  const e: Errors = {};
  if (f.nombre.trim().length < 3) e.nombre = "Escribe tu nombre completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Revisa el formato del correo.";
  const digits = f.telefono.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) e.telefono = "Ingresa un teléfono válido (7 a 15 dígitos).";
  return e;
}

export default function Contact() {
  const [form, setForm] = useState<Form>({ nombre: "", email: "", telefono: "", problema: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Form]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    const msg = encodeURIComponent(
      `Hola Dr. Felipe, me pongo en contacto desde la web.\n\n` +
        `*Nombre:* ${form.nombre}\n` +
        `*Correo:* ${form.email}\n` +
        `*Teléfono:* ${form.telefono}\n` +
        `*Consulta:* ${form.problema || "—"}`,
    );
    const url = `https://wa.me/${WHATSAPP}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(url);
  };

  return (
    <section id="contacto" className={`section on-dark ${styles.section}`} aria-labelledby="contacto-title">
      <div className={`container section-rule ${styles.grid}`}>
        <Reveal>
          <h2 id="contacto-title" className={styles.title}>Agenda tu cita</h2>
          <p className={styles.lead}>Cuéntanos qué necesitas y te respondemos por WhatsApp para coordinar tu valoración.</p>

          <ul className={styles.items}>
            <li>
              <span className={styles.label}><MessageCircle size={18} aria-hidden="true" /> WhatsApp</span>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className={styles.value}>
                +57 314 345 7474<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <span className={styles.label}><Phone size={18} aria-hidden="true" /> Llamadas</span>
              <a href="tel:+573143457474" className={styles.value}>314 345 7474</a>
            </li>
            <li>
              <span className={styles.label}><Mail size={18} aria-hidden="true" /> Correo</span>
              <a href="mailto:felipegomezamaya@gmail.com" className={styles.value}>felipegomezamaya@gmail.com</a>
            </li>
            <li>
              <span className={styles.label}><MapPin size={18} aria-hidden="true" /> Consultorio</span>
              <a
                href="https://maps.google.com/?q=Carrera+12+0N-20+Medisalud+Armenia+Quindio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.value}
              >
                Cra. 12 # 0N-20, Medisalud 805<br />Armenia, Quindío
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
              <span className={styles.sub}><Clock size={14} aria-hidden="true" /> Lunes a sábado · 8 a. m. – 6 p. m.</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={`${styles.card} on-light`}>
            <h3 className={styles.formTitle}>Completa tus datos</h3>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {fields.map((f) => {
                const err = errors[f.name];
                return (
                  <div key={f.name} className={styles.field}>
                    <label htmlFor={`contact-${f.name}`} className={styles.fieldLabel}>{f.label}</label>
                    <input
                      id={`contact-${f.name}`}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      autoComplete={f.autoComplete}
                      value={form[f.name]}
                      onChange={handleChange}
                      className={styles.input}
                      required
                      aria-invalid={err ? true : undefined}
                      aria-describedby={err ? `contact-${f.name}-error` : undefined}
                    />
                    <p id={`contact-${f.name}-error`} className={styles.error} aria-live="polite">{err}</p>
                  </div>
                );
              })}

              <div className={styles.field}>
                <label htmlFor="contact-problema" className={styles.fieldLabel}>
                  Motivo de la cita <span className={styles.optional}>(opcional)</span>
                </label>
                <textarea
                  id="contact-problema"
                  name="problema"
                  placeholder="Cuéntanos brevemente qué necesitas"
                  value={form.problema}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                />
              </div>

              <button type="submit" className={`btn btn-primary btn-lg ${styles.submit}`}>
                <Send size={18} aria-hidden="true" /> Enviar por WhatsApp
              </button>

              <div role="status" className={styles.status}>
                {sent && (
                  <p>
                    Abrimos WhatsApp con tu mensaje. Si no se abrió,{" "}
                    <a href={sent} target="_blank" rel="noopener noreferrer">toca aquí para continuar</a>.
                  </p>
                )}
                {Object.keys(errors).length > 0 && (
                  <p className={styles.errorSummary}>
                    <CircleAlert size={16} aria-hidden="true" /> Revisa los campos marcados.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
