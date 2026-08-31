export default function QuizQuestion({ question, selectedAnswer, onSelect }) {
  return (
    <div className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
      <h2 className="font-headline-lg text-[32px] leading-[40px] tracking-tight font-semibold text-on-surface mb-xl">
        {question.question}
      </h2>
      <div className="flex flex-col gap-md">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-full text-left p-md rounded-lg transition-all flex items-center justify-between ${
                isSelected
                  ? "bg-surface-container border-2 border-primary shadow-[inset_0_0_12px_rgba(119,221,109,0.1)]"
                  : "bg-surface-container-low border border-outline-variant hover:border-primary hover:bg-surface-container-high group"
              }`}
            >
              <span className={`font-code text-[14px] leading-[22px] transition-colors ${isSelected ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface"}`}>
                {option}
              </span>
              <span
                className={`material-symbols-outlined transition-opacity ${isSelected ? "text-primary opacity-100" : "text-outline-variant opacity-0 group-hover:opacity-100"}`}
                style={isSelected ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {isSelected ? "radio_button_checked" : "radio_button_unchecked"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
