const Location = () => {
  return (
    <section className="pb-[200px]">
      <div className="container space-y-[90px]">
        <div>
          <h1 className="text-[18px] font-bold uppercase tracking-[9.5%] text-primary">
            Location
          </h1>

          <h2 className="text-[48px] leading-[65px] text-black font-extrabold">
            • Our Library Location
          </h2>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5785311927802!2d116.27243757391709!3d-8.636396587806972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb7fbd39a41db%3A0xe0a45048d9e233ac!2sMasjid%20Nurul%20Iman%20Lendang%20Gocek!5e0!3m2!1sid!2sid!4v1710125166692!5m2!1sid!2sid"
            style={{ border: "0" }}
            loading="lazy"
            className="w-full h-[400px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Location;
