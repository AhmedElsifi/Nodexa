import { useUserData } from "../../hooks/useUserData";
import sectionsData from "../../data/sections.json";
import StatCard from "../../components/progress/StatCard";
import SectionProgressRow from "../../components/progress/SectionProgressRow";

export default function ProgressPage() {
  const { overallStats, getEnrichedSection } = useUserData();

  const enrichedSections = sectionsData.map((s) => {
    const e = getEnrichedSection(s);
    return { id: e.id, title: e.title, progress: e.progress };
  });

  let strongestSection = "N/A";
  let strongestProgress = 0;
  let needsPracticeSection = "N/A";
  let lowestProgress = 101;
  for (const s of enrichedSections) {
    if (s.progress > strongestProgress) {
      strongestProgress = s.progress;
      strongestSection = s.title;
    }
    if (s.progress < lowestProgress) {
      lowestProgress = s.progress;
      needsPracticeSection = s.title;
    }
  }

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md pb-xl">
      <header className="mb-lg">
        <h1 className="font-headline-xl text-headline-xl leading-14 tracking-tight font-bold text-on-surface mb-xs">
          Progress Analytics
        </h1>
        <p className="font-sans text-body-lg leading-7 text-on-surface-variant">
          Track your mastery of Node.js concepts and monitor your learning
          streak.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
        <StatCard
          icon="donut_large"
          label="Overall Completion"
          value={`${overallStats.completion}%`}
          colSpan="col-span-1 lg:col-span-2"
        />
        <StatCard
          icon="task_alt"
          label="Tasks Completed"
          value={`${overallStats.totalTasks > 0 ? Math.round((overallStats.tasksCompleted / overallStats.totalTasks) * 100) : 0}%`}
          sub={` (${overallStats.tasksCompleted}/${overallStats.totalTasks})`}
        />
        <StatCard
          icon="grading"
          label="Avg Quiz Score"
          value={`${overallStats.avgQuizScore}%`}
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <section className="lg:col-span-2">
          <h2 className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface mb-md">
            Section Breakdown
          </h2>
          <div className="space-y-sm">
            {enrichedSections.map((section) => (
              <SectionProgressRow key={section.id} section={section} />
            ))}
          </div>
        </section>

        <aside className="space-y-gutter">
          <h2 className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface mb-md">
            Insights
          </h2>
          <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-md flex items-center gap-sm">
            <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[28px]">
                local_fire_department
              </span>
            </div>
            <div>
              <div className="font-code text-label-sm leading-[16px] tracking-wider text-on-surface-variant uppercase">
                Sections Completed
              </div>
              <div className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface">
                {enrichedSections.filter((s) => s.progress === 100).length} of{" "}
                {enrichedSections.length}
              </div>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant rounded-xl p-md">
            <h3 className="font-code text-label-sm leading-[16px] tracking-wider text-primary uppercase mb-xs flex items-center gap-xs">
              <span className="material-symbols-outlined text-body-md">
                trending_up
              </span>
              Strongest Section
            </h3>
            <p className="font-sans text-body-md leading-[24px] text-on-surface font-medium">
              {strongestSection}
            </p>
          </div>
          <div className="bg-surface border border-outline-variant border-l-2 border-l-secondary rounded-xl p-md">
            <h3 className="font-code text-label-sm leading-[16px] tracking-wider text-secondary uppercase mb-xs flex items-center gap-xs">
              <span className="material-symbols-outlined text-body-md">
                priority_high
              </span>
              Needs More Practice
            </h3>
            <p className="font-sans text-body-md leading-[24px] text-on-surface font-medium">
              {needsPracticeSection}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
