import Reveal from "./Reveal";

function PortfolioGrid({ items, onSelect }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${index}`} delay={index * 70}>
          <button
            type="button"
            onClick={() => onSelect?.(item)}
            className="group relative block w-full overflow-hidden rounded-[1.8rem] text-left shadow-luxe"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="project-overlay absolute inset-0 p-6">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.34em] text-gold">{item.category}</p>
                <h3 className="mt-3 font-display text-3xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/70">{item.location}</p>
              </div>
            </div>
          </button>
        </Reveal>
      ))}
    </div>
  );
}

export default PortfolioGrid;
