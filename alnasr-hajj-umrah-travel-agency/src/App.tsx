import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import {
  Accomodation,
  Facilities,
  Gallery,
  Hero,
  Packages,
  Testimonials,
} from "./components/sections";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Packages />
        <Accomodation />
        <Facilities />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};
export default App;
