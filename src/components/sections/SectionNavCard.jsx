import { Link } from "react-router-dom";

function getProgress(enriched, key) {
  if (key === "summary")
    return {
      label: enriched.summaryCompleted ? "1/1" : "0/1",
      pct: enriched.summaryCompleted ? 100 : 0,
    };
  if (key === "tasks")
    return {
      label: `${enriched.tasksCompleted}/${enriched.taskCount}`,
      pct:
        enriched.taskCount > 0
          ? (enriched.tasksCompleted / enriched.taskCount) * 100
          : 0,
    };
  return {
    label: `${enriched.quizzesCompleted}/${enriched.quizCount}`,
    pct:
      enriched.quizCount > 0
        ? (enriched.quizzesCompleted / enriched.quizCount) * 100
        : 0,
  };
}

export default function SectionNavCard({ sectionId, enriched, config }) {
  const { to, icon, color, title, desc } = config;
  const progress = getProgress(enriched, config.key);

  return (
    <Link
      to={to(sectionId)}
      className={`block bg-surface-container-low border border-outline-variant rounded-xl p-lg transition-all duration-300 hover:border-${color} hover:shadow-[0_0_16px_rgba(119,221,109,0.1)] hover:-translate-y-0.5 relative overflow-hidden group`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-${color}/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-${color}/10 transition-colors`}
      />
      <div className="flex justify-between items-start mb-xl">
        <div
          className={`bg-${color}/10 p-3 rounded-lg text-${color} border border-${color}/20`}
        >
          <span className="material-symbols-outlined text-headline-lg">
            {icon}
          </span>
        </div>
        <span className="bg-surface-container-highest px-3 py-1 rounded-full font-code text-label-sm leading-[16px] tracking-wider border border-outline-variant/50">
          {progress.label}
        </span>
      </div>
      <h3 className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface mb-xs">
        {title}
      </h3>
      <p className="font-sans text-body-md leading-[24px] text-on-surface-variant mb-md">
        {desc}
      </p>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-auto">
        <div
          className={`bg-${color} h-1.5 rounded-full`}
          style={{ width: `${progress.pct}%` }}
        />
      </div>
    </Link>
  );
}
