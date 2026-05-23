'use client';

import { useEffect, useState } from 'react';

import { HEADER_CONTENT } from '@/content/header';

export type ClockProps = {
  label: string | null;
};

export default function Clock({ label }: ClockProps) {
  // Render nothing until after mount — avoids SSR/CSR time mismatch
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    // Fire once on next tick so the first reading isn't a full second behind
    const first = setTimeout(() => setNow(new Date()), 0);
    return () => {
      clearInterval(id);
      clearTimeout(first);
    };
  }, []);

  const { location } = HEADER_CONTENT;
  const displayLabel = (label ?? location.label).toUpperCase();

  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    now
      ? now.toLocaleString(location.locale, {
          timeZone: location.timezone,
          ...opts,
        })
      : '';

  const time = fmt({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const date = fmt({ weekday: 'short', day: '2-digit', month: 'short' })
    .toUpperCase()
    .replace(/,/g, '');

  return (
    <div
      className="justify-self-center inline-flex max-md:flex-col items-center gap-2.5 max-md:gap-0 max-md:leading-tight whitespace-nowrap font-mono text-micro max-md:text-[9px] uppercase tracking-[0.16em] max-md:tracking-[0.12em] font-medium text-brand-muted"
      aria-label={time ? `Local time in Montréal: ${time}` : undefined}
    >
      <span className="max-md:hidden">{displayLabel}</span>
      <span aria-hidden className="opacity-50 max-md:hidden">
        ·
      </span>
      <span className="text-mono-xs max-md:text-[10px] tabular-nums tracking-[0.02em] text-brand-ink-soft">
        {time || '--:--:--'}
      </span>
      <span aria-hidden className="opacity-50 max-md:hidden">
        ·
      </span>
      <span>{date || '———'}</span>
    </div>
  );
}
