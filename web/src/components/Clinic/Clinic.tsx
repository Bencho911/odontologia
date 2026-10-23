import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Clinic.module.css";

// Cinco escenas distintas en el mosaico (la recepción también abre la página, con otro encuadre). `tall` marca las fotos verticales.
const photos = [
  { src: "/clinica-recepcion.png", w: 721, h: 521, alt: "Recepción con mostrador de mármol y rótulo del Dr. Felipe Gómez Amaya", label: "Recepción" },
  { src: "/clinica-sillon.png", w: 721, h: 658, alt: "Unidad odontológica blanca con paredes de mármol y madera, vista desde la puerta", label: "Sala de atención" },
  { src: "/clinica-ventana.png", w: 744, h: 880, alt: "Instrumental de ortodoncia junto a una ventana con vista a las montañas", label: "Luz natural", tall: true },
  { src: "/clinica-estante.png", w: 744, h: 880, alt: "Estante de madera con detalles dorados, planta y lavamanos de piedra", label: "Detalles del espacio", tall: true },
  { src: "/clinica-estudio.png", w: 744, h: 880, alt: "Consultorio con la unidad odontológica, pantalla y luz de estudio para fotografiar los casos", label: "Luz de estudio", tall: true },
];

export default function Clinic() {
  return (
    <section id="clinica" className={`section ${styles.section}`} aria-labelledby="clinica-title">
      <div className="container section-rule">
        <Reveal>
          <h2 id="clinica-title">Un consultorio pensado para tu comodidad</h2>
          <p className={`lead ${styles.lead}`}>
            Mármol, madera y luz natural en Medisalud, consultorio 805, en Armenia.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {photos.map((p, i) => (
            <li key={p.src} className={`${styles.item} ${p.tall ? styles.tall : styles.wide}`}>
              <Reveal delay={(i % 3) * 0.08} className={styles.fill}>
                <figure className={styles.figure}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    sizes="(min-width: 64rem) 380px, (min-width: 40rem) 45vw, 92vw"
                    quality={82}
                    className={styles.img}
                  />
                  <figcaption>{p.label}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
