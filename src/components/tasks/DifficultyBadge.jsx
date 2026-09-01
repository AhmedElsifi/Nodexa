export default function DifficultyBadge({ difficulty }) {
  const colorMap = {
    Easy: "text-primary border-primary/20",
    Medium: "text-secondary-container border-secondary-container/20",
    Hard: "text-error border-error/20",
  };

  const dotColor = {
    Easy: "bg-primary",
    Medium: "bg-secondary-container",
    Hard: "bg-error",
  };

  return (
    <span
      className={`bg-[#1F2937] px-sm py-xs rounded-full font-code text-label-sm leading-[16px] tracking-wider border flex items-center gap-xs ${colorMap[difficulty] || colorMap.Easy}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${dotColor[difficulty] || dotColor.Easy}`}
      />{" "}
      {difficulty}
    </span>
  );
}
