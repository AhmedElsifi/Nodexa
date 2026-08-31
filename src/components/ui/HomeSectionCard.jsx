import { Link } from "react-router-dom";
import ProgressBar from "../ui/ProgressBar";

export default function HomeSectionCard({ section }) {
  const { id, title, description, difficulty, progress, taskCount, quizCount, tasksCompleted, quizzesCompleted, summaryCompleted } = section;

  const difficultyColor = {
    Easy: "text-primary",
    Medium: "text-secondary",
    Hard: "text-error",
  };

  const progressColor =
    progress === 100 ? "primary" : progress >= 50 ? "secondary" : "primary";

  return (
    <Link
      to={`/sections/${id}`}
      className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col relative overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_15px_rgba(119,221,109,0.05)] transition-all duration-300 cursor-pointer"
    >
      <div className="absolute -top-6 -right-2 font-headline-xl text-[140px] font-bold text-surface-variant/20 leading-none select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
        {id}
      </div>
      <div className="flex justify-between items-start mb-sm relative z-10">
        <span className="font-code text-[14px] leading-[22px] text-on-surface-variant bg-surface-container-high px-xs py-base rounded border border-outline-variant/30">
          {id}
        </span>
        <span
          className={`font-code text-[12px] leading-[16px] tracking-wider bg-[#1F2937] px-xs py-base rounded-full border border-[#1F2937] ${difficultyColor[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>
      <h3 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface mb-xs relative z-10">
        {title}
      </h3>
      <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-md flex-grow relative z-10">
        {description}
      </p>
      <div className="space-y-sm relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-xs text-on-surface-variant">
            <span
              className={`material-symbols-outlined text-[16px] ${summaryCompleted ? "text-primary" : "text-on-surface-variant opacity-50"}`}
              title="Summary"
            >
              check_circle
            </span>
            <span
              className={`material-symbols-outlined text-[16px] ${taskCount > 0 && tasksCompleted === taskCount ? "text-primary" : tasksCompleted > 0 ? "text-secondary-container" : "text-on-surface-variant opacity-50"}`}
              title={`Tasks: ${tasksCompleted}/${taskCount}`}
            >
              task_alt
            </span>
            <span
              className={`material-symbols-outlined text-[16px] ${quizCount > 0 && quizzesCompleted === quizCount ? "text-primary" : "text-on-surface-variant opacity-50"}`}
              title={`Quiz: ${quizzesCompleted}/${quizCount}`}
            >
              quiz
            </span>
          </div>
          <span
            className={`font-code text-[14px] leading-[22px] ${progressColor === "primary" ? "text-primary" : "text-secondary-container"}`}
          >
            {progress}%
          </span>
        </div>
        <ProgressBar value={progress} color={progressColor} />
      </div>
    </Link>
  );
}
