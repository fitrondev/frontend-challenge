const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-primary py-6 text-white">
      <div className="container text-center text-[18px] font-medium">
        &copy;{date} Lidia. All Rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
