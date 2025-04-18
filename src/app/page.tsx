import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
import Portfolio from "@/components/pages/Portfolio";
import Tales from "@/components/pages/Tales";
import WhatsappButton from "@/components/ui/WhatsappFloatIcon";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Portfolio />
      <Tales />
      <About />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
