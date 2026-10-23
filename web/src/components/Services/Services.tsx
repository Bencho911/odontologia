import { Smile, Sparkles, Zap, Star, Shield, Heart, Droplets, Ruler } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Services.module.css";

const services = [
  { id: "ortodoncia-conv", icon: Smile, title: "Ortodoncia convencional", specialty: true, desc: "Corrección de la alineación dental y de la mordida con brackets metálicos o de zafiro, con resultados duraderos." },
  { id: "ortodoncia-inv", icon: Sparkles, title: "Ortodoncia invisible", specialty: true, desc: "Alineadores transparentes hechos a tu medida que corrigen tus dientes sin brackets ni alambres a la vista." },
  { id: "ortopedia-maxilar", icon: Ruler, title: "Ortopedia maxilar", specialty: true, desc: "Guía el crecimiento de los maxilares en niños y adolescentes para lograr una mordida armónica." },
  { id: "diseno-sonrisa", icon: Star, title: "Diseño de sonrisa", desc: "Planificación estética personalizada que combina varios tratamientos para lograr la sonrisa que quieres." },
  { id: "blanqueamiento", icon: Zap, title: "Blanqueamiento dental", desc: "Tratamiento profesional que elimina manchas y decoloración y devuelve la blancura natural de tu sonrisa." },
  { id: "endodoncia", icon: Shield, title: "Endodoncia", desc: "Tratamiento del nervio dental para salvar dientes comprometidos y quitar el dolor con precisión." },
  { id: "rehab-oral", icon: Heart, title: "Rehabilitación oral", desc: "Restauración de la función y de la estética con coronas, puentes y prótesis dentales." },
  { id: "limpieza", icon: Droplets, title: "Limpieza dental", desc: "Profilaxis profesional que elimina placa, sarro y bacterias para prevenir caries y problemas de encías." },
];

export default function Services() {
  return (
    <section id="servicios" className="section" aria-labelledby="servicios-title">
      <div className="container section-rule">
        <Reveal>
          <h2 id="servicios-title">Tratamientos para cada necesidad</h2>
          <p className={`lead ${styles.lead}`}>
            Ortodoncia y ortopedia maxilar son la especialidad del Dr. Felipe. Además, cuidamos el resto de tu salud oral.
          </p>
        </Reveal>

        <ul className={styles.list}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.id} id={s.id} className={styles.item}>
                <Reveal delay={(i % 2) * 0.08}>
                  <div className={styles.row}>
                    <span className={styles.icon}><Icon size={28} strokeWidth={1.6} aria-hidden="true" /></span>
                    <div>
                      <div className={styles.titleRow}>
                        <h3>{s.title}</h3>
                        {s.specialty && <span className={styles.tag}>Especialidad</span>}
                      </div>
                      <p className={styles.desc}>{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
