import { useEffect, useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import PortfolioGrid from "../components/PortfolioGrid";
import Lightbox from "../components/Lightbox";
import { portfolioItems } from "../data/siteData";

const filters = ["All", ...new Set(portfolioItems.map((item) => item.category))];

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = "Portfolio | Doozy Designs";
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const currentIndex = selectedItem ? filteredItems.findIndex((item) => item.title === selectedItem.title) : -1;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A gallery of curated interiors across living, work, and hospitality-inspired spaces."
        text="Explore our project categories and open any image for a closer look."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Spaces with layered textures, sculpted light, and a polished visual rhythm."
            text="Filter by category to narrow the gallery."
          />
          <div className="mb-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`w-full rounded-full px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 sm:w-auto sm:px-5 sm:tracking-[0.26em] ${
                  activeFilter === filter
                    ? "bg-charcoal text-white dark:bg-[#f4ede2] dark:text-charcoal"
                    : "border border-black/10 text-[#224243] hover:border-gold hover:text-deepteal dark:border-white/10 dark:text-[#dff2ef]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <PortfolioGrid items={filteredItems} onSelect={setSelectedItem} />
        </div>
      </section>

      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={() => setSelectedItem(filteredItems[(currentIndex - 1 + filteredItems.length) % filteredItems.length])}
        onNext={() => setSelectedItem(filteredItems[(currentIndex + 1) % filteredItems.length])}
      />
    </>
  );
}

export default PortfolioPage;
