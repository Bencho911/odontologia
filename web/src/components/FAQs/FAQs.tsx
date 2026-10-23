import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./FAQs.module.css";

const faqs = [
  { q: "¿Cuánto tiempo dura un tratamiento de ortodoncia?", a: "Depende de cada caso. La ortodoncia convencional suele durar entre 12 y 24 meses, y la invisible puede ser más corta. En la primera cita el Dr. Felipe evalúa tu caso y te da un tiempo estimado." },
  { q: "¿Atienden con EPS o plan complementario?", a: "Atendemos consultas particulares. Algunos procedimientos pueden estar cubiertos en parte por tu EPS, según la entidad; te recomendamos preguntarle directamente antes de tu cita." },
  { q: "¿Cómo agendo mi primera cita?", a: "Escríbenos por WhatsApp al 314 345 7474 o usa el formulario de contacto de esta página. Atendemos de lunes a sábado, de 8 a. m. a 6 p. m." },
  { q: "¿El blanqueamiento dental daña el esmalte?", a: "Hecho en consultorio y con el protocolo correcto, el blanqueamiento profesional suele ser seguro para el esmalte. Antes de empezar, el Dr. Felipe evalúa si es adecuado para ti y define la concentración que necesitas." },
  { q: "¿La ortodoncia invisible es tan efectiva como los brackets?", a: "Depende de tu caso: en muchos casos leves y moderados los resultados son comparables. Para casos más complejos, el Dr. Felipe te recomendará la opción más efectiva para ti." },
];

/* <details> nativo: accesible por teclado y lector de pantalla sin JavaScript. Con `name`, abrir una pregunta cierra la otra. */
export default function FAQs() {
  return (
    <section id="preguntas" className={`section ${styles.section}`} aria-labelledby="preguntas-title">
      <div className={`container section-rule ${styles.wrap}`}>
        <Reveal>
          <h2 id="preguntas-title">Resuelve tus dudas</h2>
          <p className={`lead ${styles.lead}`}>Lo que más nos preguntan antes de empezar un tratamiento.</p>
        </Reveal>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className={styles.item} name="faq" open={i === 0}>
                <summary className={styles.question}>
                  <span>{f.q}</span>
                  <ChevronDown size={22} className={styles.chevron} aria-hidden="true" />
                </summary>
                <p className={styles.answer}>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
