const STORAGE_KEY = "nodexa_user_data";

function getDefaultData() {
  return {
    userName: "",
    lastVisitedSection: "",
    sections: {},
  };
}

function getSectionData() {
  return {
    summaryReadingPercent: 0,
    summaryCompleted: false,
    completedTasks: [],
    quizAttempts: 0,
    quizLastScore: 0,
    quizBestScore: 0,
    correctAnswers: [],
    incorrectAnswers: [],
  };
}

export function loadUserData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return getDefaultData();
    return {
      ...getDefaultData(),
      ...parsed,
      sections: parsed.sections || {},
    };
  } catch {
    return getDefaultData();
  }
}

export function saveUserData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable — silently fail
  }
}

export function ensureSectionEntry(data, sectionId) {
  if (!data.sections[sectionId]) {
    data.sections[sectionId] = getSectionData(sectionId);
  }
  return data.sections[sectionId];
}
