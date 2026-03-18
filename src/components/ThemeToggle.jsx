import { Icon } from "./Icons";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-charcoal transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold dark:border-white/10 dark:bg-white/5 dark:text-[#f4ede2]"
      aria-label="Toggle dark mode"
    >
      <Icon name={isDark ? "sun" : "moon"} className="h-5 w-5" />
    </button>
  );
}

export default ThemeToggle;
