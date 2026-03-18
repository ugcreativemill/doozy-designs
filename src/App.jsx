import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("doozy-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("doozy-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  const page = useMemo(
    () => (
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    ),
    [location],
  );

  return (
    <>
      <ScrollToTop />
      {isLoading ? (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#eef7f5] text-charcoal dark:bg-[#052f30] dark:text-white">
          <div className="gold-line mb-6" />
          <p className="font-display text-5xl tracking-[0.18em] sm:text-6xl">DOOZY</p>
          <p className="mt-3 text-xs uppercase tracking-[0.6em] text-charcoal/60 dark:text-white/50">
            Designs
          </p>
          <div className="mt-10 h-px w-40 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <div className="h-full w-1/2 animate-pulseSoft bg-gradient-to-r from-gold via-[#d8f2ee] to-deepteal" />
          </div>
        </div>
      ) : null}
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 grain-bg" />
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
        <main key={location.pathname} className="page-enter pt-24">
          {page}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
