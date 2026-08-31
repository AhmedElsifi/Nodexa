export default function TaskActions({ isHintVisible, isSolutionVisible, onToggleHint, onToggleSolution, hintHoverClass, solutionHoverClass }) {
  return (
    <div className="flex gap-sm">
      <button
        onClick={onToggleHint}
        className={`px-md py-xs rounded-lg border border-outline-variant text-on-surface hover:bg-surface-variant/50 ${hintHoverClass} transition-all font-code text-[12px] leading-[16px] tracking-wider flex items-center gap-xs`}
      >
        <span className="material-symbols-outlined text-[18px]">
          lightbulb
        </span>{" "}
        {isHintVisible ? "Hide Hint" : "Show Hint"}
      </button>
      <button
        onClick={onToggleSolution}
        className={`px-md py-xs rounded-lg border border-outline-variant text-on-surface ${solutionHoverClass} transition-all font-code text-[12px] leading-[16px] tracking-wider bg-surface-container-highest`}
      >
        {isSolutionVisible ? "Hide Solution" : "View Solution"}
      </button>
    </div>
  );
}
