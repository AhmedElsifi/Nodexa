export default function TaskCompletionButton({ isCompleted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-xs px-sm py-xs rounded-lg font-code text-[12px] leading-[16px] tracking-wider transition-all duration-200 border ${
        isCompleted
          ? "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
          : "bg-surface-container text-on-surface-variant border-outline-variant hover:border-primary/50 hover:text-primary"
      }`}
    >
      <span
        className={`material-symbols-outlined text-[18px] transition-all duration-200`}
        style={isCompleted ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        {isCompleted ? "check_circle" : "radio_button_unchecked"}
      </span>
      {isCompleted ? "Completed" : "Mark as Complete"}
    </button>
  );
}
