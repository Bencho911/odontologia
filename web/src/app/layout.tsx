import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Fuentes autoalojadas por next/font: sin peticiones a Google desde el navegador.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const TITLE = "Dr. Felipe Gómez Amaya | Ortodoncia y ortopedia maxilar en Armenia, Quindío";
const DESCRIPTION =
  "Consultorio del Dr. Felipe Gómez Amaya en Armenia, Quindío: ortodoncia convencional e invisible, ortopedia maxilar, blanqueamiento, diseño de sonrisa, endodoncia, rehabilitación oral y limpieza dental. Agenda tu cita: 314 345 7474.";

export const metadata: Metadata = {
  // Define NEXT_PUBLIC_SITE_URL con el dominio real al publicar (se usa para las imágenes de Open Graph).
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "ortodoncista Armenia, ortodoncia Armenia Quindío, ortopedia maxilar, ortodoncia invisible, diseño de sonrisa, blanqueamiento dental, endodoncia, Dr Felipe Gómez Amaya",
  authors: [{ name: "Dr. Felipe Gómez Amaya" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_CO",
    images: [{ url: "/clinica-recepcion.png", width: 721, height: 521, alt: "Recepción del consultorio del Dr. Felipe Gómez Amaya" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/clinica-recepcion.png"] },
};

export const viewport: Viewport = { themeColor: "#17415C" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Felipe Gómez Amaya",
  description: DESCRIPTION,
  medicalSpecialty: "Orthodontics",
  telephone: "+57 314 345 7474",
  email: "felipegomezamaya@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cra. 12 # 0N-20, Medisalud, consultorio 805",
    addressLocality: "Armenia",
    addressRegion: "Quindío",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: el script de abajo añade la clase `js` a <html> antes de hidratar.
    <html lang="es" className={`${bricolage.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        {/* La clase `js` activa el fundido por scroll; sin JavaScript todo el contenido se ve desde el inicio */}
        {/* Seguro: si el JavaScript no llega a hidratar en 4 s (data-ready lo pone Reveal), se quita `js` y todo se muestra */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!d.hasAttribute('data-ready'))d.classList.remove('js')},4000)",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
