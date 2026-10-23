import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Doctor.module.css";

export default function Doctor() {
  return (
    <section id="doctor" className="section" aria-labelledby="doctor-title">
      <div className={`container section-rule ${styles.grid}`}>
        <Reveal className={styles.photoCol}>
          {/* La foto es de cuerpo entero: se recorta desde la cabeza hasta las rodillas para que el rostro se vea */}
          <div className={styles.photoWrap}>
            <Image
              src="/doctor-felipe.jpeg"
              alt="El Dr. Felipe Gómez Amaya con uniforme azul de trabajo"
              fill
              sizes="(min-width: 64rem) 320px, 80vw"
              quality={88}
              className={styles.photo}
            />
          </div>
        </Reveal>

        <div className={styles.text}>
          <Reveal>
            <h2 id="doctor-title">Dr. Felipe Gómez Amaya</h2>
            <p className={styles.role}>Ortodoncia y ortopedia maxilar</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={styles.content}>
              <p>
                Odontólogo especialista en ortodoncia y ortopedia maxilar, dedicado a que cada paciente termine su tratamiento con una sonrisa y una mordida que funcionen bien y se vean naturales.
              </p>
              <p>
                Atiende en Armenia, Quindío, con una forma de trabajo sencilla: primero evalúa tu caso, luego te explica las opciones con claridad y acuerda contigo el plan, los tiempos y el seguimiento.
              </p>
              <p>
                Su meta es que te sientas cómodo y seguro desde la primera cita, con tratamientos personalizados y tecnología actual.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
