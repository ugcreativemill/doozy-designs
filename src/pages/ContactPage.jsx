import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | Doozy Designs";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's create a space your clients, guests, or family will remember."
        text="Tell us about your project scope, timeline, and design goals. We'll follow up with a tailored proposal."
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Start the conversation."
              text="For consultations, full-service design, renovations, and project collaborations."
            />
            <Reveal className="space-y-6">
              <div className="glass-panel rounded-[1.8rem] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Visit</p>
                <p className="mt-3 text-lg leading-8">Akamwesi Mall Room WW12, Gayaza Road, Kampala, Uganda 256</p>
              </div>
              <div className="glass-panel rounded-[1.8rem] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Email</p>
                <p className="mt-3 text-lg leading-8">hello@doozydesigns.com</p>
              </div>
              <div className="glass-panel rounded-[1.8rem] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Call</p>
                <a
                  href="tel:+256200956455"
                  className="mt-4 inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-lg font-semibold tracking-[0.04em] text-white transition hover:-translate-y-0.5 hover:bg-gold hover:text-[#073f40]"
                >
                  Call +256 200 956455
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="glass-panel rounded-[2rem] p-8 shadow-luxe">
              <form
                className="grid gap-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="grid gap-2">
                  <span className="text-xs uppercase tracking-[0.28em] text-charcoal/55 dark:text-[#f7f1e8]/55">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 outline-none transition focus:border-gold dark:border-white/10 dark:bg-white/5"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs uppercase tracking-[0.28em] text-charcoal/55 dark:text-[#f7f1e8]/55">Email</span>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 outline-none transition focus:border-gold dark:border-white/10 dark:bg-white/5"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs uppercase tracking-[0.28em] text-charcoal/55 dark:text-[#f7f1e8]/55">Message</span>
                  <textarea
                    rows="6"
                    placeholder="Tell us about your project"
                    className="rounded-[1.5rem] border border-black/10 bg-white/70 px-5 py-4 outline-none transition focus:border-gold dark:border-white/10 dark:bg-white/5"
                  />
                </label>
                <button type="submit" className="button-primary mt-2 w-fit">
                  Send Inquiry
                </button>
                {submitted ? (
                  <p className="text-sm leading-7 text-charcoal/68 dark:text-[#f7f1e8]/68">
                    Inquiry drafted. Connect this form to your preferred backend or email service to receive live submissions.
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <iframe
                title="Doozy Designs map"
                src="https://www.google.com/maps?q=Akamwesi%20Mall%20Room%20WW12%20Gayaza%20Road%20Kampala%20Uganda&z=14&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
