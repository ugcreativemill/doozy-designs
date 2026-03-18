import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`mb-12 flex max-w-2xl flex-col gap-5 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.42em] text-gold">{eyebrow}</span>
      <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">{title}</h2>
      <div className="gold-line" />
      {text ? <p className="text-base leading-8 text-[#183738] dark:text-[#d7efeb]">{text}</p> : null}
    </Reveal>
  );
}

export default SectionHeading;
