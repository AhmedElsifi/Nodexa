import { useState } from "react";
import resources from "../../data/resources.json";
import FilterPills from "../../components/ui/FilterPills";

const categories = [
  "All Resources",
  "Documentation",
  "Articles",
  "Videos",
  "Tools",
  "Cheat Sheets",
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All Resources");

  const filteredResources =
    activeCategory === "All Resources"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  const getIconColor = (category) => {
    switch (category) {
      case "Documentation":
        return "text-primary";
      case "Articles":
        return "text-primary";
      case "Videos":
        return "text-tertiary";
      case "Tools":
        return "text-secondary";
      case "Cheat Sheets":
        return "text-tertiary";
      default:
        return "text-primary";
    }
  };

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md pb-xl">
      <header className="mb-xl text-center md:text-left">
        <h1 className="font-headline-xl text-[48px] leading-[56px] tracking-tight font-bold text-on-background mb-xs">
          Developer Resources
        </h1>
        <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-fit">
          A curated collection of documentation, articles, and tools to
          accelerate your Node.js engineering journey.
        </p>
      </header>

      <div className="flex flex-wrap gap-xs mb-lg pb-sm border-b border-outline-variant/30">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-code text-[12px] leading-[16px] tracking-wider px-sm py-xs rounded-full transition-all ${
              activeCategory === cat
                ? "bg-primary-container text-on-primary-container font-semibold"
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface border border-outline-variant"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-surface-container-low border border-outline-variant/50 rounded-lg p-md flex flex-col h-full relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_16px_rgba(119,221,109,0.1)] hover:border-primary hover:-translate-y-0.5"
          >
            <div
              className={`absolute top-0 right-0 p-sm ${getIconColor(resource.category)} opacity-50 group-hover:opacity-100 transition-opacity`}
            >
              <span className="material-symbols-outlined">{resource.icon}</span>
            </div>
            <div className="mb-sm">
              <span className="inline-block px-xs py-[2px] rounded bg-surface-variant text-on-surface-variant font-code text-[12px] leading-[16px] tracking-wider mb-xs">
                {resource.category}
              </span>
              <h3 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface mb-xs">
                {resource.title}
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant line-clamp-2">
                {resource.description}
              </p>
            </div>
            <div className="mt-auto pt-sm flex justify-between items-center border-t border-outline-variant/30">
              <a
                className="font-code text-[12px] leading-[16px] tracking-wider text-primary hover:text-primary-fixed transition-colors flex items-center gap-xs"
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.category === "Documentation"
                  ? "View Docs"
                  : resource.category === "Articles"
                  ? "Read Article"
                  : resource.category === "Videos"
                  ? "Watch Video"
                  : resource.category === "Tools"
                  ? "Get Tool"
                  : "Explore"}{" "}
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </a>
              {resource.meta && (
                <span className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant">
                  {resource.meta}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
