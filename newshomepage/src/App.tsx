import Articles from "./components/Articles";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";

export default function App() {
  return (
    <h1 className="container">
      <Navbar />
      <div>
        <HeroSection />
        <NewsSection />
      </div>

      <div>
        <Articles />
      </div>
    </h1>
  );
}
