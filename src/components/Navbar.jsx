import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Icon } from "./Icons";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" }
];

function Navbar({ isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
      <div
        className={`shell flex items-center justify-between rounded-full px-6 py-4 transition-all duration-500 ${
          isScrolled ? "glass-panel max-w-6xl shadow-luxe" : "max-w-7xl bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-gold/70 bg-gradient-to-br from-gold/40 via-deepteal/15 to-transparent" />
          <div>
            <p className="font-display text-3xl leading-none tracking-[0.18em]">D</p>
            <p className="text-[10px] uppercase tracking-[0.44em] text-[#2d4d4e] dark:text-[#d7efeb]/75">
              Doozy Designs
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <Link to="/contact" className="button-primary">
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#f6efe5]/95 backdrop-blur-2xl transition duration-300 dark:bg-[#0b0b0b]/95 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="shell flex min-h-screen flex-col justify-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-5xl tracking-wide"
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="button-primary mt-4 w-fit">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
