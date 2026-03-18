import { useEffect } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { teamMembers } from "../data/siteData";

function AboutPage() {
  useEffect(() => {
    document.title = "About | Doozy Designs";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About Doozy Designs"
        title="Designing rooms that feel precise, soulful, and deeply lived in."
        text="We build interiors that pair restraint with richness, giving each project a distinct emotional identity without sacrificing utility."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Our Story"
            title="A studio shaped by detail, balance, and quiet luxury."
            text="Doozy Designs began with a simple belief: the best interiors do more than look beautiful. They regulate mood, improve movement, and create a memory the moment someone walks in."
          />
          <Reveal className="grid gap-6 sm:grid-cols-2">
            <article className="glass-panel rounded-[1.8rem] p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Mission</p>
              <p className="mt-4 text-lg leading-8 text-[#1b393a] dark:text-[#dff2ef]">
                To craft premium interiors that feel timeless, tailored, and grounded in real human experience.
              </p>
            </article>
            <article className="glass-panel rounded-[1.8rem] p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Vision</p>
              <p className="mt-4 text-lg leading-8 text-[#1b393a] dark:text-[#dff2ef]">
                To become the benchmark for high-end African interior design with global resonance and disciplined execution.
              </p>
            </article>
            <article className="glass-panel rounded-[1.8rem] p-8 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Approach</p>
              <p className="mt-4 text-lg leading-8 text-[#1b393a] dark:text-[#dff2ef]">
                Every project begins with lifestyle mapping, then moves into concept development, material storytelling, and meticulous implementation support.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow="The Team"
            title="A compact team with editorial taste and execution discipline."
            text="Design leadership, materials intelligence, and spatial strategy working together from concept to styling."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 90}>
                <article className="overflow-hidden rounded-[1.8rem] shadow-luxe">
                  <img src={member.image} alt={member.name} className="h-[430px] w-full object-cover" />
                  <div className="glass-panel p-6">
                    <h3 className="font-display text-3xl">{member.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
