import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  Hero,
  Services,
  Featured,
  Discount,
  NewBooks,
  Join,
  Testimonials,
} from "./sections";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Featured />
        <Discount />
        <NewBooks />
        <Join />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};
export default App;
