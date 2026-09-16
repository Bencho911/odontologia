"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQs.module.css";

const faqs = [
  { q: "¿Cuánto tiempo dura un tratamiento de ortodoncia?", a: "El tiempo varía según cada caso. La ortodoncia convencional suele durar entre 12 y 24 meses, mientras que la invisible puede ser más corta. El Dr. Gómez evaluará tu caso en la primera cita para darte un tiempo estimado personalizado." },
  { q: "¿Atienden con EPS o plan complementario?", a: "Manejamos consultas particulares. Sin embargo, algunos procedimientos pueden ser cubiertos parcialmente por tu EPS dependiendo de la entidad. Te recomendamos consultar directamente con tu EPS antes de tu cita." },
  { q: "¿Cómo agendo mi primera cita?", a: "Puedes agendar tu cita por WhatsApp al 314 345 7474, o a través del formulario de contacto en nuestra página. Atendemos de lunes a sábado con horarios flexibles." },
  { q: "¿El blanqueamiento dental daña el esmalte?", a: "No, el blanqueamiento profesional realizado en el consultorio es seguro para el esmalte cuando se hace con los protocolos correctos. El Dr. Gómez utiliza productos de alta calidad y concentración adecuada para cada paciente." },
  { q: "¿La ortodoncia invisible es tan efectiva como la convencional?", a: "En la mayoría de los casos, sí. Los alineadores invisibles ofrecen resultados comparables a los brackets para casos leves y moderados. Para casos complejos, el Dr. Gómez te recomendará la opción más efectiva para ti." },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.span className="section-label" style={{ textAlign: "center" }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Sacate las dudas
          </motion.span>
          <motion.h2 className="section-title" style={{ textAlign: "center" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Preguntas Frecuentes
          </motion.h2>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <motion.div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)} id={`faq-${i}`}>
                <span>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={22} color="var(--blue)" />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div className={styles.answer}
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
