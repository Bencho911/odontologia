import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Felipe Gómez Amaya | Odontología Especializada en Armenia, Quindío",
  description:
    "Consultorio odontológico del Dr. Felipe Gómez Amaya en Armenia, Quindío. Servicios de ortodoncia convencional e invisible, blanqueamiento dental, diseño de sonrisa, endodoncia, rehabilitación oral y limpieza dental. Agenda tu cita: 314-345-7474.",
  keywords:
    "odontólogo Armenia, dentista Armenia Quindío, ortodoncia Armenia, diseño de sonrisa Armenia, blanqueamiento dental Armenia, endodoncia Armenia, Dr Felipe Gómez",
  authors: [{ name: "Dr. Felipe Gómez Amaya" }],
  openGraph: {
    title: "Dr. Felipe Gómez Amaya | Odontología Especializada",
    description:
      "Tu sonrisa es nuestra especialidad. Odontología de alta calidad en Armenia, Quindío.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
