import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-4xl">Doozy Designs</p>
          <p className="mt-4 text-sm leading-7 text-[#2d4d4e] dark:text-[#d7efeb]/80">
            Premium interiors shaped by clean lines, tactile materials, and a disciplined sense of atmosphere.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.28em] text-[#2d4d4e] dark:text-[#d7efeb]/80">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
