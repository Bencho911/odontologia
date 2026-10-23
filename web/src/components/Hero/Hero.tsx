import Image from "next/image";
import { MessageCircle, Phone, Check, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

const WHATSAPP = "573143457474";
const WA_MSG = encodeURIComponent("Hola Dr. Felipe, me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?");

const facts = [
  "Ortodoncia convencional e invisible",
  "Ortopedia maxilar en niños y adolescentes",
  "Diseño de sonrisa y rehabilitación oral",
];

/* Componente de servidor: se ve aunque falle el JavaScript y la foto principal carga con prioridad. */
export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h1 id="hero-title" className="hero-rise" style={{ "--d": "0ms" } as React.CSSProperties}>
            Ortodoncia que cuida tu sonrisa y tu mordida.
          </h1>

          <p className={`lead hero-rise ${styles.sub}`} style={{ "--d": "120ms" } as React.CSSProperties}>
            Con el Dr. Felipe Gómez Amaya, ortodoncista en Armenia, Quindío: alineadores y brackets, ortopedia maxilar y diseño de sonrisa, en un consultorio moderno y tranquilo.
          </p>

          <div className={`${styles.actions} hero-rise`} style={{ "--d": "220ms" } as React.CSSProperties}>
            <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              <MessageCircle size={20} aria-hidden="true" /> Agendar por WhatsApp
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
            <a href="tel:+573143457474" className="btn btn-outline btn-lg">
              <Phone size={18} aria-hidden="true" /> Llamar ahora
            </a>
          </div>

          <ul className={`${styles.facts} hero-rise`} style={{ "--d": "320ms" } as React.CSSProperties}>
            {facts.map((f) => (
              <li key={f}>
                <span className={styles.tick} aria-hidden="true"><Check size={14} strokeWidth={3} /></span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <div className={`${styles.photo} hero-wipe`}>
            <Image
              src="/clinica-recepcion.png"
              alt="Recepción del consultorio del Dr. Felipe Gómez Amaya: mostrador de mármol, rótulo con su nombre y pasillo iluminado"
              fill
              preload
              sizes="(min-width: 64rem) 520px, 92vw"
              quality={85}
              className={styles.img}
            />
          </div>
          <div className={styles.badge}>
            <MapPin size={18} aria-hidden="true" />
            <p>
              <strong>Medisalud, consultorio 805</strong>
              <span>Armenia, Quindío</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
