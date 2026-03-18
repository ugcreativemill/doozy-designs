import Reveal from "./Reveal";
import { Icon } from "./Icons";

function TestimonialCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="glass-panel h-full rounded-[1.8rem] p-8">
        <Icon name="quote" className="h-8 w-8 text-gold" />
        <p className="mt-6 text-lg leading-8 text-[#173536] dark:text-[#eef8f6]">{item.quote}</p>
        <div className="mt-8">
          <p className="font-semibold uppercase tracking-[0.24em]">{item.author}</p>
          <p className="mt-2 text-sm text-[#4b6768] dark:text-[#c8dfdb]">{item.role}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default TestimonialCard;
