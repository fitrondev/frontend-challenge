import { AboutImg } from "@/constants/images";

export default function About() {
  return (
    <section className="bg-background py-24">
      <div className="container space-y-10">
        <div>
          <img
            src={AboutImg}
            alt=""
            className="w-full lg:h-[570px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-0">
          <h1 className="lg:flex-1 text-3xl sm:text-5xl text-primary">
            Unlock the Power of AI-
            <br />
            Driven Software Creation <br /> with SoftCraft
          </h1>
          <p className="lg:flex-1 text-sm sm:text-base font-inter">
            SoftCraft is a cutting-edge platform that combines the latest
            advancements in artificial intelligence with user-friendly features,
            making it easy for businesses of all sizes to develop innovative
            software solutions. With SoftCraft, you can bring your ideas to life
            and stay ahead in the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
