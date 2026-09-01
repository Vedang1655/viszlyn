export function ChartHeader({
  title,
  source,
}: {
  title: string;
  source: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
      <h3 className="font-display font-semibold text-base md:text-lg text-ink">
        {title}
      </h3>
      <span className="font-data text-[11px] text-stone border border-stone-light rounded-full px-2.5 py-1 shrink-0">
        Source: {source}
      </span>
    </div>
  );
}
