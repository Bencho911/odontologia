"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Servicios", id: "servicios" },
  { label: "Casos", id: "casos" },
  { label: "El doctor", id: "doctor" },
  { label: "Consultorio", id: "clinica" },
  { label: "Contacto", id: "contacto" },
];

const WHATSAPP = "573143457474";
const WA_MSG = encodeURIComponent("Hola Dr. Felipe, me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?");
const WA_URL = `https://wa.me/${WHATSAPP}?text=${WA_MSG}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Borde bajo la barra al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sección activa: la que cruza la franja superior de la pantalla
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Esc cierra el menú móvil y devuelve el foco al botón
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo}>
          <Image src="/logo.jpg" alt="" width={48} height={26} sizes="48px" priority className={styles.logoImg} />
          <span className={styles.logoText}>
            <span className={styles.logoName}>Dr. Felipe Gómez Amaya</span>
            <span className={styles.logoSub}>Ortodoncia y ortopedia maxilar</span>
          </span>
        </a>

        <nav aria-label="Principal" className={styles.desktop}>
          <ul className={styles.links}>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`${styles.link} ${active === l.id ? styles.linkActive : ""}`}
                  aria-current={active === l.id ? "location" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+573143457474" className={styles.phone}>
            <Phone size={16} aria-hidden="true" /> 314 345 7474
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-accent ${styles.cta}`}>
            <MessageCircle size={18} aria-hidden="true" /> Agendar cita
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>

        <button
          id="menu-toggle"
          type="button"
          className={styles.ham}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <nav id="menu-movil" aria-label="Móvil" className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ""}`} hidden={!menuOpen}>
        <ul className="container">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={styles.mLink} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className={styles.mCta}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg" style={{ width: "100%" }}>
              <MessageCircle size={18} aria-hidden="true" /> Agendar por WhatsApp
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
