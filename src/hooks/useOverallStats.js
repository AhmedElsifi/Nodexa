import { useMemo } from "react";
import sectionsData from "../data/sections.json";
import tasksData from "../data/tasks.json";
import quizzesData from "../data/quizzes.json";
import { ensureSectionEntry } from "../utils/localStorage";

export function useOverallStats(userData) {
  return useMemo(() => {
    let totalTasks = 0;
    let completedTasks = 0;
    let totalQuizzes = 0;
    let quizScoreSum = 0;
    let quizAttemptsCount = 0;
    let completedSections = 0;

    for (const section of sectionsData) {
      const s = ensureSectionEntry(userData, section.id);
      const sectionTasks = tasksData.find((t) => t.sectionId === section.id);
      const sectionQuiz = quizzesData.find((q) => q.sectionId === section.id);
      const tCount = sectionTasks ? sectionTasks.tasks.length : 0;
      const qCount = sectionQuiz ? sectionQuiz.questions.length : 0;
      totalTasks += tCount;
      completedTasks += s.completedTasks.length;
      totalQuizzes += qCount;
      if (s.quizAttempts > 0) {
        quizScoreSum += s.quizLastScore;
        quizAttemptsCount += 1;
      }
      const progress = computeSectionProgress(s, tCount, qCount);
      if (progress === 100) completedSections += 1;
    }

    const totalSections = sectionsData.length;
    const completion = totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
    const avgQuizScore = quizAttemptsCount > 0 ? Math.round(quizScoreSum / quizAttemptsCount) : 0;
    return { completion, tasksCompleted: completedTasks, totalTasks, avgQuizScore, totalQuizzes };
  }, [userData]);
}

function computeSectionProgress(sectionEntry, totalTasks, totalQuizzes) {
  const parts = [];
  if (sectionEntry.summaryCompleted) parts.push(1);
  if (totalTasks > 0) parts.push(sectionEntry.completedTasks.length / totalTasks);
  if (totalQuizzes > 0) parts.push(sectionEntry.quizBestScore > 0 ? 1 : 0);
  return parts.length > 0 ? Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100) : 0;
}

export function computeEnrichedSection(section, userData) {
  const s = ensureSectionEntry(userData, section.id);
  const sectionTasks = tasksData.find((t) => t.sectionId === section.id);
  const sectionQuiz = quizzesData.find((q) => q.sectionId === section.id);
  const totalTasks = sectionTasks ? sectionTasks.tasks.length : 0;
  const totalQuizzes = sectionQuiz ? sectionQuiz.questions.length : 0;
  const completedTasks = s.completedTasks.length;
  const summaryDone = s.summaryCompleted;
  const quizCompleted = s.quizBestScore > 0 ? 1 : 0;

  const parts = [];
  if (summaryDone) parts.push(1);
  if (totalTasks > 0) parts.push(completedTasks / totalTasks);
  if (totalQuizzes > 0) parts.push(quizCompleted);
  const progress = parts.length > 0 ? Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100) : 0;

  return {
    ...section,
    progress,
    tasksCompleted: completedTasks,
    taskCount: totalTasks,
    quizzesCompleted: s.quizBestScore > 0 ? totalQuizzes : 0,
    quizCount: totalQuizzes,
    summaryCompleted: summaryDone,
  };
}
