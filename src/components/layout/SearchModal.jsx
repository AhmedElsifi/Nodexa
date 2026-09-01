import { useState, useEffect, useRef, useMemo } from "react";
import sectionsData from "../../data/sections.json";
import tasksData from "../../data/tasks.json";
import quizzesData from "../../data/quizzes.json";
import resourcesData from "../../data/resources.json";
import SearchResults from "../search/SearchResults";

function match(query, text) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const prevOpen = useRef(false);

  useEffect(() => {
    if (open && !prevOpen.current) inputRef.current?.focus();
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return { sections: [], tasks: [], quizzes: [], resources: [] };
    const sections = sectionsData.filter(
      (s) =>
        match(q, s.title) ||
        match(q, s.description) ||
        match(q, s.fullDescription) ||
        match(q, s.category),
    );
    const tasks = [];
    for (const sec of tasksData)
      for (const task of sec.tasks)
        if (match(q, task.title) || match(q, task.description))
          tasks.push({ ...task, sectionId: sec.sectionId });
    const quizzes = [];
    for (const sec of quizzesData)
      for (const question of sec.questions)
        if (
          match(q, question.question) ||
          question.options.some((o) => match(q, o))
        )
          quizzes.push({
            ...question,
            sectionId: sec.sectionId,
            sectionTitle: sec.sectionTitle,
          });
    const resources = resourcesData.filter(
      (r) =>
        match(q, r.title) || match(q, r.description) || match(q, r.category),
    );
    return { sections, tasks, quizzes, resources };
  }, [query]);

  const hasResults =
    results.sections.length ||
    results.tasks.length ||
    results.quizzes.length ||
    results.resources.length;
  const hasQuery = query.trim().length > 0;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-90 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-24 px-md max-md:pt-0 max-md:px-0"
      onClick={onClose}
    >
      <div
        className="w-135 max-md:w-full max-md:h-full max-md:rounded-none bg-surface border border-outline-variant max-md:border-0 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-sm px-md border-b border-outline-variant shrink-0">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
            search
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, tasks, quizzes, resources..."
            className="flex-1 py-md bg-transparent font-sans text-body-md leading-[24px] text-on-surface placeholder:text-on-surface-variant/50 outline-none"
          />
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-md">
          {!hasQuery && (
            <p className="font-sans text-code-block leading-5.5 text-on-surface-variant text-center py-lg">
              Type to search across all content...
            </p>
          )}
          {hasQuery && !hasResults && (
            <p className="font-sans text-code-block leading-5.5 text-on-surface-variant text-center py-lg">
              No results found for &quot;{query}&quot;
            </p>
          )}
          {hasQuery && hasResults && (
            <SearchResults results={results} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
