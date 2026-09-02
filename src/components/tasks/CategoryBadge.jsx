export default function CategoryBadge({ category }) {
  const colorMap = {
    ITI: "text-tertiary border-tertiary/20",
    "Non-ITI": "text-secondary-container border-secondary-container/20",
  };

  const dotColor = {
    ITI: "bg-tertiary",
    "Non-ITI": "bg-secondary-container",
  };

  return (
    <span
      className={`bg-[#1F2937] px-sm py-xs rounded-full font-code text-label-sm leading-[16px] tracking-wider border flex items-center gap-xs ${colorMap[category] || colorMap["Non-ITI"]}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${dotColor[category] || dotColor["Non-ITI"]}`}
      />{" "}
      {category}
    </span>
  );
}
