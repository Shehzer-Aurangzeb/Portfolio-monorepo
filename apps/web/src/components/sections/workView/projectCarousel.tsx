"use client";

import { useState } from "react";

import type { Project } from "@/content/projects";

const microClass =
  "font-mono text-micro tracking-micro uppercase text-brand-muted font-medium";

const arrowBase =
  "absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full inline-flex items-center justify-center text-brand-ink bg-brand-bg border border-brand-rule-strong font-mono text-[14px] opacity-100 md:opacity-0 transition-[opacity,background-color,color,transform] duration-[240ms] ease-(--ease-paper) z-[2] md:group-hover/carousel:opacity-100 hover:bg-brand-ink hover:text-brand-bg";

export type ProjectCarouselProps = {
  p: Project;
};

export default function ProjectCarousel({ p }: ProjectCarouselProps) {
  const slides =
    p.images && p.images.length > 0 ? p.images : (["a", "b", "c"] as const);
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <div className="relative w-full min-h-0 flex flex-col gap-2.5">
      <div className="group/carousel relative aspect-[4/3] flex-none md:aspect-auto md:flex-1 md:min-h-0 overflow-hidden border border-brand-rule bg-brand-bg">
        <div
          className="absolute inset-0 flex transition-transform duration-[640ms] ease-(--ease-stage) will-change-transform"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((_, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex-none w-full h-full relative flex items-center justify-center text-center px-6"
            >
              <span className={microClass}>
                Drop screenshot — {p.title} ({i + 1}/{slides.length})
              </span>
            </div>
          ))}
        </div>

        {slides.length > 1 && (
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
        {slides.length > 1 && (
          <div className="inline-flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={idx === i}
                className={`w-[6px] h-[6px] rounded-full transition-[background-color,transform] duration-[220ms] ease-(--ease-paper) p-0 cursor-pointer hover:bg-brand-muted ${
                  idx === i ? "bg-brand-ink scale-[1.18]" : "bg-brand-rule-strong"
                }`}
              />
            ))}
            <span
              className={`${microClass} ml-1.5 tabular-nums normal-case tracking-micro`}
            >
              {String(idx + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
