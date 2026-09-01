export function KeyTakeaway({
  stat,
  label,
  comparisonStat,
  comparisonLabel,
  note,
}: {
  stat: string;
  label: string;
  comparisonStat: string;
  comparisonLabel: string;
  note: string;
}) {
  return (
    <div className="border border-stone-light rounded-lg overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-stone-light">
        <div className="p-5 md:p-6">
          <div className="font-display font-bold text-3xl md:text-4xl text-signal">
            {stat}
          </div>
          <div className="font-body text-sm text-stone mt-1">{label}</div>
        </div>
        <div className="p-5 md:p-6">
          <div className="font-display font-bold text-3xl md:text-4xl text-ink">
            {comparisonStat}
          </div>
          <div className="font-body text-sm text-stone mt-1">{comparisonLabel}</div>
        </div>
      </div>
      <p className="font-body text-sm text-stone leading-relaxed p-5 md:p-6 border-t border-stone-light bg-ink/[0.02]">
        {note}
      </p>
    </div>
  );
}
