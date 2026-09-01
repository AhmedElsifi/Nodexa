import ProgressBar from "../ui/ProgressBar";

export default function SectionProgressRow({ section }) {
  const color = section.progress >= 50 ? "primary" : "secondary";
  return (
    <div className="bg-surface border border-outline-variant rounded-lg p-sm hover:border-primary/40 transition-colors">
      <div className="flex justify-between items-end mb-xs">
        <div>
          <span className="font-code text-label-sm leading-[16px] tracking-wider text-on-surface-variant uppercase block mb-1">
            Section {section.id}
          </span>
          <h4 className="font-sans text-body-lg leading-7 text-on-surface font-medium">
            {section.title}
          </h4>
        </div>
        <span
          className={`font-sans text-body-md leading-[24px] font-semibold text-${color}`}
        >
          {section.progress}%
        </span>
      </div>
      <ProgressBar value={section.progress} color={color} className="h-2" />
    </div>
  );
}
