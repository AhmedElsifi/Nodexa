import { useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import sectionsData from "../../data/sections.json";
import sectionContent from "../../data/sectionContent.json";
import MarkdownRenderer from "../../components/ui/MarkdownRenderer";
import { useUserData } from "../../hooks/useUserData";

export default function SectionSummary() {
  const { id } = useParams();
  const section = sectionsData.find((s) => s.id === id);
  const contentMeta = sectionContent.find((s) => s.sectionId === id);
  const {
    getSectionUserState,
    markSummaryCompleted,
    updateSummaryReadingPercent,
    setLastVisitedSection,
  } = useUserData();

  const userState = getSectionUserState(id);
  const completed = userState.summaryCompleted;

  useEffect(() => {
    if (id) setLastVisitedSection(id);
  }, [id, setLastVisitedSection]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));
    updateSummaryReadingPercent(id, percent);
  }, [id, updateSummaryReadingPercent]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!section || !contentMeta) {
    return (
      <main className="max-w-[1280px] mx-auto w-full px-md pb-xl">
        <div className="text-center py-xl">
          <h1 className="font-headline-xl text-[48px] leading-[56px] font-bold text-on-surface mb-md">
            Summary Not Found
          </h1>
          <Link to="/sections" className="text-primary hover:text-primary-fixed">
            Back to Sections
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md pb-xl pt-lg">
      {/* Article Content */}
      <article className="max-w-fit mx-auto">
        <header className="mb-lg">
          <div className="flex items-center gap-xs mb-sm">
            <span className="px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-code text-[12px] leading-[16px] tracking-wider border border-outline-variant/50">
              Section {section.id}
            </span>
            <span className="text-on-surface-variant">&bull;</span>
            <span className="text-on-surface-variant font-code text-[12px] leading-[16px] tracking-wider">
              {contentMeta.readTime}
            </span>
          </div>
          <h1 className="font-headline-xl text-[48px] leading-[56px] tracking-tight font-bold text-on-surface mb-md">
            {contentMeta.title}
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant">
            Understanding the core concepts, patterns, and best practices covered
            in this section.
          </p>
        </header>

        <MarkdownRenderer filePath={contentMeta.file} />

        {/* Completion Action */}
        <div className="mt-xl pt-lg border-t border-outline-variant flex flex-col items-center gap-md">
          <button
            onClick={() => {
              if (!completed) markSummaryCompleted(id);
            }}
            className={`px-xl py-sm rounded-lg font-headline-md text-[24px] leading-[32px] font-semibold flex items-center gap-sm transition-all duration-200 ${
              completed
                ? "bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(119,221,109,0.15)]"
                : "bg-primary text-on-primary-container hover:bg-primary-container shadow-[0_0_20px_rgba(119,221,109,0.15)] hover:shadow-[0_0_25px_rgba(119,221,109,0.25)] hover:-translate-y-1 active:translate-y-0"
            }`}
          >
            <span className="material-symbols-outlined">check_circle</span>
            {completed ? "Completed" : "Mark as Completed"}
          </button>
          {completed && (
            <Link
              to={`/sections/${id}/tasks`}
              className="px-lg py-sm bg-tertiary/10 border border-tertiary/30 text-tertiary font-code text-[12px] leading-[16px] tracking-wider rounded-lg hover:bg-tertiary/20 hover:border-tertiary/50 transition-all flex items-center gap-xs"
            >
              Next: Tasks
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          )}
        </div>
      </article>
    </main>
  );
}
