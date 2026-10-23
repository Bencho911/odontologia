"use client";
import { useEffect, useRef } from "react";

/**
 * Fundido al entrar en pantalla, solo con CSS + IntersectionObserver (sin librerías).
 * - Solo opacidad (sin desplazamiento).
 * - Sin JavaScript el contenido se ve igual: el estado inicial oculto solo existe bajo `.js` (ver layout).
 * - Con prefers-reduced-motion no hay fundido (ver globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-ready", ""); // avisa al seguro del <head> de que hubo hidratación
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}>
      {children}
    </div>
  );
}
