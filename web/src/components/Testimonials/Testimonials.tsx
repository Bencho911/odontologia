import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Testimonials.module.css";

// DEMO: opiniones ilustrativas. Reemplazar por reseñas reales (con permiso de cada paciente).
const reviews = [
  {
    name: "Camila R.",
    service: "Ortodoncia invisible",
    text: "Me explicaron todo el proceso desde la primera cita. El resultado de los alineadores es increíble y el doctor siempre fue puntual.",
  },
  {
    name: "Andrés M.",
    service: "Blanqueamiento dental",
    text: "Quedé muy satisfecho. El consultorio es moderno y el doctor explica cada paso con claridad.",
  },
  {
    name: "Valentina O.",
    service: "Ortodoncia convencional",
    text: "Llevo más de un año en tratamiento y la diferencia se nota. Resuelve todas mis dudas con paciencia.",
  },
];

export default function Testimonials() {
  return (
    <section id="opiniones" className="section" aria-labelledby="opiniones-title">
      <div className="container section-rule">
        <Reveal>
          <h2 id="opiniones-title">Lo que cuentan los pacientes</h2>
          <p className={styles.demo}>Demo · opiniones ilustrativas, no son de pacientes reales</p>
        </Reveal>

        <ul className={styles.grid}>
          {reviews.map((r, i) => (
            <li key={r.name} className={styles.item}>
              <Reveal delay={i * 0.1}>
                <figure className={styles.card}>
                  <Quote size={32} strokeWidth={1.5} className={styles.quote} aria-hidden="true" />
                  <blockquote>{r.text}</blockquote>
                  <figcaption>
                    <strong>{r.name}</strong>
                    <span>{r.service}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
