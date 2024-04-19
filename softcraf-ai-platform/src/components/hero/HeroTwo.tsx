import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HeroTwo() {
  return (
    <section className="container py-12 lg:py-24 flex flex-col-reverse lg:flex-row lg:items-center gap-10">
      <Card className="lg:w-2/5">
        <CardContent className="w-full h-full py-6 px-2 flex flex-col sm:items-center lg:items-start justify-center gap-5">
          <div className="inline-flex items-center gap-4 font-inter text-sm">
            <div>
              <CheckCircle className="text-primary size-6" />
            </div>
            <p>Unleash your creativity and bring ideas to life.</p>
          </div>

          <div className="inline-flex items-center gap-4 font-inter text-sm">
            <div>
              <CheckCircle className="text-primary size-6" />
            </div>
            <p>Accelerate your development process and save valuable time.</p>
          </div>

          <div className="inline-flex items-center gap-4 font-inter text-sm">
            <div>
              <CheckCircle className="text-primary size-6" />
            </div>
            <p>
              Deliver exceptional user experiences with AI-powered solutions.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="lg:w-3/5 space-y-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl">
          Unlock the Power of AI with SoftCraft's Cutting-Edge Features
        </h1>

        <p className="text-sm sm:text-base font-inter lg:w-[500px]">
          Experience seamless software creation with SoftCraft's innovative
          technology. Our AI-driven platform simplifies complex processes,
          empowering you to bring your ideas to life.
        </p>

        <div>
          <Button variant={"outline"}>See More</Button>
        </div>
      </div>
    </section>
  );
}
