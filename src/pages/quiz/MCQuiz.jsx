import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import quizzesData from "../../data/quizzes.json";
import { useUserData } from "../../hooks/useUserData";
import QuizResult from "../../components/quiz/QuizResult";
import QuizQuestion from "../../components/quiz/QuizQuestion";

export default function MCQuiz() {
  const { id } = useParams();
  const quiz = quizzesData.find((q) => q.sectionId === id);
  const { recordQuizAttempt, setLastVisitedSection } = useUserData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    if (id) setLastVisitedSection(id);
  }, [id, setLastVisitedSection]);

  const question = quiz?.questions[currentQuestion];
  const totalQuestions = quiz?.questions.length ?? 0;
  const progressPercent =
    totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;

  const handleNext = () => {
    const updatedAnswers = { ...answers, [currentQuestion]: selectedAnswer };
    setAnswers(updatedAnswers);
    setSelectedAnswer(null);
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const correctIds = [];
      const incorrectIds = [];
      quiz.questions.forEach((q, i) => {
        if (updatedAnswers[i] === q.correctIndex) correctIds.push(q.id);
        else incorrectIds.push(q.id);
      });
      const score = Math.round((correctIds.length / totalQuestions) * 100);
      const data = {
        correctIds,
        incorrectIds,
        correctCount: correctIds.length,
        score,
        allAnswers: updatedAnswers,
      };
      setResultData(data);
      recordQuizAttempt(id, score, totalQuestions, correctIds, incorrectIds);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
    setResultData(null);
  };

  if (!quiz) {
    return (
      <main className="max-w-[1280px] mx-auto w-full px-md pb-xl">
        <div className="text-center py-xl">
          <h1 className="font-headline-xl text-headline-xl leading-14 font-bold text-on-surface mb-md">
            Quiz Not Found
          </h1>
          <Link
            to="/sections"
            className="text-primary hover:text-primary-fixed"
          >
            Back to Sections
          </Link>
        </div>
      </main>
    );
  }

  if (resultData) {
    return (
      <QuizResult
        resultData={resultData}
        totalQuestions={totalQuestions}
        quiz={quiz}
        sectionId={id}
        onRetake={handleRetake}
      />
    );
  }

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md pb-xl flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-2xl flex flex-col gap-lg">
        <div className="flex flex-col gap-sm">
          <div className="flex justify-between items-center">
            <span className="font-code text-label-sm leading-[16px] tracking-wider text-on-surface-variant uppercase">
              {quiz.sectionTitle}
            </span>
            <span className="font-code text-label-sm leading-[16px] tracking-wider text-primary font-bold">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_8px_rgba(119,221,109,0.5)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <QuizQuestion
          question={question}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
        />

        <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center gap-sm pt-md">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`font-sans text-body-md leading-[24px] font-semibold py-sm px-xl rounded-lg flex items-center gap-xs transition-all active:scale-95 ${currentQuestion === 0 ? "text-on-surface-variant opacity-50 cursor-not-allowed" : "text-on-surface hover:text-primary"}`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`font-sans text-body-md leading-[24px] font-semibold py-sm px-xl rounded-lg flex items-center gap-xs transition-all active:scale-95 ${selectedAnswer === null ? "bg-surface-container-high text-on-surface-variant cursor-not-allowed" : "bg-secondary text-[#000000] hover:bg-secondary-fixed"}`}
          >
            {currentQuestion === totalQuestions - 1
              ? "Finish"
              : "Next Question"}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </main>
  );
}
