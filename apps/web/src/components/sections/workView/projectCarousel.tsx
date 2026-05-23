'use client';

import { useState } from 'react';

import { urlFor } from '@/sanity/image';
import type { Project } from '@/sanity/types';

const microClass = 'font-mono text-micro tracking-micro uppercase text-brand-muted font-medium';

const arrowBase =
  'absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full inline-flex items-center justify-center text-brand-ink bg-brand-bg border border-brand-rule-strong font-mono text-[14px] opacity-100 md:opacity-0 transition-[opacity,background-color,color,transform] duration-[240ms] ease-(--ease-paper) z-[2] md:group-hover/carousel:opacity-100 hover:bg-brand-ink hover:text-brand-bg';

export type ProjectCarouselProps = {
  p: Project;
};

export default function ProjectCarousel({ p }: ProjectCarouselProps) {
  const hasImages = p.images.length > 0;
  const slideCount = hasImages ? p.images.length : 3;
  const [idx, setIdx] = useState(0);
  const isPortrait = p.category.toLowerCase() === 'mobile';

  const prev = () => setIdx((i) => (i - 1 + slideCount) % slideCount);
  const next = () => setIdx((i) => (i + 1) % slideCount);

  return (
    <div className="relative w-full min-h-0 flex flex-col gap-2.5">
      <div
        className={`group/carousel relative overflow-hidden border border-brand-rule bg-brand-bg ${
          isPortrait
            ? 'mx-auto h-[min(78vh,820px)] aspect-[9/19.5] flex-none'
            : 'aspect-[4/3] flex-none md:aspect-auto md:flex-1 md:min-h-0'
        }`}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-[640ms] ease-(--ease-stage) will-change-transform"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {hasImages
            ? p.images.map((img, i) => (
                <div key={`${p.id}-${i}`} className="flex-none w-full h-full relative">
                  <img
                    src={urlFor(img.src).width(1600).fit('max').auto('format').url()}
                    alt={img.alt ?? `${p.title} — image ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              ))
            : Array.from({ length: slideCount }).map((_, i) => (
                <div
                  key={`${p.id}-placeholder-${i}`}
                  className="flex-none w-full h-full relative flex items-center justify-center text-center px-6"
                >
                  <span className={microClass}>
                    Drop screenshot — {p.title} ({i + 1}/{slideCount})
                  </span>
                </div>
              ))}
        </div>

        {slideCount > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className={`${arrowBase} left-3 hover:-translate-x-[2px] hover:translate-y-[calc(-50%-0px)]`}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className={`${arrowBase} right-3 hover:translate-x-[2px] hover:translate-y-[calc(-50%-0px)]`}
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        )}
      </div>

      <div className="flex justify-between items-center">
        <span className={microClass}>
          Fig. {p.n} &nbsp;·&nbsp; {p.category}
        </span>
        {slideCount > 1 && (
          <div className="inline-flex items-center gap-2.5">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={idx === i}
                className={`w-[6px] h-[6px] rounded-full transition-[background-color,transform] duration-[220ms] ease-(--ease-paper) p-0 cursor-pointer hover:bg-brand-muted ${
                  idx === i ? 'bg-brand-ink scale-[1.18]' : 'bg-brand-rule-strong'
                }`}
              />
            ))}
            <span className={`${microClass} ml-1.5 tabular-nums normal-case tracking-micro`}>
              {String(idx + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
