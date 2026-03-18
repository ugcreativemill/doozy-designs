import { Icon } from "./Icons";
import Reveal from "./Reveal";

function ServiceCard({ service, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="group glass-panel h-full rounded-[1.8rem] p-8 transition duration-500 hover:-translate-y-2 hover:border-gold/35 hover:shadow-luxe">
        <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition duration-500 group-hover:scale-105 group-hover:bg-gold group-hover:text-charcoal">
          <Icon name={service.icon} />
        </div>
        <h3 className="font-display text-3xl">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#244344] dark:text-[#d7efeb]">{service.description}</p>
      </article>
    </Reveal>
  );
}

export default ServiceCard;
