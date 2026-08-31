import { Link } from "react-router-dom";
import sections from "../../data/sections.json";
import ProgressBar from "../../components/ui/ProgressBar";
import HomeSectionCard from "../../components/ui/HomeSectionCard";
import { useUserData } from "../../hooks/useUserData";

export default function Home() {
  const { overallStats, getEnrichedSection } = useUserData();

  const enrichedSections = sections.slice(0, 3).map(getEnrichedSection);

  const currentFocus =
    sections.find((s) => {
      const enriched = getEnrichedSection(s);
      return enriched.progress < 100;
    }) || sections[sections.length - 1];
  const focusSection = getEnrichedSection(currentFocus);

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md pb-xl relative z-10">
      {/* Hero Section */}
      <section className="relative py-xl flex flex-col items-center text-center mb-lg">
        <h1 className="font-headline-xl text-[48px] leading-[56px] tracking-tight font-bold text-on-surface mb-sm relative z-10">
          Learn. Build. Share.
        </h1>
        <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-fit mb-md relative z-10">
          Master Node.js and backend development through concise summaries,
          practical tasks, and interactive technical quizzes designed for
          professional engineers.
        </p>
        <Link
          to="/sections"
          className="bg-primary hover:bg-primary-fixed text-on-primary-container font-code text-[12px] leading-[16px] tracking-wider px-md py-sm rounded-lg transition-colors duration-500 active:scale-95 relative z-10 flex items-center gap-xs font-semibold shadow-[0_0_15px_rgba(119,221,109,0.3)]"
        >
          Continue Learning
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </Link>
      </section>

      {/* Community Banner */}
      <section className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-md mb-xl flex items-start gap-sm">
        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
          group
        </span>
        <p className="font-sans text-[14px] leading-[22px] text-on-surface-variant">
          <span className="text-on-surface font-medium">Nodexa</span> is a
          community-made learning portal created to help ITI students learn,
          practice, revise, and share knowledge throughout their journey. It is
          an independent project and is not officially affiliated with, endorsed
          by, or operated by ITI. This platform is simply a way of helping
          fellow students and building a stronger learning community.
        </p>
      </section>

      {/* Progress & Resume Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-xl">
        {/* Overall Progress */}
        <div className="bg-surface border border-outline-variant rounded-xl p-md lg:col-span-2 flex flex-col justify-between hover:border-primary/40 hover:shadow-[0_0_15px_rgba(119,221,109,0.05)] transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-sm">
              <h2 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface">
                Overall Course Progress
              </h2>
              <span className="font-code text-[12px] leading-[16px] tracking-wider text-primary bg-primary/10 px-xs py-base rounded">
                {overallStats.completion}% Complete
              </span>
            </div>
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-md">
              You&apos;re making solid progress through the backend
              fundamentals.
            </p>
          </div>
          <ProgressBar
            value={overallStats.completion}
            className="h-2 mt-auto"
          />
        </div>

        {/* Resume Widget */}
        <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col hover:border-primary/40 hover:shadow-[0_0_15px_rgba(119,221,109,0.05)] transition-all duration-300">
          <div className="flex items-center gap-xs mb-sm">
            <span className="material-symbols-outlined text-tertiary">
              play_circle
            </span>
            <span className="font-code text-[12px] leading-[16px] tracking-wider text-tertiary uppercase">
              Current Focus
            </span>
          </div>
          <h3 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface mb-xs leading-tight">
            Section {focusSection.id}: {focusSection.title}
          </h3>
          <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-md flex-grow">
            {focusSection.progress > 0
              ? `${focusSection.progress}% complete. Continue where you left off.`
              : "Start learning to unlock your progress."}
          </p>
          <Link
            to={`/sections/${focusSection.id}`}
            className="w-full bg-surface-variant hover:bg-surface-bright text-on-surface font-code text-[12px] leading-[16px] tracking-wider px-md py-sm rounded-lg transition-colors border border-outline-variant/50 active:scale-95 flex items-center justify-center gap-xs"
          >
            Resume Section
            <span className="material-symbols-outlined text-[16px]">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </section>

      {/* Sections Grid */}
      <section>
        <div className="flex justify-between items-end mb-md">
          <h2 className="font-headline-lg text-[32px] leading-[40px] tracking-tight font-semibold text-on-surface">
            Course Modules
          </h2>
          <Link
            to="/sections"
            className="font-code text-[12px] leading-[16px] tracking-wider text-primary hover:text-primary-fixed transition-colors flex items-center gap-xs"
          >
            View All
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {enrichedSections.map((section) => (
            <HomeSectionCard key={section.id} section={section} />
          ))}
        </div>
      </section>
    </main>
  );
}
