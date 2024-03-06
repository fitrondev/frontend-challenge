import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testomonials";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurServices />
        <Testimonials />
      </main>
    </>
  );
};
export default App;
