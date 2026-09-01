export default function FilterPills({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center gap-sm md:overflow-x-auto pb-1 scrollbar-hide shrink-0">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`font-code text-label-sm leading-[16px] tracking-wider px-sm py-xs rounded-full whitespace-nowrap transition-all ${
            activeCategory === cat
              ? "bg-primary/10 text-primary border border-primary shadow-[0_0_8px_rgba(119,221,109,0.1)]"
              : "bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-variant hover:text-on-surface cursor-pointer"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
