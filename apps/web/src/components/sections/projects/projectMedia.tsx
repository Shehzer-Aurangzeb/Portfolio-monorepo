import Image from 'next/image';

import { chunk } from '@/lib/chunk';
import { urlFor } from '@/sanity/image';
import type { Project, ProjectImage } from '@/sanity/types';

import Carousel from '@/components/ui/carousel';

export type ProjectMediaProps = {
  project: Project;
};

function Backdrop({ lqip }: { lqip: string | null }) {
  if (!lqip) return null;

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -inset-[10%] bg-cover bg-center blur-2xl scale-110 opacity-95"
        style={{ backgroundImage: `url(${lqip})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-bg/15 via-transparent to-bg/20" />
    </div>
  );
}

function Shot({ img, alt, width }: { img: ProjectImage; alt: string; width: number }) {
  return (
    <Image
      src={urlFor(img.src).width(width).quality(90).auto('format').url()}
      alt={img.alt || alt}
      width={img.width ?? width}
      height={img.height ?? Math.round(width * 0.5625)}
      className="relative w-full h-auto"
      unoptimized
    />
  );
}

export default function ProjectMedia({ project }: ProjectMediaProps) {
  if (project.images.length === 0) return null;

  const slides =
    project.imageLayout === 'mobile-grid'
      ? chunk(project.images, 3).map((group, g) => (
          <div key={g} className="grid grid-cols-3 items-start gap-2.5 p-2.5 w-full">
            {group.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg border border-border bg-surface"
              >
                <Backdrop lqip={img.lqip} />
                <Shot img={img} alt={`${project.title} screen ${g * 3 + i + 1}`} width={560} />
              </div>
            ))}
          </div>
        ))
      : project.images.map((img, i) => (
          <div key={i} className="relative w-full">
            <Backdrop lqip={img.lqip} />
            <Shot img={img} alt={`${project.title} screenshot ${i + 1}`} width={1760} />
          </div>
        ));

  return (
    <div className="overflow-hidden rounded-card border border-border bg-surface">
      <Carousel label={`${project.title} screenshots`} slides={slides} />
    </div>
  );
}
