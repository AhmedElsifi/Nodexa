export default function ProgressBar({
  value,
  color = "primary",
  className = "",
}) {
  const colorMap = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    error: "bg-error",
  };

  return (
    <div
      className={`w-full bg-surface-container-high rounded-full overflow-hidden ${className}`}
    >
      <div
        className={`${colorMap[color] || colorMap.primary} h-full rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
