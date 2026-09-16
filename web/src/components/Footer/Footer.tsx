"use client";

import { MessageCircle, Phone, MapPin, Instagram, Share2 } from "lucide-react";
import styles from "./Footer.module.css";

const WHATSAPP_NUMBER = "573143457474";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Dr. Felipe! Me gustaría agendar una cita."
);

const services = [
  "Ortodoncia Convencional",
  "Ortodoncia Invisible",
  "Blanqueamiento Dental",
  "Diseño de Sonrisa",
  "Endodoncia",
  "Rehabilitación Oral",
  "Limpieza Dental",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.bannerContent}>
            <div>
              <h3 className={styles.bannerTitle}>¿Listo para transformar tu sonrisa?</h3>
              <p className={styles.bannerSub}>
                Contáctanos hoy y agenda tu primera cita con el Dr. Felipe Gómez Amaya.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="footer-whatsapp-btn"
            >
              <MessageCircle size={18} />
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                  <path d="M16 4C16 4 8 8 8 16C8 20 10 23 13 25C13 25 13 28 16 28C19 28 19 25 19 25C22 23 24 20 24 16C24 8 16 4 16 4Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M13 17C13 17 14 19 16 19C18 19 19 17 19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className={styles.brandName}>Dr. Felipe Gómez Amaya</h4>
              <p className={styles.brandTagline}>Odontología Especializada</p>
              <p className={styles.brandDesc}>
                Comprometidos con tu salud bucal y la mejor sonrisa, utilizando
                tecnología de vanguardia con un trato cálido y personalizado.
              </p>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink} aria-label="Instagram" id="footer-instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook" id="footer-facebook">
                  <Share2 size={18} />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                  id="footer-social-whatsapp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className={styles.colTitle}>Servicios</h5>
              <ul className={styles.list}>
                {services.map((s) => (
                  <li key={s}>
                    <button
                      className={styles.listLink}
                      onClick={() =>
                        document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className={styles.colTitle}>Contacto</h5>
              <ul className={styles.contactList}>
                <li>
                  <a href="tel:3143457474" className={styles.contactItem}>
                    <Phone size={15} />
                    314 345 7474
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Carrera+12+0N-20+Medisalud+Armenia+Quindio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                  >
                    <MapPin size={15} />
                    <span>Cra. 12 # 0N-20, Medisalud 805<br />Armenia, Quindío</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © {new Date().getFullYear()} Dr. Felipe Gómez Amaya · Odontología Especializada · Armenia, Quindío
          </p>
        </div>
      </div>
    </footer>
  );
}
