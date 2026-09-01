import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownComponents from "../ui/markdownComponents";
import HintPanel from "./HintPanel";
import SolutionPanel from "./SolutionPanel";
import TaskCompletionButton from "./TaskCompletionButton";

export default function HardTaskCard({
  task,
  isCompleted,
  isHintVisible,
  isSolutionVisible,
  onToggleComplete,
  onToggleHint,
  onToggleSolution,
}) {
  return (
    <article className="col-span-1 md:col-span-2 lg:col-span-12 bg-surface-container-high rounded-xl border border-outline-variant hover:border-error transition-colors duration-300 relative overflow-hidden group p-md flex flex-col mt-sm">
      <div className="absolute inset-0 bg-linear-to-r from-error/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="flex flex-col md:flex-row gap-md relative z-10 w-full h-full">
        <div className="md:w-1/3 flex flex-col border-r-0 md:border-r border-outline-variant/30 pr-md">
          <div className="flex justify-between items-start mb-sm">
            <div>
              <span className="font-code text-label-sm leading-[16px] tracking-wider text-on-surface-variant uppercase mb-base block">
                {task.number}
              </span>
              <h2 className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface">
                {task.title}
              </h2>
            </div>
          </div>
          <span className="bg-[#1F2937] text-error w-max px-sm py-xs rounded-full font-code text-label-sm leading-[16px] tracking-wider border border-error/20 flex items-center gap-xs mb-md">
            <span className="w-2 h-2 rounded-full bg-error" /> {task.difficulty}
          </span>
          <div className="grow">
            <ReactMarkdown components={MarkdownComponents.components} remarkPlugins={[remarkGfm]}>
              {task.description}
            </ReactMarkdown>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col justify-between pl-0 md:pl-md">
          {isHintVisible && <HintPanel text={task.hint} />}
          {isSolutionVisible && <SolutionPanel text={task.solution} />}
          <div className="flex items-center justify-between pt-sm border-t border-outline-variant/30 gap-sm flex-wrap">
            <TaskCompletionButton
              isCompleted={isCompleted}
              onToggle={onToggleComplete}
            />
            <div className="flex gap-sm">
              <button
                onClick={onToggleHint}
                className="px-md py-xs rounded-lg border border-outline-variant text-on-surface hover:bg-surface-variant/50 hover:border-error/50 transition-all font-code text-label-sm leading-[16px] tracking-wider flex items-center gap-xs"
              >
                <span className="material-symbols-outlined text-body-lg">
                  lightbulb
                </span>{" "}
                {isHintVisible ? "Hide Hint" : "Show Hint"}
              </button>
              {task.solution && (
                <button
                  onClick={onToggleSolution}
                  className="px-md py-xs rounded-lg bg-surface-bright text-on-surface hover:bg-surface-variant border border-outline-variant transition-all font-code text-label-sm leading-[16px] tracking-wider"
                >
                  {isSolutionVisible ? "Hide Solution" : "View Solution"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
