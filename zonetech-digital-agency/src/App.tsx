import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurServices />
      </main>
    </>
  );
};
export default App;
