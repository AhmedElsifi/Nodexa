import ProgressBar from "../ui/ProgressBar";

export default function StatCard({ icon, label, value, sub, colSpan = "" }) {
  return (
    <div className={`bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between hover:border-primary/40 hover:shadow-[0_0_16px_rgba(119,221,109,0.1)] transition-all duration-300 ${colSpan}`}>
      <div>
        <h3 className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-base flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
          {label}
        </h3>
        <div className="font-headline-xl text-[48px] leading-[56px] tracking-tight font-bold text-on-surface mt-sm">
          {value}
          {sub && (
            <span className="text-on-surface-variant font-headline-md text-[24px] leading-[32px]">{sub}</span>
          )}
        </div>
      </div>
      <div className="mt-lg">
        <ProgressBar value={typeof value === "string" ? parseInt(value) : value} className="h-2" />
      </div>
    </div>
  );
}
