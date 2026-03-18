import { Link } from "react-router-dom";
import { Icon } from "./Icons";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/256200956455?text=Hello%20Doozy%20Designs",
    icon: "whatsapp"
  },
  {
    label: "Instagram",
    href: "#",
    icon: "instagram"
  },
  {
    label: "Facebook",
    href: "#",
    icon: "facebook"
  }
];

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-4xl">Doozy Designs</p>
          <p className="mt-4 text-sm leading-7 text-[#2d4d4e] dark:text-[#d7efeb]/80">
            Premium interiors shaped by clean lines, tactile materials, and a disciplined sense of atmosphere.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href === "#" ? undefined : "_blank"}
                rel={item.href === "#" ? undefined : "noreferrer"}
                className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2d4d4e] transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-deepteal dark:border-white/10 dark:bg-white/5 dark:text-[#d7efeb]/80"
              >
                <Icon name={item.icon} className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
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
