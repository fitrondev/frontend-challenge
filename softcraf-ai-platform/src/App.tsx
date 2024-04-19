import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/trustedby/TrustedBy";
import HeroTwo from "@/components/hero/HeroTwo";
import Discover from "@/components/discover/Discover";
import Featured from "@/components/featured/Featured";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <HeroTwo />
        <Discover />
        <Featured />
        <About />
      </main>
      <Footer />
    </>
  );
}
