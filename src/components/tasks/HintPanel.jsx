export default function HintPanel({ text }) {
  return (
    <div className="mb-sm p-sm bg-surface-container rounded-lg border border-primary/20 relative z-10">
      <p className="font-sans text-[14px] leading-[22px] text-on-surface-variant">
        {text}
      </p>
    </div>
  );
}
