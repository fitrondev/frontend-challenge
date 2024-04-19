// images
import { Chart, HeroImg } from "@/constants/images";

// ui
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="container py-5 sm:pt-0 sm:pb-5 lg:py-0 h-[calc(100vh-64px)] flex flex-col lg:flex-row justify-between">
      <div className="lg:w-2/5 h-full flex flex-col justify-center gap-8">
        <h1 className="text-4xl sm:text-6xl">
          Discover the Power of SoftCraft's{" "}
          <span className="text-primary">AI Plaftform</span>
        </h1>

        <p className="font-inter">
          Experience the versatility and ease of use with SoftCraft's
          cutting-edge AI-driven platform. Unlock the potential of AI technology
          for software creation.
        </p>

        <div className="">
          <Button>Get 14 days free trial</Button>
        </div>
      </div>

      <div className="relative lg:w-3/5 h-full flex flex-col items-center lg:items-end justify-center">
        <div>
          <img
            src={HeroImg}
            alt=""
            className="w-full h-full lg:w-[590px] lg:h-[520px] object-cover rounded"
          />
        </div>

        <Card className="hidden lg:block font-inter absolute w-[312px] left-0 bottom-28">
          <CardHeader>
            <CardTitle className="text-lg">Total Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <div className="flex-1 space-y-2">
              <h3 className="text-3xl font-bold">220</h3>

              <p className="text-xs text-gray-500">120 Men</p>
              <p className="text-xs text-gray-500">95 Women</p>
            </div>

            <div className="flex-1">
              <img src={Chart} alt="" className="w-full h-[80px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
