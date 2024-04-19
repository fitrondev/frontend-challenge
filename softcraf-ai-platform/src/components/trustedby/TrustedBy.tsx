import Marquee from "react-fast-marquee";

// images
import { companyLogo } from "@/constants/images";

export default function TrustedBy() {
  return (
    <section className="container py-3 lg:h-[200px] flex flex-col items-center justify-center gap-10">
      <div>
        <h3 className="text-2xl lg:text-4xl text-center lg:text-start">
          Trusted by industry-leading companies around the globe
        </h3>
      </div>

      <Marquee>
        {companyLogo.map((item, index) => (
          <div className="mx-5 lg:mx-16" key={index}>
            <img
              src={item.src}
              alt=""
              key={index}
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
