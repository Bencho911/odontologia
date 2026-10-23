import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Cases.module.css";

/*
 * Casos del portafolio del Dr. Felipe (las fotos llevan su marca de agua).
 * Antes de publicar casos reales hace falta el consentimiento por escrito de cada paciente.
 */
const cases = [
  {
    src: "/caso-sonrisa.png", w: 957, h: 807,
    alt: "Primer plano de una sonrisa con dientes alineados y claros, con la firma del Dr. Felipe Gómez Amaya",
    title: "Sonrisa alineada",
    text: "Alineación, forma y color armonizados con los labios y el rostro.",
  },
  {
    src: "/caso-alineador.png", w: 876, h: 667,
    alt: "Alineador transparente fabricado a medida sobre fondo blanco, con la marca del Dr. Felipe Gómez Amaya",
    title: "Alineadores a tu medida",
    text: "Cada paso del tratamiento se planifica y se fabrica para tu boca.",
  },
  {
    src: "/caso-detalle.png", w: 960, h: 547,
    alt: "Detalle de dientes frontales en tratamiento, comparados con dientes claros en la arcada inferior",
    title: "Control del detalle",
    text: "Seguimos el tono, la forma y la posición de cada diente.",
  },
];

export default function Cases() {
  return (
    <section id="casos" className={`section ${styles.section}`} aria-labelledby="casos-title">
      <div className="container section-rule">
        <Reveal>
          <h2 id="casos-title">Resultados que se ven en detalle</h2>
          <p className={`lead ${styles.lead}`}>Una muestra del trabajo del Dr. Felipe: de la planificación al resultado final.</p>
        </Reveal>

        <ul className={styles.grid}>
          {cases.map((c, i) => (
            <li key={c.src} className={i === 0 ? styles.big : styles.small}>
              <Reveal delay={i * 0.1} className={styles.fill}>
                <figure className={styles.figure}>
                  <div className={styles.frame}>
                    <Image
                      src={c.src}
                      alt={c.alt}
                      width={c.w}
                      height={c.h}
                      sizes={i === 0 ? "(min-width: 64rem) 640px, 92vw" : "(min-width: 64rem) 400px, 92vw"}
                      quality={85}
                      className={styles.img}
                    />
                  </div>
                  <figcaption>
                    <strong>{c.title}</strong>
                    <span>{c.text}</span>
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
