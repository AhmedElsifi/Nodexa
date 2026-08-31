import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function SectionCard({ section }) {
  const { id, title, description, category, icon, progress, taskCount, quizCount } = section;

  const isCompleted = progress === 100;
  const isInProgress = progress > 0 && progress < 100;

  return (
    <article
      className={`bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-sm relative overflow-hidden group transition-all duration-300 ${
        isCompleted
          ? "hover:border-primary/40 hover:shadow-[0_0_15px_rgba(119,221,109,0.05)]"
          : isInProgress
          ? "hover:border-secondary/40 hover:shadow-[0_0_15px_rgba(255,237,118,0.05)]"
          : "hover:border-primary/40 hover:shadow-[0_0_15px_rgba(119,221,109,0.05)] opacity-90"
      }`}
    >
      <div className="absolute -top-6 -right-2 font-headline-xl text-[140px] font-bold text-surface-variant/20 leading-none select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
        {id}
      </div>
      <header className="flex items-start justify-between relative z-10">
        <div className="p-xs rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center">
          <span
            className={`material-symbols-outlined ${isInProgress ? "text-secondary" : "text-primary"}`}
          >
            {icon}
          </span>
        </div>
        <span
          className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${
            category === "Fundamentals"
              ? "bg-primary/10 text-primary border-primary/20"
              : "bg-surface-variant text-on-surface-variant border-outline-variant"
          }`}
        >
          {category}
        </span>
      </header>
      <div className="relative z-10 mt-xs flex-grow">
        <h2 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface">
          {title}
        </h2>
        <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mt-base line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-md mt-sm relative z-10 border-t border-outline-variant/50 pt-sm">
        <div className="flex items-center gap-base text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px]">task</span>
          <span className="font-code text-[12px] leading-[16px] tracking-wider">
            {taskCount} Tasks
          </span>
        </div>
        <div className="flex items-center gap-base text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px]">quiz</span>
          <span className="font-code text-[12px] leading-[16px] tracking-wider">
            {quizCount} Quizzes
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-base relative z-10 mt-sm">
        <div className="flex justify-between items-center">
          <span className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant">
            Progress
          </span>
          <span
            className={`font-code text-[12px] leading-[16px] tracking-wider ${
              progress === 100
                ? "text-primary"
                : progress > 0
                ? "text-secondary"
                : "text-on-surface-variant"
            }`}
          >
            {progress}%
          </span>
        </div>
        <ProgressBar
          value={progress}
          color={progress === 100 ? "primary" : progress > 0 ? "secondary" : "primary"}
        />
      </div>
      <Link
        to={`/sections/${id}`}
        className={`mt-sm relative z-10 w-full py-sm px-sm rounded-lg font-code text-[12px] leading-[16px] tracking-wider transition-colors flex justify-center items-center gap-xs ${
          isCompleted
            ? "bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant"
            : isInProgress
            ? "bg-primary text-on-primary-container border border-primary hover:bg-primary-fixed hover:border-primary-fixed shadow-[0_0_10px_rgba(119,221,109,0.2)]"
            : "bg-surface border border-outline-variant text-primary hover:border-primary/50 hover:bg-surface-variant/30"
        }`}
      >
        {isCompleted
          ? "Review Section"
          : isInProgress
          ? "Continue Learning"
          : "Start Section"}
        <span className="material-symbols-outlined text-[18px]">
          {isCompleted ? "history" : isInProgress ? "arrow_forward" : "play_arrow"}
        </span>
      </Link>
    </article>
  );
}
