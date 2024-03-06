import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
      </main>
    </>
  );
};
export default App;
