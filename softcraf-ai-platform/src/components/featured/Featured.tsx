import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FeaturedImg } from "@/constants/images";
import { Leaf, Magnet, Waypoints } from "lucide-react";

export default function Featured() {
  return (
    <section className="container py-10 lg:py-24 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-52">
      <div className="flex-1">
        <img src={FeaturedImg} alt="" />
      </div>

      <div className="flex-1">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="pb-1">
            <div>
              <Leaf className="text-primary size-6" />
            </div>
            <CardTitle className="text-3xl font-light tracking-wide">
              Unlock Powerful Features Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter">
              Discover the core functionalities of SoftCraft and unleash the
              potential of AI-driven software creation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="pb-1">
            <div>
              <Magnet className="text-primary size-6" />
            </div>
            <CardTitle className="text-3xl font-light tracking-wide">
              Streamline Your Workflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter">
              Experience seamless integration and innovative iconography that
              simplifies software development.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="pb-1">
            <div>
              <Waypoints className="text-primary size-6" />
            </div>
            <CardTitle className="text-3xl font-light tracking-wide">
              Unleash Your Creativity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter">
              Embrace dynamic graphics and unleash your creativity with
              SoftCraft's AI-powered platform.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
