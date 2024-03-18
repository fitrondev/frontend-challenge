import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 lg:items-end lg:justify-end">
          <h1 className="lg:w-[825px] text-[28px] leading-8 lg:text-[55px] font-bold lg:leading-[70px] text-center lg:text-end">
            Testimonials from our customers
          </h1>

          <p className="lg:w-[640px] lg:text-[24px] font-semibold lg:leading-8 text-center lg:text-end">
            We have 100.000+ customers, here are our customer testimonials
          </p>
        </div>

        <TestimonialsCard />
      </div>
    </section>
  );
};
export default Testimonials;
