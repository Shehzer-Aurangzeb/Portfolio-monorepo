'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export type ProjectRowProps = {
  id: string;
  number: string;
  title: string;
  meta: string;
  year: string;
  children: ReactNode;
};

export default function ProjectRow({ id, number, title, meta, year, children }: ProjectRowProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  // index links target collapsed rows; open the row when its hash is the target
  useEffect(() => {
    const openIfTargeted = () => {
      if (ref.current && window.location.hash === `#${id}`) ref.current.open = true;
    };
    openIfTargeted();
    window.addEventListener('hashchange', openIfTargeted);
    return () => window.removeEventListener('hashchange', openIfTargeted);
  }, [id]);

  return (
    <details ref={ref} id={id} className="disclosure group border-b border-border">
      <summary className="grid grid-cols-[28px_1fr_auto_20px] items-baseline gap-3 py-4 min-h-11 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-mono text-[12px] text-text-dim tabular-nums">{number}</span>
        <span className="min-w-0">
          <span className="text-[15.5px] text-text-primary group-hover:text-text-secondary transition-colors">
            {title}
          </span>
          <span className="block font-mono text-[12px] text-text-dim mt-0.5 truncate">{meta}</span>
        </span>
        <span className="font-mono text-[12px] text-text-dim whitespace-nowrap">{year}</span>
        <span
          aria-hidden
          className="text-text-dim text-[16px] leading-none transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pt-2 pb-10 grid gap-6">{children}</div>
    </details>
  );
}
