"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "El Doctor", href: "#doctor" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_NUMBER = "573143457474";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Dr. Felipe! Me gustaría agendar una cita. ¿Cuándo tiene disponibilidad?"
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["inicio", "servicios", "doctor", "contacto"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          className={styles.logo}
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
        >
          <div className={styles.logoIcon}>
            <Image
              src="/logo.jpg"
              alt="Logo Dr. Felipe Gómez Amaya - Ortodoncista"
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Dr. Felipe Gómez</span>
            <span className={styles.logoSub}>Ortodoncista</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${activeSection === link.href.replace("#", "") ? styles.linkActive : ""}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <a
            href={`tel:3143457474`}
            className={styles.phoneLink}
            aria-label="Llamar al consultorio"
          >
            <Phone size={16} />
            <span>314 345 7474</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="navbar-cta"
          >
            Agendar Cita
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    className={`${styles.mobileLink} ${activeSection === link.href.replace("#", "") ? styles.mobileLinkActive : ""}`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className={styles.mobileActions}>
              <a href={`tel:3143457474`} className={styles.mobilePhone}>
                <Phone size={16} /> 314 345 7474
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Agendar Cita por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
