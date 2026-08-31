import DifficultyBadge from "./DifficultyBadge";
import HintPanel from "./HintPanel";
import SolutionPanel from "./SolutionPanel";
import TaskCompletionButton from "./TaskCompletionButton";
import TaskActions from "./TaskActions";

export default function EasyTaskCard({ task, isCompleted, isHintVisible, isSolutionVisible, onToggleComplete, onToggleHint, onToggleSolution }) {
  return (
    <article className="col-span-1 lg:col-span-4 bg-surface-container-high rounded-xl border border-outline-variant hover:border-primary transition-colors duration-300 relative overflow-hidden group p-md flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="flex justify-between items-start mb-sm relative z-10">
        <div>
          <span className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant uppercase tracking-wider mb-base block">
            {task.number}
          </span>
          <h2 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface text-lg leading-tight">
            {task.title}
          </h2>
        </div>
        <DifficultyBadge difficulty={task.difficulty} />
      </div>
      <div className="mb-md flex-grow relative z-10">
        <p className="font-sans text-[14px] leading-[22px] text-on-surface-variant text-sm mb-sm">
          {task.description}
        </p>
        <ul className="list-disc list-inside font-sans text-[14px] leading-[22px] text-on-surface-variant text-sm space-y-xs opacity-80">
          {task.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>
      {isHintVisible && <HintPanel text={task.hint} />}
      {isSolutionVisible && <SolutionPanel text={task.solution} />}
      <div className="flex flex-col mt-auto pt-sm border-t border-outline-variant/30 relative z-10 gap-sm">
        <TaskCompletionButton
          isCompleted={isCompleted}
          onToggle={onToggleComplete}
        />
        <div className="flex gap-xs w-full">
          <button
            onClick={onToggleHint}
            className="flex-1 py-xs rounded-lg border border-outline-variant text-on-surface hover:bg-surface-variant/50 transition-all font-code text-[12px] leading-[16px] tracking-wider flex justify-center items-center gap-xs"
          >
            <span className="material-symbols-outlined text-[16px]">
              lightbulb
            </span>{" "}
            {isHintVisible ? "Hide" : "Hint"}
          </button>
          <button
            onClick={onToggleSolution}
            className="flex-1 py-xs rounded-lg border border-outline-variant text-on-surface hover:text-primary hover:border-primary/50 transition-all font-code text-[12px] leading-[16px] tracking-wider bg-surface-container-highest"
          >
            {isSolutionVisible ? "Hide" : "Solution"}
          </button>
        </div>
      </div>
    </article>
  );
}
