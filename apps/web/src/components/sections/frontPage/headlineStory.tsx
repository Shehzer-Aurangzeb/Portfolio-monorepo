'use client';

import { cn } from '@/lib/cn';
import { menuActions, useMenu } from '@/lib/useMenu';
import type { Project } from '@/sanity/types';
import { EDITORIAL_HEADLINES } from '@/content/editorial';
import Rule from '@/components/ui/rule';
import SectionMarker from '@/components/ui/sectionMarker';
import Byline from '@/components/ui/byline';
import Dateline from '@/components/ui/dateline';

export type HeadlineStoryProps = {
  project: Project;
  className?: string;
};

export default function HeadlineStory({ project, className }: HeadlineStoryProps) {
  const editorialHeadline = EDITORIAL_HEADLINES[project.id] ?? project.title.toUpperCase();

  return (
    <article className={cn('grid gap-5', className)}>
      <div className="flex items-center justify-between">
        <SectionMarker section="FEATURED" />
        <Dateline location="MONTREAL" year={project.year} />
      </div>

      <Rule variant="heavy" />

      <div className="grid gap-3 pt-1">
        <h2 className="font-serif text-headline-lg tracking-tight leading-headline text-brand-ink max-md:text-headline max-lg:text-headline font-medium">
          {editorialHeadline}
        </h2>

        <p className="font-serif text-deck leading-deck tracking-body text-brand-ink italic max-w-[60ch]">
          <em>{project.blurb}</em>
        </p>
      </div>

      <Rule variant="strong" />

      <div className="grid gap-4">
        <Byline items={project.stack.slice(0, 5)} />

        <p className="font-sans text-body leading-body tracking-body text-brand-ink-soft max-w-[65ch] text-pretty">
          {project.body}
        </p>
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-brand-rule">
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-micro tracking-micro uppercase text-brand-muted font-medium">
              Role
            </span>
            <span className="font-serif text-job-title text-brand-ink font-semibold">
              {project.role}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-micro tracking-micro uppercase text-brand-muted font-medium">
              Status
            </span>
            <span className="font-mono text-body-sm text-brand-accent font-semibold uppercase tracking-caps-sm">
              Live
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={menuActions.open}
          className="group inline-flex items-center gap-2 px-4 py-2 bg-brand-ink text-brand-bg font-mono text-byline tracking-byline uppercase font-medium hover:bg-brand-accent transition-colors duration-200"
        >
          <span>See all work</span>
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>
      </div>
    </article>
  );
}
