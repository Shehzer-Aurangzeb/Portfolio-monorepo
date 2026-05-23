'use client';

import HeroFoot from '@/components/sections/hero/heroFoot';
import { useMenu } from '@/lib/useMenu';
import type { Contact } from '@/sanity/types';

export type HeroProps = {
  contact: Contact | null;
};

const microClass = 'font-mono text-micro tracking-micro uppercase text-brand-muted font-medium';

export default function Hero({ contact }: HeroProps) {
  const { open } = useMenu();

  return (
    <section
      aria-labelledby="hero-title"
      aria-hidden={open}
      data-open={open}
      className="absolute inset-0 grid grid-rows-[auto_1fr_auto] px-14 pt-10 pb-8 max-md:px-7 max-md:pt-7 max-md:pb-6 transition-opacity ease-(--ease-paper) data-[open=true]:opacity-0 data-[open=true]:pointer-events-none data-[open=true]:duration-[240ms] data-[open=false]:duration-[480ms]"
    >
      <div className="flex justify-between items-center pb-6">
        <span className={microClass}>Portfolio · MMXXVI</span>
        <span className={microClass}>Montréal, Canada</span>
      </div>

      <div className="grid grid-cols-[1.05fr_1fr] items-center gap-16 py-4 max-md:grid-cols-1 max-md:gap-8">
        <div className="flex flex-col gap-[22px]">
          <div className="inline-flex items-center gap-3.5 text-brand-muted">
            <span aria-hidden="true" className="inline-block w-9 h-px bg-current opacity-50" />
            <span className={microClass + ' text-current'}>Software Engineer · Fullstack</span>
          </div>

          <h1
            id="hero-title"
            className="font-serif text-brand-ink leading-[0.92] tracking-tight text-[clamp(64px,10.2vw,168px)] max-sm:text-[clamp(54px,14vw,96px)]"
          >
            <span className="block">Shehzar</span>
            <span className="block italic -mt-2 pl-[0.18em]">
              <em className="italic">Aurangzeb.</em>
            </span>
          </h1>
        </div>

        <div className="grid grid-rows-[auto_auto] gap-[22px] self-end pb-[18px] max-w-[520px] max-md:pb-0 max-md:max-w-none">
          <span aria-hidden="true" className="block w-16 h-px bg-brand-ink" />
          <p className="font-sans text-brand-ink-soft tracking-body leading-[1.55] max-w-[44ch] text-pretty text-[clamp(14px,1.1vw,17px)]">
            Fullstack engineer based in <em className="font-serif text-brand-ink">Montréal</em>. I
            build production web and mobile apps, with a focus on real-time, AI-driven interfaces.
          </p>
        </div>
      </div>

      <HeroFoot contact={contact} />
    </section>
  );
}
