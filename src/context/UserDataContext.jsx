import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { UserDataContext } from "./UserDataContext.js";
import {
  loadUserData,
  saveUserData,
  ensureSectionEntry,
} from "../utils/localStorage";
import {
  useOverallStats,
  computeEnrichedSection,
} from "../hooks/useOverallStats";

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(loadUserData);
  const userDataRef = useRef(userData);

  useEffect(() => {
    userDataRef.current = userData;
  }, [userData]);

  const setUserName = useCallback((name) => {
    const next = { ...userDataRef.current, userName: name };
    saveUserData(next);
    setUserData(next);
  }, []);

  const setLastVisitedSection = useCallback((sectionId) => {
    const prev = userDataRef.current;
    if (prev.lastVisitedSection === sectionId) return;
    const next = { ...prev, lastVisitedSection: sectionId };
    saveUserData(next);
    setUserData(next);
  }, []);

  const updateSummaryReadingPercent = useCallback((sectionId, percent) => {
    const prev = userDataRef.current;
    const next = { ...prev, sections: { ...prev.sections } };
    ensureSectionEntry(next, sectionId).summaryReadingPercent = Math.max(
      0,
      Math.min(100, Math.round(percent)),
    );
    saveUserData(next);
    setUserData(next);
  }, []);

  const markSummaryCompleted = useCallback((sectionId) => {
    const prev = userDataRef.current;
    const next = { ...prev, sections: { ...prev.sections } };
    const s = ensureSectionEntry(next, sectionId);
    s.summaryCompleted = true;
    s.summaryReadingPercent = 100;
    saveUserData(next);
    setUserData(next);
  }, []);

  const toggleTaskCompleted = useCallback((sectionId, taskId) => {
    const prev = userDataRef.current;
    const next = { ...prev, sections: { ...prev.sections } };
    const s = ensureSectionEntry(next, sectionId);
    const idx = s.completedTasks.indexOf(taskId);
    s.completedTasks =
      idx === -1
        ? [...s.completedTasks, taskId]
        : s.completedTasks.filter((t) => t !== taskId);
    saveUserData(next);
    setUserData(next);
  }, []);

  const recordQuizAttempt = useCallback(
    (sectionId, score, totalQuestions, correctIds, incorrectIds) => {
      const prev = userDataRef.current;
      const next = { ...prev, sections: { ...prev.sections } };
      const s = ensureSectionEntry(next, sectionId);
      s.quizAttempts += 1;
      s.quizLastScore = score;
      s.quizBestScore = Math.max(s.quizBestScore, score);
      s.correctAnswers = correctIds;
      s.incorrectAnswers = incorrectIds;
      saveUserData(next);
      setUserData(next);
    },
    [],
  );

  const getSectionUserState = useCallback(
    (sectionId) => ensureSectionEntry(userDataRef.current, sectionId),
    [],
  );

  const getEnrichedSection = useCallback(
    (section) => computeEnrichedSection(section, userDataRef.current),
    [],
  );

  const overallStats = useOverallStats(userData);

  const value = useMemo(
    () => ({
      userData,
      setUserName,
      setLastVisitedSection,
      updateSummaryReadingPercent,
      markSummaryCompleted,
      toggleTaskCompleted,
      recordQuizAttempt,
      getSectionUserState,
      getEnrichedSection,
      overallStats,
    }),
    [
      userData,
      setUserName,
      setLastVisitedSection,
      updateSummaryReadingPercent,
      markSummaryCompleted,
      toggleTaskCompleted,
      recordQuizAttempt,
      getSectionUserState,
      getEnrichedSection,
      overallStats,
    ],
  );

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}
