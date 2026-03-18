import { useEffect } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { services } from "../data/siteData";

function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Doozy Designs";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive interior design with premium delivery standards."
        text="From concept creation to renovation oversight, we deliver spaces that read as polished, warm, and unforgettable."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Design Offerings"
            title="Tailored services for homes, brands, and transformative build-outs."
            text="Each package is customized to scope, timeline, and the level of creative involvement required."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <Reveal>
            <div className="grid gap-6 rounded-[2rem] border border-black/5 bg-white/50 p-8 shadow-luxe dark:border-white/10 dark:bg-white/5 lg:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-gold">Why Clients Choose Us</p>
              </div>
              <div className="text-sm leading-8 text-[#244344] dark:text-[#dff2ef]">
                Detailed concept boards, curated finishes, supplier coordination, and installation styling.
              </div>
              <div className="text-sm leading-8 text-[#244344] dark:text-[#dff2ef]">
                A calm, transparent process designed to protect quality while keeping projects commercially realistic.
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
