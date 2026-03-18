import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import PortfolioGrid from "../components/PortfolioGrid";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { portfolioItems, services, stats, testimonials } from "../data/siteData";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Doozy Designs | Luxury Interior Design";
  }, []);

  return (
    <>
      <section className="shell relative min-h-[calc(100vh-8rem)] pb-14 pt-4 sm:pb-16 sm:pt-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal className="relative z-10 max-w-3xl py-8 sm:py-14 lg:py-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-gold sm:text-xs sm:tracking-[0.42em]">
              Interior Design Company
            </span>
            <h1 className="mt-5 max-w-[11ch] font-display text-[3.5rem] leading-[0.94] sm:mt-6 sm:max-w-none sm:text-[5rem] sm:leading-[0.92] lg:text-[6.5rem]">
              Transforming Spaces Into Experiences
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#1d3d3e] dark:text-[#dff2ef] sm:mt-6 sm:max-w-2xl sm:text-lg">
              Doozy Designs creates premium residential and commercial interiors with a refined blend of modern
              minimalism, curated textures, and hospitality-level detail.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/portfolio" className="button-primary">
                View Projects
              </Link>
              <Link to="/contact" className="button-secondary">
                Get a Quote
              </Link>
            </div>
            <div className="mt-10 grid gap-6 border-t border-black/10 pt-6 dark:border-white/10 sm:mt-14 sm:gap-8 sm:pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[#4b6768] dark:text-[#c8dfdb]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/20 shadow-luxe sm:rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury interior"
                className="h-[58vh] min-h-[420px] w-full object-cover sm:h-[70vh] sm:min-h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                <div className="glass-panel max-w-sm rounded-[1.4rem] p-4 text-white backdrop-blur-md sm:rounded-[1.6rem] sm:p-6">
                  <p className="text-xs uppercase tracking-[0.34em] text-gold">Signature Approach</p>
                  <p className="mt-4 text-sm leading-7 text-white/78">
                    Intelligent space planning, museum-grade styling, and calm, elevated material palettes.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 hidden h-28 w-28 rounded-full border border-gold/30 bg-gold/10 blur-[2px] sm:block" />
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured Services"
            title="Design built around atmosphere, function, and lasting value."
            text="Every project moves from strategic concept to highly resolved execution, with a focus on clarity, material richness, and quiet confidence."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Portfolio Preview"
              title="Selected interiors with a polished, editorial edge."
              text="A glimpse into our recent living, office, and hospitality-inspired transformations."
            />
            <Link to="/portfolio" className="button-secondary w-fit">
              Explore Full Portfolio
            </Link>
          </div>
          <PortfolioGrid items={portfolioItems.slice(0, 6)} onSelect={() => navigate("/portfolio")} />
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by clients who expect more than a beautiful room."
            text="We design for emotional impact and day-to-day ease, with a process that feels composed from first sketch to final styling."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.author} item={item} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-pine px-8 py-12 text-white shadow-luxe sm:px-12 sm:py-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(87,210,205,0.32),transparent_30%)]" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.4em] text-gold">Start Your Project</p>
                  <h2 className="mt-4 font-display text-4xl sm:text-5xl">Bring a premium, unforgettable feel to your next space.</h2>
                </div>
                <Link to="/contact" className="button-primary">
                  Schedule a Consultation
                  <Icon name="arrow" className="ml-3 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default HomePage;
