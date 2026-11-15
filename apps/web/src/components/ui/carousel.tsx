'use client';

import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

export type CarouselProps = {
  label: string;
  slides: ReactNode[];
};

const controlButton =
  'grid place-items-center w-9 h-9 max-md:w-11 max-md:h-11 rounded-full text-[13px] text-text-secondary transition-colors duration-200 hover:bg-hover hover:text-text-primary';

export default function Carousel({ label, slides }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const goTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: ((target + count) % count) * track.clientWidth });
  };

  const syncIndex = () => {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="relative">
      <ul
        ref={trackRef}
        onScroll={syncIndex}
        className="flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <li
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className="relative flex flex-[0_0_100%] items-center snap-start"
          >
            {slide}
          </li>
        ))}
      </ul>

      {count > 1 ? (
        <div className="absolute bottom-3 right-3 flex items-center gap-0.5 p-1 rounded-full bg-bg/80 backdrop-blur-md border border-border">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className={controlButton}
          >
            ←
          </button>
          <span
            aria-live="polite"
            className="px-1.5 font-mono text-[11.5px] text-text-muted tabular-nums"
          >
            {index + 1} / {count}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className={controlButton}
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}
