import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Doctor from "@/components/Doctor/Doctor";
import Clinic from "@/components/Clinic/Clinic";
import FAQs from "@/components/FAQs/FAQs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Doctor />
        <Clinic />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
