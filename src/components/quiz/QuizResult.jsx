import { Link } from "react-router-dom";
import sectionsData from "../../data/sections.json";

export default function QuizResult({ resultData, totalQuestions, quiz, sectionId, onRetake }) {
  const currentSectionIndex = sectionsData.findIndex((s) => s.id === sectionId);
  const nextSection =
    currentSectionIndex < sectionsData.length - 1
      ? sectionsData[currentSectionIndex + 1]
      : null;

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md py-xl">
      <div className="max-w-fit mx-auto">
        <div className="text-center mb-xl">
          <div className="mb-md">
            <span className="material-symbols-outlined text-[64px] text-primary">emoji_events</span>
          </div>
          <h1 className="font-headline-xl text-[48px] leading-[56px] font-bold text-on-surface mb-sm">
            Quiz Complete!
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant mb-md">
            You scored{" "}
            <span className="text-primary font-semibold">{resultData.correctCount}</span>{" "}
            out of <span className="font-semibold">{totalQuestions}</span> ({resultData.score}%)
          </p>
          <div className="flex items-center justify-center gap-lg mb-lg">
            <div className="flex items-center gap-xs">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-sans text-[14px] leading-[20px] text-on-surface-variant">
                {resultData.correctCount} Correct
              </span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="w-3 h-3 rounded-full bg-error" />
              <span className="font-sans text-[14px] leading-[20px] text-on-surface-variant">
                {totalQuestions - resultData.correctCount} Incorrect
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-md mb-xl">
          {quiz.questions.map((q, i) => {
            const userAnswer = resultData.allAnswers[i];
            const isCorrect = userAnswer === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-md ${
                  isCorrect ? "bg-primary/5 border-primary/30" : "bg-error/5 border-error/30"
                }`}
              >
                <div className="flex items-start gap-sm mb-sm">
                  <span
                    className={`material-symbols-outlined text-[20px] mt-0.5 ${isCorrect ? "text-primary" : "text-error"}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {isCorrect ? "check_circle" : "cancel"}
                  </span>
                  <div className="flex-1">
                    <p className="font-sans text-[16px] leading-[24px] text-on-surface font-medium">
                      {q.question}
                    </p>
                  </div>
                </div>
                <div className="ml-7 flex flex-col gap-xs">
                  {q.options.map((opt, optIdx) => {
                    const isUserAnswer = userAnswer === optIdx;
                    const isCorrectOption = q.correctIndex === optIdx;
                    let optStyle = "bg-surface-container-low border-outline-variant/50";
                    if (isCorrectOption) optStyle = "bg-primary/10 border-primary/40 text-primary";
                    else if (isUserAnswer && !isCorrect) optStyle = "bg-error/10 border-error/40 text-error";
                    return (
                      <div key={optIdx} className={`px-sm py-xs rounded-lg border text-[14px] leading-[22px] font-code flex items-center gap-xs ${optStyle}`}>
                        {isCorrectOption && <span className="material-symbols-outlined text-[16px]">check</span>}
                        {isUserAnswer && !isCorrect && !isCorrectOption && <span className="material-symbols-outlined text-[16px]">close</span>}
                        <span className={isCorrectOption || (isUserAnswer && !isCorrect) ? "" : "text-on-surface-variant"}>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-md justify-center">
          <button
            onClick={onRetake}
            className="px-md py-sm bg-primary text-on-primary-container font-code text-[12px] leading-[16px] tracking-wider rounded-lg hover:bg-primary-fixed transition-colors active:scale-95 flex items-center gap-xs"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Retake Quiz
          </button>
          {nextSection && (
            <Link
              to={`/sections/${nextSection.id}`}
              className="px-md py-sm bg-primary/10 border border-primary/30 text-primary font-code text-[12px] leading-[16px] tracking-wider rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all flex items-center gap-xs"
            >
              Next Section: {nextSection.title}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          )}
          <Link
            to={`/sections/${sectionId}`}
            className="px-md py-sm bg-surface-container-low border border-outline-variant text-on-surface font-code text-[12px] leading-[16px] tracking-wider rounded-lg hover:bg-surface-variant/50 hover:text-primary hover:border-primary/50 transition-all active:scale-95 flex items-center gap-xs"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Section
          </Link>
        </div>
      </div>
    </main>
  );
}
