import Articles from "./components/Articles";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewArticles from "./components/NewArticles";

export default function App() {
  return (
    <h1 className="container">
      <Navbar />
      <main>
        <div className="lg:flex lg:gap-8 lg:h-[610px]">
          <HeroSection />
          <NewArticles />
        </div>

        <div>
          <Articles />
        </div>
      </main>
    </h1>
  );
}
