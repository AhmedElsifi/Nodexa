export default function Callout({ variant, children }) {
  const styles = {
    key: "bg-surface-container-low border-primary/30 border-l-4 border-l-primary",
    warning:
      "bg-surface-container-low border-secondary/30 border-l-4 border-l-secondary",
  };
  const icons = { key: "lightbulb", warning: "warning" };
  const textColors = { key: "text-primary", warning: "text-secondary" };

  return (
    <div
      className={`${styles[variant]} rounded-lg p-md mb-md shadow-[0_0_15px_rgba(119,221,109,0.05)] relative overflow-hidden`}
    >
      <h4
        className={`font-code text-label-sm leading-[16px] tracking-wider ${textColors[variant]} uppercase mb-xs flex items-center gap-1`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "16px" }}
        >
          {icons[variant]}
        </span>{" "}
        {variant === "key" ? "Key Concept" : "Warning"}
      </h4>
      <p className="font-sans text-body-md leading-[24px] text-on-surface">
        {children}
      </p>
    </div>
  );
}
