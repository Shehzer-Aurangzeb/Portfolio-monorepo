export type SectionHeadingProps = {
  id?: string;
  title: string;
  meta?: string;
};

export default function SectionHeading({ id, title, meta }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-border pt-5 mb-6">
      <h2 id={id} className="font-mono text-[12px] tracking-wide text-text-dim">
        {title}
      </h2>
      {meta ? (
        <span className="font-mono text-[12px] text-text-dim tabular-nums">{meta}</span>
      ) : null}
    </div>
  );
}
