import DifficultyBadge from "./DifficultyBadge";
import HintPanel from "./HintPanel";
import SolutionPanel from "./SolutionPanel";
import TaskCompletionButton from "./TaskCompletionButton";
import TaskActions from "./TaskActions";

export default function MediumTaskCard({ task, isCompleted, isHintVisible, isSolutionVisible, onToggleComplete, onToggleHint, onToggleSolution }) {
  return (
    <article className="col-span-1 md:col-span-2 lg:col-span-8 bg-surface-container-high rounded-xl border border-outline-variant hover:border-tertiary transition-colors duration-300 relative overflow-hidden group p-md flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="flex justify-between items-start mb-sm relative z-10">
        <div>
          <span className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant uppercase tracking-wider mb-base block">
            {task.number}
          </span>
          <h2 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface">
            {task.title}
          </h2>
        </div>
        <DifficultyBadge difficulty={task.difficulty} />
      </div>
      <div className="mb-md flex-grow relative z-10">
        <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-sm">
          {task.description}
        </p>
        <ul className="list-disc list-inside font-sans text-[16px] leading-[24px] text-on-surface-variant space-y-xs opacity-80">
          {task.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>
      {isHintVisible && <HintPanel text={task.hint} />}
      {isSolutionVisible && <SolutionPanel text={task.solution} />}
      <div className="flex items-center justify-between mt-auto pt-sm border-t border-outline-variant/30 relative z-10 gap-sm flex-wrap">
        <TaskCompletionButton
          isCompleted={isCompleted}
          onToggle={onToggleComplete}
        />
        <TaskActions
          isHintVisible={isHintVisible}
          isSolutionVisible={isSolutionVisible}
          onToggleHint={onToggleHint}
          onToggleSolution={onToggleSolution}
          hintHoverClass="hover:border-primary/50"
          solutionHoverClass="hover:text-tertiary hover:border-tertiary/50"
        />
      </div>
    </article>
  );
}
