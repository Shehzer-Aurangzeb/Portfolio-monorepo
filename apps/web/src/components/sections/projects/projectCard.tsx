'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Project as SanityProject } from '@/sanity/types';
import { urlFor } from '@/sanity/image';

type ProjectCardProps = {
  project: SanityProject;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectNumber = String(index + 1).padStart(2, '0');

  const totalSlides =
    project.imageLayout === 'carousel'
      ? project.images.length
      : Math.ceil(project.images.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <article>
      <div className="mb-[14px]">
        {project.imageLayout === 'carousel' ? (
          <div className="relative border border-border">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-350 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {project.images.map((img, i) => (
                  <div key={i} className="flex-[0_0_100%] relative aspect-video bg-[#1E1D1B]">
                    <Image
                      src={urlFor(img.src).width(1760).height(990).quality(90).url()}
                      alt={img.alt || `${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
            {project.images.length > 1 && (
              <div className="absolute bottom-0 right-0 flex items-stretch bg-bg/[0.88] border-t border-l border-border">
                <span className="flex items-center px-3 font-mono text-[11.5px] text-text-muted">
                  {currentSlide + 1} / {totalSlides}
                </span>
                <button
                  onClick={prevSlide}
                  className="w-[34px] h-[30px] bg-transparent border-0 border-l border-border text-text-secondary text-[13px] cursor-pointer hover:bg-border/10"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-[34px] h-[30px] bg-transparent border-0 border-l border-border text-text-secondary text-[13px] cursor-pointer hover:bg-border/10"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-350 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex-[0_0_100%] grid grid-cols-3 gap-[10px] p-px"
                  >
                    {project.images.slice(slideIndex * 3, slideIndex * 3 + 3).map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[9/18] bg-[#1E1D1B] border border-border"
                      >
                        <Image
                          src={urlFor(img.src).width(560).height(1120).quality(90).url()}
                          alt={img.alt || `${project.title} screenshot ${slideIndex * 3 + i + 1}`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {totalSlides > 1 && (
              <div className="absolute bottom-0 right-0 flex items-stretch bg-bg/[0.88] border-t border-l border-border">
                <span className="flex items-center px-3 font-mono text-[11.5px] text-text-muted">
                  {currentSlide + 1} / {totalSlides}
                </span>
                <button
                  onClick={prevSlide}
                  className="w-[34px] h-[30px] bg-transparent border-0 border-l border-border text-text-secondary text-[13px] cursor-pointer hover:bg-border/10"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-[34px] h-[30px] bg-transparent border-0 border-l border-border text-text-secondary text-[13px] cursor-pointer hover:bg-border/10"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-5 mb-[6px]">
        <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-text-primary">
          {projectNumber} &nbsp;{project.title}
        </h3>
        <span className="font-mono text-[12px] text-text-dim flex-none">
          {project.role} · {project.year}
        </span>
      </div>

      <p className="m-0 mb-[10px] text-[14px] leading-[1.65] text-[#BCBAB4]">{project.body}</p>

      <div className="font-mono text-[12.5px] text-text-dim">{project.stack.join(', ')}</div>

      {project.url && project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 font-mono text-[12.5px] text-text-primary border-b border-text-primary/30 pb-0.5 hover:border-text-primary transition-colors"
        >
          {project.url}
        </a>
      )}
    </article>
  );
}
