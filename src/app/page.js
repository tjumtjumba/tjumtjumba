import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Artists from "@/components/Artists/Artists";
import Events from "@/components/Events/Events";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Spacer />
        <About />
        <Spacer />
        <Artists />
        <Spacer />
        <Events />
        <Spacer />
        <Contact />
        <Spacer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function Spacer() {
  return <div className="block h-[80px] md:h-[100px] lg:h-[120px]" />;
}
