import Service1 from "../../assets/images/Service1.jpg";
import Service2 from "../../assets/images/Service2.jpg";

const Services = () => {
  return (
    <section>
      <div className="container space-y-[90px]">
        <div>
          <h1 className="text-[18px] font-bold uppercase tracking-[9.5%] text-primary">
            Services
          </h1>

          <h2 className="text-[48px] leading-[65px] text-black font-extrabold">
            • The Services for You
          </h2>
        </div>

        <div className="flex justify-between">
          <div className="shadow-xl">
            <img
              src={Service1}
              alt=""
              className="w-[600px] h-[400px] object-cover rounded-xl"
            />
          </div>

          <div className="w-[411px] h-[345px] space-y-[40px]">
            <h3 className="text-[32px] leading-9 font-medium">
              <span className="text-primary">Rent</span> your favorite book
              fairly easy on <span className="text-primary">Lidia</span>!
            </h3>

            <div className="space-y-8 font-medium">
              <p>
                Viewing, rent, and organize your favorite books has never been
                easier. An integrated digital library rent that’s simple to use,
                Lidia lets you spend less time managing your work and more time
                actually doing it!
              </p>

              <p>
                Effortless rentals, personalized shelves—Lidia transforms book
                management, enhancing your reading experience~
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between">
          <div className="shadow-xl">
            <img
              src={Service2}
              alt=""
              className="w-[600px] h-[400px] object-cover rounded-xl"
            />
          </div>

          <div className="w-[411px] h-[345px] space-y-[40px]">
            <h3 className="text-[32px] leading-9 font-medium">
              <span className="text-primary">Rent</span> your favorite book
              fairly easy on <span className="text-primary">Lidia</span>!
            </h3>

            <div className="space-y-8 font-medium">
              <p>
                Viewing, rent, and organize your favorite books has never been
                easier. An integrated digital library rent that’s simple to use,
                Lidia lets you spend less time managing your work and more time
                actually doing it!
              </p>

              <p>
                Effortless rentals, personalized shelves—Lidia transforms book
                management, enhancing your reading experience~
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
