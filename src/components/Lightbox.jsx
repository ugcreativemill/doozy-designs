import { useEffect } from "react";

function Lightbox({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 px-4 py-10" onClick={onClose}>
      <button
        type="button"
        className="absolute right-6 top-6 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white"
        onClick={onClose}
      >
        Close
      </button>
      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 px-4 py-3 text-white"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
      >
        &lt;
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 px-4 py-3 text-white"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      >
        &gt;
      </button>
      <div
        className="max-h-full w-full max-w-5xl overflow-hidden rounded-[1.8rem] bg-[#151515] shadow-luxe"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={item.image} alt={item.title} className="max-h-[78vh] w-full object-cover" />
        <div className="flex flex-col gap-2 p-6 text-white sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">{item.category}</p>
            <h3 className="mt-2 font-display text-4xl">{item.title}</h3>
          </div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/60">{item.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
