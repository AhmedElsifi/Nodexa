import { useState } from "react";
import sections from "../../data/sections.json";
import SectionCard from "../../components/ui/SectionCard";
import FilterPills from "../../components/ui/FilterPills";
import { useUserData } from "../../hooks/useUserData";

const categories = ["All Sections", "Backend Core", "Databases", "API Design"];

const categoryMap = {
  "All Sections": null,
  "Backend Core": ["Fundamentals", "Core JS"],
  Databases: ["Database"],
  "API Design": ["Architecture", "DevOps"],
};

export default function AllSections() {
  const [activeCategory, setActiveCategory] = useState("All Sections");
  const { getEnrichedSection } = useUserData();

  const filteredSections =
    categoryMap[activeCategory] === null
      ? sections
      : sections.filter((s) =>
          categoryMap[activeCategory]?.includes(s.category),
        );

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
