import { useState, useMemo } from "react";
import sections from "../../data/sections.json";
import SectionCard from "../../components/ui/SectionCard";
import FilterPills from "../../components/ui/FilterPills";
import { useUserData } from "../../hooks/useUserData";

export default function AllSections() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { getEnrichedSection } = useUserData();

  const categories = useMemo(() => {
    const unique = [...new Set(sections.map((s) => s.category))];
    return ["All", ...unique];
  }, []);

  const filteredSections =
    activeCategory === "All"
      ? sections
      : sections.filter((s) => s.category === activeCategory);

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md pb-xl flex flex-col gap-lg">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
        <div>
          <h1 className="font-headline-xl text-headline-xl leading-14 tracking-tight font-bold text-on-surface">
            Course Sections
          </h1>
          <p className="font-sans text-body-lg leading-7 text-on-surface-variant mt-xs max-w-fit">
            Master backend development from fundamentals to advanced
            microservices. Track your progress and dive into specialized
            modules.
          </p>
        </div>
        <FilterPills
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredSections.map((section) => (
          <SectionCard key={section.id} section={getEnrichedSection(section)} />
        ))}
      </div>
    </main>
  );
}
