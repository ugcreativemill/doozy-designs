import Reveal from "./Reveal";

function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="shell pb-10 pt-4 sm:pb-12 sm:pt-8">
      <div
        className="relative overflow-hidden rounded-[1.8rem] border border-white/20 px-5 py-16 shadow-luxe sm:rounded-[2rem] sm:px-10 sm:py-24 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(17,17,17,0.8), rgba(17,17,17,0.28)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
        <Reveal className="relative z-10 max-w-3xl text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-gold sm:text-xs sm:tracking-[0.42em]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-[11ch] font-display text-[3.5rem] leading-[0.94] sm:max-w-none sm:text-6xl sm:leading-none lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-white/82 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8 sm:text-white/75">
            {text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default PageHero;
