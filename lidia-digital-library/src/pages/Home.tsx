import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Location from "../components/location/Location";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Reviews />
      <Location />
    </div>
  );
};
export default Home;
