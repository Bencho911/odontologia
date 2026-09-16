"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Inicio", href: "inicio" },
  { label: "Servicios", href: "servicios" },
  { label: "El Doctor", href: "doctor" },
  { label: "Clínica", href: "clinica" },
  { label: "Contacto", href: "contacto" },
];

const WHATSAPP = "573143457474";
const WA_MSG = encodeURIComponent("Hola Dr. Felipe! Me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const ids = navLinks.map(l => l.href);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => goto("inicio")}>
          <div className={styles.logoImgWrap}>
            <Image src="/logo.jpg" alt="Logo Dr. Felipe Gómez" width={44} height={44} style={{ objectFit: "contain" }} priority />
          </div>
          <div>
            <span className={styles.logoName}>Dr. Felipe Gómez A.</span>
            <span className={styles.logoSub}>Ortodoncista</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map(l => (
            <li key={l.href}>
              <button
                className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
                onClick={() => goto(l.href)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="tel:3143457474" className={styles.phone}><Phone size={15} /> 314 345 7474</a>
          <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className={`btn btn-blue ${styles.ctaBtn}`} id="navbar-cta">
            <MessageCircle size={16} /> Agendar Cita
          </a>
        </div>

        {/* Hamburger */}
        <button className={styles.ham} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <AnimatePresence mode="wait">
            {menuOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={22} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className={styles.mobile} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            {navLinks.map((l, i) => (
              <motion.button key={l.href} className={`${styles.mLink} ${active === l.href ? styles.mLinkActive : ""}`} onClick={() => goto(l.href)} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                {l.label}
              </motion.button>
            ))}
            <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ margin: "12px 20px 20px", justifyContent: "center" }}>
              <MessageCircle size={16} /> Agendar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
