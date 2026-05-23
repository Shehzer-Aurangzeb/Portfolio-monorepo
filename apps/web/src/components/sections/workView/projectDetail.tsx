import type { Project } from '@/sanity/types';

import ProjectCarousel from '@/components/sections/workView/projectCarousel';

const microClass = 'font-mono text-micro tracking-micro uppercase text-brand-muted font-medium';

export type ProjectDetailProps = {
  p: Project;
};

export default function ProjectDetail({ p }: ProjectDetailProps) {
  const href = p.href ?? (p.url ? `https://${p.url}` : null);

  return (
    <article className="w-full flex flex-col gap-5 md:grid md:grid-rows-[minmax(280px,1fr)_auto] md:gap-6 md:min-h-full">
      <ProjectCarousel p={p} />

      <div className="grid gap-3.5 pt-[18px] border-t border-brand-rule-strong">
        <div className="flex justify-between items-center">
          <span className={microClass}>No.</span>
          <span className="font-mono text-mono-sm text-brand-ink-soft tracking-[0.04em]">
            {p.n} · {p.year}
          </span>
        </div>

        <h2 className="font-serif text-brand-ink leading-[0.96] tracking-snug text-[clamp(40px,11vw,64px)] md:text-[clamp(40px,4.4vw,72px)] -mt-[2px]">
          {p.title}
        </h2>

        <p className="font-serif italic text-brand-ink-soft tracking-body leading-[1.4] text-[16px] md:text-[clamp(15px,1.1vw,18px)]">
          <em className="italic">{p.blurb}</em>
        </p>

        <p className="font-sans text-brand-muted leading-[1.55] text-pretty text-[14px] md:text-body-sm tracking-[-0.003em]">
          {p.body}
        </p>

        <div className="grid grid-cols-[60px_1fr] gap-4 items-start pt-2.5 border-t border-brand-rule">
          <span className={microClass + ' pt-1'}>Stack</span>
          <ul className="flex flex-wrap gap-x-2 gap-y-1.5 p-0 m-0 list-none">
            {p.stack.map((s) => (
              <li
                key={s}
                className="font-mono text-[11px] py-1 px-2.5 border border-brand-rule rounded-full text-brand-ink-soft tracking-[0.02em] bg-transparent"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center pt-3.5 border-t border-brand-rule">
          <div className="flex flex-col gap-1">
            <span className={microClass}>Role</span>
            <span className="text-[13px] text-brand-ink-soft tracking-[0.04em]">{p.role}</span>
          </div>
          {href && p.url ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2.5 px-3.5 py-2.5 border border-brand-ink rounded-full text-brand-ink font-mono text-[12.5px] tracking-[0.005em] transition-colors duration-[280ms] ease-(--ease-paper) hover:bg-brand-ink hover:text-brand-bg"
            >
              <span>{p.url}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-[320ms] ease-(--ease-stage) group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
