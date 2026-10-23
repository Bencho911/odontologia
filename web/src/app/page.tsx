import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Cases from "@/components/Cases/Cases";
import Doctor from "@/components/Doctor/Doctor";
import Clinic from "@/components/Clinic/Clinic";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQs from "@/components/FAQs/FAQs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1} style={{ outline: "none" }}>
        <Hero />
        <Services />
        <Cases />
        <Doctor />
        <Clinic />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
