import { Link } from "react-router-dom";

const colorMap = {
  sections: { icon: "book", color: "primary" },
  tasks: { icon: "code", color: "tertiary" },
  quizzes: { icon: "quiz", color: "secondary" },
  resources: { icon: "link", color: "on-surface-variant" },
};

export default function SearchResultItem({ type, item, onClose }) {
  const cfg = colorMap[type];

  if (type === "resources") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors group"
      >
        <span className={`material-symbols-outlined text-${cfg.color} text-[18px]`}>{cfg.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[14px] leading-[22px] text-on-surface group-hover:text-primary transition-colors truncate">{item.title}</p>
          <p className="font-sans text-[12px] leading-[16px] text-on-surface-variant truncate">{item.category}</p>
        </div>
      </a>
    );
  }

  const linkTo = type === "sections" ? `/sections/${item.id}` : `/sections/${item.sectionId}/${type}`;
  const label = type === "quizzes" ? item.question : item.title;
  const sub = type === "quizzes" ? item.sectionTitle : item.description;
  const sectionLabel = type === "sections" ? `Section ${item.id}` : `Section ${item.sectionId}`;

  return (
    <Link to={linkTo} onClick={onClose} className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors group">
      <span className={`material-symbols-outlined text-${cfg.color} text-[18px]`}>{cfg.icon}</span>
      <div className="flex-1 min-w-0">
        <p className={`font-sans text-[14px] leading-[22px] text-on-surface group-hover:text-${cfg.color} transition-colors truncate`}>{label}</p>
        <p className="font-sans text-[12px] leading-[16px] text-on-surface-variant truncate">{sub}</p>
      </div>
      <span className="font-code text-[12px] leading-[16px] text-on-surface-variant shrink-0">{sectionLabel}</span>
    </Link>
  );
}
