import SearchResultItem from "./SearchResultItem";

const groupMeta = {
  sections: { label: "Sections", color: "text-primary" },
  tasks: { label: "Tasks", color: "text-tertiary" },
  quizzes: { label: "Quizzes", color: "text-secondary" },
  resources: { label: "Resources", color: "text-on-surface-variant" },
};

export default function SearchResults({ results, onClose }) {
  return (
    <div className="flex flex-col gap-lg">
      {Object.entries(results).map(([type, items]) => {
        if (items.length === 0) return null;
        const meta = groupMeta[type];
        return (
          <div key={type}>
            <h3
              className={`font-code text-label-sm leading-[16px] tracking-wider ${meta.color} uppercase mb-sm`}
            >
              {meta.label} ({items.length})
            </h3>
            <div className="flex flex-col gap-xs">
              {items.map((item) => (
                <SearchResultItem
                  key={item.id}
                  type={type}
                  item={item}
                  onClose={onClose}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
