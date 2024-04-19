import { D1, D2, D3 } from "@/constants/images";
import DiscoverCard from "./DiscoverCard";

export default function Discover() {
  return (
    <section className="container py-10 lg:py-24 space-y-10">
      <div className="flex items-center justify-center">
        <h1 className="lg:w-[500px] text-3xl md:text-5xl text-center">
          Discover the Power of SoftCraft: A Step-by-step Software Creation
          Process
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-7">
        <DiscoverCard
          img={D1}
          title="Simplify Complex Concepts with SoftCraft's Interactive Elements"
          description="SoftCraft's innovative platform simplifies the software creation process, making it accessible to all users."
        />

        <DiscoverCard
          img={D2}
          title="Enhance User Comprehension with SoftCraft's Interactive Animations"
          description="SoftCraft's interactive elements and animations simplify complex concepts, ensuring a seamless user experience."
        />

        <DiscoverCard
          img={D3}
          title="Unlock the Potential of SoftCraft: Simplify Software Creation"
          description="SoftCraft empowers users to simplify the software creation process, unlocking their full potential."
        />
      </div>
    </section>
  );
}
