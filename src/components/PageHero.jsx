import Reveal from "./Reveal";

function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="shell pb-12 pt-8">
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/20 px-6 py-24 shadow-luxe sm:px-10 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(17,17,17,0.8), rgba(17,17,17,0.28)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
        <Reveal className="relative z-10 max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-gold">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default PageHero;
