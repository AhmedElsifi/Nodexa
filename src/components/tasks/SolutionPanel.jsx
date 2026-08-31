export default function SolutionPanel({ text }) {
  return (
    <div className="mb-sm p-sm bg-surface-container rounded-lg border border-tertiary/20 relative z-10">
      <pre className="font-code text-[14px] leading-[22px] text-on-surface overflow-x-auto">
        {text}
      </pre>
    </div>
  );
}
