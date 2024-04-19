import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary py-5 text-white font-inter">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="hidden lg:inline-flex gap-4">
          <p> &copy; {year} Softcraft Technologies. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2">
          <p>Follow us on social media : </p>
          <div className="inline-flex gap-2">
            <div className="p-1 bg-background rounded-full hover:bg-background/80">
              <Instagram className="size-6 text-primary" />
            </div>

            <div className="p-1 bg-background rounded-full hover:bg-background/80">
              <Twitter className="size-6 c text-primary" />
            </div>

            <div className="p-1 bg-background rounded-full hover:bg-background/80">
              <Facebook className="size-6  text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
