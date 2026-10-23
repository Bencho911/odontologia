"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Fundido al entrar en pantalla. Solo opacidad (sin desplazamiento) y se omite si la
 * persona pidió reducir el movimiento. Sustituye las animaciones sueltas de cada sección.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
