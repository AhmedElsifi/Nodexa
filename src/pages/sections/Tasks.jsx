import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import tasksData from "../../data/tasks.json";
import { useUserData } from "../../hooks/useUserData";
import TaskCard from "../../components/tasks/TaskCard";
import FilterPills from "../../components/ui/FilterPills";

export default function Tasks() {
  const { id } = useParams();
  const sectionTasks = tasksData.find((t) => t.sectionId === id);
  const { getSectionUserState, toggleTaskCompleted, setLastVisitedSection } = useUserData();
  const [showHint, setShowHint] = useState({});
  const [showSolution, setShowSolution] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "ITI", "Non-ITI"];

  const userState = getSectionUserState(id);

  useEffect(() => {
    if (id) setLastVisitedSection(id);
  }, [id, setLastVisitedSection]);

  if (!sectionTasks) {
    return (
      <main className="max-w-[1280px] mx-auto w-full px-md pb-xl">
        <div className="text-center py-xl">
          <h1 className="font-headline-xl text-[48px] leading-[56px] font-bold text-on-surface mb-md">
            Tasks Not Found
          </h1>
          <Link to="/sections" className="text-primary hover:text-primary-fixed">
            Back to Sections
          </Link>
        </div>
      </main>
    );
  }

  const toggleHint = (taskId) => {
    setShowHint((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const toggleSolution = (taskId) => {
    setShowSolution((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <main className="max-w-[1280px] mx-auto w-full px-md py-xl">
      <header className="mb-xl">
        <div className="flex items-center gap-xs mb-sm">
          <Link
            to={`/sections/${id}`}
            className="text-primary hover:text-primary-fixed transition-colors font-code text-[12px] leading-[16px] tracking-wider"
          >
            Section {id}
          </Link>
          <span className="text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
          </span>
          <span className="text-on-surface-variant font-code text-[12px] leading-[16px] tracking-wider">
            Tasks
          </span>
        </div>
        <h1 className="font-headline-xl text-[48px] leading-[56px] tracking-tight font-bold text-on-surface mb-xs">
          Practical Challenges
        </h1>
        <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-fit">
          Apply your knowledge with hands-on tasks. Complete these challenges to
          solidify your understanding of core Node.js concepts.
        </p>
      </header>

      <div className="mb-md">
        <FilterPills
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
        {sectionTasks.tasks
          .filter((task) => activeCategory === "All" || task.category === activeCategory)
          .map((task) => {
          const isCompleted = userState.completedTasks.includes(task.id);
          const isHintVisible = showHint[task.id];
          const isSolutionVisible = showSolution[task.id];

          return (
            <TaskCard
              key={task.id}
              task={task}
              sectionId={id}
              isCompleted={isCompleted}
              isHintVisible={isHintVisible}
              isSolutionVisible={isSolutionVisible}
              onToggleComplete={() => toggleTaskCompleted(id, task.id)}
              onToggleHint={() => toggleHint(task.id)}
              onToggleSolution={() => toggleSolution(task.id)}
            />
          );
        })}
      </div>

      {userState.completedTasks.length === sectionTasks.tasks.length && (
        <div className="mt-xl pt-lg border-t border-outline-variant flex justify-center">
          <Link
            to={`/sections/${id}/quiz`}
            className="px-lg py-sm bg-secondary/10 border border-secondary/30 text-secondary font-code text-[12px] leading-[16px] tracking-wider rounded-lg hover:bg-secondary/20 hover:border-secondary/50 transition-all flex items-center gap-xs"
          >
            Next: Quiz
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
      )}
    </main>
  );
}
