import { Link, useParams } from "react-router-dom";
import sections from "../../data/sections.json";
import ProgressBar from "../../components/ui/ProgressBar";
import { useUserData } from "../../hooks/useUserData";
import SectionNavCard from "../../components/sections/SectionNavCard";

const navCards = [
  {
    key: "summary",
    to: (id) => `/sections/${id}/summary`,
    icon: "menu_book",
    color: "primary",
    title: "SUMMARY",
    desc: "Concise revision of everything covered.",
  },
  {
    key: "tasks",
    to: (id) => `/sections/${id}/tasks`,
    icon: "code",
    color: "tertiary",
    title: "TASKS",
    desc: "Practical coding challenges.",
  },
  {
    key: "quiz",
    to: (id) => `/sections/${id}/quiz`,
    icon: "quiz",
    color: "secondary",
    title: "MCQ",
    desc: "Multiple-choice questions.",
  },
];

export default function SectionDetail() {
  const { id } = useParams();
  const section = sections.find((s) => s.id === id);
  const { getEnrichedSection } = useUserData();

  if (!section) {
    return (
      <main className="max-w-[1280px] mx-auto w-full px-md pb-xl">
        <div className="text-center py-xl">
          <h1 className="font-headline-xl text-headline-xl leading-14 font-bold text-on-surface mb-md">
            Section Not Found
          </h1>
          <Link
            to="/sections"
            className="text-primary hover:text-primary-fixed"
          >
            Back to Sections
          </Link>
        </div>
      </main>
    );
  }

  const enriched = getEnrichedSection(section);

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md lg:px-xl pb-xl">
      <header className="mb-xl relative">
        <div className="absolute inset-0 bg-linear-to-r from-surface-container-high to-transparent rounded-xl -z-10 opacity-50 blur-xl" />
        <div className="flex items-center gap-sm text-primary font-code text-label-sm leading-[16px] tracking-wider mb-xs">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20">
            SECTION {section.id}
          </span>
          <span className="text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-body-md">
              schedule
            </span>{" "}
            {section.duration}
          </span>
        </div>
        <h1 className="font-headline-xl text-headline-xl leading-14 tracking-tight font-bold text-on-surface mb-sm">
          {section.title}
        </h1>
        <p className="font-sans text-body-lg leading-7 text-on-surface-variant max-w-fit">
          {section.fullDescription}
        </p>
        <div className="mt-lg max-w-120 mx-auto">
          <div className="flex justify-between items-end mb-2 font-code text-label-sm leading-[16px] tracking-wider">
            <span className="text-on-surface">Section Progress</span>
            <span className="text-primary">{enriched.progress}% Completed</span>
          </div>
          <ProgressBar
            value={enriched.progress}
            className="h-2 border border-outline-variant/30"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md lg:gap-lg">
        {navCards.map((card) => (
          <SectionNavCard
            key={card.key}
            sectionId={id}
            enriched={enriched}
            config={card}
          />
        ))}
      </div>
    </main>
  );
}
