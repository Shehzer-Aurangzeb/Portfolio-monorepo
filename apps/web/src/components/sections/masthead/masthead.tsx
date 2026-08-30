'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/cn';
import { menuActions, useMenu } from '@/lib/useMenu';
import { HEADER_CONTENT } from '@/content/header';
import { MASTHEAD } from '@/content/editorial';
import Rule from '@/components/ui/rule';
import ThemeSwitcher from '@/components/ui/themeSwitcher';

export type MastheadProps = {
  projectCount: number;
};

export default function Masthead({ projectCount }: MastheadProps) {
  const { open } = useMenu();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    const first = setTimeout(() => setNow(new Date()), 0);
    return () => {
      clearInterval(id);
      clearTimeout(first);
    };
  }, []);

  const { location } = HEADER_CONTENT;

  const formatDate = () => {
    if (!now) return '———';
    return now
      .toLocaleString(location.locale, {
        timeZone: location.timezone,
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .toUpperCase()
      .replace(/,/g, '');
  };

  return (
    <header className="relative z-30 flex-none bg-brand-bg transition-[background-color] duration-600 ease-(--ease-paper)">
      <div className="px-8 max-md:px-5">
        <div className="flex items-center justify-between py-3 max-md:py-2">
          <button
            type="button"
            onClick={menuActions.toggle}
            aria-label={open ? 'Close index' : 'Open index'}
            aria-expanded={open}
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-ink transition-colors duration-200"
          >
            <span className="font-mono text-[10px] tracking-byline uppercase font-medium">
              {open ? '✕ Close' : '☰ Index'}
            </span>
            {!open && (
              <span className="font-mono text-[10px] tracking-byline uppercase text-brand-muted">
                ({projectCount})
              </span>
            )}
          </button>

          <ThemeSwitcher />
        </div>

        <Rule variant="strong" />

        <div className="py-5 max-md:py-4 text-center">
          <h1 className="font-serif text-masthead-lg tracking-[0.38em] uppercase font-bold text-brand-ink max-md:text-masthead max-md:tracking-masthead">
            {MASTHEAD.title}
          </h1>
        </div>

        <Rule variant="double" />

        <div className="grid grid-cols-3 items-center py-2.5 max-md:py-2 max-md:grid-cols-1 max-md:gap-1 max-md:text-center">
          <span className="font-mono text-[10px] tracking-byline uppercase text-brand-muted font-medium max-md:order-2">
            {MASTHEAD.tagline}
          </span>

          <span className="font-mono text-[10px] tracking-byline uppercase text-brand-ink-soft font-medium justify-self-center max-md:order-1">
            {MASTHEAD.location} · {formatDate()}
          </span>

          <span className="font-mono text-[10px] tracking-byline uppercase text-brand-muted font-medium justify-self-end max-md:order-3 max-md:justify-self-center">
            Vol. I No. {projectCount}
          </span>
        </div>

        <Rule />
      </div>
    </header>
  );
}
